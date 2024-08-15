var i,
	a,
	s,
	l,
	r = n(392711),
	o = n.n(r),
	c = n(442837),
	u = n(570140),
	d = n(430824);
let h = null,
	m = {};
class p extends (l = c.ZP.Store) {
	initialize() {
		this.waitFor(d.Z);
	}
	getOptimalRegion() {
		var e;
		let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
			n = this.getRegions(t);
		return null != n
			? null !==
					(e = n.find((e) => {
						let { optimal: t } = e;
						return t;
					})) && void 0 !== e
				? e
				: o().sample(n)
			: null;
	}
	getOptimalRegionId() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
			t = this.getOptimalRegion(e);
		return null != t ? t.id : null;
	}
	getRandomRegion() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
			t = this.getRegions(e);
		return null != t ? o().sample(t) : null;
	}
	getRandomRegionId() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
			t = this.getRandomRegion(e);
		return null != t ? t.id : null;
	}
	getRegions(e) {
		return null != e ? m[e] : h;
	}
}
(s = 'RegionStore'),
	(a = 'displayName') in (i = p)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new p(u.Z, {
		LOAD_REGIONS: function (e) {
			let t = o().sortBy(e.regions, (e) => e.name);
			null != e.guildId ? (m[e.guildId] = t) : (h = t);
		},
		GUILD_DELETE: function (e) {
			delete m[e.guild.id];
		}
	}));
