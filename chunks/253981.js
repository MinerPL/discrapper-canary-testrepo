"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var i = n("943224"),
  s = n.n(i),
  r = n("917351"),
  a = n.n(r),
  o = n("746379"),
  l = n("49111");
let u = /(?:^|\.)(?:discordapp|discord)\.com$/i,
  d = s.v4().source,
  c = "(?:".concat("(?:(?:[a-z]+:)?//)", "|www\\.)").concat("(?:\\S+(?::\\S*)?@)?", "(?:localhost|").concat(d, "|").concat("(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+").concat("(?:(?:[a-z\\u00a1-\\uffff]{2,}))", ")").concat("(?::\\d{2,5})?").concat('(?:[/?#][^\\s"]*)?'),
  f = RegExp(c, "ig"),
  _ = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]);

function h(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (null == e) return !1;
  return u.test(e) || n && (t = e, _.has(t.toLowerCase()))
}

function g(e) {
  return null != e && "discord:" === e
}

function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return null != e && h(o.parse(e).hostname, t)
}

function E(e) {
  return null != e && g(o.parse(e).protocol)
}
var p = {
  URL_REGEX: f,
  isDiscordHostname: h,
  isDiscordLocalhost: function(e, t) {
    return null != e && null != t && (window.location.host === e || !1)
  },
  isDiscordProtocol: g,
  isDiscordUrl: m,
  isDiscordUri: E,
  isDiscordCdnUrl: function(e) {
    return null != e && o.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST
  },
  isDiscordUrlOrUri: e => m(e) || E(e),
  isAppRoute: e => {
    let t = e.toLowerCase();
    return t.startsWith("/channels/") || t.startsWith(l.Routes.APPLICATION_STORE) || t.startsWith(l.Routes.APPLICATION_LIBRARY) || t.startsWith(l.Routes.MESSAGE_REQUESTS) || t.startsWith(l.Routes.ACTIVITIES) || t.startsWith(l.Routes.COLLECTIBLES_SHOP) || t.startsWith(l.Routes.ACTIVITY)
  },
  format: e => o.format(e),
  formatPathWithQuery: (e, t) => o.format({
    pathname: e,
    query: a.pickBy(t)
  }),
  formatSearch: e => o.format({
    query: a.pickBy(e)
  }),
  safeParseWithQuery(e) {
    try {
      return o.parse(e, !0)
    } catch (e) {
      return null
    }
  },
  makeUrl: function(e) {
    let t = __DEV__ ? window.GLOBAL_ENV.INVITE_HOST : location.host;
    return "".concat(location.protocol, "//").concat(t).concat(e)
  }
}