var r = n(470079),
	i =
		'function' == typeof Object.is
			? Object.is
			: function (e, t) {
					return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
				},
	a = r.useState,
	s = r.useEffect,
	o = r.useLayoutEffect,
	l = r.useDebugValue;
function u(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !i(e, n);
	} catch (e) {
		return !0;
	}
}
var c =
	'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
		? function (e, t) {
				return t();
			}
		: function (e, t) {
				var n = t(),
					r = a({
						inst: {
							value: n,
							getSnapshot: t
						}
					}),
					i = r[0].inst,
					c = r[1];
				return (
					o(
						function () {
							(i.value = n), (i.getSnapshot = t), u(i) && c({ inst: i });
						},
						[e, n, t]
					),
					s(
						function () {
							return (
								u(i) && c({ inst: i }),
								e(function () {
									u(i) && c({ inst: i });
								})
							);
						},
						[e]
					),
					l(n),
					n
				);
			};
t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
