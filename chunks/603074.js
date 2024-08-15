n.d(t, {
	Z: function () {
		return g;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(990547),
	l = n(442837),
	u = n(481060),
	c = n(100527),
	d = n(906732),
	_ = n(213609),
	E = n(28546),
	f = n(675478),
	h = n(19780),
	p = n(208049),
	I = n(763296),
	m = n(526617),
	T = n(127549);
function g(e) {
	let {
			guildId: t,
			channel: n,
			containerWidth: a,
			onClose: g,
			onSelect: S,
			analyticsSource: A,
			suppressPlaySound: N,
			shouldShowUpsell: v = !0,
			gridNotice: O,
			autoWidth: R = !1,
			soundButtonOverlay: C,
			listPadding: y,
			renderHeader: D,
			defaultSoundsOnly: L
		} = e,
		b = (0, l.e7)([I.Z], () => I.Z.isFetchingSounds() || I.Z.isFetchingDefaultSounds()),
		M = (0, l.e7)([h.Z], () => h.Z.getMediaSessionId()),
		{ analyticsLocations: P } = (0, d.ZP)(c.Z.SOUNDBOARD_POPOUT);
	return (
		(0, _.Z)({
			type: o.ImpressionTypes.POPOUT,
			name: o.ImpressionNames.SOUNDBOARD_POPOUT,
			properties: {
				source: A,
				guild_id: t,
				media_session_id: M
			}
		}),
		i.useEffect(() => {
			p.w(), f.DZ.loadIfNecessary(), (0, E.ql)('');
		}, []),
		(0, r.jsx)(d.Gt, {
			value: P,
			children: (0, r.jsx)(u.Dialog, {
				className: s()(T.picker, {
					[T.fetching]: b,
					[T.autoWidth]: R
				}),
				children: b
					? (0, r.jsx)(u.Spinner, {})
					: (0, r.jsx)(m.Z, {
							guildId: t,
							channel: n,
							onClose: g,
							onSelect: S,
							containerWidth: a,
							suppressPlaySound: N,
							shouldShowUpsell: v,
							gridNotice: O,
							soundButtonOverlay: C,
							listPadding: y,
							renderHeader: D,
							defaultSoundsOnly: L
						})
			})
		})
	);
}
