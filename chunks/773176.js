n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(954955),
  o = n.n(r),
  c = n(442837),
  d = n(704215),
  u = n(481060),
  h = n(607070),
  p = n(110630),
  m = n(377171),
  _ = n(706140),
  f = n(346610),
  E = n(868643),
  C = n(223606),
  g = n(188597),
  I = n(41776),
  x = n(222677),
  T = n(995774),
  v = n(931651),
  N = n(280845),
  S = n(121254),
  Z = n(115219),
  A = n(742989),
  M = n(802463),
  b = n(665906),
  R = n(695346),
  j = n(314897),
  L = n(323873),
  P = n(271383),
  O = n(430824),
  y = n(607744),
  D = n(496675),
  k = n(448239),
  U = n(404975),
  w = n(626135),
  B = n(572004),
  H = n(970257),
  G = n(418476),
  V = n(151007),
  F = n(432376),
  W = n(996861),
  z = n(603490),
  Y = n(225138),
  K = n(717680),
  q = n(981631),
  X = n(921944),
  Q = n(689938),
  J = n(838764);

function $(e) {
  e.stopPropagation();
}

function ee(e) {
  let {
message: t,
channel: n,
canReport: i,
onClose: a,
updatePosition: l
  } = e;
  return (0, Y.useMessageMenu)({
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
onHeightUpdate: l,
onClose: a,
navId: 'message-actions',
ariaLabel: Q.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  });
}

function et(e) {
  let {
label: t,
ariaLabel: n,
tooltipText: a,
tooltipColor: l,
icon: s,
iconProps: r,
channel: o,
message: c,
onClick: d,
onTooltipShow: h,
onTooltipHide: p,
key: _,
disabled: f,
dangerous: E,
separator: C,
sparkle: g,
showNewBadge: I,
...x
  } = e;
  return (0, i.jsx)(u.Tooltip, {
text: null != a ? a : t,
color: null != l ? l : u.TooltipColors.PRIMARY,
'aria-label': t,
onTooltipShow: h,
onTooltipHide: p,
hideOnClick: !0,
tooltipClassName: J.tooltip,
children: e => {
  let {
    onMouseEnter: a,
    onMouseLeave: l,
    onClick: h
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsxs)(U.zx, {
        onMouseEnter: a,
        onMouseLeave: l,
        onClick: e => {
          null == h || h(), d(o, c, e);
        },
        'aria-label': null != n ? n : t,
        disabled: f,
        dangerous: E,
        ...x,
        children: [
          (0, i.jsx)(s, {
            className: J.icon,
            color: 'currentColor',
            ...r
          }),
          g && (0, i.jsx)(u.LottieSparkle, {}),
          I && (0, i.jsx)(u.TextBadge, {
            text: Q.Z.Messages.NEW,
            color: m.Z.BG_BRAND,
            className: J.newBadge
          })
        ]
      }),
      C && (0, i.jsx)(U.Z0, {})
    ]
  });
}
  }, _);
}

