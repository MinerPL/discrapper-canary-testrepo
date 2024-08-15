n.d(t, {
  Kq: function() {
return s;
  },
  Mo: function() {
return o;
  },
  kj: function() {
return l;
  },
  xs: function() {
return a;
  },
  zO: function() {
return i;
  }
});
var r = n(570140);
let i = e => {
r.Z.dispatch({
  type: 'UPDATE_BACKGROUND_GRADIENT_PRESET',
  presetId: e
});
  },
  a = () => {
r.Z.dispatch({
  type: 'UPDATE_BACKGROUND_GRADIENT_PRESET',
  presetId: null
});
  },
  s = () => {
r.Z.dispatch({
  type: 'CLIENT_THEMES_EDITOR_OPEN'
});
  },
  o = () => {
r.Z.dispatch({
  type: 'CLIENT_THEMES_EDITOR_CLOSE'
});
  },
  l = () => {
r.Z.dispatch({
  type: 'RESET_PREVIEW_CLIENT_THEME'
});
  };