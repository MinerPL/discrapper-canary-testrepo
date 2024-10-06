n.d(t, {
    B_: function () {
        return T;
    },
    MO: function () {
        return d;
    },
    k5: function () {
        return I;
    },
    q5: function () {
        return _;
    }
}),
    n(47120);
var r,
    i = n(544891),
    a = n(70956),
    s = n(591759),
    o = n(981631);
let l = new Set([window.GLOBAL_ENV.CDN_HOST, null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.substring(2)]),
    u = new Set(['/attachments/', '/ephemeral-attachments/']),
    c = 1 * a.Z.Millis.HOUR;
function d(e) {
    return l.has(e.hostname) && Array.from(u).some((t) => e.pathname.startsWith(t));
}
function _(e) {
    let t = s.Z.toURLSafe(e);
    if (null == t) return e;
    for (let e of ['ex', 'is', 'hm']) t.searchParams.delete(e);
    return t;
}
function E(e) {
    let t = (function (e) {
        let t = e.searchParams.get('ex'),
            n = parseInt(null != t ? t : '', 16);
        return isNaN(n) ? void 0 : n * a.Z.Millis.SECOND;
    })(e);
    return null == t || t <= Date.now() + c;
}
function f(e) {
    let t = s.Z.toURLSafe(e.url);
    return null != t && E(t);
}
function h(e) {
    if (null == e) return !1;
    let t = s.Z.toURLSafe(e.url);
    return !!(null != t && d(t)) && E(t);
}
function p(e) {
    var t;
    return h(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(h)) || h(e.video);
}
function I(e) {
    return e.attachments.some(f) || e.embeds.some(p);
}
async function m(e) {
    let t = await i.tn.post({
        url: o.ANM.ATTACHMENTS_REFRESH_URLS,
        body: { attachment_urls: [e] }
    });
    return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
}
async function T(e) {
    let t = s.Z.toURLSafe(e);
    if (null == t || !E(t)) return e;
    let n = await m(e);
    return null != n ? n : e;
}
