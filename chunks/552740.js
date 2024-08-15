n.d(t, {
  D: function() {
return l;
  },
  Z: function() {
return o;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(67212),
  s = n(689938);

function o(e) {
  (0, i.openModal)(t => (0, r.jsx)(i.ConfirmModal, {
header: s.Z.Messages.STOP_STREAMING,
confirmText: s.Z.Messages.STOP_STREAMING,
cancelText: s.Z.Messages.CANCEL,
onConfirm: () => {
  (0, a.b_)(), e();
},
...t,
children: (0, r.jsx)(i.Text, {
  variant: 'text-md/normal',
  children: s.Z.Messages.BROADCASTING_STOP_STREAM_CONFIRM_BODY
})
  }));
}

function l(e) {
  (0, i.openModal)(t => (0, r.jsx)(i.ConfirmModal, {
header: s.Z.Messages.START_STREAMING,
confirmText: s.Z.Messages.START_STREAMING,
cancelText: s.Z.Messages.CANCEL,
onConfirm: e,
confirmButtonColor: i.Button.Colors.BRAND,
...t,
children: (0, r.jsx)(i.Text, {
  variant: 'text-md/normal',
  children: s.Z.Messages.BROADCASTING_START_STREAM_CONFIRM_BODY
})
  }));
}