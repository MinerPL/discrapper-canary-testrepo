"use strict";
n.r(t), n.d(t, {
  getRoleSubscriptionPurchaseSystemMessageFormattedContent: function() {
    return a
  },
  getRoleSubscriptionPurchaseSystemMessageAstFormattedContent: function() {
    return d
  },
  getRoleSubscriptionPurchaseSystemMessageContentMobile: function() {
    return S
  },
  isEligibleForRoleSubscriptionPurchaseSystemMessageSettings: function() {
    return E
  },
  trackRoleSubscriptionPurchaseMessageTierClick: function() {
    return h
  },
  getRoleSubscriptionPurchaseSystemMessageEventProperties: function() {
    return _
  }
});
var i = n("716241"),
  r = n("250666"),
  l = n("305961"),
  s = n("697218");
n("299039"), n("531034");
var u = n("49111"),
  o = n("782340");

function a(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: i,
    guildId: r,
    roleSubscriptionData: l
  } = e, {
    content: s,
    formatParams: u
  } = f({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: i,
    guildId: r,
    roleSubscriptionData: l
  });
  return s.format(u)
}

function d(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: i,
    guildId: r,
    roleSubscriptionData: l
  } = e, {
    content: s,
    formatParams: u
  } = f({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: i,
    guildId: r,
    roleSubscriptionData: l
  });
  return s.astFormat(u)
}

function c(e, t) {
  var n, i;
  let r = l.default.getGuild(e),
    s = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0,
    u = null !== (i = null == t ? void 0 : t.is_renewal) && void 0 !== i && i;
  return {
    guild: r,
    totalMonthsSubscribed: s,
    showWithDuration: s > 0,
    isRenewal: u
  }
}

function f(e) {
  let t, {
      username: n,
      usernameOnClickHandler: i,
      roleSubscriptionOnClickHandler: r,
      guildId: l,
      roleSubscriptionData: s
    } = e,
    {
      guild: u,
      totalMonthsSubscribed: a,
      showWithDuration: d,
      isRenewal: f
    } = c(l, s);
  t = d ? f ? o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : f ? o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN;
  let S = {
    username: n,
    usernameHook: i,
    guildName: null == u ? void 0 : u.name,
    handleGuildNameClick: r,
    tierName: null == s ? void 0 : s.tier_name,
    months: a
  };
  return {
    content: t,
    formatParams: S
  }
}

function S(e) {
  let t, {
      username: n,
      usernameOnClickHandler: i = u.NOOP,
      roleSubscriptionOnClickHandler: r = u.NOOP,
      guildId: l,
      roleSubscriptionData: s
    } = e,
    {
      guild: a,
      totalMonthsSubscribed: d,
      showWithDuration: f,
      isRenewal: S
    } = c(l, s),
    E = {
      guildName: null == a ? void 0 : a.name,
      tierName: null == s ? void 0 : s.tier_name,
      username: n,
      usernameOnClick: i,
      roleSubscriptionOnClick: r
    };
  return t = f ? S ? o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
    ...E,
    months: d
  }) : o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
    ...E,
    months: d
  }) : S ? o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(E) : o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(E)
}

function E(e) {
  return (0, r.isCreatorMonetizationEnabledGuild)(e)
}

function h(e, t, n, r) {
  var l;
  i.default.trackWithMetadata(u.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null === (l = s.default.getCurrentUser()) || void 0 === l ? void 0 : l.id,
    channel_id: t,
    message_id: n,
    role_subscription_listing_id: r
  })
}

function _(e, t) {
  var n;
  return {
    guild_id: e.guild_id,
    sender: null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}