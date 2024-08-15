n.d(t, {
	Z: function () {
		return p;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(442837),
	s = n(606992),
	o = n(314897),
	l = n(944486),
	u = n(843693),
	c = n(576125),
	d = n(112843),
	_ = n(524484),
	E = n(981631),
	f = n(675654);
function h(e) {
	var t, n;
	let { editorHeight: r, textValue: c } = e,
		_ = i.useRef(c),
		h = (0, s.Z)({ editorHeight: r }),
		p = (0, d.Z)(),
		I = (0, a.e7)([u.ZP, o.default, l.Z], () => {
			var e;
			return u.ZP.isComboing(o.default.getId(), null !== (e = l.Z.getChannelId()) && void 0 !== e ? e : E.lds);
		}),
		m = null !== (t = null == h ? void 0 : h.left) && void 0 !== t ? t : 0,
		T = (null !== (n = null == h ? void 0 : h.top) && void 0 !== n ? n : 0) - 16,
		g = i.useMemo(() => 0.05 > Math.random(), [0 === c.length]);
	return (
		i.useEffect(() => {
			0 !== c.length && c !== _.current && I && (p.fire(m, T, g ? { sprite: f.vv } : null), (_.current = c));
		}, [c, I, m, T, g, p]),
		null
	);
}
function p(e) {
	return (0, r.jsx)(c.Z, {
		confettiLocation: _.Hn.CHAT_INPUT,
		children: (0, r.jsx)(h, { ...e })
	});
}