function en(e) {
  let {
channel: t,
message: n,
canCopy: l,
canPin: s,
canDelete: r,
canReport: o,
canEdit: m,
canPublish: C,
canReact: g,
canConfigureJoin: x,
canReply: T,
canStartThread: v,
canViewThread: L,
canForward: U,
isExpanded: Y,
showMoreUtilities: J,
showEmojiPicker: $,
showMessageRemindersActions: en,
isMessageReminder: ei,
showMessageBookmarksActions: el,
isMessageBookmark: es,
setPopout: er,
hasDeveloperMode: eo,
isGuildInviteReminder: ec,
isFocused: ed
  } = function(e) {
let {
  channel: t,
  message: n,
  showEmojiPicker: i,
  showEmojiBurstPicker: a,
  showMoreUtilities: l,
  setPopout: s,
  isFocused: r
} = e, {
  author: o
} = n, d = (0, c.e7)([O.Z], () => O.Z.getGuild(t.guild_id), [t.guild_id]), u = (0, c.e7)([j.default], () => j.default.getId()), m = (0, b.$R)(t), _ = (0, b.Gu)(t), C = R.nc.useSetting(), g = R.Sb.useSetting(), x = (0, c.e7)([y.Z], () => null == t.guild_id || y.Z.canChatInGuild(t.guild_id), [t]), {
  canManageMessages: T,
  canAddNewReactions: v
} = (0, c.cj)([D.Z], () => ({
  canAddNewReactions: x && D.Z.can(q.Plq.ADD_REACTIONS, t),
  canManageMessages: D.Z.can(q.Plq.MANAGE_MESSAGES, t)
}), [
  t,
  x
]), L = (0, N.U)(t, n), k = (0, b.NE)(t, n), U = (0, b.Ek)(n), w = (0, c.e7)([I.Z], () => null != t.guild_id && I.Z.isLurking(t.guild_id), [t]), W = (0, c.e7)([P.ZP], () => null != t.guild_id && P.ZP.isCurrentUserGuest(t.guild_id), [t]), z = o.id === u, Y = (T || n.canDeleteOwnMessage(u)) && m && !q.V$x.UNDELETABLE.has(n.type);
n.type === q.uaV.AUTO_MODERATION_ACTION && (Y = Y && T);
let X = (0, H.a4)(n),
  Q = (0, V.Z)(n, t, T),
  J = !t.isSystemDM() && (0, G.Z)(n, u) && m && !_,
  {
    disableReactionCreates: $
  } = (0, F.Z)({
    channel: t,
    canChat: x,
    renderReactions: C,
    canAddNewReactions: v,
    isLurking: w,
    isGuest: W,
    isActiveChannelOrUnarchivableThread: m
  }),
  ee = t.type === q.d4z.GUILD_ANNOUNCEMENT && null != d && d.hasFeature(q.oNc.NEWS) && (z || T) && (0, p.Z)(n),
  et = t.getGuildId(),
  en = null != et && (n.type === q.uaV.USER_JOIN || n.type === q.uaV.GUILD_INVITE_REMINDER) && D.Z.canWithPartialContext(q.Plq.MANAGE_GUILD, {
    guildId: et
  }),
  {
    canForwardMessages: ei
  } = f.w.useExperiment({
    location: 'useMessageUtilitiesProps'
  }, {
    autoTrackExposure: !1
  }),
  ea = (0, E.a)(n),
  {
    showReminders: el
  } = A.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  es = (0, c.e7)([M.Z], () => M.Z.isMessageReminder(n.id)),
  {
    enabled: er
  } = S.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  eo = (0, c.e7)([Z.Z], () => Z.Z.isMessageBookmarked(n.id)),
  ec = (0, K.Z)(),
  ed = (0, c.e7)([h.Z], () => h.Z.keyboardModeEnabled);
return {
  channel: t,
  message: n,
  canPin: Q,
  canEdit: J,
  canDelete: Y,
  canReport: X,
  canReply: L,
  canStartThread: k,
  canViewThread: U,
  canForward: ei && ea,
  canCopy: B.wS,
  hasDeveloperMode: g,
  canReact: !$ && C,
  canPublish: ee,
  canConfigureJoin: en,
  isExpanded: ec && !ed && !i && !a && !l,
  showEmojiPicker: i,
  showEmojiBurstPicker: a,
  showMoreUtilities: l,
  showMessageRemindersActions: el,
  isMessageReminder: es,
  showMessageBookmarksActions: er,
  isMessageBookmark: eo,
  setPopout: s,
  isFocused: r,
  isGuildInviteReminder: n.type === q.uaV.GUILD_INVITE_REMINDER
};
  }(e), eu = a.useCallback(() => {
!J && w.default.track(q.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
  message_id: n.id,
  channel: n.channel_id
}), er({
  moreUtilities: !J
});
  }, [
J,
er,
n
  ]), eh = a.useCallback(() => {
er({
  emojiPicker: !$
});
  }, [
$,
er
  ]), ep = (0, b.$R)(t), em = n.hasFlag(q.iLy.CROSSPOSTED), [e_, ef] = (0, _.c)(U ? [d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []), eE = e_ === d.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE, [eC, eg] = a.useState(!1), eI = a.useCallback(() => {
eg(!0);
  }, []), ex = a.useCallback(() => {
eg(!1);
  }, []), eT = a.useCallback((e, t) => {
ef(X.L.TAKE_ACTION), (0, W.ts)(e, t);
  }, [ef]);
  return (0, i.jsxs)(i.Fragment, {
children: [
  Y ? (0, i.jsxs)(i.Fragment, {
    children: [
      l && eo ? et({
        key: 'copy-id',
        channel: t,
        message: n,
        label: Q.Z.Messages.COPY_ID_MESSAGE,
        icon: u.IdIcon,
        onClick: W.F4
      }) : null,
      l && !ec ? et({
        key: 'copy-link',
        channel: t,
        message: n,
        label: Q.Z.Messages.COPY_LINK,
        icon: u.LinkIcon,
        onClick: W.fB
      }) : null,
      x ? et({
        key: 'configure',
        channel: t,
        message: n,
        label: Q.Z.Messages.CONFIGURE,
        icon: u.CircleQuestionIcon,
        onClick: W.zW
      }) : null,
      en ? et({
        key: 'mark-reminder',
        channel: t,
        message: n,
        label: ei ? Q.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : Q.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: ei ? (0, u.makeIconCompat)(k.Z) : u.ListBulletsIcon,
        onClick: ei ? W.l9 : W.W1
      }) : null,
      ep ? et({
        key: 'mark-unread',
        channel: t,
        message: n,
        label: Q.Z.Messages.MARK_UNREAD,
        icon: u.ChatMarkUnreadIcon,
        onClick: W.B8
      }) : null,
      el ? et({
        key: 'bookmark',
        channel: t,
        message: n,
        label: es ? Q.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK : Q.Z.Messages.MESSAGE_BOOKMARKS_BOOKMARK,
        icon: u.InboxIcon,
        onClick: es ? W.eM : W.dF
      }) : null,
      s ? et({
        key: 'pin',
        channel: t,
        message: n,
        label: n.pinned ? Q.Z.Messages.UNPIN_MESSAGE : Q.Z.Messages.PIN_MESSAGE,
        icon: u.PinIcon,
        onClick: W.rY
      }) : null,
      v && U ? et({
        key: 'thread',
        channel: t,
        message: n,
        label: Q.Z.Messages.CREATE_THREAD,
        icon: u.ThreadIcon,
        onClick: W.gK
      }) : null,
      T && m ? et({
        key: 'reply-self',
        channel: t,
        message: n,
        label: Q.Z.Messages.MESSAGE_ACTION_REPLY,
        icon: u.ArrowAngleLeftUpIcon,
        onClick: W.HH
      }) : null
    ]
  }) : null,
  g && !ec ? (0, i.jsx)(z.Z, {
    channel: t,
    message: n,
    togglePopout: eh,
    renderEmojiPicker: ea,
    shouldShow: $,
    isFocused: ed
  }) : null,
  T && !m ? et({
    key: 'reply-other',
    channel: t,
    message: n,
    label: Q.Z.Messages.MESSAGE_ACTION_REPLY,
    icon: u.ArrowAngleLeftUpIcon,
    onClick: W.HH
  }) : null,
  m ? et({
    key: 'edit',
    channel: t,
    message: n,
    label: Q.Z.Messages.EDIT,
    icon: u.PencilIcon,
    onClick: W.Hd
  }) : null,
  U ? et({
    key: 'forward',
    channel: t,
    message: n,
    label: Q.Z.Messages.MESSAGE_ACTION_FORWARD,
    icon: u.ChatArrowRightIcon,
    onClick: eT,
    onTooltipShow: eI,
    onTooltipHide: ex,
    showNewBadge: !eC && eE
  }) : null,
  v && !U ? et({
    key: 'thread',
    channel: t,
    message: n,
    label: Q.Z.Messages.CREATE_THREAD,
    icon: u.ThreadIcon,
    onClick: W.gK
  }) : null,
  !v && L ? et({
    key: 'view-thread',
    channel: t,
    message: n,
    label: Q.Z.Messages.VIEW_THREAD,
    icon: u.ThreadIcon,
    onClick: W.qe
  }) : null,
  C ? et({
    key: 'publish',
    channel: t,
    message: n,
    label: em ? Q.Z.Messages.NEWS_CHANNEL_PUBLISHED : Q.Z.Messages.NEWS_CHANNEL_PUBLISH,
    icon: u.AnnouncementsIcon,
    onClick: W.Xl,
    disabled: em
  }) : null,
  r && (ec || Y) ? et({
    key: 'delete',
    channel: t,
    message: n,
    label: Q.Z.Messages.DELETE,
    icon: u.TrashIcon,
    onClick: W.$Z,
    dangerous: !0,
    separator: !Y
  }) : null,
  Y && r ? null : (0, i.jsx)(u.Popout, {
    renderPopout: e => {
      let {
        updatePosition: a,
        closePopout: l
      } = e;
      return (0, i.jsx)(ee, {
        channel: t,
        message: n,
        canReport: o,
        onClose: l,
        updatePosition: a
      });
    },
    shouldShow: J,
    onRequestClose: eu,
    position: 'left',
    align: 'top',
    animation: u.Popout.Animation.NONE,
    children: (e, i) => {
      let {
        onClick: a,
        ...l
      } = e, {
        isShown: s
      } = i;
      return et({
        key: 'more',
        label: Q.Z.Messages.MORE,
        icon: u.MoreHorizontalIcon,
        channel: t,
        message: n,
        selected: s,
        onClick: eu,
        ...l
      });
    }
  })
]
  });
}

