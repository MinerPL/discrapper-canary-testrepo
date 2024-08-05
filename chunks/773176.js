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
  p = n(607070),
  m = n(110630),
  _ = n(706140),
  f = n(543241),
  E = n(689789),
  g = n(346610),
  C = n(868643),
  I = n(223606),
  x = n(188597),
  T = n(41776),
  N = n(222677),
  v = n(995774),
  S = n(931651),
  Z = n(280845),
  A = n(768943),
  M = n(121254),
  b = n(742989),
  R = n(665906),
  j = n(695346),
  L = n(314897),
  P = n(323873),
  O = n(271383),
  y = n(430824),
  D = n(607744),
  k = n(496675),
  U = n(448239),
  w = n(626135),
  B = n(572004),
  H = n(970257),
  G = n(418476),
  V = n(151007),
  F = n(432376),
  W = n(373662),
  z = n(917990),
  Y = n(996861),
  K = n(603490),
  q = n(225138),
  X = n(717680),
  Q = n(981631),
  J = n(921944),
  $ = n(689938),
  ee = n(838764),
  et = n(21620);

function en(e) {
  e.stopPropagation();
}

function ei(e) {
  let {
message: t,
channel: n,
canReport: i,
onClose: a,
updatePosition: s
  } = e;
  return (0, q.useMessageMenu)({
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
ariaLabel: $.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  });
}
let ea = a.memo(function(e) {
  let {
channel: t,
message: n
  } = e, a = (0, f.wC)(t.guild_id), s = (0, f.q5)(t.guild_id), {
canSplitFrecencyList: l
  } = (0, E.S)({
location: 'ReactionSuggestions',
autoTrackExposure: !0
  }), r = l ? s.slice(0, 3) : a.slice(0, 3), o = n.reactions.filter(e => e.me);
  return (0, i.jsx)(i.Fragment, {
children: r.map(e => {
  var a;
  let s = o.find(t => (0, v.ir)(t.emoji, e)),
    l = null != s ? $.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE : $.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD,
    r = null != s ? $.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE_ALLY.format({
      emojiName: e.name
    }) : $.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD_ALLY.format({
      emojiName: e.name
    });
  return (0, i.jsx)(W.s, {
    tooltipText: (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(d.Text, {
          variant: 'text-sm/medium',
          color: 'header-primary',
          className: ee.emojiTooltipText,
          children: ':'.concat(e.name, ':')
        }),
        (0, i.jsx)(d.Text, {
          variant: 'text-xs/normal',
          color: 'header-secondary',
          className: ee.emojiTooltipText,
          children: l
        })
      ]
    }),
    label: r,
    onClick: () => er({
      type: null != s ? 'remove' : 'add',
      emoji: e,
      channel: t,
      message: n,
      location: N.TW.MESSAGE_HOVER_BAR
    }),
    buttonClassName: et.reactionSuggestion,
    children: (0, i.jsx)(h.Z, {
      emojiId: e.id,
      emojiName: null == e.id ? e.surrogates : e.name,
      animated: e.animated,
      size: 'reaction',
      alt: ''
    })
  }, ''.concat(null !== (a = e.id) && void 0 !== a ? a : 0, ':').concat(e.name));
})
  });
});

