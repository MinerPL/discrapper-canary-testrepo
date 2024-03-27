"use strict";
t.r(r), t.d(r, {
  default: function() {
    return u
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  o = t.n(i),
  l = t("77078"),
  s = t("811199"),
  c = t("699412"),
  d = t("961295");

function u() {
  let e = {
      BOGOAnnouncementModal: async () => {
        let {
          default: e
        } = await t.el("981125").then(t.bind(t, "981125"));
        return r => (0, a.jsx)(e, {
          renderModalProps: r
        })
      }
    },
    r = Object.keys(e).map(e => ({
      label: e,
      value: e
    })),
    [i, u] = n.useState(r[0].value);
  return (0, a.jsx)(l.ScrollerThin, {
    className: o(c.panel),
    children: (0, a.jsx)("div", {
      className: d.panelInner,
      children: (0, a.jsxs)("section", {
        className: d.section,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: "Open a Modal"
        }), (0, a.jsxs)("div", {
          className: d.inputRow,
          children: [(0, a.jsx)(l.Select, {
            className: d.input,
            options: r,
            isSelected: e => i === e,
            placeholder: "Trial ID",
            serialize: e => String(e),
            select: e => u(e),
            popoutLayerContext: s.devToolsLayerContext
          }), (0, a.jsx)(l.Button, {
            onClick: () => {
              (0, l.openModalLazy)(e[i])
            },
            children: "Open"
          })]
        })]
      })
    })
  })
}