function ei(e) {
  let {
channel: t,
message: n
  } = e, a = (0, c.e7)([C.Z], () => null != C.Z.getMessage(n.id), [n.id]), l = null == n.interaction || null != n.interactionData && (0, g.$s)(n.interactionData);
  return (0, i.jsxs)(i.Fragment, {
children: [
  !a && l && et({
    key: 'retry',
    label: Q.Z.Messages.RETRY,
    icon: u.RetryIcon,
    channel: t,
    message: n,
    onClick: W.mG
  }),
  et({
    key: 'delete-usent',
    label: Q.Z.Messages.DELETE,
    icon: u.TrashIcon,
    channel: t,
    message: n,
    onClick: W.$Z
  })
]
  });
}

function ea(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
l = {
  openPopoutType: 'message_reaction_emoji_picker',
  ...a && {
    openPopoutType: 'message_super_reaction_emoji_picker',
    page: null != e.getGuildId() ? q.ZY5.GUILD_CHANNEL : q.ZY5.DM_CHANNEL,
    section: (0, T.s4)(e),
    object: q.qAy.EMOJI_REACTION_PICKER_POPOUT
  }
};
  return (0, i.jsx)(v.$, {
channel: e,
closePopout: n,
onSelectEmoji: (i, a, l) => {
  ! function(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    null != e && (0, x.rU)(t.id, n.id, (0, T.g1)(e), void 0, {
      burst: i
    });
  }(i, e, t, l), a && (l ? o()(n, 150)() : n());
},
analyticsOverride: l,
messageId: t.id
  });
}
t.Z = a.memo(function(e) {
  let {
channel: t,
message: n,
isHeader: a
  } = e, l = (0, c.e7)([L.Z], () => L.Z.isEditing(t.id, n.id), [
t.id,
n.id
  ]), r = function(e) {
let {
  channel: t,
  message: n
} = e;
return n.state === q.yb.SEND_FAILED ? (0, i.jsx)(ei, {
  channel: t,
  message: n
}) : null;
  }(e), o = function(e) {
let {
  message: t
} = e;
return t.state !== q.yb.SEND_FAILED ? (0, i.jsx)(en, {
  ...e
}) : null;
  }(e);
  return l || null == r && null == o ? null : (0, i.jsx)('div', {
className: s()(e.className, {
  [J.container]: !0,
  [J.isHeader]: a
}),
onClick: $,
onContextMenu: $,
role: 'group',
'aria-label': Q.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
children: (0, i.jsxs)(U.ZP, {
  className: s()(e.innerClassName, J.inner),
  children: [
    r,
    o
  ]
})
  });
});