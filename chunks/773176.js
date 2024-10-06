n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(954955),
    o = n.n(r),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    h = n(596454),
    p = n(607070),
    m = n(110630),
    _ = n(706140),
    f = n(543241),
    E = n(407477),
    g = n(633302),
    C = n(347374),
    I = n(346610),
    T = n(868643),
    x = n(245216),
    S = n(223606),
    v = n(188597),
    N = n(41776),
    A = n(222677),
    Z = n(995774),
    M = n(931651),
    b = n(280845),
    R = n(2818),
    L = n(768943),
    j = n(665906),
    P = n(695346),
    O = n(314897),
    y = n(323873),
    D = n(271383),
    U = n(430824),
    k = n(607744),
    w = n(496675),
    B = n(626135),
    H = n(572004),
    G = n(176354),
    V = n(823379),
    F = n(970257),
    W = n(418476),
    z = n(151007),
    Y = n(432376),
    K = n(373662),
    q = n(996861),
    X = n(603490),
    J = n(225138),
    Q = n(717680),
    $ = n(981631),
    ee = n(921944),
    et = n(185923),
    en = n(689938),
    ei = n(573908);
let es = [g.ZP.getByName('100'), g.ZP.getByName('laughing'), g.ZP.getByName('sparkling_heart')].filter(V.lm);
function ea(e) {
    e.stopPropagation();
}
function el(e) {
    let { message: t, channel: n, canReport: i, onClose: s, updatePosition: a } = e;
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
        onClose: s,
        navId: 'message-actions',
        ariaLabel: en.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
    });
}
let er = s.memo(function (e) {
    let { channel: t, message: n } = e,
        s = (0, f.q5)(t.guild_id).filter(
            (e) =>
                !G.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: et.Hz.REACTION,
                    guildId: t.guild_id
                })
        ),
        a = (s.length >= 3 ? s : [...(0, C.Z)(s.concat(es)).values()]).slice(0, 3),
        l = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: a.map((e) => {
            var s;
            let a = l.find((t) => (0, Z.ir)(t.emoji, (0, Z.g1)(e))),
                r = null != a ? en.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE : en.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD,
                o = null == e.id ? e.uniqueName : e.name,
                c = null != a ? en.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE_ALLY.format({ emojiName: o }) : en.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD_ALLY.format({ emojiName: o });
            return (0, i.jsx)(
                K.sF,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                color: 'header-primary',
                                className: ei.emojiTooltipText,
                                children: ':'.concat(e.name, ':')
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-xs/normal',
                                color: 'header-secondary',
                                className: ei.emojiTooltipText,
                                children: r
                            })
                        ]
                    }),
                    label: c,
                    onClick: () =>
                        eu({
                            type: null != a ? 'remove' : 'add',
                            emoji: e,
                            channel: t,
                            message: n,
                            location: A.TW.MESSAGE_HOVER_BAR
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
                ''.concat(null !== (s = e.id) && void 0 !== s ? s : 0, ':').concat(e.name)
            );
        })
    });
});
function eo(e) {
    let {
            channel: t,
            message: n,
            canCopy: a,
            canPin: l,
            canDelete: r,
            canReport: o,
            canEdit: h,
            canPublish: f,
            canReact: g,
            canConfigureJoin: C,
            canReply: S,
            canStartThread: v,
            canViewThread: A,
            canForward: Z,
            isExpanded: M,
            showMoreUtilities: y,
            showEmojiPicker: G,
            showMessageBookmarksActions: V,
            isMessageBookmark: J,
            setPopout: et,
            hasDeveloperMode: ei,
            isGuildInviteReminder: es,
            isFocused: ea
        } = (function (e) {
            let { channel: t, message: n, showEmojiPicker: i, showEmojiBurstPicker: s, showMoreUtilities: a, setPopout: l, isFocused: r } = e,
                { author: o } = n,
                u = (0, c.e7)([U.Z], () => U.Z.getGuild(t.guild_id), [t.guild_id]),
                d = (0, c.e7)([O.default], () => O.default.getId()),
                h = (0, j.$R)(t),
                _ = (0, j.Gu)(t),
                f = P.nc.useSetting(),
                E = P.Sb.useSetting(),
                g = (0, c.e7)([k.Z], () => null == t.guild_id || k.Z.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: C, canAddNewReactions: x } = (0, c.cj)(
                    [w.Z],
                    () => ({
                        canAddNewReactions: g && w.Z.can($.Plq.ADD_REACTIONS, t),
                        canManageMessages: w.Z.can($.Plq.MANAGE_MESSAGES, t)
                    }),
                    [t, g]
                ),
                S = (0, b.U)(t, n),
                v = (0, j.NE)(t, n),
                A = (0, j.Ek)(n),
                Z = (0, c.e7)([N.Z], () => null != t.guild_id && N.Z.isLurking(t.guild_id), [t]),
                M = (0, c.e7)([D.ZP], () => null != t.guild_id && D.ZP.isCurrentUserGuest(t.guild_id), [t]),
                y = o.id === d,
                B = (C || n.canDeleteOwnMessage(d)) && h && !$.V$x.UNDELETABLE.has(n.type);
            n.type === $.uaV.AUTO_MODERATION_ACTION && (B = B && C);
            let G = (0, F.a4)(n),
                V = (0, z.Z)(n, t, C),
                K = !t.isSystemDM() && (0, W.Z)(n, d) && h && !_,
                { disableReactionCreates: q } = (0, Y.Z)({
                    channel: t,
                    canChat: g,
                    renderReactions: f,
                    canAddNewReactions: x,
                    isLurking: Z,
                    isGuest: M,
                    isActiveChannelOrUnarchivableThread: h
                }),
                X = t.type === $.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature($.oNc.NEWS) && (y || C) && (0, m.Z)(n),
                J = t.getGuildId(),
                ee = null != J && (n.type === $.uaV.USER_JOIN || n.type === $.uaV.GUILD_INVITE_REMINDER) && w.Z.canWithPartialContext($.Plq.MANAGE_GUILD, { guildId: J }),
                { canForwardMessages: et } = (0, I.yk)({ location: 'useMessageUtilitiesProps' }, { autoTrackExposure: !1 }),
                en = (0, T.a)(n),
                { enabled: ei } = R.Z.useExperiment({ location: 'message_utilities' }),
                es = (0, c.e7)([L.Z], () => null != L.Z.getSavedMessage(t.id, n.id)),
                ea = (0, Q.Z)(),
                el = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: V,
                canEdit: K,
                canDelete: B,
                canReport: G,
                canReply: S,
                canStartThread: v,
                canViewThread: A,
                canForward: et && en,
                canCopy: H.wS,
                hasDeveloperMode: E,
                canReact: !q && f,
                canPublish: X,
                canConfigureJoin: ee,
                isExpanded: ea && !el && !i && !s && !a,
                showEmojiPicker: i,
                showEmojiBurstPicker: s,
                showMoreUtilities: a,
                showMessageBookmarksActions: ei,
                isMessageBookmark: es,
                setPopout: l,
                isFocused: r,
                isGuildInviteReminder: n.type === $.uaV.GUILD_INVITE_REMINDER
            };
        })(e),
        eo = s.useCallback(() => {
            !y &&
                B.default.track($.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id
                }),
                et({ moreUtilities: !y });
        }, [y, et, n]),
        ec = s.useCallback(() => {
            et({ emojiPicker: !G });
        }, [G, et]),
        eu = (0, j.$R)(t),
        eh = n.hasFlag($.iLy.CROSSPOSTED),
        [ep, em] = (0, _.cv)(Z ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []),
        e_ = ep === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE,
        [ef, eE] = s.useState(!1),
        eg = s.useCallback(() => {
            eE(!0);
        }, []),
        eC = s.useCallback(() => {
            eE(!1);
        }, []),
        eI = s.useCallback(
            (e, t) => {
                em(ee.L.TAKE_ACTION), (0, q.ts)(e, t);
            },
            [em]
        ),
        { canShowReactionsOnMessageHover: eT } = E.ZP.useExperiment({ location: 'ExpandingButtons' }, { autoTrackExposure: !0 });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            M
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          a && ei
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: en.Z.Messages.COPY_ID_MESSAGE,
                                        icon: d.IdIcon,
                                        onClick: (e) => (0, q.F4)(t, n, e)
                                    },
                                    'copy-id'
                                )
                              : null,
                          a && !es
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: en.Z.Messages.COPY_LINK,
                                        icon: d.LinkIcon,
                                        onClick: () => (0, q.fB)(t, n)
                                    },
                                    'copy-link'
                                )
                              : null,
                          C
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: en.Z.Messages.CONFIGURE,
                                        icon: d.CircleQuestionIcon,
                                        onClick: () => (0, q.zW)(t)
                                    },
                                    'configure'
                                )
                              : null,
                          eu
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: en.Z.Messages.MARK_UNREAD,
                                        icon: d.ChatMarkUnreadIcon,
                                        onClick: () => (0, q.B8)(t, n)
                                    },
                                    'mark-unread'
                                )
                              : null,
                          V
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: J ? en.Z.Messages.MESSAGE_BOOKMARKS_REMOVE : en.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
                                        icon: J ? d.BookmarkIcon : d.BookmarkOutlineIcon,
                                        onClick: () => (J ? (0, q.eM)(t, n) : (0, q.dF)(t, n))
                                    },
                                    'bookmark'
                                )
                              : null,
                          l
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: n.pinned ? en.Z.Messages.UNPIN_MESSAGE : en.Z.Messages.PIN_MESSAGE,
                                        icon: d.PinIcon,
                                        onClick: (e) => (0, q.rY)(t, n, e)
                                    },
                                    'pin'
                                )
                              : null,
                          v && Z
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: en.Z.Messages.CREATE_THREAD,
                                        icon: d.ThreadIcon,
                                        onClick: () => (0, q.gK)(t, n)
                                    },
                                    'thread'
                                )
                              : null,
                          S && h
                              ? (0, i.jsx)(
                                    K.sF,
                                    {
                                        label: en.Z.Messages.MESSAGE_ACTION_REPLY,
                                        icon: d.ArrowAngleLeftUpIcon,
                                        onClick: (e) => (0, q.HH)(t, n, e)
                                    },
                                    'reply-self'
                                )
                              : null
                      ]
                  })
                : null,
            g && !es
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          eT && !M
                              ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(er, {
                                            channel: t,
                                            message: n
                                        }),
                                        (0, i.jsx)(K.fO, {})
                                    ]
                                })
                              : null,
                          (0, i.jsx)(X.Z, {
                              togglePopout: ec,
                              renderEmojiPicker: ed,
                              shouldShow: G,
                              isFocused: ea,
                              channel: t,
                              message: n
                          })
                      ]
                  })
                : null,
            S && !h
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.MESSAGE_ACTION_REPLY,
                          icon: d.ArrowAngleLeftUpIcon,
                          onClick: (e) => (0, q.HH)(t, n, e)
                      },
                      'reply-other'
                  )
                : null,
            h
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.EDIT,
                          icon: d.PencilIcon,
                          onClick: () => (0, q.Hd)(t, n)
                      },
                      'edit'
                  )
                : null,
            Z
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.MESSAGE_ACTION_FORWARD,
                          icon: x.Z,
                          onClick: () => eI(t, n),
                          onTooltipShow: eg,
                          onTooltipHide: eC,
                          showNewBadge: !ef && e_
                      },
                      'forward'
                  )
                : null,
            v && !Z
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.CREATE_THREAD,
                          icon: d.ThreadIcon,
                          onClick: () => (0, q.gK)(t, n)
                      },
                      'thread'
                  )
                : null,
            !v && A
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.VIEW_THREAD,
                          icon: d.ThreadIcon,
                          onClick: () => (0, q.qe)(t, n)
                      },
                      'view-thread'
                  )
                : null,
            f
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: eh ? en.Z.Messages.NEWS_CHANNEL_PUBLISHED : en.Z.Messages.NEWS_CHANNEL_PUBLISH,
                          icon: d.AnnouncementsIcon,
                          onClick: () => (0, q.Xl)(t, n),
                          disabled: eh
                      },
                      'publish'
                  )
                : null,
            r && (es || M)
                ? (0, i.jsx)(
                      K.sF,
                      {
                          label: en.Z.Messages.DELETE,
                          icon: d.TrashIcon,
                          onClick: (e) => (0, q.$Z)(t, n, e),
                          dangerous: !0,
                          separator: !M
                      },
                      'delete'
                  )
                : null,
            M && r
                ? null
                : (0, i.jsx)(d.Popout, {
                      renderPopout: (e) => {
                          let { updatePosition: s, closePopout: a } = e;
                          return (0, i.jsx)(el, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: a,
                              updatePosition: s
                          });
                      },
                      shouldShow: y,
                      onRequestClose: eo,
                      position: 'left',
                      align: 'top',
                      animation: d.Popout.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...s } = e,
                              { isShown: a } = t;
                          return (0, i.jsx)(
                              K.sF,
                              {
                                  label: en.Z.Messages.MORE,
                                  icon: d.MoreHorizontalIcon,
                                  selected: a,
                                  onClick: eo,
                                  ...s
                              },
                              'more'
                          );
                      }
                  })
        ]
    });
}
function ec(e) {
    let { channel: t, message: n } = e,
        s = (0, c.e7)([S.Z], () => null != S.Z.getMessage(n.id), [n.id]),
        a = null == n.interaction || (null != n.interactionData && (0, v.$s)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !s &&
                a &&
                (0, i.jsx)(
                    K.sF,
                    {
                        label: en.Z.Messages.RETRY,
                        icon: d.RetryIcon,
                        onClick: () => (0, q.mG)(t, n)
                    },
                    'retry'
                ),
            (0, i.jsx)(
                K.sF,
                {
                    label: en.Z.Messages.DELETE,
                    icon: d.TrashIcon,
                    onClick: (e) => (0, q.$Z)(t, n, e)
                },
                'delete-usent'
            )
        ]
    });
}
function eu(e) {
    let { type: t, emoji: n, channel: i, message: s, location: a, isBurst: l = !1 } = e;
    if (null == n) return;
    let r = (0, Z.g1)(n);
    'add' === t
        ? (0, A.rU)(i.id, s.id, r, a, { burst: l })
        : (0, A.WO)({
              channelId: i.id,
              messageId: s.id,
              emoji: r,
              location: a,
              options: { burst: l }
          });
}
function ed(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = {
            openPopoutType: 'message_reaction_emoji_picker',
            ...(s && {
                openPopoutType: 'message_super_reaction_emoji_picker',
                page: null != e.getGuildId() ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
                section: (0, Z.s4)(e),
                object: $.qAy.EMOJI_REACTION_PICKER_POPOUT
            })
        };
    return (0, i.jsx)(M.$, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i, s, a) => {
            eu({
                type: 'add',
                emoji: i,
                channel: e,
                message: t,
                location: A.TW.MESSAGE_REACTION_PICKER,
                isBurst: a
            }),
                s && (a ? o()(n, 150)() : n());
        },
        analyticsOverride: a,
        messageId: t.id
    });
}
t.Z = s.memo(function (e) {
    let { channel: t, message: n, isHeader: s } = e,
        a = (0, c.e7)([y.Z], () => y.Z.isEditing(t.id, n.id), [t.id, n.id]),
        r = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === $.yb.SEND_FAILED
                ? (0, i.jsx)(ec, {
                      channel: t,
                      message: n
                  })
                : null;
        })(e),
        o = (function (e) {
            let { message: t } = e;
            return t.state !== $.yb.SEND_FAILED ? (0, i.jsx)(eo, { ...e }) : null;
        })(e);
    return a || (null == r && null == o)
        ? null
        : (0, i.jsx)('div', {
              className: l()(e.className, {
                  [ei.container]: !0,
                  [ei.isHeader]: s
              }),
              onClick: ea,
              onContextMenu: ea,
              role: 'group',
              'aria-label': en.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
              children: (0, i.jsxs)(K.ZP, {
                  className: e.innerClassName,
                  children: [r, o]
              })
          });
});
