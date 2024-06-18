"use strict";
var i = n(735250);
n(470079);
var r = n(952265),
  s = n(468026),
  o = n(689938);
t.Z = {
  show(e) {
    let {
      title: t,
      body: n,
      confirmColor: o,
      confirmText: a,
      cancelText: l,
      onConfirm: u,
      onCancel: _,
      onCloseCallback: d,
      secondaryConfirmText: c,
      onConfirmSecondary: E,
      className: I,
      titleClassName: T
    } = e;
    (0, r.h7)(e => (0, i.jsx)(s.default, {
      ...e,
      title: t,
      body: n,
      confirmColor: o,
      confirmText: a,
      cancelText: l,
      onConfirm: u,
      onCancel: _,
      secondaryConfirmText: c,
      onConfirmSecondary: E,
      className: I,
      titleClassName: T
    }), {
      onCloseCallback: d
    })
  },
  close() {},
  confirm(e) {
    return new Promise(t => {
      this.show({
        onConfirm() {
          t(!0)
        },
        cancelText: o.Z.Messages.CANCEL,
        onCancel() {
          t(!1)
        },
        ...e
      })
    })
  }
}