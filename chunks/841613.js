n.d(t, {
  Gl: function() {
return i;
  },
  hG: function() {
return s;
  },
  oI: function() {
return o;
  }
});
var a = n(570140);

function s(e, t, n) {
  a.Z.dispatch({
type: 'CONNECTED_DEVICE_SET',
displayName: e,
connectedDevicePreference: t,
location: n
  });
}

function i(e) {
  a.Z.dispatch({
type: 'CONNECTED_DEVICE_IGNORE',
displayName: e
  });
}

function o() {
  a.Z.dispatch({
type: 'CONNECTED_DEVICE_NEVER_SHOW_MODAL'
  });
}