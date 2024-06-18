"use strict";
n.d(t, {
  D: function() {
    return l
  },
  Z: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(67212),
  o = n(689938);

function a(e) {
  (0, r.openModal)(t => (0, i.jsx)(r.ConfirmModal, {
    header: o.Z.Messages.STOP_STREAMING,
    confirmText: o.Z.Messages.STOP_STREAMING,
    cancelText: o.Z.Messages.CANCEL,
    onConfirm: () => {
      (0, s.b_)(), e()
    },
    ...t,
    children: (0, i.jsx)(r.Text, {
      variant: "text-md/normal",
      children: o.Z.Messages.BROADCASTING_STOP_STREAM_CONFIRM_BODY
    })
  }))
}

function l(e) {
  (0, r.openModal)(t => (0, i.jsx)(r.ConfirmModal, {
    header: o.Z.Messages.START_STREAMING,
    confirmText: o.Z.Messages.START_STREAMING,
    cancelText: o.Z.Messages.CANCEL,
    onConfirm: e,
    confirmButtonColor: r.Button.Colors.BRAND,
    ...t,
    children: (0, i.jsx)(r.Text, {
      variant: "text-md/normal",
      children: o.Z.Messages.BROADCASTING_START_STREAM_CONFIRM_BODY
    })
  }))
}