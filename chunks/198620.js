"use strict";
n.d(t, {
  B_: function() {
    return A
  },
  MO: function() {
    return c
  },
  k5: function() {
    return f
  },
  q5: function() {
    return E
  }
}), n(47120);
var i, r = n(544891),
  s = n(70956),
  o = n(591759),
  a = n(796798),
  l = n(981631);
let u = new Set([window.GLOBAL_ENV.CDN_HOST, null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.substring(2)]),
  _ = new Set(["/attachments/", "/ephemeral-attachments/"]),
  d = 1 * s.Z.Millis.HOUR;

function c(e) {
  return u.has(e.hostname) && Array.from(_).some(t => e.pathname.startsWith(t))
}

function E(e) {
  let t = o.Z.toURLSafe(e);
  if (null == t) return e;
  for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
  return t
}

function I(e) {
  let t = function(e) {
    let t = e.searchParams.get("ex"),
      n = parseInt(null != t ? t : "", 16);
    return isNaN(n) ? void 0 : n * s.Z.Millis.SECOND
  }(e);
  return null == t || t <= Date.now() + d
}

function T(e) {
  let t = o.Z.toURLSafe(e.url);
  return null != t && I(t)
}

function h(e) {
  if (null == e) return !1;
  let t = o.Z.toURLSafe(e.url);
  return !!(null != t && c(t)) && I(t)
}

function S(e) {
  var t;
  return h(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(h)) || h(e.video)
}

function f(e) {
  return e.attachments.some(T) || e.embeds.some(S)
}
async function N(e) {
  let t = await r.tn.post({
    url: l.ANM.ATTACHMENTS_REFRESH_URLS,
    body: {
      attachment_urls: [e]
    }
  });
  return t.ok ? t.body.refreshed_urls[0].refreshed : void 0
}
async function A(e) {
  if (!a.l.getCurrentConfig({
      location: "link_clicked"
    }).enabled) return e;
  let t = o.Z.toURLSafe(e);
  if (null == t || !I(t)) return e;
  let n = await N(e);
  return null != n ? n : e
}