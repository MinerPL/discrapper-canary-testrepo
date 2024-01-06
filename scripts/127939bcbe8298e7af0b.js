(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31669"], {
        827560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                u = n("77078"),
                o = n("244201"),
                i = n("778588"),
                s = n("144747"),
                r = n("49111");

            function d() {
                let e = (0, u.useModalsStore)(e => !Object.entries(e).every(e => {
                        let [t, n] = e;
                        return 0 === n.length
                    })),
                    t = (0, a.useStateFromStores)([s.default], () => s.default.isOpen()),
                    n = (0, a.useStateFromStores)([i.default], () => i.default.hasLayers()),
                    [d, c] = l.useState(!1),
                    f = (0, o.useWindowDispatch)();
                return l.useEffect(() => {
                    function e() {
                        c(!0)
                    }

                    function t() {
                        c(!1)
                    }
                    return f.subscribe(r.ComponentActions.POPOUT_SHOW, e), f.subscribe(r.ComponentActions.POPOUT_HIDE, t), () => {
                        f.unsubscribe(r.ComponentActions.POPOUT_SHOW, e), f.unsubscribe(r.ComponentActions.POPOUT_HIDE, t)
                    }
                }, [f]), e || t || d || n
            }
        },
        292381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            class l extends Map {
                set(e, t) {
                    return this.size >= this.maxSize && this.delete(this.keys().next().value), super.set(e, t)
                }
                constructor(e) {
                    super(), this.maxSize = e
                }
            }
            var a = l
        },
        157945: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("884691"),
                a = n("917351"),
                u = n("446674"),
                o = n("827560"),
                i = n("244201"),
                s = n("206230"),
                r = n("659500"),
                d = n("49111");
            let c = (0, a.debounce)(e => {
                setTimeout(() => {
                    var t;
                    null === (t = e.current) || void 0 === t || t.focus()
                }, 0)
            }, 50);

            function f(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                    a = (0, u.useStateFromStores)([s.default], () => s.default.keyboardModeEnabled),
                    f = (0, o.default)(),
                    [E, p] = l.useState(!1),
                    m = (0, i.useWindowDispatch)();
                return l.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

                    function e() {
                        f && (m.dispatch(d.ComponentActions.POPOUT_CLOSE), r.ComponentDispatch.dispatch(d.ComponentActions.CONTEXT_MENU_CLOSE))
                    }
                }, [n, f, t, m]), l.useEffect(() => {
                    var l, u, o;
                    if (a || !E || !t) return;
                    let i = f;

                    function s(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null == n || "BUTTON" === n.tagName) && !i && c(e)
                        }, 100)
                    }
                    return null === (l = e.current) || void 0 === l || l.addEventListener("focusout", s), (null === (u = n.document.activeElement) || void 0 === u ? void 0 : u.tagName) !== "IFRAME" && !i && (null === (o = e.current) || void 0 === o || o.focus()), () => {
                        var t;
                        null === (t = e.current) || void 0 === t || t.removeEventListener("focusout", s), i = !0
                    }
                }, [t, E, a, e, n, f]), p
            }
        },
        828466: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            let l = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];

            function a(e) {
                let {
                    allowPopups: t
                } = e, n = l;
                return t && (n = [...l, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ")
            }
        },
        817477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmbedIFrameWithLoadingBackground: function() {
                    return N
                }
            }), n("222007"), n("313619"), n("654714"), n("287168"), n("956660");
            var l = n("37983"),
                a = n("884691"),
                u = n("414456"),
                o = n.n(u),
                i = n("841076"),
                s = n("748820"),
                r = n("446674"),
                d = n("292687"),
                c = n("614818"),
                f = n("161778"),
                E = n("659500"),
                p = n("157945"),
                m = n("828466"),
                T = n("954016"),
                _ = n("49111"),
                S = n("165544");

            function C(e) {
                let {
                    url: t,
                    className: n,
                    style: u,
                    onLoad: o,
                    shouldRefocus: S,
                    queryParams: C,
                    allowPopups: N = !1,
                    referrerPolicy: I = "origin"
                } = e, v = (0, r.useStateFromStores)([d.default], () => d.default.getWindow(_.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), O = (0, i.useMemoOne)(() => (0, s.v4)(), [t]), L = a.useRef(null), A = (0, p.default)(L, S, null == v ? window : v), h = {
                    ...C,
                    frame_id: O,
                    platform: T.ActivityPlatform.DESKTOP
                }, [y, M] = a.useState(!1), R = f.default.theme, g = {
                    ...u
                };
                return R === _.ThemeTypes.LIGHT ? g.colorScheme = "light" : g.colorScheme = "dark", a.useEffect(() => (E.ComponentDispatch.dispatch(_.ComponentActions.IFRAME_MOUNT, {
                    id: O
                }), () => {
                    E.ComponentDispatch.dispatch(_.ComponentActions.IFRAME_UNMOUNT, {
                        id: O
                    })
                }), [O]), E.ComponentDispatch.subscribe(_.ComponentActions.MANUAL_IFRAME_RESIZING, e => {
                    let {
                        resizing: t
                    } = e;
                    M(t)
                }), y && (g.pointerEvents = "none"), null != t ? (0, l.jsx)("iframe", {
                    style: g,
                    allow: "autoplay; encrypted-media",
                    referrerPolicy: I,
                    onLoad: function(e) {
                        var n;
                        null == o || o(e.target), L.current = e.target, A(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([c.default.HELLO, h], null != t ? t : "")
                    },
                    sandbox: (0, m.default)({
                        allowPopups: N
                    }),
                    className: n,
                    src: "".concat(t, "?").concat(new URLSearchParams(h))
                }) : null
            }

            function N(e) {
                let {
                    onLoad: t
                } = e, [n, u] = a.useState(!1), i = a.useCallback(e => {
                    u(!0), null == t || t(e)
                }, [t]);
                return (0, l.jsxs)("div", {
                    className: S.fillParent,
                    children: [!n && (0, l.jsx)("div", {
                        className: o(S.fillParent, S.iframePlaceholder)
                    }), (0, l.jsx)("div", {
                        className: o(S.fillParent, n ? void 0 : S.hiddenIframeContainer),
                        children: (0, l.jsx)(C, {
                            ...e,
                            onLoad: i
                        })
                    })]
                })
            }
        },
        192112: function(e, t, n) {
            "use strict";
            var l, a, u, o;
            n.r(t), n.d(t, {
                ActionComponentState: function() {
                    return l
                },
                SelectOptionType: function() {
                    return a
                }
            }), (u = l || (l = {}))[u.NORMAL = 0] = "NORMAL", u[u.LOADING = 1] = "LOADING", u[u.DISABLED = 2] = "DISABLED", (o = a || (a = {}))[o.STRING = 1] = "STRING", o[o.USER = 2] = "USER", o[o.ROLE = 3] = "ROLE", o[o.CHANNEL = 4] = "CHANNEL", o[o.GUILD = 5] = "GUILD"
        },
        812684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getActionRowErrorText: function() {
                    return T
                },
                createComponents: function() {
                    return function e(t, n) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                            {
                                includeEmojiSrc: i
                            } = a;
                        return t.map((t, m) => {
                            var T, S, C, N, I, v;
                            if (!_(t.type)) return null;
                            let O = o.concat(m);
                            switch (t.type) {
                                case u.ComponentType.ACTION_ROW:
                                    let L = null != t.components ? e(t.components, n, l, a, O) : void 0;
                                    return {
                                        type: u.ComponentType.ACTION_ROW, indices: O, components: L
                                    };
                                case u.ComponentType.BUTTON:
                                    if (f.includes(n) && null != t.custom_id && E.test(t.custom_id) && !(0, d.default)(l)) return null;
                                    let A = null != t.emoji ? p(t.emoji, i) : void 0;
                                    return {
                                        type: u.ComponentType.BUTTON, customId: t.custom_id, style: t.style, disabled: t.disabled, url: t.url, label: t.label, emoji: A, indices: O, applicationId: n
                                    };
                                case u.ComponentType.STRING_SELECT:
                                    return {
                                        type: u.ComponentType.STRING_SELECT, customId: t.custom_id, disabled: t.disabled, options: t.options.map(e => ({
                                            type: s.SelectOptionType.STRING,
                                            label: e.label,
                                            value: e.value,
                                            default: e.default,
                                            description: e.description,
                                            emoji: null != e.emoji ? p(e.emoji, i) : void 0
                                        })), placeholder: null !== (T = t.placeholder) && void 0 !== T ? T : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: O, applicationId: n
                                    };
                                case u.ComponentType.INPUT_TEXT:
                                    return {
                                        type: t.type, style: t.style, customId: t.custom_id, label: t.label, value: t.value, placeholder: t.placeholder, disabled: t.disabled, required: t.required, minLength: t.min_length, maxLength: t.max_length, indices: O
                                    };
                                case u.ComponentType.USER_SELECT:
                                    return {
                                        type: u.ComponentType.USER_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (S = t.placeholder) && void 0 !== S ? S : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l)
                                    };
                                case u.ComponentType.ROLE_SELECT:
                                    return {
                                        type: u.ComponentType.ROLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (C = t.placeholder) && void 0 !== C ? C : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l)
                                    };
                                case u.ComponentType.MENTIONABLE_SELECT:
                                    return {
                                        type: u.ComponentType.MENTIONABLE_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (N = t.placeholder) && void 0 !== N ? N : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, defaultValues: t.default_values, indices: O, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l)
                                    };
                                case u.ComponentType.CHANNEL_SELECT:
                                    return {
                                        type: u.ComponentType.CHANNEL_SELECT, customId: t.custom_id, disabled: t.disabled, placeholder: null !== (I = t.placeholder) && void 0 !== I ? I : c.default.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: t.min_values, maxValues: t.max_values, indices: O, channelTypes: t.channel_types, defaultValues: t.default_values, applicationId: n, selectedOptions: (0, r.getSnowflakeSelectDefaultValues)(t.default_values, l, null !== (v = t.channel_types) && void 0 !== v ? v : [])
                                    };
                                default:
                                    return null
                            }
                        }).filter(e => null != e)
                    }
                }
            });
            var l = n("917351"),
                a = n.n(l),
                u = n("798609"),
                o = n("3765"),
                i = n("315102"),
                s = n("192112"),
                r = n("704257"),
                d = n("988878"),
                c = n("782340");
            let f = ["934240649153220678", "936929561302675456", "762275850782900254", "1022952195194359889"],
                E = /MJ::Inpaint::\d(::[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12})?(::SOLO)?/,
                p = (e, t) => ({
                    id: e.id,
                    name: e.name,
                    animated: e.animated,
                    src: t && null != e.id ? i.default.getEmojiURL({
                        id: e.id,
                        animated: e.animated || !1,
                        size: 48
                    }) : void 0
                }),
                m = e => (null == e ? void 0 : e.errorCode) === 429 ? c.default.Messages.INTERACTION_RATE_LIMITED : c.default.Messages.APPLICATION_COMMAND_FAILED,
                T = (e, t, n) => {
                    let l = (null == e ? void 0 : e.data.interactionType) === u.InteractionTypes.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === o.InteractionState.FAILED ? e.data.indices : null;
                    if (null != l && a.isEqual(l.slice(0, l.length - 1), n.indices)) {
                        var i;
                        return null !== (i = null == t ? void 0 : t.interactionError) && void 0 !== i ? i : m(e)
                    }
                },
                _ = e => {
                    switch (e) {
                        case u.ComponentType.ACTION_ROW:
                        case u.ComponentType.BUTTON:
                        case u.ComponentType.STRING_SELECT:
                        case u.ComponentType.INPUT_TEXT:
                        case u.ComponentType.USER_SELECT:
                        case u.ComponentType.ROLE_SELECT:
                        case u.ComponentType.MENTIONABLE_SELECT:
                        case u.ComponentType.CHANNEL_SELECT:
                            return !0
                    }
                }
        },
        470055: function(e, t, n) {
            "use strict";
            let l, a, u, o, i;
            n.r(t), n.d(t, {
                InteractionModalState: function() {
                    return r
                },
                default: function() {
                    return S
                }
            });
            var s, r, d = n("627445"),
                c = n.n(d),
                f = n("446674"),
                E = n("913144"),
                p = n("819689"),
                m = n("798609"),
                T = n("274800");
            (s = r || (r = {}))[s.IN_FLIGHT = 0] = "IN_FLIGHT", s[s.ERRORED = 1] = "ERRORED", s[s.SUCCEEDED = 2] = "SUCCEEDED";
            class _ extends f.default.Store {
                getModalState(e) {
                    return e !== l ? null : a
                }
            }
            _.displayName = "InteractionModalStore";
            var S = new _(E.default, {
                LOGOUT: function() {
                    return l = null, a = null, u = null, o = null, i = null, !0
                },
                INTERACTION_MODAL_CREATE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return t === i && (p.default.deleteMessage(o, u, !0), u = null, o = null, i = null), !1
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return t === i && (p.default.deleteMessage(o, u, !0), u = null, o = null, i = null), !1
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        messageId: t,
                        nonce: n,
                        data: s
                    } = e;
                    switch (s.interactionType) {
                        case m.InteractionTypes.APPLICATION_COMMAND:
                            return u = t, o = s.channelId, i = n, !1;
                        case m.InteractionTypes.MODAL_SUBMIT:
                            return c(null == l || 1 === a || 2 === a, "cannot submit multiple modals at once"), l = n, a = 0, setTimeout(() => {
                                l === n && 0 === a && (0, T.setFailed)(n)
                            }, 1e4), !0;
                        default:
                            return !1
                    }
                },
                INTERACTION_SUCCESS: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return null != t && t === l && (a = 2, !0)
                },
                INTERACTION_FAILURE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return null != t && t === l && (a = 1, !0)
                }
            })
        },
        732523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useModalState: function() {
                    return h
                },
                useIframeModalState: function() {
                    return y
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
            var l = n("884691"),
                a = n("627445"),
                u = n.n(a),
                o = n("446674"),
                i = n("872717"),
                s = n("913144"),
                r = n("798609"),
                d = n("763898"),
                c = n("711562"),
                f = n("274800"),
                E = n("271938"),
                p = n("42203"),
                m = n("26989"),
                T = n("162771"),
                _ = n("315102"),
                S = n("299039"),
                C = n("812684"),
                N = n("470055"),
                I = n("524094"),
                v = n("49111"),
                O = n("782340");
            let L = e => {
                let t = !0;
                return e.forEach(e => {
                    !e() && (t = !1)
                }), t
            };

            function A(e) {
                return l.useMemo(() => {
                    let t = T.default.getGuildId(),
                        n = null != t && null != e.bot ? m.default.getMember(t, e.bot.id) : void 0,
                        l = _.default.getApplicationIconURL({
                            id: e.id,
                            icon: e.icon,
                            botIconFirst: !0,
                            bot: null != n ? e.bot : void 0
                        }),
                        a = null != n && null != e.bot ? e.bot.username : e.name,
                        u = (0, c.default)(e.id);
                    return {
                        applicationIconURL: l,
                        applicationName: a,
                        applicationBaseUrl: u
                    }
                }, [e.id, e.icon, e.name, e.bot])
            }

            function h(e, t) {
                var n;
                let {
                    application: a,
                    customId: c,
                    components: m,
                    channelId: T
                } = e, _ = null === (n = p.default.getChannel(T)) || void 0 === n ? void 0 : n.guild_id, I = (0, d.default)(), [h, y] = l.useState(null), [R, g] = l.useState(null), b = (0, o.useStateFromStores)([N.default], () => N.default.getModalState(R), [R]), D = l.useMemo(() => (0, C.createComponents)(m, a.id, _), [m, a.id, _]), w = l.useRef(new Set), U = l.useCallback(() => {
                    y(null), g(null), L(w.current) && g(function(e, t) {
                        let n = S.default.fromTimestamp(Date.now()),
                            l = e.channelId,
                            a = p.default.getChannel(l);
                        u(null != a, "expected channel");
                        let o = M(e.customId, e.components, []);
                        (0, f.addQueued)(n, {
                            data: {
                                interactionType: r.InteractionTypes.MODAL_SUBMIT
                            }
                        });
                        let s = () => {
                            (null == t || !t.aborted) && i.default.post({
                                url: v.Endpoints.INTERACTIONS,
                                body: {
                                    type: r.InteractionTypes.MODAL_SUBMIT,
                                    application_id: e.application.id,
                                    channel_id: a.id,
                                    guild_id: a.guild_id,
                                    data: {
                                        id: e.id,
                                        custom_id: e.customId,
                                        components: o
                                    },
                                    session_id: E.default.getSessionId(),
                                    nonce: n
                                },
                                signal: t
                            }).catch(e => {
                                429 === e.status ? setTimeout(s, 1e3 * e.body.retry_after) : (0, f.setFailed)(n)
                            })
                        };
                        return s(), n
                    }(e, I))
                }, [I, e]);
                l.useEffect(() => {
                    b === N.InteractionModalState.SUCCEEDED && (s.default.dispatch({
                        type: "CLEAR_INTERACTION_MODAL_STATE",
                        id: c
                    }), t()), b === N.InteractionModalState.ERRORED && y(O.default.Messages.INTERACTION_FORM_SUBMISSION_FAILED)
                }, [R, b, t, c]);
                let {
                    applicationIconURL: x,
                    applicationName: P
                } = A(a);
                return {
                    components: D,
                    applicationIconURL: x,
                    applicationName: P,
                    submissionState: b,
                    error: h,
                    validators: w.current,
                    onSubmit: U
                }
            }

            function y(e) {
                let {
                    application: t,
                    customId: n
                } = e, {
                    applicationIconURL: l,
                    applicationName: a,
                    applicationBaseUrl: o
                } = A(t), i = p.default.getChannel(e.channelId);
                u(null != i, "channel should not be null");
                let s = "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
                    r = {
                        instance_id: s,
                        custom_id: n,
                        channel_id: e.channelId
                    };
                null != i.guild_id && "" !== i.guild_id && (r.guild_id = i.guild_id);
                let d = new URL(null != o ? o : "");
                d.pathname = e.iframePath;
                let c = d.toString();
                return {
                    applicationIconURL: l,
                    applicationName: a,
                    applicationBaseUrl: o,
                    queryParams: r,
                    iframeUrl: c
                }
            }
            let M = (e, t, n) => t.map((t, l) => {
                let a = [...n, l];
                switch (t.type) {
                    case r.ComponentType.ACTION_ROW:
                        var o;
                        return {
                            type: t.type, components: M(e, null !== (o = t.components) && void 0 !== o ? o : [], a)
                        };
                    case r.ComponentType.INPUT_TEXT: {
                        let n = I.default.getInteractionComponentState(e, a);
                        return {
                            type: t.type,
                            custom_id: t.custom_id,
                            value: (null == n ? void 0 : n.type) === t.type ? n.value : null
                        }
                    }
                    case r.ComponentType.STRING_SELECT: {
                        let n = I.default.getInteractionComponentState(e, a);
                        return {
                            type: t.type,
                            custom_id: t.custom_id,
                            values: (null == n ? void 0 : n.type) === t.type ? n.values : null
                        }
                    }
                    default:
                        u(!1, "unreachable")
                }
            })
        },
        524094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var l = n("446674"),
                a = n("913144"),
                u = n("292381");
            let o = new u.default(196606),
                i = 0,
                s = new u.default(196606),
                r = new u.default(196606);

            function d(e) {
                return e.join("-")
            }

            function c(e, t, n) {
                var l;
                let a = d(t),
                    u = null !== (l = o.get(e)) && void 0 !== l ? l : new Map;
                u.set(a, n), o.set(e, u), i++
            }

            function f(e) {
                let t = s.get(e);
                null != t && r.delete(t), s.delete(e), o.delete(e), i++
            }
            class E extends l.default.Store {
                getInteractionComponentStates() {
                    return o
                }
                getInteractionComponentStateVersion() {
                    return i
                }
                getInteractionComponentState(e, t) {
                    var n;
                    let l = o.get(e);
                    if (null == l) return null;
                    let a = d(t);
                    return null !== (n = l.get(a)) && void 0 !== n ? n : null
                }
            }
            E.displayName = "LocalInteractionComponentStateStore";
            var p = new E(a.default, {
                LOGOUT: function() {
                    o.clear(), s.clear(), r.clear(), i++
                },
                QUEUE_INTERACTION_COMPONENT_STATE: function(e) {
                    let {
                        messageId: t,
                        nonce: n,
                        indices: l,
                        state: a
                    } = e;
                    s.set(t, n), r.set(n, {
                        messageId: t,
                        indices: l
                    }), c(t, l, a)
                },
                SET_INTERACTION_COMPONENT_STATE: function(e) {
                    let {
                        id: t,
                        indices: n,
                        state: l
                    } = e;
                    c(t, n, l)
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (!o.has(t)) return !1;
                    f(t)
                },
                MESSAGE_UPDATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.id || !o.has(t.id)) return !1;
                    f(t.id)
                },
                INTERACTION_SUCCESS: function(e) {
                    let {
                        nonce: t
                    } = e;
                    if (null == t) return !1;
                    let n = r.get(t);
                    if (null == n) return !1;
                    s.delete(n.messageId), r.delete(t), i++
                },
                INTERACTION_FAILURE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    if (null == t) return !1;
                    let n = r.get(t);
                    if (null == n) return !1;
                    ! function(e) {
                        let {
                            indices: t,
                            messageId: n
                        } = e, l = d(t), a = o.get(n);
                        if (null == a || !a.has(l)) return;
                        a.delete(l), 0 === a.size && o.delete(n), i++
                    }(n)
                },
                CLEAR_INTERACTION_MODAL_STATE: function(e) {
                    let {
                        id: t
                    } = e;
                    o.delete(t), i++
                }
            })
        },
        704257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MIN_REREQUEST_TIME: function() {
                    return f
                },
                queryMentionables: function() {
                    return E
                },
                queryChannels: function() {
                    return p
                },
                getSnowflakeSelectDefaultValues: function() {
                    return m
                }
            }), n("222007");
            var l = n("374158"),
                a = n("798609"),
                u = n("42203"),
                o = n("26989"),
                i = n("305961"),
                s = n("697218"),
                r = n("25292"),
                d = n("387111"),
                c = n("192112");
            let f = 1e3;

            function E(e, t, n) {
                let l = u.default.getChannel(n);
                if (null == l) return [];
                let o = e === a.ComponentType.USER_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
                    i = e === a.ComponentType.ROLE_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
                    {
                        users: s,
                        roles: f
                    } = r.default.queryMentionResults({
                        query: t,
                        channel: l,
                        canMentionEveryone: !1,
                        canMentionHere: !1,
                        canMentionUsers: o,
                        canMentionRoles: i,
                        includeAllGuildUsers: !0,
                        includeNonMentionableRoles: !0,
                        checkRecentlyTalkedOnEmptyQuery: !1,
                        limit: 15
                    }),
                    E = s.map(e => {
                        var t;
                        let a = d.default.getNickname(l.getGuildId(), n, e.user);
                        return {
                            type: c.SelectOptionType.USER,
                            value: e.user.id,
                            label: null !== (t = null != a ? a : e.user.globalName) && void 0 !== t ? t : e.user.username
                        }
                    }),
                    p = f.map(e => ({
                        type: c.SelectOptionType.ROLE,
                        value: e.id,
                        label: e.name
                    }));
                return [...E, ...p]
            }

            function p(e, t, n) {
                let l = u.default.getChannel(t);
                if (null == l) return [];
                let a = r.default.queryApplicationCommandChannelResults({
                        query: e,
                        channel: l,
                        channelTypes: n,
                        limit: 15
                    }),
                    o = a.channels.map(e => ({
                        type: c.SelectOptionType.CHANNEL,
                        value: e.id,
                        label: e.name
                    }));
                return o
            }

            function m(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                if (null == e) return;
                let a = i.default.getGuild(t);
                return e.map(e => {
                    switch (e.type) {
                        case l.SnowflakeSelectDefaultValueTypes.USER:
                            var t;
                            let i = s.default.getUser(e.id);
                            if (null == i) return null;
                            let r = null != a ? o.default.getNick(a.id, i.id) : void 0;
                            return {
                                type: c.SelectOptionType.USER, value: i.id, label: null !== (t = null != r ? r : i.globalName) && void 0 !== t ? t : i.username
                            };
                        case l.SnowflakeSelectDefaultValueTypes.ROLE:
                            if (null == a) return null;
                            let d = a.getRole(e.id);
                            if (null == d) return null;
                            return {
                                type: c.SelectOptionType.ROLE, value: d.id, label: d.name
                            };
                        case l.SnowflakeSelectDefaultValueTypes.CHANNEL:
                            if (null == a) return null;
                            let f = u.default.getChannel(e.id);
                            if (null == f || f.guild_id !== a.id || n.length > 0 && !n.includes(f.type)) return null;
                            return {
                                type: c.SelectOptionType.CHANNEL, value: f.id, label: f.name
                            }
                    }
                }).filter(e => null !== e)
            }
        },
        168984: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("769846"),
                o = n("77078"),
                i = n("817477"),
                s = n("944654"),
                r = n("944832"),
                d = n("79798"),
                c = n("945330"),
                f = n("159885"),
                E = n("732523"),
                p = n("988268"),
                m = n("782340"),
                T = n("442605");
            let _ = (0, f.cssValueToNumber)(u.default.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
                S = (0, f.cssValueToNumber)(u.default.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
                C = (0, f.cssValueToNumber)(u.default.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
                N = (0, f.cssValueToNumber)(u.default.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

            function I(e) {
                var t;
                let {
                    title: n,
                    onClose: u
                } = e, {
                    applicationIconURL: f,
                    applicationName: I,
                    queryParams: v,
                    iframeUrl: O
                } = (0, E.useIframeModalState)(e), {
                    width: L,
                    height: A
                } = (0, s.useScreenDimensions)(), h = a.useMemo(() => {
                    let e = Math.min((A - N - 2 * C) * 16 / 9, S);
                    return Math.max(_, Math.min(L - 2 * C, e))
                }, [L, A]);
                return (0, l.jsx)(o.ModalRoot, {
                    ...e,
                    size: o.ModalSize.DYNAMIC,
                    className: T.root,
                    children: (0, l.jsxs)("div", {
                        style: {
                            width: h
                        },
                        children: [(0, l.jsxs)(o.ModalHeader, {
                            separator: !1,
                            className: T.modalHeader,
                            children: [(0, l.jsx)(o.Avatar, {
                                src: f,
                                size: o.AvatarSizes.SIZE_32,
                                "aria-label": I,
                                className: T.applicationIcon
                            }), (0, l.jsxs)("div", {
                                className: T.flexRow,
                                children: [(0, l.jsxs)("div", {
                                    children: [(0, l.jsx)(o.Heading, {
                                        variant: "heading-sm/bold",
                                        children: I
                                    }), (0, l.jsx)(o.Text, {
                                        variant: "text-xs/medium",
                                        color: "interactive-normal",
                                        children: n
                                    })]
                                }), (0, l.jsx)(d.default, {
                                    type: p.BotTagTypes.BOT,
                                    className: T.botTag,
                                    verified: null === (t = e.application.bot) || void 0 === t ? void 0 : t.verified
                                })]
                            }), (0, l.jsx)(o.Button, {
                                onClick: u,
                                innerClassName: T.closeButton,
                                className: T.closeButtonContainer,
                                look: o.Button.Looks.BLANK,
                                size: o.Button.Sizes.NONE,
                                "aria-label": m.default.Messages.DISMISS,
                                children: (0, l.jsx)(c.default, {
                                    className: T.closeIcon
                                })
                            })]
                        }), (0, l.jsx)(r.default, {
                            aspectRatio: 16 / 9,
                            children: (0, l.jsx)(i.EmbedIFrameWithLoadingBackground, {
                                url: O,
                                shouldRefocus: !0,
                                className: T.iframe,
                                queryParams: v
                            })
                        })]
                    })
                })
            }
        },
        614818: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = {
                HANDSHAKE: 0,
                FRAME: 1,
                CLOSE: 2,
                HELLO: 3
            }
        },
        944654: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useScreenDimensions: function() {
                    return a
                }
            }), n("222007");
            var l = n("884691");

            function a() {
                var e, t;
                let [n, a] = l.useState({
                    width: null !== (e = window.innerWidth) && void 0 !== e ? e : 1080,
                    height: null !== (t = window.innerHeight) && void 0 !== t ? t : 1080
                });
                return l.useLayoutEffect(() => {
                    function e() {
                        let e = window.innerWidth,
                            t = window.innerHeight;
                        a({
                            width: e,
                            height: t
                        })
                    }
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []), n
            }
        },
        944832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                u = n.n(a),
                o = n("561445"),
                i = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: a,
                        children: i
                    } = e;
                    return (0, l.jsx)("div", {
                        className: u(o.outer, a),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, l.jsx)("div", {
                            className: o.inner,
                            children: i
                        })
                    })
                }
        },
        374158: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                SnowflakeSelectDefaultValueTypes: function() {
                    return l
                }
            }), (a = l || (l = {})).USER = "user", a.ROLE = "role", a.CHANNEL = "channel"
        }
    }
]);