function es(e) {
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
canConfigureJoin: I,
canReply: x,
canStartThread: N,
canViewThread: v,
canForward: S,
isExpanded: P,
showMoreUtilities: q,
showEmojiPicker: ee,
showMessageRemindersActions: et,
isMessageReminder: en,
showMessageBookmarksActions: es,
isMessageBookmark: el,
setPopout: er,
hasDeveloperMode: ec,
isGuildInviteReminder: eu,
isFocused: ed
  } = function(e) {
let {
  channel: t,
  message: n,
  showEmojiPicker: i,
  showEmojiBurstPicker: a,
  showMoreUtilities: s,
  setPopout: l,
  isFocused: r
} = e, {
  author: o
} = n, u = (0, c.e7)([y.Z], () => y.Z.getGuild(t.guild_id), [t.guild_id]), d = (0, c.e7)([L.default], () => L.default.getId()), h = (0, R.$R)(t), _ = (0, R.Gu)(t), f = j.nc.useSetting(), E = j.Sb.useSetting(), I = (0, c.e7)([D.Z], () => null == t.guild_id || D.Z.canChatInGuild(t.guild_id), [t]), {
  canManageMessages: x,
  canAddNewReactions: N
} = (0, c.cj)([k.Z], () => ({
  canAddNewReactions: I && k.Z.can(Q.Plq.ADD_REACTIONS, t),
  canManageMessages: k.Z.can(Q.Plq.MANAGE_MESSAGES, t)
}), [
  t,
  I
]), v = (0, Z.U)(t, n), S = (0, R.NE)(t, n), P = (0, R.Ek)(n), U = (0, c.e7)([T.Z], () => null != t.guild_id && T.Z.isLurking(t.guild_id), [t]), w = (0, c.e7)([O.ZP], () => null != t.guild_id && O.ZP.isCurrentUserGuest(t.guild_id), [t]), W = o.id === d, z = (x || n.canDeleteOwnMessage(d)) && h && !Q.V$x.UNDELETABLE.has(n.type);
n.type === Q.uaV.AUTO_MODERATION_ACTION && (z = z && x);
let Y = (0, H.a4)(n),
  K = (0, V.Z)(n, t, x),
  q = !t.isSystemDM() && (0, G.Z)(n, d) && h && !_,
  {
    disableReactionCreates: J
  } = (0, F.Z)({
    channel: t,
    canChat: I,
    renderReactions: f,
    canAddNewReactions: N,
    isLurking: U,
    isGuest: w,
    isActiveChannelOrUnarchivableThread: h
  }),
  $ = t.type === Q.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(Q.oNc.NEWS) && (W || x) && (0, m.Z)(n),
  ee = t.getGuildId(),
  et = null != ee && (n.type === Q.uaV.USER_JOIN || n.type === Q.uaV.GUILD_INVITE_REMINDER) && k.Z.canWithPartialContext(Q.Plq.MANAGE_GUILD, {
    guildId: ee
  }),
  {
    canForwardMessages: en
  } = (0, g.yk)({
    location: 'useMessageUtilitiesProps'
  }, {
    autoTrackExposure: !1
  }),
  ei = (0, C.a)(n),
  {
    showReminders: ea
  } = b.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  {
    enabled: es
  } = M.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  [el, er] = (0, c.Wu)([A.Z], () => [
    A.Z.isMessageReminder(n.id),
    A.Z.isMessageBookmarked(n.id)
  ]),
  eo = (0, X.Z)(),
  ec = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
return {
  channel: t,
  message: n,
  canPin: K,
  canEdit: q,
  canDelete: z,
  canReport: Y,
  canReply: v,
  canStartThread: S,
  canViewThread: P,
  canForward: en && ei,
  canCopy: B.wS,
  hasDeveloperMode: E,
  canReact: !J && f,
  canPublish: $,
  canConfigureJoin: et,
  isExpanded: eo && !ec && !i && !a && !s,
  showEmojiPicker: i,
  showEmojiBurstPicker: a,
  showMoreUtilities: s,
  showMessageRemindersActions: ea,
  isMessageReminder: el,
  showMessageBookmarksActions: es,
  isMessageBookmark: er,
  setPopout: l,
  isFocused: r,
  isGuildInviteReminder: n.type === Q.uaV.GUILD_INVITE_REMINDER
};
  }(e), eh = a.useCallback(() => {
!q && w.default.track(Q.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
  message_id: n.id,
  channel: n.channel_id
}), er({
  moreUtilities: !q
});
  }, [
q,
er,
n
  ]), ep = a.useCallback(() => {
er({
  emojiPicker: !ee
});
  }, [
ee,
er
  ]), em = (0, R.$R)(t), e_ = n.hasFlag(Q.iLy.CROSSPOSTED), [ef, eE] = (0, _.c)(S ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []), eg = ef === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE, [eC, eI] = a.useState(!1), ex = a.useCallback(() => {
eI(!0);
  }, []), eT = a.useCallback(() => {
eI(!1);
  }, []), eN = a.useCallback((e, t) => {
eE(J.L.TAKE_ACTION), (0, Y.ts)(e, t);
  }, [eE]), {
canShowReactionsOnMessageHover: ev
  } = z.Z.useExperiment({
location: 'ExpandingButtons'
  }, {
autoTrackExposure: !0
  });
  return (0, i.jsxs)(i.Fragment, {
children: [
  P ? (0, i.jsxs)(i.Fragment, {
    children: [
      s && ec ? (0, i.jsx)(W.s, {
        label: $.Z.Messages.COPY_ID_MESSAGE,
        icon: d.IdIcon,
        onClick: e => (0, Y.F4)(t, n, e)
      }, 'copy-id') : null,
      s && !eu ? (0, i.jsx)(W.s, {
        label: $.Z.Messages.COPY_LINK,
        icon: d.LinkIcon,
        onClick: () => (0, Y.fB)(t, n)
      }, 'copy-link') : null,
      I ? (0, i.jsx)(W.s, {
        label: $.Z.Messages.CONFIGURE,
        icon: d.CircleQuestionIcon,
        onClick: () => (0, Y.zW)(t)
      }, 'configure') : null,
      et ? (0, i.jsx)(W.s, {
        label: en ? $.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : $.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
        icon: en ? (0, d.makeIconCompat)(U.Z) : d.ListBulletsIcon,
        onClick: () => en ? (0, Y.l9)(t, n) : (0, Y.W1)(t, n)
      }, 'mark-reminder') : null,
      em ? (0, i.jsx)(W.s, {
        label: $.Z.Messages.MARK_UNREAD,
        icon: d.ChatMarkUnreadIcon,
        onClick: () => (0, Y.B8)(t, n)
      }, 'mark-unread') : null,
      es ? (0, i.jsx)(W.s, {
        label: el ? $.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK : $.Z.Messages.MESSAGE_BOOKMARKS_BOOKMARK,
        icon: el ? d.BookmarkIcon : d.BookmarkOutlineIcon,
        onClick: () => el ? (0, Y.eM)(t, n) : (0, Y.dF)(t, n)
      }, 'bookmark') : null,
      l ? (0, i.jsx)(W.s, {
        label: n.pinned ? $.Z.Messages.UNPIN_MESSAGE : $.Z.Messages.PIN_MESSAGE,
        icon: d.PinIcon,
        onClick: e => (0, Y.rY)(t, n, e)
      }, 'pin') : null,
      N && S ? (0, i.jsx)(W.s, {
        label: $.Z.Messages.CREATE_THREAD,
        icon: d.ThreadIcon,
        onClick: () => (0, Y.gK)(t, n)
      }, 'thread') : null,
      x && h ? (0, i.jsx)(W.s, {
        label: $.Z.Messages.MESSAGE_ACTION_REPLY,
        icon: d.ArrowAngleLeftUpIcon,
        onClick: e => (0, Y.HH)(t, n, e)
      }, 'reply-self') : null
    ]
  }) : null,
  E && !eu ? (0, i.jsxs)(i.Fragment, {
    children: [
      ev && !P ? (0, i.jsx)(ea, {
        channel: t,
        message: n
      }) : null,
      (0, i.jsx)(K.Z, {
        togglePopout: ep,
        renderEmojiPicker: eo,
        shouldShow: ee,
        isFocused: ed,
        channel: t,
        message: n
      })
    ]
  }) : null,
  x && !h ? (0, i.jsx)(W.s, {
    label: $.Z.Messages.MESSAGE_ACTION_REPLY,
    icon: d.ArrowAngleLeftUpIcon,
    onClick: e => (0, Y.HH)(t, n, e)
  }, 'reply-other') : null,
  h ? (0, i.jsx)(W.s, {
    label: $.Z.Messages.EDIT,
    icon: d.PencilIcon,
    onClick: () => (0, Y.Hd)(t, n)
  }, 'edit') : null,
  S ? (0, i.jsx)(W.s, {
    label: $.Z.Messages.MESSAGE_ACTION_FORWARD,
    icon: d.ChatArrowRightIcon,
    onClick: () => eN(t, n),
    onTooltipShow: ex,
    onTooltipHide: eT,
    showNewBadge: !eC && eg
  }, 'forward') : null,
  N && !S ? (0, i.jsx)(W.s, {
    label: $.Z.Messages.CREATE_THREAD,
    icon: d.ThreadIcon,
    onClick: () => (0, Y.gK)(t, n)
  }, 'thread') : null,
  !N && v ? (0, i.jsx)(W.s, {
    label: $.Z.Messages.VIEW_THREAD,
    icon: d.ThreadIcon,
    onClick: () => (0, Y.qe)(t, n)
  }, 'view-thread') : null,
  f ? (0, i.jsx)(W.s, {
    label: e_ ? $.Z.Messages.NEWS_CHANNEL_PUBLISHED : $.Z.Messages.NEWS_CHANNEL_PUBLISH,
    icon: d.AnnouncementsIcon,
    onClick: () => (0, Y.Xl)(t, n),
    disabled: e_
  }, 'publish') : null,
  r && (eu || P) ? (0, i.jsx)(W.s, {
    label: $.Z.Messages.DELETE,
    icon: d.TrashIcon,
    onClick: e => (0, Y.$Z)(t, n, e),
    dangerous: !0,
    separator: !P
  }, 'delete') : null,
  P && r ? null : (0, i.jsx)(d.Popout, {
    renderPopout: e => {
      let {
        updatePosition: a,
        closePopout: s
      } = e;
      return (0, i.jsx)(ei, {
        channel: t,
        message: n,
        canReport: o,
        onClose: s,
        updatePosition: a
      });
    },
    shouldShow: q,
    onRequestClose: eh,
    position: 'left',
    align: 'top',
    animation: d.Popout.Animation.NONE,
    children: (e, t) => {
      let {
        onClick: n,
        ...a
      } = e, {
        isShown: s
      } = t;
      return (0, i.jsx)(W.s, {
        label: $.Z.Messages.MORE,
        icon: d.MoreHorizontalIcon,
        selected: s,
        onClick: eh,
        ...a
      }, 'more');
    }
  })
]
  });
}

