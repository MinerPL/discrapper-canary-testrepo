n.d(t, {
	S: function () {
		return E;
	},
	z: function () {
		return _;
	}
});
var r = n(913527),
	i = n.n(r),
	a = n(544891),
	s = n(570140),
	o = n(168232),
	l = n(594174),
	u = n(114064),
	c = n(1163),
	d = n(981631);
async function _() {
	let e = l.default.getCurrentUser();
	try {
		let { body: t } = await a.tn.get({ url: d.ANM.USER_PERKS_DEMOS });
		(0, o.QI)(e) &&
			(t.available = {
				...t.available,
				...(function () {
					let e = u.Z.overrides(),
						t = {};
					for (let i in e) {
						var n, r;
						!0 ===
							(null !== (r = null === (n = e[i]) || void 0 === n ? void 0 : n.available) && void 0 !== r
								? r
								: void 0) && (t[i] = !0);
					}
					return t;
				})()
			}),
			s.Z.dispatch({
				type: 'PREMIUM_PERKS_DEMOS_FETCH_SUCCESS',
				demos: t
			});
	} catch (e) {
		s.Z.dispatch({ type: 'PREMIUM_PERKS_DEMOS_FETCH_FAILURE' });
	}
}
async function E(e) {
	if (u.Z.hasActivated(e)) return !0;
	let t = l.default.getCurrentUser();
	try {
		if ((0, o.QI)(t)) {
			let t = (function (e) {
				return u.Z.overrides()[e];
			})(e);
			if ((null == t ? void 0 : t.activateSuccess) === !0)
				return (
					f(e, {
						start_time: i()().toISOString(),
						end_time: (c.Z.getCurrentConfig({ location: 'activatePerkDemo' }, { autoTrackExposure: !1 })
							.extendedDemoDuration
							? i()().add(t.demoDuration, 'days')
							: i()().add(1, 'hour')
						).toISOString()
					}),
					!0
				);
		}
		let { body: n } = await a.tn.post({ url: d.ANM.USER_PERKS_DEMOS_ACTIVATE(e) });
		return f(e, n), !0;
	} catch {
		return (
			s.Z.dispatch({
				type: 'PREMIUM_PERKS_DEMO_ACTIVATE_FAILURE',
				perkType: e
			}),
			!1
		);
	}
}
function f(e, t) {
	s.Z.dispatch({
		type: 'PREMIUM_PERKS_DEMO_ACTIVATE_SUCCESS',
		perkType: e,
		activatedDuration: t
	});
}
