(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65520"], {
        981112: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                stageAttachmentFiles: function() {
                    return _
                },
                default: function() {
                    return a
                }
            }), i("808653"), i("222007"), i("70102");
            var a, s = i("811022"),
                r = i("994440"),
                n = i("282928"),
                l = i("142852"),
                o = i("402752"),
                d = i("572868"),
                c = i("49111"),
                h = i("894488"),
                u = i("782340");
            let f = new s.default("CloudUploaderBase.tsx");
            async function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    a = e.map(e => new Promise((a, s) => {
                        switch (e.status) {
                            case n.CloudUploadStatus.NOT_STARTED:
                                e.upload();
                                break;
                            case n.CloudUploadStatus.COMPLETED:
                                a("complete");
                                break;
                            case n.CloudUploadStatus.ERROR:
                                t && e.error !== c.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : s(Error("File failed to upload"));
                                break;
                            case n.CloudUploadStatus.CANCELED:
                                s(Error("Upload is canceled"))
                        }
                        e.on("complete", () => {
                            a("complete")
                        }), e.on("error", () => {
                            s(Error("File ".concat(e.id, " failed to upload")))
                        }), e.on("progress", (e, t) => {
                            null == i || i(e, t)
                        })
                    }));
                await Promise.all(a)
            }
            a = class extends d.default {
                _fileSize() {
                    return this.files.reduce((e, t) => {
                        var i;
                        return e += null !== (i = t.currentSize) && void 0 !== i ? i : 0
                    }, 0)
                }
                async compressAndCheckFileSize() {
                    var e, t;
                    let i = (0, l.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
                    return this.files.length > i.getMaxAttachmentsCount() ? (f.log("Too many attachments for ".concat(this.id)), this._handleError({
                        code: c.AbortCodes.TOO_MANY_ATTACHMENTS
                    }), !1) : !(this._fileSize() > i.getMaxTotalAttachmentSize()) || (this._handleError({
                        code: c.AbortCodes.ENTITY_TOO_LARGE,
                        reason: {
                            type: h.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
                        }
                    }), !1)
                }
                _filesTooLarge() {
                    return this.files.some(e => e.error === c.AbortCodes.ENTITY_TOO_LARGE)
                }
                setUploadingTextForUI() {
                    let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : u.default.Messages.UPLOADING_FILES.format({
                            count: this.files.length
                        }),
                        t = this.files.some(e => e.isImage),
                        i = this.files.some(e => e.isVideo),
                        a = this._fileSize();
                    f.log("setUploadingTextForUI - total content: ".concat(a, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
                        ...this._file,
                        totalPostCompressionSize: a,
                        currentSize: a,
                        name: e,
                        hasVideo: i,
                        hasImage: t,
                        attachmentsCount: this.files.length,
                        items: this.files
                    }
                }
                _recomputeProgress() {
                    let {
                        loaded: e,
                        total: t
                    } = this._recomputeProgressTotal(), i = this._recomputeProgressByFile();
                    this._handleProgress(e, t, i)
                }
                _recomputeProgressTotal() {
                    let e = this._fileSize(),
                        t = this.files.reduce((e, t) => {
                            var i;
                            return e += null !== (i = t.loaded) && void 0 !== i ? i : 0
                        }, 0);
                    return {
                        loaded: t,
                        total: e
                    }
                }
                _recomputeProgressByFile() {
                    let e = {};
                    return this.files.forEach(t => {
                        e[t.id] = (0, o.calculateProgress)(t.loaded, t.currentSize)
                    }), e
                }
                cancel() {
                    f.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(e => e.cancel()), this._handleComplete())
                }
                async cancelItem(e) {
                    f.log("Cancel called for ".concat(this.id, " for item ").concat(e));
                    let t = this.files.find(t => t.id === e);
                    if (null == t || t.status === n.CloudUploadStatus.CANCELED) return;
                    let i = this.files.indexOf(t);
                    this.files = [...this.files.slice(0, i), ...this.files.slice(i + 1)], this._file = {
                        ...this._file,
                        items: this.files
                    }, await (0, r.cancelGetAttachmentFile)(t), t.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
                }
                failed() {
                    return this.files.some(e => e.status === n.CloudUploadStatus.ERROR)
                }
                _remainingUploadCount() {
                    let e = this.files;
                    return e.length - e.filter(e => e.status === n.CloudUploadStatus.COMPLETED).length
                }
                clear() {
                    this.cancel(), this.files = []
                }
                constructor(...e) {
                    super(...e), this.files = []
                }
            }
        },
        572868: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            }), i("222007"), i("70102");
            var a, s = i("44170"),
                r = i("917351"),
                n = i.n(r),
                l = i("605250"),
                o = i("402752"),
                d = i("894488");
            let c = new l.default("UploaderBase.tsx");
            a = class extends s.EventEmitter {
                _addAttachmentsToPayload(e, t, i) {
                    let a = {
                            ...e
                        },
                        s = [...n.get(a, t, []), ...i];
                    return n.set(a, t, s)
                }
                clearProcessingMessageInterval() {
                    null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), this.processingMessageChangeInterval = void 0)
                }
                cancel() {
                    c.log("cancel() for ".concat(this.id)), this._aborted = !0, null != this._cancel && this._cancel(), this._handleComplete()
                }
                cancelItem(e) {
                    throw Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
                }
                upload(e, t, i) {
                    if (null != this._cancel) throw Error("Uploader.upload(...): An upload is already in progress.");
                    this._lastUpdate = Date.now(), this._loaded = 0, this._file = {
                        id: this.id,
                        name: e.name,
                        currentSize: 0,
                        totalPreCompressionSize: 0,
                        compressionProgress: 0,
                        progress: 0,
                        rate: 0,
                        hasImage: !1,
                        hasVideo: !1,
                        attachmentsCount: 0,
                        draftContent: null == t ? void 0 : t.content,
                        channelId: null == t ? void 0 : t.channel_id,
                        items: i
                    }
                }
                constructor(e, t = "POST", i) {
                    var a;
                    super(), this._token = "", this._lastUpdate = 0, this._loaded = 0, this._aborted = !1, this._errored = !1, this._raiseEndpointErrors = !1, this.alreadyStarted = !1, this._handleStart = e => {
                        this._cancel = e, !this.alreadyStarted && this.emit("start", this._file), this.alreadyStarted = !0
                    }, this._handleProgress = (e, t, i) => {
                        let a = Date.now(),
                            s = (0, o.calculateProgress)(e, t),
                            r = Math.floor((e - this._loaded) / ((a - this._lastUpdate) / 1e3));
                        if (null != i) {
                            var n;
                            null === (n = this._file.items) || void 0 === n || n.forEach(e => {
                                e.item.progress = i[e.id]
                            })
                        }
                        this._lastUpdate = a, this._loaded = e, this._file = {
                            ...this._file,
                            currentSize: t,
                            progress: s,
                            rate: r
                        }, this.emit("progress", this._file)
                    }, this._handleException = e => {
                        this._handleError({
                            reason: {
                                type: d.FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN,
                                msg: e.toString()
                            }
                        })
                    }, this._handleAborted = () => {
                        this.clearProcessingMessageInterval()
                    }, this._handleError = e => {
                        let {
                            code: t,
                            reason: i,
                            body: a
                        } = e;
                        this.clearProcessingMessageInterval(), !this._aborted && (this._errored = !0, c.log("_handleError: ".concat(t, " (").concat(JSON.stringify(i), ") for ").concat(this.id)), this.emit("error", this._file, t, a, i), this.removeAllListeners())
                    }, this._handleComplete = e => {
                        this.clearProcessingMessageInterval(), c.log("_handleComplete for ".concat(this.id)), this.emit("complete", this._file, e), this.removeAllListeners()
                    }, this.id = n.uniqueId("Uploader"), this._url = e, this._method = t, this._raiseEndpointErrors = null !== (a = null == i ? void 0 : i.raiseEndpointErrors) && void 0 !== a && a
                }
            }
        },
        478272: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var a = i("37983");
            i("884691");
            var s = i("77078"),
                r = i("974889"),
                n = i("954016"),
                l = i("49111");

            function o(e) {
                let {
                    channel: t,
                    guildId: o,
                    locationObject: d,
                    openInPopout: c,
                    initialSelectedApplicationId: h,
                    initialSlide: u = n.ActivityShelfSlides.DIRECTORY,
                    enableSelectedTextChannelInvite: f = !1,
                    analyticsLocations: _
                } = e;
                c && (0, r.default)(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
                let p = c ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT;
                return (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("605455").then(i.bind(i, "605455"));
                    return i => (0, a.jsx)(e, {
                        ...i,
                        channel: t,
                        guildId: o,
                        locationObject: d,
                        initialSlide: u,
                        initialSelectedApplicationId: h,
                        enableSelectedTextChannelInvite: f,
                        analyticsLocations: _
                    })
                }, {
                    modalKey: n.ACTIVITY_SHELF_WEB_MODAL_KEY,
                    contextKey: p
                })
            }
        },
        166960: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var a = i("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-05_referral_trials_birthday_moment",
                label: "Referral Trials Birthday Moment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Users will see the birthday moment referral trial UX",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var r = s
        },
        1607: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return r
                }
            });
            var a = i("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-02_referral_trials",
                label: "Referral Trials",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Nitro users can send a Nitro trial offer to another user.",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var r = s
        },
        967241: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                openThreadSidebarForViewing: function() {
                    return A
                },
                openThreadSidebarForCreating: function() {
                    return v
                },
                closeThreadSidebar: function() {
                    return O
                },
                closeAndClearThreadSidebar: function() {
                    return y
                }
            });
            var a = i("627445"),
                s = i.n(a),
                r = i("917351"),
                n = i.n(r),
                l = i("913144"),
                o = i("295426"),
                d = i("244201"),
                c = i("716241"),
                h = i("565298"),
                u = i("393414"),
                f = i("144491"),
                _ = i("845579"),
                p = i("474643"),
                C = i("18494"),
                m = i("800762"),
                g = i("659500"),
                E = i("648564"),
                T = i("49111"),
                S = i("724210");

            function A(e, t, i) {
                d.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE);
                let a = !n.isEmpty(m.default.getVoiceStatesForChannel(e.id));
                if (t || !_.UseThreadSidebar.getSetting() || __OVERLAY__ || a) {
                    l.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != i ? (0, f.transitionToThread)(e, i) : (0, f.transitionToChannel)(e.id);
                    return
                }
                s(null != e.parent_id, "all threads must have parents");
                let r = C.default.getChannelId();
                e.parent_id !== r && !(0, S.isGuildHomeChannel)(r) && (0, f.transitionToChannel)(e.parent_id), (0, u.transitionTo)(T.Routes.CHANNEL_THREAD_VIEW((0, h.getGuildIdForGenericRedirect)(e), (0, S.isGuildHomeChannel)(r) ? S.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? E.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    g.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function v(e, t, i) {
                s(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), s(!__OVERLAY__, "Cannot create threads in the overlay."), (0, c.trackWithMetadata)(T.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: i,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), d.MainWindowDispatch.dispatch(T.ComponentActions.POPOUT_CLOSE), C.default.getChannelId() !== e.id && (0, f.transitionToChannel)(e.id);
                let a = p.default.getDraft(e.id, p.DraftType.FirstThreadMessage);
                if ("" === a) {
                    let t = p.default.getDraft(e.id, p.DraftType.ChannelMessage);
                    o.default.saveDraft(e.id, "", p.DraftType.ChannelMessage), o.default.saveDraft(e.id, t, p.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    l.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: i
                    })
                }, 0)
            }

            function O(e, t) {
                (0, u.transitionTo)(T.Routes.CHANNEL(e, (0, S.isGuildHomeChannel)(t) ? S.StaticChannelRoute.GUILD_HOME : t)), l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function y(e) {
                l.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: p.DraftType.FirstThreadMessage
                }), l.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: p.DraftType.ThreadSettings
                })
            }
        },
        346955: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var a = i("37983");
            i("884691");
            var s = i("469563"),
                r = i("509317"),
                n = i("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: s = "currentColor",
                        foreground: r,
                        ...l
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, n.default)(l),
                        width: t,
                        height: i,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fill: s,
                            className: r,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, r.FolderIcon, void 0, {
                    size: 24
                })
        },
        659186: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ChatLayerContainer: function() {
                    return l
                },
                ChatLayerProvider: function() {
                    return o
                },
                default: function() {
                    return d
                }
            });
            var a = i("228256");
            let {
                Layer: s,
                LayerContainer: r,
                LayerProvider: n
            } = (0, a.createLayer)("Chat"), l = r, o = n;
            var d = s
        }
    }
]);