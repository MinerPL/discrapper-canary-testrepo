"use strict";
a.r(t), a.d(t, {
  makeTenorProxyURL: function() {
    return o
  }
}), a("511434"), a("313619"), a("654714"), a("287168"), a("956660"), a("222007"), a("70102");
var n = a("49111");
let l = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;

function o(e) {
  let t = new URL("".concat(window.location.protocol).concat(e)),
    {
      ASSET_ENDPOINT: a
    } = window.GLOBAL_ENV;
  if (null == t.pathname.match(l)) throw Error("Unexpected Tenor GIF path.");
  let o = "".concat(n.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
  return "".concat(location.protocol).concat(a).concat(o)
}