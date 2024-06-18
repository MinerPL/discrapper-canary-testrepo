"use strict";
n.d(t, {
  Ce: function() {
    return c
  },
  Ji: function() {
    return _
  },
  _G: function() {
    return S
  },
  _I: function() {
    return E
  },
  _S: function() {
    return T
  },
  fD: function() {
    return I
  },
  mG: function() {
    return N
  },
  pU: function() {
    return d
  },
  r4: function() {
    return O
  }
}), n(642549), n(47120);
var i = n(973361),
  r = n(729594),
  s = n(544891),
  o = n(358085),
  a = n(591759),
  l = n(908442);
n(981631);
let u = void 0,
  _ = (0, o.isAndroid)() ? u.Version.split(" - ")[0] : (0, o.isIOS)() ? u.Version : void 0;

function d(e) {
  return "".concat(location.protocol, "//").concat(location.host).concat(e)
}

function c() {
  let e = a.Z.safeParseWithQuery(d("/__development/build_overrides"));
  return null == e ? Promise.resolve(null) : (e.search = null, _ && (e.query.version = _), s.tn.get({
    url: r.format(e),
    oldFormErrors: !0
  }).then(e => e.body || null, () => null))
}

function E(e) {
  if (N(e)) return Promise.resolve(function(e) {
    let t = e.match(f);
    if (null == t || 2 !== t.length) return null;
    let n = (0, o.getNativePlatform)(),
      i = t[1];
    return {
      targetBuildOverride: {
        ["discord_".concat(n)]: {
          type: "branch",
          id: i
        }
      },
      validForUserIds: [],
      expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT"
    }
  }(e));
  let t = a.Z.safeParseWithQuery(e);
  return null == t ? Promise.resolve(null) : (t.search = null, t.query.meta = "true", _ && (t.query.version = _), t.host = window.location.host, s.tn.get({
    url: r.format(t),
    oldFormErrors: !0
  }).then(e => e.body || null, () => null))
}

function I() {
  return -1 !== window.document.cookie.indexOf("".concat(l.ZF, "="))
}

function T() {
  try {
    var e;
    let t = i.parse(window.document.cookie)[l.ZF];
    if (null == t) return {};
    let n = JSON.parse(atob(t.substring(t.indexOf(".") + 1)));
    return null !== (e = n.$meta.experiments) && void 0 !== e ? e : {}
  } catch (e) {
    return {}
  }
}
let h = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$", "i");

function S(e) {
  return null != e && h.test(e)
}
let f = RegExp("^dev://branch/([\\w-./]+)$", "i");

function N(e) {
  return null != e && f.test(e)
}
let A = new Set(["canary.discord.com", "ptb.discord.com", "discord.com", "canary.discordapp.com", "ptb.discordapp.com", "discordapp.com"]),
  m = new Set(["/__development/link", "/__development/link/"]);

function O(e) {
  if (N(e)) return {
    payload: null,
    url: e
  };
  let t = a.Z.safeParseWithQuery(e);
  if (null == t || !A.has(t.hostname) || !("s" in t.query) || !m.has(t.pathname)) return null;
  for (let e in t.query) "s" !== e && delete t.query[e];
  return {
    payload: t.query.s,
    url: r.format(t)
  }
}