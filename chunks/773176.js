n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(954955),
    o = n.n(r),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(596454),
    m = n(607070),
    p = n(110630),
    _ = n(706140),
    f = n(543241),
    E = n(689789),
    g = n(346610),
    C = n(868643),
    I = n(245216),
    x = n(223606),
    T = n(188597),
    N = n(41776),
    v = n(222677),
    S = n(995774),
    Z = n(931651),
    A = n(280845),
    M = n(768943),
    b = n(121254),
    R = n(665906),
    j = n(695346),
    L = n(314897),
    P = n(323873),
    O = n(271383),
    y = n(430824),
    D = n(607744),
    k = n(496675),
    U = n(626135),
    w = n(572004),
    B = n(970257),
    H = n(364742),
    G = n(418476),
    V = n(151007),
    F = n(432376),
    W = n(373662),
    z = n(996861),
    Y = n(603490),
    K = n(225138),
    q = n(717680),
    X = n(981631),
    Q = n(921944),
    J = n(689938),
    $ = n(547881),
    ee = n(589958);
function et(e) {
    e.stopPropagation();
}
function en(e) {
    let { message: t, channel: n, canReport: i, onClose: a, updatePosition: s } = e;
    return (0, K.useMessageMenu)({
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
        onHeightUpdate: s,
        onClose: a,
        navId: 'message-actions',
        ariaLabel: J.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
    });
}
let ei = a.memo(function (e) {
    let { channel: t, message: n } = e,
        a = (0, f.wC)(t.guild_id),
        s = (0, f.q5)(t.guild_id),
        { canSplitFrecencyList: l } = (0, E.S)({
            location: 'ReactionSuggestions',
            autoTrackExposure: !0
        }),
        r = l ? s.slice(0, 3) : a.slice(0, 3),
        o = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: r.map((e) => {
            var a;
            let s = o.find((t) => (0, S.ir)(t.emoji, (0, S.g1)(e))),
                l = null != s ? J.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE : J.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD,
                r = null == e.id ? e.uniqueName : e.name,
                c = null != s ? J.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE_ALLY.format({ emojiName: r }) : J.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD_ALLY.format({ emojiName: r });
            return (0, i.jsx)(
                W.sF,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: $.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: $.emojiTooltipText,
                                children: l
                            })
                        ]
                    }),
                    label: c,
                    onClick: () =>
                        el({
                            type: null != s ? 'remove' : 'add',
                            emoji: e,
                            channel: t,
                            message: n,
                            location: v.TW.MESSAGE_HOVER_BAR
                        }),
                    buttonClassName: ee.reactionSuggestion,
                    children: (0, i.jsx)(h.Z, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: 'reaction',
                        alt: '',
                        className: $.emoji
                    })
                },
                ''.concat(null !== (a = e.id) && void 0 !== a ? a : 0, ':').concat(e.name)
            );
        })
    });
});
function ea(e) {
    let {
            channel: t,
            message: n,
            canCopy: s,
            canPin: l,
            canDelete: r,
            canReport: o,
            canEdit: h,
            canPublish: f,
            canReact: E,
            canConfigureJoin: x,
            canReply: T,
            canStartThread: v,
            canViewThread: S,
            canForward: Z,
            isExpanded: P,
            showMoreUtilities: K,
            showEmojiPicker: $,
            showMessageBookmarksActions: et,
            isMessageBookmark: ea,
            setPopout: es,
            hasDeveloperMode: el,
            isGuildInviteReminder: eo,
            isFocused: ec
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: i, showEmojiBurstPicker: a, showMoreUtilities: s, setPopout: l, isFocused: r } = e,
                { author: o } = n,
                u = (0, c.e7)([y.Z], () => y.Z.getGuild(t.guild_id), [t.guild_id]),
                d = (0, c.e7)([L.default], () => L.default.getId()),
                h = (0, R.$R)(t),
                _ = (0, R.Gu)(t),
                f = j.nc.useSetting(),
                E = j.Sb.useSetting(),
                I = (0, c.e7)([D.Z], () => null == t.guild_id || D.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: x, canAddNewReactions: T } = (0, c.cj)(
                    [k.Z],
                    () => ({
                        canAddNewReactions: I && k.Z.can(X.Plq.ADD_REACTIONS, t),
                        canManageMessages: k.Z.can(X.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, I]
                ),
                v = (0, A.U)(t, n),
                S = (0, R.NE)(t, n),
                Z = (0, R.Ek)(n),
                P = (0, c.e7)([N.Z], () => null != t.guild_id && N.Z.isLurking(t.guild_id), [t]),
                U = (0, c.e7)([O.ZP], () => null != t.guild_id && O.ZP.isCurrentUserGuest(t.guild_id), [t]),
                H = o.id === d,
                W = (x || n.canDeleteOwnMessage(d)) && h && !X.V$x.UNDELETABLE.has(n.type);
            n.type === X.uaV.AUTO_MODERATION_ACTION && (W = W && x);
            let z = (0, B.a4)(n),
                Y = (0, V.Z)(n, t, x),
                K = !t.isSystemDM() && (0, G.Z)(n, d) && h && !_,
                { disableReactionCreates: Q } = (0, F.Z)({
                    channel: t,
                    canChat: I,
                    renderReactions: f,
                    canAddNewReactions: T,
                    isLurking: P,
                    isGuest: U,
                    isActiveChannelOrUnarchivableThread: h
                }),
                J = t.type === X.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(X.oNc.NEWS) && (H || x) && (0, p.Z)(n),
                $ = t.getGuildId(),
                ee = null != $ && (n.type === X.uaV.USER_JOIN || n.type === X.uaV.GUILD_INVITE_REMINDER) && k.Z.canWithPartialContext(X.Plq.MANAGE_GUILD, { guildId: $ }),
                { canForwardMessages: et } = (0, g.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                en = (0, C.a)(n),
                { enabled: ei } = b.Z.useExperiment({ location: 'message_utilities' }, { autoTrackExposure: !1 }),
                ea = (0, c.e7)([M.Z], () => M.Z.isMessageBookmarked(t.id, n.id)),
                es = (0, q.Z)(),
                el = (0, c.e7)([m.Z], () => m.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: Y,
                canEdit: K,
                canDelete: W,
                canReport: z,
                canReply: v,
                canStartThread: S,
                canViewThread: Z,
                canForward: et && en,
                canCopy: w.wS,
                hasDeveloperMode: E,
                canReact: !Q && f,
                canPublish: J,
                canConfigureJoin: ee,
                isExpanded: es && !el && !i && !a && !s,
                showEmojiPicker: i,
                showEmojiBurstPicker: a,
                showMoreUtilities: s,
                showMessageBookmarksActions: ei,
                isMessageBookmark: ea,
                setPopout: l,
                isFocused: r,
                isGuildInviteReminder: n.type === X.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        eu = a.useCallback(() => {
            !K &&
                U.default.track(X.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                es({ moreUtilities: !K });
        }, [K, es, n]),
        ed = a.useCallback(() => {
            es({ emojiPicker: !$ });
        }, [$, es]),
        eh = (0, R.$R)(t),
        em = n.hasFlag(X.iLy.CROSSPOSTED),
        [ep, e_] = (0, _.cv)(Z ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        ef = ep === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [eE, eg] = a.useState(!1),
        eC = a.useCallback(() => {
            eg(!0);
        }, []),
        eI = a.useCallback(() => {
            eg(!1);
        }, []),
        ex = a.useCallback(
            (e, t) => {
                e_(Q.L.TAKE_ACTION), (0, z.ts)(e, t);
            },
            [e_]
        ),
        { canShowReactionsOnMessageHover: eT } = H.Z.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            P
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          s && el
                              ? (0, i.jsx)(
                                    W.sF,
                                    {
                                        label: J.Z.Messages.COPY_ID_MESSAGE,
                                        icon: d.IdIcon,
                                        onClick: (e) => (0, z.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          s && !eo
                              ? (0, i.jsx)(
                                    W.sF,
                                    {
                                        label: J.Z.Messages.COPY_LINK,
                                        icon: d.LinkIcon,
                                        onClick: () => (0, z.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          x
                              ? (0, i.jsx)(
                                    W.sF,
                                    {
                                        label: J.Z.Messages.CONFIGURE,
                                        icon: d.CircleQuestionIcon,
                                        onClick: () => (0, z.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          eh
                              ? (0, i.jsx)(
                                    W.sF,
                                    {
                                        label: J.Z.Messages.MARK_UNREAD,
                                        icon: d.ChatMarkUnreadIcon,
                                        onClick: () => (0, z.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          et
                              ? (0, i.jsx)(
                                    W.sF,
                                    {
                                        label: ea ? J.Z.Messages.MESSAGE_BOOKMARKS_REMOVE : J.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
                                        icon: ea ? d.BookmarkIcon : d.BookmarkOutlineIcon,
                                        onClick: () => (ea ? (0, z.eM)(t, n) : (0, z.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          l
                              ? (0, i.jsx)(
                                    W.sF,
                                    {
                                        label: n.pinned ? J.Z.Messages.UNPIN_MESSAGE : J.Z.Messages.PIN_MESSAGE,
                                        icon: d.PinIcon,
                                        onClick: (e) => (0, z.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          v && Z
                              ? (0, i.jsx)(
                                    W.sF,
                                    {
                                        label: J.Z.Messages.CREATE_THREAD,
                                        icon: d.ThreadIcon,
                                        onClick: () => (0, z.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          T && h
                              ? (0, i.jsx)(
                                    W.sF,
                                    {
                                        label: J.Z.Messages.MESSAGE_ACTION_REPLY,
                                        icon: d.ArrowAngleLeftUpIcon,
                                        onClick: (e) => (0, z.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            E && !eo
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          eT && !P
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(ei, {
                                            channel: t,
                                            message: n
                                        }),
                                        (0, i.jsx)(W.fO, { className: ee.separator })
                                    ]
                                })
                              : null,
                          (0, i.jsx)(Y.Z, {
                              togglePopout: ed,
                              renderEmojiPicker: er,
                              shouldShow: $,
                              isFocused: ec,
                              channel: t,
                              message: n
                          })
                      ]
                  })
                : null,
            T && !h
                ? (0, i.jsx)(
                      W.sF,
                      {
                          label: J.Z.Messages.MESSAGE_ACTION_REPLY,
                          icon: d.ArrowAngleLeftUpIcon,
                          onClick: (e) => (0, z.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            h
                ? (0, i.jsx)(
                      W.sF,
                      {
                          label: J.Z.Messages.EDIT,
                          icon: d.PencilIcon,
                          onClick: () => (0, z.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            Z
                ? (0, i.jsx)(
                      W.sF,
                      {
                          label: J.Z.Messages.MESSAGE_ACTION_FORWARD,
                          icon: I.Z,
                          onClick: () => ex(t, n),
                          onTooltipShow: eC,
                          onTooltipHide: eI,
                          showNewBadge: !eE && ef
                      },
                      'forward'
                  )
                : null,
            v && !Z
                ? (0, i.jsx)(
                      W.sF,
                      {
                          label: J.Z.Messages.CREATE_THREAD,
                          icon: d.ThreadIcon,
                          onClick: () => (0, z.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !v && S
                ? (0, i.jsx)(
                      W.sF,
                      {
                          label: J.Z.Messages.VIEW_THREAD,
                          icon: d.ThreadIcon,
                          onClick: () => (0, z.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            f
                ? (0, i.jsx)(
                      W.sF,
                      {
                          label: em ? J.Z.Messages.NEWS_CHANNEL_PUBLISHED : J.Z.Messages.NEWS_CHANNEL_PUBLISH,
                          icon: d.AnnouncementsIcon,
                          onClick: () => (0, z.Xl)(t, n),
                          disabled: em
                      },
                      'publish'
                  )
                : null,
            r && (eo || P)
                ? (0, i.jsx)(
                      W.sF,
                      {
                          label: J.Z.Messages.DELETE,
                          icon: d.TrashIcon,
                          onClick: (e) => (0, z.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !P
                      },
                      'delete'
                  )
                : null,
            P && r
                ? null
                : (0, i.jsx)(d.Popout, {
                      renderPopout: (e) => {
                          let { updatePosition: a, closePopout: s } = e;
                          return (0, i.jsx)(en, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: s,
                              updatePosition: a
                          });
                      },
                      shouldShow: K,
                      onRequestClose: eu,
                      position: 'left',
                      align: 'top',
                      animation: d.Popout.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...a } = e,
                              { isShown: s } = t;
                          return (0, i.jsx)(
                              W.sF,
                              {
                                  label: J.Z.Messages.MORE,
                                  icon: d.MoreHorizontalIcon,
                                  selected: s,
                                  onClick: eu,
                                  ...a
                              },
                              'more'
                          );
                      }
                  })
        ]
    });
}
function es(e) {
    let { channel: t, message: n } = e,
        a = (0, c.e7)([x.Z], () => null != x.Z.getMessage(n.id), [n.id]),
        s = null == n.interaction || (null != n.interactionData && (0, T.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !a &&
                s &&
                (0, i.jsx)(
                    W.sF,
                    {
                        label: J.Z.Messages.RETRY,
                        icon: d.RetryIcon,
                        onClick: () => (0, z.mG)(t, n)
                    },
                    'retry'
                ),
            (0, i.jsx)(
                W.sF,
                {
                    label: J.Z.Messages.DELETE,
                    icon: d.TrashIcon,
                    onClick: (e) => (0, z.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function el(e) {
    let { type: t, emoji: n, channel: i, message: a, location: s, isBurst: l = !1 } = e;
    if (null == n) return;
    let r = (0, S.g1)(n);
    'add' === t
        ? (0, v.rU)(i.id, a.id, r, s, { burst: l })
        : (0, v.WO)({
              channelId: i.id,
              messageId: a.id,
              emoji: r,
              location: s,
              options: { burst: l }
          });
}
function er(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = {
            openPopoutType: 'message_reaction_emoji_picker',
            ...(a && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? X.ZY5.GUILD_CHANNEL : X.ZY5.DM_CHANNEL,
                section: (0, S.s4)(e),
                object: X.qAy.EMOJI_REACTION_PICKER_POPOUT
            })
        };
    return (0, i.jsx)(Z.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i, a, s) => {
            el({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: v.TW.MESSAGE_REACTION_PICKER,
                isBurst: s
            }),
                a && (s ? o()(n, 150)() : n());
        },
        analyticsOverride: s,
        messageId: t.id
    });
}
t.Z = a.memo(function (e) {
    let { channel: t, message: n, isHeader: a } = e,
        s = (0, c.e7)([P.Z], () => P.Z.isEditing(t.id, n.id), [t.id, n.id]),
        r = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === X.yb.SEND_FAILED
                ? (0, i.jsx)(es, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== X.yb.SEND_FAILED ? (0, i.jsx)(ea, { ...e }) : null;
        })(e);
    return s || (null == r && null == o)
        ? null
        : (0, i.jsx)('div', {
              className: l()(e.className, {
                  [$.container]: !0,
                  [$.isHeader]: a
              }),
              onClick: et,
              onContextMenu: et,
              role: 'group',
              'aria-label': J.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
              children: (0, i.jsxs)(W.ZP, {
                  className: e.innerClassName,
                  children: [r, o]
              })
          });
});
