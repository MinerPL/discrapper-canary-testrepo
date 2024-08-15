n(47120);
var i,
	a,
	s,
	r,
	l = n(442837),
	o = n(433517),
	c = n(570140),
	d = n(650774),
	u = n(430824),
	_ = n(496675),
	E = n(135899),
	h = n(981631);
let m = 'publicUpsellChannelNoticeGuilds',
	I = new Set();
class g extends (i = l.ZP.Store) {
	initialize() {
		var e;
		this.waitFor(_.Z, u.Z, d.Z), this.syncWith([_.Z, u.Z, d.Z], h.dG4), (I = ((e = new Set(o.K.get(m))), e));
	}
	isVisible(e) {
		if (null == e) return;
		let t = d.Z.getMemberCount(e.id);
		return !I.has(e.id) && null != t && t >= E.U3 && _.Z.can(h.Plq.ADMINISTRATOR, e) && !e.hasFeature(h.oNc.COMMUNITY);
	}
}
(r = 'EnablePublicGuildUpsellNoticeStore'),
	(s = 'displayName') in (a = g)
		? Object.defineProperty(a, s, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (a[s] = r),
	(t.Z = new g(c.Z, {
		PUBLIC_UPSELL_NOTICE_DISMISS: function (e) {
			let t = e.guildId;
			if (!I.has(t)) return I.add(t), o.K.set(m, I), !0;
		}
	}));
