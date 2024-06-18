"use strict";
n.d(t, {
  $Z: function() {
    return a
  },
  Ao: function() {
    return l
  },
  Cp: function() {
    return o
  },
  Cz: function() {
    return u
  },
  bA: function() {
    return r
  },
  k3: function() {
    return _
  },
  xv: function() {
    return s
  }
});
var i = n(570140);

function r(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  i.Z.dispatch({
    type: "PICTURE_IN_PICTURE_OPEN",
    id: e,
    component: t,
    props: n
  })
}

function s(e) {
  i.Z.dispatch({
    type: "PICTURE_IN_PICTURE_CLOSE",
    id: e
  })
}

function o(e) {
  i.Z.dispatch({
    type: "PICTURE_IN_PICTURE_HIDE",
    id: e
  })
}

function a(e) {
  i.Z.dispatch({
    type: "PICTURE_IN_PICTURE_SHOW",
    id: e
  })
}

function l(e, t) {
  i.Z.dispatch({
    type: "PICTURE_IN_PICTURE_MOVE",
    id: e,
    position: t
  })
}

function u(e, t) {
  i.Z.dispatch({
    type: "PICTURE_IN_PICTURE_UPDATE_RECT",
    id: e,
    rect: t
  })
}

function _(e) {
  i.Z.dispatch({
    type: "PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW",
    id: e
  })
}