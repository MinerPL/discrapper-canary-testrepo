n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(954955),
    o = n.n(s),
    c = n(442837),
    d = n(704215),
    u = n(481060),
    h = n(596454),
    p = n(607070),
    m = n(110630),
    f = n(706140),
    g = n(543241),
    C = n(407477),
    x = n(633302),
    v = n(856985),
    _ = n(346610),
    I = n(868643),
    E = n(245216),
    b = n(223606),
    N = n(188597),
    Z = n(41776),
    T = n(222677),
    S = n(995774),
    j = n(931651),
    A = n(280845),
    y = n(2818),
    P = n(768943),
    M = n(665906),
    R = n(695346),
    L = n(314897),
    k = n(323873),
    O = n(271383),
    D = n(430824),
    w = n(607744),
    B = n(496675),
    U = n(626135),
    H = n(572004),
    G = n(176354),
    F = n(823379),
    V = n(970257),
    z = n(418476),
    W = n(151007),
    K = n(432376),
    Y = n(373662),
    q = n(996861),
    X = n(603490),
    J = n(225138),
    Q = n(717680),
    $ = n(981631),
    ee = n(921944),
    et = n(185923),
    en = n(388032),
    ei = n(573908);
let el = [x.ZP.getByName('100'), x.ZP.getByName('laughing'), x.ZP.getByName('sparkling_heart')].filter(F.lm);
function ea(e) {
    e.stopPropagation();
}
function er(e) {
    let { message: t, channel: n, canReport: i, onClose: l, updatePosition: a } = e;
    return (0, J.useMessageMenu)({
        message: t,
        channel: n,
        textSelection: '',
        favoriteableType: null,
        favoriteableId: null,
        favoriteableName: null,
        itemHref: void 0,
        itemSrc: void 0,
        itemSafeSrc: void 0,
        itemTextContent: void 0,
        canReport: i,
        onHeightUpdate: a,
        onClose: l,
        navId: 'message-actions',
        ariaLabel: en.intl.string(en.t.Lv7LxM)
    });
}
let es = l.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, g.q5)(t.guild_id).filter(
            (e) =>
                !G.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: et.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        a = (l.length >= 3 ? l : [...(0, v.Z)(l.concat(el)).values()]).slice(0, 3),
        r = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: a.map((e) => {
            var l;
            let a = r.find((t) => (0, S.ir)(t.emoji, (0, S.g1)(e))),
                s = null != a ? en.intl.string(en.t.wunKKC) : en.intl.string(en.t.XVx5BA),
                o = null == e.id ? e.uniqueName : e.name,
                c = null != a ? en.intl.formatToPlainString(en.t.vjeruL, { emojiName: o }) : en.intl.formatToPlainString(en.t.L1JQwM, { emojiName: o });
            return (0, i.jsx)(
                Y.sF,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: ei.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: ei.emojiTooltipText,
                                children: s
                            })
                        ]
                    }),
                    label: c,
                    onClick: () =>
                        ed({
                            type: null != a ? 'remove' : 'add',
                            emoji: e,
                            channel: t,
                            message: n,
                            location: T.TW.MESSAGE_HOVER_BAR
                        }),
                    children: (0, i.jsx)(h.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: 'reaction',
                        alt: '',
                        className: ei.emoji,
                        canSelect: !1
                    })
                },
                ''.concat(null !== (l = e.id) && void 0 !== l ? l : 0, ':').concat(e.name)
            );
        })
    });
});
function eo(e) {
    let {
            channel: t,
            message: n,
            canCopy: a,
            canPin: r,
            canDelete: s,
            canReport: o,
            canEdit: h,
            canPublish: g,
            canReact: x,
            canConfigureJoin: v,
            canReply: b,
            canStartThread: N,
            canViewThread: T,
            canForward: S,
            isExpanded: j,
            showMoreUtilities: k,
            showEmojiPicker: G,
            showMessageBookmarksActions: F,
            isMessageBookmark: J,
            setPopout: et,
            hasDeveloperMode: ei,
            isGuildInviteReminder: el,
            isFocused: ea
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: i, showEmojiBurstPicker: l, showMoreUtilities: a, setPopout: r, isFocused: s } = e,
                { author: o } = n,
                d = (0, c.e7)([D.Z], () => D.Z.getGuild(t.guild_id), [t.guild_id]),
                u = (0, c.e7)([L.default], () => L.default.getId()),
                h = (0, M.$R)(t),
                f = (0, M.Gu)(t),
                g = R.nc.useSetting(),
                C = R.Sb.useSetting(),
                x = (0, c.e7)([w.Z], () => null == t.guild_id || w.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: v, canAddNewReactions: E } = (0, c.cj)(
                    [B.Z],
                    () => ({
                        canAddNewReactions: x && B.Z.can($.Plq.ADD_REACTIONS, t),
                        canManageMessages: B.Z.can($.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, x]
                ),
                b = (0, A.U)(t, n),
                N = (0, M.NE)(t, n),
                T = (0, M.Ek)(n),
                S = (0, c.e7)([Z.Z], () => null != t.guild_id && Z.Z.isLurking(t.guild_id), [t]),
                j = (0, c.e7)([O.ZP], () => null != t.guild_id && O.ZP.isCurrentUserGuest(t.guild_id), [t]),
                k = o.id === u,
                U = (v || n.canDeleteOwnMessage(u)) && h && !$.V$x.UNDELETABLE.has(n.type);
            n.type === $.uaV.AUTO_MODERATION_ACTION && (U = U && v);
            let G = (0, V.a4)(n),
                F = (0, W.Z)(n, t, v),
                Y = !t.isSystemDM() && (0, z.Z)(n, u) && h && !f,
                { disableReactionCreates: q } = (0, K.Z)({
                    channel: t,
                    canChat: x,
                    renderReactions: g,
                    canAddNewReactions: E,
                    isLurking: S,
                    isGuest: j,
                    isActiveChannelOrUnarchivableThread: h
                }),
                X = t.type === $.d4z.GUILD_ANNOUNCEMENT && null != d && d.hasFeature($.oNc.NEWS) && (k || v) && (0, m.Z)(n),
                J = t.getGuildId(),
                ee = null != J && (n.type === $.uaV.USER_JOIN || n.type === $.uaV.GUILD_INVITE_REMINDER) && B.Z.canWithPartialContext($.Plq.MANAGE_GUILD, { guildId: J }),
                { canForwardMessages: et } = (0, _.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                en = (0, I.a)(n),
                { enabled: ei } = y.Z.useExperiment({ location: 'message_utilities' }),
                el = (0, c.e7)([P.Z], () => null != P.Z.getSavedMessage(t.id, n.id)),
                ea = (0, Q.Z)(),
                er = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: F,
                canEdit: Y,
                canDelete: U,
                canReport: G,
                canReply: b,
                canStartThread: N,
                canViewThread: T,
                canForward: et && en,
                canCopy: H.wS,
                hasDeveloperMode: C,
                canReact: !q && g,
                canPublish: X,
                canConfigureJoin: ee,
                isExpanded: ea && !er && !i && !l && !a,
                showEmojiPicker: i,
                showEmojiBurstPicker: l,
                showMoreUtilities: a,
                showMessageBookmarksActions: ei,
                isMessageBookmark: el,
                setPopout: r,
                isFocused: s,
                isGuildInviteReminder: n.type === $.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        eo = l.useCallback(() => {
            !k &&
                U.default.track($.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                et({ moreUtilities: !k });
        }, [k, et, n]),
        ec = l.useCallback(() => {
            et({ emojiPicker: !G });
        }, [G, et]),
        ed = (0, M.$R)(t),
        eh = n.hasFlag($.iLy.CROSSPOSTED),
        [ep, em] = (0, f.cv)(S ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ef = ep === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [eg, eC] = l.useState(!1),
        ex = l.useCallback(() => {
            eC(!0);
        }, []),
        ev = l.useCallback(() => {
            eC(!1);
        }, []),
        e_ = l.useCallback(
            (e, t) => {
                em(ee.L.TAKE_ACTION), (0, q.ts)(e, t);
            },
            [em]
        ),
        { canShowReactionsOnMessageHover: eI } = C.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    return (
        C.Xb.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                j
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              a && ei
                                  ? (0, i.jsx)(
                                        Y.sF,
                                        {
                                            label: en.intl.string(en.t.zBoHlZ),
                                            icon: u.IdIcon,
                                            onClick: (e) => (0, q.F4)(t, n, e)
                                        },
                                        'copy-id'
                                    )
                                  : null,
                              a && !el
                                  ? (0, i.jsx)(
                                        Y.sF,
                                        {
                                            label: en.intl.string(en.t.WqhZsr),
                                            icon: u.LinkIcon,
                                            onClick: () => (0, q.fB)(t, n)
                                        },
                                        'copy-link'
                                    )
                                  : null,
                              v
                                  ? (0, i.jsx)(
                                        Y.sF,
                                        {
                                            label: en.intl.string(en.t.NpHUi4),
                                            icon: u.CircleQuestionIcon,
                                            onClick: () => (0, q.zW)(t)
                                        },
                                        'configure'
                                    )
                                  : null,
                              ed
                                  ? (0, i.jsx)(
                                        Y.sF,
                                        {
                                            label: en.intl.string(en.t.RpE9k5),
                                            icon: u.ChatMarkUnreadIcon,
                                            onClick: () => (0, q.B8)(t, n)
                                        },
                                        'mark-unread'
                                    )
                                  : null,
                              F
                                  ? (0, i.jsx)(
                                        Y.sF,
                                        {
                                            label: J ? en.intl.string(en.t.LHUP9P) : en.intl.string(en.t['9p3D9v']),
                                            icon: J ? u.BookmarkIcon : u.BookmarkOutlineIcon,
                                            onClick: () => (J ? (0, q.eM)(t, n) : (0, q.dF)(t, n))
                                        },
                                        'bookmark'
                                    )
                                  : null,
                              r
                                  ? (0, i.jsx)(
                                        Y.sF,
                                        {
                                            label: n.pinned ? en.intl.string(en.t['Bse+Fx']) : en.intl.string(en.t['CvQ18/']),
                                            icon: u.PinIcon,
                                            onClick: (e) => (0, q.rY)(t, n, e)
                                        },
                                        'pin'
                                    )
                                  : null,
                              N && S
                                  ? (0, i.jsx)(
                                        Y.sF,
                                        {
                                            label: en.intl.string(en.t.rBIGBA),
                                            icon: u.ThreadIcon,
                                            onClick: () => (0, q.gK)(t, n)
                                        },
                                        'thread'
                                    )
                                  : null,
                              b && h
                                  ? (0, i.jsx)(
                                        Y.sF,
                                        {
                                            label: en.intl.string(en.t['5IEsGx']),
                                            icon: u.ArrowAngleLeftUpIcon,
                                            onClick: (e) => (0, q.HH)(t, n, e)
                                        },
                                        'reply-self'
                                    )
                                  : null
                          ]
                      })
                    : null,
                x && !el
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              eI && !j
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(es, {
                                                channel: t,
                                                message: n
                                            }),
                                            (0, i.jsx)(Y.fO, {})
                                        ]
                                    })
                                  : null,
                              (0, i.jsx)(X.Z, {
                                  togglePopout: ec,
                                  renderEmojiPicker: eu,
                                  shouldShow: G,
                                  isFocused: ea,
                                  channel: t,
                                  message: n
                              })
                          ]
                      })
                    : null,
                b && !h
                    ? (0, i.jsx)(
                          Y.sF,
                          {
                              label: en.intl.string(en.t['5IEsGx']),
                              icon: u.ArrowAngleLeftUpIcon,
                              onClick: (e) => (0, q.HH)(t, n, e)
                          },
                          'reply-other'
                      )
                    : null,
                h
                    ? (0, i.jsx)(
                          Y.sF,
                          {
                              label: en.intl.string(en.t.bt75u7),
                              icon: u.PencilIcon,
                              onClick: () => (0, q.Hd)(t, n)
                          },
                          'edit'
                      )
                    : null,
                S
                    ? (0, i.jsx)(
                          Y.sF,
                          {
                              label: en.intl.string(en.t.I3ltXF),
                              icon: E.Z,
                              onClick: () => e_(t, n),
                              onTooltipShow: ex,
                              onTooltipHide: ev,
                              showNewBadge: !eg && ef
                          },
                          'forward'
                      )
                    : null,
                N && !S
                    ? (0, i.jsx)(
                          Y.sF,
                          {
                              label: en.intl.string(en.t.rBIGBA),
                              icon: u.ThreadIcon,
                              onClick: () => (0, q.gK)(t, n)
                          },
                          'thread'
                      )
                    : null,
                !N && T
                    ? (0, i.jsx)(
                          Y.sF,
                          {
                              label: en.intl.string(en.t['39d0Wl']),
                              icon: u.ThreadIcon,
                              onClick: () => (0, q.qe)(t, n)
                          },
                          'view-thread'
                      )
                    : null,
                g
                    ? (0, i.jsx)(
                          Y.sF,
                          {
                              label: eh ? en.intl.string(en.t['1kWJAg']) : en.intl.string(en.t['MFGE5+']),
                              icon: u.AnnouncementsIcon,
                              onClick: () => (0, q.Xl)(t, n),
                              disabled: eh
                          },
                          'publish'
                      )
                    : null,
                s && (el || j)
                    ? (0, i.jsx)(
                          Y.sF,
                          {
                              label: en.intl.string(en.t.oyYWHB),
                              icon: u.TrashIcon,
                              onClick: (e) => (0, q.$Z)(t, n, e),
                              dangerous: !0,
                              separator: !j
                          },
                          'delete'
                      )
                    : null,
                j && s
                    ? null
                    : (0, i.jsx)(u.Popout, {
                          renderPopout: (e) => {
                              let { updatePosition: l, closePopout: a } = e;
                              return (0, i.jsx)(er, {
                                  channel: t,
                                  message: n,
                                  canReport: o,
                                  onClose: a,
                                  updatePosition: l
                              });
                          },
                          shouldShow: k,
                          onRequestClose: eo,
                          position: 'left',
                          align: 'top',
                          animation: u.Popout.Animation.NONE,
                          children: (e, t) => {
                              let { onClick: n, ...l } = e,
                                  { isShown: a } = t;
                              return (0, i.jsx)(
                                  Y.sF,
                                  {
                                      label: en.intl.string(en.t.UKOtz8),
                                      icon: u.MoreHorizontalIcon,
                                      selected: a,
                                      onClick: eo,
                                      ...l
                                  },
                                  'more'
                              );
                          }
                      })
            ]
        })
    );
}
function ec(e) {
    let { channel: t, message: n } = e,
        l = (0, c.e7)([b.Z], () => null != b.Z.getMessage(n.id), [n.id]),
        a = null == n.interaction || (null != n.interactionData && (0, N.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !l &&
                a &&
                (0, i.jsx)(
                    Y.sF,
                    {
                        label: en.intl.string(en.t['5911LS']),
                        icon: u.RetryIcon,
                        onClick: () => (0, q.mG)(t, n)
                    },
                    'retry'
                ),
            (0, i.jsx)(
                Y.sF,
                {
                    label: en.intl.string(en.t.oyYWHB),
                    icon: u.TrashIcon,
                    onClick: (e) => (0, q.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function ed(e) {
    let { type: t, emoji: n, channel: i, message: l, location: a, isBurst: r = !1 } = e;
    if (null == n) return;
    let s = (0, S.g1)(n);
    'add' === t
        ? (0, T.rU)(i.id, l.id, s, a, { burst: r })
        : (0, T.WO)({
              channelId: i.id,
              messageId: l.id,
              emoji: s,
              location: a,
              options: { burst: r }
          });
}
function eu(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = {
            openPopoutType: 'message_reaction_emoji_picker',
            ...(l && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
                section: (0, S.s4)(e),
                object: $.qAy.EMOJI_REACTION_PICKER_POPOUT
            })
        };
    return (0, i.jsx)(j.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i, l, a) => {
            ed({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: T.TW.MESSAGE_REACTION_PICKER,
                isBurst: a
            }),
                l && (a ? o()(n, 150)() : n());
        },
        analyticsOverride: a,
        messageId: t.id
    });
}
t.Z = l.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: a } = e,
        s = (0, c.e7)([k.Z], () => k.Z.isEditing(t.id, n.id), [t.id, n.id]),
        o = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === $.yb.SEND_FAILED
                ? (0, i.jsx)(ec, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        d = (function (e) {
            let { message: t } = e;
            return t.state !== $.yb.SEND_FAILED ? (0, i.jsx)(eo, { ...e }) : null;
        })(e);
    return s || (null == o && null == d)
        ? null
        : (0, i.jsx)('div', {
              className: r()(e.className, {
                  [ei.container]: !0,
                  [ei.isHeader]: l,
                  [ei.isReply]: a
              }),
              onClick: ea,
              onContextMenu: ea,
              role: 'group',
              'aria-label': en.intl.string(en.t.Lv7LxM),
              children: (0, i.jsxs)(Y.ZP, {
                  className: e.innerClassName,
                  children: [o, d]
              })
          });
});
