n.d(t, {
  Z: function() {
return _;
  }
}), n(653041), n(47120), n(390547);
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(906732),
  l = n(171368),
  o = n(841710),
  c = n(981631),
  d = n(689938);

function u(e) {
  let {
priorityMembers: t,
otherMembers: n,
totalMembers: a,
activity: r,
guildId: u,
sourceAnalyticsLocations: _
  } = e, E = [];
  for (let {
  user: e,
  status: n
}
of t)
E.push((0, i.jsx)(s.MenuItem, {
  id: e.id,
  keepItemStyles: !0,
  render: t => (0, i.jsx)(o.Z, {
    ...t,
    user: e,
    status: n,
    guildId: u
  }),
  action: () => (0, l.openUserProfileModal)({
    userId: e.id,
    guildId: u,
    sourceAnalyticsLocations: _,
    analyticsLocation: {
      section: c.jXE.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU
    }
  })
}));
  for (let e of n)
E.push((0, i.jsx)(s.MenuItem, {
  id: e.id,
  keepItemStyles: !0,
  render: t => (0, i.jsx)(o.Z, {
    ...t,
    user: e,
    guildId: u
  }),
  action: () => (0, l.openUserProfileModal)({
    userId: e.id,
    guildId: u,
    sourceAnalyticsLocations: _,
    analyticsLocation: {
      section: c.jXE.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU
    }
  })
}));
  let h = a - E.length;
  return h > 0 && E.push((0, i.jsx)(s.MenuItem, {
id: 'unknown-members-'.concat(null == r ? void 0 : r.session_id),
render: e => (0, i.jsx)(o.Y, {
  ...e,
  label: d.Z.Messages.GAME_FEED_UNKNOWN_PLAYERS.format({
    count: h
  })
})
  })), E;
}

function _(e) {
  let {
priorityMembers: t,
partiedMembers: n,
currentActivities: l,
guildContext: o
  } = e, c = new Set(t.map(e => {
let {
  user: t
} = e;
return t.id;
  })), _ = n.filter(e => !c.has(e.id)), {
analyticsLocations: E
  } = (0, r.ZP)(), h = a.useMemo(() => {
let e = l.flatMap(e => {
  let {
    playingMembers: t
  } = e;
  return t;
}).map(e => e.id);
return n.filter(t => !e.includes(t.id));
  }, [
n,
l
  ]);
  if (l.length <= 1 && 0 === h.length) {
var m, I;
return (0, i.jsx)(s.MenuGroup, {
  label: n.length > 1 ? d.Z.Messages.ACTIVITY_FEED_SINGLE_MEMBER_LIST_HEADER.format({
    memberCount: n.length
  }) : void 0,
  children: u({
    priorityMembers: t,
    otherMembers: _,
    totalMembers: n.length,
    activity: null !== (I = null === (m = l[0]) || void 0 === m ? void 0 : m.activity) && void 0 !== I ? I : void 0,
    guildId: null == o ? void 0 : o.id,
    sourceAnalyticsLocations: E
  })
});
  }
  let g = l.map((e, n) => {
  let {
    playingMembers: a,
    game: r,
    activity: l
  } = e, d = new Set(a.map(e => e.id));
  return (0, i.jsx)(s.MenuGroup, {
    label: ''.concat(r.name, ' - ').concat(a.length),
    children: u({
      priorityMembers: t.filter(e => {
        let {
          user: t
        } = e;
        return d.has(t.id);
      }),
      otherMembers: a.filter(e => !c.has(e.id)),
      totalMembers: a.length,
      activity: null != l ? l : void 0,
      guildId: null == o ? void 0 : o.id,
      sourceAnalyticsLocations: E
    })
  }, n);
}),
p = h.map(e => e.id);
  return [
...g,
(0, i.jsx)(s.MenuGroup, {
  label: ''.concat(d.Z.Messages.ACTIVITY_FEED_OTHER_MEMBER_LIST_HEADER, ' - ').concat(h.length),
  children: u({
    priorityMembers: t.filter(e => {
      let {
        user: t
      } = e;
      return p.includes(t.id);
    }),
    otherMembers: h.filter(e => !c.has(e.id)),
    totalMembers: h.length,
    guildId: null == o ? void 0 : o.id,
    sourceAnalyticsLocations: E
  })
})
  ];
}