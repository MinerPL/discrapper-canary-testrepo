var n = t(735250);
t(470079);
var a = t(481060),
  i = t(723359),
  r = t(231338);
s.Z = {
  openNewUserAgeGateModal: e => {
(0, a.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    t.e('20727'),
    t.e('69790')
  ]).then(t.bind(t, 298237));
  return s => (0, n.jsx)(e, {
    ...s
  });
}, {
  modalKey: i.$$,
  onCloseRequest: r.dG,
  onCloseCallback: e
});
  },
  openClaimAccountModal: function() {
let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
  s = arguments.length > 1 ? arguments[1] : void 0;
(0, a.openModalLazy)(async () => {
  let {
    default: s
  } = await t.e('1677').then(t.bind(t, 324239));
  return t => (0, n.jsx)(s, {
    claimRequired: e,
    ...t
  });
}, {
  onCloseRequest: e ? r.dG : null,
  onCloseCallback: s
});
  }
};