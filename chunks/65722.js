"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionSettingsVisibility: function() {
    return r
  },
  canSeeGuildRoleSubscriptionSettings: function() {
    return S
  },
  useGuildRoleSubscriptionSettingsVisibility: function() {
    return E
  },
  useCanManageGuildRoleSubscriptions: function() {
    return _
  },
  canManageGuildRoleSubscriptions: function() {
    return h
  }
});
var i, r, l = n("446674"),
  s = n("7331"),
  u = n("465869"),
  o = n("957255"),
  a = n("697218"),
  d = n("808388"),
  c = n("49111");
(i = r || (r = {}))[i.NONE = 0] = "NONE", i[i.WAITLIST_ONLY = 1] = "WAITLIST_ONLY", i[i.NEEDS_COMMUNITY = 2] = "NEEDS_COMMUNITY", i[i.VISIBLE = 3] = "VISIBLE";

function f(e) {
  if (e.guild.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) return 0;
  if (function(e) {
      let {
        guild: t,
        isOwner: n,
        canManageGuildRoleSubscriptions: i,
        isGuildEligibleForRoleSubscriptions: r,
        isExpeditedMonetizationOnboardingGuild: l,
        isUserInCreatorMonetizationEligibleCountry: s,
        shouldRestrictUpdatingRoleSubscriptionSettings: u
      } = e;
      return !!t.hasFeature(c.GuildFeatures.COMMUNITY) && !!i && (!u || !!n) && (!!(t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE) || t.hasFeature(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!r || !!l) && n && s)
    }(e)) return 3;
  let {
    guild: t,
    isOwner: n,
    isUserInCreatorMonetizationEligibleCountry: i,
    isMonetizationWaitlistEnabledForGuild: r,
    isGuildEligibleForRoleSubscriptions: l,
    isExpeditedMonetizationOnboardingGuild: s
  } = e;
  return n && !i && r ? 1 : n && r && (l || s) && !t.hasFeature(c.GuildFeatures.COMMUNITY) ? 2 : 0
}

function S(e) {
  return 0 !== f(e)
}

function E(e) {
  let t = (0, d.useGuildEligibleForRoleSubscriptions)(null == e ? void 0 : e.id),
    n = (0, s.useIsExpeditedOnboardingGuild)(e),
    i = (0, s.useIsMonetizationWaitlistEnabledForGuild)(null == e ? void 0 : e.id),
    r = _(e),
    o = (0, l.useStateFromStores)([a.default], () => {
      let t = a.default.getCurrentUser();
      return null != t && (null == e ? void 0 : e.isOwner(t)) === !0
    }),
    c = (0, s.useIsUserInCreatorMonetizationEligibleCountry)(),
    {
      shouldRestrictUpdatingCreatorMonetizationSettings: S
    } = (0, u.useShouldRestrictUpdatingCreatorMonetizationSettings)(null == e ? void 0 : e.id);
  return null == e ? 0 : f({
    guild: e,
    isOwner: o,
    canManageGuildRoleSubscriptions: r,
    isGuildEligibleForRoleSubscriptions: t,
    isMonetizationWaitlistEnabledForGuild: i,
    isExpeditedMonetizationOnboardingGuild: n,
    isUserInCreatorMonetizationEligibleCountry: c,
    shouldRestrictUpdatingRoleSubscriptionSettings: S
  })
}

function _(e) {
  let t = (0, l.useStateFromStores)([o.default], () => h(e), [e]);
  return t
}

function h(e) {
  return null != e && o.default.can(c.Permissions.ADMINISTRATOR, e)
}