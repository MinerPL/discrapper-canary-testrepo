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
  R = n(742989),
  j = n(665906),
  L = n(695346),
  P = n(314897),
  O = n(323873),
  y = n(271383),
  D = n(430824),
  k = n(607744),
  U = n(496675),
  w = n(448239),
  B = n(626135),
  H = n(572004),
  G = n(970257),
  V = n(364742),
  F = n(418476),
  W = n(151007),
  z = n(432376),
  Y = n(373662),
  K = n(996861),
  q = n(603490),
  X = n(225138),
  Q = n(717680),
  J = n(981631),
  $ = n(921944),
  ee = n(689938),
  et = n(838764),
  en = n(21620);

function ei(e) {
  e.stopPropagation();
}

function ea(e) {
  let {
message: t,
channel: n,
canReport: i,
onClose: a,
updatePosition: s
  } = e;
  return (0, X.useMessageMenu)({
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
ariaLabel: ee.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL
  });
}
let es = a.memo(function(e) {
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
  let s = o.find(t => (0, S.ir)(t.emoji, e)),
    l = null != s ? ee.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE : ee.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD,
    r = null != s ? ee.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_REMOVE_ALLY.format({
      emojiName: e.name
    }) : ee.Z.Messages.MESSAGE_HOVER_BAR_REACTION_SUGGESTION_ADD_ALLY.format({
      emojiName: e.name
    });
  return (0, i.jsx)(Y.sF, {
    tooltipText: (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(d.Text, {
          variant: 'text-sm/medium',
          color: 'header-primary',
          className: et.emojiTooltipText,
          children: ':'.concat(e.name, ':')
        }),
        (0, i.jsx)(d.Text, {
          variant: 'text-xs/normal',
          color: 'header-secondary',
          className: et.emojiTooltipText,
          children: l
        })
      ]
    }),
    label: r,
    onClick: () => eo({
      type: null != s ? 'remove' : 'add',
      emoji: e,
      channel: t,
      message: n,
      location: v.TW.MESSAGE_HOVER_BAR
    }),
    buttonClassName: en.reactionSuggestion,
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

function el(e) {
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
isExpanded: O,
showMoreUtilities: X,
showEmojiPicker: et,
showMessageRemindersActions: ei,
isMessageReminder: el,
showMessageBookmarksActions: er,
isMessageBookmark: eo,
setPopout: eu,
hasDeveloperMode: ed,
isGuildInviteReminder: eh,
isFocused: ep
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
} = n, u = (0, c.e7)([D.Z], () => D.Z.getGuild(t.guild_id), [t.guild_id]), d = (0, c.e7)([P.default], () => P.default.getId()), h = (0, j.$R)(t), _ = (0, j.Gu)(t), f = L.nc.useSetting(), E = L.Sb.useSetting(), I = (0, c.e7)([k.Z], () => null == t.guild_id || k.Z.canChatInGuild(t.guild_id), [t]), {
  canManageMessages: x,
  canAddNewReactions: T
} = (0, c.cj)([U.Z], () => ({
  canAddNewReactions: I && U.Z.can(J.Plq.ADD_REACTIONS, t),
  canManageMessages: U.Z.can(J.Plq.MANAGE_MESSAGES, t)
}), [
  t,
  I
]), v = (0, A.U)(t, n), S = (0, j.NE)(t, n), Z = (0, j.Ek)(n), O = (0, c.e7)([N.Z], () => null != t.guild_id && N.Z.isLurking(t.guild_id), [t]), w = (0, c.e7)([y.ZP], () => null != t.guild_id && y.ZP.isCurrentUserGuest(t.guild_id), [t]), B = o.id === d, V = (x || n.canDeleteOwnMessage(d)) && h && !J.V$x.UNDELETABLE.has(n.type);
n.type === J.uaV.AUTO_MODERATION_ACTION && (V = V && x);
let Y = (0, G.a4)(n),
  K = (0, W.Z)(n, t, x),
  q = !t.isSystemDM() && (0, F.Z)(n, d) && h && !_,
  {
    disableReactionCreates: X
  } = (0, z.Z)({
    channel: t,
    canChat: I,
    renderReactions: f,
    canAddNewReactions: T,
    isLurking: O,
    isGuest: w,
    isActiveChannelOrUnarchivableThread: h
  }),
  $ = t.type === J.d4z.GUILD_ANNOUNCEMENT && null != u && u.hasFeature(J.oNc.NEWS) && (B || x) && (0, m.Z)(n),
  ee = t.getGuildId(),
  et = null != ee && (n.type === J.uaV.USER_JOIN || n.type === J.uaV.GUILD_INVITE_REMINDER) && U.Z.canWithPartialContext(J.Plq.MANAGE_GUILD, {
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
  } = R.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  {
    enabled: es
  } = b.Z.useExperiment({
    location: 'message_utilities'
  }, {
    autoTrackExposure: !1
  }),
  [el, er] = (0, c.Wu)([M.Z], () => [
    M.Z.isMessageReminder(n.id),
    M.Z.isMessageBookmarked(n.id)
  ]),
  eo = (0, Q.Z)(),
  ec = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled);
return {
  channel: t,
  message: n,
  canPin: K,
  canEdit: q,
  canDelete: V,
  canReport: Y,
  canReply: v,
  canStartThread: S,
  canViewThread: Z,
  canForward: en && ei,
  canCopy: H.wS,
  hasDeveloperMode: E,
  canReact: !X && f,
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
  isGuildInviteReminder: n.type === J.uaV.GUILD_INVITE_REMINDER
};
  }(e), em = a.useCallback(() => {
!X && B.default.track(J.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
  message_id: n.id,
  channel: n.channel_id
}), eu({
  moreUtilities: !X
});
  }, [
X,
eu,
n
  ]), e_ = a.useCallback(() => {
eu({
  emojiPicker: !et
});
  }, [
et,
eu
  ]), ef = (0, j.$R)(t), eE = n.hasFlag(J.iLy.CROSSPOSTED), [eg, eC] = (0, _.c)(Z ? [u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE] : []), eI = eg === u.z.MESSAGE_FORWARDING_DESKTOP_UTILITIES_NEW_BADGE, [ex, eT] = a.useState(!1), eN = a.useCallback(() => {
eT(!0);
  }, []), ev = a.useCallback(() => {
eT(!1);
  }, []), eS = a.useCallback((e, t) => {
eC($.L.TAKE_ACTION), (0, K.ts)(e, t);
  }, [eC]), {
canShowReactionsOnMessageHover: eZ
  } = V.Z.useExperiment({
location: 'ExpandingButtons'
  }, {
autoTrackExposure: !0
  });
  return (0, i.jsxs)(i.Fragment, {
children: [
  O ? (0, i.jsxs)(i.Fragment, {
    children: [
      s && ed ? (0, i.jsx)(Y.sF, {
        label: ee.Z.Messages.COPY_ID_MESSAGE,
        icon: d.IdIcon,
        onClick: e => (0, K.F4)(t, n, e)
      }, 'copy-id') : null,
      s && !eh ? (0, i.jsx)(Y.sF, {
        label: ee.Z.Messages.COPY_LINK,
        icon: d.LinkIcon,
        onClick: () => (0, K.fB)(t, n)
      }, 'copy-link') : null,
      x ? (0, i.jsx)(Y.sF, {
        label: ee.Z.Messages.CONFIGURE,
        icon: d.CircleQuestionIcon,
        onClick: () => (0, K.zW)(t)
      }, 'configure') : null,
      ei ? (0, i.jsx)(Y.sF, {
        label: el ? ee.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : ee.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
        icon: el ? (0, d.makeIconCompat)(w.Z) : d.ListBulletsIcon,
        onClick: () => el ? (0, K.l9)(t, n) : (0, K.W1)(t, n)
      }, 'mark-reminder') : null,
      ef ? (0, i.jsx)(Y.sF, {
        label: ee.Z.Messages.MARK_UNREAD,
        icon: d.ChatMarkUnreadIcon,
        onClick: () => (0, K.B8)(t, n)
      }, 'mark-unread') : null,
      er ? (0, i.jsx)(Y.sF, {
        label: eo ? ee.Z.Messages.MESSAGE_BOOKMARKS_REMOVE_BOOKMARK : ee.Z.Messages.MESSAGE_BOOKMARKS_BOOKMARK,
        icon: eo ? d.BookmarkIcon : d.BookmarkOutlineIcon,
        onClick: () => eo ? (0, K.eM)(t, n) : (0, K.dF)(t, n)
      }, 'bookmark') : null,
      l ? (0, i.jsx)(Y.sF, {
        label: n.pinned ? ee.Z.Messages.UNPIN_MESSAGE : ee.Z.Messages.PIN_MESSAGE,
        icon: d.PinIcon,
        onClick: e => (0, K.rY)(t, n, e)
      }, 'pin') : null,
      v && Z ? (0, i.jsx)(Y.sF, {
        label: ee.Z.Messages.CREATE_THREAD,
        icon: d.ThreadIcon,
        onClick: () => (0, K.gK)(t, n)
      }, 'thread') : null,
      T && h ? (0, i.jsx)(Y.sF, {
        label: ee.Z.Messages.MESSAGE_ACTION_REPLY,
        icon: d.ArrowAngleLeftUpIcon,
        onClick: e => (0, K.HH)(t, n, e)
      }, 'reply-self') : null
    ]
  }) : null,
  E && !eh ? (0, i.jsxs)(i.Fragment, {
    children: [
      eZ && !O ? (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(es, {
            channel: t,
            message: n
          }),
          (0, i.jsx)(Y.fO, {
            className: en.separator
          })
        ]
      }) : null,
      (0, i.jsx)(q.Z, {
        togglePopout: e_,
        renderEmojiPicker: ec,
        shouldShow: et,
        isFocused: ep,
        channel: t,
        message: n
      })
    ]
  }) : null,
  T && !h ? (0, i.jsx)(Y.sF, {
    label: ee.Z.Messages.MESSAGE_ACTION_REPLY,
    icon: d.ArrowAngleLeftUpIcon,
    onClick: e => (0, K.HH)(t, n, e)
  }, 'reply-other') : null,
  h ? (0, i.jsx)(Y.sF, {
    label: ee.Z.Messages.EDIT,
    icon: d.PencilIcon,
    onClick: () => (0, K.Hd)(t, n)
  }, 'edit') : null,
  Z ? (0, i.jsx)(Y.sF, {
    label: ee.Z.Messages.MESSAGE_ACTION_FORWARD,
    icon: I.Z,
    onClick: () => eS(t, n),
    onTooltipShow: eN,
    onTooltipHide: ev,
    showNewBadge: !ex && eI
  }, 'forward') : null,
  v && !Z ? (0, i.jsx)(Y.sF, {
    label: ee.Z.Messages.CREATE_THREAD,
    icon: d.ThreadIcon,
    onClick: () => (0, K.gK)(t, n)
  }, 'thread') : null,
  !v && S ? (0, i.jsx)(Y.sF, {
    label: ee.Z.Messages.VIEW_THREAD,
    icon: d.ThreadIcon,
    onClick: () => (0, K.qe)(t, n)
  }, 'view-thread') : null,
  f ? (0, i.jsx)(Y.sF, {
    label: eE ? ee.Z.Messages.NEWS_CHANNEL_PUBLISHED : ee.Z.Messages.NEWS_CHANNEL_PUBLISH,
    icon: d.AnnouncementsIcon,
    onClick: () => (0, K.Xl)(t, n),
    disabled: eE
  }, 'publish') : null,
  r && (eh || O) ? (0, i.jsx)(Y.sF, {
    label: ee.Z.Messages.DELETE,
    icon: d.TrashIcon,
    onClick: e => (0, K.$Z)(t, n, e),
    dangerous: !0,
    separator: !O
  }, 'delete') : null,
  O && r ? null : (0, i.jsx)(d.Popout, {
    renderPopout: e => {
      let {
        updatePosition: a,
        closePopout: s
      } = e;
      return (0, i.jsx)(ea, {
        channel: t,
        message: n,
        canReport: o,
        onClose: s,
        updatePosition: a
      });
    },
    shouldShow: X,
    onRequestClose: em,
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
      return (0, i.jsx)(Y.sF, {
        label: ee.Z.Messages.MORE,
        icon: d.MoreHorizontalIcon,
        selected: s,
        onClick: em,
        ...a
      }, 'more');
    }
  })
]
  });
}

