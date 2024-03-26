"use strict";
t.r(n), t.d(n, {
  isAttachmentUrl: function() {
    return f
  },
  removeSignedUrlParameters: function() {
    return E
  },
  messageHasExpiredAttachmentUrl: function() {
    return h
  },
  maybeRefreshAttachmentUrl: function() {
    return A
  }
}), t("222007");
var i, l = t("872717"),
  u = t("718517"),
  r = t("253981"),
  a = t("519841"),
  o = t("49111");
let d = new Set([window.GLOBAL_ENV.CDN_HOST, null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.substring(2)]),
  s = new Set(["/attachments/", "/ephemeral-attachments/"]),
  c = 1 * u.default.Millis.HOUR;

function f(e) {
  return d.has(e.hostname) && Array.from(s).some(n => e.pathname.startsWith(n))
}

function E(e) {
  let n = r.default.toURLSafe(e);
  if (null == n) return e;
  for (let e of ["ex", "is", "hm"]) n.searchParams.delete(e);
  return n
}

function _(e) {
  let n = function(e) {
    let n = e.searchParams.get("ex"),
      t = parseInt(null != n ? n : "", 16);
    return isNaN(t) ? void 0 : t * u.default.Millis.SECOND
  }(e);
  return null == n || n <= Date.now() + c
}

function m(e) {
  let n = r.default.toURLSafe(e.url);
  return null != n && _(n)
}

function M(e) {
  if (null == e) return !1;
  let n = r.default.toURLSafe(e.url);
  return !!(null != n && f(n)) && _(n)
}

function T(e) {
  var n;
  return M(e.image) || (null === (n = e.images) || void 0 === n ? void 0 : n.some(M)) || M(e.video)
}

function h(e) {
  return e.attachments.some(m) || e.embeds.some(T)
}
async function C(e) {
  let n = await l.HTTP.post({
    url: o.Endpoints.ATTACHMENTS_REFRESH_URLS,
    body: {
      attachment_urls: [e]
    }
  });
  return n.ok ? n.body.refreshed_urls[0].refreshed : void 0
}
async function A(e) {
  if (!a.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "link_clicked"
    }).enabled) return e;
  let n = r.default.toURLSafe(e);
  if (null == n || !_(n)) return e;
  let t = await C(e);
  return null != t ? t : e
}