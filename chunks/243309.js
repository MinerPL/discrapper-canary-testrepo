r.d(t, {
	v: function () {
		return I;
	}
});
var n = r(696486),
	a = r(263449),
	o = r(101284),
	i = r(622916),
	_ = r(394798),
	E = r(454463),
	s = r(163162),
	c = r(748688);
function I(e) {
	let t;
	(0, c.x5)(e) && (t = 1000 * (0, o.ph)());
	let r = (0, c.Ei)();
	if (!r) return;
	E.X && i.kg.log(`[Profiling] started profiling span: ${(0, n.XU)(e).description}`);
	let I = (0, _.DM)();
	async function u() {
		if (!!e && !!r)
			return r
				.stop()
				.then((t) => {
					if ((l && (s.m9.clearTimeout(l), (l = void 0)), E.X && i.kg.log(`[Profiling] stopped profiling of span: ${(0, n.XU)(e).description}`), !t)) {
						E.X && i.kg.log(`[Profiling] profiler returned null profile for: ${(0, n.XU)(e).description}`, 'this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started');
						return;
					}
					(0, c.dz)(I, t);
				})
				.catch((e) => {
					E.X && i.kg.log('[Profiling] error while stopping profiler:', e);
				});
	}
	(0, a.nZ)().setContext('profile', {
		profile_id: I,
		start_timestamp: t
	});
	let l = s.m9.setTimeout(() => {
			E.X && i.kg.log('[Profiling] max profile duration elapsed, stopping profiling for:', (0, n.XU)(e).description), u();
		}, c.WU),
		R = e.end.bind(e);
	e.end = function () {
		return e
			? (u().then(
					() => {
						R();
					},
					() => {
						R();
					}
				),
				e)
			: R();
	};
}
