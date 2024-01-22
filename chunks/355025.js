"use strict";
n.r(t), n.d(t, {
  APP_VERSION: function() {
    return d
  },
  getAPIEndpoint: function() {
    return c
  },
  getBuildOverride: function() {
    return f
  },
  getBuildOverrideMeta: function() {
    return _
  },
  probablyHasBuildOverride: function() {
    return h
  },
  getBuildOverrideExperiments: function() {
    return g
  },
  isBuildOverrideLink: function() {
    return E
  },
  validateURL: function() {
    return S
  }
}), n("101997"), n("222007");
var i = n("160679"),
  s = n("746379"),
  r = n("872717"),
  a = n("773336"),
  o = n("253981"),
  l = n("180855");
n("49111");
let u = void 0,
  d = (0, a.isAndroid)() ? u.Version.split(" - ")[0] : (0, a.isIOS)() ? u.Version : void 0;

function c(e) {
  return "".concat(location.protocol, "//").concat(location.host).concat(e)
}

function f() {
  let e = o.default.safeParseWithQuery(c("/__development/build_overrides"));
  return null == e ? Promise.resolve(null) : (e.search = null, d && (e.query.version = d), r.default.get({
    url: s.format(e),
    oldFormErrors: !0
  }).then(e => e.body || null, () => null))
}

function _(e) {
  let t = o.default.safeParseWithQuery(e);
  return null == t ? Promise.resolve(null) : (t.search = null, t.query.meta = "true", d && (t.query.version = d), t.host = window.location.host, r.default.get({
    url: s.format(t),
    oldFormErrors: !0
  }).then(e => e.body || null, () => null))
}

function h() {
  return -1 !== window.document.cookie.indexOf("".concat(l.BUILD_OVERRIDE_COOKIE_NAME, "="))
}

function g() {
  try {
    var e;
    let t = i.parse(window.document.cookie)[l.BUILD_OVERRIDE_COOKIE_NAME];
    if (null == t) return {};
    let n = JSON.parse(atob(t.substring(t.indexOf(".") + 1)));
    return null !== (e = n.$meta.experiments) && void 0 !== e ? e : {}
  } catch (e) {
    return {}
  }
}
let m = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$", "i");

function E(e) {
  return null != e && m.test(e)
}
let p = new Set(["canary.discord.com", "ptb.discord.com", "discord.com", "canary.discordapp.com", "ptb.discordapp.com", "discordapp.com"]),
  v = new Set(["/__development/link", "/__development/link/"]);

function S(e) {
  let t = o.default.safeParseWithQuery(e);
  if (null == t || !p.has(t.hostname) || !("s" in t.query) || !v.has(t.pathname)) return null;
  for (let e in t.query) "s" !== e && delete t.query[e];
  return {
    payload: t.query.s,
    url: s.format(t)
  }
}