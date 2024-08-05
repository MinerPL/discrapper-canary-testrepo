n.d(t, {
  _: function() {
return s;
  },
  y: function() {
return a;
  }
});
var i = n(570140);

function s(e, t) {
  i.Z.dispatch({
type: 'APP_LAUNCHER_SHOW',
entrypoint: e,
activeViewType: t
  });
}

function a(e) {
  i.Z.dispatch({
type: 'APP_LAUNCHER_DISMISS',
closeReason: e
  });
}