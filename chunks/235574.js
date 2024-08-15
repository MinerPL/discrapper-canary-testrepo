n.d(t, {
	x: function () {
		return s;
	}
});
var r = n(882932),
	i = n(697898),
	a = n(470079);
function s(e) {
	var t;
	let {
			isDisabled: n = !1,
			minValue: s = 0,
			maxValue: c = 100,
			numberFormatter: d,
			step: _ = 1,
			orientation: E = 'horizontal'
		} = e,
		f = (0, a.useMemo)(() => {
			let e = (c - s) / 10;
			return Math.max((e = (0, r.N4)(e, 0, e + _, _)), _);
		}, [_, c, s]),
		h = (0, a.useMemo)(() => l(e.value), [e.value]),
		p = (0, a.useMemo)(() => (null !== (t = l(e.defaultValue)) && void 0 !== t ? t : [s]), [e.defaultValue, s]),
		I = u(e.value, e.defaultValue, e.onChange),
		m = u(e.value, e.defaultValue, e.onChangeEnd),
		[T, g] = (0, i.zk)(h, p, I),
		[S, A] = (0, a.useState)(Array(T.length).fill(!1)),
		N = (0, a.useRef)(Array(T.length).fill(!0)),
		[v, O] = (0, a.useState)(void 0),
		R = (0, a.useRef)(T),
		C = (0, a.useRef)(S),
		y = (e) => {
			(R.current = e), g(e);
		},
		D = (e) => {
			(C.current = e), A(e);
		};
	function L(e) {
		return (e - s) / (c - s);
	}
	function b(e) {
		return 0 === e ? s : T[e - 1];
	}
	function M(e) {
		return e === T.length - 1 ? c : T[e + 1];
	}
	function P(e) {
		return N.current[e];
	}
	function U(e, t) {
		if (n || !P(e)) return;
		let i = b(e),
			a = M(e);
		(t = (0, r.N4)(t, i, a, _)), y(o(R.current, e, t));
	}
	function w(e) {
		return d.format(e);
	}
	function x(e) {
		let t = e * (c - s) + s;
		return (0, r.uZ)(Math.round((t - s) / _) * _ + s, s, c);
	}
	return {
		values: T,
		getThumbValue: (e) => T[e],
		setThumbValue: U,
		setThumbPercent: function (e, t) {
			U(e, x(t));
		},
		isThumbDragging: (e) => S[e],
		setThumbDragging: function (e, t) {
			if (n || !P(e)) return;
			let r = C.current[e];
			(C.current = o(C.current, e, t)), D(C.current), m && r && !C.current.some(Boolean) && m(R.current);
		},
		focusedThumb: v,
		setFocusedThumb: O,
		getThumbPercent: (e) => L(T[e]),
		getValuePercent: L,
		getThumbValueLabel: (e) => w(T[e]),
		getFormattedValue: w,
		getThumbMinValue: b,
		getThumbMaxValue: M,
		getPercentValue: x,
		isThumbEditable: P,
		setThumbEditable: function (e, t) {
			N.current[e] = t;
		},
		incrementThumb: function (e, t = 1) {
			let n = Math.max(t, _);
			U(e, (0, r.N4)(T[e] + n, s, c, _));
		},
		decrementThumb: function (e, t = 1) {
			let n = Math.max(t, _);
			U(e, (0, r.N4)(T[e] - n, s, c, _));
		},
		step: _,
		pageSize: f,
		orientation: E,
		isDisabled: n
	};
}
function o(e, t, n) {
	return e[t] === n ? e : [...e.slice(0, t), n, ...e.slice(t + 1)];
}
function l(e) {
	if (null != e) return Array.isArray(e) ? e : [e];
}
function u(e, t, n) {
	return (r) => {
		'number' == typeof e || 'number' == typeof t ? null == n || n(r[0]) : null == n || n(r);
	};
}
