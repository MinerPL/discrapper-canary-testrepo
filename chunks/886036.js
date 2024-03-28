"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("735250");
n("470079");
var s = n("481060"),
  u = n("906732"),
  a = n("695346"),
  c = n("626135"),
  r = n("981631"),
  i = n("689938");

function o() {
  let e = a.ExpressionSuggestionsEnabled.useSetting(),
    {
      analyticsLocations: t
    } = (0, u.default)();
  return (0, l.jsx)(s.MenuCheckboxItem, {
    id: "sticker-suggestions",
    label: i.default.Messages.SUGGEST_STICKERS,
    checked: e,
    action: () => {
      c.default.track(r.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
        enabled: !e,
        location: {
          object: r.AnalyticsObjects.CONTEXT_MENU
        },
        location_stack: t
      }), a.ExpressionSuggestionsEnabled.updateSetting(!e)
    }
  })
}