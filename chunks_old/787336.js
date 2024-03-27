"use strict";
n.r(t), n.d(t, {
  isAttachmentUrl: function() {
    return f
  },
  removeSignedUrlParameters: function() {
    return E
  },
  messageHasExpiredAttachmentUrl: function() {
    return C
  },
  maybeRefreshAttachmentUrl: function() {
    return p
  }
}), n("222007");
var l, u = n("872717"),
  i = n("718517"),
  r = n("253981"),
  o = n("519841"),
  a = n("49111");
let s = new Set([window.GLOBAL_ENV.CDN_HOST, null === (l = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === l ? void 0 : l.substring(2)]),
  d = new Set(["/attachments/", "/ephemeral-attachments/"]),
  c = 1 * i.default.Millis.HOUR;

function f(e) {
  return s.has(e.hostname) && Array.from(d).some(t => e.pathname.startsWith(t))
}

function E(e) {
  let t = r.default.toURLSafe(e);
  if (null == t) return e;
  for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
  return t
}

function _(e) {
  let t = function(e) {
    let t = e.searchParams.get("ex"),
      n = parseInt(null != t ? t : "", 16);
    return isNaN(n) ? void 0 : n * i.default.Millis.SECOND
  }(e);
  return null == t || t <= Date.now() + c
}

function m(e) {
  let t = r.default.toURLSafe(e.url);
  return null != t && _(t)
}

function h(e) {
  if (null == e) return !1;
  let t = r.default.toURLSafe(e.url);
  return !!(null != t && f(t)) && _(t)
}

function M(e) {
  var t;
  return h(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(h)) || h(e.video)
}

function C(e) {
  return e.attachments.some(m) || e.embeds.some(M)
}
async function v(e) {
  let t = await u.HTTP.post({
    url: a.Endpoints.ATTACHMENTS_REFRESH_URLS,
    body: {
      attachment_urls: [e]
    }
  });
  return t.ok ? t.body.refreshed_urls[0].refreshed : void 0
}
async function p(e) {
  if (!o.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "link_clicked"
    }).enabled) return e;
  let t = r.default.toURLSafe(e);
  if (null == t || !_(t)) return e;
  let n = await v(e);
  return null != n ? n : e
}