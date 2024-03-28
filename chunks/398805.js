"use strict";

function s(e, t) {
  var n;
  let s = null !== (n = decodeURIComponent(t).split("/").pop()) && void 0 !== n ? n : "temp.gif";
  return "".concat(e, "-").concat(s)
}
n.r(t), n.d(t, {
  getFileNameFromGifUrl: function() {
    return s
  }
}), n("489887")