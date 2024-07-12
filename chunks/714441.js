t.d(n, {
  i: function() {
return o;
  }
});
var i = t(735250);
t(470079);
var r = t(481060);

function o(e) {
  let {
applicationName: n,
onConfirm: o,
onCancel: l
  } = e;
  return (0, r.openModalLazy)(async () => {
let {
  ConfirmNoSharedServerSubscribeWarningModal: e
} = await t.e('99809').then(t.bind(t, 525549));
return t => (0, i.jsx)(e, {
  ...t,
  applicationName: n,
  onConfirm: o,
  onCancel: l
});
  }, {
modalKey: 'application-user-subscribe-no-shared-server-warning'
  });
}