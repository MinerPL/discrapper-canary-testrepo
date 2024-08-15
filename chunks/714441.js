o.d(n, {
  i: function() {
return a;
  }
});
var t = o(735250);
o(470079);
var i = o(481060);

function a(e) {
  let {
applicationName: n,
onConfirm: a,
onCancel: r
  } = e;
  return (0, i.openModalLazy)(async () => {
let {
  ConfirmNoSharedServerSubscribeWarningModal: e
} = await o.e('99809').then(o.bind(o, 525549));
return o => (0, t.jsx)(e, {
  ...o,
  applicationName: n,
  onConfirm: a,
  onCancel: r
});
  }, {
modalKey: 'application-user-subscribe-no-shared-server-warning'
  });
}