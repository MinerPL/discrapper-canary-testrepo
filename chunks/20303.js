"use strict";
n(47120), n(757143);
var i, r, s, o, a, l = n(442837),
  u = n(433517),
  _ = n(570140),
  d = n(591759),
  c = n(902676),
  E = n(616922);
let I = "MaskedLinkStore",
  T = new Set,
  h = new Set,
  S = null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.replace("//", "");

function f(e) {
  let t = (0, c.F)(e);
  switch (t) {
    case window.GLOBAL_ENV.CDN_HOST:
    case window.GLOBAL_ENV.INVITE_HOST:
    case window.GLOBAL_ENV.GIFT_CODE_HOST:
    case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
    case S:
    case location.hostname:
      return !0;
    default:
      return E.SD.includes(t) || d.Z.isDiscordHostname(t) || T.has(t)
  }
}

function N(e) {
  let t = (0, c.E)(e);
  return h.has(t)
}
class A extends(r = l.ZP.Store) {
  initialize() {
    var e;
    let t = null !== (e = u.K.get(I)) && void 0 !== e ? e : {};
    if (Array.isArray(t)) T = new Set(null != t ? Array.from(t) : null), h = new Set;
    else {
      let {
        trustedDomains: e,
        trustedProtocols: n
      } = t;
      T = new Set(null != e ? Array.from(e) : null), h = new Set(null != n ? Array.from(n) : null)
    }
  }
  isTrustedDomain(e) {
    return f(e)
  }
  isTrustedProtocol(e) {
    return N(e)
  }
}
a = "MaskedLinkStore", (o = "displayName") in(s = A) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new A(_.Z, {
  MASKED_LINK_ADD_TRUSTED_DOMAIN: function(e) {
    let {
      url: t
    } = e;
    if (f(t)) return !1;
    T.add((0, c.F)(t)), u.K.set(I, {
      trustedDomains: T,
      trustedProtocols: h
    })
  },
  MASKED_LINK_ADD_TRUSTED_PROTOCOL: function(e) {
    let {
      url: t
    } = e;
    if (N(t)) return !1;
    h.add((0, c.E)(t)), u.K.set(I, {
      trustedDomains: T,
      trustedProtocols: h
    })
  }
})