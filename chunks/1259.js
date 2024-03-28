"use strict";
n.r(t), n.d(t, {
  DiscoveryRequirementsM2Experiment: function() {
    return d
  },
  useLowerMemberCountRequirements: function() {
    return f
  }
}), n("47120");
var i = n("470079"),
  r = n("442837"),
  s = n("818083"),
  a = n("650774"),
  l = n("430824"),
  o = n("496675"),
  u = n("946314"),
  c = n("981631");
let d = (0, s.createExperiment)({
  kind: "guild",
  id: "2021-12_discovery_requirements_m2",
  label: "Lower Server Discovery member count requirements",
  defaultConfig: {
    enableLowerMemberCountReq: !1
  },
  treatments: [{
    id: 1,
    label: "Allow a server to become discoverable with lower member count requirements",
    config: {
      enableLowerMemberCountReq: !0
    }
  }]
});

function f(e) {
  let t = (0, r.useStateFromStores)([l.default], () => l.default.getGuild(e)),
    n = (0, r.useStateFromStores)([o.default], () => o.default.can(c.Permissions.ADMINISTRATOR, t)),
    s = null == t ? void 0 : t.hasFeature(c.GuildFeatures.COMMUNITY),
    [f] = (0, r.useStateFromStoresArray)([a.default], () => [a.default.getMemberCount(e)], [e]),
    p = (null != f ? f : 0) >= u.LOWERED_MINIMUM_SIZE && (null != f ? f : 0) < u.DEFAULT_MINIMUM_SIZE,
    _ = n && s && p;
  i.useEffect(() => {
    _ && d.trackExposure({
      guildId: e,
      location: "747eb3_1"
    })
  }, [e, _]);
  let {
    enableLowerMemberCountReq: E
  } = d.useExperiment({
    guildId: e,
    location: "747eb3_2"
  }, {
    autoTrackExposure: !1,
    disable: !_
  });
  return E
}