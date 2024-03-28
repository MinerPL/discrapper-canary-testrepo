"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("924826"),
  i = n("442837"),
  r = n("493683"),
  o = n("859802"),
  u = n("511642"),
  d = n("931261"),
  c = n("703656"),
  f = n("306680"),
  h = n("356842"),
  C = n("308570"),
  p = n("434479"),
  m = n("981631"),
  g = n("176505"),
  E = n("490897"),
  S = n("689938");

function _(e) {
  let {
    guild: t,
    selected: n
  } = e, _ = (0, s.useListItem)("home-tab-".concat(t.id)), {
    showBadge: I
  } = o.GuildHomeBadgeExperiment.useExperiment({
    location: "487e85_1"
  }, {
    autoTrackExposure: !1
  });
  a.useEffect(() => {
    o.GuildHomeBadgeExperiment.trackExposure({
      location: "487e85_2"
    })
  }, []);
  let N = (0, d.useCanSeeOnboardingHome)(t.id),
    T = (0, i.useStateFromStores)([f.default], () => f.default.hasUnread(t.id, E.ReadStateTypes.GUILD_HOME) && I, [t.id, I]);
  return (0, l.jsx)(p.default, {
    ..._,
    renderIcon: e => N ? (0, l.jsx)(C.default, {
      className: e
    }) : (0, l.jsx)(h.default, {
      className: e
    }),
    text: N ? S.default.Messages.SERVER_GUIDE : S.default.Messages.GUILD_HOME,
    showUnread: T,
    selected: n,
    onMouseDown: function() {
      r.default.preload(t.id, g.StaticChannelRoute.GUILD_HOME)
    },
    onClick: function() {
      (0, u.ackGuildHome)(t.id), (0, c.transitionTo)(m.Routes.CHANNEL(t.id, g.StaticChannelRoute.GUILD_HOME))
    }
  })
}