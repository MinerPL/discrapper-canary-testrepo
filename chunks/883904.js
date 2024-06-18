"use strict";
n.d(t, {
  EG: function() {
    return o
  },
  Nj: function() {
    return a
  },
  Vr: function() {
    return s
  },
  cm: function() {
    return r
  }
});
var i = n(570140);
let r = e => {
    i.Z.dispatch({
      type: "DCF_HANDLE_DC_SHOWN",
      dismissibleContent: e
    })
  },
  s = e => {
    i.Z.dispatch({
      type: "DCF_HANDLE_DC_DISMISSED",
      dismissibleContent: e
    })
  },
  o = () => {
    i.Z.dispatch({
      type: "DCF_RESET"
    })
  },
  a = e => {
    i.Z.dispatch({
      type: "DCF_DAILY_CAP_OVERRIDE",
      value: e
    })
  }