"use strict";
n.d(t, {
  ZP: function() {
    return o
  }
});
let i = Object.freeze({
    overflowY: "scroll",
    overflowX: "hidden"
  }),
  r = Object.freeze({
    overflowX: "scroll",
    overflowY: "hidden"
  }),
  s = Object.freeze({
    overflow: "auto"
  });

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
    n = "vertical" === t ? i : "horizontal" === t ? r : s;
  return null != e ? {
    ...n,
    ...e
  } : n
}