n(47120), n(757143);
var r, i, a, o, s, l = n(442837),
  u = n(433517),
  c = n(570140),
  d = n(591759),
  _ = n(902676),
  E = n(616922);
let f = 'MaskedLinkStore',
  h = new Set(),
  p = new Set(),
  m = null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.replace('//', '');

function I(e) {
  let t = (0, _.F)(e);
  switch (t) {
case window.GLOBAL_ENV.CDN_HOST:
case window.GLOBAL_ENV.INVITE_HOST:
case window.GLOBAL_ENV.GIFT_CODE_HOST:
case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
case m:
case location.hostname:
  return !0;
default:
  return E.SD.includes(t) || d.Z.isDiscordHostname(t) || h.has(t);
  }
}

function T(e) {
  let t = (0, _.E)(e);
  return p.has(t);
}
class g extends(i = l.ZP.Store) {
  initialize() {
var e;
let t = null !== (e = u.K.get(f)) && void 0 !== e ? e : {};
if (Array.isArray(t))
  h = new Set(null != t ? Array.from(t) : null), p = new Set();
else {
  let {
    trustedDomains: e,
    trustedProtocols: n
  } = t;
  h = new Set(null != e ? Array.from(e) : null), p = new Set(null != n ? Array.from(n) : null);
}
  }
  isTrustedDomain(e) {
return I(e);
  }
  isTrustedProtocol(e) {
return T(e);
  }
}
s = 'MaskedLinkStore', (o = 'displayName') in(a = g) ? Object.defineProperty(a, o, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[o] = s, t.Z = new g(c.Z, {
  MASKED_LINK_ADD_TRUSTED_DOMAIN: function(e) {
let {
  url: t
} = e;
if (I(t))
  return !1;
h.add((0, _.F)(t)), u.K.set(f, {
  trustedDomains: h,
  trustedProtocols: p
});
  },
  MASKED_LINK_ADD_TRUSTED_PROTOCOL: function(e) {
let {
  url: t
} = e;
if (T(t))
  return !1;
p.add((0, _.E)(t)), u.K.set(f, {
  trustedDomains: h,
  trustedProtocols: p
});
  }
});