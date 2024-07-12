n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(570140),
  r = n(71509);

function l() {
  (0, s.openModalLazy)(async () => {
let {
  default: e
} = await Promise.all([
  n.e('52030'),
  n.e('11260'),
  n.e('61650')
]).then(n.bind(n, 266653));
return t => (0, i.jsx)(e, {
  ...t
});
  }, {
onCloseCallback: () => {
  a.Z.dispatch({
    type: 'CLEAR_AUTHENTICATION_ERRORS'
  }), a.Z.dispatch({
    type: 'LOGIN_RESET',
    isMultiAccount: !0
  });
},
modalKey: r.Ui
  });
}