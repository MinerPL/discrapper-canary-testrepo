(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["14336"], {
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return r
                },
                subscribeChannel: function() {
                    return s
                },
                subscribeChannelDimensions: function() {
                    return u
                }
            }), n("424973");
            var i = n("913144"),
                a = n("696605");

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function r(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function s(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function u(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: l,
                    rowHeight: r
                } = e;

                function u(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / r)) + t)
                }
                let o = [];

                function d(e) {
                    let t = e + (a.MINIMUM_RANGE - 1);
                    return o.push([e, t]), t + 1
                }
                let c = u(.5 * l),
                    E = u(i, -c),
                    f = u(i + l, c);
                for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / a.MINIMUM_RANGE) * a.MINIMUM_RANGE; E <= f;) E = d(E);
                s(t, n, o)
            }
        },
        713841: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("913144"),
                a = n("592407"),
                l = n("482391"),
                r = n("611183"),
                s = {
                    init() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_INIT"
                        })
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_SET_SECTION",
                            section: e,
                            sectionId: t
                        })
                    },
                    startEditingCommandPermissions(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
                            commandId: e
                        })
                    },
                    stopEditingCommandPermissions(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
                            commandId: e
                        })
                    },
                    startEditingIntegration(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
                            integrationId: e
                        })
                    },
                    stopEditingIntegration() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
                        })
                    },
                    updateIntegration(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
                            settings: e
                        })
                    },
                    startEditingWebhook(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
                            webhookId: e
                        })
                    },
                    stopEditingWebhook() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
                        })
                    },
                    updateWebhook(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
                            settings: e
                        })
                    },
                    async saveApplicationPermissions(e, t, n) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await l.updateApplicationCommandPermissions({
                                applicationId: e,
                                commandId: e,
                                defaultEveryoneValue: !0,
                                defaultEverywhereValue: !0,
                                guildId: t,
                                permissions: n
                            }), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    },
                    async saveIntegration(e, t) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await a.default.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    },
                    async saveWebhook(e, t) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await r.default.update(e, t.id, t), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    }
                }
        },
        352674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("913144"),
                a = {
                    startTyping(e) {
                        i.default.dispatch({
                            type: "TYPING_START_LOCAL",
                            channelId: e
                        })
                    },
                    stopTyping(e) {
                        i.default.dispatch({
                            type: "TYPING_STOP_LOCAL",
                            channelId: e
                        })
                    }
                }
        },
        611183: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("917351"),
                a = n.n(i),
                l = n("872717"),
                r = n("913144"),
                s = n("49111");
            let u = ["Spidey Bot", "Captain Hook"];
            var o = {
                fetchForGuild(e) {
                    r.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e
                    }), l.default.get({
                        url: s.Endpoints.GUILD_WEBHOOKS(e),
                        oldFormErrors: !0
                    }).then(t => {
                        let {
                            body: n
                        } = t;
                        return r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            webhooks: n
                        })
                    }).catch(t => {
                        let {
                            body: n
                        } = t;
                        r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            error: n.message
                        })
                    })
                },
                fetchForChannel(e, t) {
                    r.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e,
                        channelId: t
                    }), l.default.get({
                        url: s.Endpoints.CHANNEL_WEBHOOKS(t),
                        oldFormErrors: !0
                    }).then(n => {
                        let {
                            body: i
                        } = n;
                        return r.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            channelId: t,
                            webhooks: i
                        })
                    })
                },
                create: (e, t, n) => (null == n && (n = u[a.random(0, u.length - 1)]), l.default.post({
                    url: s.Endpoints.CHANNEL_WEBHOOKS(t),
                    body: {
                        name: n
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let {
                        body: n
                    } = t;
                    return r.default.dispatch({
                        type: "WEBHOOK_CREATE",
                        guildId: e,
                        webhook: n
                    }), n
                })),
                delete: (e, t) => l.default.delete({
                    url: s.Endpoints.WEBHOOK(t),
                    oldFormErrors: !0
                }).then(() => {
                    r.default.dispatch({
                        type: "WEBHOOK_DELETE",
                        guildId: e,
                        webhookId: t
                    })
                }),
                update: (e, t, n) => l.default.patch({
                    url: s.Endpoints.WEBHOOK(t),
                    body: n,
                    oldFormErrors: !0
                }).then(t => {
                    let {
                        body: n
                    } = t;
                    return r.default.dispatch({
                        type: "WEBHOOK_UPDATE",
                        guildId: e,
                        webhook: n
                    }), n
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("669491"),
                l = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return s
                }
            }), n("37983");
            var i = n("884691"),
                a = n("917351"),
                l = n.n(a);
            n("233736");
            var r = n("666020");

            function s(e) {
                i.useEffect(() => (l.forEach(e, (e, t) => (0, r.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, r.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        981112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                stageAttachmentFiles: function() {
                    return _
                },
                default: function() {
                    return i
                }
            }), n("808653"), n("222007"), n("70102");
            var i, a = n("811022"),
                l = n("994440"),
                r = n("282928"),
                s = n("142852"),
                u = n("402752"),
                o = n("572868"),
                d = n("49111"),
                c = n("894488"),
                E = n("782340");
            let f = new a.default("CloudUploaderBase.tsx");
            async function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = e.map(e => new Promise((i, a) => {
                        switch (e.status) {
                            case r.CloudUploadStatus.NOT_STARTED:
                                e.upload();
                                break;
                            case r.CloudUploadStatus.COMPLETED:
                                i("complete");
                                break;
                            case r.CloudUploadStatus.ERROR:
                                t && e.error !== d.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : a(Error("File failed to upload"));
                                break;
                            case r.CloudUploadStatus.CANCELED:
                                a(Error("Upload is canceled"))
                        }
                        e.on("complete", () => {
                            i("complete")
                        }), e.on("error", () => {
                            a(Error("File ".concat(e.id, " failed to upload")))
                        }), e.on("progress", (e, t) => {
                            null == n || n(e, t)
                        })
                    }));
                await Promise.all(i)
            }
            i = class extends o.default {
                _fileSize() {
                    return this.files.reduce((e, t) => {
                        var n;
                        return e += null !== (n = t.currentSize) && void 0 !== n ? n : 0
                    }, 0)
                }
                async compressAndCheckFileSize() {
                    var e, t;
                    let n = (0, s.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
                    return this.files.length > n.getMaxAttachmentsCount() ? (f.log("Too many attachments for ".concat(this.id)), this._handleError({
                        code: d.AbortCodes.TOO_MANY_ATTACHMENTS
                    }), !1) : !(this._fileSize() > n.getMaxTotalAttachmentSize()) || (this._handleError({
                        code: d.AbortCodes.ENTITY_TOO_LARGE,
                        reason: {
                            type: c.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
                        }
                    }), !1)
                }
                _filesTooLarge() {
                    return this.files.some(e => e.error === d.AbortCodes.ENTITY_TOO_LARGE)
                }
                setUploadingTextForUI() {
                    let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : E.default.Messages.UPLOADING_FILES.format({
                            count: this.files.length
                        }),
                        t = this.files.some(e => e.isImage),
                        n = this.files.some(e => e.isVideo),
                        i = this._fileSize();
                    f.log("setUploadingTextForUI - total content: ".concat(i, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
                        ...this._file,
                        totalPostCompressionSize: i,
                        currentSize: i,
                        name: e,
                        hasVideo: n,
                        hasImage: t,
                        attachmentsCount: this.files.length,
                        items: this.files
                    }
                }
                _recomputeProgress() {
                    let {
                        loaded: e,
                        total: t
                    } = this._recomputeProgressTotal(), n = this._recomputeProgressByFile();
                    this._handleProgress(e, t, n)
                }
                _recomputeProgressTotal() {
                    let e = this._fileSize(),
                        t = this.files.reduce((e, t) => {
                            var n;
                            return e += null !== (n = t.loaded) && void 0 !== n ? n : 0
                        }, 0);
                    return {
                        loaded: t,
                        total: e
                    }
                }
                _recomputeProgressByFile() {
                    let e = {};
                    return this.files.forEach(t => {
                        e[t.id] = (0, u.calculateProgress)(t.loaded, t.currentSize)
                    }), e
                }
                cancel() {
                    f.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(e => e.cancel()), this._handleComplete())
                }
                async cancelItem(e) {
                    f.log("Cancel called for ".concat(this.id, " for item ").concat(e));
                    let t = this.files.find(t => t.id === e);
                    if (null == t || t.status === r.CloudUploadStatus.CANCELED) return;
                    let n = this.files.indexOf(t);
                    this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)], this._file = {
                        ...this._file,
                        items: this.files
                    }, await (0, l.cancelGetAttachmentFile)(t), t.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
                }
                failed() {
                    return this.files.some(e => e.status === r.CloudUploadStatus.ERROR)
                }
                _remainingUploadCount() {
                    let e = this.files;
                    return e.length - e.filter(e => e.status === r.CloudUploadStatus.COMPLETED).length
                }
                clear() {
                    this.cancel(), this.files = []
                }
                constructor(...e) {
                    super(...e), this.files = []
                }
            }
        },
        572868: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007"), n("70102");
            var i, a = n("44170"),
                l = n("917351"),
                r = n.n(l),
                s = n("605250"),
                u = n("402752"),
                o = n("894488");
            let d = new s.default("UploaderBase.tsx");
            i = class extends a.EventEmitter {
                _addAttachmentsToPayload(e, t, n) {
                    let i = {
                            ...e
                        },
                        a = [...r.get(i, t, []), ...n];
                    return r.set(i, t, a)
                }
                clearProcessingMessageInterval() {
                    null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), this.processingMessageChangeInterval = void 0)
                }
                cancel() {
                    d.log("cancel() for ".concat(this.id)), this._aborted = !0, null != this._cancel && this._cancel(), this._handleComplete()
                }
                cancelItem(e) {
                    throw Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
                }
                upload(e, t, n) {
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
                        items: n
                    }
                }
                constructor(e, t = "POST", n) {
                    var i;
                    super(), this._token = "", this._lastUpdate = 0, this._loaded = 0, this._aborted = !1, this._errored = !1, this._raiseEndpointErrors = !1, this.alreadyStarted = !1, this._handleStart = e => {
                        this._cancel = e, !this.alreadyStarted && this.emit("start", this._file), this.alreadyStarted = !0
                    }, this._handleProgress = (e, t, n) => {
                        let i = Date.now(),
                            a = (0, u.calculateProgress)(e, t),
                            l = Math.floor((e - this._loaded) / ((i - this._lastUpdate) / 1e3));
                        if (null != n) {
                            var r;
                            null === (r = this._file.items) || void 0 === r || r.forEach(e => {
                                e.item.progress = n[e.id]
                            })
                        }
                        this._lastUpdate = i, this._loaded = e, this._file = {
                            ...this._file,
                            currentSize: t,
                            progress: a,
                            rate: l
                        }, this.emit("progress", this._file)
                    }, this._handleException = e => {
                        this._handleError({
                            reason: {
                                type: o.FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN,
                                msg: e.toString()
                            }
                        })
                    }, this._handleAborted = () => {
                        this.clearProcessingMessageInterval()
                    }, this._handleError = e => {
                        let {
                            code: t,
                            reason: n,
                            body: i
                        } = e;
                        this.clearProcessingMessageInterval(), !this._aborted && (this._errored = !0, d.log("_handleError: ".concat(t, " (").concat(JSON.stringify(n), ") for ").concat(this.id)), this.emit("error", this._file, t, i, n), this.removeAllListeners())
                    }, this._handleComplete = e => {
                        this.clearProcessingMessageInterval(), d.log("_handleComplete for ".concat(this.id)), this.emit("complete", this._file, e), this.removeAllListeners()
                    }, this.id = r.uniqueId("Uploader"), this._url = e, this._method = t, this._raiseEndpointErrors = null !== (i = null == n ? void 0 : n.raiseEndpointErrors) && void 0 !== i && i
                }
            }
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                s = n("587974"),
                u = n("315102"),
                o = n("524768"),
                d = n("616674"),
                c = n("363577");

            function E(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: l,
                    height: E,
                    className: f,
                    selectable: _ = !1,
                    onFocus: I,
                    onBlur: T,
                    onMouseOver: S,
                    onMouseLeave: N,
                    ...p
                } = e, [h, A] = a.useState(!1), m = a.useCallback(() => {
                    A(!0), null == I || I()
                }, [I]), C = a.useCallback(() => {
                    A(!1), null == T || T()
                }, [T]), g = a.useCallback(() => {
                    A(!0), null == S || S()
                }, [S]), O = a.useCallback(() => {
                    A(!1), null == N || N()
                }, [N]), M = a.useMemo(() => {
                    if (t.type === o.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return u.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: l
                        })
                    }
                    return c
                }, [t, l]);
                return (0, i.jsx)("div", {
                    ...p,
                    className: r(d.wrapper, f, {
                        [d.selectable]: _,
                        [d.selected]: _ && n
                    }),
                    onFocus: m,
                    onBlur: C,
                    onMouseOver: g,
                    onMouseLeave: O,
                    children: (0, i.jsx)(s.default, {
                        className: d.mask,
                        mask: _ && (n || h) ? s.MaskIDs.SQUIRCLE : s.MaskIDs.AVATAR_DEFAULT,
                        width: l,
                        height: E,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: l,
                                height: E
                            },
                            src: M
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                r = n("83910"),
                s = n("93393"),
                u = n("317041"),
                o = n("749296");
            let d = e => {
                switch (e.id) {
                    case u.BuiltInSectionId.BUILT_IN:
                        return r.default;
                    case u.BuiltInSectionId.FRECENCY:
                        return s.default;
                    default:
                        return
                }
            };

            function c(e) {
                let {
                    section: t,
                    className: n,
                    width: a,
                    height: r,
                    padding: s,
                    isSelected: u,
                    selectable: c = !1,
                    ...E
                } = e, f = d(t);
                return (0, i.jsx)("div", {
                    className: l(o.wrapper, n, {
                        [o.selectable]: c,
                        [o.selected]: c && u
                    }),
                    style: {
                        width: a,
                        height: r,
                        padding: null != s ? s : 0
                    },
                    children: null != f ? (0, i.jsx)(f, {
                        className: o.icon,
                        width: a,
                        height: r,
                        ...E
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return s
                },
                pxToRem: function() {
                    return u
                },
                getCommandQuery: function() {
                    return o
                }
            });
            var i = n("524768"),
                a = n("991630"),
                l = n("943161"),
                r = n("317041");
            let s = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? l.default : a.default;

            function u(e) {
                return "".concat(e / 16, "rem")
            }

            function o(e, t) {
                let n = t,
                    i = !1,
                    a = t.indexOf(":");
                if (a >= 0) {
                    let e = t.lastIndexOf(" ", a);
                    e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, a)
                } else t = t.substring(0, t.length);
                let l = t.split(" ", r.MAX_SUBCOMMAND_LEVEL + 1);
                return l.length > r.MAX_SUBCOMMAND_LEVEL && (i = !0, l.pop()), t = l.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
                    text: t,
                    parts: l,
                    hasSpaceTerminator: i
                }
            }
        },
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("850572"),
                r = () => (0, i.jsx)("div", {
                    className: l.loadingWrapper,
                    children: (0, i.jsx)(a.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        337026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-03_apps_in_gdms",
                label: "Apps in GDMs",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show apps in gdm",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        201155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowApplicationInGDM: function() {
                    return r
                }
            });
            var i = n("65597"),
                a = n("42203"),
                l = n("337026");

            function r(e) {
                let t = (0, i.default)([a.default], () => a.default.getChannel(e)),
                    {
                        enabled: n
                    } = l.default.useExperiment({
                        location: "baec9c_1"
                    });
                return n && function(e) {
                    return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(e => e.bot))
                }(t)
            }
        },
        535348: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return i
                }
            }), (a = i || (i = {}))[a.STREAM = 0] = "STREAM", a[a.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                a = n("629109"),
                l = n("271938"),
                r = n("42887"),
                s = n("49111"),
                u = n("353927");

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.MediaEngineContextTypes.DEFAULT,
                    n = (0, i.useStateFromStores)([l.default], () => l.default.getId()),
                    o = (0, i.useStateFromStores)([r.default], () => r.default.supports(u.Features.DISABLE_VIDEO) && r.default.isVideoEnabled()),
                    d = (0, i.useStateFromStores)([r.default], () => r.default.isLocalVideoDisabled(n, t), [n, t]),
                    c = null == e || e === n;
                return [c && (o || d), d, e => {
                    let i = e ? s.VideoToggleState.DISABLED : s.VideoToggleState.MANUAL_ENABLED;
                    a.default.setDisableLocalVideo(n, i, t)
                }]
            }
        },
        632616: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("452804"),
                l = n("135230"),
                r = n("535348"),
                s = n("782340");

            function u(e) {
                let {
                    type: t,
                    onConfirm: n,
                    ...u
                } = e, o = t === r.SelfStreamAndVideoAlertType.STREAM ? s.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : s.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = t === r.SelfStreamAndVideoAlertType.STREAM ? s.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : s.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, i.jsx)(l.default, {
                    confirmText: s.default.Messages.CONFIRM,
                    secondaryConfirmText: s.default.Messages.DONT_ASK_AGAIN,
                    title: o,
                    cancelText: s.default.Messages.CANCEL,
                    onConfirm: n,
                    onConfirmSecondary: () => {
                        a.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), n()
                    },
                    body: d,
                    ...u
                })
            }
        },
        243288: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("255397"),
                s = n("191145"),
                u = n("782340");

            function o(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.getVoiceParticipantsHidden(e));
                return (0, i.jsx)(l.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: u.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => r.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        321135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("168973"),
                s = n("301603"),
                u = n("632616"),
                o = n("535348"),
                d = n("353927"),
                c = n("782340");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MediaEngineContextTypes.DEFAULT,
                    [n, E, f] = (0, s.default)(e, t),
                    _ = (0, a.useStateFromStores)([r.default], () => r.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return n ? (0, i.jsx)(l.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: c.default.Messages.SHOW_SELF_VIDEO,
                    checked: !E,
                    action: () => {
                        if (_ || E) return f(!E);
                        (0, l.openModal)(e => (0, i.jsx)(u.default, {
                            ...e,
                            type: o.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => f(!E)
                        }))
                    }
                }) : null
            }
        },
        873254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("648911"),
                s = n("271938"),
                u = n("42887"),
                o = n("782340"),
                d = n("431024");

            function c(e) {
                let t = (0, l.useModalContext)(),
                    c = (0, a.useStateFromStores)([u.default], () => u.default.isVideoEnabled()),
                    E = (0, a.useStateFromStores)([s.default], () => s.default.getId() === e),
                    f = (0, r.default)();
                return (!c || f) && E ? (0, i.jsx)(l.MenuItem, {
                    id: "change-video-background",
                    label: (0, i.jsx)("div", {
                        className: d.item,
                        children: c ? o.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : o.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("381736").then(n.bind(n, "381736"));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                videoEnabled: c
                            })
                        }, {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                }) : null
            }
        },
        888355: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsDMsToClydeEnabled: function() {
                    return u
                }
            });
            var i = n("446674"),
                a = n("862205"),
                l = n("305961"),
                r = n("980215");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2023-05_clyde_ai_dm",
                label: "DMs to Clyde",
                defaultConfig: {
                    isDMsToClydeEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable dms to clyde",
                    config: {
                        isDMsToClydeEnabled: !0
                    }
                }]
            });

            function u() {
                let {
                    isDMsToClydeEnabled: e
                } = s.useExperiment({
                    location: "dbd3ac_1"
                }, {
                    autoTrackExposure: !1
                }), t = (0, i.useStateFromStoresArray)([l.default], () => l.default.getGuildIds()), n = t.some(e => (0, r.getClydeExperimentEnabled)(l.default.getGuild(e)));
                return e && n
            }
        },
        823026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("424973");
            var i = n("37983"),
                a = n("884691"),
                l = n("446674"),
                r = n("77078"),
                s = n("713841"),
                u = n("79112"),
                o = n("988721"),
                d = n("592407"),
                c = n("305961"),
                E = n("957255"),
                f = n("49111"),
                _ = n("782340");

            function I(e) {
                let {
                    user: t,
                    guildId: n,
                    channel: I,
                    context: T
                } = e, S = c.default.getGuild(n), N = (0, l.useStateFromStores)([E.default], () => null != S ? E.default.can(f.Permissions.MANAGE_GUILD, S) : null), p = (0, o.useContextIndexState)(I, !0, !0), h = (0, o.useUserIndexState)(!0, !0), {
                    isUserApp: A,
                    isGuildApp: m
                } = a.useMemo(() => {
                    var e, n, i, a;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let l = Object.values(null !== (i = null === (e = p.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {}),
                        r = Object.values(null !== (a = null === (n = h.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {});
                    return {
                        isGuildApp: l.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: r.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [p, h, null == t ? void 0 : t.id]), C = a.useCallback(() => {
                    (null == S ? void 0 : S.id) != null && (d.default.open(S.id, f.GuildSettingsSections.INTEGRATIONS), s.default.setSection(f.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == S ? void 0 : S.id]), g = a.useCallback(() => {
                    u.default.open(f.UserSettingsSections.AUTHORIZED_APPS)
                }, []), O = T === f.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !N || O || !m && !A) return null;
                let M = [];
                return m && M.push((0, i.jsx)(r.MenuItem, {
                    id: "manage-integration",
                    label: _.default.Messages.MANAGE_INTEGRATION,
                    action: C
                }, "manage-integration")), A && M.push((0, i.jsx)(r.MenuItem, {
                    id: "manage-authorized-app",
                    label: _.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: g
                }, "manage-authorized-app")), M
            }
        },
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return s
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return c
                }
            });
            var i = n("446674"),
                a = n("26989"),
                l = n("697218"),
                r = n("509");

            function s(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.getCurrentUser());
                return d(null == t ? void 0 : t.id, e)
            }

            function u(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function o(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, r.isMemberCommunicationDisabled)(e)]
            }

            function d(e, t) {
                let n = (0, i.useStateFromStores)([a.default], () => u(e, t, a.default), [t, e]);
                return o(n)
            }

            function c(e, t) {
                let n = u(e, t, a.default);
                return o(n)
            }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return s
                },
                setCurrentGuild: function() {
                    return u
                },
                initGuildIdentitySettings: function() {
                    return o
                },
                closeGuildIdentitySettings: function() {
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return c
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return f
                },
                setPendingBio: function() {
                    return _
                },
                setPendingPronouns: function() {
                    return I
                },
                setPendingNickname: function() {
                    return T
                },
                setPendingThemeColors: function() {
                    return S
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return p
                },
                resetAllPending: function() {
                    return h
                },
                clearErrors: function() {
                    return A
                },
                setDisableSubmit: function() {
                    return m
                }
            }), n("70102");
            var i = n("872717"),
                a = n("913144"),
                l = n("54239"),
                r = n("49111");
            async function s(e, t) {
                let {
                    nick: n,
                    avatar: l
                } = t;
                if (null == e) throw Error("Need guildId");
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: r.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: l
                        },
                        oldFormErrors: !0
                    });
                    return a.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), a.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), a.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function u(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function o(e, t) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function d() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function c() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function f(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function _(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function I(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function T(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function S(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function p() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function h() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function A() {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function m(e) {
                a.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, a, l, r, s, u, o, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var E = n("446674"),
                f = n("913144"),
                _ = n("49111");
            let I = _.FormStates.CLOSED,
                T = {},
                S = !1;

            function N() {
                I = _.FormStates.CLOSED, T = {}, o = null, d = void 0, c = []
            }

            function p() {
                h(), A(), T = {}, I = _.FormStates.OPEN
            }

            function h() {
                i = void 0, s = void 0
            }

            function A() {
                a = void 0, l = void 0, r = void 0, u = void 0
            }
            class m extends E.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return T
                }
                showNotice() {
                    return void 0 !== i || void 0 !== a || void 0 !== l || void 0 !== r || void 0 !== s || void 0 !== u
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return a
                }
                getPendingBio() {
                    return l
                }
                getPendingNickname() {
                    return s
                }
                getPendingPronouns() {
                    return r
                }
                getPendingAccentColor() {
                    return s
                }
                getPendingThemeColors() {
                    return u
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: a,
                        pendingBio: l,
                        pendingPronouns: r,
                        pendingNickname: s,
                        pendingThemeColors: u
                    }
                }
                getGuild() {
                    return o
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return c
                }
                getIsDisableSubmit() {
                    return S
                }
            }
            m.displayName = "GuildIdentitySettingsStore";
            var C = new m(f.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    o = e.guild, I = _.FormStates.OPEN, T = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    p(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    o = e.guild, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    I = _.FormStates.SUBMITTING, T = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (I !== _.FormStates.SUBMITTING) return !1;
                    I = _.FormStates.OPEN, T = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    I = _.FormStates.OPEN, T = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    s = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: h,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: A,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: p,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: p,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    T = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    S = t
                }
            })
        },
        130037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackMemberSearchUsed: function() {
                    return _
                },
                useTrackMemberFilterRolesUsed: function() {
                    return I
                },
                MemberSafetyFlagType: function() {
                    return l
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return T
                },
                ModerationActionType: function() {
                    return r
                },
                useTrackModerationAction: function() {
                    return S
                },
                trackMembersPageViewed: function() {
                    return N
                }
            });
            var i, a, l, r, s = n("884691"),
                u = n("812204"),
                o = n("716241"),
                d = n("271938"),
                c = n("599110"),
                E = n("49111");

            function f(e, t, n) {
                var i;
                let a = {
                    ...t,
                    ...(0, o.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
                };
                c.default.track(e, a)
            }

            function _(e) {
                let t = s.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: u.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function I(e) {
                let t = s.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: u.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }, [e]);
                return t
            }(i = l || (l = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled", i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", i.USERNAME_QUARANTINED = "username_quarantined";

            function T(e) {
                let t = s.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            flag_type: t,
                            guild_id: e,
                            location: u.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }, [e]);
                return t
            }

            function S(e, t) {
                let {
                    location: n,
                    targetUserId: i,
                    targets: a
                } = t, l = s.useCallback(t => {
                    let l = {
                        action_type: t,
                        mod_user_id: d.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != i ? i : void 0,
                        targets: null != a ? a : void 0
                    };
                    f(E.AnalyticEvents.MODERATION_ACTION, l)
                }, [e, n, i, a]);
                return l
            }

            function N(e, t) {
                f(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
                    guild_id: e,
                    location: t
                })
            }(a = r || (r = {})).BAN = "ban", a.KICK = "kick", a.MUTE = "mute", a.TIMEOUT = "timeout", a.ADD_ROLE = "add_role", a.REMOVE_ROLE = "remove_role", a.COPY_ID = "copy_id", a.CHANGE_NICKNAME = "change_nickname"
        },
        482391: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearIntegrationPermissions: function() {
                    return u
                },
                editPermissions: function() {
                    return o
                },
                getApplicationCommands: function() {
                    return d
                },
                getApplicationCommandPermissions: function() {
                    return c
                },
                initIntegrationPermissions: function() {
                    return E
                },
                resetPermissions: function() {
                    return f
                },
                updateApplicationCommandPermissions: function() {
                    return _
                }
            });
            var i = n("872717"),
                a = n("913144"),
                l = n("507217"),
                r = n("389153"),
                s = n("49111");

            function u() {
                a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function o(e, t, n) {
                a.default.dispatch({
                    applicationId: e,
                    commandId: t,
                    permissions: n,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function d(e, t) {
                i.default.get(s.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(n => {
                    a.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: t,
                        commands: n.body.application_commands,
                        guildId: e,
                        permissions: n.body.permissions
                    })
                }, () => {
                    a.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: t
                    })
                })
            }
            async function c(e, t, n) {
                let l = [];
                try {
                    let a = await i.default.get(s.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
                    a.ok && (l = a.body.permissions)
                } catch (i) {
                    if (404 !== i.status) {
                        a.default.dispatch({
                            type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                            applicationId: e,
                            commandId: n,
                            guildId: t
                        });
                        return
                    }
                }
                a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: e,
                    commandId: n,
                    guildId: t,
                    permissions: l
                })
            }

            function E(e) {
                a.default.dispatch({
                    applicationId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function f(e) {
                a.default.dispatch({
                    commandId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }
            async function _(e) {
                let {
                    applicationId: t,
                    commandId: n,
                    defaultEveryoneValue: i,
                    defaultEverywhereValue: s,
                    guildId: u,
                    permissions: o
                } = e, d = n === t ? function(e, t, n, i) {
                    if (!n || !i) return t;
                    let a = {
                        [e]: n,
                        [(0, r.allChannelsSentinel)(e)]: i
                    };
                    return t.filter(e => {
                        let t = a[e.id];
                        return null == t || e.permission !== t
                    })
                }(u, o, i, s) : o, c = await l.updateApplicationGuildCommandPermissions(t, u, n, d);
                c.ok && a.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: t,
                    commandId: n,
                    guildId: u,
                    permissions: c.body.permissions
                })
            }
        },
        970755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchApplicationsShelf: function() {
                    return u
                },
                fetchPrivateChannelIntegrations: function() {
                    return o
                },
                deletePrivateChannelIntegration: function() {
                    return d
                }
            }), n("70102"), n("746379");
            var i = n("981980"),
                a = n("872717"),
                l = n("913144");
            n("253981");
            var r = n("140596"),
                s = n("49111");
            n("843455"), n("782340");

            function u() {
                r.default.getApplicationsShelfFetchState() === r.FetchState.NOT_FETCHED && (l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_START"
                }), a.default.get(s.Endpoints.APPLICATIONS_SHELF).then(e => l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
                    applications: e.body.applications
                })).catch(e => l.default.dispatch({
                    type: "APPLICATIONS_SHELF_FETCH_FAIL"
                })))
            }

            function o(e) {
                let t = new i.default(1e3, 5e3);
                l.default.dispatch({
                    type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
                    channelId: e
                }), a.default.get({
                    url: s.Endpoints.CHANNEL_INTEGRATIONS(e),
                    backoff: t,
                    retries: 10
                }).then(t => {
                    l.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                        channelId: e,
                        integrations: t.body
                    })
                }).catch(() => {
                    l.default.dispatch({
                        type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                        channelId: e
                    })
                })
            }

            function d(e, t) {
                return a.default.delete(s.Endpoints.CHANNEL_INTEGRATION(e, t)).then(e => {
                    var t;
                    if (null === (t = e.body) || void 0 === t ? void 0 : t.message) throw Error(e.body.message)
                })
            }
        },
        252063: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePrivateChannelIntegrationState: function() {
                    return o
                }
            }), n("222007");
            var i = n("884691"),
                a = n("446674"),
                l = n("201155"),
                r = n("21121"),
                s = n("970755"),
                u = n("140596");

            function o(e) {
                let {
                    channelId: t
                } = e;
                (0, r.useInMainTabsExperiment)();
                let n = (0, l.useShowApplicationInGDM)(t),
                    {
                        installedIntegrations: o,
                        applicationsShelf: d,
                        integrationsFetchState: c,
                        applicationsShelfFetchState: E
                    } = (0, a.useStateFromStoresObject)([u.default], () => ({
                        installedIntegrations: u.default.getIntegrations(t),
                        applicationsShelf: u.default.getApplicationsShelf(),
                        integrationsFetchState: u.default.getIntegrationsFetchState(t),
                        applicationsShelfFetchState: u.default.getApplicationsShelfFetchState()
                    }));
                i.useEffect(() => {
                    n && ((c === u.FetchState.NOT_FETCHED || c === u.FetchState.FETCH_FAILED) && (0, s.fetchPrivateChannelIntegrations)(t), (E === u.FetchState.NOT_FETCHED || E === u.FetchState.FETCH_FAILED) && (0, s.fetchApplicationsShelf)())
                }, [n, t, c, E]);
                let f = new Set(o.map(e => e.application.id)),
                    _ = d.filter(e => !f.has(e.id));
                return {
                    installedIntegrations: o,
                    availableApplications: _,
                    applicationsShelf: d,
                    fetched: c !== u.FetchState.NOT_FETCHED && c !== u.FetchState.FETCHING && E !== u.FetchState.NOT_FETCHED && E !== u.FetchState.FETCHING,
                    appsInGDMEnabled: n
                }
            }
        },
        140596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return i
                },
                default: function() {
                    return S
                }
            }), n("222007"), n("424973");
            var i, a, l = n("446674"),
                r = n("913144"),
                s = n("653047"),
                u = n("946028");
            (a = i || (i = {}))[a.NOT_FETCHED = 0] = "NOT_FETCHED", a[a.FETCHING = 1] = "FETCHING", a[a.FETCHED = 2] = "FETCHED", a[a.FETCH_FAILED = 3] = "FETCH_FAILED";
            let o = new Map,
                d = new Map,
                c = [],
                E = 0,
                f = [];
            class _ extends l.default.Store {
                getIntegrations(e) {
                    var t;
                    return null !== (t = o.get(e)) && void 0 !== t ? t : f
                }
                getIntegration(e, t) {
                    var n;
                    return null === (n = o.get(e)) || void 0 === n ? void 0 : n.find(e => e.application.id === t)
                }
                getAllIntegrations() {
                    return o
                }
                getIntegrationsFetchState(e) {
                    var t;
                    return null !== (t = d.get(e)) && void 0 !== t ? t : 0
                }
                getApplicationsShelfFetchState() {
                    return E
                }
                getApplicationsShelf() {
                    return c
                }
            }

            function I(e) {
                return e.sort((e, t) => e.application.name.localeCompare(t.application.name))
            }
            _.displayName = "PrivateChannelIntegrationStore";
            let T = new _(r.default, {
                LOGOUT() {
                    o.clear()
                },
                CONNECTION_OPEN() {
                    o.clear(), d.clear()
                },
                CHANNEL_SELECT(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null == t || 3 !== d.get(t)) return !1;
                    d.set(t, 0)
                },
                APPLICATIONS_SHELF_FETCH_START() {
                    E = 1
                },
                APPLICATIONS_SHELF_FETCH_SUCCESS(e) {
                    let {
                        applications: t
                    } = e;
                    c = t.map(s.default.createFromServer).sort((e, t) => e.name.localeCompare(t.name)), E = 2
                },
                APPLICATIONS_SHELF_FETCH_FAIL() {
                    E = 3
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START(e) {
                    let {
                        channelId: t
                    } = e;
                    o.set(t, null), d.set(t, 1)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
                    let {
                        channelId: t,
                        integrations: n
                    } = e;
                    o.set(t, I(n.map(u.createPrivateChannelIntegration))), d.set(t, 2)
                },
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL(e) {
                    let {
                        channelId: t
                    } = e;
                    d.set(t, 3)
                },
                PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
                    let {
                        integration: t
                    } = e, n = o.get(t.channel_id);
                    if (null == n) return !1;
                    o.set(t.channel_id, I([...n, (0, u.createPrivateChannelIntegration)(t)]))
                },
                PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
                    let {
                        integration: t
                    } = e, n = o.get(t.channel_id);
                    if (null == n) return !1;
                    let i = (0, u.createPrivateChannelIntegration)(t),
                        a = n.findIndex(e => e.application.id === i.application.id),
                        l = [...n]; - 1 === a ? l.push(i) : l[a] = i, o.set(i.channel_id, I(l))
                },
                PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
                    let {
                        channelId: t,
                        applicationId: n
                    } = e, i = o.get(t);
                    if (null == i) return !1;
                    o.set(t, i.filter(e => e.application.id !== n))
                },
                CHANNEL_DELETE(e) {
                    let {
                        channel: t
                    } = e;
                    return o.delete(t.id)
                }
            });
            var S = T
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                a = n("79112"),
                l = n("685665"),
                r = n("929423");
            n("424562");
            var s = n("49111"),
                u = n("397336");

            function o(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: E
                } = (0, l.default)(), f = (0, i.useCallback)(() => {
                    null != t && (0, r.initGuildIdentitySettings)(t, null != d ? d : E), a.default.open(s.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? u.ProfileCustomizationSubsection.GUILD : u.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: o,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, o, d, c, E]);
                return f
            }
        },
        85166: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("42203"),
                s = n("305961"),
                u = n("957255"),
                o = n("697218"),
                d = n("244480"),
                c = n("325861"),
                E = n("49111"),
                f = n("782340");

            function _(e, t, n) {
                var _;
                let I = r.default.getChannel(n),
                    T = (0, a.useStateFromStores)([s.default], () => s.default.getGuild(t), [t]),
                    S = (0, a.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, n), [n, e.id]),
                    N = (null === (_ = o.default.getCurrentUser()) || void 0 === _ ? void 0 : _.id) === e.id,
                    p = (0, a.useStateFromStores)([u.default], () => null != n && u.default.canWithPartialContext(E.Permissions.MUTE_MEMBERS, {
                        channelId: n
                    }), [n]);
                return null != I && null != T && (p || N) && S.speaker ? (0, i.jsx)(l.MenuItem, {
                    id: "audience",
                    label: N ? f.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE : f.default.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
                    action: () => {
                        N ? (0, d.moveSelfToAudience)(I) : (0, d.moveUserToAudience)(e, I)
                    }
                }) : null
            }
        },
        834247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("272030"),
                r = n("838446"),
                s = n("158534"),
                u = n("798609"),
                o = n("846883"),
                d = n("812204"),
                c = n("243288"),
                E = n("321135"),
                f = n("873254"),
                _ = n("888355"),
                I = n("861370"),
                T = n("230947"),
                S = n("726750"),
                N = n("85166"),
                p = n("170990"),
                h = n("304582"),
                A = n("72057"),
                m = n("300925"),
                C = n("563816"),
                g = n("489836"),
                O = n("406703"),
                M = n("502533"),
                G = n("314838"),
                D = n("383161"),
                v = n("421602"),
                R = n("459870"),
                L = n("692986"),
                U = n("806179"),
                y = n("97508"),
                P = n("816106"),
                F = n("623879"),
                b = n("49111"),
                H = n("782340"),
                x = (0, s.default)((0, r.default)(function(e) {
                    let {
                        user: t,
                        guildId: n,
                        channel: r,
                        showMediaItems: s = !1,
                        showChatItems: d = !0,
                        showChannelCallItems: x = !1,
                        showModalItems: B = !0,
                        showStageChannelItems: V = !1,
                        context: w,
                        onSelect: k,
                        onHeightUpdate: j
                    } = e, Y = (0, U.default)(t.id, n, r.id), W = (0, D.default)(t, n, w), K = (0, v.default)(t.id, w), z = (0, F.default)(t.id), Z = (0, O.default)(t, w), X = (0, A.default)({
                        user: t,
                        guildId: n,
                        context: w
                    }), Q = (0, h.default)(t), q = (0, P.default)(t.id), J = (0, L.default)(t.id), $ = (0, T.default)({
                        guildId: n,
                        userId: t.id,
                        analyticsLocation: {
                            page: b.AnalyticsPages.GUILD_CHANNEL,
                            section: b.AnalyticsSections.CHAT_USERNAME,
                            object: b.AnalyticsObjects.CONTEXT_MENU_ITEM
                        },
                        context: w
                    }), ee = (0, G.default)(t, n), et = (0, o.default)(null, t), en = (0, p.default)(t), ei = (0, g.default)(t), ea = (0, m.default)(t, n, r.id), el = (0, y.default)(t.id, n), er = (0, R.default)(t, n), es = (0, I.default)({
                        id: t.id,
                        label: H.default.Messages.COPY_ID_USER
                    }), eu = (0, M.default)(t.id, r.id), eo = (0, E.default)(t.id), ed = (0, c.default)(r.id), ec = (0, S.default)(t), eE = (0, N.default)(t, n, r.id), ef = (0, C.default)({
                        commandType: u.ApplicationCommandType.USER,
                        commandTargetId: t.id,
                        channel: r,
                        guildId: n,
                        onHeightUpdate: j,
                        context: w
                    }), e_ = (0, f.default)(t.id), eI = t.isNonUserBot(), eT = t.isClyde(), eS = (0, _.useIsDMsToClydeEnabled)();
                    return (0, i.jsxs)(a.Menu, {
                        navId: "user-context",
                        onClose: l.closeContextMenu,
                        "aria-label": H.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: k,
                        children: [!eI && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [ec, V && eE]
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [B && Y, d && W, K, Z, B && X, B && Q, z]
                            }), s && (0, i.jsx)(a.MenuGroup, {
                                children: q
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: B && et
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [s && J, s && eu, B && $, ef, B && ee, en, B && ei, x && e_]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: ea
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [el, er]
                            }), x && (0, i.jsxs)(a.MenuGroup, {
                                children: [ed, eo]
                            })]
                        }), eT && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(a.MenuGroup, {
                                children: [B && Y, eS && K]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: ea
                            })]
                        }), (0, i.jsx)(a.MenuGroup, {
                            children: es
                        })]
                    })
                }, {
                    object: b.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.GUILD_CHANNEL_USER_MENU])
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("37983"),
                a = n("884691"),
                l = n("627445"),
                r = n.n(l),
                s = n("446674"),
                u = n("77078"),
                o = n("240249"),
                d = n("916565"),
                c = n("355263"),
                E = n("633043"),
                f = n("823026"),
                _ = n("305961"),
                I = n("697218"),
                T = n("317041"),
                S = n("782340"),
                N = n("205735"),
                p = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: l,
                            channel: p,
                            guildId: h,
                            onHeightUpdate: A,
                            context: m
                        } = e,
                        C = (0, s.useStateFromStores)([_.default], () => _.default.getGuild(null != h ? h : p.guild_id)),
                        g = (0, s.useStateFromStores)([I.default], () => I.default.getUser(l)),
                        O = (0, f.default)({
                            user: g,
                            guildId: null == C ? void 0 : C.id,
                            channel: p,
                            context: m
                        }),
                        {
                            commands: M,
                            sectionDescriptors: G,
                            loading: D
                        } = o.useDiscovery(p, {
                            commandType: n
                        }, {
                            limit: T.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: v
                        } = a.useMemo(() => {
                            let e = {};
                            return G.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [G]),
                        R = a.useRef(D.current);
                    a.useEffect(() => {
                        D.current !== R.current && (R.current = D.current, null == A || A())
                    }, [D, A]);
                    let L = a.useCallback(e => {
                        r(null != p, "menu item should not show if channel is null");
                        let t = v[e.applicationId],
                            n = null != t ? (0, c.getIconComponent)(t) : void 0;
                        return (0, i.jsx)(u.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, i.jsx)(n, {
                                channel: p,
                                section: t,
                                width: 18,
                                height: 18,
                                selectable: !1
                            }) : null,
                            action: () => {
                                (0, d.default)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: p,
                                        guild: C
                                    },
                                    commandTargetId: l
                                })
                            }
                        }, e.id)
                    }, [p, C, l, v]);
                    return D.current ? t = (0, i.jsx)(u.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, i.jsx)(E.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === M.length ? (0, i.jsx)(u.MenuItem, {
                        id: "menu-commands-empty",
                        label: S.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : M.map(L), null != O && (t = (0, i.jsxs)(i.Fragment, {
                        children: [t, (0, i.jsx)(u.MenuSeparator, {}, "separator"), O]
                    }))), (0, i.jsx)(u.MenuItem, {
                        id: "apps",
                        label: S.default.Messages.APPS,
                        listClassName: N.list,
                        children: t
                    })
                }
        },
        383161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                mentionUser: function() {
                    return _
                },
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                l = n("77078"),
                r = n("352674"),
                s = n("42203"),
                u = n("957255"),
                o = n("18494"),
                d = n("659500"),
                c = n("158998"),
                E = n("49111"),
                f = n("782340");

            function _(e, t) {
                let {
                    id: n
                } = e, i = "@".concat(c.default.getUserTag(e, {
                    decoration: "never"
                }));
                d.ComponentDispatch.dispatchToLastSubscribed(E.ComponentActions.INSERT_TEXT, {
                    plainText: i,
                    rawText: "<@".concat(n, ">")
                }), null != t && r.default.startTyping(t)
            }

            function I(e, t, n) {
                let [r, d] = (0, a.useStateFromStoresArray)([o.default, s.default, u.default], () => {
                    let e = o.default.getChannelId(t),
                        n = s.default.getChannel(e),
                        i = null != n && (n.isMultiUserDM() || u.default.can(E.Permissions.SEND_MESSAGES, n));
                    return [e, i]
                }, [t]), c = n === E.AppContext.POPOUT;
                return !d || c ? null : (0, i.jsx)(l.MenuItem, {
                    id: "mention",
                    label: f.default.Messages.MENTION,
                    action: function() {
                        _(e, r)
                    }
                })
            }
        },
        648911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("446674"),
                a = n("42887"),
                l = n("512244");

            function r() {
                return (0, i.useStateFromStores)([a.default], () => (0, l.default)(a.default))
            }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("926001"),
                r = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, l.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("469563"),
                l = n("503420"),
                r = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: a = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, i.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, i.jsx)("path", {
                                className: l,
                                fill: a,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, l.ClockIcon, void 0, {
                    size: 20
                })
        }
    }
]);