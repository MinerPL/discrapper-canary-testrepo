"use strict";
s.r(t), s.d(t, {
  DiscoverySetupModalSteps: function() {
    return l
  },
  trackFlowAnalytics: function() {
    return d
  },
  navigateToAndTrackHelpCenterClick: function() {
    return u
  }
});
var a, l, n = s("716241"),
  i = s("599110"),
  r = s("701909"),
  o = s("49111");
(a = l || (l = {})).DESCRIPTION = "description", a.CATEGORIES = "categories", a.TAGS = "tags", a.AGREE_TO_RULES = "agree_to_rules";
let d = (e, t, s) => {
    i.default.track(o.AnalyticEvents.USER_FLOW_TRANSITION, {
      flow_type: o.AnalyticsSections.DISCOVERY_SETUP_MODAL,
      from_step: e,
      to_step: t,
      ...(0, n.collectGuildAnalyticsMetadata)(s)
    })
  },
  u = e => {
    let {
      articleId: t,
      guildId: s,
      modalStep: a = null,
      pageView: l = null
    } = e;
    open(r.default.getArticleURL(t)), i.default.track(o.AnalyticEvents.DISCOVERY_SETUP_CTA_CLICKED, {
      cta_name: o.HELP_CENTER_CTA_ANALYTICS_NAME,
      discovery_settings_view: l,
      help_center_article_id: t,
      modal_step: a,
      ...(0, n.collectGuildAnalyticsMetadata)(s)
    })
  }