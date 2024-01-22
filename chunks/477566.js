"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("37983");
n("884691");
var s = n("551042"),
  r = n("135230"),
  a = {
    show(e) {
      let {
        title: t,
        body: n,
        confirmColor: a,
        confirmText: o,
        cancelText: l,
        onConfirm: u,
        onCancel: d,
        onCloseCallback: c,
        secondaryConfirmText: f,
        onConfirmSecondary: _,
        className: h,
        titleClassName: g
      } = e;
      (0, s.openModal)(e => (0, i.jsx)(r.default, {
        ...e,
        title: t,
        body: n,
        confirmColor: a,
        confirmText: o,
        cancelText: l,
        onConfirm: u,
        onCancel: d,
        secondaryConfirmText: f,
        onConfirmSecondary: _,
        className: h,
        titleClassName: g
      }), {
        onCloseCallback: c
      })
    },
    close() {}
  }