s.d(t, {
  B: function() {
return l;
  },
  D: function() {
return n;
  }
});
var a = s(570140);

function l() {
  a.Z.dispatch({
type: 'APPLICATION_STORE_ACCEPT_STORE_TERMS'
  });
}

function n(e) {
  a.Z.dispatch({
type: 'APPLICATION_STORE_ACCEPT_EULA',
eulaId: e
  });
}