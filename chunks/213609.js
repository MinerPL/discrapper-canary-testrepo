n.d(t, {
	Z: function () {
		return m;
	},
	h: function () {
		return I;
	}
});
var r = n(470079),
	i = n(348327),
	a = n.n(i),
	s = n(97613),
	o = n.n(s),
	l = n(990547),
	u = n(570140),
	c = n(592125),
	d = n(944486),
	_ = n(914010),
	E = n(626135),
	f = n(367907),
	h = n(565384);
let p = (0, l.trackMaker)({
	analyticEventConfigs: E.AnalyticEventConfigs,
	dispatcher: u.Z,
	TRACK_ACTION_NAME: 'TRACK'
});
function I(e) {
	var t, n;
	let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		{ name: i, type: a, properties: s } = e;
	if (
		e.type === l.ImpressionTypes.MODAL &&
		null == e.name &&
		(0, h.Ez)().some((e) => {
			var t;
			return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide;
		})
	)
		return;
	(0, h.Ps)(e);
	let o = null !== (t = null == s ? void 0 : s.guild_id) && void 0 !== t ? t : _.Z.getGuildId(),
		u = null !== (n = null == s ? void 0 : s.channel_id) && void 0 !== n ? n : d.Z.getChannelId(o),
		I = (0, E.expandEventProperties)({
			impression_type: a,
			location: (0, h.k$)(),
			...(0, f.hH)(o),
			...(0, f.v_)(c.Z.getChannel(u)),
			...s
		});
	if (r) {
		(0, h.dT)(null, null);
		return;
	}
	null != i && null != a && ((0, E.debugLogEvent)(i, I), p(i, I)), (0, h.dT)(i, I);
}
function m(e) {
	let t =
			arguments.length > 1 && void 0 !== arguments[1]
				? arguments[1]
				: {
						disableTrack: !1,
						trackOnInitialLoad: !1
					},
		n = arguments.length > 2 ? arguments[2] : void 0,
		i = r.useRef(),
		s = r.useRef();
	r.useEffect(
		() => {
			let r = !a()(i.current, e);
			r && (i.current = e);
			let l = !a()(s.current, n);
			if ((l && (s.current = n), !r && !l)) return;
			let u = {
				...e,
				sequenceId: o()('impression_')
			};
			return (
				I(u, t.disableTrack),
				() => {
					null != u && (0, h.dw)(u);
				}
			);
		},
		t.trackOnInitialLoad ? [] : void 0
	);
}
