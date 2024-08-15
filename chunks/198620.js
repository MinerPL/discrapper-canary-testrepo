n.d(t, {
	B_: function () {
		return g;
	},
	MO: function () {
		return _;
	},
	k5: function () {
		return I;
	},
	q5: function () {
		return E;
	}
}),
	n(47120);
var r,
	i = n(544891),
	a = n(70956),
	s = n(591759),
	o = n(796798),
	l = n(981631);
let u = new Set([window.GLOBAL_ENV.CDN_HOST, null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.substring(2)]),
	c = new Set(['/attachments/', '/ephemeral-attachments/']),
	d = 1 * a.Z.Millis.HOUR;
function _(e) {
	return u.has(e.hostname) && Array.from(c).some((t) => e.pathname.startsWith(t));
}
function E(e) {
	let t = s.Z.toURLSafe(e);
	if (null == t) return e;
	for (let e of ['ex', 'is', 'hm']) t.searchParams.delete(e);
	return t;
}
function f(e) {
	let t = (function (e) {
		let t = e.searchParams.get('ex'),
			n = parseInt(null != t ? t : '', 16);
		return isNaN(n) ? void 0 : n * a.Z.Millis.SECOND;
	})(e);
	return null == t || t <= Date.now() + d;
}
function h(e) {
	let t = s.Z.toURLSafe(e.url);
	return null != t && f(t);
}
function p(e) {
	if (null == e) return !1;
	let t = s.Z.toURLSafe(e.url);
	return !!(null != t && _(t)) && f(t);
}
function m(e) {
	var t;
	return p(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(p)) || p(e.video);
}
function I(e) {
	return e.attachments.some(h) || e.embeds.some(m);
}
async function T(e) {
	let t = await i.tn.post({
		url: l.ANM.ATTACHMENTS_REFRESH_URLS,
		body: { attachment_urls: [e] }
	});
	return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
}
async function g(e) {
	if (!o.l.getCurrentConfig({ location: 'link_clicked' }).enabled) return e;
	let t = s.Z.toURLSafe(e);
	if (null == t || !f(t)) return e;
	let n = await T(e);
	return null != n ? n : e;
}
