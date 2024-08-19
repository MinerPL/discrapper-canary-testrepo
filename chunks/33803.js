n.d(t, {
    Z: function () {
        return q;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(913527),
    o = n.n(l),
    c = n(91192),
    u = n(722770),
    d = n(442837),
    _ = n(481060),
    E = n(287734),
    I = n(607070),
    m = n(385499),
    T = n(313889),
    h = n(825829),
    N = n(226192),
    f = n(36459),
    C = n(336197),
    p = n(103575),
    g = n(496675),
    S = n(594174),
    A = n(5192),
    R = n(51144),
    x = n(937889),
    O = n(739566),
    M = n(779125),
    v = n(890410),
    L = n(464891),
    Z = n(507418),
    P = n(348238),
    b = n(38267),
    D = n(83561),
    j = n(834129),
    U = n(959517),
    y = n(981631),
    B = n(674563),
    k = n(590433),
    G = n(689938),
    F = n(735612);
function w(e, t) {
    let { popouts: n, selected: i, setPopout: s } = (0, b.Z)(e.id, U.d$),
        { usernameProfile: r, avatarProfile: l } = n,
        o = (0, P.wq)(e.author.id, t.id),
        c = (0, P.RN)(e.author.id, t.id, e.id),
        u = (0, P.XO)(e, t, r, s),
        d = (0, P.R9)(l, s);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: d,
        onPopoutRequestClose: a.useCallback(
            () =>
                s({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                }),
            [s]
        ),
        renderPopout: Z.Z,
        showAvatarPopout: l,
        showUsernamePopout: r
    };
}
function V(e, t) {
    return a.useMemo(() => {
        if (null != t)
            return (n) =>
                (0, i.jsx)(p.Z, {
                    ...n,
                    location: 'AutomodFlagToChannel',
                    userId: t.id,
                    user: t,
                    channelId: e.id,
                    guildId: e.guild_id
                });
    }, [e, t]);
}
function H(e) {
    let { children: t, className: n, compact: a } = e;
    return (0, i.jsx)('div', {
        className: r()(F.footerContainer, n, { [F.compact]: a }),
        children: t
    });
}
function Y(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)('div', {
        className: r()(F.annotationRow, n),
        children: t
    });
}
function W(e, t) {
    switch (e) {
        case T.d.DELETE_USER_MESSAGE:
            return (0, i.jsx)(_.TrashIcon, {
                size: 'xs',
                color: 'currentColor',
                className: F.alertActionIcon,
                ...t
            });
        case T.d.SET_COMPLETED:
            return (0, i.jsx)(_.CheckmarkLargeIcon, {
                size: 'xs',
                color: 'currentColor',
                className: r()(F.alertActionIcon, F.alertActionSetCompletedIcon),
                ...t
            });
        case T.d.SUBMIT_FEEDBACK:
            return (0, i.jsx)(_.FlagIcon, {
                size: 'xs',
                color: 'currentColor',
                className: r()(F.alertActionIcon),
                ...t
            });
        default:
            return null;
    }
}
function K(e) {
    let { alertAction: t, guildId: n } = e,
        a = (0, d.e7)([S.default], () => S.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == a) return W(e, {});
        let s = (function (e, t, n) {
            var i;
            let a = null !== (i = A.ZP.getNickname(n, null, t)) && void 0 !== i ? i : R.ZP.getUserTag(t),
                s = o()(e.ts),
                r = ''.concat(a, ' ').concat(s.fromNow());
            try {
                switch (parseInt(e.actionType)) {
                    case T.d.DELETE_USER_MESSAGE:
                        return G.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
                            userName: a,
                            timestamp: s.fromNow()
                        });
                    case T.d.SET_COMPLETED:
                        return G.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
                            userName: a,
                            timestamp: s.fromNow()
                        });
                    case T.d.SUBMIT_FEEDBACK:
                        return G.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
                            userName: a,
                            timestamp: s.fromNow()
                        });
                    default:
                        return r;
                }
            } catch (e) {
                return r;
            }
        })(t, a, n);
        return (0, i.jsx)(_.Tooltip, {
            text: s,
            children: (t) => W(e, t)
        });
    } catch (e) {
        return null;
    }
}
function z(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        a = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, i.jsx)('div', {
        className: F.alertActionsIconContainer,
        children: a.map((e) =>
            (0, i.jsx)(
                K,
                {
                    alertAction: e,
                    guildId: n
                },
                e.actionType
            )
        )
    });
}
let Q = a.memo(function (e) {
    let t,
        { message: n, channel: a, embedChannel: s, compact: r, interactionUserId: l } = e,
        o = w(n, a),
        c = V(a, n.author),
        u = (0, O.ZP)(n),
        d = (0, L.CF)(
            {
                message: n,
                channel: a,
                author: u,
                guildId: null == a ? void 0 : a.guild_id,
                compact: r,
                ...o
            },
            c
        ),
        E = S.default.getUser(l),
        I = w(n, a),
        m = V(a, E);
    if (null != E) {
        let e = (0, O.ij)(E, a),
            i = (0, L.CF)(
                {
                    message: n,
                    channel: a,
                    author: e,
                    guildId: null == a ? void 0 : a.guild_id,
                    compact: r,
                    ...I
                },
                m
            );
        t = () => i;
    }
    return (0, i.jsx)(_.Text, {
        variant: 'text-md/normal',
        color: 'header-primary',
        tag: 'span',
        className: F.spanCorrection,
        children: (0, h.Mq)(
            n,
            s,
            () =>
                (0, i.jsx)('div', {
                    className: F.channelNameContainer,
                    children: (0, i.jsx)(M.Z, {
                        channel: s,
                        className: F.channelName,
                        openChatWithoutConnecting: !0
                    })
                }),
            () => d,
            t
        )
    });
});
function q(e) {
    let { id: t, compact: n, message: s, channel: l } = e,
        {
            avatarSrc: o,
            eventHandlers: { onMouseEnter: p, onMouseLeave: S }
        } = (0, D.m)(!0),
        { onFocus: A, ...R } = (0, c.JA)(null != t ? t : ''),
        { isFocused: O, handleFocus: M, handleBlur: Z } = (0, P.bb)(A),
        b = (0, d.e7)([I.Z], () => I.Z.keyboardModeEnabled),
        U = (0, d.e7)([g.Z], () => g.Z.can(y.Plq.MANAGE_MESSAGES, l), [l]),
        { ruleName: V, embedChannel: W, decisionId: K, keywordMatchedContent: q, keyword: X, content: J, flaggedMessageId: $, timeoutDuration: ee, decisionReason: et, alertActionsExecution: en, quarantineType: ei, interactionUserId: ea } = (0, h.ZP)(s),
        es = a.useMemo(() => (0, x.k$)(J, q, l.id), [J, q, l]),
        { selected: er, ...el } = w(s, l),
        eo = a.useCallback(() => {
            (0, N._s)(s.id, J, K, l);
        }, [s.id, J, K, l]),
        ec = a.useCallback(
            (e) => {
                if (null != $ && null != W) e.stopPropagation(), e.preventDefault(), (0, C.Z)(y.Z5c.CHANNEL(null == W ? void 0 : W.guild_id, null == W ? void 0 : W.id, $));
            },
            [W, $]
        ),
        eu = a.useCallback(() => {
            null != W &&
                E.default.selectChannel({
                    guildId: W.guild_id,
                    channelId: W.id,
                    messageId: s.id
                });
        }, [s, W]),
        ed = a.useCallback(() => {
            (0, f.Xx)(s.id, l, T.d.DELETE_USER_MESSAGE);
        }, [l, s.id]),
        e_ = (0, k.L9)(Number(ee)),
        eE = null != et,
        eI = U && null != $ && (null == en || !en.actions.hasOwnProperty(T.d.DELETE_USER_MESSAGE));
    return (0, i.jsx)('div', {
        onMouseEnter: p,
        onMouseLeave: S,
        children: (0, i.jsx)(j.Z, {
            className: r()(F.mainContainer, { [F.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(D.S, { src: o }),
            iconContainerClassName: F.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: r()(F.content, { [F.compact]: n }),
                children: [
                    (0, i.jsx)(L.nD, {
                        message: s,
                        messageClassname: F.spanCorrection,
                        className: r()(F.usernameContainer, F.spanCorrection, { [F.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: F.spanCorrection,
                            children: [
                                (0, i.jsx)(_.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: F.username,
                                    children: G.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(m.Z, {
                                    type: B.Hb.SYSTEM_DM,
                                    className: F.systemTag
                                }),
                                (0, i.jsx)(Q, {
                                    message: s,
                                    channel: l,
                                    embedChannel: W,
                                    compact: n,
                                    interactionUserId: ea
                                })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: r()(F.messageContent, { [F.compact]: n }),
                        children: (0, i.jsx)(v.Z, {
                            ...R,
                            message: s,
                            channel: W,
                            content: es,
                            compact: n,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: r()(F.embedCard, {
                                [F.compact]: n,
                                [F.selected]: er || (b && O),
                                [F.isClickable]: null != $ && null != W
                            }),
                            childrenAccessories: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: F.centeredRowContainer,
                                        children: [
                                            null != X &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            children: G.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({ keyword: X })
                                                        }),
                                                        (0, i.jsx)('div', { className: r()(F.dot, F.dotMargin) })
                                                    ]
                                                }),
                                            null != V &&
                                                (0, i.jsx)(_.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    tag: 'span',
                                                    children: G.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({ ruleName: V })
                                                }),
                                            null != e_ &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: r()(F.dot, F.dotMargin) }),
                                                        (0, i.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: F.__invalid_footerText,
                                                            children: G.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({ duration: e_ })
                                                        })
                                                    ]
                                                }),
                                            null != ei &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: r()(F.dot, F.dotMargin) }),
                                                        (0, i.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: F.titleCase,
                                                            children: G.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({ reason: (0, h.hU)(ei) })
                                                        })
                                                    ]
                                                })
                                        ]
                                    }),
                                    eE
                                        ? (0, i.jsx)(Y, {
                                              children: (0, i.jsx)(_.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'text-normal',
                                                  tag: 'span',
                                                  children: et
                                              })
                                          })
                                        : null
                                ]
                            }),
                            popoutProps: el,
                            zalgo: !0,
                            onFocus: M,
                            onBlur: Z,
                            onClick: ec
                        })
                    }),
                    (0, i.jsx)(H, {
                        compact: n,
                        children: (0, i.jsxs)('div', {
                            className: r()(F.centeredRowContainer, F.buttonContainer, { [F.compact]: n }),
                            children: [
                                (0, i.jsx)(_.Button, {
                                    onClick: (e) => {
                                        var t;
                                        null === (t = el.onContextMenuModerateUser) || void 0 === t || t.call(el, e);
                                    },
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: F.buttonStyle,
                                    children: (0, i.jsxs)('div', {
                                        className: F.footerAction,
                                        children: [
                                            (0, i.jsx)(_.ShieldIcon, {
                                                size: 'xs',
                                                color: u.Z.BLUE_345,
                                                className: F.footerIcon
                                            }),
                                            (0, i.jsx)(_.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-link',
                                                children: G.Z.Messages.ACTIONS
                                            })
                                        ]
                                    })
                                }),
                                (0, i.jsx)('div', { className: F.dot }),
                                (0, i.jsx)(_.Button, {
                                    onClick: eu,
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: F.buttonStyle,
                                    children: (0, i.jsx)('div', {
                                        className: F.footerAction,
                                        children: (0, i.jsx)(_.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: G.Z.Messages.GUILD_AUTOMOD_JUMP_TO_SURROUNDING
                                        })
                                    })
                                }),
                                (0, i.jsx)('div', { className: F.dot }),
                                (0, i.jsx)(_.Button, {
                                    onClick: eo,
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: F.buttonStyle,
                                    children: (0, i.jsx)('div', {
                                        className: F.footerAction,
                                        children: (0, i.jsx)(_.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: G.Z.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                                        })
                                    })
                                }),
                                eI
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', { className: F.dot }),
                                              (0, i.jsx)(_.Button, {
                                                  onClick: ed,
                                                  color: _.Button.Colors.LINK,
                                                  look: _.Button.Looks.LINK,
                                                  size: _.Button.Sizes.SMALL,
                                                  className: F.buttonStyle,
                                                  children: (0, i.jsx)('div', {
                                                      className: F.footerAction,
                                                      children: (0, i.jsx)(_.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: G.Z.Messages.GUILD_AUTOMOD_ALERT_DELETE_MEMBERS_MESSAGE
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                null != en
                                    ? (0, i.jsx)(z, {
                                          alertActionsExecution: en,
                                          guildId: l.guild_id
                                      })
                                    : null
                            ]
                        })
                    })
                ]
            })
        })
    });
}
