(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48376"], {
        448105: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                var r = t.length,
                    a = e.length;
                if (a > r) return !1;
                if (a === r) return e === t;
                e: for (var n = 0, i = 0; n < a; n++) {
                    for (var l = e.charCodeAt(n); i < r;)
                        if (t.charCodeAt(i++) === l) continue e;
                    return !1
                }
                return !0
            }
        },
        310013: function(e, t, r) {
            "use strict";
            var a = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                n = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                i = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, r) {
                if ("string" != typeof t) {
                    var l = Object.getOwnPropertyNames(t);
                    i && (l = l.concat(Object.getOwnPropertySymbols(t)));
                    for (var s = 0; s < l.length; ++s)
                        if (!a[l[s]] && !n[l[s]] && (!r || !r[l[s]])) try {
                            e[l[s]] = t[l[s]]
                        } catch (e) {}
                }
                return e
            }
        },
        766665: function(e, t, r) {
            var a = r("424498");
            e.exports = function(e, t, r) {
                "__proto__" == t && a ? a(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0
                }) : e[t] = r
            }
        },
        136759: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                persist: function() {
                    return d
                }
            }), r("222007");
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var a = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                s = (e, t, r) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                o = (e, t) => {
                    for (var r in t || (t = {})) i.call(t, r) && s(e, r, t[r]);
                    if (n)
                        for (var r of n(t)) l.call(t, r) && s(e, r, t[r]);
                    return e
                };
            let u = e => t => {
                    try {
                        let r = e(t);
                        if (r instanceof Promise) return r;
                        return {
                            then: e => u(e)(r),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => u(t)(e)
                        }
                    }
                },
                d = (e, t) => (r, a, n) => {
                    let i, l, s = o({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => o(o({}, t), e)
                    }, t);
                    (s.blacklist || s.whitelist) && console.warn("The ".concat(s.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let d = !1,
                        c = new Set,
                        _ = new Set;
                    try {
                        i = s.getStorage()
                    } catch (e) {}
                    if (!i) return e(function() {
                        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(s.name, "', the given storage is currently unavailable.")), r(...t)
                    }, a, n);
                    !i.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(s.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let f = u(s.serialize),
                        E = () => {
                            let e;
                            let t = s.partialize(o({}, a()));
                            s.whitelist && Object.keys(t).forEach(e => {
                                var r;
                                (null == (r = s.whitelist) ? void 0 : r.includes(e)) || delete t[e]
                            }), s.blacklist && s.blacklist.forEach(e => delete t[e]);
                            let r = f({
                                state: t,
                                version: s.version
                            }).then(e => i.setItem(s.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return r
                        },
                        I = n.setState;
                    n.setState = (e, t) => {
                        I(e, t), E()
                    };
                    let p = e(function() {
                            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                            r(...t), E()
                        }, a, n),
                        m = () => {
                            var e;
                            if (!i) return;
                            d = !1, c.forEach(e => e(a()));
                            let t = (null == (e = s.onRehydrateStorage) ? void 0 : e.call(s, a())) || void 0;
                            return u(i.getItem.bind(i))(s.name).then(e => {
                                if (e) return s.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === s.version) return e.state;
                                    if (s.migrate) return s.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return r(l = s.merge(e, null != (t = a()) ? t : p), !0), E()
                            }).then(() => {
                                null == t || t(l, void 0), d = !0, _.forEach(e => e(l))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return n.persist = {
                        setOptions: e => {
                            s = o(o({}, s), e), e.getStorage && (i = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == i ? void 0 : i.removeItem) || e.call(i, s.name)
                        },
                        rehydrate: () => m(),
                        hasHydrated: () => d,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (_.add(e), () => {
                            _.delete(e)
                        })
                    }, m(), l || p
                }
        },
        357450: function(e, t, r) {
            "use strict";
            e.exports = r.p + "222f914ec12acf16874f.svg"
        },
        348919: function(e, t, r) {
            "use strict";
            e.exports = r.p + "ec6798869dcd1915ecd8.svg"
        },
        583367: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                fetchAppliedGuildBoostsForGuild: function() {
                    return d
                },
                fetchGuildBoostSlots: function() {
                    return c
                },
                applyToGuild: function() {
                    return _
                },
                unapplyFromGuild: function() {
                    return f
                },
                cancelGuildBoostSlot: function() {
                    return E
                },
                uncancelGuildBoostSlot: function() {
                    return I
                }
            });
            var a = r("872717"),
                n = r("913144"),
                i = r("448993"),
                l = r("783111"),
                s = r("522308"),
                o = r("521012"),
                u = r("49111");
            async function d(e) {
                let t = await a.default.get({
                        url: u.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                        oldFormErrors: !0
                    }),
                    r = t.body.map(e => l.default.createFromServer(e));
                return n.default.dispatch({
                    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
                    guildId: e,
                    appliedBoosts: r
                }), r
            }
            async function c() {
                let e = await a.default.get({
                        url: u.Endpoints.USER_GUILD_BOOST_SLOTS,
                        oldFormErrors: !0
                    }),
                    t = e.body.map(e => s.default.createFromServer(e, o.default.getSubscriptionById(e.subscription_id)));
                return n.default.dispatch({
                    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
                    guildBoostSlots: t
                }), t
            }
            async function _(e, t) {
                n.default.dispatch({
                    type: "GUILD_APPLY_BOOST_START"
                });
                try {
                    let r = await a.default.put({
                            url: u.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                            body: {
                                user_premium_guild_subscription_slot_ids: t
                            },
                            oldFormErrors: !0
                        }),
                        i = Array.isArray(r.body) ? r.body.map(l.default.createFromServer) : [l.default.createFromServer(r.body)];
                    return n.default.dispatch({
                        type: "GUILD_APPLY_BOOST_SUCCESS",
                        appliedGuildBoost: i
                    }), c(), i
                } catch (t) {
                    let e = new i.AppliedGuildBoostError(t);
                    throw n.default.dispatch({
                        type: "GUILD_APPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
            }
            async function f(e, t) {
                n.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_START"
                });
                try {
                    await a.default.delete({
                        url: u.Endpoints.APPLIED_GUILD_BOOST(e, t),
                        oldFormErrors: !0
                    }), c()
                } catch (t) {
                    let e = new i.AppliedGuildBoostError(t);
                    throw n.default.dispatch({
                        type: "GUILD_UNAPPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
                n.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
                    boostId: t
                })
            }
            async function E(e) {
                let t = await a.default.post({
                        url: u.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
                        oldFormErrors: !0
                    }),
                    r = s.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
                return n.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: r
                }), r
            }
            async function I(e) {
                let t = await a.default.post({
                        url: u.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
                        oldFormErrors: !0
                    }),
                    r = s.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
                return n.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: r
                }), r
            }
        },
        8731: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                cropGIF: function() {
                    return l
                },
                cropStaticImage: function() {
                    return s
                },
                getBoundedCoordinates: function() {
                    return o
                },
                adjustImageDimensionsForAspectRatio: function() {
                    return d
                },
                calculateDragBoundaries: function() {
                    return c
                },
                calculateOverlaySize: function() {
                    return _
                },
                downsizeImage: function() {
                    return f
                }
            }), r("511434"), r("313619"), r("654714"), r("287168"), r("956660"), r("222007"), r("70102"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341");
            var a = r("917351"),
                n = r("75015");

            function i(e, t, r, a) {
                let n = e.naturalWidth / e.width,
                    i = t.width / 2,
                    l = t.height / 2,
                    s = (e.width / 2 - i - r.x) * n,
                    o = (e.height / 2 - l - r.y) * n,
                    u = t.width * n,
                    d = t.height * n,
                    c = Math.min(u, a.width),
                    _ = Math.min(d, a.height);
                return {
                    x: s,
                    y: o,
                    scaledCropWidth: u,
                    scaledCropHeight: d,
                    canvasWidth: c,
                    canvasHeight: _
                }
            }
            async function l(e, t, a, l, s) {
                let {
                    x: o,
                    y: u,
                    scaledCropWidth: d,
                    scaledCropHeight: c
                } = i(t, a, l, s), _ = await e.arrayBuffer(), f = new Worker(new URL(r.p + r.u("39703"), r.b)), E = new Promise((e, t) => {
                    f.onmessage = r => {
                        let {
                            data: a
                        } = r;
                        if (a.type === n.MessageTypes.CROP_GIF_COMPLETE) {
                            var i;
                            e((i = new Blob([a.result]), new Promise(e => {
                                let t = new FileReader;
                                t.onload = t => {
                                    var r;
                                    let a = null === (r = t.target) || void 0 === r ? void 0 : r.result;
                                    "string" == typeof a ? e(a) : e("")
                                }, t.readAsDataURL(i)
                            }))), f.terminate()
                        } else a.type === n.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), f.terminate())
                    }
                });
                return f.postMessage({
                    type: n.MessageTypes.CROP_GIF_START,
                    gif: new Uint8Array(_),
                    x: 0 | o,
                    y: 0 | u,
                    width: 0 | d,
                    height: 0 | c
                }), {
                    result: E,
                    cancelFn: () => f.terminate()
                }
            }

            function s(e, t, r, a) {
                let {
                    x: n,
                    y: l,
                    scaledCropWidth: s,
                    scaledCropHeight: o,
                    canvasWidth: u,
                    canvasHeight: d
                } = i(e, t, r, a), c = document.createElement("canvas");
                c.width = u, c.height = d;
                let _ = c.getContext("2d");
                return null != _ && _.drawImage(e, n, l, s, o, 0, 0, c.width, c.height), c.toDataURL("image/png")
            }

            function o(e, t, r) {
                return {
                    x: (0, a.clamp)(e, r.left, r.right),
                    y: (0, a.clamp)(t, r.bottom, r.top)
                }
            }

            function u(e, t, r, a) {
                let i = r,
                    l = a;
                r > n.EDITING_CONTAINER_WIDTH && (i = n.EDITING_CONTAINER_WIDTH, l = a * (n.EDITING_CONTAINER_WIDTH / r));
                if (r / a < e) return {
                    width: i,
                    height: l
                };
                let s = t / l,
                    o = i * s;
                return {
                    width: o,
                    height: t
                }
            }

            function d(e, t, r) {
                switch (e) {
                    case n.UploadTypes.AVATAR:
                    case n.UploadTypes.AVATAR_DECORATION:
                        return {
                            width: t, height: r
                        };
                    case n.UploadTypes.BANNER:
                        return u(n.BANNER_ASPECT_RATIO, n.MAX_BANNER_OVERLAY_HEIGHT, t, r);
                    case n.UploadTypes.GUILD_BANNER:
                        return u(n.GUILD_BANNER_ASPECT_RATIO, n.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, r);
                    case n.UploadTypes.VIDEO_BACKGROUND:
                        return u(n.VIDEO_BACKGROUND_ASPECT_RATIO, n.MAX_VIDEO_OVERLAY_HEIGHT, t, r);
                    case n.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        return u(n.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, n.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, r);
                    case n.UploadTypes.HOME_HEADER:
                        return u(n.HOME_HEADER_ASPECT_RATIO, n.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, r)
                }
            }

            function c(e, t, r) {
                let a = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    n = e - r.width,
                    i = t - r.height;
                return 0 !== n && (a.left = -Math.abs(n / 2), a.right = n / 2), 0 !== i && (a.bottom = -Math.abs(i / 2), a.top = i / 2), a
            }

            function _(e, t, r, a) {
                switch (e) {
                    case n.UploadTypes.AVATAR:
                    case n.UploadTypes.AVATAR_DECORATION:
                        let i = Math.min(t, r);
                        return {
                            width: i, height: i
                        };
                    case n.UploadTypes.BANNER:
                        let l = Math.min(t, n.EDITING_CONTAINER_WIDTH);
                        return {
                            width: l, height: l * (1 / n.BANNER_ASPECT_RATIO)
                        };
                    case n.UploadTypes.GUILD_BANNER:
                        let s = Math.min(t, n.EDITING_CONTAINER_WIDTH);
                        return {
                            width: s, height: Math.min(s * (9 / 16), a)
                        };
                    case n.UploadTypes.VIDEO_BACKGROUND:
                        let o = Math.min(t, n.EDITING_CONTAINER_WIDTH);
                        return {
                            width: o, height: o * (9 / 16)
                        };
                    case n.UploadTypes.SCHEDULED_EVENT_IMAGE:
                        let u = Math.min(t, n.EDITING_CONTAINER_WIDTH);
                        return {
                            width: u, height: .4 * u
                        };
                    case n.UploadTypes.HOME_HEADER:
                        let d = Math.min(t, n.EDITING_CONTAINER_WIDTH);
                        return {
                            width: d, height: d * (1 / n.HOME_HEADER_ASPECT_RATIO)
                        }
                }
            }

            function f(e, t, r) {
                let a = e.naturalWidth / e.naturalHeight,
                    n = t,
                    i = r;
                e.naturalWidth > e.naturalHeight ? n /= a : i *= a;
                let l = {
                    height: n,
                    width: i
                };
                return s(e, {
                    width: e.width,
                    height: e.height
                }, {
                    x: 0,
                    y: 0
                }, l)
            }
        },
        520497: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var a = r("49111");

            function n(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: r
                } = window.GLOBAL_ENV;
                return "development" !== r ? "".concat(location.protocol, "//").concat(t).concat(a.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(a.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        54666: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return j
                }
            }), r("222007");
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                s = r("748820"),
                o = r("446674"),
                u = r("819855"),
                d = r("77078"),
                c = r("385976"),
                _ = r("208548"),
                f = r("104945"),
                E = r("8731"),
                I = r("161778"),
                p = r("305961"),
                m = r("697218"),
                h = r("145131"),
                T = r("68238"),
                g = r("599110"),
                S = r("993105"),
                A = r("701909"),
                L = r("103603"),
                O = r("467094"),
                D = r("161585"),
                y = r("24373"),
                v = r("41170"),
                R = r("560241"),
                U = r("49111"),
                C = r("782340"),
                N = r("735193"),
                w = r("357450"),
                P = r("348919");
            let G = new Set(["application/json", "image/png", "image/apng", "image/gif"]),
                b = [{
                    name: "Sticker file",
                    extensions: ["json", "png", "apng", "gif"]
                }];

            function M(e, t) {
                g.default.track(U.AnalyticEvents.STICKER_UPLOAD_COMPLETED, {
                    successful: e,
                    error: null != t ? t : ""
                })
            }
            let F = e => {
                    let {
                        stickerPreview: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: N.preview,
                        children: [(0, a.jsx)("div", {
                            className: N.previewDark,
                            children: null != t ? t : (0, a.jsx)("img", {
                                src: w,
                                alt: C.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_DARK
                            })
                        }), (0, a.jsx)("div", {
                            className: N.previewLight,
                            children: null != t ? t : (0, a.jsx)("img", {
                                src: P,
                                alt: C.default.Messages.GUILD_STICKER_PREVIEW_IMG_ALT_LIGHT
                            })
                        })]
                    })
                },
                B = e => {
                    let {
                        sticker: t,
                        previewData: r,
                        onStickerError: n
                    } = e;
                    if (null != t) return (0, a.jsx)(v.default, {
                        size: 160,
                        sticker: t
                    });
                    if (null == r) return null;
                    let {
                        id: i,
                        formatType: l,
                        content: s
                    } = r;
                    return (0, a.jsx)(v.default, {
                        assetData: s,
                        fileUri: s,
                        size: 160,
                        sticker: {
                            name: i,
                            description: "",
                            id: i,
                            pack_id: "",
                            format_type: l
                        },
                        onError: n
                    }, i)
                };
            async function x(e) {
                let t = await (0, L.readFileAsBase64)(e),
                    r = new Image;
                r.src = t, await r.decode();
                let a = (0, E.downsizeImage)(r, 320, 320);
                return (0, L.dataUrlToFile)(a, e.name, e.type)
            }

            function j(e) {
                var t, r, i, E, v, w, P, j;
                let {
                    transitionState: H,
                    onClose: K,
                    guildId: k,
                    sticker: V
                } = e, z = (0, o.useStateFromStores)([I.default], () => I.default.theme), W = (0, o.useStateFromStores)([c.default], () => (null == V ? void 0 : V.tags) != null ? c.default.getCustomEmojiById(V.tags) : null), Y = null !== (r = null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && void 0 !== r && r, X = Y ? R.STAFF_MAX_STICKER_FILE_SIZE : R.MAX_STICKER_FILE_SIZE, [Z, q] = n.useState(null), [J, Q] = n.useState(null !== (i = null == V ? void 0 : V.name) && void 0 !== i ? i : ""), [$, ee] = n.useState({
                    file: null,
                    filename: null !== (E = (0, y.getFilenameForSticker)(V)) && void 0 !== E ? E : ""
                }), [et, er] = n.useState(null == W ? void 0 : W.id), [ea, en] = n.useState(null !== (v = null == W ? void 0 : W.name) && void 0 !== v ? v : null == V ? void 0 : V.tags), [ei, el] = n.useState(null !== (w = null == V ? void 0 : V.description) && void 0 !== w ? w : ""), [es, eo] = n.useState(!1), [eu, ed] = n.useState(null), ec = (0, o.useStateFromStores)([p.default], () => p.default.getGuild(k)), e_ = (null == ec ? void 0 : ec.hasFeature(U.GuildFeatures.PARTNERED)) || (null == ec ? void 0 : ec.hasFeature(U.GuildFeatures.VERIFIED)), ef = null != V, eE = ef || (null == $ ? void 0 : $.file) != null, eI = 0 === ei.length || ei.length >= 2 && ei.length <= 100, ep = !es && (null == eu ? void 0 : eu.isBlocking) !== !0 && J.length >= 2 && (null != et || null != ea || (null == V ? void 0 : V.tags) != null && (null == V ? void 0 : V.tags) !== "") && eE && eI, em = async e => {
                    var t;
                    if (null == e) return;
                    let r = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                    if (!G.has(r)) {
                        ed({
                            message: C.default.Messages.GUILD_STICKER_UNKNOWN_MIME_TYPE,
                            isBlocking: !0
                        });
                        return
                    }
                    let a = e;
                    if ("image/png" === r && e.size > X && !await (0, L.isPNGAnimated)(e)) {
                        a = await x(e);
                        let t = a.size > X;
                        g.default.track(U.AnalyticEvents.STICKER_FILE_RESIZED, {
                            original_file_size_bytes: e.size,
                            resized_file_size_bytes: a.size,
                            resized_file_too_big: t
                        })
                    }
                    if (a.size > X) {
                        ed({
                            message: C.default.Messages.GUILD_STICKER_FILE_TOO_BIG.format({
                                maxSize: (0, S.formatKbSize)(X, {
                                    useKibibytes: !0
                                })
                            }),
                            isBlocking: null == $.file
                        }), g.default.track(U.AnalyticEvents.STICKER_UPLOAD_FILE_SIZE_LIMIT_EXCEEDED, {
                            size: a.size,
                            filetype: r
                        });
                        return
                    }
                    let n = (0, y.getStickerFormatTypeFromFileType)(a.type),
                        i = n === D.StickerFormat.LOTTIE;
                    if (i) {
                        if (!e_) {
                            ed({
                                message: C.default.Messages.GUILD_STICKER_UNSUPPORTED_MIME_TYPE.format({
                                    articleURL: A.default.getArticleURL(U.HelpdeskArticles.STICKERS_UPLOAD)
                                }),
                                isBlocking: !0
                            });
                            return
                        }
                        let e = new FileReader;
                        e.addEventListener("load", () => {
                            q({
                                id: (0, s.v4)(),
                                formatType: n,
                                content: e.result
                            }), ed(null)
                        }), e.readAsText(a)
                    } else {
                        let e = await (0, L.readFileAsBase64)(a);
                        q({
                            id: (0, s.v4)(),
                            formatType: n,
                            content: e
                        }), ed(null)
                    }
                    ee({
                        file: a,
                        filename: a.name
                    })
                }, eh = async e => {
                    var t, r, a, n, i, l;
                    e.preventDefault();
                    let s = null !== (r = null !== (t = null != et ? et : ea) && void 0 !== t ? t : null == V ? void 0 : V.tags) && void 0 !== r ? r : "";
                    try {
                        if (eo(!0), ef) await (0, O.updateGuildSticker)(k, null !== (a = null == V ? void 0 : V.id) && void 0 !== a ? a : "", {
                            name: J,
                            tags: s,
                            description: ei
                        });
                        else {
                            ;
                            let e = new FormData;
                            e.append("name", J), e.append("tags", s), e.append("description", ei), (null == $ ? void 0 : $.file) != null && e.append("file", $.file), l = null !== (i = null === (n = $.file) || void 0 === n ? void 0 : n.type) && void 0 !== i ? i : "", g.default.track(U.AnalyticEvents.STICKER_UPLOAD_STARTED, {
                                filetype: l
                            }), await (0, O.createGuildSticker)(k, e), M(!0)
                        }
                        K()
                    } catch (e) {
                        ed({
                            message: e.body.message,
                            isBlocking: !1
                        }), M(!1, e.body.message)
                    } finally {
                        eo(!1)
                    }
                }, eT = n.useCallback(() => {
                    ed({
                        message: C.default.Messages.GUILD_STICKER_INVALID_STICKER,
                        isBlocking: !0
                    })
                }, []), eg = B({
                    sticker: V,
                    previewData: Z,
                    onStickerError: eT
                }), eS = e_ ? C.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION : C.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_NO_LOTTIE;
                return (0, a.jsxs)(d.ModalRoot, {
                    transitionState: H,
                    "aria-labelledby": "STICKER_UPLOAD_MODAL",
                    className: N.modal,
                    children: [(0, a.jsx)(d.ModalCloseButton, {
                        onClick: K,
                        className: N.modalClose
                    }), (0, a.jsxs)("form", {
                        onSubmit: eh,
                        className: N.form,
                        children: [(0, a.jsxs)(d.ModalContent, {
                            className: N.modalContent,
                            children: [(0, a.jsxs)(d.ModalHeader, {
                                direction: h.default.Direction.VERTICAL,
                                separator: !1,
                                className: N.modalHeader,
                                children: [(0, a.jsx)(d.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: N.modalHeaderTitle,
                                    children: C.default.Messages.GUILD_STICKER_UPLOAD_TITLE
                                }), (0, a.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: eS.format({
                                        fileSize: (0, S.formatKbSize)(R.MAX_STICKER_FILE_SIZE, {
                                            useKibibytes: !0
                                        })
                                    })
                                })]
                            }), (0, a.jsx)(d.FormSection, {
                                title: C.default.Messages.GUILD_STICKER_UPLOAD_PREVIEW_TITLE,
                                className: N.formItem,
                                children: (0, a.jsx)(F, {
                                    stickerPreview: eg
                                })
                            }), (0, a.jsxs)(d.FormSection, {
                                className: l(N.formItem, N.formItemRow),
                                children: [(0, a.jsx)(d.FormItem, {
                                    title: ef ? C.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE_BLOCKED : C.default.Messages.GUILD_STICKER_UPLOAD_FILE_TITLE,
                                    required: !0,
                                    className: N.formItemRowChild,
                                    children: ef ? (0, a.jsx)(d.TextInput, {
                                        disabled: !0,
                                        value: null !== (P = null == $ ? void 0 : $.filename) && void 0 !== P ? P : ""
                                    }) : (0, a.jsx)(f.default, {
                                        buttonText: C.default.Messages.GUILD_STICKER_UPLOAD_FILE_BUTTON,
                                        filters: b,
                                        filename: null !== (j = null == $ ? void 0 : $.filename) && void 0 !== j ? j : "",
                                        placeholder: C.default.Messages.GUILD_STICKER_UPLOAD_FILE_PLACEHOLDER,
                                        onFileSelect: em
                                    })
                                }), (0, a.jsx)(_.default, {
                                    className: N.formItemRowChild,
                                    guildId: k,
                                    emojiId: et,
                                    emojiName: ea,
                                    setEmojiId: er,
                                    setEmojiName: en,
                                    shouldUpdateBothEmojiFields: !0
                                })]
                            }), (0, a.jsx)(d.FormItem, {
                                title: C.default.Messages.GUILD_STICKER_UPLOAD_NAME_TITLE,
                                required: !0,
                                className: N.formItem,
                                children: (0, a.jsx)(d.TextInput, {
                                    value: J,
                                    onChange: Q,
                                    placeholder: C.default.Messages.GUILD_STICKER_UPLOAD_NAME_PLACEHOLDER,
                                    maxLength: 30
                                })
                            }), (0, a.jsxs)("div", {
                                className: N.formItem,
                                children: [(0, a.jsxs)(d.FormTitle, {
                                    children: [C.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TITLE, (0, a.jsx)(d.Tooltip, {
                                        text: C.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_TOOLTIP,
                                        children: e => (0, a.jsx)(T.default, {
                                            className: N.infoIcon,
                                            ...e
                                        })
                                    })]
                                }), (0, a.jsx)(d.TextArea, {
                                    value: ei,
                                    onChange: el,
                                    placeholder: C.default.Messages.GUILD_STICKER_UPLOAD_DESCRIPTION_PLACEHOLDER,
                                    maxLength: 100
                                })]
                            }), null != eu && (0, a.jsx)(d.Text, {
                                className: N.formItem,
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: eu.message
                            })]
                        }), (0, a.jsxs)(d.ModalFooter, {
                            className: N.modalFooter,
                            children: [(0, a.jsx)(d.Button, {
                                type: "submit",
                                disabled: !ep,
                                children: ef ? C.default.Messages.GUILD_STICKERS_UPDATE : C.default.Messages.UPLOAD
                            }), (0, a.jsx)(d.Button, {
                                look: d.Button.Looks.LINK,
                                color: (0, u.isThemeLight)(z) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
                                onClick: K,
                                children: C.default.Messages.NEVERMIND
                            })]
                        })]
                    })]
                })
            }
        },
        783111: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var a = r("666038");
            class n extends a.default {
                static createFromServer(e) {
                    return new n({
                        id: e.id,
                        guildId: e.guild_id,
                        userId: null != e.user ? e.user.id : e.user_id,
                        user: e.user,
                        ended: e.ended,
                        endsAt: null != e.ends_at && "" !== e.ends_at ? new Date(e.ends_at) : null
                    })
                }
                constructor(e) {
                    super(), this.id = e.id, this.guildId = e.guildId, this.userId = e.userId, this.user = e.user, this.ended = e.ended, this.endsAt = null != e.endsAt ? e.endsAt : null
                }
            }
            var i = n
        },
        476765: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                uid: function() {
                    return l
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return o
                }
            });
            var a = r("995008"),
                n = r.n(a),
                i = r("775560");
            let l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return n(e)
                },
                s = () => (0, i.useLazyValue)(() => l()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(s())
                }
        },
        118503: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var a = r("37983");
            r("884691");
            var n = r("75196");

            function i(e) {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: i = "currentColor",
                    foreground: l,
                    ...s
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, n.default)(s),
                    width: t,
                    height: r,
                    viewBox: "0 0 8 12",
                    children: [(0, a.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: i,
                        className: l
                    }), (0, a.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: i,
                        className: l
                    })]
                })
            }
        }
    }
]);