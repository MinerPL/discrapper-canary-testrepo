"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("554747"),
  o = n("434479"),
  u = n("593364"),
  d = n("703656"),
  c = n("944486"),
  f = n("305878"),
  h = n("104259"),
  p = n("782089"),
  m = n("729285"),
  C = n("147754"),
  g = n("688438"),
  E = n("981631"),
  _ = n("689938");
let S = [{
  key: "EVENTS",
  renderIcon: e => (0, l.jsx)(f.default, {
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
  handler: e => (0, i.openModalLazy)(async () => {
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
  renderIcon: e => (0, l.jsx)(h.default, {
    className: e
  }),
  getName: () => _.default.Messages.HUB_SIDEBAR_JOIN_SERVERS,
  handler: (e, t) => (0, d.transitionToGuild)(e.id, t.id)
}, {
  key: "ADD_SERVERS",
  renderIcon: e => (0, l.jsx)(m.default, {
    className: e
  }),
  getName: () => _.default.Messages.HUB_SIDEBAR_ADD_SERVERS,
  handler: (e, t) => (0, i.openModalLazy)(async () => {
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
  renderIcon: e => (0, l.jsx)(p.default, {
    className: e
  }),
  getName: () => _.default.Messages.HUB_SIDEBAR_INVITE_MEMBERS,
  handler: (e, t) => (0, i.openModalLazy)(async () => {
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
  } = e, i = (0, r.default)(t.id);
  a.useEffect(() => {
    C.default.trackExposure({
      guildId: t.id,
      location: "543af8_1"
    })
  }, [t.id]);
  let {
    showHubEventsList: d
  } = C.default.useExperiment({
    guildId: t.id,
    location: "543af8_2"
  }, {
    autoTrackExposure: !1
  }), f = (0, s.useStateFromStores)([c.default], () => null != n && c.default.getChannelId() === n.id), h = a.useMemo(() => ({
    numEvents: i.length
  }), [i.length]), p = (0, g.useHubUnreadCount)(n);
  return (0, l.jsx)(l.Fragment, {
    children: S.map(e => {
      let {
        key: a,
        getName: s,
        handler: i,
        renderIcon: r
      } = e;
      if (!d && "EVENTS" === a) return null;
      let c = "".concat(a, "-").concat(t.id);
      return (0, l.jsx)(o.BasicChannelRow, {
        id: c,
        renderIcon: r,
        text: s(h),
        selected: f && "JOIN_SERVERS" === a,
        onClick: null != n ? () => i(t, n) : void 0,
        trailing: "JOIN_SERVERS" === a && p > 0 ? (0, u.renderMentionBadge)(p) : null
      }, c)
    })
  })
}