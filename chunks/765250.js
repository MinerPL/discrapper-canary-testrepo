n.d(t, {
  A4: function() {
return d;
  },
  E9: function() {
return u;
  },
  Os: function() {
return o;
  },
  jx: function() {
return _;
  },
  nv: function() {
return s;
  },
  sz: function() {
return c;
  },
  te: function() {
return a;
  },
  xh: function() {
return l;
  }
});
var r = n(570140),
  i = n(145597);

function a(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Gr;
  r.Z.dispatch({
type: 'LAYOUT_CREATE',
layoutId: e,
widgets: t,
defaultResolution: n
  });
}

function s(e, t, n) {
  r.Z.dispatch({
type: 'LAYOUT_UPDATE_WIDGET',
widgetId: e,
anchor: t,
size: n
  });
}

function o(e) {
  r.Z.dispatch({
type: 'LAYOUT_SET_TOP_WIDGET',
widgetId: e
  });
}

function l(e) {
  r.Z.dispatch({
type: 'LAYOUT_SET_PINNED',
widgetId: e
  });
}

function u(e) {
  r.Z.dispatch({
type: 'LAYOUT_DELETE_WIDGET',
widgetId: e
  });
}

function c(e) {
  r.Z.dispatch({
type: 'LAYOUT_DELETE_ALL_WIDGETS',
layoutId: e
  });
}

function d(e) {
  _([e]);
}

function _(e) {
  r.Z.dispatch({
type: 'LAYOUT_CREATE_WIDGETS',
widgetConfigs: e
  });
}