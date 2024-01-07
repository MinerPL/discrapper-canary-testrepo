(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["27660"], {
        277064: function(e, t, i) {
            "use strict";
            e.exports = i.p + "b7cfbc1104ec3593f753.gif"
        },
        748301: function(e, t, i) {
            "use strict";
            e.exports = i.p + "45266c5a3e03cba8884e.svg"
        },
        783480: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return L
                }
            }), i("222007"), i("702976");
            var a = i("77078"),
                l = i("913144"),
                n = i("295426"),
                o = i("819689"),
                s = i("81594"),
                r = i("336522"),
                u = i("448993"),
                d = i("979911"),
                c = i("282928"),
                p = i("966724"),
                h = i("681736"),
                f = i("600798"),
                T = i("692038"),
                m = i("815297"),
                E = i("168730"),
                g = i("562228"),
                _ = i("529805"),
                R = i("685841"),
                I = i("804888"),
                C = i("474643"),
                O = i("585722"),
                v = i("568734"),
                A = i("305515"),
                N = i("49111"),
                S = i("782340");
            async function P(e) {
                var t, i, a;
                let c, {
                        channelId: p,
                        uploads: P,
                        draftType: L,
                        parsedMessage: y,
                        options: j = {},
                        raiseEndpointErrors: x = !1
                    } = e,
                    M = new h.default(N.Endpoints.MESSAGES(p)),
                    U = new A.Future,
                    b = {
                        content: "",
                        nonce: "",
                        channel_id: p,
                        type: N.MessageTypes.DEFAULT,
                        sticker_ids: null == j ? void 0 : j.stickerIds,
                        poll: null == j ? void 0 : j.poll
                    };
                null != y && (b.content = null == y ? void 0 : y.content);
                let D = R.default.getPendingReply(p);
                null != D && (b.type = N.MessageTypes.REPLY, b.message_reference = j.messageReference, b.allowed_mentions = j.allowedMentions, (0, _.deletePendingReply)(p));
                let [B, k] = (0, I.default)(b.content);
                B && (b.content = k, b.flags = (0, v.addFlag)(null !== (t = b.flags) && void 0 !== t ? t : 0, N.MessageFlags.SUPPRESS_NOTIFICATIONS));
                let w = null !== (i = j.nonce) && void 0 !== i ? i : (0, m.createNonce)(),
                    V = (0, m.default)({
                        channelId: p,
                        content: b.content,
                        tts: null !== (a = null == y ? void 0 : y.tts) && void 0 !== a && a,
                        type: b.type,
                        messageReference: b.message_reference,
                        flags: b.flags,
                        nonce: w,
                        poll: (0, g.createPollServerDataFromCreateRequest)(j.poll)
                    });
                return (b.nonce = w, M.on("start", e => {
                    c = (0, T.createMessageRecord)({
                        ...V,
                        id: e.id
                    }), l.default.dispatch({
                        type: "UPLOAD_START",
                        channelId: p,
                        file: e,
                        message: c,
                        uploader: M
                    })
                }), M.on("progress", e => {
                    l.default.dispatch({
                        type: "UPLOAD_PROGRESS",
                        channelId: p,
                        file: e
                    })
                })), M.on("error", (e, t, i, a) => {
                    if (l.default.dispatch({
                            type: "UPLOAD_FAIL",
                            channelId: p,
                            file: e,
                            messageRecord: c
                        }), (0, E.logMessageSendFailure)({
                            fileItems: e.items,
                            failureCode: t,
                            errorMessage: null == a ? void 0 : a.msg
                        }), t === N.AbortCodes.EXPLICIT_CONTENT) {
                        o.default.sendClydeError(p, t);
                        return
                    }
                    if (t === N.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
                        let e = {
                                code: t,
                                message: null == i ? void 0 : i.message
                            },
                            a = null == c ? null : {
                                type: d.MessageDataType.SEND,
                                message: {
                                    ...c,
                                    channelId: p
                                }
                            };
                        (0, r.openUploadError)({
                            title: S.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: (0, f.getAutomodErrorMessage)(a, e)
                        });
                        return
                    }
                    t !== N.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && (x ? U.reject(new u.APIError({
                        status: t,
                        body: null != i ? i : {}
                    }, t)) : (0, r.openUploadError)({
                        title: S.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                        help: S.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
                    }), "" !== b.content && "" === C.default.getDraft(p, L) && n.default.saveDraft(p, b.content, L), 0 === O.default.getUploadCount(p, L) && s.default.setUploads({
                        channelId: p,
                        uploads: P,
                        draftType: L
                    }))
                }), M.on("complete", e => {
                    l.default.dispatch({
                        type: "UPLOAD_COMPLETE",
                        channelId: p,
                        file: e,
                        aborted: M._aborted
                    })
                }), await M.uploadFiles(P, b), U.resolve(), U.promise
            }
            var L = {
                instantBatchUpload: function(e) {
                    let {
                        channelId: t,
                        files: i,
                        draftType: a,
                        isThumbnail: l = !1,
                        filesMetadata: n = []
                    } = e, o = Array.from(i).map((e, i) => {
                        let a = null != n ? n[i] : {};
                        return new c.CloudUpload({
                            file: e,
                            platform: p.UploadPlatform.WEB,
                            isThumbnail: l,
                            ...a
                        }, t)
                    });
                    P({
                        channelId: t,
                        uploads: o,
                        draftType: a
                    })
                },
                upload: function e(t) {
                    let {
                        channelId: i,
                        file: s,
                        draftType: u,
                        message: d,
                        hasSpoiler: c,
                        filename: p
                    } = t, f = {
                        content: "",
                        tts: !1,
                        hasSpoiler: c,
                        filename: p
                    };
                    if (null != d) {
                        f.content = d.content, f.tts = d.tts, f.channel_id = d.channel_id;
                        let e = R.default.getPendingReply(i);
                        if (null != e) {
                            let t = o.default.getSendMessageOptionsForReply(e);
                            f.type = N.MessageTypes.REPLY, f.message_reference = t.messageReference, f.allowed_mentions = t.allowedMentions, (0, _.deletePendingReply)(i)
                        }
                    }
                    let T = new h.default(N.Endpoints.MESSAGES(i));
                    T.on("start", e => {
                        l.default.dispatch({
                            type: "UPLOAD_START",
                            channelId: i,
                            file: e,
                            uploader: T
                        })
                    }), T.on("progress", e => {
                        l.default.dispatch({
                            type: "UPLOAD_PROGRESS",
                            channelId: i,
                            file: e
                        })
                    }), T.on("error", (t, c) => {
                        if (l.default.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: i,
                                file: t
                            }), (0, E.logMessageSendFailure)({
                                fileItems: t.items,
                                failureCode: c
                            }), c === N.AbortCodes.EXPLICIT_CONTENT) {
                            o.default.sendClydeError(i, c);
                            return
                        }(0, r.openUploadError)({
                            title: S.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                            help: S.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                                onClick: () => {
                                    (0, a.closeModal)(r.UPLOAD_ERROR_MODAL_KEY), e({
                                        channelId: i,
                                        file: s,
                                        draftType: u,
                                        message: d
                                    })
                                }
                            })
                        }), "" !== f.content && "" === C.default.getDraft(i, u) && n.default.saveDraft(i, f.content, u)
                    }), T.on("complete", e => {
                        l.default.dispatch({
                            type: "UPLOAD_COMPLETE",
                            channelId: i,
                            file: e
                        })
                    }), T.upload(s, f)
                },
                uploadFiles: P,
                cancel(e) {
                    if (l.default.dispatch({
                            type: "UPLOAD_CANCEL_REQUEST",
                            file: e
                        }), null != e.draftContent && null != e.channelId) {
                        let t = C.default.getDraft(e.channelId, C.DraftType.ChannelMessage);
                        "" === t && l.default.dispatch({
                            type: "DRAFT_SAVE",
                            channelId: e.channelId,
                            draft: e.draftContent,
                            draftType: C.DraftType.ChannelMessage
                        })
                    }
                }
            }
        },
        281862: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PinIcon: function() {
                    return o
                }
            });
            var a = i("37983");
            i("884691");
            var l = i("669491"),
                n = i("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...r
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, n.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M19.38 11.38a3 3 0 0 0 4.24 0l.03-.03a.5.5 0 0 0 0-.7L13.35.35a.5.5 0 0 0-.7 0l-.03.03a3 3 0 0 0 0 4.24L13 5l-2.92 2.92-3.65-.34a2 2 0 0 0-1.6.58l-.62.63a1 1 0 0 0 0 1.42l9.58 9.58a1 1 0 0 0 1.42 0l.63-.63a2 2 0 0 0 .58-1.6l-.34-3.64L19 11l.38.38ZM9.07 17.07a.5.5 0 0 1-.08.77l-5.15 3.43a.5.5 0 0 1-.63-.06l-.42-.42a.5.5 0 0 1-.06-.63L6.16 15a.5.5 0 0 1 .77-.08l2.14 2.14Z",
                        className: s
                    })
                })
            }
        },
        681736: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            }), i("424973");
            var a, l = i("872717"),
                n = i("448993"),
                o = i("981112"),
                s = i("966724"),
                r = i("980134"),
                u = i("782340");
            a = class extends o.default {
                async uploadFiles(e, t) {
                    let {
                        addFilesTo: i
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    super.upload({
                        name: u.default.Messages.ATTACHMENT_PROCESSING
                    }, t, e);
                    let a = new AbortController;
                    try {
                        if (this.files = e, this._aborted) return;
                        if (this._handleStart(() => a.abort()), !await this.compressAndCheckFileSize()) return;
                        this.setUploadingTextForUI(), await (0, o.stageAttachmentFiles)(this.files, !0, this._recomputeProgress.bind(this))
                    } catch (e) {
                        this._handleException(e)
                    }
                    try {
                        return await this._createMessage(a.signal, t, i)
                    } catch (e) {
                        if (this._raiseEndpointErrors) throw e;
                        this._handleException(e)
                    }
                }
                async _createMessage(e, t, i) {
                    let a;
                    let o = [];
                    this.files.forEach((e, t) => {
                        let i = (0, r.getAttachmentPayload)(e, t);
                        e.item.platform === s.UploadPlatform.WEB && o.push({
                            ...i
                        })
                    }), a = null != i && null != t ? this._addAttachmentsToPayload(t, i, o) : {
                        ...t,
                        attachments: o
                    };
                    let u = {
                            url: this._url,
                            body: a,
                            signal: e
                        },
                        d = "POST" === this._method ? l.default.post : l.default.patch;
                    try {
                        let e = await d(u);
                        return this._handleComplete(e.body), e.body
                    } catch (e) {
                        var c;
                        if (this._raiseEndpointErrors) throw new n.APIError(e);
                        this._handleError({
                            code: null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.code,
                            body: null == e ? void 0 : e.body
                        })
                    }
                }
                constructor(e, t = "POST", i) {
                    super(e, t, i)
                }
            }
        },
        58533: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            }), i("222007");
            var a = i("37983"),
                l = i("884691"),
                n = i("516555"),
                o = i("907002"),
                s = i("458960"),
                r = i("430568"),
                u = i("526887"),
                d = i("140708"),
                c = i("983782"),
                p = i("315102"),
                h = i("402671"),
                f = i("172858"),
                T = i("612683");
            let m = [];

            function E(e) {
                let {
                    messageId: t,
                    emoji: i,
                    startPosition: E,
                    targetPosition: g
                } = e, [_, R] = l.useState(0), [I, C] = l.useState(0), [O, v] = l.useState(null), {
                    confettiCanvas: A
                } = l.useContext(u.ConfettiCannonContext), N = (0, n.useConfettiCannon)(A, O), S = l.useMemo(() => {
                    let e = null == i.id ? h.default.getURL(i.name) : p.default.getEmojiURL({
                        id: i.id,
                        animated: !1,
                        size: 22
                    });
                    return [{
                        src: e,
                        colorize: !1
                    }]
                }, [i.name, i.id]), P = g.x - g.width / 2 * .5, L = g.y - g.height / 2 * .5, y = (0, o.useSpring)({
                    from: {
                        y: E.y
                    },
                    to: {
                        y: L
                    },
                    config: {
                        duration: 450,
                        easing: s.default.Easing.in(s.default.Easing.exp)
                    },
                    onChange: e => {
                        let {
                            y: t
                        } = e;
                        C(t)
                    }
                }), j = (0, o.useSpring)({
                    from: {
                        x: E.x,
                        scale: 1,
                        opacity: 1
                    },
                    to: {
                        x: P,
                        scale: .5,
                        opacity: .4
                    },
                    config: {
                        duration: 450,
                        easing: s.default.Easing.in(s.default.Easing.ease)
                    },
                    onRest: () => {
                        (0, d.clearReactionPickerAnimation)(t, i.name, i.id)
                    },
                    onChange: e => {
                        let {
                            x: t
                        } = e;
                        R(t)
                    }
                });
                return l.useEffect(() => {
                    _ > 0 && I > 0 && N.createConfetti({
                        ...f.COMMON_CONFETTI_BASE_CONFIG,
                        position: {
                            type: "static",
                            value: {
                                x: _,
                                y: I
                            }
                        }
                    })
                }, [N, _, I]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(n.SpriteCanvas, {
                        ref: v,
                        sprites: S,
                        colors: m,
                        spriteWidth: f.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                        spriteHeight: f.COMMON_CONFETTI_MAX_SPRITE_SIZE
                    }), (0, a.jsx)(c.default, {
                        children: (0, a.jsx)(o.animated.div, {
                            style: {
                                ...y
                            },
                            className: T.emojiContainer,
                            children: (0, a.jsx)(o.animated.div, {
                                style: {
                                    ...j,
                                    opacity: j.opacity
                                },
                                children: (0, a.jsx)(r.default, {
                                    className: T.emoji,
                                    emojiId: i.id,
                                    emojiName: i.name,
                                    animated: i.animated,
                                    size: "jumbo"
                                })
                            })
                        })
                    })]
                })
            }
        },
        102873: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useEmojiColorPalette: function() {
                    return r
                }
            });
            var a = i("446674"),
                l = i("819855"),
                n = i("206230"),
                o = i("161778"),
                s = i("584375");
            let r = e => {
                let t = (0, a.useStateFromStores)([n.default], () => n.default.saturation),
                    i = (0, a.useStateFromStores)([o.default], () => (0, l.isThemeDark)(o.default.theme));
                return (0, s.buildEmojiColorPalette)(e, t, i)
            }
        },
        13066: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                LurkerModeUpsellPopoutTypes: function() {
                    return a
                },
                default: function() {
                    return m
                }
            }), i("222007");
            var a, l, n = i("37983"),
                o = i("884691"),
                s = i("446674"),
                r = i("77078"),
                u = i("851387"),
                d = i("476765"),
                c = i("449008"),
                p = i("267567"),
                h = i("49111"),
                f = i("782340"),
                T = i("404637");
            (l = a || (a = {}))[l.CHAT = 0] = "CHAT", l[l.REACTIONS = 1] = "REACTIONS";
            var m = e => {
                let {
                    type: t,
                    guild: a,
                    closePopout: l,
                    ctaRef: m
                } = e, E = (0, d.useUID)(), [g, _] = o.useState(!1), R = (0, s.useStateFromStores)([p.default], () => p.default.isLurking(a.id), [a.id]);
                o.useEffect(() => {
                    g && !R && l()
                }, [g, R, l]);
                let I = null,
                    C = f.default.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
                switch (t) {
                    case 0:
                        I = f.default.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
                        break;
                    case 1:
                        I = f.default.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
                        break;
                    default:
                        return (0, c.assertNever)(t)
                }
                if (null == I) return null;
                let O = async () => {
                    _(!0);
                    try {
                        await u.default.joinGuild(a.id, {
                            source: h.JoinGuildSources.CHAT_INPUT_BLOCKER
                        }), l()
                    } catch {
                        _(!1)
                    }
                };
                return (0, n.jsxs)(r.Dialog, {
                    className: T.container,
                    "aria-labelledby": E,
                    children: [(0, n.jsx)("img", {
                        alt: "",
                        className: T.image,
                        src: i("748301")
                    }), (0, n.jsxs)("div", {
                        className: T.content,
                        children: [(0, n.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            id: E,
                            children: I
                        }), (0, n.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: C
                        }), (0, n.jsxs)("div", {
                            className: T.buttonContainer,
                            children: [(0, n.jsx)(r.Button, {
                                buttonRef: m,
                                onClick: O,
                                submitting: g,
                                children: f.default.Messages.LURKER_MODE_POPOUT_JOIN
                            }), (0, n.jsx)(r.Button, {
                                onClick: l,
                                look: r.Button.Looks.BLANK,
                                className: T.cancel,
                                children: f.default.Messages.LURKER_MODE_POPOUT_CANCEL
                            })]
                        })]
                    })]
                })
            }
        },
        583022: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var a = e => {
                let {
                    channel: t,
                    canChat: i,
                    renderReactions: a,
                    canAddNewReactions: l,
                    isLurking: n,
                    isGuest: o,
                    communicationDisabled: s,
                    isActiveChannelOrUnarchivableThread: r
                } = e, u = t.isPrivate(), d = t.isSystemDM(), c = (i || u) && r;
                return {
                    disableReactionReads: !a,
                    disableReactionCreates: n || o || !c || !((!0 === l || u) && !d && r),
                    disableReactionUpdates: n || o || !c || !0 === s
                }
            }
        },
        331011: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getReactionTooltipText: function() {
                    return p
                }
            });
            var a = i("917351"),
                l = i.n(a),
                n = i("432173"),
                o = i("42203"),
                s = i("486996"),
                r = i("27618"),
                u = i("387111"),
                d = i("875978"),
                c = i("782340");

            function p(e, t) {
                var i;
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.ReactionTypes.NORMAL,
                    p = arguments.length > 3 ? arguments[3] : void 0,
                    h = s.default.getReactions(e.getChannelId(), e.id, t, 3, a),
                    f = o.default.getChannel(e.getChannelId()),
                    T = null == f || f.isPrivate() ? null : f.getGuildId(),
                    m = e.getReaction(t),
                    E = a === d.ReactionTypes.BURST,
                    g = l(h).reject(e => r.default.isBlocked(e.id)).take(3).map(e => u.default.getName(T, null == f ? void 0 : f.id, e)).value();
                if (0 === g.length) return "";
                let _ = {
                        standard: {
                            reactionTooltip1NInteractive: c.default.Messages.REACTION_TOOLTIP_1_N_INTERACTIVE,
                            reactionTooltip1N: c.default.Messages.REACTION_TOOLTIP_1_N,
                            reactionTooltip1: c.default.Messages.REACTION_TOOLTIP_1,
                            reactionTooltip2NInteractive: c.default.Messages.REACTION_TOOLTIP_2_N_INTERACTIVE,
                            reactionTooltip2N: c.default.Messages.REACTION_TOOLTIP_2_N,
                            reactionTooltip2: c.default.Messages.REACTION_TOOLTIP_2,
                            reactionTooltip3NInteractive: c.default.Messages.REACTION_TOOLTIP_3_N_INTERACTIVE,
                            reactionTooltip3N: c.default.Messages.REACTION_TOOLTIP_3_N,
                            reactionTooltip3: c.default.Messages.REACTION_TOOLTIP_3,
                            reactionTooltipNInteractive: c.default.Messages.REACTION_TOOLTIP_N_INTERACTIVE,
                            reactionTooltipN: c.default.Messages.REACTION_TOOLTIP_N
                        },
                        burst: {
                            reactionTooltip1NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_1_N_INTERACTIVE,
                            reactionTooltip1N: c.default.Messages.BURST_REACTION_TOOLTIP_1_N,
                            reactionTooltip1: c.default.Messages.BURST_REACTION_TOOLTIP_1,
                            reactionTooltip2NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_2_N_INTERACTIVE,
                            reactionTooltip2N: c.default.Messages.BURST_REACTION_TOOLTIP_2_N,
                            reactionTooltip2: c.default.Messages.BURST_REACTION_TOOLTIP_2,
                            reactionTooltip3NInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_3_N_INTERACTIVE,
                            reactionTooltip3N: c.default.Messages.BURST_REACTION_TOOLTIP_3_N,
                            reactionTooltip3: c.default.Messages.BURST_REACTION_TOOLTIP_3,
                            reactionTooltipNInteractive: c.default.Messages.BURST_REACTION_TOOLTIP_N_INTERACTIVE,
                            reactionTooltipN: c.default.Messages.BURST_REACTION_TOOLTIP_N
                        }
                    },
                    R = E ? _.burst : _.standard,
                    I = null !== (i = E ? null == m ? void 0 : m.burst_count : null == m ? void 0 : m.count) && void 0 !== i ? i : 0,
                    C = Math.max(0, I - g.length),
                    O = (0, n.getReactionEmojiName)(t);
                if (1 === g.length) return C > 0 ? null != p ? R.reactionTooltip1NInteractive.format({
                    a: g[0],
                    n: C,
                    emojiName: O,
                    onClick: p
                }) : R.reactionTooltip1N.format({
                    a: g[0],
                    n: C,
                    emojiName: O
                }) : R.reactionTooltip1.format({
                    a: g[0],
                    emojiName: O
                });
                if (2 === g.length) return C > 0 ? null != p ? R.reactionTooltip2NInteractive.format({
                    a: g[0],
                    b: g[1],
                    n: C,
                    emojiName: O,
                    onClick: p
                }) : R.reactionTooltip2N.format({
                    a: g[0],
                    b: g[1],
                    n: C,
                    emojiName: O
                }) : R.reactionTooltip2.format({
                    a: g[0],
                    b: g[1],
                    emojiName: O
                });
                if (3 === g.length) return C > 0 ? null != p ? R.reactionTooltip3NInteractive.format({
                    a: g[0],
                    b: g[1],
                    c: g[2],
                    n: C,
                    emojiName: O,
                    onClick: p
                }) : R.reactionTooltip3N.format({
                    a: g[0],
                    b: g[1],
                    c: g[2],
                    n: C,
                    emojiName: O
                }) : R.reactionTooltip3.format({
                    a: g[0],
                    b: g[1],
                    c: g[2],
                    emojiName: O
                });
                else return null != p ? R.reactionTooltipNInteractive.format({
                    n: C,
                    emojiName: O,
                    onClick: p
                }) : R.reactionTooltipN.format({
                    n: C,
                    emojiName: O
                })
            }
        },
        350134: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                REACTION_MIN_WIDTH_DIGITS: function() {
                    return eo
                },
                showReactionsModal: function() {
                    return es
                },
                isMeReaction: function() {
                    return er
                },
                Reaction: function() {
                    return ed
                }
            }), i("222007");
            var a = i("37983"),
                l = i("884691"),
                n = i("414456"),
                o = i.n(n),
                s = i("748820"),
                r = i("458960"),
                u = i("509043"),
                d = i("446674"),
                c = i("862337"),
                p = i("130969"),
                h = i("77078"),
                f = i("430568"),
                T = i("57155"),
                m = i("206230"),
                E = i("716241"),
                g = i("58533"),
                _ = i("385976"),
                R = i("858619"),
                I = i("102873"),
                C = i("865453"),
                O = i("233322"),
                v = i("252931"),
                A = i("529932"),
                N = i("446066"),
                S = i("13066"),
                P = i("785621"),
                L = i("635956"),
                y = i("85589"),
                j = i("166257"),
                x = i("432173"),
                M = i("845579"),
                U = i("42203"),
                b = i("305961"),
                D = i("486996"),
                B = i("162771"),
                k = i("697218"),
                w = i("471671"),
                V = i("738107"),
                F = i("791106"),
                G = i("256170"),
                H = i("216422"),
                K = i("599110"),
                W = i("719923"),
                J = i("15935"),
                z = i("875978"),
                Y = i("412745"),
                X = i("459698"),
                Z = i("933629"),
                q = i("331011"),
                Q = i("81924"),
                $ = i("49111"),
                ee = i("646718"),
                et = i("782340"),
                ei = i("154403"),
                ea = i("550244"),
                el = i("314934"),
                en = i("219468");
            let eo = 9;

            function es(e, t, i) {
                (0, h.openModal)(e => (0, a.jsx)(T.default, {
                    ...e,
                    message: t,
                    selectedReaction: i
                }))
            }

            function er(e, t, i) {
                return i === z.ReactionTypes.BURST && t || i === z.ReactionTypes.NORMAL && e
            }
            class eu extends l.PureComponent {
                componentWillAppear(e) {
                    this.animateIn(e)
                }
                componentWillEnter(e) {
                    this.animateIn(e)
                }
                componentWillUnmount() {
                    this.hideTooltip()
                }
                animateIn(e) {
                    let {
                        autoUnfurlReactionTooltip: t
                    } = this.props;
                    w.default.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), r.default.parallel([r.default.timing(this.scale, {
                        toValue: 1,
                        duration: t ? 200 : 300,
                        easing: r.default.Easing.inOut(r.default.Easing.back())
                    }), r.default.timing(this.opacity, {
                        toValue: 1,
                        duration: t ? 200 : 300
                    })]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
                }
                render() {
                    let e, t;
                    let {
                        count: i,
                        burst_count: l,
                        colors: n,
                        isBurstReaction: s,
                        hideCount: d,
                        emoji: c,
                        readOnly: p,
                        isLurking: T,
                        isGuest: m,
                        isPendingMember: E,
                        className: _,
                        useChatFontScaling: R,
                        message: I,
                        hideEmoji: C,
                        animationStartPosition: O
                    } = this.props, {
                        shouldShowTooltip: v,
                        tooltipTextAria: A,
                        reactionRef: N,
                        tooltipPositionKey: S
                    } = this.state, L = R ? el : ea, y = {
                        transform: [{
                            scale: this.scale
                        }],
                        opacity: this.opacity
                    }, j = s ? l : i;
                    if (s && null != n) {
                        var M;
                        let {
                            accentColor: i,
                            backgroundColor: a,
                            opacity: l
                        } = n, o = null !== (M = (0, u.hex2rgb)(null != a ? a : "", l)) && void 0 !== M ? M : "";
                        this.isMe() && (y.borderColor = a), y.background = o, e = i, t = i
                    }
                    let U = null == N ? void 0 : N.getBoundingClientRect(),
                        b = null != O && null != U,
                        D = null == O;
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(h.Popout, {
                            shouldShow: v,
                            "aria-label": null != A && A,
                            renderPopout: this.renderTooltip,
                            nudgeAlignIntoViewport: !0,
                            position: "top",
                            align: "center",
                            positionKey: S,
                            children: () => (0, a.jsx)("div", {
                                onMouseEnter: this.handleEnter,
                                onMouseLeave: this.handleLeave,
                                ref: this.handleSetReactionRef,
                                children: (0, a.jsx)(r.default.div, {
                                    className: o(L.reaction, _, {
                                        [L.reactionMe]: this.isMe(),
                                        [L.reactionReadOnly]: p && !T && !E && !m,
                                        [L.shakeReaction]: C && null == O
                                    }),
                                    style: y,
                                    children: (0, a.jsx)(h.Popout, {
                                        renderPopout: this.renderLurkerModeUpsellPopout,
                                        position: "top",
                                        children: i => (0, a.jsxs)(h.Clickable, {
                                            ...i,
                                            className: L.reactionInner,
                                            onClick: this.handleClick,
                                            "aria-disabled": p,
                                            "aria-label": (0, x.getAccessibleEmojiDisplayName)(this.isMe(), j, c, s),
                                            "aria-pressed": this.isMe(),
                                            children: [(0, a.jsx)("div", {
                                                className: o({
                                                    [L.burstGlow]: s
                                                }),
                                                style: {
                                                    boxShadow: "0 0 16px ".concat(t)
                                                }
                                            }), (0, a.jsxs)("div", {
                                                children: [s ? (0, a.jsxs)(a.Fragment, {
                                                    children: [b && (0, a.jsx)(g.default, {
                                                        messageId: I.id,
                                                        emoji: c,
                                                        startPosition: O,
                                                        targetPosition: U
                                                    }), D && (0, a.jsx)(Q.default, {
                                                        count: l,
                                                        emoji: c,
                                                        channelId: I.getChannelId(),
                                                        messageId: I.id,
                                                        useChatFontScaling: R,
                                                        color: t
                                                    })]
                                                }) : null, (0, a.jsx)(f.default, {
                                                    className: o({
                                                        [L.hideEmoji]: C
                                                    }),
                                                    emojiId: c.id,
                                                    emojiName: c.name,
                                                    size: "reaction",
                                                    animated: c.animated
                                                })]
                                            }), d ? null : (0, a.jsx)(V.default, {
                                                className: L.reactionCount,
                                                value: j,
                                                color: e,
                                                digitWidth: eo
                                            }), (0, a.jsx)(P.default, {
                                                count: j,
                                                reactionRef: N
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.scale = new r.default.Value(1), this.opacity = new r.default.Value(1), this.timeout = new c.Timeout, this.hideTimeout = new c.Timeout, this.ctaRef = l.createRef(), this.type = z.ReactionTypes.NORMAL, this.colors = {
                        backgroundColor: void 0,
                        borderColor: void 0,
                        textColor: void 0
                    }, this.state = {
                        shouldShowTooltip: !1,
                        tooltipText: null,
                        tooltipTextAria: null,
                        reactionRef: null,
                        tooltipPositionKey: void 0
                    }, this.hasShownTooltip = !1, this.nonce = (0, s.v4)(), this.userCanBurstReact = () => this.props.userHasPremium, this.handleClick = e => {
                        e.stopPropagation();
                        let {
                            message: t,
                            emoji: i,
                            readOnly: a,
                            isBurstReaction: l,
                            isPendingMember: n,
                            isLurking: o,
                            isGuest: s,
                            isForumToolbar: r
                        } = this.props, u = U.default.getChannel(t.getChannelId());
                        if (o || s) {
                            var d, c;
                            null === (c = this.ctaRef) || void 0 === c || null === (d = c.current) || void 0 === d || d.focus();
                            return
                        }
                        let p = t.getChannelId(),
                            h = r ? j.ReactionLocations.FORUM_TOOLBAR : j.ReactionLocations.MESSAGE;
                        if (l && !this.userCanBurstReact()) {
                            (0, y.openBurstReactionsUpsellModal)({
                                analytics: {
                                    type: ee.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                                    page: (null == u ? void 0 : u.getGuildId()) != null ? $.AnalyticsPages.GUILD_CHANNEL : $.AnalyticsPages.DM_CHANNEL,
                                    section: null != u ? (0, x.getBurstAnalyticsSection)(u) : void 0,
                                    object: $.AnalyticsObjects.EMOJI_REACTION_UPSELL
                                }
                            });
                            return
                        }
                        n ? this.handleShowVerificationGate() : !a && (this.isMe() ? (0, j.removeReaction)(p, t.id, i, void 0, h, {
                            burst: l
                        }) : (0, j.addReaction)(p, t.id, i, h, {
                            burst: l
                        }))
                    }, this.handleEnter = e => {
                        let {
                            emoji: t,
                            message: i,
                            type: a,
                            reduceMotion: l,
                            animateEmoji: n,
                            autoUnfurlReactionTooltip: o
                        } = this.props, s = a === z.ReactionTypes.BURST;
                        s && !this.isReactionEventActive && !l && n && (0, j.playBurstReaction)({
                            channelId: i.getChannelId(),
                            messageId: i.id,
                            emoji: t,
                            key: J.BurstReactionEffectSource.HOVER
                        }), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(s ? 750 : o ? 200 : 500, this.showTooltip, !1)
                    }, this.handleEnterTooltip = () => {
                        this.isReactionEventActive = !0, this.handleShowTooltip()
                    }, this.handleShowTooltip = () => {
                        this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), D.default.addChangeListener(this.updateTooltipText))
                    }, this.showTooltip = () => {
                        this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0
                    }, this.handleLeave = () => {
                        this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), D.default.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
                    }, this.hideTooltip = () => {
                        this.setState({
                            shouldShowTooltip: !1
                        }), this.hasShownTooltip && K.default.track($.AnalyticEvents.CLOSE_POPOUT, {
                            nonce: this.nonce
                        })
                    }, this.isMe = () => {
                        let {
                            me: e,
                            me_burst: t,
                            type: i
                        } = this.props;
                        return er(e, t, i)
                    }, this.updateTooltipText = () => {
                        let {
                            message: e,
                            emoji: t,
                            type: i
                        } = this.props, a = (0, q.getReactionTooltipText)(e, t, i), l = this.isKeyboardNavigation ? a : (0, q.getReactionTooltipText)(e, t, i, $.NOOP);
                        this.setState({
                            tooltipText: l,
                            tooltipTextAria: a,
                            shouldShowTooltip: null != l && "" !== l
                        })
                    }, this.renderLurkerModeUpsellPopout = e => {
                        let {
                            closePopout: t
                        } = e, {
                            message: i,
                            isLurking: l
                        } = this.props, n = U.default.getChannel(i.getChannelId()), o = b.default.getGuild(null == n ? void 0 : n.getGuildId());
                        return l && null != o ? (0, a.jsx)(S.default, {
                            ctaRef: this.ctaRef,
                            type: S.LurkerModeUpsellPopoutTypes.REACTIONS,
                            guild: o,
                            closePopout: t
                        }) : (0, a.jsx)(a.Fragment, {})
                    }, this.renderEmojiDetails = () => {
                        let e = this.props.emoji;
                        return null != e.id && (0, a.jsx)(ep, {
                            emojiId: e.id,
                            refreshPositionKey: this.refreshTooltipPositionKey,
                            onClose: this.handleLeave,
                            nonce: this.nonce
                        })
                    }, this.renderTooltip = () => {
                        let {
                            emoji: e,
                            message: t,
                            type: i,
                            me_burst: l,
                            isBurstReaction: n = !1
                        } = this.props, {
                            tooltipText: s
                        } = this.state, r = i => {
                            let a = U.default.getChannel(t.getChannelId());
                            if (null == a) return;
                            this.handleLeave();
                            let l = n ? z.ReactionTypes.BURST : z.ReactionTypes.NORMAL;
                            es(a, t, {
                                emoji: e,
                                reactionType: l
                            })
                        }, u = "string" == typeof s, d = u ? "" === s.trim() : null == s, c = () => d || null == s ? null : (0, a.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            className: en.reactionTooltipText,
                            "aria-label": s,
                            children: s
                        });
                        return i === z.ReactionTypes.BURST ? (0, a.jsxs)(p.Dialog, {
                            className: en.reactionTooltip,
                            onMouseEnter: this.handleEnterTooltip,
                            onMouseLeave: this.handleLeave,
                            children: [(0, a.jsx)(h.Clickable, {
                                className: en.burstReactionTooltipInner,
                                onClick: r,
                                children: (0, a.jsxs)("div", {
                                    className: en.burstReactionTooltipMessage,
                                    children: [(0, a.jsx)(f.default, {
                                        className: en.reactionTooltipEmoji,
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated,
                                        size: this.props.emojiSize
                                    }), c()]
                                })
                            }), (() => {
                                let e = k.default.getCurrentUser();
                                if (l) return (0, a.jsxs)("div", {
                                    className: o(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                    children: [(0, W.isPremium)(e) && (0, a.jsx)(H.default, {
                                        className: en.burstReactionTooltipNitroIcon,
                                        color: F.GradientCssUrls.PREMIUM_TIER_2
                                    }), (0, a.jsx)(h.Text, {
                                        variant: "text-sm/normal",
                                        className: en.reactionTooltipText,
                                        "aria-label": "super reaction tooltip cta",
                                        children: et.default.Messages.SUPER_REACTION_TOOLTIP_CTA_REACTED
                                    })]
                                });
                                if (this.userCanBurstReact()) return (0, a.jsxs)("div", {
                                    className: o(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer, en.burstReactionTooltipPromptClickable),
                                    children: [(0, a.jsx)(H.default, {
                                        className: en.burstReactionTooltipNitroIcon,
                                        color: F.GradientCssUrls.PREMIUM_TIER_2
                                    }), (0, a.jsx)(h.Clickable, {
                                        onClick: this.handleClick,
                                        children: (0, a.jsx)(h.Text, {
                                            variant: "text-sm/normal",
                                            className: en.reactionTooltipText,
                                            "aria-label": "super reaction tooltip cta",
                                            children: et.default.Messages.SUPER_REACTION_TOOLTIP_CTA
                                        })
                                    })]
                                });
                                if (!this.userCanBurstReact() && !this.isKeyboardNavigation) return (0, a.jsx)("div", {
                                    className: o(en.burstReactionTooltipPrompt, en.burstReactionTooltipSpacer),
                                    children: (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)(h.Text, {
                                            variant: "text-sm/normal",
                                            "aria-label": "super reaction tooltip upsell",
                                            children: et.default.Messages.SUPER_REACTION_TOOLTIP_UPSELL
                                        }), (0, a.jsx)(L.default, {
                                            subscriptionTier: ee.PremiumSubscriptionSKUs.TIER_2,
                                            buttonText: et.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                                            className: en.burstReactionTooltipUpsellCta,
                                            onClick: e => e.stopPropagation()
                                        })]
                                    })
                                });
                                return null
                            })(), this.renderEmojiDetails()]
                        }) : (0, a.jsxs)(p.Dialog, {
                            className: en.reactionTooltip,
                            onMouseEnter: this.handleEnterTooltip,
                            onMouseLeave: this.handleLeave,
                            children: [(0, a.jsx)(h.Clickable, {
                                onClick: r,
                                children: (0, a.jsxs)("div", {
                                    className: en.reactionTooltipInner,
                                    children: [(0, a.jsx)(f.default, {
                                        className: en.reactionTooltipEmoji,
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated,
                                        size: this.props.emojiSize
                                    }), c()]
                                })
                            }), this.renderEmojiDetails()]
                        })
                    }, this.refreshTooltipPositionKey = () => {
                        this.setState({
                            tooltipPositionKey: String(Date.now())
                        })
                    }, this.handleShowVerificationGate = () => {
                        let {
                            message: e,
                            isPendingMember: t
                        } = this.props;
                        if (!t) return null;
                        let i = U.default.getChannel(e.getChannelId()),
                            a = b.default.getGuild(null == i ? void 0 : i.getGuildId());
                        null != a && (0, O.openMemberVerificationModal)(a.id)
                    }, this.handleSetReactionRef = e => {
                        this.setState({
                            reactionRef: e
                        })
                    }, this.trackReactionTooltipViewed = () => {
                        let {
                            emoji: e,
                            message: t,
                            type: i
                        } = this.props, a = k.default.getCurrentUser(), l = U.default.getChannel(t.getChannelId()), n = i === z.ReactionTypes.BURST, o = (0, W.isPremium)(a), s = n ? ee.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER : ee.PremiumUpsellTypes.EMOJI_IN_REACTION_HOVER;
                        n && !this.userCanBurstReact() && !o && (s = ee.PremiumUpsellTypes.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), E.default.trackWithMetadata($.AnalyticEvents.EXPRESSION_TOOLTIP_VIEWED, {
                            type: s,
                            expression_id: e.id,
                            expression_name: e.name,
                            is_animated: e.animated,
                            is_custom: null != e.id,
                            nonce: this.nonce
                        }), n && null != l && !o && !this.userCanBurstReact() && K.default.track($.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: ee.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                            location: {
                                page: (null == l ? void 0 : l.getGuildId()) != null ? $.AnalyticsPages.GUILD_CHANNEL : $.AnalyticsPages.DM_CHANNEL,
                                section: (0, x.getBurstAnalyticsSection)(l),
                                object: $.AnalyticsObjects.EMOJI_REACTION_TOOLTIP_UPSELL
                            }
                        })
                    }
                }
            }
            eu.defaultProps = {
                emojiSize: "jumbo"
            };
            let ed = l.memo(e => {
                    let {
                        type: t,
                        burst_colors: i,
                        message: l,
                        emoji: n
                    } = e, o = t === z.ReactionTypes.BURST, {
                        autoUnfurlReactionTooltip: s
                    } = (0, v.useInventoryGuildPacksUserExperiment)({
                        autoTrackExposure: !1
                    }), r = (0, I.useEmojiColorPalette)(o && null != i ? i : []), u = (0, d.useStateFromStores)([J.default], () => void 0 !== J.default.getEffectForEmojiId(l.getChannelId(), l.id, n)), c = (0, d.useStateFromStores)([m.default], () => m.default.useReducedMotion), p = M.AnimateEmoji.useSetting(), h = k.default.getCurrentUser(), f = (0, W.isPremium)(h), T = (0, d.useStateFromStores)([J.default], () => J.default.getReactionPickerAnimation(l.id, n.name, n.id)), E = o && (u || null != T);
                    return (0, a.jsx)(eu, {
                        ...e,
                        colors: r,
                        isBurstReaction: o,
                        hideEmoji: E,
                        userHasPremium: f,
                        reduceMotion: c,
                        animateEmoji: p,
                        animationStartPosition: T,
                        autoUnfurlReactionTooltip: s
                    })
                }),
                ec = e => {
                    var t;
                    let {
                        emojiId: i,
                        expressionSourceGuild: l,
                        hasJoinedExpressionSourceGuild: n,
                        onClose: o,
                        packCollectionData: s,
                        popoutData: r,
                        currentGuildId: u,
                        nonce: d
                    } = e;
                    (0, C.useTrackOpenPopout)({
                        emojiId: i,
                        currentGuildId: u,
                        popoutData: r,
                        emojiSourceGuildId: null == l ? void 0 : l.id,
                        nonce: d
                    });
                    let c = null !== (t = null == l ? void 0 : l.isDiscoverable()) && void 0 !== t && t,
                        p = s.collectEnabled,
                        f = null !== l && (c || p);
                    return (0, a.jsx)(a.Fragment, {
                        children: f ? null == l ? null : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: ei.reactionEmojiDetailsUnfurlGuildDetails,
                                children: (0, a.jsx)(X.GuildDetails, {
                                    expressionSourceGuild: l,
                                    hasJoinedExpressionSourceGuild: n,
                                    isDisplayingJoinGuildButtonInPopout: r.type === Y.EmojiPopoutType.JOIN_GUILD
                                })
                            }), (0, a.jsx)(X.EmojiPopoutList, {
                                emojiId: i,
                                expressionSourceGuild: l,
                                hasJoinedEmojiSourceGuild: n,
                                onClose: o,
                                popoutData: r,
                                packCollectionData: s,
                                isDisplayingButtonInTopSection: !1,
                                nonce: d
                            })]
                        }) : (0, a.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            "aria-label": r.type,
                            children: r.emojiDescription
                        })
                    })
                },
                ep = e => {
                    var t;
                    let {
                        emojiId: i,
                        refreshPositionKey: n,
                        onClose: s,
                        nonce: r
                    } = e, {
                        joinedEmojiSourceGuild: u
                    } = (0, d.useStateFromStoresObject)([_.default, b.default], () => {
                        let e = _.default.getCustomEmojiById(i);
                        return {
                            joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === R.EmojiTypes.GUILD ? b.default.getGuild(null == e ? void 0 : e.guildId) : void 0
                        }
                    }), [c, p] = l.useState(void 0), [f, T] = l.useState(!1), [m, E] = l.useState(!1), [g, I] = l.useState(!1), C = null != u, O = (0, A.usePackCollectionData)({
                        expressionSourceGuild: c
                    }), v = O.autoUnfurlReactionTooltip, S = null !== (t = null == c ? void 0 : c.isDiscoverable()) && void 0 !== t && t, P = B.default.getGuildId(), L = null != P && (P === (null == c ? void 0 : c.id) || P === (null == u ? void 0 : u.id)), y = (0, Y.getEmojiPopoutData)({
                        isPremium: O.isPremium,
                        hasJoinedEmojiSourceGuild: C,
                        isDiscoverable: S,
                        packCollectionData: O,
                        emojiComesFromCurrentGuild: L,
                        isUnusableRoleSubscriptionEmoji: !1,
                        userIsRoleSubscriber: !1,
                        isRoleSubscriptionEmoji: !1,
                        shouldHideRoleSubscriptionCTA: !1
                    });
                    l.useEffect(() => {
                        let e = !f,
                            t = !v || g;
                        if (e && t) return;
                        let a = async () => {
                            n(), E(!0);
                            let e = await N.default.getGuildFromEmojiId(i);
                            p(e), E(!1), I(!0), n()
                        };
                        a()
                    }, [i, v, f, g, n]);
                    let j = !O.viewAndUseEnabled || C;
                    if (j) return null;
                    let x = () => {
                            T(!f)
                        },
                        M = () => {
                            let e = et.default.Messages.INVENTORY_EMOJI_DETAILS_V2;
                            return (0, a.jsxs)(h.Clickable, {
                                onClick: x,
                                className: ei.reactionEmojiDetailsClickable,
                                children: [(0, a.jsx)(h.Text, {
                                    variant: "text-sm/normal",
                                    color: "none",
                                    "aria-label": e,
                                    children: e
                                }), (0, a.jsx)(G.default, {
                                    width: 16,
                                    height: 16,
                                    className: o(ei.reactionEmojiDetailsArrow, {
                                        [ei.reactionEmojiDetailsArrowCollapsed]: !f
                                    })
                                })]
                            })
                        },
                        U = f && void 0 !== c,
                        D = () => (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: ei.reactionEmojiDetailsDivider
                            }), null != y.emojiDescription && y.type !== Y.EmojiPopoutType.UNAVAILABLE && (0, a.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                "aria-label": y.type,
                                children: y.emojiDescription
                            })]
                        });
                    return v ? (0, a.jsxs)("div", {
                        children: [g ? D() : null, m ? (0, a.jsx)(Z.PopoutLoadingAnimation, {
                            className: ei.emojiDetailsLoader
                        }) : g && (0, a.jsx)(ec, {
                            emojiId: i,
                            expressionSourceGuild: c,
                            hasJoinedExpressionSourceGuild: C,
                            onClose: s,
                            popoutData: y,
                            packCollectionData: O,
                            currentGuildId: P,
                            nonce: r
                        })]
                    }) : (0, a.jsxs)("div", {
                        children: [U ? D() : M(), m ? (0, a.jsx)(Z.PopoutLoadingAnimation, {
                            className: ei.emojiDetailsLoader
                        }) : U && (0, a.jsx)(ec, {
                            emojiId: i,
                            expressionSourceGuild: c,
                            hasJoinedExpressionSourceGuild: C,
                            onClose: s,
                            popoutData: y,
                            packCollectionData: O,
                            currentGuildId: P,
                            nonce: r
                        })]
                    })
                }
        },
        81924: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return m
                }
            }), i("222007");
            var a = i("37983"),
                l = i("884691"),
                n = i("446674"),
                o = i("913144"),
                s = i("206230"),
                r = i("166257"),
                u = i("845579"),
                d = i("15935"),
                c = i("103475"),
                p = i("512306"),
                h = i("941723"),
                f = i("981937"),
                T = i("205591"),
                m = l.memo(function(e) {
                    let {
                        channelId: t,
                        messageId: i,
                        emoji: m,
                        useChatFontScaling: E,
                        color: g,
                        count: _
                    } = e, R = (0, n.useStateFromStores)([d.default], () => d.default.getEffectForEmojiId(t, i, m)), I = E ? T : f, C = l.useMemo(() => (0, h.buildEffect)(m, g, t, {
                        key: R,
                        messageId: i
                    }), [g, R, m, t, i]), [O, v] = l.useState(!1), A = (0, n.useStateFromStores)([s.default], () => s.default.useReducedMotion), N = u.AnimateEmoji.useSetting(), S = l.useCallback(() => {
                        o.default.dispatch({
                            type: "BURST_REACTION_EFFECT_CLEAR",
                            channelId: t,
                            messageId: i,
                            emoji: m
                        })
                    }, [m, t, i]);
                    return (l.useEffect(() => {
                        let e = () => {
                            if (O) return;
                            let e = (0, c.getBurstAnimationHash)("".concat(Date.now()).concat(t).concat(i).concat(m.name)),
                                a = e % 10;
                            (a += _ > 4 ? 4 : _ - 1) > 7 && (v(!0), (0, r.playBurstReaction)({
                                channelId: t,
                                messageId: i,
                                emoji: m,
                                key: d.BurstReactionEffectSource.RANDOM
                            }))
                        };
                        if (O || A && !N || !N) return;
                        e();
                        let a = setInterval(e, 5e3);
                        return () => {
                            clearInterval(a)
                        }
                    }, [N, t, _, m, m.name, O, i, A]), null == R) ? null : (0, a.jsx)(p.default, {
                        className: I.effect,
                        effect: C,
                        onComplete: S
                    })
                })
        },
        232259: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useUsernameHook: function() {
                    return d
                }
            });
            var a = i("37983"),
                l = i("884691"),
                n = i("77078"),
                o = i("506885"),
                s = i("981601"),
                r = i("42203"),
                u = i("441823");

            function d(e, t, i) {
                var d, c;
                let p = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    h = arguments.length > 4 ? arguments[4] : void 0;
                let f = (d = e, c = t, l.useCallback(e => {
                    let t = r.default.getChannel(c);
                    null != t && null != d && (0, u.openUserContextMenu)(e, d, t)
                }, [d, c]));
                return l.useCallback(r => (u, d) => {
                    let c = (e, t) => (0, l.createElement)(n.NameWithRoleAnchor, {
                            ...null != e ? e : {},
                            key: t,
                            onContextMenu: f,
                            name: u,
                            color: null == r ? void 0 : r.colorString,
                            roleName: null == r ? void 0 : r.colorRoleName,
                            "aria-label": h
                        }),
                        T = e => t => {
                            p && t.stopPropagation(), e(t)
                        };
                    return null != e ? (0, a.jsx)(n.Popout, {
                        position: "right",
                        preload: () => (0, o.default)(e.id, e.getAvatarURL(i, 80), {
                            guildId: i,
                            channelId: t
                        }),
                        renderPopout: l => (0, a.jsx)(s.default, {
                            ...l,
                            userId: e.id,
                            guildId: i,
                            channelId: t
                        }),
                        children: e => {
                            let {
                                onClick: t,
                                ...i
                            } = e;
                            return c({
                                onClick: T(t),
                                ...i
                            })
                        }
                    }, d) : c(void 0, d)
                }, [e, t, i, f, p, h])
            }
        },
        785621: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return h
                }
            });
            var a = i("37983"),
                l = i("884691"),
                n = i("917351"),
                o = i("65597"),
                s = i("880731"),
                r = i("232268"),
                u = i("759432"),
                d = i("798592"),
                c = i("39141");

            function p(e) {
                let {
                    reactionRef: t,
                    count: i
                } = e, a = l.useRef(i), r = (0, o.default)([s.default], () => s.default.getState()), c = (0, d.default)(), p = (0, u.default)(t);
                return l.useEffect(() => {
                    if (i > a.current && null != p) {
                        let e = (0, n.clamp)(i, r.confettiCount / 2, 2 * r.confettiCount);
                        c.fire(p.x, p.y, {
                            count: e
                        })
                    }
                    a.current = i
                }, [i, p, c, r.confettiCount]), null
            }

            function h(e) {
                return (0, a.jsx)(r.default, {
                    confettiLocation: c.ConfettiLocation.REACTION,
                    children: (0, a.jsx)(p, {
                        ...e
                    })
                })
            }
        },
        85589: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                },
                openBurstReactionsUpsellModal: function() {
                    return T
                }
            });
            var a = i("37983");
            i("884691");
            var l = i("77078"),
                n = i("79112"),
                o = i("154889"),
                s = i("917247"),
                r = i("789946"),
                u = i("646718"),
                d = i("49111"),
                c = i("782340"),
                p = i("61791"),
                h = i("277064");

            function f(e) {
                var t, i;
                let {
                    onClose: l,
                    analyticsSource: f,
                    ...T
                } = e, m = c.default.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
                    onClick: () => {
                        n.default.open(d.UserSettingsSections.PREMIUM), l()
                    }
                }), E = (0, s.usePremiumTrialOffer)(), g = (0, o.usePremiumDiscountOffer)();
                return (0, a.jsx)(r.default, {
                    artURL: h,
                    artContainerClassName: p.artContainer,
                    modalClassName: p.modalContainer,
                    bodyClassName: p.bodyContainer,
                    type: u.PremiumUpsellTypes.BURST_REACTION_UPSELL,
                    title: c.default.Messages.SUPER_REACTIONS_UPSELL_TITLE,
                    body: m,
                    glowUp: m,
                    analyticsSource: f,
                    analyticsLocation: {
                        page: d.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS,
                        object: d.AnalyticsObjects.BUTTON_CTA
                    },
                    onClose: l,
                    subscribeButtonText: null != E || null != g ? void 0 : c.default.Messages.PREMIUM_SETTINGS_GET,
                    subscriptionTier: null !== (i = null == E ? void 0 : null === (t = E.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== i ? i : u.PremiumSubscriptionSKUs.TIER_2,
                    backButtonText: c.default.Messages.NO_THANKS,
                    ...T
                })
            }

            function T(e) {
                let {
                    analytics: t
                } = e;
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await i.el("85589").then(i.bind(i, "85589"));
                    return i => (0, a.jsx)(e, {
                        analyticsSource: t,
                        ...i
                    })
                })
            }
        },
        738107: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getMinCounterWidth: function() {
                    return f
                },
                default: function() {
                    return o
                }
            });
            var a, l, n, o, s = i("37983"),
                r = i("884691"),
                u = i("917351"),
                d = i.n(u),
                c = i("458960"),
                p = i("471671");

            function h(e, t) {
                return {
                    toValue: e,
                    duration: null != t ? t : 300,
                    easing: c.default.Easing.inOut(c.default.Easing.back())
                }
            }

            function f(e, t, i) {
                if (null != t) {
                    let a = Math.ceil(Math.log10(e + 1));
                    return null != i && i > 0 ? Math.min(a, i) * t : a * t
                }
            }(a = n || (n = {}))[a.ABOVE = 0] = "ABOVE", a[a.VISIBLE = 1] = "VISIBLE", a[a.BELOW = 2] = "BELOW", (l = class extends r.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        prevValue: i,
                        currValue: a,
                        nextValue: l
                    } = t;
                    return null == i && a !== e.value ? {
                        prevValue: p.default.isFocused() ? a : null,
                        currValue: e.value
                    } : null != l && l !== e.value ? {
                        nextValue: e.value
                    } : null
                }
                componentDidUpdate(e, t) {
                    let {
                        prevValue: i,
                        currValue: a
                    } = this.state;
                    i !== t.prevValue && null != i && this.animateBetween(i, a)
                }
                animateBetween(e, t) {
                    let i;
                    let {
                        forcePosition: a,
                        animationSpeed: l
                    } = this.props;
                    this.prevAnimate.setValue(1), null != a ? 0 === a ? (this.currAnimate.setValue(0), i = 2) : 2 === a && (this.currAnimate.setValue(2), i = 0) : e > t ? (this.currAnimate.setValue(0), i = 2) : (this.currAnimate.setValue(2), i = 0), c.default.parallel([c.default.timing(this.prevAnimate, h(i, l)), c.default.timing(this.currAnimate, h(1, l))]).start(this.animateNext)
                }
                getAnimatedStyle(e) {
                    let {
                        animationColor: t
                    } = this.props;
                    return {
                        transform: [{
                            translateY: e.interpolate({
                                inputRange: [0, 1, 2],
                                outputRange: ["-100%", "0%", "100%"]
                            })
                        }],
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        ...null != t && {
                            color: t
                        }
                    }
                }
                getMinWidth(e) {
                    let {
                        digitWidth: t,
                        padStartLength: i
                    } = this.props;
                    return f(e, t, i)
                }
                padValue(e) {
                    let {
                        padStartLength: t
                    } = this.props;
                    return null != t ? String(e).padStart(t, "0") : e
                }
                render() {
                    let {
                        prevValue: e,
                        currValue: t
                    } = this.state, {
                        color: i,
                        formatString: a
                    } = this.props, l = d.omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
                    if (null == e) return (0, s.jsx)("div", {
                        ...l,
                        style: {
                            color: i,
                            minWidth: this.getMinWidth(t)
                        },
                        children: null != a ? a(this.padValue(t)) : this.padValue(t)
                    });
                    let n = Math.max(e, t);
                    return (0, s.jsxs)("div", {
                        ...l,
                        style: {
                            color: i,
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [(0, s.jsx)("div", {
                            style: {
                                visibility: "hidden",
                                minWidth: this.getMinWidth(n)
                            },
                            children: this.padValue(n)
                        }), (0, s.jsx)(c.default.div, {
                            style: {
                                color: i,
                                ...this.getAnimatedStyle(this.prevAnimate)
                            },
                            children: null != a ? a(this.padValue(e)) : this.padValue(e)
                        }), (0, s.jsx)(c.default.div, {
                            style: {
                                color: i,
                                ...this.getAnimatedStyle(this.currAnimate)
                            },
                            children: null != a ? a(this.padValue(t)) : this.padValue(t)
                        })]
                    })
                }
                constructor(e) {
                    super(e), this.animateNext = () => {
                        let {
                            currValue: e,
                            nextValue: t
                        } = this.state;
                        null != t ? this.setState({
                            prevValue: p.default.isFocused() ? e : null,
                            currValue: t,
                            nextValue: null
                        }) : this.setState({
                            prevValue: null
                        })
                    }, this.state = {
                        prevValue: null,
                        currValue: e.value,
                        nextValue: null
                    }, this.prevAnimate = new c.default.Value(0), this.currAnimate = new c.default.Value(1)
                }
            }).Positions = n, o = l
        },
        305515: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                Future: function() {
                    return a
                }
            });
            class a {
                constructor() {
                    this.promise = new Promise((e, t) => {
                        this.resolve = e, this.reject = t
                    })
                }
            }
        }
    }
]);