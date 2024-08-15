n.d(t, {
	s: function () {
		return s;
	}
});
var r = n(573654),
	i = n(778010),
	a = n(964742);
function s(e) {
	return function (t) {
		var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			s = n.clientOffset;
		(function (e) {
			(0, r.k)(Array.isArray(e), 'Expected targetIds to be an array.');
		})(t);
		var o = t.slice(0),
			l = e.getMonitor(),
			u = e.getRegistry();
		return (
			(function (e, t, n) {
				(0, r.k)(t.isDragging(), 'Cannot call hover while not dragging.'), (0, r.k)(!t.didDrop(), 'Cannot call hover after drop.');
				for (var i = 0; i < e.length; i++) {
					var a = e[i];
					(0, r.k)(e.lastIndexOf(a) === i, 'Expected targetIds to be unique in the passed array.');
					var s = n.getTarget(a);
					(0, r.k)(s, 'Expected targetIds to be registered.');
				}
			})(o, l, u),
			(function (e, t, n) {
				for (var r = e.length - 1; r >= 0; r--) {
					var a = e[r],
						s = t.getTargetType(a);
					!(0, i.s)(s, n) && e.splice(r, 1);
				}
			})(o, u, l.getItemType()),
			(function (e, t, n) {
				e.forEach(function (e) {
					n.getTarget(e).hover(t, e);
				});
			})(o, l, u),
			{
				type: a.$T,
				payload: {
					targetIds: o,
					clientOffset: s || null
				}
			}
		);
	};
}
