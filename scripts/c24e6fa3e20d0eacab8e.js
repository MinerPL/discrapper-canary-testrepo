(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["6343"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), l.test(e)) ? "rtl" : i.test(e) ? "ltr" : "neutral"
            };
            var a = "֑-߿יִ-﷽ﹰ-ﻼ",
                s = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                l = RegExp("^[^" + s + "]*[" + a + "]"),
                i = RegExp("^[^" + a + "]*[" + s + "]")
        },
        136759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return o
                }
            }), n("222007");
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var a = Object.defineProperty,
                s = Object.getOwnPropertySymbols,
                l = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                r = (e, t, n) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                d = (e, t) => {
                    for (var n in t || (t = {})) l.call(t, n) && r(e, n, t[n]);
                    if (s)
                        for (var n of s(t)) i.call(t, n) && r(e, n, t[n]);
                    return e
                };
            let u = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => u(e)(n),
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
                o = (e, t) => (n, a, s) => {
                    let l, i, r = d({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => d(d({}, t), e)
                    }, t);
                    (r.blacklist || r.whitelist) && console.warn("The ".concat(r.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let o = !1,
                        c = new Set,
                        f = new Set;
                    try {
                        l = r.getStorage()
                    } catch (e) {}
                    if (!l) return e(function() {
                        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(r.name, "', the given storage is currently unavailable.")), n(...t)
                    }, a, s);
                    !l.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(r.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let g = u(r.serialize),
                        E = () => {
                            let e;
                            let t = r.partialize(d({}, a()));
                            r.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = r.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), r.blacklist && r.blacklist.forEach(e => delete t[e]);
                            let n = g({
                                state: t,
                                version: r.version
                            }).then(e => l.setItem(r.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        m = s.setState;
                    s.setState = (e, t) => {
                        m(e, t), E()
                    };
                    let h = e(function() {
                            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                            n(...t), E()
                        }, a, s),
                        p = () => {
                            var e;
                            if (!l) return;
                            o = !1, c.forEach(e => e(a()));
                            let t = (null == (e = r.onRehydrateStorage) ? void 0 : e.call(r, a())) || void 0;
                            return u(l.getItem.bind(l))(r.name).then(e => {
                                if (e) return r.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === r.version) return e.state;
                                    if (r.migrate) return r.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(i = r.merge(e, null != (t = a()) ? t : h), !0), E()
                            }).then(() => {
                                null == t || t(i, void 0), o = !0, f.forEach(e => e(i))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return s.persist = {
                        setOptions: e => {
                            r = d(d({}, r), e), e.getStorage && (l = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == l ? void 0 : l.removeItem) || e.call(l, r.name)
                        },
                        rehydrate: () => p(),
                        hasHydrated: () => o,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, p(), i || h
                }
        },
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        828986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("872717"),
                s = n("913144"),
                l = n("263024"),
                i = n("508229"),
                r = n("404118"),
                d = n("49111"),
                u = n("782340");
            let o = {
                async pinMessage(e, t) {
                    let {
                        id: n,
                        name: s
                    } = e;
                    await l.default.unarchiveThreadIfNecessary(e.id), a.default.put({
                        url: d.Endpoints.PIN(n, t),
                        oldFormErrors: !0
                    }).catch(() => {
                        let t;
                        t = e.isPrivate() ? u.default.Messages.PIN_MESSAGE_TOO_MANY_BODY_PRIVATE_CHANNEL.format({
                            maxPins: d.MAX_PINS_PER_CHANNEL
                        }) : u.default.Messages.PIN_MESSAGE_TOO_MANY_BODY.format({
                            maxPins: d.MAX_PINS_PER_CHANNEL,
                            channelName: s
                        }), r.default.show({
                            title: u.default.Messages.PIN_MESSAGE_TOO_MANY_TITLE,
                            body: t,
                            confirmText: u.default.Messages.OKAY
                        })
                    })
                },
                async unpinMessage(e, t) {
                    await l.default.unarchiveThreadIfNecessary(e.id), a.default.delete({
                        url: d.Endpoints.PIN(e.id, t),
                        oldFormErrors: !0
                    }).catch(() => r.default.show({
                        title: u.default.Messages.UNPIN_MESSAGE_FAILED_TITLE,
                        body: u.default.Messages.UNPIN_MESSAGE_FAILED_BODY,
                        confirmText: u.default.Messages.TRY_AGAIN,
                        cancelText: u.default.Messages.CANCEL,
                        onConfirm: o.unpinMessage.bind(o, e, t)
                    }))
                },
                ackPins(e) {
                    s.default.dispatch({
                        type: "CHANNEL_PINS_ACK",
                        channelId: e
                    })
                },
                fetchPins(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = i.default.getPinnedMessages(e);
                    (t || null == n || !n.loaded && !n.loading) && (s.default.dispatch({
                        type: "LOAD_PINNED_MESSAGES",
                        channelId: e
                    }), a.default.get({
                        url: d.Endpoints.PINS(e),
                        retries: 2,
                        oldFormErrors: !0
                    }).then(t => {
                        s.default.dispatch({
                            type: "LOAD_PINNED_MESSAGES_SUCCESS",
                            messages: t.body,
                            channelId: e
                        })
                    }, () => {
                        s.default.dispatch({
                            type: "LOAD_PINNED_MESSAGES_FAILURE",
                            channelId: e
                        })
                    }))
                }
            };
            var c = o
        },
        249561: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("702976"), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                d = n("828986"),
                u = n("819689"),
                o = n("679653"),
                c = n("390236"),
                f = n("377114"),
                g = n("699473"),
                E = n("27618"),
                m = n("697218"),
                h = n("822332"),
                p = n("568734"),
                M = n("870190"),
                _ = n("49111"),
                N = n("782340"),
                S = n("834476");
            class I extends s.PureComponent {
                render() {
                    let e, t;
                    let {
                        report: n
                    } = this.state, {
                        channel: s,
                        message: l,
                        showContextMenuHint: i,
                        ...d
                    } = this.props, u = s.type === _.ChannelTypes.GUILD_ANNOUNCEMENT && (0, p.hasFlag)(l.flags, _.MessageFlags.CROSSPOSTED);
                    return i && (e = (0, a.jsx)(h.default, {
                        className: S.spacingTop,
                        children: N.default.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
                    })), (0, M.canDeleteAndReportMessage)(l) && (t = (0, a.jsx)(r.FormSwitch, {
                        value: n,
                        onChange: this.handleToggleReport,
                        hideBorder: !0,
                        className: S.spacingTop,
                        children: N.default.Messages.DELETE_MESSAGE_REPORT
                    })), (0, a.jsx)(c.default.Provider, {
                        value: s.guild_id,
                        children: (0, a.jsxs)(r.ConfirmModal, {
                            header: u ? N.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER : N.default.Messages.DELETE_MESSAGE_TITLE,
                            confirmText: N.default.Messages.DELETE,
                            cancelText: N.default.Messages.CANCEL,
                            onConfirm: this.handleDelete,
                            ...d,
                            children: [(0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                className: S.spacing,
                                children: u ? N.default.Messages.DELETE_FOLLOWED_NEWS_BODY : N.default.Messages.DELETE_MESSAGE_BODY
                            }), (0, a.jsx)("div", {
                                className: S.message,
                                children: (0, a.jsx)(g.default, {
                                    channel: s,
                                    message: l,
                                    disableInteraction: !0
                                })
                            }), t, e]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        report: !1
                    }, this.handleDelete = () => {
                        let {
                            report: e
                        } = this.state, {
                            channel: t,
                            message: n
                        } = this.props;
                        e ? (0, f.showReportModalForMessage)(n, () => u.default.deleteMessage(t.id, n.id)) : u.default.deleteMessage(t.id, n.id)
                    }, this.handleToggleReport = e => {
                        this.setState({
                            report: e
                        })
                    }
                }
            }
            var v = {
                confirmPin: function(e, t) {
                    (0, r.openModal)(n => {
                        let s;
                        let l = (0, o.computeChannelName)(e, m.default, E.default);
                        return s = e.isPrivate() ? N.default.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : N.default.Messages.PIN_MESSAGE_BODY.format({
                            channelName: l
                        }), (0, a.jsx)(c.default.Provider, {
                            value: e.guild_id,
                            children: (0, a.jsxs)(r.ConfirmModal, {
                                header: N.default.Messages.PIN_MESSAGE_TITLE,
                                confirmText: N.default.Messages.PIN_CONFIRM,
                                cancelText: N.default.Messages.CANCEL,
                                confirmButtonColor: r.Button.Colors.BRAND,
                                onConfirm: () => d.default.pinMessage(e, t.id),
                                ...n,
                                children: [(0, a.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    className: S.spacing,
                                    children: s
                                }), (0, a.jsx)("div", {
                                    className: S.message,
                                    children: (0, a.jsx)(g.default, {
                                        channel: e,
                                        message: t,
                                        animateAvatar: !1,
                                        disableInteraction: !0
                                    })
                                })]
                            })
                        })
                    })
                },
                confirmUnpin: function(e, t) {
                    (0, r.openModal)(n => (0, a.jsx)(c.default.Provider, {
                        value: e.guild_id,
                        children: (0, a.jsxs)(r.ConfirmModal, {
                            header: N.default.Messages.UNPIN_MESSAGE_TITLE,
                            confirmText: N.default.Messages.UNPIN_CONFIRM,
                            cancelText: N.default.Messages.CANCEL,
                            onConfirm: () => d.default.unpinMessage(e, t.id),
                            ...n,
                            children: [(0, a.jsx)(r.Text, {
                                variant: "text-md/normal",
                                className: S.spacing,
                                children: N.default.Messages.UNPIN_MESSAGE_BODY
                            }), (0, a.jsx)("div", {
                                className: i(S.message, S.spacing),
                                children: (0, a.jsx)(g.default, {
                                    channel: e,
                                    message: t,
                                    disableInteraction: !0
                                })
                            }), (0, a.jsx)(h.default, {
                                children: N.default.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
                            })]
                        })
                    }))
                },
                confirmDelete: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    (0, r.openModal)(s => (0, a.jsx)(I, {
                        channel: e,
                        message: t,
                        showContextMenuHint: n,
                        ...s
                    }))
                },
                confirmEdit: function(e, t, n) {
                    (0, r.openModal)(s => (0, a.jsx)(r.ConfirmModal, {
                        header: N.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                        confirmText: N.default.Messages.CONFIRM,
                        cancelText: N.default.Messages.CANCEL,
                        confirmButtonColor: r.Button.Colors.BRAND,
                        onConfirm: () => u.default.editMessage(e, t, {
                            content: n
                        }),
                        ...s,
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            className: S.spacing,
                            children: N.default.Messages.EDIT_FOLLOWED_NEWS_BODY
                        })
                    }))
                }
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        942055: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("759843"),
                l = n("872717"),
                i = n("77078"),
                r = n("363396"),
                d = n("79798"),
                u = n("145131"),
                o = n("701909"),
                c = n("49111"),
                f = n("988268"),
                g = n("782340"),
                E = n("25170"),
                m = n("348044");

            function h(e) {
                let {
                    transitionState: t,
                    onClose: n,
                    channel: h,
                    message: p
                } = e;
                return (0, a.jsxs)(i.ModalRoot, {
                    transitionState: t,
                    "aria-labelledby": "clyde-authorize-modal",
                    size: i.ModalSize.DYNAMIC,
                    impression: {
                        impressionName: s.ImpressionNames.USER_CLYDE_AI_CONSENT_MODAL
                    },
                    children: [(0, a.jsxs)(i.ModalHeader, {
                        direction: u.default.Direction.HORIZONTAL,
                        className: E.header,
                        separator: !1,
                        children: [(0, a.jsx)("img", {
                            src: m,
                            className: E.clydeIcon,
                            alt: ""
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-lg/bold",
                            children: g.default.Messages.CLYDE_MODAL_TITLE
                        }), (0, a.jsx)(d.default, {
                            type: f.BotTagTypes.AI
                        })]
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: E.container,
                        children: [(0, a.jsx)("div", {
                            className: E.divider
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/bold",
                            className: E.subheading,
                            children: g.default.Messages.CLYDE_MODAL_ABOUT_SUBHEADING
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: g.default.Messages.CLYDE_MODAL_ABOUT_SECTION
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/bold",
                            className: E.subheading,
                            children: g.default.Messages.CLYDE_MODAL_PRIVACY_SUBHEADING
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: g.default.Messages.CLYDE_MODAL_PRIVACY_SECTION.format({
                                guidelinesURL: c.MarketingURLs.GUIDELINES,
                                privacyPolicyURL: c.MarketingURLs.PRIVACY
                            })
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/bold",
                            className: E.subheading,
                            children: g.default.Messages.CLYDE_MODAL_DISCLAIMER_SUBHEADING
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            children: g.default.Messages.CLYDE_MODAL_DISCLAIMER_SECTION
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            className: E.subheading,
                            children: g.default.Messages.CLYDE_MODAL_LEARN_MORE.format({
                                learnMoreURL: o.default.getArticleURL(c.HelpdeskArticles.CLYDE_AI)
                            })
                        })]
                    }), (0, a.jsxs)(i.ModalFooter, {
                        direction: u.default.Direction.HORIZONTAL,
                        className: E.footer,
                        children: [(0, a.jsx)(i.Button, {
                            size: i.ButtonSizes.MEDIUM,
                            look: i.ButtonLooks.BLANK,
                            className: E.cancelButton,
                            onClick: n,
                            children: g.default.Messages.CANCEL
                        }), (0, a.jsx)(i.Button, {
                            size: i.ButtonSizes.MEDIUM,
                            onClick: () => {
                                l.default.put({
                                    url: c.Endpoints.USER_CLYDE_CONSENT,
                                    body: {
                                        consent: !0
                                    }
                                }).then(() => {
                                    (0, r.retrySendMessage)(h, p), n()
                                }).catch(() => {
                                    n()
                                })
                            },
                            children: g.default.Messages.CONTINUE
                        })]
                    })]
                })
            }
        },
        613387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                s = n("913144");
            let l = {};
            class i extends a.default.Store {
                getOptions(e) {
                    return l[e]
                }
            }
            i.displayName = "SendMessageOptionsStore";
            var r = new i(s.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t,
                        sendMessageOptions: n
                    } = e;
                    null != n && (l[t.id] = n), null != t.nonce && t.nonce in l && delete l[t.nonce]
                }
            })
        },
        409058: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("702976");
            var a = n("819689"),
                s = n("916565");

            function l(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (a.default.deleteMessage(e.id, t.id, !0), t.isCommandType()) {
                    null != t.interactionData && null != l.applicationId && (0, s.retryCommandMessage)(t, e, l.applicationId);
                    return
                }
                let {
                    content: i,
                    tts: r,
                    flags: d,
                    nonce: u
                } = t;
                a.default.sendMessage(e.id, {
                    content: i,
                    tts: r,
                    invalidEmojis: [],
                    validNonShortcutEmojis: []
                }, void 0, {
                    nonce: u,
                    flags: d,
                    ...l
                })
            }
        },
        363396: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                configureJoin: function() {
                    return S
                },
                copyId: function() {
                    return I
                },
                copyLink: function() {
                    return v
                },
                deleteMessage: function() {
                    return x
                },
                editMessage: function() {
                    return A
                },
                markMessageUnread: function() {
                    return C
                },
                pinMessage: function() {
                    return T
                },
                publishMessage: function() {
                    return O
                },
                retrySendMessage: function() {
                    return L
                },
                replyToMessage: function() {
                    return D
                },
                createThread: function() {
                    return R
                },
                goToThread: function() {
                    return P
                },
                markMessageAsReminder: function() {
                    return y
                },
                markMessageRemindersAsComplete: function() {
                    return b
                }
            }), n("37983"), n("884691"), n("77078");
            var a = n("828986"),
                s = n("819689"),
                l = n("249561"),
                i = n("550762"),
                r = n("592407");
            n("377114");
            var d = n("931318"),
                u = n("529805"),
                o = n("967241"),
                c = n("271938"),
                f = n("42203"),
                g = n("599110"),
                E = n("404008"),
                m = n("306160"),
                h = n("659500"),
                p = n("613387"),
                M = n("456936"),
                _ = n("409058"),
                N = n("49111");

            function S(e) {
                let t = e.getGuildId();
                null != t && r.default.open(t, N.GuildSettingsSections.OVERVIEW)
            }

            function I(e, t, n) {
                (0, m.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
            }

            function v(e, t) {
                g.default.track(N.AnalyticEvents.MESSAGE_LINK_COPIED, {
                    message_id: t.id,
                    channel: t.channel_id
                }), (0, m.copy)((0, E.getChannelPermalink)(e.guild_id, e.id, t.id))
            }

            function x(e, t, n) {
                t.state === N.MessageStates.SEND_FAILED || n.shiftKey ? s.default.deleteMessage(e.id, t.id, t.state === N.MessageStates.SEND_FAILED) : l.default.confirmDelete(e, t)
            }

            function A(e, t) {
                s.default.startEditMessage(e.id, t.id, t.content)
            }

            function C(e, t) {
                (0, M.default)(e.id, t.id)
            }

            function T(e, t, n) {
                if (!1 === t.pinned) {
                    n.shiftKey ? a.default.pinMessage(e, t.id) : l.default.confirmPin(e, t);
                    return
                }
                n.shiftKey ? a.default.unpinMessage(e, t.id) : l.default.confirmUnpin(e, t)
            }

            function O(e, t) {
                (0, i.default)(e.id, t.id)
            }

            function L(e, t) {
                (0, _.default)(e, t, void 0, p.default.getOptions(t.id))
            }

            function D(e, t, n) {
                let a = e.isPrivate(),
                    s = t.author.id === c.default.getId();
                (0, u.createPendingReply)({
                    channel: e,
                    message: t,
                    shouldMention: !n.shiftKey && !s,
                    showMentionToggle: !a && !s
                }), h.ComponentDispatch.dispatchToLastSubscribed(N.ComponentActions.TEXTAREA_FOCUS)
            }

            function R(e, t) {
                (0, o.openThreadSidebarForCreating)(e, t, "Message")
            }

            function P(e, t) {
                let n = f.default.getChannel(t.id);
                null != n && (0, o.openThreadSidebarForViewing)(n)
            }

            function y(e, t) {
                (0, d.addMessageReminders)(t)
            }

            function b(e, t) {
                (0, d.completeMessageReminders)(t.id)
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("65597"),
                l = n("880731");

            function i(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, i = (0, s.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return i ? (0, a.jsx)(a.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("884691"),
                s = n("65597"),
                l = n("526887"),
                i = n("880731");

            function r() {
                let {
                    createMultipleConfettiAt: e
                } = a.useContext(l.ConfettiCannonContext), t = (0, s.default)([i.default], () => i.default.getState()), n = a.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), r = a.useMemo(() => ({
                    fire: (a, s, l) => {
                        var i, r;
                        let d = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            u = n(d);
                        e(a, s, u, (null !== (i = null == l ? void 0 : l.count) && void 0 !== i ? i : d.confettiCount) * (null !== (r = null == l ? void 0 : l.countMultiplier) && void 0 !== r ? r : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return r
            }
        },
        393027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("803182"),
                s = n("308503"),
                l = n("49111");

            function i(e) {
                let t = (0, a.matchPath)(null != e ? e : "", {
                    path: l.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != t) {
                    let {
                        guildId: e,
                        channelId: n
                    } = t.params;
                    return {
                        guildId: e === l.ME ? null : e,
                        channelId: null != n ? n : null
                    }
                }
                let n = (0, a.matchPath)(null != e ? e : "", {
                    path: l.Routes.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != n ? {
                    guildId: n.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            var r = (0, s.default)(e => ({
                path: null,
                basePath: "/",
                guildId: null,
                channelId: null,
                updatePath(t) {
                    let {
                        guildId: n,
                        channelId: a
                    } = i(t);
                    e({
                        path: t,
                        guildId: n,
                        channelId: a
                    })
                },
                resetPath(t) {
                    let {
                        guildId: n,
                        channelId: a
                    } = i(t);
                    e({
                        path: null,
                        guildId: n,
                        channelId: a,
                        basePath: t
                    })
                }
            }))
        },
        69890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMessageCountText: function() {
                    return r
                },
                formatMessageCountLabel: function() {
                    return u
                }
            });
            var a = n("299039"),
                s = n("648564"),
                l = n("782340");
            let i = e => a.default.compare("992549565104128000", e) > -1,
                r = (e, t) => {
                    if (null == e || e < 0) return "0";
                    {
                        let n = i(t);
                        return (null == t || n) && e >= s.MAX_THREAD_MESSAGE_COUNT_OLD ? "50+" : e >= s.MAX_THREAD_MESSAGE_COUNT ? "100k+" : "".concat(e)
                    }
                },
                d = (e, t, n) => {
                    let a = r(e, n);
                    return "0" === a ? l.default.Messages.SEE_THREAD : t.format({
                        count: a
                    })
                },
                u = (e, t) => d(e, l.default.Messages.THREAD_MESSAGE_COUNT, t)
        },
        508229: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("843762");
            var a = n("917351"),
                s = n.n(a),
                l = n("446674"),
                i = n("913144"),
                r = n("447435"),
                d = n("692038"),
                u = n("915639"),
                o = n("42203"),
                c = n("26989"),
                f = n("305961"),
                g = n("377253"),
                E = n("27618"),
                m = n("697218");
            let h = {};

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = o.default.getChannel(e),
                    l = null != s ? s.getGuildId() : null;
                return {
                    id: e,
                    messages: t.map(e => (0, d.createMessageRecord)(e)),
                    guildId: l,
                    loaded: n,
                    loading: a
                }
            }

            function M(e) {
                let {
                    channel: t
                } = e;
                delete h[t.id]
            }

            function _() {
                s.forEach(h, e => {
                    s.forEach(e.messages, e => {
                        e.timestamp.locale(u.default.locale)
                    })
                })
            }

            function N() {
                s.forEach(h, e => {
                    e.messages = e.messages.map(e => e.set("blocked", E.default.isBlocked(e.author.id)))
                })
            }
            class S extends l.default.Store {
                initialize() {
                    this.waitFor(o.default, f.default, c.default, g.default, m.default, u.default)
                }
                getPinnedMessages(e) {
                    var t;
                    return null !== (t = h[e]) && void 0 !== t ? t : void 0
                }
                loaded(e) {
                    return null != h[e] && h[e].loaded
                }
            }
            S.displayName = "ChannelPinsStore";
            var I = new S(i.default, {
                CONNECTION_OPEN: function() {
                    h = {}
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    h = s(h).filter(e => e.guildId !== t.id).keyBy("id").value()
                },
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.id,
                        n = e.message.channel_id;
                    if (null == n) return !1;
                    let a = h[n];
                    if (null == a && !e.message.pinned) return !1;
                    if (null == e.message.author) {
                        if (null != a) {
                            let l = s.findIndex(a.messages, e => e.id === t);
                            if (l >= 0) {
                                let t = a.messages[l],
                                    s = (0, d.updateMessageRecord)(t, e.message);
                                if (s !== t) {
                                    let e = a.messages.slice();
                                    e[l] = s, h[n].messages = e
                                }
                            }
                        }
                        return
                    }
                    if (e.message.pinned) {
                        if (null == a) {
                            a = p(n, [e.message], !1), h[n] = a;
                            return
                        }
                        a.messages = a.messages.slice();
                        let l = s.findIndex(a.messages, e => e.id === t); - 1 === l ? a.messages.unshift((0, d.createMessageRecord)(e.message)) : a.messages[l] = (0, d.updateMessageRecord)(a.messages[l], e.message), h[n] = a
                    } else {
                        if (null == a) return;
                        let e = s.findIndex(a.messages, e => e.id === t);
                        if (-1 === e) return;
                        a.messages = a.messages.slice(), a.messages.splice(e, 1), h[n] = a
                    }
                },
                MESSAGE_DELETE: function(e) {
                    let {
                        id: t,
                        channelId: n
                    } = e, a = h[n];
                    if (null == a) return !1;
                    let l = s.remove(a.messages, e => e.id === t);
                    if (0 === l.length) return !1;
                    a.messages = a.messages.slice(), h[n] = a
                },
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t,
                        channelId: n
                    } = e, a = h[n];
                    null != a && (a.messages = a.messages.filter(e => -1 === t.indexOf(e.id)))
                },
                LOAD_PINNED_MESSAGES: function(e) {
                    let {
                        channelId: t
                    } = e;
                    h[t] = p(t, [], !1, !0)
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        messages: n
                    } = e;
                    h[t] = p(t, n, !0)
                },
                LOAD_PINNED_MESSAGES_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    delete h[t]
                },
                USER_SETTINGS_PROTO_UPDATE: _,
                I18N_LOAD_SUCCESS: _,
                CHANNEL_DELETE: M,
                THREAD_DELETE: M,
                RELATIONSHIP_ADD: N,
                RELATIONSHIP_REMOVE: N,
                MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
                    let {
                        messageId: t,
                        channelId: n
                    } = e, a = h[n];
                    if (null == a) return;
                    let l = s.findIndex(a.messages, e => e.id === t); - 1 !== l && (a.messages = a.messages.slice(), a.messages[l] = (0, r.handleExplicitMediaScanTimeoutForMessage)(a.messages[l]), h[n] = a)
                }
            })
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return s
                },
                default: function() {
                    return E
                }
            });
            var a, s, l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                d = n("77078"),
                u = n("36694"),
                o = n("381546"),
                c = n("68238"),
                f = n("423487"),
                g = n("557296");
            (a = s || (s = {}))[a.WARNING = 0] = "WARNING", a[a.INFO = 1] = "INFO", a[a.ERROR = 2] = "ERROR", a[a.POSITIVE = 3] = "POSITIVE";
            var E = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: a,
                    textColor: s = "text-normal",
                    textVariant: i = "text-sm/medium"
                } = e, E = function(e) {
                    switch (e) {
                        case 0:
                            return f.default;
                        case 1:
                            return c.default;
                        case 2:
                            return o.default;
                        case 3:
                            return u.default
                    }
                }(n), m = function(e) {
                    switch (e) {
                        case 0:
                            return g.warning;
                        case 1:
                            return g.info;
                        case 2:
                            return g.error;
                        case 3:
                            return g.positive
                    }
                }(n);
                return (0, l.jsxs)("div", {
                    className: r(g.container, m, a),
                    children: [(0, l.jsx)("div", {
                        className: g.iconDiv,
                        children: (0, l.jsx)(E, {
                            className: g.icon
                        })
                    }), (0, l.jsx)(d.Text, {
                        className: g.text,
                        color: s,
                        variant: i,
                        children: t
                    })]
                })
            }
        },
        822332: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("77078"),
                d = n("782340"),
                u = n("440318");
            let o = {
                BLOCK: u.block,
                INLINE: u.inline
            };
            class c extends s.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: s = o.BLOCK,
                        style: l
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        className: i(t, s),
                        style: l,
                        children: [(0, a.jsxs)(r.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: u.pro,
                            children: [d.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, a.jsx)(r.Text, {
                            className: i(u.tip, n),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            c.Types = o;
            var f = c
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("926001"),
                i = n("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fill: s,
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
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("469563"),
                l = n("578478"),
                i = n("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: s
                        })
                    })
                }, l.ImageIcon, void 0, {
                    size: 24
                })
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return u
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return f
                },
                getMobileDownloadLink: function() {
                    return g
                }
            });
            var a = n("597755"),
                s = n.n(a),
                l = n("815157"),
                i = n("271938"),
                r = n("49111");
            let d = "linux";

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(r.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function o() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = s.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? d : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [d]: "Linux"
                })[o(e)]
            }

            function f() {
                let e = o();
                return u(e, !1, e === d ? "tar.gz" : null)
            }

            function g(e, t, n) {
                let a = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != a ? a : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: i.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != a ? a : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: i.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != a ? a : "https://www.discord.com"
                }
            }
        },
        870190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canReportMessage: function() {
                    return d
                },
                canDeleteAndReportMessage: function() {
                    return u
                }
            });
            var a = n("42203"),
                s = n("525065"),
                l = n("957255"),
                i = n("697218"),
                r = n("49111");

            function d(e) {
                return null != e && function(e) {
                    if (null == e) return !1;
                    let t = e.id,
                        n = i.default.getCurrentUser();
                    return null != n && n.id !== t && !0 !== e.system && !0
                }(e.author)
            }

            function u(e) {
                return null != e && d(e) && function(e) {
                    let t = a.default.getChannel(e);
                    if (null == t) return !1;
                    if (t.type === r.ChannelTypes.DM || t.type === r.ChannelTypes.GROUP_DM) return !0;
                    if (l.default.canWithPartialContext(r.Permissions.MANAGE_MESSAGES, {
                            channelId: e
                        })) {
                        let e = s.default.getMemberCount(t.getGuildId());
                        return null != e && e >= 50
                    }
                    return !1
                }(e.getChannelId())
            }
        }
    }
]);