t(411104);
var a = t(735250);
t(470079);
var i = t(481060),
  s = t(689938);
n.Z = {
  openSecureFramesUserVerificationModal: function(e, n) {
(0, i.openModalLazy)(async () => {
  let i = (await Promise.all([
    t.e('95437'),
    t.e('33397')
  ]).then(t.bind(t, 963410))).default;
  return t => (0, a.jsx)(i, {
    userId: e,
    channelId: n,
    ...t
  });
});
  },
  openSecureFramesUpdateConfirmation: function(e) {
let {
  title: n,
  subtitle: l,
  onConfirm: o
} = e;
(0, i.openModalLazy)(async () => {
  let {
    ConfirmModal: e
  } = await Promise.resolve().then(t.bind(t, 481060));
  return t => (0, a.jsx)(e, {
    header: n,
    confirmText: s.Z.Messages.CONFIRM,
    cancelText: s.Z.Messages.CANCEL,
    onConfirm: o,
    ...t,
    children: (0, a.jsx)(i.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      children: l
    })
  });
});
  },
  handleSecureFramesUserVerificationLink: function(e) {
throw Error('handleSecureFramesUserVerificationLink not implemented');
  }
};