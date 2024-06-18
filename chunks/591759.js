"use strict";
n(47120), n(315314), n(610138), n(216116), n(78328), n(815648);
var i = n(628735),
  r = n.n(i),
  s = n(392711),
  o = n.n(s),
  a = n(729594),
  l = n(981631);
let u = /(?:^|\.)(?:discordapp|discord)\.com$/i,
  _ = r().v4().source,
  d = RegExp("(?:".concat("(?:(?:[a-z]+:)?//)", "|www\\.)").concat("(?:\\S+(?::\\S*)?@)?", "(?:localhost|").concat(_, "|").concat("(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+").concat("(?:(?:[a-z\\u00a1-\\uffff]{2,}))", ")").concat("(?::\\d{2,5})?").concat('(?:[/?#][^\\s"]*)?'), "ig"),
  c = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]);

function E(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (null == e) return !1;
  return u.test(e) || n && (t = e, c.has(t.toLowerCase()))
}

function I(e) {
  return null != e && "discord:" === e
}

function T(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return null != e && E(a.parse(e).hostname, t)
}

function h(e) {
  return null != e && I(a.parse(e).protocol)
}
t.Z = {
  URL_REGEX: d,
  isDiscordHostname: E,
  isDiscordLocalhost: function(e, t) {
    return null != e && null != t && (window.location.host === e || !1)
  },
  isDiscordProtocol: I,
  isDiscordUrl: T,
  isDiscordUri: h,
  isDiscordCdnUrl: function(e) {
    return null != e && a.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST
  },
  isDiscordUrlOrUri: e => T(e) || h(e),
  isAppRoute: e => {
    let t = e.toLowerCase();
    return t.startsWith("/channels/") || t.startsWith(l.Z5c.APPLICATION_STORE) || t.startsWith(l.Z5c.APPLICATION_LIBRARY) || t.startsWith(l.Z5c.MESSAGE_REQUESTS) || t.startsWith(l.Z5c.ACTIVITIES) || t.startsWith(l.Z5c.COLLECTIBLES_SHOP) || t.startsWith(l.Z5c.ACTIVITY)
  },
  format: e => a.format(e),
  formatPathWithQuery: (e, t) => a.format({
    pathname: e,
    query: o().pickBy(t)
  }),
  formatSearch: e => a.format({
    query: o().pickBy(e)
  }),
  safeParseWithQuery(e) {
    try {
      return a.parse(e, !0)
    } catch (e) {
      return null
    }
  },
  toURLSafe(e, t) {
    try {
      return new URL(e, t)
    } catch (e) {
      return null
    }
  },
  makeUrl: function(e) {
    let t = (0, location.host);
    return "".concat(location.protocol, "//").concat(t).concat(e)
  }
}