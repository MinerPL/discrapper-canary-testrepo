"use strict";
t.r(r), t.d(r, {
  OverridePremiumTypeDropDown: function() {
    return u
  }
});
var a = t("37983");
t("884691");
var n = t("446674"),
  i = t("77078"),
  o = t("811199"),
  l = t("285471"),
  s = t("400205"),
  c = t("697218"),
  d = t("646718");
let u = e => {
  let {
    isDevTools: r = !1
  } = e, t = (0, n.useStateFromStores)([c.default], () => c.default.getCurrentUser()), u = (0, n.useStateFromStores)([s.default], () => s.default.getPremiumTypeOverride());
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.FormSection, {
      title: "Override Client-Side Premium Type",
      tag: i.FormTitleTags.H3,
      children: (0, a.jsx)(i.SingleSelect, {
        options: d.PREMIUM_TYPE_OVERRIDE_OPTIONS,
        value: u,
        onChange: e => {
          (0, l.updateClientPremiumTypeOverride)(e, t)
        },
        popoutLayerContext: r ? o.devToolsLayerContext : void 0
      })
    }), (0, a.jsx)(i.Button, {
      look: i.Button.Looks.LINK,
      style: {
        padding: "0"
      },
      onClick: () => {
        (0, l.updateClientPremiumTypeOverride)(d.UNSELECTED_PREMIUM_TYPE_OVERRIDE, t)
      },
      children: "Reset premium type override"
    })]
  })
}