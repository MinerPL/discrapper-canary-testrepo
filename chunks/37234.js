"use strict";
n.d(t, {
  Ou: function() {
    return o
  },
  jN: function() {
    return r
  },
  xf: function() {
    return s
  }
});
var i = n(570140);

function r(e) {
  i.Z.dispatch({
    type: "LAYER_PUSH",
    component: e
  })
}

function s() {
  i.Z.dispatch({
    type: "LAYER_POP"
  })
}

function o() {
  i.Z.dispatch({
    type: "LAYER_POP_ALL"
  })
}