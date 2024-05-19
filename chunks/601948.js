"use strict";
s.r(t), s.d(t, {
  OverridePremiumTypeDropDown: function() {
    return S
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
  u = s("474936"),
  c = s("7811");
let S = e => {
  let {
    isDevTools: t = !1
  } = e, s = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser()), S = (0, n.useStateFromStores)([o.default], () => {
    let e = o.default.getCreatedAtOverride();
    return null != e ? e.toISOString().substring(0, 10) : ""
  }), E = (0, n.useStateFromStores)([o.default], () => o.default.getPremiumTypeOverride()), T = e => {
    (0, r.updateClientCreatedAtOverride)(new Date(e))
  };
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(l.FormSection, {
      title: "Override Client-Side Premium Type",
      tag: l.FormTitleTags.H3,
      children: (0, a.jsx)(l.SingleSelect, {
        options: u.PREMIUM_TYPE_OVERRIDE_OPTIONS,
        value: E,
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
    }), (0, a.jsx)(l.FormSection, {
      title: "Override Client-Side Account Created At Date",
      tag: l.FormTitleTags.H3,
      children: (0, a.jsx)("input", {
        type: "date",
        value: S,
        onChange: e => T(e.target.value),
        className: c.datePicker
      })
    }), (0, a.jsx)(l.Button, {
      look: l.Button.Looks.LINK,
      style: {
        padding: "0"
      },
      type: "submit",
      onClick: () => (0, r.updateClientCreatedAtOverride)(void 0),
      children: "Reset account created at override"
    })]
  })
}