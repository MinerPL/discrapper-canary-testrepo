n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(570140);
async function s(e) {
  let t = await (0, i.openModalLazy)(async () => {
let {
  default: t
} = await Promise.all([
  n.e('8739'),
  n.e('57650')
]).then(n.bind(n, 677012));
return n => (0, r.jsx)(t, {
  ...n,
  ...e
});
  }, {
onCloseCallback: () => {
  a.Z.dispatch({
    type: 'INTERACTION_IFRAME_MODAL_CLOSE',
    applicationId: e.application.id
  });
}
  });
  a.Z.dispatch({
type: 'INTERACTION_IFRAME_MODAL_KEY_CREATE',
modalKey: t
  });
}