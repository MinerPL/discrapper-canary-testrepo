var n = r(788899),
	i = r(544364);
t.Z = function () {
	return {
		onProcessRule: function (e) {
			'keyframes' === e.type && (e.at = (0, n.if)(e.at));
		},
		onProcessStyle: function (e, t) {
			return 'style' !== t.type
				? e
				: (function e(t) {
						for (var r in t) {
							var o = t[r];
							if ('fallbacks' === r && Array.isArray(o)) {
								t[r] = o.map(e);
								continue;
							}
							var s = !1,
								a = (0, n.wR)(r);
							a && a !== r && (s = !0);
							var u = !1,
								l = (0, n.HO)(a, (0, i.EK)(o));
							l && l !== o && (u = !0), (s || u) && (s && delete t[r], (t[a || r] = l || o));
						}
						return t;
					})(e);
		},
		onChangeValue: function (e, t) {
			return (0, n.HO)(t, (0, i.EK)(e)) || e;
		}
	};
};
