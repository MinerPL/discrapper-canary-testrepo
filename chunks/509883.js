n.d(t, {
	_: function () {
		return l;
	}
});
var r = n(573654),
	i = n(964742),
	a = n(144459);
function s(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t &&
			(r = r.filter(function (t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})),
			n.push.apply(n, r);
	}
	return n;
}
function o(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = null != arguments[t] ? arguments[t] : {};
		t % 2
			? s(Object(n), !0).forEach(function (t) {
					(function (e, t, n) {
						t in e
							? Object.defineProperty(e, t, {
									value: n,
									enumerable: !0,
									configurable: !0,
									writable: !0
								})
							: (e[t] = n);
					})(e, t, n[t]);
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
				: s(Object(n)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
					});
	}
	return e;
}
function l(e) {
	return function () {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			n = e.getMonitor(),
			s = e.getRegistry();
		(function (e) {
			(0, r.k)(e.isDragging(), 'Cannot call drop while not dragging.'), (0, r.k)(!e.didDrop(), 'Cannot call drop twice during one drag operation.');
		})(n),
			(function (e) {
				var t = e.getTargetIds().filter(e.canDropOnTarget, e);
				return t.reverse(), t;
			})(n).forEach(function (l, u) {
				var c = (function (e, t, n, i) {
						var s = n.getTarget(e),
							o = s ? s.drop(i, e) : void 0;
						return (
							(function (e) {
								(0, r.k)(void 0 === e || (0, a.Kn)(e), 'Drop result must either be an object or undefined.');
							})(o),
							void 0 === o && (o = 0 === t ? {} : i.getDropResult()),
							o
						);
					})(l, u, s, n),
					d = {
						type: i.rp,
						payload: { dropResult: o(o({}, t), c) }
					};
				e.dispatch(d);
			});
	};
}
