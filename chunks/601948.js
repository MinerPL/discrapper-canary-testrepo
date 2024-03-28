"use strict";
s.r(t), s.d(t, {
  OverridePremiumTypeDropDown: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var n = s("442837"),
  l = s("481060"),
  i = s("246992"),
  r = s("535664"),
  o = s("502087"),
  d = s("594174"),
  u = s("474936");
let c = e => {
  let {
    isDevTools: t = !1
  } = e, s = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser()), c = (0, n.useStateFromStores)([o.default], () => o.default.getPremiumTypeOverride());
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(l.FormSection, {
      title: "Override Client-Side Premium Type",
      tag: l.FormTitleTags.H3,
      children: (0, a.jsx)(l.SingleSelect, {
        options: u.PREMIUM_TYPE_OVERRIDE_OPTIONS,
        value: c,
        onChange: e => {
          (0, r.updateClientPremiumTypeOverride)(e, s)
        },
        popoutLayerContext: t ? i.devToolsLayerContext : void 0
      })
    }), (0, a.jsx)(l.Button, {
      look: l.Button.Looks.LINK,
      style: {
        padding: "0"
      },
      onClick: () => {
        (0, r.updateClientPremiumTypeOverride)(u.UNSELECTED_PREMIUM_TYPE_OVERRIDE, s)
      },
      children: "Reset premium type override"
    })]
  })
}