function el(e) {
  let {
channel: t,
message: n
  } = e, a = (0, c.e7)([I.Z], () => null != I.Z.getMessage(n.id), [n.id]), s = null == n.interaction || null != n.interactionData && (0, x.$s)(n.interactionData);
  return (0, i.jsxs)(i.Fragment, {
children: [
  !a && s && (0, i.jsx)(W.s, {
    label: $.Z.Messages.RETRY,
    icon: d.RetryIcon,
    onClick: () => (0, Y.mG)(t, n)
  }, 'retry'),
  (0, i.jsx)(W.s, {
    label: $.Z.Messages.DELETE,
    icon: d.TrashIcon,
    onClick: e => (0, Y.$Z)(t, n, e)
  }, 'delete-usent')
]
  });
}

function er(e) {
  let {
type: t,
emoji: n,
channel: i,
message: a,
location: s,
isBurst: l = !1
  } = e;
  if (null == n)
return;
  let r = (0, v.g1)(n);
  'add' === t ? (0, N.rU)(i.id, a.id, r, s, {
burst: l
  }) : (0, N.WO)({
channelId: i.id,
messageId: a.id,
emoji: r,
location: s,
options: {
  burst: l
}
  });
}

function eo(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
s = {
  openPopoutType: 'message_reaction_emoji_picker',
  ...a && {
    openPopoutType: 'message_super_reaction_emoji_picker',
    page: null != e.getGuildId() ? Q.ZY5.GUILD_CHANNEL : Q.ZY5.DM_CHANNEL,
    section: (0, v.s4)(e),
    object: Q.qAy.EMOJI_REACTION_PICKER_POPOUT
  }
};
  return (0, i.jsx)(S.$, {
channel: e,
closePopout: n,
onSelectEmoji: (i, a, s) => {
  er({
    type: 'add',
    emoji: i,
    channel: e,
    message: t,
    location: N.TW.MESSAGE_REACTION_PICKER,
    isBurst: s
  }), a && (s ? o()(n, 150)() : n());
},
analyticsOverride: s,
messageId: t.id
  });
}
t.Z = a.memo(function(e) {
  let {
channel: t,
message: n,
isHeader: a
  } = e, s = (0, c.e7)([P.Z], () => P.Z.isEditing(t.id, n.id), [
t.id,
n.id
  ]), r = function(e) {
let {
  channel: t,
  message: n
} = e;
return n.state === Q.yb.SEND_FAILED ? (0, i.jsx)(el, {
  channel: t,
  message: n
}) : null;
  }(e), o = function(e) {
let {
  message: t
} = e;
return t.state !== Q.yb.SEND_FAILED ? (0, i.jsx)(es, {
  ...e
}) : null;
  }(e);
  return s || null == r && null == o ? null : (0, i.jsx)('div', {
className: l()(e.className, {
  [ee.container]: !0,
  [ee.isHeader]: a
}),
onClick: en,
onContextMenu: en,
role: 'group',
'aria-label': $.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
children: (0, i.jsxs)(W.Z, {
  className: e.innerClassName,
  children: [
    r,
    o
  ]
})
  });
});