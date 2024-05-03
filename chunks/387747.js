"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("735250");
s("470079");
var n = s("410575"),
  l = s("100527"),
  i = s("211242"),
  r = s("89057"),
  o = s("223639"),
  d = s("347475"),
  u = s("977156"),
  c = s("97926"),
  S = s("541540"),
  E = s("206339"),
  T = s("981631"),
  f = s("46140"),
  m = s("455805");

function _() {
  let e = (0, u.useIsEligibleForQuests)({
      location: f.QuestsExperimentLocations.USER_SETTINGS_GIFT_INVENTORY
    }),
    {
      enabled: t
    } = o.default.useExperiment({
      location: "UserSettingsInventory"
    }, {
      autoTrackExposure: !0
    }),
    s = (0, i.useBlockedPaymentsConfig)();
  return (0, a.jsxs)(a.Fragment, {
    children: [!s && (0, a.jsxs)(a.Fragment, {
      children: [t && (0, a.jsx)(d.default, {
        location: l.default.USER_SETTINGS_GIFT_INVENTORY,
        className: m.giftNitro,
        imageClassName: m.giftNitroImage,
        textContainerOverrideStyles: {
          padding: "32px",
          width: "360px"
        },
        analyticsLocation: {
          page: T.AnalyticsPages.GIFTING_SETTINGS,
          section: T.AnalyticsSections.GIFT_BANNER
        }
      }), (0, a.jsx)(n.default, {
        section: T.AnalyticsSections.LIBRARY_INVENTORY_CODE_REDEMPTION,
        children: (0, a.jsx)(S.default, {})
      })]
    }), e && (0, a.jsx)(n.default, {
      section: T.AnalyticsSections.QUESTS,
      children: (0, a.jsx)(c.default, {})
    }), !s && (0, a.jsx)(n.default, {
      section: T.AnalyticsSections.LIBRARY_INVENTORY_GIFTS_LIST,
      children: (0, a.jsx)(E.default, {})
    }), s && (0, a.jsx)(r.BlockedPaymentsContentSettings, {})]
  })
}