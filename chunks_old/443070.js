"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983"),
  o = n("884691"),
  u = n("77078"),
  r = n("272030"),
  c = n("861370"),
  i = n("782340");

function d(e) {
  var t;
  let n = (0, c.default)({
    id: e.id,
    label: e.label,
    shiftId: e.shiftId
  });
  return o.useEffect(() => {
    null == n && (0, r.closeContextMenu)()
  }, [n]), (0, l.jsx)(u.Menu, {
    onSelect: e.onSelect,
    navId: "dev-context",
    "aria-label": null !== (t = e["aria-label"]) && void 0 !== t ? t : i.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: r.closeContextMenu,
    children: n
  })
}