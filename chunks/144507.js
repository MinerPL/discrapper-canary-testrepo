"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionSettingsVisibility: function() {
    return i
  },
  canManageGuildRoleSubscriptions: function() {
    return E
  },
  canSeeGuildRoleSubscriptionSettings: function() {
    return S
  },
  useCanManageGuildRoleSubscriptions: function() {
    return h
  },
  useGuildRoleSubscriptionSettingsVisibility: function() {
    return g
  }
});
var r, i, l = n("442837"),
  s = n("223892"),
  o = n("674180"),
  u = n("496675"),
  a = n("594174"),
  c = n("923726"),
  d = n("981631");
(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.WAITLIST_ONLY = 1] = "WAITLIST_ONLY", r[r.NEEDS_COMMUNITY = 2] = "NEEDS_COMMUNITY", r[r.VISIBLE = 3] = "VISIBLE";

function f(e) {
  if (e.guild.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) return 0;
  if (function(e) {
      let {
        guild: t,
        isOwner: n,
        canManageGuildRoleSubscriptions: r,
        isGuildEligibleForRoleSubscriptions: i,
        isExpeditedMonetizationOnboardingGuild: l,
        isUserInCreatorMonetizationEligibleCountry: s,
        shouldRestrictUpdatingRoleSubscriptionSettings: o
      } = e;
      return !!t.hasFeature(d.GuildFeatures.COMMUNITY) && !!r && (!o || !!n) && (!!(t.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE) || t.hasFeature(d.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!i || !!l) && n && s)
    }(e)) return 3;
  let {
    guild: t,
    isOwner: n,
    isUserInCreatorMonetizationEligibleCountry: r,
    isMonetizationWaitlistEnabledForGuild: i,
    isGuildEligibleForRoleSubscriptions: l,
    isExpeditedMonetizationOnboardingGuild: s
  } = e;
  return n && !r && i ? 1 : n && i && (l || s) && !t.hasFeature(d.GuildFeatures.COMMUNITY) ? 2 : 0
}

function S(e) {
  return 0 !== f(e)
}

function g(e) {
  let t = (0, c.useGuildEligibleForRoleSubscriptions)(null == e ? void 0 : e.id),
    n = (0, s.useIsExpeditedOnboardingGuild)(e),
    r = (0, s.useIsMonetizationWaitlistEnabledForGuild)(null == e ? void 0 : e.id),
    i = h(e),
    u = (0, l.useStateFromStores)([a.default], () => {
      let t = a.default.getCurrentUser();
      return null != t && (null == e ? void 0 : e.isOwner(t)) === !0
    }),
    d = (0, s.useIsUserInCreatorMonetizationEligibleCountry)(),
    {
      shouldRestrictUpdatingCreatorMonetizationSettings: S
    } = (0, o.useShouldRestrictUpdatingCreatorMonetizationSettings)(null == e ? void 0 : e.id);
  return null == e ? 0 : f({
    guild: e,
    isOwner: u,
    canManageGuildRoleSubscriptions: i,
    isGuildEligibleForRoleSubscriptions: t,
    isMonetizationWaitlistEnabledForGuild: r,
    isExpeditedMonetizationOnboardingGuild: n,
    isUserInCreatorMonetizationEligibleCountry: d,
    shouldRestrictUpdatingRoleSubscriptionSettings: S
  })
}

function h(e) {
  return (0, l.useStateFromStores)([u.default], () => E(e), [e])
}

function E(e) {
  return null != e && u.default.can(d.Permissions.ADMINISTRATOR, e)
}