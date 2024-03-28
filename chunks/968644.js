"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  },
  useCustomizeCommunityPromptHelpText: function() {
    return f
  }
});
var a = l("442837"),
  n = l("933557"),
  o = l("592125"),
  r = l("430824"),
  i = l("699516"),
  s = l("594174"),
  u = l("823379"),
  d = l("689938");

function c(e, t, l) {
  return 0 === e.length ? "" : (l ? d.default.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES_ALSO : d.default.Messages.ONBOARDING_HELP_TEXT_ADD_ROLES).format({
    count: e.length,
    extraCount: Math.max(e.length - 2, 0),
    role1: e[0],
    role2: e[1],
    itemHook: t
  })
}

function m(e) {
  let {
    guild: t,
    prompt: l,
    selectedRoleIds: m,
    selectedChannelIds: f,
    itemHook: h
  } = e, v = (0, a.useStateFromStores)([r.default], () => null != t ? r.default.getRoles(t.id) : void 0), g = (0, a.useStateFromStoresArray)([o.default, s.default, i.default], () => Array.from(f).map(e => o.default.getChannel(e)).filter(u.isNotNullish).map(e => (0, n.computeChannelName)(e, s.default, i.default, !0))), x = Array.from(m).map(e => {
    var t;
    return null === (t = (null != v ? v : {})[e]) || void 0 === t ? void 0 : t.name
  }).filter(u.isNotNullish).map(e => "@".concat(e)), p = (null == l ? void 0 : l.singleSelect) ? "" : d.default.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS, C = "";
  if (0 === g.length && x.length > 0) p = c(x, h);
  else if (g.length > 0) {
    var N, j;
    N = g, j = h, p = 0 === N.length ? "" : d.default.Messages.ONBOARDING_HELP_TEXT_ADD_CHANNELS.format({
      count: N.length,
      extraCount: Math.max(N.length - 2, 0),
      channel1: N[0],
      channel2: N[1],
      itemHook: j
    }), x.length > 0 && (C = c(x, h, !0))
  }
  return {
    helpText: p,
    helpTextAdditional: C
  }
}

function f(e) {
  let {
    guild: t,
    prompt: l,
    selectedRoleIds: c,
    selectedChannelIds: m,
    itemHook: f
  } = e, h = (0, a.useStateFromStores)([r.default], () => null != t ? r.default.getRoles(t.id) : void 0), v = (0, a.useStateFromStoresArray)([o.default, s.default, i.default], () => Array.from(m).map(e => o.default.getChannel(e)).filter(u.isNotNullish).map(e => (0, n.computeChannelName)(e, s.default, i.default, !0))), g = Array.from(c).map(e => {
    var t;
    return null === (t = (null != h ? h : {})[e]) || void 0 === t ? void 0 : t.name
  }).filter(u.isNotNullish).map(e => "@".concat(e)), x = (null == l ? void 0 : l.singleSelect) ? "" : d.default.Messages.ONBOARDING_CHOOSE_ALL_OPTIONS;
  return 0 === v.length && g.length > 0 ? x = d.default.Messages.CUSTOMIZE_COMMUNITY_ADD_ROLES.format({
    count: g.length,
    extraCount: Math.max(g.length - 2, 0),
    role1: g[0],
    role2: g[1],
    itemHook: f
  }) : v.length > 0 && 0 === g.length ? x = d.default.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS.format({
    count: v.length,
    extraCount: Math.max(v.length - 2, 0),
    channel1: v[0],
    channel2: v[1],
    itemHook: f
  }) : v.length > 0 && g.length > 0 && (x = d.default.Messages.CUSTOMIZE_COMMUNITY_ADD_CHANNELS_AND_ROLES.format({
    channelCount: v.length,
    extraChannelCount: Math.max(v.length - 2, 0),
    channel1: v[0],
    channel2: v[1],
    itemHook: f,
    roleCount: g.length,
    extraRoleCount: Math.max(g.length - 2, 0),
    role1: g[0],
    role2: g[1]
  })), {
    helpText: x,
    helpTextAdditional: ""
  }
}