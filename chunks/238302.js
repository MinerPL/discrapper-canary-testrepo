"use strict";
n.d(t, {
  bM: function() {
    return o
  },
  kj: function() {
    return l
  },
  my: function() {
    return a
  },
  xs: function() {
    return s
  },
  zO: function() {
    return r
  }
});
var i = n(570140);
let r = e => {
    i.Z.dispatch({
      type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
      presetId: e
    })
  },
  s = () => {
    i.Z.dispatch({
      type: "UPDATE_BACKGROUND_GRADIENT_PRESET",
      presetId: null
    })
  },
  o = () => {
    i.Z.dispatch({
      type: "CLIENT_THEMES_EDITOR_OPEN"
    })
  },
  a = () => {
    i.Z.dispatch({
      type: "CLIENT_THEMES_EDITOR_CLOSE"
    })
  },
  l = () => {
    i.Z.dispatch({
      type: "RESET_PREVIEW_CLIENT_THEME"
    })
  }