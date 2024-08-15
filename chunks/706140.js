n.d(t, {
	cv: function () {
		return E;
	}
});
var r = n(470079),
	i = n(442837),
	a = n(581883),
	s = n(914010),
	o = n(915486),
	l = n(68985),
	u = n(211644),
	c = n(605236),
	d = n(57207),
	_ = n(526761);
function E(e, t, n) {
	let E = (0, i.e7)([a.Z], () => {
			var e;
			return null === (e = a.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
		}),
		f = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
		h = (0, d.i)(e),
		p = null;
	a.Z.hasLoaded(_.yP.PRELOADED_USER_SETTINGS) ? (p = h.find((e) => null == E || !(0, o.jl)(E, e))) : null != E && (p = h.find((e) => !(0, o.jl)(E, e)));
	let m = (function (e, t, n, a, s) {
		let o = (0, u.ZP)((t) => null != e && t.currentlyShown.has(e)),
			d = (0, i.e7)([l.Z], () => null != e && l.Z.hasUserHitDCCap(e));
		return (
			r.useEffect(() => {
				if (null != e)
					return (
						(0, c.kk)(
							e,
							{
								groupName: n,
								guildId: t,
								version: void 0
							},
							a
						),
						() => {
							if (null == e) return;
							let t = !l.Z.hasUserHitDCCap();
							(0, u.gE)(
								{
									content: e,
									groupName: n
								},
								t
							);
						}
					);
			}, [e, n, t, d, a, s]),
			o && null != e ? e : null
		);
	})(p, f, t, n);
	return [
		m,
		r.useCallback(
			(e, n) => {
				null != p &&
					(0, c.EW)(p, {
						dismissAction: e,
						groupName: t,
						guildId: f,
						forceTrack: n
					});
			},
			[p, t, f]
		)
	];
}
