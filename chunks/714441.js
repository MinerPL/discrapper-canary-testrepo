i.d(n, {
  i: function() {
return r;
  }
});
var t = i(735250);
i(470079);
var a = i(481060);

function r(e) {
  let {
applicationName: n,
onConfirm: r,
onCancel: o
  } = e;
  return (0, a.openModalLazy)(async () => {
let {
  ConfirmNoSharedServerSubscribeWarningModal: e
} = await i.e('99809').then(i.bind(i, 525549));
return i => (0, t.jsx)(e, {
  ...i,
  applicationName: n,
  onConfirm: r,
  onCancel: o
});
  }, {
modalKey: 'application-user-subscribe-no-shared-server-warning'
  });
}