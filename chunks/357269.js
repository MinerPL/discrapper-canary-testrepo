"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n(47120), n(757143);
var i = n(593473),
  r = n(981631);
let s = /-/g;

function o(e) {
  let [, , t, n] = e.split("/"), o = null == t ? void 0 : t.toUpperCase().replace(s, "_"), a = null == n ? void 0 : n.toUpperCase().replace(s, "_");
  if (r.oAB.hasOwnProperty(o) && (null == a || "" === a || r.oAB.hasOwnProperty(a))) {
    let {
      source: e
    } = (0, i.parse)(location.search);
    return {
      source: e,
      section: r.oAB[o],
      subsection: a
    }
  }
  return null
}