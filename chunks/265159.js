"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("981631");

function i() {
  (0, n.openModalLazy)(async () => {
    let {
      default: e
    } = await s.e("38047").then(s.bind(s, "975863"));
    return t => (0, a.jsx)(e, {
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