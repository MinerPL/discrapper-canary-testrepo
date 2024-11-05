n.d(t, {
    Z: function () {
        return M;
    },
    f: function () {
        return w;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(913527),
    l = n.n(o),
    u = n(481060),
    c = n(100527),
    d = n(906732),
    f = n(407477),
    _ = n(978003),
    h = n(39154),
    p = n(245216),
    m = n(79390),
    g = n(869765),
    E = n(403132),
    v = n(378233),
    I = n(768581),
    S = n(55935),
    T = n(823379),
    b = n(453687),
    y = n(930282),
    A = n(123145),
    N = n(223021),
    C = n(217702),
    R = n(981631),
    O = n(388032),
    D = n(825193);
function L(e) {
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
function x(e) {
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
function w(e, t, n, i, a) {
    let s, o, l, c;
    let d = (0, h.Z)(e),
        { trailingIconClass: f, leadingIconClass: g, iconSize: E } = a,
        I = null == t || '' === t || (Array.isArray(t) && 0 === t.length),
        S = (0, v.cv)(d).length > 0,
        T = null != d.interaction,
        b = d.hasFlag(R.iLy.IS_VOICE_MESSAGE),
        A = d.isPoll(),
        N = d.type === R.uaV.POLL_RESULT;
    if (
        ((0, _.Z)(e) &&
            (c = (0, r.jsx)(p.Z, {
                size: 'custom',
                className: g,
                width: E,
                height: E
            })),
        n)
    )
        s = O.intl.string(O.t.XAkOo6);
    else if (d.type === R.uaV.CHANNEL_PINNED_MESSAGE) s = O.intl.string(O.t.sCfDDg);
    else if (I) {
        if (A) {
            var C, D;
            o = null == d ? void 0 : null === (D = d.poll) || void 0 === D ? void 0 : null === (C = D.question) || void 0 === C ? void 0 : C.text;
        } else
            N
                ? (s = (0, m.N4)(d))
                : S
                  ? (s = O.intl.string(O.t.kHdYCQ))
                  : T
                    ? (s = O.intl.string(O.t['E+6SSU']))
                    : b
                      ? (s = O.intl.string(O.t['XC3A5+']))
                      : ((s = O.intl.string(O.t['6hGo0d'])),
                        (l = (0, r.jsx)(u.ImageIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            className: f,
                            width: E,
                            height: E
                        })));
    } else
        o = (0, r.jsx)(y.ZP, {
            message: d,
            content: t,
            className: i
        });
    return (
        S
            ? (l = (0, r.jsx)(u.StickerSmallIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  className: f,
                  width: E,
                  height: E
              }))
            : T
              ? (l = (0, r.jsx)(u.SlashBoxIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: f,
                    width: E,
                    height: E
                }))
              : b
                ? (l = (0, r.jsx)(u.MicrophoneIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      className: f,
                      width: (19 / 24) * E,
                      height: E
                  }))
                : (d.attachments.length > 0 || d.embeds.length > 0) &&
                  !N &&
                  (l = (0, r.jsx)(u.ImageIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      className: f,
                      width: E,
                      height: E
                  })),
        {
            contentPlaceholder: s,
            renderedContent: o,
            trailingIcon: l,
            leadingIcon: c
        }
    );
}
function M(e) {
    let t;
    let { repliedAuthor: n, baseAuthor: a, baseMessage: o, referencedMessage: _, renderPopout: h, isReplySpineClickable: p, showReplySpine: m } = e,
        { canShowReactionsOnMessageHover: v } = f.ZP.useExperiment({ location: 'RepliedMessage' }, { autoTrackExposure: !1 }),
        [y, M] = i.useState(!1),
        P = i.useMemo(() => (null != h && _.state === g.Y.LOADED ? (e) => h(e, _.message) : void 0), [_, h]),
        k = i.useCallback(() => M((e) => !e), []),
        U = (function (e, t, n) {
            let { referencedMessage: i, channel: a, compact: o, isReplyAuthorBlocked: l, repliedAuthor: f, showAvatarPopout: _, onClickAvatar: h, onContextMenu: p, onPopoutRequestClose: m } = e,
                { analyticsLocations: E } = (0, d.ZP)(c.Z.AVATAR);
            if (o || i.state !== g.Y.LOADED || l)
                return n === R.uaV.CONTEXT_MENU_COMMAND
                    ? (0, r.jsx)('div', {
                          className: D.replyChatIconContainer,
                          children: (0, r.jsx)(u.ChatIcon, { size: 'xs' })
                      })
                    : (0, r.jsx)('div', {
                          className: D.replyBadge,
                          children: (0, r.jsx)(L, { className: D.replyIcon })
                      });
            if (i.message.type === R.uaV.USER_JOIN || i.message.type === R.uaV.ROLE_SUBSCRIPTION_PURCHASE || i.message.type === R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || i.message.type === R.uaV.GUILD_GAMING_STATS_PROMPT) return (0, r.jsx)(x, { className: D.userJoinSystemMessageIcon });
            if (i.message.type === R.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, r.jsx)(u.TicketIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: D.ticketIcon
                });
            if (i.message.type === R.uaV.POLL_RESULT)
                return (0, r.jsx)(u.PollsIcon, {
                    className: D.repliedTextContentLeadingIcon,
                    width: C.WW,
                    height: C.WW,
                    size: 'custom'
                });
            let v = () => {
                var e, t, n, o, l;
                return (
                    (e = i.message.author),
                    (t = f),
                    (n = a.guild_id),
                    (o = h),
                    (l = p),
                    (0, r.jsx)('img', {
                        alt: '',
                        src:
                            (null == t ? void 0 : t.guildMemberAvatar) != null && null != n
                                ? (0, I.JM)({
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
            return null != t && null != _
                ? (0, r.jsx)(d.Gt, {
                      value: E,
                      children: (0, r.jsx)(u.Popout, {
                          renderPopout: t,
                          shouldShow: _,
                          position: 'right',
                          onRequestClose: m,
                          children: v
                      })
                  })
                : (0, r.jsx)(d.Gt, {
                      value: E,
                      children: v()
                  });
        })(e, P, o.type),
        G = (function (e, t) {
            let { baseMessage: n, channel: i, referencedMessage: a, showUsernamePopout: s, onClickUsername: o, onContextMenu: l, onPopoutRequestClose: u } = e,
                c = (null == a ? void 0 : a.state) === g.Y.LOADED ? a.message : void 0;
            return null == c || c.type === R.uaV.USER_JOIN || c.type === R.uaV.ROLE_SUBSCRIPTION_PURCHASE || c.type === R.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION || c.type === R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT || c.type === R.uaV.GUILD_GAMING_STATS_PROMPT || c.type === R.uaV.POLL_RESULT
                ? null
                : (0, r.jsx)(A.Z, {
                      message: c,
                      channel: i,
                      compact: !0,
                      withMentionPrefix: (0, E.Z)(n, c),
                      showPopout: s,
                      renderPopout: t,
                      onClick: o,
                      onContextMenu: l,
                      onPopoutRequestClose: u,
                      isRepliedMessage: !0
                  });
        })(e, P),
        B = (function (e, t, n) {
            let { content: i, referencedMessage: a, isReplyAuthorBlocked: o, onClickReply: l } = e,
                c = a.state !== g.Y.DELETED ? l : void 0;
            switch (a.state) {
                case g.Y.LOADED: {
                    let {
                        contentPlaceholder: e,
                        renderedContent: l,
                        trailingIcon: d,
                        leadingIcon: f
                    } = w(a.message, i, o, D.repliedTextContent, {
                        trailingIconClass: D.repliedTextContentTrailingIcon,
                        leadingIconClass: D.repliedTextContentLeadingIcon,
                        iconSize: C.WW
                    });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            f,
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
                case g.Y.NOT_LOADED:
                    return (0, r.jsx)(u.Clickable, {
                        className: s()(D.repliedTextPreview, D.clickable),
                        onClick: c,
                        children: (0, r.jsx)('span', {
                            className: D.repliedTextPlaceholder,
                            children: O.intl.string(O.t['1i+hMj'])
                        })
                    });
                case g.Y.DELETED:
                    return (0, r.jsx)('div', {
                        className: D.repliedTextPreview,
                        children: (0, r.jsx)('span', {
                            className: D.repliedTextPlaceholder,
                            children: O.intl.string(O.t.mE3KJC)
                        })
                    });
                default:
                    (0, T.vE)(a);
            }
        })(e, y, k),
        Z = i.useMemo(() => (e.compact ? (0, N.Z)((0, S.vc)(l()(), 'LT')) : null), [e.compact]);
    null != n &&
        null != a &&
        (t = O.intl.formatToPlainString(O.t.RhbQ2N, {
            author: null == a ? void 0 : a.nick,
            repliedAuthor: null == n ? void 0 : n.nick
        }));
    let F = o.type === R.uaV.CONTEXT_MENU_COMMAND;
    return (0, r.jsxs)('div', {
        id: (0, b.Gq)(o),
        className: s()(D.repliedMessage, Z, {
            [D.messageSpine]: !v || (!p && m),
            [D.contextCommandMessage]: F
        }),
        'aria-label': t,
        children: [
            v &&
                p &&
                m &&
                (0, r.jsx)(u.Clickable, {
                    tag: 'div',
                    'aria-label': O.intl.string(O.t.dpjpOj),
                    className: s()(D.repliedMessageClickableSpine, { [D.repliedMessageContentHovered]: y }),
                    onClick: e.onClickReply,
                    onMouseEnter: k,
                    onMouseLeave: k
                }),
            U,
            G,
            B
        ]
    });
}
