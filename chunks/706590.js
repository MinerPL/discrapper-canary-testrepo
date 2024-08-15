n.d(t, {
	Z: function () {
		return E;
	},
	z: function () {
		return _;
	}
}),
	n(47120);
var r = n(392711),
	i = n.n(r),
	a = n(442837),
	s = n(592125),
	o = n(496675),
	l = n(709054),
	u = n(853856),
	c = n(362658),
	d = n(231338);
function _(e, t, n) {
	let { canShow: r, isFavoritesPerk: a } = c.Z.getCurrentConfig({ location: '7993a7_1' }, { autoTrackExposure: !1 });
	if (a) return !0;
	if (!r) return !1;
	let s = e.getFavoriteChannels();
	if (i().isEmpty(s)) return !1;
	let o = l.default.keys(s).filter((e) => {
		let r = t.getChannel(e);
		return null != r && (!!r.isPrivate() || n.can(d.Pl.VIEW_CHANNEL, r));
	});
	return !i().isEmpty(o) && !0;
}
function E() {
	let { canShow: e, isFavoritesPerk: t } = (0, c.z)('7993a7_2'),
		n = (0, a.e7)([u.Z, s.Z, o.Z], () => e && _(u.Z, s.Z, o.Z));
	return !!t || n;
}
