r(411104);
var i = r(735250);
r(470079);
var s = r(481060),
  a = r(689938);
n.Z = {
  openSecureFramesUserVerificationModal: function(e, n) {
(0, s.openModalLazy)(async () => {
  let s = (await Promise.all([
    r.e('95437'),
    r.e('33397')
  ]).then(r.bind(r, 963410))).default;
  return r => (0, i.jsx)(s, {
    userId: e,
    channelId: n,
    ...r
  });
});
  },
  openSecureFramesUpdateConfirmation: function(e) {
let {
  title: n,
  subtitle: t,
  onConfirm: l
} = e;
(0, s.openModalLazy)(async () => {
  let {
    ConfirmModal: e
  } = await Promise.resolve().then(r.bind(r, 481060));
  return r => (0, i.jsx)(e, {
    header: n,
    confirmText: a.Z.Messages.CONFIRM,
    cancelText: a.Z.Messages.CANCEL,
    onConfirm: l,
    ...r,
    children: (0, i.jsx)(s.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      children: t
    })
  });
});
  },
  handleSecureFramesUserVerificationLink: function(e) {
throw Error('handleSecureFramesUserVerificationLink not implemented');
  }
};