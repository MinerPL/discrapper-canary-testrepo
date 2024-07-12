n.d(t, {
  Z: function() {
return _;
  }
}), n(653041), n(47120), n(390547);
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(906732),
  l = n(171368),
  o = n(841710),
  c = n(981631),
  d = n(689938);

function u(e) {
  let {
priorityMembers: t,
otherMembers: n,
totalMembers: s,
activity: r,
guildId: u,
sourceAnalyticsLocations: _
  } = e, h = [];
  for (let {
  user: e,
  status: n
}
of t)
h.push((0, i.jsx)(a.MenuItem, {
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
h.push((0, i.jsx)(a.MenuItem, {
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
  let E = s - h.length;
  return E > 0 && h.push((0, i.jsx)(a.MenuItem, {
id: 'unknown-members-'.concat(null == r ? void 0 : r.session_id),
render: e => (0, i.jsx)(o.Y, {
  ...e,
  label: d.Z.Messages.GAME_FEED_UNKNOWN_PLAYERS.format({
    count: E
  })
})
  })), h;
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
analyticsLocations: h
  } = (0, r.ZP)(), E = s.useMemo(() => {
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
  if (l.length <= 1 && 0 === E.length) {
var I, m;
return (0, i.jsx)(a.MenuGroup, {
  label: n.length > 1 ? d.Z.Messages.ACTIVITY_FEED_SINGLE_MEMBER_LIST_HEADER.format({
    memberCount: n.length
  }) : void 0,
  children: u({
    priorityMembers: t,
    otherMembers: _,
    totalMembers: n.length,
    activity: null !== (m = null === (I = l[0]) || void 0 === I ? void 0 : I.activity) && void 0 !== m ? m : void 0,
    guildId: null == o ? void 0 : o.id,
    sourceAnalyticsLocations: h
  })
});
  }
  let g = l.map((e, n) => {
  let {
    playingMembers: s,
    game: r,
    activity: l
  } = e, d = new Set(s.map(e => e.id));
  return (0, i.jsx)(a.MenuGroup, {
    label: ''.concat(r.name, ' - ').concat(s.length),
    children: u({
      priorityMembers: t.filter(e => {
        let {
          user: t
        } = e;
        return d.has(t.id);
      }),
      otherMembers: s.filter(e => !c.has(e.id)),
      totalMembers: s.length,
      activity: null != l ? l : void 0,
      guildId: null == o ? void 0 : o.id,
      sourceAnalyticsLocations: h
    })
  }, n);
}),
p = E.map(e => e.id);
  return [
...g,
(0, i.jsx)(a.MenuGroup, {
  label: ''.concat(d.Z.Messages.ACTIVITY_FEED_OTHER_MEMBER_LIST_HEADER, ' - ').concat(E.length),
  children: u({
    priorityMembers: t.filter(e => {
      let {
        user: t
      } = e;
      return p.includes(t.id);
    }),
    otherMembers: E.filter(e => !c.has(e.id)),
    totalMembers: E.length,
    guildId: null == o ? void 0 : o.id,
    sourceAnalyticsLocations: h
  })
})
  ];
}