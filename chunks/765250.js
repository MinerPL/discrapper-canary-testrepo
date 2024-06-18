"use strict";
n.d(t, {
  A4: function() {
    return d
  },
  E9: function() {
    return u
  },
  Os: function() {
    return a
  },
  jx: function() {
    return c
  },
  nv: function() {
    return o
  },
  sz: function() {
    return _
  },
  te: function() {
    return s
  },
  xh: function() {
    return l
  }
});
var i = n(570140),
  r = n(145597);

function s(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.Gr;
  i.Z.dispatch({
    type: "LAYOUT_CREATE",
    layoutId: e,
    widgets: t,
    defaultResolution: n
  })
}

function o(e, t, n) {
  i.Z.dispatch({
    type: "LAYOUT_UPDATE_WIDGET",
    widgetId: e,
    anchor: t,
    size: n
  })
}

function a(e) {
  i.Z.dispatch({
    type: "LAYOUT_SET_TOP_WIDGET",
    widgetId: e
  })
}

function l(e) {
  i.Z.dispatch({
    type: "LAYOUT_SET_PINNED",
    widgetId: e
  })
}

function u(e) {
  i.Z.dispatch({
    type: "LAYOUT_DELETE_WIDGET",
    widgetId: e
  })
}

function _(e) {
  i.Z.dispatch({
    type: "LAYOUT_DELETE_ALL_WIDGETS",
    layoutId: e
  })
}

function d(e) {
  c([e])
}

function c(e) {
  i.Z.dispatch({
    type: "LAYOUT_CREATE_WIDGETS",
    widgetConfigs: e
  })
}