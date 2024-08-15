n.d(t, {
	Z: function () {
		return _;
	}
});
var r = n(685516),
	i = n(285363),
	a = n(175922),
	s = n(406434),
	o = n(6138),
	l = n(740078),
	u = n(882159),
	c = n(544338),
	d = n(581206);
function _(e, t) {
	void 0 === t && (t = {});
	var n = t,
		_ = n.placement,
		E = void 0 === _ ? e.placement : _,
		f = n.strategy,
		h = void 0 === f ? e.strategy : f,
		p = n.boundary,
		I = void 0 === p ? l.zV : p,
		m = n.rootBoundary,
		T = void 0 === m ? l.Pj : m,
		g = n.elementContext,
		S = void 0 === g ? l.k5 : g,
		A = n.altBoundary,
		N = n.padding,
		v = void 0 === N ? 0 : N,
		O = (0, c.Z)('number' != typeof v ? v : (0, d.Z)(v, l.mv)),
		R = S === l.k5 ? l.YP : l.k5,
		C = e.rects.popper,
		y = e.elements[void 0 !== A && A ? R : S],
		D = (0, r.Z)((0, u.kK)(y) ? y : y.contextElement || (0, i.Z)(e.elements.popper), I, T, h),
		L = (0, a.Z)(e.elements.reference),
		b = (0, s.Z)({
			reference: L,
			element: C,
			strategy: 'absolute',
			placement: E
		}),
		M = (0, o.Z)(Object.assign({}, C, b)),
		P = S === l.k5 ? M : L,
		U = {
			top: D.top - P.top + O.top,
			bottom: P.bottom - D.bottom + O.bottom,
			left: D.left - P.left + O.left,
			right: P.right - D.right + O.right
		},
		w = e.modifiersData.offset;
	if (S === l.k5 && w) {
		var x = w[E];
		Object.keys(U).forEach(function (e) {
			var t = [l.F2, l.I].indexOf(e) >= 0 ? 1 : -1,
				n = [l.we, l.I].indexOf(e) >= 0 ? 'y' : 'x';
			U[e] += x[n] * t;
		});
	}
	return U;
}
