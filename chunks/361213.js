"use strict";
n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(981631);

function r(e, t) {
  let n;
  let r = window.GLOBAL_ENV.CDN_HOST,
    s = window.GLOBAL_ENV.API_ENDPOINT;
  return n = null != r ? "".concat(location.protocol, "//").concat(r, "/app-assets/").concat(e, "/store/").concat(t, ".mp4") : "".concat(location.protocol).concat(s).concat(i.ANM.STORE_ASSET(e, t, "mp4"))
}