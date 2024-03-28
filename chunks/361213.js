"use strict";
i.r(t), i.d(t, {
  default: function() {
    return n
  }
});
var l = i("981631");

function n(e, t) {
  let i;
  let n = window.GLOBAL_ENV.CDN_HOST,
    a = window.GLOBAL_ENV.API_ENDPOINT;
  return i = null != n ? "".concat(location.protocol, "//").concat(n, "/app-assets/").concat(e, "/store/").concat(t, ".mp4") : "".concat(location.protocol).concat(a).concat(l.Endpoints.STORE_ASSET(e, t, "mp4"))
}