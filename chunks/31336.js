n.d(t, {
  Qh: function() {
return a;
  },
  SO: function() {
return o;
  },
  Zw: function() {
return s;
  }
});
var r = n(570140),
  i = n(19759);

function a(e) {
  r.Z.dispatch({
type: 'DEV_TOOLS_SETTINGS_UPDATE',
settings: e
  });
}

function o() {
  a({
displayTools: !i.Z.displayTools
  });
}

function s() {
  r.Z.dispatch({
type: 'ANALYTICS_LOG_CLEAR'
  });
}