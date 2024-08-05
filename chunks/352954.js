s(411104);
var n = s(735250);
s(470079);
var a = s(481060),
  i = s(689938);
t.Z = {
  openSecureFramesUserVerificationModal: function(e, t) {
(0, a.openModalLazy)(async () => {
  let a = (await Promise.all([
    s.e('95437'),
    s.e('33397')
  ]).then(s.bind(s, 963410))).default;
  return s => (0, n.jsx)(a, {
    userId: e,
    channelId: t,
    ...s
  });
});
  },
  openSecureFramesUpdateConfirmation: function(e) {
let {
  title: t,
  subtitle: r,
  onConfirm: o
} = e;
(0, a.openModalLazy)(async () => {
  let {
    ConfirmModal: e
  } = await Promise.resolve().then(s.bind(s, 481060));
  return s => (0, n.jsx)(e, {
    header: t,
    confirmText: i.Z.Messages.CONFIRM,
    cancelText: i.Z.Messages.CANCEL,
    onConfirm: o,
    ...s,
    children: (0, n.jsx)(a.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      children: r
    })
  });
});
  },
  handleSecureFramesUserVerificationLink: function(e) {
throw Error('handleSecureFramesUserVerificationLink not implemented');
  }
};