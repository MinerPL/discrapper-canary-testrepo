"use strict";
t.r(n);
var a = t("735250");
t("470079");
var o = t("745900"),
  s = t("481060"),
  c = t("239091"),
  l = t("231338");
n.default = e => (0, a.jsx)(s.Menu, {
  onClose: c.closeContextMenu,
  navId: "staff-only-entry-debug",
  "aria-label": "staff only content inventory debug",
  onSelect: l.NOOP,
  children: (0, a.jsx)(s.MenuItem, {
    id: "test",
    label: "Debug (Staff-Only)",
    action: () => {
      (0, s.openModalLazy)(async () => {
        let {
          default: n
        } = await t.e("43057").then(t.bind(t, "968650"));
        return t => (0, a.jsx)(n, {
          ...t,
          ...e
        })
      })
    },
    icon: o.WrenchIcon
  })
})