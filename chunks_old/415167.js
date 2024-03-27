"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  l = n("49111");

function s() {
  (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("920067").then(n.bind(n, "920067"));
    return t => (0, i.jsx)(e, {
      ...t,
      source: {
        page: l.AnalyticsPages.USER_SETTINGS,
        section: l.AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE,
        object: l.AnalyticsObjects.BUTTON_CTA,
        type: l.AnalyticsObjectTypes.BUY
      }
    })
  })
}