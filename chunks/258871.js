"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("115850"),
  r = n("481060"),
  o = n("554747"),
  u = n("434479"),
  d = n("593364"),
  c = n("703656"),
  f = n("944486"),
  h = n("305878"),
  m = n("104259"),
  C = n("729285"),
  p = n("147754"),
  g = n("688438"),
  E = n("981631"),
  _ = n("689938");
let S = [{
  key: "EVENTS",
  renderIcon: e => (0, l.jsx)(h.default, {
    className: e
  }),
  getName: e => {
    let {
      numEvents: t
    } = e;
    return t > 0 ? _.default.Messages.GUILD_EVENTS_PLURAL.format({
      number: t
    }) : _.default.Messages.GUILD_EVENTS
  },
  handler: e => (0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("22347"), n.e("56236")]).then(n.bind(n, "17671"));
    return n => (0, l.jsx)(t, {
      ...n,
      guildId: e.id
    })
  })
}, {
  key: "JOIN_SERVERS",
  renderIcon: e => (0, l.jsx)(m.default, {
    className: e
  }),
  getName: () => _.default.Messages.HUB_SIDEBAR_JOIN_SERVERS,
  handler: (e, t) => (0, c.transitionToGuild)(e.id, t.id)
}, {
  key: "ADD_SERVERS",
  renderIcon: e => (0, l.jsx)(C.default, {
    className: e
  }),
  getName: () => _.default.Messages.HUB_SIDEBAR_ADD_SERVERS,
  handler: (e, t) => (0, r.openModalLazy)(async () => {
    let {
      default: a
    } = await Promise.all([n.e("99387"), n.e("79764")]).then(n.bind(n, "533202"));
    return n => (0, l.jsx)(a, {
      ...n,
      directoryGuildName: e.name,
      directoryGuildId: e.id,
      directoryChannelId: t.id
    })
  })
}, {
  key: "INVITE_MEMBERS",
  renderIcon: e => (0, l.jsx)(i.GroupPlusIcon, {
    className: e
  }),
  getName: () => _.default.Messages.HUB_SIDEBAR_INVITE_MEMBERS,
  handler: (e, t) => (0, r.openModalLazy)(async () => {
    let {
      default: a
    } = await Promise.all([n.e("99387"), n.e("7654"), n.e("92893")]).then(n.bind(n, "560114"));
    return n => (0, l.jsx)(a, {
      ...n,
      guild: e,
      channel: t,
      source: E.InstantInviteSources.HUB_SIDEBAR
    })
  })
}];
t.default = e => {
  let {
    guild: t,
    channel: n
  } = e, i = (0, o.default)(t.id);
  a.useEffect(() => {
    p.default.trackExposure({
      guildId: t.id,
      location: "543af8_1"
    })
  }, [t.id]);
  let {
    showHubEventsList: r
  } = p.default.useExperiment({
    guildId: t.id,
    location: "543af8_2"
  }, {
    autoTrackExposure: !1
  }), c = (0, s.useStateFromStores)([f.default], () => null != n && f.default.getChannelId() === n.id), h = a.useMemo(() => ({
    numEvents: i.length
  }), [i.length]), m = (0, g.useHubUnreadCount)(n);
  return (0, l.jsx)(l.Fragment, {
    children: S.map(e => {
      let {
        key: a,
        getName: s,
        handler: i,
        renderIcon: o
      } = e;
      if (!r && "EVENTS" === a) return null;
      let f = "".concat(a, "-").concat(t.id);
      return (0, l.jsx)(u.BasicChannelRow, {
        id: f,
        renderIcon: o,
        text: s(h),
        selected: c && "JOIN_SERVERS" === a,
        onClick: null != n ? () => i(t, n) : void 0,
        trailing: "JOIN_SERVERS" === a && m > 0 ? (0, d.renderMentionBadge)(m) : null
      }, f)
    })
  })
}