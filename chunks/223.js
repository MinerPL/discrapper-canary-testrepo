n.d(t, {
    Z: function () {
        return Q;
    }
});
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(913527), o = n.n(r), c = n(91192), d = n(722770), u = n(442837), _ = n(481060), E = n(607070), m = n(313889), I = n(825829), T = n(226192), h = n(36459), N = n(336197), f = n(937889), p = n(739566), C = n(507418), g = n(348238), S = n(38267), A = n(103575), x = n(496675), O = n(594174), R = n(467679), M = n(622116), v = n(289565), L = n(778947), Z = n(702346), P = n(5192), b = n(51144), D = n(787374), j = n(981631), U = n(674563), y = n(590433), B = n(959517), k = n(689938), G = n(121802);
function F(e, t) {
    let {
            popouts: n,
            selected: i,
            setPopout: s
        } = (0, S.Z)(e.id, B.d$), {
            usernameProfile: l,
            avatarProfile: r
        } = n, o = (0, g.wq)(e.author.id, t.id), c = (0, g.RN)(e.author.id, t.id, e.id), d = (0, g.XO)(e, t, l, s), u = (0, g.R9)(r, s);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: d,
        onClickAvatar: u,
        onPopoutRequestClose: a.useCallback(() => s({
            usernameProfile: !1,
            avatarProfile: !1,
            referencedUsernameProfile: !1
        }), [s]),
        renderPopout: C.Z,
        showAvatarPopout: r,
        showUsernamePopout: l
    };
}
function w(e, t) {
    return a.useMemo(() => {
        if (null != t)
            return n => (0, i.jsx)(A.Z, {
                ...n,
                location: 'AutomodFlagToChannel',
                userId: t.id,
                user: t,
                channelId: e.id,
                guildId: e.guild_id
            });
    }, [
        e,
        t
    ]);
}
function V(e) {
    let {
        children: t,
        className: n,
        compact: a
    } = e;
    return (0, i.jsx)('div', {
        className: l()(G.footerContainer, n, { [G.compact]: a }),
        children: t
    });
}
function H(e) {
    let {
        children: t,
        className: n
    } = e;
    return (0, i.jsx)('div', {
        className: l()(G.annotationRow, n),
        children: t
    });
}
function Y(e, t) {
    switch (e) {
    case m.d.DELETE_USER_MESSAGE:
        return (0, i.jsx)(_.TrashIcon, {
            size: 'xs',
            color: 'currentColor',
            className: G.alertActionIcon,
            ...t
        });
    case m.d.SET_COMPLETED:
        return (0, i.jsx)(_.CheckmarkLargeIcon, {
            size: 'xs',
            color: 'currentColor',
            className: l()(G.alertActionIcon, G.alertActionSetCompletedIcon),
            ...t
        });
    case m.d.SUBMIT_FEEDBACK:
        return (0, i.jsx)(_.FlagIcon, {
            size: 'xs',
            color: 'currentColor',
            className: l()(G.alertActionIcon),
            ...t
        });
    default:
        return null;
    }
}
function W(e) {
    let {
            alertAction: t,
            guildId: n
        } = e, a = (0, u.e7)([O.default], () => O.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == a)
            return Y(e, {});
        let s = function (e, t, n) {
            var i;
            let a = null !== (i = P.ZP.getNickname(n, null, t)) && void 0 !== i ? i : b.ZP.getUserTag(t), s = o()(e.ts), l = ''.concat(a, ' ').concat(s.fromNow());
            try {
                switch (parseInt(e.actionType)) {
                case m.d.DELETE_USER_MESSAGE:
                    return k.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
                        userName: a,
                        timestamp: s.fromNow()
                    });
                case m.d.SET_COMPLETED:
                    return k.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
                        userName: a,
                        timestamp: s.fromNow()
                    });
                case m.d.SUBMIT_FEEDBACK:
                    return k.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
                        userName: a,
                        timestamp: s.fromNow()
                    });
                default:
                    return l;
                }
            } catch (e) {
                return l;
            }
        }(t, a, n);
        return (0, i.jsx)(_.Tooltip, {
            text: s,
            children: t => Y(e, t)
        });
    } catch (e) {
        return null;
    }
}
function z(e) {
    let {
            alertActionsExecution: t,
            guildId: n
        } = e, a = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : -1);
    return (0, i.jsx)('div', {
        className: G.alertActionsIconContainer,
        children: a.map(e => (0, i.jsx)(W, {
            alertAction: e,
            guildId: n
        }, e.actionType))
    });
}
let K = a.memo(function (e) {
    let t, {
            message: n,
            channel: a,
            embedChannel: s,
            compact: l,
            interactionUserId: r
        } = e, o = F(n, a), c = w(a, n.author), d = (0, p.ZP)(n), u = (0, L.CF)({
            message: n,
            channel: a,
            author: d,
            guildId: null == a ? void 0 : a.guild_id,
            compact: l,
            ...o
        }, c), E = O.default.getUser(r), m = F(n, a), T = w(a, E);
    if (null != E) {
        let e = (0, p.ij)(E, a), i = (0, L.CF)({
                message: n,
                channel: a,
                author: e,
                guildId: null == a ? void 0 : a.guild_id,
                compact: l,
                ...m
            }, T);
        t = () => i;
    }
    return (0, i.jsx)(_.Text, {
        variant: 'text-md/normal',
        color: 'header-primary',
        tag: 'span',
        className: G.spanCorrection,
        children: (0, I.Mq)(n, s, () => (0, i.jsx)('div', {
            className: G.channelNameContainer,
            children: (0, i.jsx)(M.Z, {
                channel: s,
                className: G.channelName,
                openChatWithoutConnecting: !0
            })
        }), () => u, t)
    });
});
function Q(e) {
    let {
            id: t,
            compact: n,
            message: s,
            channel: r
        } = e, {
            avatarSrc: o,
            eventHandlers: {
                onMouseEnter: p,
                onMouseLeave: C
            }
        } = (0, D.m)(!0), {
            onFocus: S,
            ...A
        } = (0, c.JA)(null != t ? t : ''), {
            isFocused: O,
            handleFocus: M,
            handleBlur: P
        } = (0, g.bb)(S), b = (0, u.e7)([E.Z], () => E.Z.keyboardModeEnabled), B = (0, u.e7)([x.Z], () => x.Z.can(j.Plq.MANAGE_MESSAGES, r), [r]), {
            ruleName: w,
            embedChannel: Y,
            decisionId: W,
            keywordMatchedContent: Q,
            keyword: q,
            content: X,
            flaggedMessageId: J,
            timeoutDuration: $,
            decisionReason: ee,
            alertActionsExecution: et,
            quarantineType: en,
            interactionUserId: ei
        } = (0, I.ZP)(s), ea = a.useMemo(() => (0, f.k$)(X, Q, r.id), [
            X,
            Q,
            r
        ]), {
            selected: es,
            ...el
        } = F(s, r), er = a.useCallback(() => {
            (0, T._s)(s.id, X, W, r);
        }, [
            s.id,
            X,
            W,
            r
        ]), eo = a.useCallback(e => {
            if (null != J && null != Y)
                e.stopPropagation(), e.preventDefault(), (0, N.Z)(j.Z5c.CHANNEL(null == Y ? void 0 : Y.guild_id, null == Y ? void 0 : Y.id, J));
        }, [
            Y,
            J
        ]), ec = a.useCallback(() => {
            (0, h.Xx)(s.id, r, m.d.DELETE_USER_MESSAGE);
        }, [
            r,
            s.id
        ]), ed = (0, y.L9)(Number($)), eu = null != ee, e_ = B && null != J && (null == et || !et.actions.hasOwnProperty(m.d.DELETE_USER_MESSAGE));
    return (0, i.jsx)('div', {
        onMouseEnter: p,
        onMouseLeave: C,
        children: (0, i.jsx)(Z.Z, {
            className: l()(G.mainContainer, { [G.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(D.S, { src: o }),
            iconContainerClassName: G.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: l()(G.content, { [G.compact]: n }),
                children: [
                    (0, i.jsx)(L.nD, {
                        message: s,
                        messageClassname: G.spanCorrection,
                        className: l()(G.usernameContainer, G.spanCorrection, { [G.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: G.spanCorrection,
                            children: [
                                (0, i.jsx)(_.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: G.username,
                                    children: k.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(R.Z, {
                                    type: U.Hb.SYSTEM_DM,
                                    className: G.systemTag
                                }),
                                (0, i.jsx)(K, {
                                    message: s,
                                    channel: r,
                                    embedChannel: Y,
                                    compact: n,
                                    interactionUserId: ei
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: l()(G.messageContent, { [G.compact]: n }),
                        children: (0, i.jsx)(v.Z, {
                            ...A,
                            message: s,
                            channel: Y,
                            content: ea,
                            compact: n,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: l()(G.embedCard, {
                                [G.compact]: n,
                                [G.selected]: es || b && O,
                                [G.isClickable]: null != J && null != Y
                            }),
                            childrenAccessories: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: G.centeredRowContainer,
                                        children: [
                                            null != q && (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(_.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'text-muted',
                                                        tag: 'span',
                                                        children: k.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({ keyword: q })
                                                    }),
                                                    (0, i.jsx)('div', { className: l()(G.dot, G.dotMargin) })
                                                ]
                                            }),
                                            null != w && (0, i.jsx)(_.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'text-muted',
                                                tag: 'span',
                                                children: k.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({ ruleName: w })
                                            }),
                                            null != ed && (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)('div', { className: l()(G.dot, G.dotMargin) }),
                                                    (0, i.jsx)(_.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'text-muted',
                                                        tag: 'span',
                                                        className: G.__invalid_footerText,
                                                        children: k.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({ duration: ed })
                                                    })
                                                ]
                                            }),
                                            null != en && (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)('div', { className: l()(G.dot, G.dotMargin) }),
                                                    (0, i.jsx)(_.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'text-muted',
                                                        tag: 'span',
                                                        className: G.titleCase,
                                                        children: k.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({ reason: (0, I.hU)(en) })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    eu ? (0, i.jsx)(H, {
                                        children: (0, i.jsx)(_.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-normal',
                                            tag: 'span',
                                            children: ee
                                        })
                                    }) : null
                                ]
                            }),
                            popoutProps: el,
                            zalgo: !0,
                            onFocus: M,
                            onBlur: P,
                            onClick: eo
                        })
                    }),
                    (0, i.jsx)(V, {
                        compact: n,
                        children: (0, i.jsxs)('div', {
                            className: l()(G.centeredRowContainer, G.buttonContainer, { [G.compact]: n }),
                            children: [
                                (0, i.jsx)(_.Button, {
                                    onClick: e => {
                                        var t;
                                        null === (t = el.onContextMenuModerateUser) || void 0 === t || t.call(el, e);
                                    },
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: G.buttonStyle,
                                    children: (0, i.jsxs)('div', {
                                        className: G.footerAction,
                                        children: [
                                            (0, i.jsx)(_.ShieldIcon, {
                                                size: 'xs',
                                                color: d.Z.BLUE_345,
                                                className: G.footerIcon
                                            }),
                                            (0, i.jsx)(_.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-link',
                                                children: k.Z.Messages.ACTIONS
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)('div', { className: G.dot }),
                                (0, i.jsx)(_.Button, {
                                    onClick: er,
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: G.buttonStyle,
                                    children: (0, i.jsx)('div', {
                                        className: G.footerAction,
                                        children: (0, i.jsx)(_.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: k.Z.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                                        })
                                    })
                                }),
                                e_ ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('div', { className: G.dot }),
                                        (0, i.jsx)(_.Button, {
                                            onClick: ec,
                                            color: _.Button.Colors.LINK,
                                            look: _.Button.Looks.LINK,
                                            size: _.Button.Sizes.SMALL,
                                            className: G.buttonStyle,
                                            children: (0, i.jsx)('div', {
                                                className: G.footerAction,
                                                children: (0, i.jsx)(_.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-link',
                                                    children: k.Z.Messages.GUILD_AUTOMOD_ALERT_DELETE_MEMBERS_MESSAGE
                                                })
                                            })
                                        })
                                    ]
                                }) : null,
                                null != et ? (0, i.jsx)(z, {
                                    alertActionsExecution: et,
                                    guildId: r.guild_id
                                }) : null
                            ]
                        })
                    })
                ]
            })
        })
    });
}
