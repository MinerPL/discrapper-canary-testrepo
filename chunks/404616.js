n.d(t, {
  Lp: function() {
return ee;
  },
  NN: function() {
return ei;
  },
  TJ: function() {
return et;
  },
  au: function() {
return er;
  },
  kZ: function() {
return el;
  },
  m9: function() {
return ea;
  },
  og: function() {
return eu;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(512722),
  r = n.n(l),
  c = n(913527),
  u = n.n(c),
  d = n(91192),
  h = n(442837),
  m = n(692547),
  p = n(481060),
  g = n(738619),
  f = n(393238),
  T = n(963374),
  _ = n(884338),
  v = n(446489),
  b = n(95398),
  E = n(406432),
  I = n(169525),
  x = n(566006),
  C = n(255269),
  S = n(937889),
  R = n(443877),
  N = n(524444),
  O = n(287151),
  Z = n(267128),
  j = n(695346),
  M = n(433355),
  A = n(592125),
  y = n(496675),
  P = n(699516),
  L = n(451478),
  w = n(55935),
  U = n(109434),
  k = n(456269),
  B = n(109590),
  D = n(660189),
  F = n(208970),
  V = n(73315),
  H = n(470623),
  G = n(196255),
  W = n(858543),
  z = n(265641),
  K = n(627896),
  Y = n(883728),
  J = n(981631),
  q = n(217702),
  X = n(689938),
  $ = n(643432),
  Q = n(910212);
let ee = 72,
  et = 72;
t.ZP = s.memo(function(e) {
  let {
threadId: t,
goToThread: n,
observePostVisibilityAnalytics: o,
overrideMedia: l,
className: c,
containerWidth: u
  } = e, {
channel: m,
isOpen: g,
messageCount: T,
firstMessage: _,
content: v,
media: b
  } = function(e) {
let {
  threadId: t,
  overrideMedia: n
} = e, i = (0, h.e7)([A.Z], () => A.Z.getChannel(t));
r()(null != i, 'the thread should not be null here, a store must have missed an update');
let s = (0, h.e7)([M.ZP], () => M.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id),
  {
    firstMessage: o
  } = (0, B.cl)(i),
  {
    content: a,
    firstMedia: l
  } = (0, k.mX)({
    firstMessage: o
  }),
  {
    messageCountText: c
  } = (0, k.nP)(i);
return {
  channel: i,
  isOpen: s,
  messageCount: c,
  firstMessage: o,
  content: a,
  media: null != n ? n : l
};
  }({
threadId: t,
overrideMedia: l
  }), {
ref: E,
height: I
  } = (0, f.Z)(), x = (0, H.xH)(e => e.setCardHeight);
  s.useEffect(() => {
null != I && x(t, I);
  }, [
I,
x,
t
  ]), s.useEffect(() => {
null == o || o(E.current, t);
  }, [
E,
o,
t
  ]);
  let C = s.useRef(null),
{
  handleLeftClick: S,
  handleRightClick: R
} = (0, Y.Z)({
  facepileRef: C,
  goToThread: n,
  channel: m
}),
{
  role: N,
  onFocus: O,
  ...Z
} = (0, d.JA)(t),
{
  isFocused: j,
  handleFocus: y,
  handleBlur: P
} = (0, z.Z)(O);
  return (0, i.jsxs)('div', {
ref: E,
'data-item-id': t,
onClick: S,
onContextMenu: R,
className: a()($.container, c, {
  [$.isOpen]: g
}),
children: [
  (0, i.jsx)(p.Clickable, {
    onClick: S,
    focusProps: {
      ringTarget: E
    },
    onContextMenu: R,
    'aria-label': X.Z.Messages.FORUM_POST_ARIA_LABEL.format({
      title: m.name,
      count: T
    }),
    className: $.focusTarget,
    onFocus: y,
    onBlur: P,
    ...Z
  }),
  (0, i.jsxs)('div', {
    className: $.left,
    children: [
      (0, i.jsx)(p.HeadingLevel, {
        children: (0, i.jsx)(en, {
          channel: m,
          firstMessage: _,
          content: v,
          hasMediaAttachment: null != b,
          containerWidth: u
        })
      }),
      (0, i.jsx)(p.FocusBlock, {
        enabled: !j,
        children: (0, i.jsx)(eo, {
          channel: m,
          firstMessage: _,
          facepileRef: C
        })
      })
    ]
  }),
  (null == _ ? void 0 : _.blocked) || null == b ? null : (0, i.jsx)(ed, {
    channel: m,
    firstMedia: b
  })
]
  });
});

function en(e) {
  let {
channel: t,
firstMessage: n,
content: s,
hasMediaAttachment: o,
containerWidth: l
  } = e, {
isNew: r,
hasUnreads: c
  } = (0, k.J$)(t), u = ei(t), {
postTitleRef: d,
isNewBadgeOverflow: h
  } = (0, K.x)(r, 24, l);
  return (0, i.jsxs)('div', {
className: $.body,
children: [
  (0, i.jsx)(W.ZP, {
    channel: t
  }),
  (0, i.jsx)('div', {
    className: a()($.header, {
      [$.withNewBadgeOverflow]: h
    }),
    children: (0, i.jsxs)('div', {
      className: $.headerText,
      children: [
        (0, i.jsx)(p.Heading, {
          variant: 'heading-lg/semibold',
          color: c ? 'header-primary' : 'text-muted',
          lineClamp: 2,
          className: $.postTitleText,
          children: (0, i.jsxs)('span', {
            ref: d,
            children: [
              u,
              r && (0, i.jsx)('span', {
                className: $.newBadgeWrapper,
                children: (0, i.jsx)(p.TextBadge, {
                  className: $.newBadge,
                  color: m.Z.unsafe_rawColors.BRAND_260.css,
                  text: X.Z.Messages.NEW
                })
              })
            ]
          })
        }),
        r && h && (0, i.jsx)(p.TextBadge, {
          className: $.newBadge,
          color: m.Z.unsafe_rawColors.BRAND_260.css,
          text: X.Z.Messages.NEW
        })
      ]
    })
  }),
  (0, i.jsx)('div', {
    className: $.message,
    children: (0, i.jsx)(es, {
      channel: t,
      message: n,
      content: s,
      hasMediaAttachment: o,
      hasUnreads: c
    })
  })
]
  });
}

function ei(e) {
  let t = (0, h.e7)([F.Z], () => F.Z.getHasSearchResults(e.parent_id)),
n = (0, h.e7)([F.Z], () => F.Z.getSearchQuery(e.parent_id)),
i = s.useMemo(() => (0, T.nC)(t && null != n ? n : ''), [
  t,
  n
]);
  return s.useMemo(() => (0, S.ZP)({
content: e.name,
embeds: []
  }, {
postProcessor: i
  }).content, [
e.name,
i
  ]);
}
let es = s.memo(function(e) {
  let {
message: t,
channel: n,
content: s,
hasMediaAttachment: o,
hasUnreads: l
  } = e, r = (0, h.e7)([P.Z], () => null != t && P.Z.isBlockedForMessage(t)), c = (0, h.e7)([D.Z], () => D.Z.isLoading(n.id)), u = (0, h.e7)([y.Z], () => y.Z.can(J.Plq.MANAGE_MESSAGES, n)), d = j.cC.useSetting(), m = null;
  if (r)
m = (0, i.jsx)(p.Text, {
  className: $.blockedMessage,
  variant: 'text-sm/medium',
  color: 'text-muted',
  children: X.Z.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE
});
  else {
let {
  contentPlaceholder: e,
  renderedContent: n
} = null == t ? {
  contentPlaceholder: null,
  renderedContent: null
} : (0, Z.f)(t, s, r, a()($.messageContent, Q.inlineFormat, Q.__invalid_smallFontSize), {
  leadingIconClass: $.messageContentLeadingIcon,
  trailingIconClass: $.messageContentTrailingIcon,
  iconSize: q.WW
});
m = null != n ? (0, i.jsx)(p.Text, {
  variant: 'text-sm/semibold',
  color: l ? 'header-secondary' : 'text-muted',
  children: n
}) : o ? null : (0, i.jsx)(p.Text, {
  tag: 'span',
  variant: 'text-sm/medium',
  color: l ? 'header-secondary' : 'text-muted',
  className: $.messageContent,
  children: null == t ? c ? null : X.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED : e
});
  }
  return (0, i.jsxs)(b.a.Provider, {
value: (0, C.Z)(d, u),
children: [
  !r && (0, i.jsx)(G.Z, {
    channel: n,
    message: t,
    renderColon: null != m,
    hasUnreads: l
  }),
  (0, i.jsx)(p.FocusBlock, {
    className: $.messageFocusBlock,
    children: m
  })
]
  });
});

function eo(e) {
  let {
channel: t,
facepileRef: n,
firstMessage: s
  } = e, o = (0, k.Q)(t), a = (null == s ? void 0 : s.reactions) != null && s.reactions.length > 0;
  return (0, i.jsxs)('div', {
className: $.footer,
children: [
  a || null == s ? null : (0, i.jsx)(el, {
    firstMessage: s,
    channel: t
  }),
  null == s ? null : (0, i.jsx)(er, {
    firstMessage: s,
    channel: t
  }),
  (0, i.jsx)(ea, {
    channel: t,
    iconSize: 14
  }),
  (0, i.jsx)('span', {
    className: $.bullet,
    children: '\u2022'
  }),
  o.length > 0 ? (0, i.jsxs)('div', {
    className: $.typing,
    children: [
      (0, i.jsx)(eu, {
        channel: t,
        userIds: o,
        facepileRef: n
      }),
      (0, i.jsx)('div', {
        className: $.dots,
        children: (0, i.jsx)(p.Dots, {
          themed: !0,
          dotRadius: 2
        })
      }),
      (0, i.jsx)(g.Z, {
        channel: t,
        className: $.typingUsers,
        renderDots: !1
      })
    ]
  }) : (0, i.jsx)(ec, {
    channel: t
  })
]
  });
}

function ea(e) {
  let {
channel: t,
iconSize: n,
showReadState: s = !1
  } = e, {
messageCountText: o,
unreadCount: l
  } = (0, k.nP)(t);
  return (0, i.jsxs)('div', {
className: a()($.messageCountBox, {
  [$.hasRead]: s && null == l
}),
children: [
  (0, i.jsx)('span', {
    className: $.messageCountIcon,
    children: (0, i.jsx)(p.ChatIcon, {
      size: 'custom',
      color: 'currentColor',
      width: n,
      height: n
    })
  }),
  'number' == typeof o ? (0, i.jsx)(v.Z, {
    value: o,
    digitWidth: 9,
    className: $.messageCountText
  }) : (0, i.jsx)('div', {
    className: $.messageCountText,
    children: o
  }),
  null == l ? null : (0, i.jsxs)(p.Text, {
    className: $.newMessageCount,
    variant: 'text-sm/semibold',
    color: 'text-brand',
    children: [
      '(',
      X.Z.Messages.FORUM_POST_MESSAGE_COUNT_SHORT.format({
        count: l
      }),
      ')'
    ]
  })
]
  });
}

function el(e) {
  let {
firstMessage: t,
channel: n
  } = e, s = (0, h.e7)([A.Z], () => A.Z.getChannel(n.parent_id)), o = (0, k.Bs)(s), {
disableReactionCreates: a,
isLurking: l,
isPendingMember: r
  } = (0, R.Z)(n);
  return null == o || a ? null : (0, i.jsx)(O.le, {
className: $.updateReactionButton,
message: t,
readOnly: n.isArchivedLockedThread(),
useChatFontScaling: !1,
isLurking: l,
isPendingMember: r,
emoji: o,
hideCount: !0,
count: 0,
burst_count: 0,
me: !1,
me_burst: !1,
type: x.O.NORMAL,
emojiSize: 'reaction'
  });
}

function er(e) {
  var t;
  let {
firstMessage: n,
channel: s
  } = e, o = (0, k.IN)(n), {
disableReactionUpdates: a,
isLurking: l,
isPendingMember: r
  } = (0, R.Z)(s);
  return null == o ? null : (0, i.jsx)(O.le, {
className: $.updateReactionButton,
message: n,
readOnly: a || s.isArchivedLockedThread(),
isLurking: l,
isPendingMember: r,
useChatFontScaling: !1,
type: o.burst_count >= o.count ? x.O.BURST : x.O.NORMAL,
emojiSize: 'reaction',
...o
  }, ''.concat(null !== (t = o.emoji.id) && void 0 !== t ? t : 0, ':').concat(o.emoji.name));
}

function ec(e) {
  var t;
  let {
channel: n
  } = e, {
sortOrder: s
  } = (0, U.H)(n.parent_id), o = (0, k.xw)(n, s), a = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, l = null == a ? null : X.Z.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
timestamp: (0, w.vc)(u()(a), 'LLLL')
  });
  return (0, i.jsx)(p.Tooltip, {
text: l,
tooltipClassName: $.timestampTooltip,
children: e => (0, i.jsx)(p.Text, {
  className: $.__invalid_activityText,
  variant: 'text-sm/normal',
  color: 'header-secondary',
  ...e,
  children: o
})
  });
}

function eu(e) {
  let {
channel: t,
userIds: n,
facepileRef: s
  } = e, o = (0, k.iM)(t, n);
  return (0, i.jsx)('div', {
ref: s,
children: (0, i.jsx)(_.Z, {
  className: $.__invalid_facepile,
  showDefaultAvatarsForNullUsers: !0,
  guildId: t.guild_id,
  users: o,
  max: 5,
  size: 16,
  hideMoreUsers: !0,
  showUserPopout: !0
})
  });
}

function ed(e) {
  let t, n, {
  channel: s,
  firstMedia: o
} = e,
l = (0, h.e7)([L.Z], () => L.Z.isFocused()),
r = (0, E.d$)(o.src),
c = j.QK.useSetting(),
[u, d] = (0, I.hL)({
  media: o,
  channel: s
}),
m = (0, I.MC)(d),
{
  src: g,
  width: f,
  height: T,
  alt: _
} = o;
  return T > f ? n = et : t = ee, (0, i.jsx)(p.FocusBlock, {
enabled: !0,
children: (0, i.jsxs)('div', {
  className: $.bodyMedia,
  onClick: e => e.stopPropagation(),
  children: [
    g.startsWith('data:') ? (0, i.jsx)(p.Image, {
      src: g,
      maxHeight: t,
      maxWidth: n,
      width: f,
      height: T,
      alt: null != _ && u ? m : _,
      className: $.thumbnailContainer,
      imageClassName: a()({
        [$.obscured]: u,
        [$.thumbnailOverride]: !0
      })
    }) : (0, N.Yi)({
      src: g,
      maxHeight: t,
      maxWidth: n,
      width: f,
      height: T,
      alt: null != _ && u ? m : _,
      autoPlay: c,
      animated: r && !u && l,
      containerClassName: $.thumbnailContainer,
      imageClassName: a()({
        [$.obscured]: u
      }),
      renderForwardComponent: J.VqG
    }),
    u && (0, i.jsx)(V.Z, {
      iconClassname: $.obscuredTag,
      obscureReason: d
    })
  ]
})
  });
}