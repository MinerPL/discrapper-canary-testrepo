"use strict";
n.r(t), n.d(t, {
  getRoleSubscriptionPurchaseSystemMessageAstFormattedContent: function() {
    return c
  },
  getRoleSubscriptionPurchaseSystemMessageContentMobile: function() {
    return S
  },
  getRoleSubscriptionPurchaseSystemMessageEventProperties: function() {
    return E
  },
  getRoleSubscriptionPurchaseSystemMessageFormattedContent: function() {
    return a
  },
  isEligibleForRoleSubscriptionPurchaseSystemMessageSettings: function() {
    return g
  },
  trackRoleSubscriptionPurchaseMessageTierClick: function() {
    return h
  }
});
var r = n("367907"),
  i = n("200876"),
  l = n("430824"),
  s = n("594174");
n("709054"), n("523361");
var o = n("981631"),
  u = n("689938");

function a(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  } = e, {
    content: s,
    formatParams: o
  } = f({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  });
  return s.format(o)
}

function c(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  } = e, {
    content: s,
    formatParams: o
  } = f({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  });
  return s.astFormat(o)
}

function d(e, t) {
  var n, r;
  let i = l.default.getGuild(e),
    s = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
  return {
    guild: i,
    totalMonthsSubscribed: s,
    showWithDuration: s > 0,
    isRenewal: null !== (r = null == t ? void 0 : t.is_renewal) && void 0 !== r && r
  }
}

function f(e) {
  let t, {
      username: n,
      usernameOnClickHandler: r,
      roleSubscriptionOnClickHandler: i,
      guildId: l,
      roleSubscriptionData: s
    } = e,
    {
      guild: o,
      totalMonthsSubscribed: a,
      showWithDuration: c,
      isRenewal: f
    } = d(l, s);
  return t = c ? f ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : f ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN, {
    content: t,
    formatParams: {
      username: n,
      usernameHook: r,
      guildName: null == o ? void 0 : o.name,
      handleGuildNameClick: i,
      tierName: null == s ? void 0 : s.tier_name,
      months: a
    }
  }
}

function S(e) {
  let t, {
      username: n,
      usernameOnClickHandler: r = o.NOOP,
      roleSubscriptionOnClickHandler: i = o.NOOP,
      guildId: l,
      roleSubscriptionData: s
    } = e,
    {
      guild: a,
      totalMonthsSubscribed: c,
      showWithDuration: f,
      isRenewal: S
    } = d(l, s),
    g = {
      guildName: null == a ? void 0 : a.name,
      tierName: null == s ? void 0 : s.tier_name,
      username: n,
      usernameOnClick: r,
      roleSubscriptionOnClick: i
    };
  return t = f ? S ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
    ...g,
    months: c
  }) : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
    ...g,
    months: c
  }) : S ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(g) : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(g)
}

function g(e) {
  return (0, i.isCreatorMonetizationEnabledGuild)(e)
}

function h(e, t, n, i) {
  var l;
  r.default.trackWithMetadata(o.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null === (l = s.default.getCurrentUser()) || void 0 === l ? void 0 : l.id,
    channel_id: t,
    message_id: n,
    role_subscription_listing_id: i
  })
}

function E(e, t) {
  var n;
  return {
    guild_id: e.guild_id,
    sender: null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}