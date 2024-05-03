"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("230711"),
  i = s("63063"),
  r = s("74538"),
  o = s("937615"),
  d = s("981631"),
  u = s("474936"),
  c = s("689938"),
  S = s("219220");
t.default = function(e) {
  let {
    hasAppliedGuildBoosts: t,
    isUserPremiumTier2: s,
    hasGuildAffinitiesOrInGuild: E,
    subscriptionIsPausedOrPausePending: T
  } = e, {
    subtitle: f,
    flavor: m
  } = function(e) {
    let {
      hasAppliedGuildBoosts: t,
      isUserPremiumTier2: s,
      hasGuildAffinitiesOrInGuild: a,
      subscriptionIsPausedOrPausePending: n
    } = e;
    if (n) return {
      flavor: c.default.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION_WITH_LINK.format({
        onClick: () => l.default.open(d.UserSettingsSections.SUBSCRIPTIONS)
      })
    };
    if (!a) return {
      subtitle: c.default.Messages.GUILD_BOOSTING_USER_SETTINGS_NO_JOINED_SERVER_SUBTITLE
    };
    if (t) return {
      subtitle: c.default.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS,
      flavor: c.default.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_ACTIVE_BOOSTS_FLAVOR.format({
        helpdeskArticle: i.default.getArticleURL(d.HelpdeskArticles.GUILD_SUBSCRIPTIONS)
      })
    };
    let S = u.SubscriptionPlanInfo[u.SubscriptionPlans.PREMIUM_MONTH_GUILD],
      E = r.default.getDefaultPrice(S.id, s),
      T = (0, o.formatRate)((0, o.formatPrice)(E.amount, E.currency), S.interval, S.intervalCount);
    return {
      subtitle: s ? c.default.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_SUBBED_NO_ACTIVE_BOOSTS : c.default.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_SUB_NO_ACTIVE_BOOSTS,
      flavor: c.default.Messages.GUILD_BOOSTING_USER_SETTINGS_SUBTITLE_NO_ACTIVE_BOOSTS_FLAVOR.format({
        monthlyGuildBoostPrice: T
      })
    }
  }({
    hasAppliedGuildBoosts: t,
    isUserPremiumTier2: s,
    hasGuildAffinitiesOrInGuild: E,
    subscriptionIsPausedOrPausePending: T
  });
  return (0, a.jsxs)("div", {
    className: S.wrapper,
    children: [(0, a.jsx)(n.Heading, {
      variant: "heading-lg/bold",
      className: S.subtitle,
      children: f
    }), null != m && (0, a.jsx)(n.Text, {
      variant: "text-sm/normal",
      children: m
    })]
  })
}