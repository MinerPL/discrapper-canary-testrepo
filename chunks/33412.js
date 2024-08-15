n.d(t, {
	F: function () {
		return E;
	},
	t: function () {
		return h;
	}
});
var r = n(387103),
	i = n(697898),
	a = n(470079);
function s(e, t, n) {
	return (null != t && 0 > e.compare(t)) || (null != n && e.compare(n) > 0);
}
function o(e, t, n, r, i) {
	let a = {};
	for (let e in t) (a[e] = Math.floor(t[e] / 2)), a[e] > 0 && t[e] % 2 == 0 && a[e]--;
	let s = l(e, t, n).subtract(a);
	return c(e, s, t, n, r, i);
}
function l(e, t, n, i, a) {
	let s = e;
	return (
		t.years ? (s = (0, r.em)(e)) : t.months ? (s = (0, r.Nm)(e)) : t.weeks && (s = (0, r.zJ)(e, n)), c(e, s, t, n, i, a)
	);
}
function u(e, t, n, r, i) {
	let a = { ...t };
	t.days ? a.days-- : t.weeks ? a.weeks-- : t.months ? a.months-- : t.years && a.years--;
	let s = l(e, t, n).subtract(a);
	return c(e, s, t, n, r, i);
}
function c(e, t, n, i, a, s) {
	return (
		a && e.compare(a) >= 0 && (t = (0, r.l7)(t, l((0, r.WG)(a), n, i))),
		s && 0 >= e.compare(s) && (t = (0, r.Mb)(t, u((0, r.WG)(s), n, i))),
		t
	);
}
function d(e, t, n) {
	return t && (e = (0, r.l7)(e, (0, r.WG)(t))), n && (e = (0, r.Mb)(e, (0, r.WG)(n))), e;
}
function _(e, t, n) {
	if (!n) return e;
	for (; e.compare(t) >= 0 && n(e); ) e = e.subtract({ days: 1 });
	if (e.compare(t) >= 0) return e;
}
function E(e) {
	let t = (0, a.useMemo)(() => new r.CN(e.locale), [e.locale]),
		n = (0, a.useMemo)(() => t.resolvedOptions(), [t]),
		{
			locale: E,
			createCalendar: h,
			visibleDuration: p = { months: 1 },
			minValue: I,
			maxValue: m,
			selectionAlignment: T,
			isDateUnavailable: g,
			pageBehavior: S = 'visible'
		} = e,
		A = (0, a.useMemo)(() => h(n.calendar), [h, n.calendar]),
		[N, v] = (0, i.zk)(e.value, e.defaultValue, e.onChange),
		O = (0, a.useMemo)(() => (N ? (0, r.Mw)((0, r.WG)(N), A) : null), [N, A]),
		R = (0, a.useMemo)(() => (N && 'timeZone' in N ? N.timeZone : n.timeZone), [N, n.timeZone]),
		C = (0, a.useMemo)(
			() => (e.focusedValue ? d((0, r.Mw)((0, r.WG)(e.focusedValue), A), I, m) : void 0),
			[e.focusedValue, A, I, m]
		),
		y = (0, a.useMemo)(
			() =>
				d(
					e.defaultFocusedValue ? (0, r.Mw)((0, r.WG)(e.defaultFocusedValue), A) : O || (0, r.Mw)((0, r.Lg)(R), A),
					I,
					m
				),
			[e.defaultFocusedValue, O, R, A, I, m]
		),
		[D, L] = (0, i.zk)(C, y, e.onFocusChange),
		[b, M] = (0, a.useState)(() => {
			switch (T) {
				case 'start':
					return l(D, p, E, I, m);
				case 'end':
					return u(D, p, E, I, m);
				default:
					return o(D, p, E, I, m);
			}
		}),
		[P, U] = (0, a.useState)(e.autoFocus || !1),
		w = (0, a.useMemo)(() => {
			let e = { ...p };
			return e.days ? e.days-- : (e.days = -1), b.add(e);
		}, [b, p]),
		[x, G] = (0, a.useState)(A.identifier);
	if (A.identifier !== x) {
		let e = (0, r.Mw)(D, A);
		M(o(e, p, E, I, m)), L(e), G(A.identifier);
	}
	function k(e) {
		L((e = d(e, I, m)));
	}
	function B(t) {
		!e.isDisabled &&
			!e.isReadOnly &&
			(t = _((t = d(t, I, m)), b, g)) &&
			((t = (0, r.Mw)(t, (null == N ? void 0 : N.calendar) || new r.IQ())), N && 'hour' in N ? v(N.set(t)) : v(t));
	}
	s(D, I, m) ? L(d(D, I, m)) : 0 > D.compare(b) ? M(u(D, p, E, I, m)) : D.compare(w) > 0 && M(l(D, p, E, I, m));
	let F = (0, a.useMemo)(() => !!O && (!!(g && g(O)) || s(O, I, m)), [O, g, I, m]),
		V = e.isInvalid || 'invalid' === e.validationState || F,
		H = (0, a.useMemo)(() => ('visible' === S ? p : f(p)), [S, p]);
	return {
		isDisabled: e.isDisabled,
		isReadOnly: e.isReadOnly,
		value: O,
		setValue: B,
		visibleRange: {
			start: b,
			end: w
		},
		minValue: I,
		maxValue: m,
		focusedDate: D,
		timeZone: R,
		validationState: V ? 'invalid' : null,
		isValueInvalid: V,
		setFocusedDate(e) {
			k(e), U(!0);
		},
		focusNextDay() {
			k(D.add({ days: 1 }));
		},
		focusPreviousDay() {
			k(D.subtract({ days: 1 }));
		},
		focusNextRow() {
			p.days ? this.focusNextPage() : (p.weeks || p.months || p.years) && k(D.add({ weeks: 1 }));
		},
		focusPreviousRow() {
			p.days ? this.focusPreviousPage() : (p.weeks || p.months || p.years) && k(D.subtract({ weeks: 1 }));
		},
		focusNextPage() {
			let e = b.add(H);
			L(d(D.add(H), I, m)), M(l(c(D, e, H, E, I, m), H, E));
		},
		focusPreviousPage() {
			let e = b.subtract(H);
			L(d(D.subtract(H), I, m)), M(l(c(D, e, H, E, I, m), H, E));
		},
		focusSectionStart() {
			p.days ? k(b) : p.weeks ? k((0, r.zJ)(D, E)) : (p.months || p.years) && k((0, r.Nm)(D));
		},
		focusSectionEnd() {
			p.days ? k(w) : p.weeks ? k((0, r.vV)(D, E)) : (p.months || p.years) && k((0, r.Vf)(D));
		},
		focusNextSection(e) {
			if (!e && !p.days) {
				k(D.add(f(p)));
				return;
			}
			p.days
				? this.focusNextPage()
				: p.weeks
					? k(D.add({ months: 1 }))
					: (p.months || p.years) && k(D.add({ years: 1 }));
		},
		focusPreviousSection(e) {
			if (!e && !p.days) {
				k(D.subtract(f(p)));
				return;
			}
			p.days
				? this.focusPreviousPage()
				: p.weeks
					? k(D.subtract({ months: 1 }))
					: (p.months || p.years) && k(D.subtract({ years: 1 }));
		},
		selectFocusedDate() {
			B(D);
		},
		selectDate(e) {
			B(e);
		},
		isFocused: P,
		setFocused: U,
		isInvalid: (e) => s(e, I, m),
		isSelected(e) {
			return null != O && (0, r.KC)(e, O) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
		},
		isCellFocused: (e) => P && D && (0, r.KC)(e, D),
		isCellDisabled(t) {
			return e.isDisabled || 0 > t.compare(b) || t.compare(w) > 0 || this.isInvalid(t, I, m);
		},
		isCellUnavailable: (t) => e.isDateUnavailable && e.isDateUnavailable(t),
		isPreviousVisibleRangeInvalid() {
			let e = b.subtract({ days: 1 });
			return (0, r.KC)(e, b) || this.isInvalid(e, I, m);
		},
		isNextVisibleRangeInvalid() {
			let e = w.add({ days: 1 });
			return (0, r.KC)(e, w) || this.isInvalid(e, I, m);
		},
		getDatesInWeek(e, t = b) {
			let n = t.add({ weeks: e }),
				i = [];
			n = (0, r.zJ)(n, E);
			let a = (0, r.ji)(n, E);
			for (let e = 0; e < a; e++) i.push(null);
			for (; i.length < 7; ) {
				i.push(n);
				let e = n.add({ days: 1 });
				if ((0, r.KC)(n, e)) break;
				n = e;
			}
			for (; i.length < 7; ) i.push(null);
			return i;
		}
	};
}
function f(e) {
	let t = { ...e };
	for (let n in e) t[n] = 1;
	return t;
}
function h(e) {
	let {
			value: t,
			defaultValue: n,
			onChange: l,
			createCalendar: u,
			locale: c,
			visibleDuration: f = { months: 1 },
			minValue: h,
			maxValue: T,
			...g
		} = e,
		[S, A] = (0, i.zk)(t, n || null, l),
		[N, v] = (0, a.useState)(null),
		O = 'center';
	if (S && S.start && S.end) {
		let e = o((0, r.WG)(S.start), f, c, h, T)
			.add(f)
			.subtract({ days: 1 });
		S.end.compare(e) > 0 && (O = 'start');
	}
	let R = (0, a.useRef)(null),
		[C, y] = (0, a.useState)(null),
		D = (0, a.useMemo)(() => (0, r.l7)(h, null == C ? void 0 : C.start), [h, C]),
		L = (0, a.useMemo)(() => (0, r.Mb)(T, null == C ? void 0 : C.end), [T, C]),
		b = E({
			...g,
			value: S && S.start,
			createCalendar: u,
			locale: c,
			visibleDuration: f,
			minValue: D,
			maxValue: L,
			selectionAlignment: O
		}),
		M = (t) => {
			t && e.isDateUnavailable && !e.allowsNonContiguousRanges
				? ((R.current = {
						start: m(t, b, -1),
						end: m(t, b, 1)
					}),
					y(R.current))
				: ((R.current = null), y(null));
		},
		[P, U] = (0, a.useState)(b.visibleRange);
	(!(0, r.N9)(b.visibleRange.start, P.start) || !(0, r.N9)(b.visibleRange.end, P.end)) && (M(N), U(b.visibleRange));
	let w = (e) => {
			e ? (v(e), M(e)) : (v(null), M(null));
		},
		x = N ? p(N, b.focusedDate) : S && p(S.start, S.end),
		G = (t) => {
			if (!e.isReadOnly) {
				if ((t = _((t = d(t, D, L)), b.visibleRange.start, e.isDateUnavailable))) {
					if (N) {
						let e = p(N, t);
						A({
							start: I(e.start, null == S ? void 0 : S.start),
							end: I(e.end, null == S ? void 0 : S.end)
						}),
							w(null);
					} else w(t);
				}
			}
		},
		[k, B] = (0, a.useState)(!1),
		{ isDateUnavailable: F } = e,
		V = (0, a.useMemo)(
			() => !!S && !N && (!!(F && (F(S.start) || F(S.end))) || s(S.start, h, T) || s(S.end, h, T)),
			[F, S, N, h, T]
		),
		H = e.isInvalid || 'invalid' === e.validationState || V;
	return {
		...b,
		value: S,
		setValue: A,
		anchorDate: N,
		setAnchorDate: w,
		highlightedRange: x,
		validationState: H ? 'invalid' : null,
		isValueInvalid: H,
		selectFocusedDate() {
			G(b.focusedDate);
		},
		selectDate: G,
		highlightDate(e) {
			N && b.setFocusedDate(e);
		},
		isSelected: (e) =>
			x && e.compare(x.start) >= 0 && 0 >= e.compare(x.end) && !b.isCellDisabled(e) && !b.isCellUnavailable(e),
		isInvalid(e) {
			var t, n;
			return (
				b.isInvalid(e) ||
				s(
					e,
					null === (t = R.current) || void 0 === t ? void 0 : t.start,
					null === (n = R.current) || void 0 === n ? void 0 : n.end
				)
			);
		},
		isDragging: k,
		setDragging: B
	};
}
function p(e, t) {
	return e && t
		? (0 > t.compare(e) && ([e, t] = [t, e]),
			{
				start: (0, r.WG)(e),
				end: (0, r.WG)(t)
			})
		: null;
}
function I(e, t) {
	return ((e = (0, r.Mw)(e, (null == t ? void 0 : t.calendar) || new r.IQ())), t && 'hour' in t) ? t.set(e) : e;
}
function m(e, t, n) {
	let r = e.add({ days: n });
	for (
		;
		(n < 0 ? r.compare(t.visibleRange.start) >= 0 : 0 >= r.compare(t.visibleRange.end)) && !t.isCellUnavailable(r);

	)
		r = r.add({ days: n });
	return t.isCellUnavailable(r) ? r.add({ days: -n }) : null;
}
