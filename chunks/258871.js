"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("554747"),
  o = n("593364"),
  u = n("703656"),
  d = n("944486"),
  c = n("305878"),
  f = n("104259"),
  h = n("782089"),
  C = n("729285"),
  p = n("360048"),
  m = n("147754"),
  g = n("688438"),
  E = n("981631"),
  S = n("689938"),
  _ = n("451051");
let I = [{
  icon: (0, l.jsx)(c.default, {
    className: _.icon
  }),
  key: "EVENTS",
  getName: e => {
    let {
      numEvents: t
    } = e;
    return t > 0 ? S.default.Messages.GUILD_EVENTS_PLURAL.format({
      number: t
    }) : S.default.Messages.GUILD_EVENTS
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
  icon: (0, l.jsx)(f.default, {
    className: _.icon
  }),
  key: "JOIN_SERVERS",
  getName: () => S.default.Messages.HUB_SIDEBAR_JOIN_SERVERS,
  handler: (e, t) => (0, u.transitionToGuild)(e.id, t.id)
}, {
  icon: (0, l.jsx)(C.default, {
    className: _.icon
  }),
  key: "ADD_SERVERS",
  getName: () => S.default.Messages.HUB_SIDEBAR_ADD_SERVERS,
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
  icon: (0, l.jsx)(h.default, {
    className: _.icon
  }),
  key: "INVITE_MEMBERS",
  getName: () => S.default.Messages.HUB_SIDEBAR_INVITE_MEMBERS,
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
    m.default.trackExposure({
      guildId: t.id,
      location: "543af8_1"
    })
  }, [t.id]);
  let {
    showHubEventsList: u
  } = m.default.useExperiment({
    guildId: t.id,
    location: "543af8_2"
  }, {
    autoTrackExposure: !1
  }), c = (0, s.useStateFromStores)([d.default], () => null != n && d.default.getChannelId() === n.id), f = a.useMemo(() => ({
    numEvents: i.length
  }), [i.length]), h = e => {
    if (null != n) {
      let l = I.find(t => t.key === e);
      null == l || l.handler(t, n)
    }
  }, C = (0, g.useHubUnreadCount)(n);
  return (0, l.jsx)("div", {
    children: I.map(e => {
      if (!u && "EVENTS" === e.key) return null;
      let t = c && "JOIN_SERVERS" === e.key;
      return (0, l.jsx)(p.default, {
        avatar: e.icon,
        name: e.getName(f),
        focusProps: {
          offset: {
            right: 4,
            top: 1,
            bottom: 1
          }
        },
        onClick: () => h(e.key),
        selected: t,
        className: _.optionItem,
        selectedClassName: _.__invalid_selected,
        innerClassName: _.itemInner,
        avatarClassName: _.avatar,
        children: "JOIN_SERVERS" === e.key && C > 0 ? (0, o.renderMentionBadge)(C) : null
      }, e.key)
    })
  })
}