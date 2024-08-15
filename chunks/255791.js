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
	E = n(981631);
let h = { MAX_MEMBER_COUNT: new Set() };
class m extends (i = l.ZP.Store) {
	initialize() {
		var e;
		this.waitFor(_.Z, u.Z, d.Z), this.syncWith([_.Z, u.Z, d.Z], E.dG4), o.K.remove(E.vID.MAX_MEMBER_COUNT_100), o.K.remove(E.vID.MAX_MEMBER_COUNT_250), (e = new Set(o.K.get(E.vID.MAX_MEMBER_COUNT))), (h[E.vID.MAX_MEMBER_COUNT] = void 0 !== e ? e : new Set());
	}
	isVisible(e) {
		var t;
		if (null == e) return !1;
		let n = null !== (t = d.Z.getMemberCount(e.id)) && void 0 !== t ? t : 0,
			i = _.Z.can(E.Plq.ADMINISTRATOR, e);
		return !e.hasFeature(E.oNc.CLAN) && !h[E.vID.MAX_MEMBER_COUNT].has(e.id) && i && e.maxMembers > 0 && e.maxMembers - n <= 10000;
	}
}
(r = 'MaxMemberCountChannelNoticeStore'),
	(s = 'displayName') in (a = m)
		? Object.defineProperty(a, s, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (a[s] = r),
	(t.Z = new m(c.Z, {
		MAX_MEMBER_COUNT_NOTICE_DISMISS: function (e) {
			let t = e.guildId;
			if (!h[E.vID.MAX_MEMBER_COUNT].has(t)) return h[E.vID.MAX_MEMBER_COUNT].add(t), o.K.set(E.vID.MAX_MEMBER_COUNT, h[E.vID.MAX_MEMBER_COUNT]), !0;
		}
	}));
