"use strict";

function n() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    t = window.GLOBAL_ENV.GUILD_TEMPLATE_HOST;
  return "".concat(s ? "".concat(location.protocol) : "", "//").concat(t).concat("/".concat(e))
}
t.d(s, {
  Z: function() {
    return n
  }
})