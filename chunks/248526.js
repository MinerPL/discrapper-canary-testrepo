"use strict";
r.r(t), r.d(t, {
  default: function() {
    return g
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("848246"),
  n = r("442837"),
  o = r("481060"),
  s = r("570140"),
  c = r("485731"),
  d = r("594174"),
  u = r("246992"),
  h = r("297175");
let m = [{
    label: "No Override",
    value: !1
  }, {
    label: "Available: true",
    value: !0
  }],
  p = [{
    label: "No Override",
    value: !1
  }, {
    label: "Success",
    value: !0
  }];

function g() {
  let e = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    [t, r] = i.useState(!1),
    [g, f] = i.useState(!1);
  return (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsx)(o.FormSection, {
      title: "Override HQ Streaming: Available",
      className: h.formElement,
      tag: o.FormTitleTags.H3,
      children: (0, a.jsx)(o.SingleSelect, {
        options: m,
        value: t,
        onChange: e => {
          r(e)
        },
        popoutLayerContext: u.devToolsLayerContext
      })
    }), (0, a.jsx)(o.FormSection, {
      title: "Override HQ Streaming: Activate",
      className: h.formElement,
      tag: o.FormTitleTags.H3,
      children: (0, a.jsx)(o.SingleSelect, {
        options: p,
        value: g,
        onChange: e => {
          f(e)
        },
        popoutLayerContext: u.devToolsLayerContext
      })
    }), (0, a.jsx)(o.Button, {
      onClick: () => void(s.default.dispatch({
        type: "PREMIUM_PERKS_DEMO_OVERRIDE",
        perkType: l.EntitlementFeatureNames.STREAM_HIGH_QUALITY,
        user: e,
        available: t,
        activateSuccess: g
      }), (0, c.hqStreamingSetEnabled)(!1), (0, c.hqStreamingPopoutDismissed)(!1), (0, c.hqStreamingFrameAnimationPlayed)(!1), (0, c.hqStreamingUnlockAnimationPlayed)(!1)),
      children: "Update"
    })]
  })
}