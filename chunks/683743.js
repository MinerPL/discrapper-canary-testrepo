var i,
	a,
	s,
	r,
	l = n(442837),
	o = n(570140),
	c = n(496675),
	d = n(981631);
function u() {
	return !0;
}
class _ extends (r = l.ZP.Store) {
	initialize() {
		this.waitFor(c.Z), this.syncWith([c.Z], u);
	}
	channelNoticePredicate(e, t) {
		return Date.now() - t >= d.Hqc && c.Z.can(d.Plq.ADMINISTRATOR, e);
	}
}
(s = 'InviteNoticeStore'),
	(a = 'displayName') in (i = _)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new _(o.Z));
