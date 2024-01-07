(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70492"], {
        352674: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("913144"),
                u = {
                    startTyping(e) {
                        n.default.dispatch({
                            type: "TYPING_START_LOCAL",
                            channelId: e
                        })
                    },
                    stopTyping(e) {
                        n.default.dispatch({
                            type: "TYPING_STOP_LOCAL",
                            channelId: e
                        })
                    }
                }
        },
        535348: function(e, t, a) {
            "use strict";
            var n, u;
            a.r(t), a.d(t, {
                SelfStreamAndVideoAlertType: function() {
                    return n
                }
            }), (u = n || (n = {}))[u.STREAM = 0] = "STREAM", u[u.VIDEO = 1] = "VIDEO"
        },
        301603: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("446674"),
                u = a("629109"),
                r = a("271938"),
                d = a("42887"),
                l = a("49111"),
                s = a("353927");

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MediaEngineContextTypes.DEFAULT,
                    a = (0, n.useStateFromStores)([r.default], () => r.default.getId()),
                    i = (0, n.useStateFromStores)([d.default], () => d.default.supports(s.Features.DISABLE_VIDEO) && d.default.isVideoEnabled()),
                    o = (0, n.useStateFromStores)([d.default], () => d.default.isLocalVideoDisabled(a, t), [a, t]),
                    f = null == e || e === a;
                return [f && (i || o), o, e => {
                    let n = e ? l.VideoToggleState.DISABLED : l.VideoToggleState.MANUAL_ENABLED;
                    u.default.setDisableLocalVideo(a, n, t)
                }]
            }
        },
        632616: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var u = a("452804"),
                r = a("135230"),
                d = a("535348"),
                l = a("782340");

            function s(e) {
                let {
                    type: t,
                    onConfirm: a,
                    ...s
                } = e, i = t === d.SelfStreamAndVideoAlertType.STREAM ? l.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : l.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, o = t === d.SelfStreamAndVideoAlertType.STREAM ? l.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : l.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
                return (0, n.jsx)(r.default, {
                    confirmText: l.default.Messages.CONFIRM,
                    secondaryConfirmText: l.default.Messages.DONT_ASK_AGAIN,
                    title: i,
                    cancelText: l.default.Messages.CANCEL,
                    onConfirm: a,
                    onConfirmSecondary: () => {
                        u.default.updatedUnsyncedSettings({
                            disableHideSelfStreamAndVideoConfirmationAlert: !0
                        }), a()
                    },
                    body: o,
                    ...s
                })
            }
        },
        243288: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var u = a("446674"),
                r = a("77078"),
                d = a("255397"),
                l = a("191145"),
                s = a("782340");

            function i(e) {
                let t = (0, u.useStateFromStores)([l.default], () => l.default.getVoiceParticipantsHidden(e));
                return (0, n.jsx)(r.MenuCheckboxItem, {
                    id: "no-video-hide",
                    label: s.default.Messages.STREAM_SHOW_NON_VIDEO,
                    checked: !t,
                    action: () => d.default.toggleVoiceParticipantsHidden(e, !t)
                })
            }
        },
        321135: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            }), a("222007");
            var n = a("37983");
            a("884691");
            var u = a("446674"),
                r = a("77078"),
                d = a("168973"),
                l = a("301603"),
                s = a("632616"),
                i = a("535348"),
                o = a("353927"),
                f = a("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
                    [a, c, m] = (0, l.default)(e, t),
                    M = (0, u.useStateFromStores)([d.default], () => d.default.disableHideSelfStreamAndVideoConfirmationAlert);
                return a ? (0, n.jsx)(r.MenuCheckboxItem, {
                    id: "self-video-hide",
                    label: f.default.Messages.SHOW_SELF_VIDEO,
                    checked: !c,
                    action: () => {
                        if (M || c) return m(!c);
                        (0, r.openModal)(e => (0, n.jsx)(s.default, {
                            ...e,
                            type: i.SelfStreamAndVideoAlertType.VIDEO,
                            onConfirm: () => m(!c)
                        }))
                    }
                }) : null
            }
        },
        873254: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var u = a("446674"),
                r = a("77078"),
                d = a("648911"),
                l = a("271938"),
                s = a("42887"),
                i = a("782340"),
                o = a("431024");

            function f(e) {
                let t = (0, r.useModalContext)(),
                    f = (0, u.useStateFromStores)([s.default], () => s.default.isVideoEnabled()),
                    c = (0, u.useStateFromStores)([l.default], () => l.default.getId() === e),
                    m = (0, d.default)();
                return (!f || m) && c ? (0, n.jsx)(r.MenuItem, {
                    id: "change-video-background",
                    label: (0, n.jsx)("div", {
                        className: o.item,
                        children: f ? i.default.Messages.CAMERA_CHANGE_VIDEO_BACKGROUND_MENU_ITEM : i.default.Messages.CAMERA_PREVIEW_MENU_ITEM
                    }),
                    action: function() {
                        (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("381736").then(a.bind(a, "381736"));
                            return t => (0, n.jsx)(e, {
                                ...t,
                                videoEnabled: f
                            })
                        }, {
                            modalKey: "camera-preview",
                            contextKey: t
                        })
                    }
                }) : null
            }
        },
        292687: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n.default
                }
            });
            var n = a("870346")
        },
        812809: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("845579"),
                u = a("42887"),
                r = a("829536");

            function d(e) {
                let t = function() {
                        var e;
                        let t = n.SoundboardSettings.getSetting();
                        return (0, r.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
                    }(),
                    a = Math.min(u.default.getOutputVolume() / 100, 1);
                return Math.min(e * t * a, 1)
            }
        },
        166452: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return b
                }
            });
            var n = a("37983");
            a("884691");
            var u = a("77078"),
                r = a("272030"),
                d = a("838446"),
                l = a("158534"),
                s = a("846883"),
                i = a("812204"),
                o = a("243288"),
                f = a("321135"),
                c = a("873254"),
                m = a("861370"),
                M = a("726750"),
                S = a("170990"),
                E = a("304582"),
                g = a("72057"),
                p = a("489836"),
                h = a("406703"),
                v = a("343856"),
                _ = a("502533"),
                A = a("314838"),
                I = a("383161"),
                x = a("421602"),
                T = a("432487"),
                C = a("151200"),
                O = a("692986"),
                N = a("806179"),
                R = a("816106"),
                j = a("623879"),
                D = a("49111"),
                F = a("782340"),
                b = (0, l.default)((0, d.default)(function(e) {
                    var t;
                    let {
                        user: a,
                        channel: d,
                        context: l,
                        showChatItems: i = !0,
                        showMediaItems: D = !1,
                        showChannelCallItems: b = !1,
                        showModalItems: U = !0,
                        onSelect: y
                    } = e, L = (0, N.default)(a.id, null), V = (0, I.default)(a, null, l), P = (0, C.default)(a.id, d.id), G = (0, x.default)(a.id, l), w = (0, h.default)(a, l), H = (0, g.default)({
                        user: a,
                        context: l
                    }), k = (0, E.default)(a), B = (0, R.default)(a.id), z = (0, T.default)(a.id, d.id), W = (0, O.default)(a.id), Y = (0, _.default)(a.id, d.id), K = (0, A.default)(a), X = (0, s.default)(null, a), Z = (0, S.default)(a), q = (0, p.default)(a), J = (0, m.default)({
                        id: a.id,
                        label: F.default.Messages.COPY_ID_USER
                    }), Q = (0, j.default)(a.id), $ = (0, f.default)(a.id), ee = (0, o.default)(d.id), et = (0, M.default)(a), ea = (0, c.default)(a.id), en = (0, v.default)(a, d), eu = a.isNonUserBot(), er = d.isManaged(), ed = null === (t = d.recipients) || void 0 === t ? void 0 : t.includes(a.id);
                    return (0, n.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: r.closeContextMenu,
                        "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: y,
                        children: [!eu && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(u.MenuGroup, {
                                children: et
                            }), (0, n.jsxs)(u.MenuGroup, {
                                children: [U && L, i && V, G, w, !er && P, U && H, U && k, Q]
                            }), D && (0, n.jsx)(u.MenuGroup, {
                                children: B
                            }), ed && (0, n.jsxs)(u.MenuGroup, {
                                children: [!er && z, en]
                            }), (0, n.jsx)(u.MenuGroup, {
                                children: U && X
                            }), (0, n.jsxs)(u.MenuGroup, {
                                children: [D && W, D && Y, U && K, Z, U && q, D && ea]
                            }), b && (0, n.jsxs)(u.MenuGroup, {
                                children: [ee, $]
                            })]
                        }), (0, n.jsx)(u.MenuGroup, {
                            children: J
                        })]
                    })
                }, {
                    object: D.AnalyticsObjects.CONTEXT_MENU
                }), [i.default.CONTEXT_MENU, i.default.GROUP_DM_USER_MENU])
        },
        343856: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return M
                }
            });
            var n = a("37983");
            a("884691");
            var u = a("446674"),
                r = a("669491"),
                d = a("77078"),
                l = a("450911"),
                s = a("145079"),
                i = a("87657"),
                o = a("697218"),
                f = a("782340"),
                c = a("839938");

            function m(e) {
                let {
                    color: t,
                    className: a
                } = e;
                return (0, n.jsx)("svg", {
                    className: a,
                    height: "16",
                    width: "80",
                    viewBox: "0 0 80 16",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        opacity: ".6",
                        children: [(0, n.jsx)("path", {
                            d: "m0 0h80v16h-80z"
                        }), (0, n.jsxs)("g", {
                            stroke: t,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            children: [(0, n.jsx)("path", {
                                d: "m71 1h4v4.16"
                            }), (0, n.jsx)("path", {
                                d: "m2 1h4v4.16",
                                transform: "matrix(-1 0 0 1 8 0)"
                            }), (0, n.jsx)("path", {
                                d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4"
                            }), (0, n.jsx)("path", {
                                d: "m72.13 10.474 2.869 3.12 2.631-3.12"
                            })]
                        })]
                    })
                })
            }

            function M(e, t) {
                let a = (0, u.useStateFromStores)([o.default], () => o.default.getCurrentUser());
                return null == a || t.ownerId !== a.id || e.id === a.id || (null == t ? void 0 : t.isBroadcastChannel()) ? null : (0, n.jsx)(d.MenuItem, {
                    id: "make-dm-owner",
                    color: "danger",
                    label: f.default.Messages.CHANGE_DM_OWNER,
                    action: () => {
                        var u;
                        return u = a, void(0, d.openModal)(a => (0, n.jsxs)(d.ConfirmModal, {
                            bodyClassName: c.confirmModal,
                            header: f.default.Messages.TRANSFER_GROUP_OWNERSHIP,
                            confirmText: f.default.Messages.CONFIRM,
                            cancelText: f.default.Messages.CANCEL,
                            onConfirm: () => l.default.setDMOwner(t.id, e.id),
                            ...a,
                            children: [(0, n.jsx)(m, {
                                color: r.default.unsafe_rawColors.PRIMARY_300.css
                            }), (0, n.jsxs)("div", {
                                className: c.fromToWrapper,
                                children: [(0, n.jsx)("div", {
                                    className: c.from,
                                    children: (0, n.jsx)(i.default, {
                                        user: u,
                                        size: d.AvatarSizes.SIZE_80
                                    })
                                }), (0, n.jsx)("div", {
                                    className: c.to,
                                    children: (0, n.jsx)(i.default, {
                                        user: e,
                                        size: d.AvatarSizes.SIZE_80
                                    })
                                })]
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: f.default.Messages.CONFIRM_CHANGE_DM_OWNER.format({
                                    usernameHook: (t, a) => (0, n.jsx)(s.default, {
                                        usernameIcon: (0, n.jsx)(d.Avatar, {
                                            className: c.avatarIcon,
                                            src: e.getAvatarURL(void 0, 16),
                                            size: d.AvatarSizes.SIZE_16,
                                            "aria-hidden": !0
                                        }),
                                        className: c.discordTag,
                                        usernameClass: c.username,
                                        discriminatorClass: c.discriminator,
                                        user: e
                                    }, a)
                                })
                            })]
                        }))
                    }
                })
            }
        },
        383161: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                mentionUser: function() {
                    return M
                },
                default: function() {
                    return S
                }
            }), a("222007");
            var n = a("37983");
            a("884691");
            var u = a("446674"),
                r = a("77078"),
                d = a("352674"),
                l = a("42203"),
                s = a("957255"),
                i = a("18494"),
                o = a("659500"),
                f = a("158998"),
                c = a("49111"),
                m = a("782340");

            function M(e, t) {
                let {
                    id: a
                } = e, n = "@".concat(f.default.getUserTag(e, {
                    decoration: "never"
                }));
                o.ComponentDispatch.dispatchToLastSubscribed(c.ComponentActions.INSERT_TEXT, {
                    plainText: n,
                    rawText: "<@".concat(a, ">")
                }), null != t && d.default.startTyping(t)
            }

            function S(e, t, a) {
                let [d, o] = (0, u.useStateFromStoresArray)([i.default, l.default, s.default], () => {
                    let e = i.default.getChannelId(t),
                        a = l.default.getChannel(e),
                        n = null != a && (a.isMultiUserDM() || s.default.can(c.Permissions.SEND_MESSAGES, a));
                    return [e, n]
                }, [t]), f = a === c.AppContext.POPOUT;
                return !o || f ? null : (0, n.jsx)(r.MenuItem, {
                    id: "mention",
                    label: m.default.Messages.MENTION,
                    action: function() {
                        M(e, d)
                    }
                })
            }
        },
        421602: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("37983");
            a("884691");
            var u = a("77078"),
                r = a("450911"),
                d = a("54239"),
                l = a("271938"),
                s = a("49111"),
                i = a("782340");

            function o(e, t) {
                let a = l.default.getId(),
                    o = t === s.AppContext.POPOUT;
                return a === e || o ? null : (0, n.jsx)(u.MenuItem, {
                    id: "message-user",
                    label: i.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        r.default.openPrivateChannel(e), (0, d.popLayer)()
                    }
                })
            }
        },
        432487: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("37983");
            a("884691");
            var u = a("446674"),
                r = a("77078"),
                d = a("450911"),
                l = a("42203"),
                s = a("697218"),
                i = a("782340");

            function o(e, t) {
                let a = (0, u.useStateFromStores)([s.default], () => s.default.getCurrentUser(), []),
                    o = (0, u.useStateFromStores)([l.default], () => l.default.getChannel(t), [t]);
                return null == o || o.isOwner(e) || null == a || !o.isOwner(a.id) ? null : (0, n.jsx)(r.MenuItem, {
                    id: "remove",
                    label: i.default.Messages.REMOVE_FROM_GROUP,
                    action: () => d.default.removeRecipient(t, e),
                    color: "danger"
                })
            }
        },
        151200: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            }), a("222007");
            var n = a("37983");
            a("884691");
            var u = a("446674"),
                r = a("77078"),
                d = a("561288"),
                l = a("191145"),
                s = a("271938"),
                i = a("99795"),
                o = a("782340");

            function f(e, t) {
                let a = (0, u.useStateFromStores)([s.default], () => s.default.getId() === e, [e]),
                    [f, c] = (0, u.useStateFromStoresArray)([l.default], () => [l.default.getParticipants(t), l.default.getParticipant(t, e)], [t, e]);
                return a || 0 === f.length ? null : null == c ? (0, n.jsx)(r.MenuItem, {
                    id: "ring",
                    label: o.default.Messages.RING,
                    action: () => d.default.ring(t, [e])
                }) : c.type === i.ParticipantTypes.USER && c.ringing ? (0, n.jsx)(r.MenuItem, {
                    id: "stop-ringing",
                    label: o.default.Messages.STOP_RINGING,
                    action: () => d.default.stopRinging(t, [e])
                }) : null
            }
        },
        648911: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("446674"),
                u = a("42887"),
                r = a("512244");

            function d() {
                return (0, n.useStateFromStores)([u.default], () => (0, r.default)(u.default))
            }
        }
    }
]);