(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["85740"], {
        540105: function(e, t, n) {
            "use strict";
            e.exports = n.p + "abb68ef84648ccf3be81.svg"
        },
        87657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("390236"),
                l = a.memo(function(e) {
                    var t, n, l, u;
                    let {
                        user: c,
                        size: o = s.AvatarSizes.SIZE_32,
                        animate: d = !1,
                        "aria-hidden": f = !1,
                        ...E
                    } = e, v = a.useContext(i.default);
                    return (0, r.jsx)(s.Avatar, {
                        src: (t = c, n = (0, s.getAvatarSize)(o), l = d, u = v, t.getAvatarURL(u, n, l)),
                        size: o,
                        "aria-label": f ? void 0 : c.username,
                        "aria-hidden": f,
                        ...E
                    })
                })
        },
        308472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsIcon: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.59V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.59l-5.09 5.09-1.8-1.8a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42L9 13.4l1.8 1.8a1 1 0 0 0 1.4 0L18 9.4Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        441888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSadIcon: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 3.83a1 1 0 0 0 1.39-.27 3.5 3.5 0 0 1 5.82 0 1 1 0 0 0 1.66-1.12 5.5 5.5 0 0 0-9.14 0 1 1 0 0 0 .27 1.4Z",
                        clipRule: "evenodd",
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
                        className: l
                    })]
                })
            }
        },
        47693: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TrashIcon: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M14.25 1c.41 0 .75.34.75.75V3h5.25c.41 0 .75.34.75.75v.5c0 .41-.34.75-.75.75H3.75A.75.75 0 0 1 3 4.25v-.5c0-.41.34-.75.75-.75H9V1.75c0-.41.34-.75.75-.75h4.5Z",
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5.06 7a1 1 0 0 0-1 1.06l.76 12.13a3 3 0 0 0 3 2.81h8.36a3 3 0 0 0 3-2.81l.75-12.13a1 1 0 0 0-1-1.06H5.07ZM11 12a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6Zm3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: l
                    })]
                })
            }
        },
        246511: function(e, t, n) {
            "use strict";
            var r, a, s, i;
            n.r(t), n.d(t, {
                InspectedExpressionChangeSource: function() {
                    return r
                },
                PickerContextMenuDataTypes: function() {
                    return a
                }
            }), (s = r || (r = {}))[s.GRID_NAVIGATOR_EVENT = 0] = "GRID_NAVIGATOR_EVENT", s[s.MOUSE_EVENT = 1] = "MOUSE_EVENT", (i = a || (a = {})).EMOJI = "emoji", i.STICKER = "sticker", i.PACK_ICON = "pack-icon"
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return i
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return l
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return u
                }
            });
            var r = n("316693"),
                a = n("923510"),
                s = n("49111");
            let i = s.Permissions.VIEW_CHANNEL,
                l = r.default.combine(i, s.Permissions.CONNECT),
                u = r.default.combine(i, a.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return h
                },
                getManageResourcePermissions: function() {
                    return m
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return S
                },
                useShouldShowInventoryGuildSettingsCoachmark: function() {
                    return N
                }
            }), n("222007");
            var r = n("884691"),
                a = n("316693"),
                s = n("446674"),
                i = n("252931"),
                l = n("813006");
            n("923959");
            var u = n("957255"),
                c = n("697218");
            n("991170");
            var o = n("270161"),
                d = n("843455");
            let f = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                E = (e, t, n, r) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return r && null != t && e.creator_id === t.id;
                    if ("userId" in e) return r && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var a;
                        return r && null != t && (null === (a = e.user) || void 0 === a ? void 0 : a.id) === t.id
                    }
                    return !1
                },
                v = e => {
                    if (null == e) return [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS];
                    let t = o.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = o.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [a.default.combine(t, d.Permissions.CREATE_EVENTS), a.default.combine(t, d.Permissions.MANAGE_EVENTS)]
                },
                h = e => {
                    let [t, n] = e instanceof l.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : v(e), [a, i, o, h] = (0, s.useStateFromStoresArray)([u.default], () => [u.default.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e), u.default.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e), u.default.can(t, e), u.default.can(n, e)]), m = (0, s.useStateFromStores)([c.default], () => c.default.getCurrentUser()), S = r.useCallback(e => E(e, m, i, a), [a, i, m]), N = r.useCallback(e => E(e, m, h, o), [h, o, m]);
                    return null == e ? f : {
                        canCreateExpressions: a,
                        canCreateGuildEvent: o,
                        canManageAllExpressions: i,
                        canManageAllEvents: h,
                        canManageGuildExpression: S,
                        canManageGuildEvent: N
                    }
                },
                m = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.default,
                        [r, a] = e instanceof l.default ? [d.Permissions.CREATE_EVENTS, d.Permissions.MANAGE_EVENTS] : v(e),
                        s = t.can(d.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        i = t.can(d.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        o = t.can(r, e),
                        h = t.can(a, e),
                        m = n.getCurrentUser();
                    return null == e ? f : {
                        canCreateExpressions: s,
                        canCreateGuildEvent: o,
                        canManageAllExpressions: i,
                        canManageAllEvents: h,
                        canManageGuildExpression: e => E(e, m, i, s),
                        canManageGuildEvent: e => E(e, m, h, o)
                    }
                },
                S = e => {
                    let t = (0, s.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n
                        } = (0, i.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != n
                },
                N = e => {
                    let t = (0, s.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n,
                            getNewSettingsDescriptionLine1: r
                        } = (0, i.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != n && null != r()
                }
        },
        41170: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getStickerAltText: function() {
                    return M
                },
                default: function() {
                    return G
                }
            }), n("222007");
            var r = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("627445"),
                u = n.n(l),
                c = n("907002"),
                o = n("446674"),
                d = n("290381"),
                f = n("77078"),
                E = n("206230"),
                v = n("407063"),
                h = n("54560"),
                m = n("983782"),
                S = n("866190"),
                N = n("256860"),
                g = n("161585"),
                C = n("24373"),
                I = n("782340"),
                p = n("787309");
            let x = e => e.preventDefault(),
                A = {
                    tension: 1100,
                    friction: 40
                },
                R = {
                    tension: 1600,
                    friction: 60
                };

            function _(e, t) {
                return a.cloneElement(e, {
                    "data-type": "sticker",
                    "data-id": t
                })
            }

            function M(e) {
                let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
                return I.default.Messages.STICKER_A11Y_LABEL.format({
                    stickerName: t
                })
            }
            let T = e => {
                    let {
                        children: t,
                        hasError: n,
                        isLoading: a,
                        maskAsset: s,
                        size: l,
                        withLoadingIndicator: u = !0
                    } = e, c = l >= 33;
                    return (0, r.jsxs)("div", {
                        className: i(p.assetWrapper, {
                            [p.assetWrapperMasked]: n || s
                        }),
                        style: {
                            height: l,
                            width: l
                        },
                        children: [n ? (0, r.jsxs)("div", {
                            className: p.error,
                            children: [(0, r.jsx)(h.default, {
                                className: p.errorIcon
                            }), c && (0, r.jsx)(f.Text, {
                                className: p.errorText,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: I.default.Messages.STICKER_ASSET_LOAD_ERROR
                            })]
                        }) : t, u && a && (0, r.jsx)("div", {
                            className: p.loadingIndicator
                        })]
                    })
                },
                L = e => {
                    let {
                        shouldAnimate: t,
                        size: s,
                        sticker: i,
                        fileUri: l,
                        assetData: c,
                        isFocused: o,
                        className: d,
                        maskAsset: f,
                        positionRef: E,
                        withLoadingIndicator: h,
                        onError: m
                    } = e, S = a.useRef(null), N = a.useRef(null), [g, x] = a.useState(!0), [A, R] = a.useState(!1), L = a.useRef(!1);
                    L.current = t && o;
                    let V = null == l ? (0, C.getStickerAssetUrl)(i) : l;
                    return (u(null != V, "Unable to determine sticker asset URL. Sticker ID: ".concat(i.id)), a.useEffect(() => {
                        if (null == S.current || null == V) return;
                        let e = Math.min(2, (0, v.getDevicePixelRatio)());
                        S.current.width = s * e, S.current.height = s * e;
                        let t = !1,
                            r = async () => {
                                let {
                                    default: e
                                } = await n.el("619596").then(n.bind(n, "619596"));
                                null != S.current && (N.current = new e({
                                    canvas: S.current,
                                    animationId: i.id,
                                    assetUrl: V,
                                    assetData: c,
                                    onInitialDraw: () => {
                                        !t && x(!1)
                                    },
                                    onError: () => {
                                        !t && (x(!1), R(!0), null == m || m())
                                    }
                                }), L.current && N.current.setState(!0))
                            };
                        return r(), () => {
                            var e;
                            null === (e = N.current) || void 0 === e || e.drop(), N.current = null, t = !0
                        }
                    }, [V, s, i.id, c, m]), a.useEffect(() => {
                        var e;
                        let n;
                        !t && (n = 0), null === (e = N.current) || void 0 === e || e.setState(t && o, n)
                    }, [i, t, o]), null == V) ? null : (0, r.jsx)("div", {
                        role: "img",
                        className: d,
                        "aria-label": A ? I.default.Messages.ERROR_LOADING_STICKER : M(i),
                        ref: E,
                        children: (0, r.jsx)(T, {
                            hasError: A,
                            isLoading: g,
                            maskAsset: f,
                            size: s,
                            withLoadingIndicator: h,
                            children: _((0, r.jsx)("canvas", {
                                className: p.lottieCanvas,
                                ref: S
                            }), i.id)
                        })
                    })
                },
                V = e => {
                    let {
                        shouldAnimate: t,
                        sticker: n,
                        isFocused: s,
                        size: l,
                        className: u,
                        maskAsset: c,
                        positionRef: o,
                        withLoadingIndicator: f,
                        fileUri: E
                    } = e, [v, h] = a.useState(!1), [m, S] = a.useState(!0), [N, g] = a.useState(!1), I = a.useRef(null), A = a.useRef(null), R = null != E ? E : (0, C.getStickerAssetUrl)(n, {
                        isPreview: !t || !v || !s,
                        size: l
                    }), L = a.useCallback(() => {
                        S(!1)
                    }, []), V = a.useCallback(() => {
                        g(!0)
                    }, []);
                    return (a.useEffect(() => {
                        if (null != I.current) {
                            let {
                                isVisible: e
                            } = I.current;
                            h(e)
                        }
                    }, []), a.useLayoutEffect(() => {
                        var e;
                        (null === (e = A.current) || void 0 === e ? void 0 : e.complete) === !0 && S(!1)
                    }, []), null == R) ? null : (0, r.jsx)(d.VisibilitySensor, {
                        ref: I,
                        onChange: h,
                        threshold: .7,
                        children: (0, r.jsx)("div", {
                            className: i(u, p.pngImageWrapper),
                            ref: o,
                            children: (0, r.jsx)(T, {
                                hasError: N,
                                isLoading: m,
                                maskAsset: c,
                                size: l,
                                withLoadingIndicator: f,
                                children: _((0, r.jsx)("img", {
                                    className: p.pngImage,
                                    alt: M(n),
                                    src: R,
                                    draggable: !1,
                                    onError: V,
                                    onLoad: L,
                                    onContextMenu: x,
                                    ref: A
                                }), n.id)
                            })
                        })
                    })
                },
                j = e => {
                    let {
                        disableAnimation: t,
                        enlargeScaleFactor: n,
                        enlargeWithName: s,
                        isInteracting: i,
                        positionRef: l,
                        size: u,
                        sticker: d
                    } = e, v = (0, o.useStateFromStores)([E.default], () => E.default.useReducedMotion), h = a.useRef(null), S = {
                        transform: "scale(".concat(v ? 1 : 1 / n, ")"),
                        opacity: 0
                    }, N = (0, c.useTransition)(i, {
                        ref: h,
                        from: S,
                        enter: {
                            transform: "scale(1)",
                            opacity: 1
                        },
                        leave: S,
                        config: A
                    }), g = a.useRef(null), C = (0, c.useSpring)({
                        ref: g,
                        transform: i || v ? "translateY(0)" : "translateY(-25px)",
                        opacity: i ? 1 : 0,
                        config: R
                    });
                    return (0, c.useChain)(i ? [h, g] : [g, h], i ? [0, .0625] : [0, 0]), N((e, a) => a && (0, r.jsx)(m.AppReferencePositionLayer, {
                        className: p.positionedLayer,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        reference: l,
                        children: () => (0, r.jsxs)("div", {
                            className: p.overlayWrapper,
                            children: [(0, r.jsx)(c.animated.div, {
                                className: p.overlayStickerWrapper,
                                style: e,
                                children: (0, r.jsx)(w, {
                                    className: p.overlaySticker,
                                    disableAnimation: t,
                                    enlargeOnInteraction: !1,
                                    isInteracting: i,
                                    maskAsset: !1,
                                    sticker: d,
                                    size: Math.round(u * n),
                                    withLoadingIndicator: !1
                                })
                            }), s && (0, r.jsx)(c.animated.div, {
                                className: p.overlayLabelWrapper,
                                style: C,
                                children: (0, r.jsx)(f.Text, {
                                    variant: "text-sm/medium",
                                    className: p.overlayLabel,
                                    children: d.name
                                })
                            })]
                        })
                    }))
                },
                w = e => {
                    let {
                        isInteracting: t = !1,
                        disableAnimation: n = !1,
                        enlargeOnInteraction: s = !1,
                        enlargeWithName: i = !0,
                        enlargeScaleFactor: l = 1.55,
                        maskAsset: u = !1,
                        size: c,
                        sticker: o,
                        className: d,
                        withLoadingIndicator: f,
                        assetData: E,
                        fileUri: v,
                        onError: h
                    } = e, m = (0, S.useIsWindowFocused)(), C = (0, N.useShouldAnimateSticker)(t) && !n, I = a.useRef(null);
                    if (null == o) return null;
                    let p = o.format_type === g.StickerFormat.LOTTIE ? L : V;
                    return (0, r.jsxs)(a.Fragment, {
                        children: [(0, r.jsx)(p, {
                            shouldAnimate: C,
                            isFocused: m,
                            size: c,
                            sticker: o,
                            className: d,
                            maskAsset: u,
                            positionRef: I,
                            withLoadingIndicator: f,
                            assetData: E,
                            fileUri: v,
                            onError: h
                        }), s && (0, r.jsx)(j, {
                            disableAnimation: n,
                            enlargeScaleFactor: l,
                            enlargeWithName: i,
                            isInteracting: t,
                            positionRef: I,
                            size: c,
                            sticker: o
                        })]
                    }, "".concat(o.id, ",").concat(c))
                };
            var G = w
        },
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("503420"),
                i = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: a = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, r.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, r.jsx)("path", {
                                className: s,
                                fill: a,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, s.ClockIcon, void 0, {
                    size: 20
                })
        },
        682344: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("305861"),
                i = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 23,
                        color: a = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 23",
                        children: (0, r.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, r.jsx)("path", {
                                className: s,
                                fill: a,
                                d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                            })
                        })
                    })
                }, s.ShieldUserIcon, void 0, {
                    size: 23
                })
        },
        54560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("441888"),
                i = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: a = "currentColor",
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, i.default)(s),
                        viewBox: "0 0 20 20",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 .663v4.739A2.594 2.594 0 0014.6 8h4.74a.656.656 0 00.466-1.12L13.121.196A.654.654 0 0012 .663zm2.576 9.365A4.608 4.608 0 019.97 5.422V.058H1.994A2 2 0 000 2.052v15.952a2 2 0 001.994 1.994h15.952a2 2 0 001.994-1.994v-7.976h-5.364zM8 15.553a2 2 0 113.999 0h1.333a3.333 3.333 0 10-6.666 0h1.334zM2.716 13.5L2 12.784 2.784 12l.716.716.716-.716.784.784-.716.716.716.716-.784.784-.716-.716-.716.716L2 14.216l.716-.716zM15 12.784l.716.716-.716.716.784.784.716-.716.716.716.784-.784-.716-.716.716-.716-.784-.784-.716.716-.716-.716-.784.784z",
                            fill: a
                        })
                    })
                }, s.StickerSadIcon, void 0, {
                    size: 20
                })
        },
        228220: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("47693"),
                i = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, i.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"
                        }), (0, r.jsx)("path", {
                            fill: a,
                            className: s,
                            d: "M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"
                        })]
                    })
                }, s.TrashIcon, void 0, {
                    size: 24
                })
        },
        240292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("308472"),
                i = n("75196"),
                l = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            transform: "translate(2 6)",
                            children: (0, r.jsx)("path", {
                                className: s,
                                fill: a,
                                d: "M14 0l2.29 2.29-4.88 4.88-4-4L0 10.59 1.41 12l6-6 4 4 6.3-6.29L20 6V0z"
                            })
                        })
                    })
                }, s.AnalyticsIcon, void 0, {
                    size: 24
                })
        },
        841559: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("75196");

            function s(e) {
                let {
                    width: t = 8,
                    height: n = 13,
                    color: s = "currentColor",
                    foreground: i,
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 13",
                    children: (0, r.jsx)("path", {
                        className: null != i ? i : void 0,
                        stroke: s,
                        fill: "transparent",
                        d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z"
                    })
                })
            }
        },
        898260: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                l = n("841559"),
                u = n("782340"),
                c = n("359027"),
                o = a.forwardRef(function(e, t) {
                    let {
                        className: n,
                        contentClassName: a,
                        isUnread: s,
                        children: o,
                        id: d,
                        role: f,
                        "aria-label": E
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: i(n, {
                            [c.divider]: !0,
                            [c.isUnread]: s,
                            [c.hasContent]: null != o
                        }),
                        ref: t,
                        id: d,
                        role: f,
                        "aria-label": E,
                        children: [null != o ? (0, r.jsx)("span", {
                            className: i(c.content, a),
                            children: o
                        }) : null, s ? (0, r.jsxs)("span", {
                            className: c.unreadPill,
                            children: [(0, r.jsx)(l.default, {
                                foreground: c.unreadPillCapStroke,
                                className: c.unreadPillCap
                            }), u.default.Messages.NEW]
                        }) : null]
                    })
                })
        }
    }
]);