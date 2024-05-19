"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("481060"),
  s = r("246992"),
  c = r("277513"),
  d = r("104837");

function u() {
  let e = {
      BOGOAnnouncementModal: async () => {
        let {
          default: e
        } = await Promise.all([r.e("49237"), r.e("99387"), r.e("81539"), r.e("34049")]).then(r.bind(r, "868508"));
        return t => (0, a.jsx)(e, {
          renderModalProps: t
        })
      },
      PremiumSubscriptionAprilMarketingDecoModal: async () => {
        let {
          default: e
        } = await Promise.all([r.e("99387"), r.e("8016"), r.e("18327")]).then(r.bind(r, "731433"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }
    },
    t = Object.keys(e).map(e => ({
      label: e,
      value: e
    })),
    [l, u] = i.useState(t[0].value);
  return (0, a.jsx)(o.ScrollerThin, {
    className: n()(c.panel),
    children: (0, a.jsx)("div", {
      className: d.panelInner,
      children: (0, a.jsxs)("section", {
        className: d.section,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: "Open a Modal"
        }), (0, a.jsxs)("div", {
          className: d.inputRow,
          children: [(0, a.jsx)(o.Select, {
            className: d.input,
            options: t,
            isSelected: e => l === e,
            placeholder: "Trial ID",
            serialize: e => String(e),
            select: e => u(e),
            popoutLayerContext: s.devToolsLayerContext
          }), (0, a.jsx)(o.Button, {
            onClick: () => {
              (0, o.openModalLazy)(e[l])
            },
            children: "Open"
          })]
        })]
      })
    })
  })
}