function er(e) {
  let {
channel: t,
message: n
  } = e, a = (0, c.e7)([x.Z], () => null != x.Z.getMessage(n.id), [n.id]), s = null == n.interaction || null != n.interactionData && (0, T.$s)(n.interactionData);
  return (0, i.jsxs)(i.Fragment, {
children: [
  !a && s && (0, i.jsx)(Y.sF, {
    label: ee.Z.Messages.RETRY,
    icon: d.RetryIcon,
    onClick: () => (0, K.mG)(t, n)
  }, 'retry'),
  (0, i.jsx)(Y.sF, {
    label: ee.Z.Messages.DELETE,
    icon: d.TrashIcon,
    onClick: e => (0, K.$Z)(t, n, e)
  }, 'delete-usent')
]
  });
}

function eo(e) {
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
  let r = (0, S.g1)(n);
  'add' === t ? (0, v.rU)(i.id, a.id, r, s, {
burst: l
  }) : (0, v.WO)({
channelId: i.id,
messageId: a.id,
emoji: r,
location: s,
options: {
  burst: l
}
  });
}

function ec(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
s = {
  openPopoutType: 'message_reaction_emoji_picker',
  ...a && {
    openPopoutType: 'message_super_reaction_emoji_picker',
    page: null != e.getGuildId() ? J.ZY5.GUILD_CHANNEL : J.ZY5.DM_CHANNEL,
    section: (0, S.s4)(e),
    object: J.qAy.EMOJI_REACTION_PICKER_POPOUT
  }
};
  return (0, i.jsx)(Z.$, {
channel: e,
closePopout: n,
onSelectEmoji: (i, a, s) => {
  eo({
    type: 'add',
    emoji: i,
    channel: e,
    message: t,
    location: v.TW.MESSAGE_REACTION_PICKER,
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
  } = e, s = (0, c.e7)([O.Z], () => O.Z.isEditing(t.id, n.id), [
t.id,
n.id
  ]), r = function(e) {
let {
  channel: t,
  message: n
} = e;
return n.state === J.yb.SEND_FAILED ? (0, i.jsx)(er, {
  channel: t,
  message: n
}) : null;
  }(e), o = function(e) {
let {
  message: t
} = e;
return t.state !== J.yb.SEND_FAILED ? (0, i.jsx)(el, {
  ...e
}) : null;
  }(e);
  return s || null == r && null == o ? null : (0, i.jsx)('div', {
className: l()(e.className, {
  [et.container]: !0,
  [et.isHeader]: a
}),
onClick: ei,
onContextMenu: ei,
role: 'group',
'aria-label': ee.Z.Messages.MESSAGE_UTILITIES_A11Y_LABEL,
children: (0, i.jsxs)(Y.ZP, {
  className: e.innerClassName,
  children: [
    r,
    o
  ]
})
  });
});