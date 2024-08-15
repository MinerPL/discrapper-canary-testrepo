n.d(t, {
	q: function () {
		return p;
	}
}),
	n(47120);
var r,
	i = n(442837),
	a = n(570140),
	s = n(353926),
	o = n(626135),
	l = n(358085),
	u = n(998502);
function c(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let d = { hashes: {} };
async function _() {
	if (!l.isPlatformEmbedded || !(0, l.isWindows)()) return [];
	await u.ZP.ensureModule('discord_media');
	let e = u.ZP.requireModule('discord_media');
	return (await e.getSystemAnalyticsBlob()) || [];
}
async function E() {
	try {
		let e = (await _()).filter((e) => d.hashes[e.name] !== e.hash);
		for (let { name: t, hash: n, data: r } of e) o.default.track(t, r), ((d = { hashes: { ...d.hashes } }).hashes[t] = n);
		e.length > 0 && h.emitChange();
	} catch (e) {}
}
class f extends (r = i.ZP.PersistedStore) {
	initialize(e) {
		(d = null != e && 'object' == typeof e.hashes ? e : { hashes: {} }), this.waitFor(s.Z);
	}
	getState() {
		return d;
	}
	async info() {
		try {
			let e = (await _()).find((e) => 'hardware_detected' === e.name);
			if (null == e) return null;
			return e.data;
		} catch (e) {}
	}
}
c(f, 'displayName', 'SystemAnalyticsStore'), c(f, 'persistKey', 'SystemAnalyticsStore');
let h = new f(a.Z, {
	START_SESSION: function () {
		return E(), !1;
	}
});
function p() {
	return h.info();
}
