n.d(t, {
    Z: function () {
        return U;
    },
    f: function () {
        return P;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(913527),
    l = n.n(o),
    u = n(481060),
    c = n(100527),
    d = n(906732),
    _ = n(407477),
    E = n(978003),
    f = n(39154),
    h = n(245216),
    p = n(79390),
    I = n(869765),
    m = n(403132),
    T = n(378233),
    S = n(768581),
    g = n(55935),
    A = n(823379),
    N = n(453687),
    O = n(930282),
    R = n(123145),
    v = n(223021),
    C = n(217702),
    L = n(981631),
    y = n(689938),
    D = n(825193);
function b(e) {
    let { width: t = 12, height: n = 8, color: i = 'currentColor', className: a, foreground: s } = e;
    return (0, r.jsx)('svg', {
        className: a,
        width: t,
        height: n,
        viewBox: '0 0 12 8',
        children: (0, r.jsx)('path', {
            d: 'M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z',
            className: s,
            fill: i
        })
    });
}
function M(e) {
    let { width: t = 18, height: n = 18, className: i, foreground: a } = e;
    return (0, r.jsx)('svg', {
        className: i,
        width: t,
        height: n,
        viewBox: '0 0 18 18',
        children: (0, r.jsx)('path', {
            fill: '#3ba55c',
            d: 'M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0',
            className: a
        })
    });
}
function P(e, t, n, i, a) {
    let s, o, l, c;
    let d = (0, f.Z)(e),
        { trailingIconClass: _, leadingIconClass: I, iconSize: m } = a,
        S = null == t || '' === t || (Array.isArray(t) && 0 === t.length),
        g = (0, T.cv)(d).length > 0,
        A = null != d.interaction,
        N = d.hasFlag(L.iLy.IS_VOICE_MESSAGE),
        R = d.isPoll(),
        v = d.type === L.uaV.POLL_RESULT;
    if (
        ((0, E.Z)(e) &&
            (c = (0, r.jsx)(h.Z, {
                size: 'custom',
                className: I,
                width: m,
                height: m
            })),
        n)
    )
        s = y.Z.Messages.REPLY_QUOTE_MESSAGE_BLOCKED;
    else if (d.type === L.uaV.CHANNEL_PINNED_MESSAGE) s = y.Z.Messages.MESSAGE_PINNED;
    else if (S) {
        if (R) {
            var C, D;
            o = null == d ? void 0 : null === (D = d.poll) || void 0 === D ? void 0 : null === (C = D.question) || void 0 === C ? void 0 : C.text;
        } else
            v
                ? (s = (0, p.N4)(d))
                : g
                  ? (s = y.Z.Messages.REPLY_QUOTE_STICKER)
                  : A
                    ? (s = y.Z.Messages.REPLY_QUOTE_COMMAND)
                    : N
                      ? (s = y.Z.Messages.REPLY_QUOTE_VOICE_MESSAGE)
                      : ((s = y.Z.Messages.REPLY_QUOTE_NO_TEXT_CONTENT),
                        (l = (0, r.jsx)(u.ImageIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            className: _,
                            width: m,
                            height: m
                        })));
    } else
        o = (0, r.jsx)(O.ZP, {
            message: d,
            content: t,
            className: i
        });
    return (
        g
            ? (l = (0, r.jsx)(u.StickerSmallIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  className: _,
                  width: m,
                  height: m
              }))
            : A
              ? (l = (0, r.jsx)(u.SlashBoxIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: _,
                    width: m,
                    height: m
                }))
              : N
                ? (l = (0, r.jsx)(u.MicrophoneIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      className: _,
                      width: (19 / 24) * m,
                      height: m
                  }))
                : (d.attachments.length > 0 || d.embeds.length > 0) &&
                  !v &&
                  (l = (0, r.jsx)(u.ImageIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      className: _,
                      width: m,
                      height: m
                  })),
        {
            contentPlaceholder: s,
            renderedContent: o,
            trailingIcon: l,
            leadingIcon: c
        }
    );
}
function U(e) {
    let t;
    let { repliedAuthor: n, baseAuthor: a, baseMessage: o, referencedMessage: E, renderPopout: f, isReplySpineClickable: h, showReplySpine: p } = e,
        { canShowReactionsOnMessageHover: T } = _.ZP.useExperiment({ location: 'RepliedMessage' }, { autoTrackExposure: !1 }),
        [O, U] = i.useState(!1),
        w = i.useMemo(() => (null != f && E.state === I.Y.LOADED ? (e) => f(e, E.message) : void 0), [E, f]),
        x = i.useCallback(() => U((e) => !e), []),
        G = (function (e, t, n) {
            let { referencedMessage: i, channel: a, compact: o, isReplyAuthorBlocked: l, repliedAuthor: _, showAvatarPopout: E, onClickAvatar: f, onContextMenu: h, onPopoutRequestClose: p } = e,
                { analyticsLocations: m } = (0, d.ZP)(c.Z.AVATAR);
            if (o || i.state !== I.Y.LOADED || l)
                return n === L.uaV.CONTEXT_MENU_COMMAND
                    ? (0, r.jsx)('div', {
                          className: D.replyChatIconContainer,
                          children: (0, r.jsx)(u.ChatIcon, { size: 'xs' })
                      })
                    : (0, r.jsx)('div', {
                          className: D.replyBadge,
                          children: (0, r.jsx)(b, { className: D.replyIcon })
                      });
            if (i.message.type === L.uaV.USER_JOIN || i.message.type === L.uaV.ROLE_SUBSCRIPTION_PURCHASE || i.message.type === L.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || i.message.type === L.uaV.GUILD_GAMING_STATS_PROMPT) return (0, r.jsx)(M, { className: D.userJoinSystemMessageIcon });
            if (i.message.type === L.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, r.jsx)(u.TicketIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: D.ticketIcon
                });
            if (i.message.type === L.uaV.POLL_RESULT)
                return (0, r.jsx)(u.PollsIcon, {
                    className: D.repliedTextContentLeadingIcon,
                    width: C.WW,
                    height: C.WW,
                    size: 'custom'
                });
            let T = () => {
                var e, t, n, o, l;
                return (
                    (e = i.message.author),
                    (t = _),
                    (n = a.guild_id),
                    (o = f),
                    (l = h),
                    (0, r.jsx)('img', {
                        alt: '',
                        src:
                            (null == t ? void 0 : t.guildMemberAvatar) != null && null != n
                                ? (0, S.JM)({
                                      guildId: n,
                                      userId: e.id,
                                      avatar: t.guildMemberAvatar
                                  })
                                : e.getAvatarURL(n, 16),
                        onClick: o,
                        onContextMenu: l,
                        className: s()({
                            [D.replyAvatar]: !0,
                            [D.clickable]: null != o
                        })
                    })
                );
            };
            return null != t && null != E
                ? (0, r.jsx)(d.Gt, {
                      value: m,
                      children: (0, r.jsx)(u.Popout, {
                          renderPopout: t,
                          shouldShow: E,
                          position: 'right',
                          onRequestClose: p,
                          children: T
                      })
                  })
                : (0, r.jsx)(d.Gt, {
                      value: m,
                      children: T()
                  });
        })(e, w, o.type),
        k = (function (e, t) {
            let { baseMessage: n, channel: i, referencedMessage: a, showUsernamePopout: s, onClickUsername: o, onContextMenu: l, onPopoutRequestClose: u } = e,
                c = (null == a ? void 0 : a.state) === I.Y.LOADED ? a.message : void 0;
            return null == c || c.type === L.uaV.USER_JOIN || c.type === L.uaV.ROLE_SUBSCRIPTION_PURCHASE || c.type === L.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || c.type === L.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || c.type === L.uaV.GUILD_GAMING_STATS_PROMPT || c.type === L.uaV.POLL_RESULT
                ? null
                : (0, r.jsx)(R.Z, {
                      message: c,
                      channel: i,
                      compact: !0,
                      withMentionPrefix: (0, m.Z)(n, c),
                      showPopout: s,
                      renderPopout: t,
                      onClick: o,
                      onContextMenu: l,
                      onPopoutRequestClose: u,
                      isRepliedMessage: !0
                  });
        })(e, w),
        B = (function (e, t, n) {
            let { content: i, referencedMessage: a, isReplyAuthorBlocked: o, onClickReply: l } = e,
                c = a.state !== I.Y.DELETED ? l : void 0;
            switch (a.state) {
                case I.Y.LOADED: {
                    let {
                        contentPlaceholder: e,
                        renderedContent: l,
                        trailingIcon: d,
                        leadingIcon: _
                    } = P(a.message, i, o, D.repliedTextContent, {
                        trailingIconClass: D.repliedTextContentTrailingIcon,
                        leadingIconClass: D.repliedTextContentLeadingIcon,
                        iconSize: C.WW
                    });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            _,
                            (0, r.jsx)(u.Clickable, {
                                className: s()(D.repliedTextPreview, D.clickable, { [D.repliedMessageClickableSpineHovered]: t }),
                                onClick: c,
                                onMouseEnter: n,
                                onMouseLeave: n,
                                children: (0, r.jsx)(u.BlockInteractions, {
                                    children:
                                        null != l
                                            ? l
                                            : (0, r.jsx)('span', {
                                                  className: D.repliedTextPlaceholder,
                                                  children: e
                                              })
                                })
                            }),
                            d
                        ]
                    });
                }
                case I.Y.NOT_LOADED:
                    return (0, r.jsx)(u.Clickable, {
                        className: s()(D.repliedTextPreview, D.clickable),
                        onClick: c,
                        children: (0, r.jsx)('span', {
                            className: D.repliedTextPlaceholder,
                            children: y.Z.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED
                        })
                    });
                case I.Y.DELETED:
                    return (0, r.jsx)('div', {
                        className: D.repliedTextPreview,
                        children: (0, r.jsx)('span', {
                            className: D.repliedTextPlaceholder,
                            children: y.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
                        })
                    });
                default:
                    (0, A.vE)(a);
            }
        })(e, O, x),
        F = i.useMemo(() => (e.compact ? (0, v.Z)((0, g.vc)(l()(), 'LT')) : null), [e.compact]);
    return (
        null != n &&
            null != a &&
            (t = y.Z.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
                author: null == a ? void 0 : a.nick,
                repliedAuthor: null == n ? void 0 : n.nick
            })),
        (0, r.jsxs)('div', {
            id: (0, N.Gq)(o),
            className: s()(D.repliedMessage, F, { [D.messageSpine]: !T || (!h && p) }),
            'aria-label': t,
            children: [
                T &&
                    h &&
                    p &&
                    (0, r.jsx)(u.Clickable, {
                        tag: 'div',
                        'aria-label': y.Z.Messages.JUMP_TO_REPLY,
                        className: s()(D.repliedMessageClickableSpine, { [D.repliedMessageContentHovered]: O }),
                        onClick: e.onClickReply,
                        onMouseEnter: x,
                        onMouseLeave: x
                    }),
                G,
                k,
                B
            ]
        })
    );
}
