"use strict";

function i(e) {
  return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(e)
}

function r(e) {
  return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(e)
}

function s() {
  return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
}
n.d(t, {
  Gk: function() {
    return s
  },
  Oh: function() {
    return r
  },
  z0: function() {
    return i
  }
})