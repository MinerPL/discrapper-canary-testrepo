"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("740492"),
  r = n("984014"),
  o = n("295510"),
  u = n("394059"),
  d = n("689938");

function c(e, t) {
  let [n, c, f] = (0, r.default)(e, t), h = (0, l.useStateFromStores)([i.default], () => i.default.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, a.jsx)(s.MenuCheckboxItem, {
    id: "self-stream-hide",
    label: d.default.Messages.SHOW_SELF_STREAM,
    checked: !c,
    action: () => {
      if (h || c) return f(!c);
      (0, s.openModal)(e => (0, a.jsx)(o.default, {
        ...e,
        type: u.SelfStreamAndVideoAlertType.STREAM,
        onConfirm: () => f(!c)
      }))
    }
  }) : null
}