"use strict";
i.r(t), i.d(t, {
  makeTenorProxyURL: function() {
    return s
  }
}), i("315314"), i("610138"), i("216116"), i("78328"), i("815648"), i("47120"), i("411104");
var l = i("981631");
let a = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;

function s(e) {
  let t = new URL("".concat(window.location.protocol).concat(e)),
    {
      ASSET_ENDPOINT: i
    } = window.GLOBAL_ENV;
  if (null == t.pathname.match(a)) throw Error("Unexpected Tenor GIF path.");
  let s = "".concat(l.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
  return "".concat(location.protocol).concat(i).concat(s)
}