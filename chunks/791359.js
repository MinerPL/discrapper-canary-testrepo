n.d(t, {
  Z: function() {
return M;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(392711),
  r = n.n(s),
  l = n(954955),
  o = n.n(l),
  c = n(442837),
  d = n(481060),
  u = n(570140),
  _ = n(569984),
  E = n(918701),
  h = n(93127),
  m = n(814443),
  I = n(594174),
  g = n(801077),
  p = n(626135),
  T = n(70956),
  S = n(225559),
  f = n(910436),
  C = n(203028),
  N = n(358924),
  A = n(292140),
  v = n(525296),
  Z = n(981631),
  L = n(674563),
  O = n(689938),
  R = n(972591);
let x = 15 * T.Z.Millis.MINUTE,
  b = (0, v.Z)(function(e) {
let {
  party: t,
  onUserContextMenu: n,
  onChannelContextMenu: s,
  quest: r
} = e, l = (0, i.jsx)(C.Z, {
  party: t,
  onUserContextMenu: n
}), c = (0, i.jsx)(f.Z, {
  party: t,
  onChannelContextMenu: s,
  quest: r
}), {
  partiedMembers: u,
  applicationStreams: _,
  currentActivities: E,
  voiceChannels: h
} = t, m = u.length, I = _.length, g = E.length, T = h.length > 0, S = a.useCallback(() => {
  let e = E.filter(e => {
    var t, n;
    return (null === (t = e.game) || void 0 === t ? void 0 : t.name) != null && (null === (n = e.game) || void 0 === n ? void 0 : n.type) === L.wW.GAME;
  }).map(e => e.game.name);
  p.default.track(Z.rMx.NOW_PLAYING_CARD_HOVERED, {
    num_users: m,
    num_streams: I,
    num_activities: g,
    in_voice_channel: T,
    games_detected: e
  });
}, [
  m,
  I,
  g,
  T,
  E
]), v = o()(S, x);
return null != l || null != c ? (0, i.jsx)(d.Popout, {
  position: 'left',
  renderPopout: e => {
    let {
      closePopout: n
    } = e;
    return (0, i.jsx)(A.Z, {
      party: t,
      close: n
    });
  },
  spacing: 8,
  children: (e, t) => {
    let {
      isShown: n
    } = t;
    return (0, i.jsx)(N.Z, {
      ...e,
      onMouseEnter: v,
      'aria-haspopup': 'menu',
      className: R.itemCard,
      active: n,
      children: (0, i.jsxs)('div', {
        children: [
          l,
          c
        ]
      })
    });
  }
}) : null;
  }),
  P = r().throttle(() => h.W(!1), 300000);

function M() {
  let {
nowPlayingCards: e,
loaded: t,
needsRefresh: n,
fetching: s,
currentUser: r
  } = (0, c.cj)([
g.Z,
m.Z,
I.default
  ], () => ({
nowPlayingCards: g.Z.nowPlayingCards,
loaded: g.Z.loaded,
needsRefresh: m.Z.needsRefresh(),
fetching: m.Z.getFetching(),
currentUser: I.default.getCurrentUser()
  })), l = (0, c.e7)([_.Z], () => _.Z.quests);
  a.useEffect(() => (u.Z.wait(() => S.L()), () => u.Z.wait(() => S.v())), [null == r ? void 0 : r.id]), a.useEffect(() => {
n && !s && P();
  }, [
n,
s
  ]);
  let o = a.useMemo(() => {
  let t = new Map(),
    n = new Set();
  for (let i of e)
    i.party.currentActivities.forEach(e => {
      let {
        activity: a
      } = e;
      if (null != a) {
        let e = (0, E.ZZ)(l, a);
        null != e && !n.has(e.id) && (t.set(i.party.id, e), n.add(e.id));
      }
    });
  return t;
}, [
  e,
  l
]),
h = null;
  return t ? (h = e.length > 0 ? e.map(e => {
let {
  party: t
} = e;
return (0, i.jsx)(b, {
  party: t,
  quest: o.get(t.id)
}, t.id);
  }) : (0, i.jsxs)('div', {
className: R.emptyCard,
children: [
  (0, i.jsx)(d.Heading, {
    variant: 'heading-md/semibold',
    className: R.emptyHeader,
    children: O.Z.Messages.ACTIVITY_FEED_NONE_PLAYING_HEADER
  }),
  (0, i.jsx)(d.Text, {
    color: 'none',
    className: R.emptyText,
    variant: 'text-sm/normal',
    children: O.Z.Messages.ACTIVITY_FEED_NONE_PLAYING_BODY
  })
]
  }), (0, i.jsx)(i.Fragment, {
children: h
  })) : (0, i.jsx)('div', {
className: R.emptyCard,
children: (0, i.jsx)(d.Spinner, {})
  });
}