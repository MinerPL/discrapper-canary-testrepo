(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["15816"], {
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var u = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("845579"),
                r = n("662255"),
                i = n("306160");

            function l(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: l,
                    shiftId: c,
                    showIconFirst: d
                } = e, o = s.DeveloperMode.useSetting();
                if (__OVERLAY__ || !o || !i.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, u.jsx)(a.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != c && e.shiftKey ? c : t;
                        (0, i.copy)(n), null == l || l()
                    },
                    icon: r.default,
                    showIconFirst: d
                }, f)
            }
        },
        327054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var u = n("300322"),
                a = n("913491"),
                s = n("49111");

            function r(e, t, n) {
                let r = t.isSystemDM(),
                    i = !r && !(0, a.default)(e);
                return i && (n || t.isPrivate()) && (0, u.getIsActiveChannelOrUnarchivableThread)(t) && t.type !== s.ChannelTypes.GUILD_VOICE && t.type !== s.ChannelTypes.GUILD_STAGE_VOICE
            }
        },
        13406: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var u = n("37983");
            n("884691");
            var a = n("118810"),
                s = n("77078"),
                r = n("272030"),
                i = n("861370"),
                l = n("152298"),
                c = n("26051"),
                d = n("667358"),
                o = n("518155"),
                f = n("718381"),
                h = n("875834"),
                p = n("780657"),
                M = n("782340");

            function E(e) {
                var t;
                let n, E, I, {
                        channel: S,
                        message: m,
                        target: v,
                        attachment: _,
                        onSelect: x
                    } = e,
                    N = v;
                if (null != _) E = n = _.url;
                else
                    for (;
                        (0, a.isElement)(N);)(0, a.isElement)(N, HTMLImageElement) && null != N.src && (E = N.src), (0, a.isElement)(N, HTMLAnchorElement) && null != N.href && (n = N.href, I = N.textContent), N = N.parentNode;
                let g = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString(),
                    A = (0, l.default)(g),
                    G = (0, d.default)(g),
                    O = (0, p.default)(m, S),
                    C = (0, h.default)(m, S),
                    j = (0, o.default)(m, S),
                    T = (0, f.default)(m, S),
                    P = (0, c.default)(null != n ? n : E, I),
                    y = (0, i.default)({
                        id: m.id,
                        label: M.default.Messages.COPY_ID_MESSAGE,
                        shiftId: "".concat(m.channel_id, "-").concat(m.id)
                    }),
                    R = (0, i.default)({
                        id: m.author.id,
                        label: M.default.Messages.COPY_ID_AUTHOR
                    });
                return (0, u.jsxs)(s.Menu, {
                    navId: "message",
                    onClose: r.closeContextMenu,
                    "aria-label": M.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: x,
                    children: [(0, u.jsx)(s.MenuGroup, {
                        children: A
                    }), (0, u.jsx)(s.MenuGroup, {
                        children: G
                    }), (0, u.jsxs)(s.MenuGroup, {
                        children: [O, C, j, T]
                    }), (0, u.jsx)(s.MenuGroup, {
                        children: P
                    }), (0, u.jsxs)(s.MenuGroup, {
                        children: [y, R]
                    })]
                })
            }
        },
        780657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var u = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                r = n("828986"),
                i = n("249561"),
                l = n("957255"),
                c = n("566998"),
                d = n("327054"),
                o = n("49111"),
                f = n("782340");

            function h(e, t) {
                let n = (0, a.useStateFromStores)([l.default], () => l.default.can(o.Permissions.MANAGE_MESSAGES, t), [t]);
                return e.state !== o.MessageStates.SEND_FAILED && (0, d.default)(e, t, n) ? !1 === e.pinned ? (0, u.jsx)(s.MenuItem, {
                    id: "pin",
                    action: function(n) {
                        n.shiftKey ? r.default.pinMessage(t, e.id) : i.default.confirmPin(t, e)
                    },
                    label: f.default.Messages.PIN_MESSAGE,
                    icon: c.default
                }) : (0, u.jsx)(s.MenuItem, {
                    id: "unpin",
                    action: function(n) {
                        n.shiftKey ? r.default.unpinMessage(t, e.id) : i.default.confirmUnpin(t, e)
                    },
                    label: f.default.Messages.UNPIN_MESSAGE,
                    icon: c.default
                }) : null
            }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return a
                },
                default: function() {
                    return p
                }
            });
            var u, a, s = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                l = n("77078"),
                c = n("36694"),
                d = n("381546"),
                o = n("68238"),
                f = n("423487"),
                h = n("557296");
            (u = a || (a = {}))[u.WARNING = 0] = "WARNING", u[u.INFO = 1] = "INFO", u[u.ERROR = 2] = "ERROR", u[u.POSITIVE = 3] = "POSITIVE";
            var p = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: u,
                    textColor: a = "text-normal",
                    textVariant: r = "text-sm/medium"
                } = e, p = function(e) {
                    switch (e) {
                        case 0:
                            return f.default;
                        case 1:
                            return o.default;
                        case 2:
                            return d.default;
                        case 3:
                            return c.default
                    }
                }(n), M = function(e) {
                    switch (e) {
                        case 0:
                            return h.warning;
                        case 1:
                            return h.info;
                        case 2:
                            return h.error;
                        case 3:
                            return h.positive
                    }
                }(n);
                return (0, s.jsxs)("div", {
                    className: i(h.container, M, u),
                    children: [(0, s.jsx)("div", {
                        className: h.iconDiv,
                        children: (0, s.jsx)(p, {
                            className: h.icon
                        })
                    }), (0, s.jsx)(l.Text, {
                        className: h.text,
                        color: a,
                        variant: r,
                        children: t
                    })]
                })
            }
        }
    }
]);