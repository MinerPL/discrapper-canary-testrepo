let r;
n(47120);
var i,
	a,
	s,
	o,
	l = n(442837),
	u = n(433517),
	c = n(570140),
	d = n(902676),
	_ = n(626135),
	E = n(358085),
	f = n(704133),
	h = n(981631);
let p = 'BlockedDomainStore',
	I = 'BlockedDomainRevision',
	m = null;
class T extends (i = l.ZP.Store) {
	initialize() {
		(r = null), u.K.get(p) && (u.K.remove(I), u.K.remove(p));
	}
	getCurrentRevision() {
		if (!(0, E.isDesktop)()) return null;
		if (null == r) {
			var e;
			r = null !== (e = u.K.get(I)) && void 0 !== e ? e : null;
		}
		return r;
	}
	async getBlockedDomainList() {
		return null == m && (m = new Set(await f.Z.getBlockedDomains())), m;
	}
	isBlockedDomain(e) {
		let t = n(647229);
		if (null == m) return this.getBlockedDomainList(), null;
		let r = (0, d.F)(e),
			i = new t.hash.sha256(),
			a = t.codec.hex.fromBits(i.update(r).finalize()),
			s = '';
		m.has(a) && (s = r);
		let o = r.indexOf('.');
		for (; -1 !== o && '' === s; )
			(r = r.substring(o + 1)),
				i.reset(),
				(a = t.codec.hex.fromBits(i.update(r).finalize())),
				m.has(a) && (s = r),
				(o = r.indexOf('.'));
		return '' !== s ? (_.default.track(h.rMx.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: s }), s) : null;
	}
}
(o = 'BlockedDomainStore'),
	(s = 'displayName') in (a = T)
		? Object.defineProperty(a, s, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (a[s] = o),
	(t.Z = new T(c.Z, {
		BLOCKED_DOMAIN_LIST_FETCHED: function (e) {
			let { list: t, revision: n } = e;
			(r = null), (m = new Set(t)), f.Z.saveBlockedDomains(t), u.K.set('BlockedDomainRevision', n);
		}
	}));
