"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("410575"),
  i = s("100527"),
  r = s("211242"),
  o = s("89057"),
  d = s("223639"),
  u = s("347475"),
  c = s("57655"),
  S = s("97926"),
  E = s("541540"),
  T = s("206339"),
  _ = s("981631"),
  f = s("46140"),
  m = s("709510");

function g() {
  let e = (0, c.useIsEligibleForQuests)({
      location: f.QuestsExperimentLocations.USER_SETTINGS_GIFT_INVENTORY
    }),
    {
      enabled: t
    } = d.default.useExperiment({
      location: "UserSettingsInventory"
    }, {
      autoTrackExposure: !0
    });
  return (0, r.useBlockedPaymentsConfig)() ? (0, a.jsx)(o.BlockedPaymentsContentSettings, {}) : (0, a.jsxs)(a.Fragment, {
    children: [t && (0, a.jsx)(u.default, {
      location: i.default.USER_SETTINGS_GIFT_INVENTORY,
      className: m.giftNitro,
      imageClassName: m.giftNitroImage,
      textContainerOverrideStyles: {
        padding: "32px",
        width: "360px"
      },
      analyticsLocation: {
        page: _.AnalyticsPages.GIFTING_SETTINGS,
        section: _.AnalyticsSections.GIFT_BANNER
      }
    }), (0, a.jsx)(l.default, {
      section: _.AnalyticsSections.LIBRARY_INVENTORY_CODE_REDEMPTION,
      children: (0, a.jsx)(E.default, {})
    }), e && (0, a.jsx)(l.default, {
      section: _.AnalyticsSections.QUESTS,
      children: (0, a.jsx)(S.default, {})
    }), (0, a.jsx)(n.FormDivider, {
      className: m.divider
    }), (0, a.jsx)(l.default, {
      section: _.AnalyticsSections.LIBRARY_INVENTORY_GIFTS_LIST,
      children: (0, a.jsx)(T.default, {})
    })]
  })
}