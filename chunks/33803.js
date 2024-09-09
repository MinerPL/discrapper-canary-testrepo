n.d(t, {
    Z: function () {
        return X;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
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
    C = n(36459),
    f = n(336197),
    p = n(359110),
    g = n(347475),
    S = n(496675),
    A = n(594174),
    R = n(5192),
    O = n(51144),
    x = n(937889),
    M = n(739566),
    v = n(779125),
    L = n(890410),
    Z = n(464891),
    P = n(507418),
    D = n(348238),
    b = n(38267),
    j = n(83561),
    U = n(834129),
    y = n(959517),
    B = n(981631),
    k = n(674563),
    G = n(590433),
    F = n(689938),
    w = n(735612);
function V(e, t) {
    let { popouts: n, selected: i, setPopout: a } = (0, b.Z)(e.id, y.d$),
        { usernameProfile: r, avatarProfile: l } = n,
        o = (0, D.wq)(e.author.id, t.id),
        c = (0, D.RN)(e.author.id, t.id, e.id),
        u = (0, D.XO)(e, t, r, a),
        d = (0, D.R9)(l, a);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: d,
        onPopoutRequestClose: s.useCallback(
            () =>
                a({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                }),
            [a]
        ),
        renderPopout: P.Z,
        showAvatarPopout: l,
        showUsernamePopout: r
    };
}
function H(e, t) {
    return s.useMemo(() => {
        if (null != t)
            return (n) =>
                (0, i.jsx)(g.Z, {
                    ...n,
                    userId: t.id,
                    user: t,
                    channelId: e.id,
                    guildId: e.guild_id
                });
    }, [e, t]);
}
function Y(e) {
    let { children: t, className: n, compact: s } = e;
    return (0, i.jsx)('div', {
        className: r()(w.footerContainer, n, { [w.compact]: s }),
        children: t
    });
}
function W(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)('div', {
        className: r()(w.annotationRow, n),
        children: t
    });
}
function K(e, t) {
    switch (e) {
        case T.d.DELETE_USER_MESSAGE:
            return (0, i.jsx)(_.TrashIcon, {
                size: 'xs',
                color: 'currentColor',
                className: w.alertActionIcon,
                ...t
            });
        case T.d.SET_COMPLETED:
            return (0, i.jsx)(_.CheckmarkLargeIcon, {
                size: 'xs',
                color: 'currentColor',
                className: r()(w.alertActionIcon, w.alertActionSetCompletedIcon),
                ...t
            });
        case T.d.SUBMIT_FEEDBACK:
            return (0, i.jsx)(_.FlagIcon, {
                size: 'xs',
                color: 'currentColor',
                className: r()(w.alertActionIcon),
                ...t
            });
        default:
            return null;
    }
}
function z(e) {
    let { alertAction: t, guildId: n } = e,
        s = (0, d.e7)([A.default], () => A.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == s) return K(e, {});
        let a = (function (e, t, n) {
            var i;
            let s = null !== (i = R.ZP.getNickname(n, null, t)) && void 0 !== i ? i : O.ZP.getUserTag(t),
                a = o()(e.ts),
                r = ''.concat(s, ' ').concat(a.fromNow());
            try {
                switch (parseInt(e.actionType)) {
                    case T.d.DELETE_USER_MESSAGE:
                        return F.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_DELETE_MESSAGE.format({
                            userName: s,
                            timestamp: a.fromNow()
                        });
                    case T.d.SET_COMPLETED:
                        return F.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SET_COMPLETED.format({
                            userName: s,
                            timestamp: a.fromNow()
                        });
                    case T.d.SUBMIT_FEEDBACK:
                        return F.Z.Messages.GUILD_AUTOMOD_ALERT_ACTION_ICON_TOOLTIP_SUBMIT_FEEDBACK.format({
                            userName: s,
                            timestamp: a.fromNow()
                        });
                    default:
                        return r;
                }
            } catch (e) {
                return r;
            }
        })(t, s, n);
        return (0, i.jsx)(_.Tooltip, {
            text: a,
            children: (t) => K(e, t)
        });
    } catch (e) {
        return null;
    }
}
function Q(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        s = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, i.jsx)('div', {
        className: w.alertActionsIconContainer,
        children: s.map((e) =>
            (0, i.jsx)(
                z,
                {
                    alertAction: e,
                    guildId: n
                },
                e.actionType
            )
        )
    });
}
let q = s.memo(function (e) {
    let t,
        { message: n, channel: s, embedChannel: a, compact: r, interactionUserId: l } = e,
        o = V(n, s),
        c = H(s, n.author),
        u = (0, M.ZP)(n),
        d = (0, Z.CF)(
            {
                message: n,
                channel: s,
                author: u,
                guildId: null == s ? void 0 : s.guild_id,
                compact: r,
                ...o
            },
            c
        ),
        E = A.default.getUser(l),
        I = V(n, s),
        m = H(s, E);
    if (null != E) {
        let e = (0, M.ij)(E, s),
            i = (0, Z.CF)(
                {
                    message: n,
                    channel: s,
                    author: e,
                    guildId: null == s ? void 0 : s.guild_id,
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
        className: w.spanCorrection,
        children: (0, h.Mq)(
            n,
            a,
            () =>
                (0, i.jsx)('div', {
                    className: w.channelNameContainer,
                    children: (0, i.jsx)(v.Z, {
                        channel: a,
                        className: w.channelName,
                        openChatWithoutConnecting: !0
                    })
                }),
            () => d,
            t
        )
    });
});
function X(e) {
    var t;
    let { id: n, compact: a, message: l, channel: o } = e,
        {
            avatarSrc: g,
            eventHandlers: { onMouseEnter: A, onMouseLeave: R }
        } = (0, j.m)(!0),
        { onFocus: O, ...M } = (0, c.JA)(null != n ? n : ''),
        { isFocused: v, handleFocus: P, handleBlur: b } = (0, D.bb)(O),
        y = (0, d.e7)([I.Z], () => I.Z.keyboardModeEnabled),
        H = (0, d.e7)([S.Z], () => S.Z.can(B.Plq.MANAGE_MESSAGES, o), [o]),
        { ruleName: K, embedChannel: z, decisionId: X, keywordMatchedContent: J, keyword: $, content: ee, flaggedMessageId: et, timeoutDuration: en, decisionReason: ei, alertActionsExecution: es, quarantineType: ea, interactionUserId: er } = (0, h.ZP)(l),
        el = s.useMemo(() => (0, x.k$)(ee, J, o.id), [ee, J, o]),
        { selected: eo, ...ec } = V(l, o),
        eu = s.useCallback(() => {
            (0, N._s)(l.id, ee, X, o);
        }, [l.id, ee, X, o]),
        ed = s.useCallback(
            (e) => {
                if (null != et && null != z) e.stopPropagation(), e.preventDefault(), (0, f.Z)(B.Z5c.CHANNEL(null == z ? void 0 : z.guild_id, null == z ? void 0 : z.id, et));
            },
            [z, et]
        ),
        e_ = s.useCallback(
            (e) => {
                null != z &&
                    (E.default.selectChannel({
                        guildId: z.guild_id,
                        channelId: e,
                        messageId: l.id
                    }),
                    (0, p.Kh)(e));
            },
            [l, z]
        ),
        eE = s.useCallback(() => {
            (0, C.Xx)(l.id, o, T.d.DELETE_USER_MESSAGE);
        }, [o, l.id]),
        eI = (0, G.L9)(Number(en)),
        em = null != ei,
        eT = H && null != et && (null == es || !es.actions.hasOwnProperty(T.d.DELETE_USER_MESSAGE)),
        eh = l.embeds.length > 0 ? (null === (t = l.embeds[0].fields.find((e) => 'channel_id' === e.rawName)) || void 0 === t ? void 0 : t.rawValue) : null,
        eN = null != eh;
    return (0, i.jsx)('div', {
        onMouseEnter: A,
        onMouseLeave: R,
        children: (0, i.jsx)(U.Z, {
            className: r()(w.mainContainer, { [w.compact]: a }),
            iconNode: a ? null : (0, i.jsx)(j.S, { src: g }),
            iconContainerClassName: w.iconContainer,
            compact: a,
            children: (0, i.jsxs)('div', {
                className: r()(w.content, { [w.compact]: a }),
                children: [
                    (0, i.jsx)(Z.nD, {
                        message: l,
                        messageClassname: w.spanCorrection,
                        className: r()(w.usernameContainer, w.spanCorrection, { [w.compact]: a }),
                        username: (0, i.jsxs)('div', {
                            className: w.spanCorrection,
                            children: [
                                (0, i.jsx)(_.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: w.username,
                                    children: F.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(m.Z, {
                                    type: k.Hb.SYSTEM_DM,
                                    className: w.systemTag
                                }),
                                (0, i.jsx)(q, {
                                    message: l,
                                    channel: o,
                                    embedChannel: z,
                                    compact: a,
                                    interactionUserId: er
                                })
                            ]
                        }),
                        compact: a,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: r()(w.messageContent, { [w.compact]: a }),
                        children: (0, i.jsx)(L.Z, {
                            ...M,
                            message: l,
                            channel: z,
                            content: el,
                            compact: a,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: r()(w.embedCard, {
                                [w.compact]: a,
                                [w.selected]: eo || (y && v),
                                [w.isClickable]: null != et && null != z
                            }),
                            childrenAccessories: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: w.centeredRowContainer,
                                        children: [
                                            null != $ &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_KEYWORD.format({ keyword: $ })
                                                        }),
                                                        (0, i.jsx)('div', { className: r()(w.dot, w.dotMargin) })
                                                    ]
                                                }),
                                            null != K &&
                                                (0, i.jsx)(_.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    tag: 'span',
                                                    children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_RULE_NAME.format({ ruleName: K })
                                                }),
                                            null != eI &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: r()(w.dot, w.dotMargin) }),
                                                        (0, i.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: w.__invalid_footerText,
                                                            children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_TIMEOUT_DURATION.format({ duration: eI })
                                                        })
                                                    ]
                                                }),
                                            null != ea &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: r()(w.dot, w.dotMargin) }),
                                                        (0, i.jsx)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: w.titleCase,
                                                            children: F.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON.format({ reason: (0, h.hU)(ea) })
                                                        })
                                                    ]
                                                })
                                        ]
                                    }),
                                    em
                                        ? (0, i.jsx)(W, {
                                              children: (0, i.jsx)(_.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'text-normal',
                                                  tag: 'span',
                                                  children: ei
                                              })
                                          })
                                        : null
                                ]
                            }),
                            popoutProps: ec,
                            zalgo: !0,
                            onFocus: P,
                            onBlur: b,
                            onClick: ed
                        })
                    }),
                    (0, i.jsx)(Y, {
                        compact: a,
                        children: (0, i.jsxs)('div', {
                            className: r()(w.centeredRowContainer, w.buttonContainer, { [w.compact]: a }),
                            children: [
                                (0, i.jsx)(_.Button, {
                                    onClick: (e) => {
                                        var t;
                                        null === (t = ec.onContextMenuModerateUser) || void 0 === t || t.call(ec, e);
                                    },
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: w.buttonStyle,
                                    children: (0, i.jsxs)('div', {
                                        className: w.footerAction,
                                        children: [
                                            (0, i.jsx)(_.ShieldIcon, {
                                                size: 'xs',
                                                color: u.Z.BLUE_345,
                                                className: w.footerIcon
                                            }),
                                            (0, i.jsx)(_.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-link',
                                                children: F.Z.Messages.ACTIONS
                                            })
                                        ]
                                    })
                                }),
                                eN
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', { className: w.dot }),
                                              (0, i.jsx)(_.Button, {
                                                  onClick: () => e_(eh),
                                                  color: _.Button.Colors.LINK,
                                                  look: _.Button.Looks.LINK,
                                                  size: _.Button.Sizes.SMALL,
                                                  className: w.buttonStyle,
                                                  children: (0, i.jsx)('div', {
                                                      className: w.footerAction,
                                                      children: (0, i.jsx)(_.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: F.Z.Messages.GUILD_AUTOMOD_JUMP_TO_SURROUNDING
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, i.jsx)('div', { className: w.dot }),
                                (0, i.jsx)(_.Button, {
                                    onClick: eu,
                                    color: _.Button.Colors.LINK,
                                    look: _.Button.Looks.LINK,
                                    size: _.Button.Sizes.SMALL,
                                    className: w.buttonStyle,
                                    children: (0, i.jsx)('div', {
                                        className: w.footerAction,
                                        children: (0, i.jsx)(_.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: F.Z.Messages.GUILD_AUTOMOD_REPORT_ISSUES
                                        })
                                    })
                                }),
                                eT
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', { className: w.dot }),
                                              (0, i.jsx)(_.Button, {
                                                  onClick: eE,
                                                  color: _.Button.Colors.LINK,
                                                  look: _.Button.Looks.LINK,
                                                  size: _.Button.Sizes.SMALL,
                                                  className: w.buttonStyle,
                                                  children: (0, i.jsx)('div', {
                                                      className: w.footerAction,
                                                      children: (0, i.jsx)(_.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: F.Z.Messages.GUILD_AUTOMOD_ALERT_DELETE_MEMBERS_MESSAGE
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                null != es
                                    ? (0, i.jsx)(Q, {
                                          alertActionsExecution: es,
                                          guildId: o.guild_id
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
