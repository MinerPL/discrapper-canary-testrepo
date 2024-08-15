n.d(t, {
	Z: function () {
		return o;
	}
});
var r = n(470079),
	i = n(399606),
	a = n(745510),
	s = n(351780);
function o() {
	let { createMultipleConfettiAt: e } = r.useContext(a.h),
		t = (0, i.e7)([s.Z], () => s.Z.getState()),
		n = r.useCallback(
			(e) => ({
				size: {
					type: 'static-random',
					minValue: e.confettiSize - 7,
					maxValue: e.confettiSize + 7
				}
			}),
			[]
		);
	return r.useMemo(
		() => ({
			fire: (r, i, a) => {
				var s, o;
				let l =
					(null == a ? void 0 : a.settings) != null
						? {
								...t,
								...a.settings
							}
						: t;
				e(
					r,
					i,
					n(l),
					(null !== (s = null == a ? void 0 : a.count) && void 0 !== s ? s : l.confettiCount) *
						(null !== (o = null == a ? void 0 : a.countMultiplier) && void 0 !== o ? o : 1),
					{ sprite: null == a ? void 0 : a.sprite }
				);
			}
		}),
		[e, n, t]
	);
}
