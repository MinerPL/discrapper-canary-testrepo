n.d(t, {
  Z: function() {
return v;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(524437),
  l = n(481060),
  o = n(235820),
  c = n(494404),
  u = n(110924),
  d = n(796798),
  _ = n(198620),
  E = n(294218),
  I = n(695346),
  m = n(592125),
  T = n(731290),
  h = n(944486),
  N = n(455199),
  C = n(655354),
  f = n(999671),
  p = n(324081),
  g = n(240126),
  S = n(791914),
  A = n(981631),
  R = n(689938),
  O = n(699723);
let x = {
  offset: {
left: 4,
right: -12
  }
};

function M(e, t, n) {
  let i = t ? N.Z.guildFilter : null,
s = t ? N.Z.roleFilter : null,
a = t ? N.Z.everyoneFilter : null,
r = null;
  null != e && null != i && (r = i === A.NgX.ALL_SERVERS ? null : e.getGuildId()), o.Z.fetchRecentMentions(n, A.DJj, r, s, a);
}

function v(e) {
  let {
setTab: t,
onJump: n,
badgeState: l,
closePopout: E
  } = e, I = (0, a.e7)([
m.Z,
h.Z
  ], () => m.Z.getChannel(h.Z.getChannelId())), {
messages: T,
hasMore: C,
loading: p,
guildFilter: g,
roleFilter: x,
everyoneFilter: v
  } = (0, a.cj)([N.Z], () => ({
messages: N.Z.getMentions(),
hasMore: N.Z.hasMore,
loading: N.Z.loading,
guildFilter: N.Z.guildFilter,
roleFilter: N.Z.roleFilter,
everyoneFilter: N.Z.everyoneFilter
  })), L = (0, u.Z)(g), P = (0, u.Z)(x), b = (0, u.Z)(v);
  s.useEffect(() => {
if (!N.Z.hasLoadedEver) {
  M(I, !0);
  return;
}
(null != L && g !== L || null != P && x !== P || null != b && v !== b) && M(I, !0);
  }, [
L,
g,
P,
x,
b,
v,
I,
!0
  ]);
  s.useEffect(() => {
d.l.getCurrentConfig({
  location: 'mentions'
}).enabled && (null == T ? void 0 : T.some(_.k5)) && (o.Z.clearMentions(), M(I, !0));
  }, []), s.useEffect(() => () => {
o.Z.truncateMentions(A.DJj);
  }, []);
  let j = s.useCallback(() => (0, i.jsx)(S.Z, {
tab: r.X.MENTIONS,
setTab: t,
badgeState: l,
closePopout: E,
children: (0, i.jsx)(f.Z, {})
  }), [
!0,
t,
l,
E
  ]);
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsx)(c.ZP, {
  className: O.recentMentionsPopout,
  scrollerClassName: O.scroller,
  onFetch: () => null,
  onJump: n,
  onCloseMessage: function(e) {
    o.Z.deleteRecentMention(e.id);
  },
  channel: I,
  messages: T,
  loading: p,
  hasMore: C,
  analyticsName: 'Recent Mentions',
  loadMore: function() {
    M(I, !0, null != T && T.length > 0 ? T[T.length - 1].id : null);
  },
  canCloseAllMessages: !0,
  renderHeader: j,
  renderEmptyState: D,
  renderMessage: Z,
  'aria-label': R.Z.Messages.RECENT_MENTIONS,
  listName: 'recents'
})
  });
}

function L(e, t) {
  return [(0, i.jsx)(P, {
message: e,
gotoMessage: t
  }, e.id)];
}

function Z(e, t) {
  return [(0, i.jsx)(P, {
message: e,
gotoMessage: t,
dismissible: !0
  }, e.id)];
}

function P(e) {
  let {
message: t,
gotoMessage: n,
dismissible: s
  } = e;
  if (null == t)
return null;
  let a = m.Z.getChannel(t.channel_id);
  if (null == a)
return null;
  let r = T.Z.didAgree(a.getGuildId()),
c = !!a.isNSFW() && !r;
  return (0, i.jsxs)('div', {
className: O.container,
children: [
  (0, i.jsx)(p.Z, {
    channel: a,
    gotoChannel: n,
    children: null != s ? (0, i.jsx)(l.CircleIconButton, {
      className: O.closeButton,
      tooltip: R.Z.Messages.CLOSE,
      color: l.CircleIconButtonColors.TERTIARY,
      icon: (0, i.jsx)(l.CloseSmallIcon, {
        size: 'xs',
        color: 'currentColor'
      }),
      onClick: () => o.Z.deleteRecentMention(t.id)
    }) : null
  }),
  (0, i.jsxs)('div', {
    className: O.messageContainer,
    children: [
      (0, i.jsx)(C.Z, {
        className: O.jumpMessageButton,
        onJump: n
      }),
      (0, i.jsx)(E.Z, {
        message: t,
        channel: a,
        className: O.message,
        hideAccessories: c,
        compact: I.jU.getSetting(),
        animateAvatar: !1,
        focusProps: x,
        trackAnnouncementViews: !0
      }, t.id)
    ]
  })
]
  });
}

function D(e) {
  return (0, i.jsx)(g.Z, {
Icon: l.AtIcon,
header: R.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
tip: R.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
  });
}