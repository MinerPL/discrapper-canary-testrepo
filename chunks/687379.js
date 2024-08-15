n.d(t, {
	N3: function () {
		return p;
	},
	OV: function () {
		return A;
	},
	P$: function () {
		return N;
	},
	RM: function () {
		return S;
	}
});
var r = n(387103),
	i = n(99047),
	a = n(697898),
	s = n(470079),
	o = n(133886);
function l(e, t, n) {
	return null != e && ((null != t && 0 > e.compare(t)) || (null != n && e.compare(n) > 0));
}
let u = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	},
	c = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	};
function d(e, t) {
	var n;
	e = {
		...(t.shouldForceLeadingZeros ? c : u),
		...e
	};
	let r = t.granularity || 'minute',
		i = Object.keys(e),
		a = i.indexOf(null !== (n = t.maxGranularity) && void 0 !== n ? n : 'year');
	a < 0 && (a = 0);
	let s = i.indexOf(r);
	if ((s < 0 && (s = 2), a > s)) throw Error('maxGranularity must be greater than granularity');
	let o = i.slice(a, s + 1).reduce((t, n) => ((t[n] = e[n]), t), {});
	return (
		null != t.hourCycle && (o.hour12 = 12 === t.hourCycle),
		(o.timeZone = t.timeZone || 'UTC'),
		('hour' === r || 'minute' === r || 'second' === r) && t.timeZone && !t.hideTimeZone && (o.timeZoneName = 'short'),
		t.showEra && 0 === a && (o.era = 'short'),
		o
	);
}
function _(e) {
	return e && 'hour' in e ? e : new r.qp();
}
function E(e, t) {
	return null === e ? null : e ? (0, r.Mw)(e, t) : void 0;
}
function f(e, t, n, i) {
	if (e) return E(e, n);
	let a = (0, r.Mw)(
		(0, r.zO)(i).set({
			hour: 0,
			minute: 0,
			second: 0,
			millisecond: 0
		}),
		n
	);
	return 'year' === t || 'month' === t || 'day' === t ? (0, r.WG)(a) : i ? a : (0, r.IO)(a);
}
function h(e, t) {
	let n = e && 'timeZone' in e ? e.timeZone : void 0,
		r = e && 'minute' in e ? 'minute' : 'day';
	if (e && t && !(t in e)) throw Error('Invalid granularity ' + t + ' for value ' + e.toString());
	let [i, a] = (0, s.useState)([r, n]);
	return e && (i[0] !== r || i[1] !== n) && a([r, n]), !t && (t = e ? r : i[0]), [t, e ? n : i[1]];
}
function p(e) {
	var t, n;
	let o = (0, i.d)(e),
		[u, c] = (0, a.zk)(e.value, e.defaultValue || null, e.onChange),
		E = u || e.placeholderValue,
		[f, p] = h(E, e.granularity),
		I = null != u ? u.toDate(null != p ? p : 'UTC') : null,
		m = 'hour' === f || 'minute' === f || 'second' === f,
		T = null === (n = e.shouldCloseOnSelect) || void 0 === n || n,
		[g, S] = (0, s.useState)(null),
		[A, N] = (0, s.useState)(null);
	if ((u && ((g = u), 'hour' in u && (A = u)), E && !(f in E)))
		throw Error('Invalid granularity ' + f + ' for value ' + E.toString());
	let v = (e, t) => {
			c('timeZone' in t ? t.set((0, r.WG)(e)) : (0, r.IO)(e, t)), S(null), N(null);
		},
		O =
			e.isInvalid ||
			'invalid' === e.validationState ||
			l(u, e.minValue, e.maxValue) ||
			(u && (null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, u))),
		R = e.validationState || (O ? 'invalid' : null);
	return {
		value: u,
		setValue: c,
		dateValue: g,
		timeValue: A,
		setDateValue: (t) => {
			let n = 'function' == typeof T ? T() : T;
			m ? (A || n ? v(t, A || _(e.placeholderValue)) : S(t)) : c(t), n && o.setOpen(!1);
		},
		setTimeValue: (e) => {
			g && e ? v(g, e) : N(e);
		},
		granularity: f,
		hasTime: m,
		...o,
		setOpen(t) {
			!t && !u && g && m && v(g, A || _(e.placeholderValue)), o.setOpen(t);
		},
		validationState: R,
		isInvalid: O,
		formatValue(t, n) {
			if (!I) return '';
			let i = d(n, {
				granularity: f,
				timeZone: p,
				hideTimeZone: e.hideTimeZone,
				hourCycle: e.hourCycle,
				showEra: 'gregory' === u.calendar.identifier && 'BC' === u.era
			});
			return new r.CN(t, i).format(I);
		}
	};
}
let I = new o.J(
		{
			ach: {
				year: 'mwaka',
				month: 'dwe',
				day: 'nino'
			},
			af: {
				year: 'jjjj',
				month: 'mm',
				day: 'dd'
			},
			am: {
				year: 'ዓዓዓዓ',
				month: 'ሚሜ',
				day: 'ቀቀ'
			},
			an: {
				year: 'aaaa',
				month: 'mm',
				day: 'dd'
			},
			ar: {
				year: 'سنة',
				month: 'شهر',
				day: 'يوم'
			},
			ast: {
				year: 'aaaa',
				month: 'mm',
				day: 'dd'
			},
			az: {
				year: 'iiii',
				month: 'aa',
				day: 'gg'
			},
			be: {
				year: 'гггг',
				month: 'мм',
				day: 'дд'
			},
			bg: {
				year: 'гггг',
				month: 'мм',
				day: 'дд'
			},
			bn: {
				year: 'yyyy',
				month: 'মিমি',
				day: 'dd'
			},
			br: {
				year: 'bbbb',
				month: 'mm',
				day: 'dd'
			},
			bs: {
				year: 'gggg',
				month: 'mm',
				day: 'dd'
			},
			ca: {
				year: 'aaaa',
				month: 'mm',
				day: 'dd'
			},
			cak: {
				year: 'jjjj',
				month: 'ii',
				day: "q'q'"
			},
			ckb: {
				year: 'ساڵ',
				month: 'مانگ',
				day: 'ڕۆژ'
			},
			cs: {
				year: 'rrrr',
				month: 'mm',
				day: 'dd'
			},
			cy: {
				year: 'bbbb',
				month: 'mm',
				day: 'dd'
			},
			da: {
				year: 'åååå',
				month: 'mm',
				day: 'dd'
			},
			de: {
				year: 'jjjj',
				month: 'mm',
				day: 'tt'
			},
			dsb: {
				year: 'llll',
				month: 'mm',
				day: 'źź'
			},
			el: {
				year: 'εεεε',
				month: 'μμ',
				day: 'ηη'
			},
			en: {
				year: 'yyyy',
				month: 'mm',
				day: 'dd'
			},
			eo: {
				year: 'jjjj',
				month: 'mm',
				day: 'tt'
			},
			es: {
				year: 'aaaa',
				month: 'mm',
				day: 'dd'
			},
			et: {
				year: 'aaaa',
				month: 'kk',
				day: 'pp'
			},
			eu: {
				year: 'uuuu',
				month: 'hh',
				day: 'ee'
			},
			fa: {
				year: 'سال',
				month: 'ماه',
				day: 'روز'
			},
			ff: {
				year: 'hhhh',
				month: 'll',
				day: 'ññ'
			},
			fi: {
				year: 'vvvv',
				month: 'kk',
				day: 'pp'
			},
			fr: {
				year: 'aaaa',
				month: 'mm',
				day: 'jj'
			},
			fy: {
				year: 'jjjj',
				month: 'mm',
				day: 'dd'
			},
			ga: {
				year: 'bbbb',
				month: 'mm',
				day: 'll'
			},
			gd: {
				year: 'bbbb',
				month: 'mm',
				day: 'll'
			},
			gl: {
				year: 'aaaa',
				month: 'mm',
				day: 'dd'
			},
			he: {
				year: 'שנה',
				month: 'חודש',
				day: 'יום'
			},
			hr: {
				year: 'gggg',
				month: 'mm',
				day: 'dd'
			},
			hsb: {
				year: 'llll',
				month: 'mm',
				day: 'dd'
			},
			hu: {
				year: 'éééé',
				month: 'hh',
				day: 'nn'
			},
			ia: {
				year: 'aaaa',
				month: 'mm',
				day: 'dd'
			},
			id: {
				year: 'tttt',
				month: 'bb',
				day: 'hh'
			},
			it: {
				year: 'aaaa',
				month: 'mm',
				day: 'gg'
			},
			ja: {
				year: ' 年 ',
				month: '月',
				day: '日'
			},
			ka: {
				year: 'წწწწ',
				month: 'თთ',
				day: 'რრ'
			},
			kk: {
				year: 'жжжж',
				month: 'аа',
				day: 'кк'
			},
			kn: {
				year: 'ವವವವ',
				month: 'ಮಿಮೀ',
				day: 'ದಿದಿ'
			},
			ko: {
				year: '연도',
				month: '월',
				day: '일'
			},
			lb: {
				year: 'jjjj',
				month: 'mm',
				day: 'dd'
			},
			lo: {
				year: 'ປປປປ',
				month: 'ດດ',
				day: 'ວວ'
			},
			lt: {
				year: 'mmmm',
				month: 'mm',
				day: 'dd'
			},
			lv: {
				year: 'gggg',
				month: 'mm',
				day: 'dd'
			},
			meh: {
				year: 'aaaa',
				month: 'mm',
				day: 'dd'
			},
			ml: {
				year: 'വർഷം',
				month: 'മാസം',
				day: 'തീയതി'
			},
			ms: {
				year: 'tttt',
				month: 'mm',
				day: 'hh'
			},
			nl: {
				year: 'jjjj',
				month: 'mm',
				day: 'dd'
			},
			nn: {
				year: 'åååå',
				month: 'mm',
				day: 'dd'
			},
			no: {
				year: 'åååå',
				month: 'mm',
				day: 'dd'
			},
			oc: {
				year: 'aaaa',
				month: 'mm',
				day: 'jj'
			},
			pl: {
				year: 'rrrr',
				month: 'mm',
				day: 'dd'
			},
			pt: {
				year: 'aaaa',
				month: 'mm',
				day: 'dd'
			},
			rm: {
				year: 'oooo',
				month: 'mm',
				day: 'dd'
			},
			ro: {
				year: 'aaaa',
				month: 'll',
				day: 'zz'
			},
			ru: {
				year: 'гггг',
				month: 'мм',
				day: 'дд'
			},
			sc: {
				year: 'aaaa',
				month: 'mm',
				day: 'dd'
			},
			scn: {
				year: 'aaaa',
				month: 'mm',
				day: 'jj'
			},
			sk: {
				year: 'rrrr',
				month: 'mm',
				day: 'dd'
			},
			sl: {
				year: 'llll',
				month: 'mm',
				day: 'dd'
			},
			sr: {
				year: 'гггг',
				month: 'мм',
				day: 'дд'
			},
			sv: {
				year: 'åååå',
				month: 'mm',
				day: 'dd'
			},
			szl: {
				year: 'rrrr',
				month: 'mm',
				day: 'dd'
			},
			tg: {
				year: 'сссс',
				month: 'мм',
				day: 'рр'
			},
			th: {
				year: 'ปปปป',
				month: 'ดด',
				day: 'วว'
			},
			tr: {
				year: 'yyyy',
				month: 'aa',
				day: 'gg'
			},
			uk: {
				year: 'рррр',
				month: 'мм',
				day: 'дд'
			},
			'zh-CN': {
				year: '年',
				month: '月',
				day: '日'
			},
			'zh-TW': {
				year: '年',
				month: '月',
				day: '日'
			}
		},
		'en'
	),
	m = {
		year: !0,
		month: !0,
		day: !0,
		hour: !0,
		minute: !0,
		second: !0,
		dayPeriod: !0,
		era: !0
	},
	T = {
		year: 5,
		month: 2,
		day: 7,
		hour: 2,
		minute: 15,
		second: 15
	},
	g = { dayperiod: 'dayPeriod' };
function S(e) {
	var t, n;
	let { locale: i, createCalendar: o, hideTimeZone: u, isDisabled: c, isReadOnly: _, isRequired: p } = e,
		S = e.value || e.defaultValue || e.placeholderValue,
		[A, N] = h(S, e.granularity),
		v = N || 'UTC';
	if (S && !(A in S)) throw Error('Invalid granularity ' + A + ' for value ' + S.toString());
	let O = (0, s.useMemo)(() => new r.CN(i), [i]),
		R = (0, s.useMemo)(() => o(O.resolvedOptions().calendar), [o, O]),
		[C, y] = (0, a.zk)(e.value, e.defaultValue, e.onChange),
		D = (0, s.useMemo)(() => E(C, R), [C, R]),
		[L, b] = (0, s.useState)(() => f(e.placeholderValue, A, R, N)),
		M = D || L,
		P = 'gregory' === R.identifier && 'BC' === M.era,
		U = (0, s.useMemo)(
			() => ({
				granularity: A,
				maxGranularity: null !== (t = e.maxGranularity) && void 0 !== t ? t : 'year',
				timeZone: N,
				hideTimeZone: u,
				hourCycle: e.hourCycle,
				showEra: P,
				shouldForceLeadingZeros: e.shouldForceLeadingZeros
			}),
			[e.maxGranularity, A, e.hourCycle, e.shouldForceLeadingZeros, N, u, P]
		),
		w = (0, s.useMemo)(() => d({}, U), [U]),
		x = (0, s.useMemo)(() => new r.CN(i, w), [i, w]),
		G = (0, s.useMemo)(() => x.resolvedOptions(), [x]),
		k = (0, s.useMemo)(
			() =>
				x
					.formatToParts(new Date())
					.filter((e) => m[e.type])
					.reduce((e, t) => ((e[t.type] = !0), e), {}),
			[x]
		),
		[B, F] = (0, s.useState)(() => (e.value || e.defaultValue ? { ...k } : {})),
		V = (0, s.useRef)(),
		H = (0, s.useRef)(R.identifier);
	(0, s.useEffect)(() => {
		R.identifier !== H.current &&
			((H.current = R.identifier),
			b((t) => (Object.keys(B).length > 0 ? (0, r.Mw)(t, R) : f(e.placeholderValue, A, R, N))));
	}, [R, A, B, N, e.placeholderValue]),
		C && Object.keys(B).length < Object.keys(k).length && F((B = { ...k })),
		null == C && Object.keys(B).length === Object.keys(k).length && (F((B = {})), b(f(e.placeholderValue, A, R, N)));
	let Z = D && Object.keys(B).length >= Object.keys(k).length ? D : L,
		Y = (t) => {
			if (e.isDisabled || e.isReadOnly) return;
			let n = Object.keys(B),
				i = Object.keys(k);
			null == t
				? (y(null), b(f(e.placeholderValue, A, R, N)), F({}))
				: n.length >= i.length ||
					  (n.length === i.length - 1 && k.dayPeriod && !B.dayPeriod && 'dayPeriod' !== V.current)
					? y((t = (0, r.Mw)(t, (null == S ? void 0 : S.calendar) || new r.IQ())))
					: b(t),
				(V.current = null);
		},
		j = (0, s.useMemo)(() => Z.toDate(v), [Z, v]),
		W = (0, s.useMemo)(
			() =>
				x.formatToParts(j).map((e) => {
					var t, n, a;
					let s = m[e.type];
					'era' === e.type && 1 === R.getEras().length && (s = !1);
					let o = m[e.type] && !B[e.type];
					let l = m[e.type]
						? ((t = e.type),
							(n = e.value),
							(a = i),
							'era' === t || 'dayPeriod' === t
								? n
								: 'year' === t || 'month' === t || 'day' === t
									? I.getStringForLocale(t, a)
									: '\u2013\u2013')
						: null;
					return {
						type: g[e.type] || e.type,
						text: o ? l : e.value,
						...(function (e, t, n) {
							switch (t) {
								case 'era': {
									let t = e.calendar.getEras();
									return {
										value: t.indexOf(e.era),
										minValue: 0,
										maxValue: t.length - 1
									};
								}
								case 'year':
									return {
										value: e.year,
										minValue: 1,
										maxValue: e.calendar.getYearsInEra(e)
									};
								case 'month':
									return {
										value: e.month,
										minValue: (0, r.jx)(e),
										maxValue: e.calendar.getMonthsInYear(e)
									};
								case 'day':
									return {
										value: e.day,
										minValue: (0, r.PA)(e),
										maxValue: e.calendar.getDaysInMonth(e)
									};
							}
							if ('hour' in e)
								switch (t) {
									case 'dayPeriod':
										return {
											value: e.hour >= 12 ? 12 : 0,
											minValue: 0,
											maxValue: 12
										};
									case 'hour':
										if (n.hour12) {
											let t = e.hour >= 12;
											return {
												value: e.hour,
												minValue: t ? 12 : 0,
												maxValue: t ? 23 : 11
											};
										}
										return {
											value: e.hour,
											minValue: 0,
											maxValue: 23
										};
									case 'minute':
										return {
											value: e.minute,
											minValue: 0,
											maxValue: 59
										};
									case 'second':
										return {
											value: e.second,
											minValue: 0,
											maxValue: 59
										};
								}
							return {};
						})(Z, e.type, G),
						isPlaceholder: o,
						placeholder: l,
						isEditable: s
					};
				}),
			[j, B, x, G, Z, R, i]
		);
	k.era && B.year && !B.era ? ((B.era = !0), F({ ...B })) : !k.era && B.era && (delete B.era, F({ ...B }));
	let K = (e) => {
			(B[e] = !0), 'year' === e && k.era && (B.era = !0), F({ ...B });
		},
		z = (e, t) => {
			if (B[e])
				Y(
					(function (e, t, n, r) {
						switch (t) {
							case 'era':
							case 'year':
							case 'month':
							case 'day':
								return e.cycle(t, n, { round: 'year' === t });
						}
						if ('hour' in e)
							switch (t) {
								case 'dayPeriod': {
									let t = e.hour;
									return e.set({ hour: t >= 12 ? t - 12 : t + 12 });
								}
								case 'hour':
								case 'minute':
								case 'second':
									return e.cycle(t, n, {
										round: 'hour' !== t,
										hourCycle: r.hour12 ? 12 : 24
									});
							}
					})(Z, e, t, G)
				);
			else {
				K(e);
				let t = Object.keys(B),
					n = Object.keys(k);
				(t.length >= n.length || (t.length === n.length - 1 && k.dayPeriod && !B.dayPeriod)) && Y(Z);
			}
		},
		q = e.isInvalid || 'invalid' === e.validationState || l(D, e.minValue, e.maxValue);
	return {
		value: D,
		dateValue: j,
		calendar: R,
		setValue: Y,
		segments: W,
		dateFormatter: x,
		validationState: e.validationState || (q ? 'invalid' : null),
		isInvalid: q,
		granularity: A,
		maxGranularity: null !== (n = e.maxGranularity) && void 0 !== n ? n : 'year',
		isDisabled: c,
		isReadOnly: _,
		isRequired: p,
		increment(e) {
			z(e, 1);
		},
		decrement(e) {
			z(e, -1);
		},
		incrementPage(e) {
			z(e, T[e] || 1);
		},
		decrementPage(e) {
			z(e, -(T[e] || 1));
		},
		setSegment(e, t) {
			K(e),
				Y(
					(function (e, t, n, r) {
						switch (t) {
							case 'day':
							case 'month':
							case 'year':
							case 'era':
								return e.set({ [t]: n });
						}
						if ('hour' in e)
							switch (t) {
								case 'dayPeriod': {
									let t = e.hour,
										r = t >= 12;
									if (n >= 12 === r) return e;
									return e.set({ hour: r ? t - 12 : t + 12 });
								}
								case 'hour':
									if (r.hour12) {
										let t = e.hour >= 12;
										!t && 12 === n && (n = 0), t && n < 12 && (n += 12);
									}
								case 'minute':
								case 'second':
									return e.set({ [t]: n });
							}
					})(Z, e, t, G)
				);
		},
		confirmPlaceholder() {
			if (e.isDisabled || e.isReadOnly) return;
			let t = Object.keys(B),
				n = Object.keys(k);
			t.length === n.length - 1 && k.dayPeriod && !B.dayPeriod && (F((B = { ...k })), Y(Z.copy()));
		},
		clearSegment(t) {
			delete B[t], (V.current = t), F({ ...B });
			let n = f(e.placeholderValue, A, R, N),
				r = Z;
			if ('dayPeriod' === t && 'hour' in Z && 'hour' in n) {
				let e = Z.hour >= 12,
					t = n.hour >= 12;
				e && !t ? (r = Z.set({ hour: Z.hour - 12 })) : !e && t && (r = Z.set({ hour: Z.hour + 12 }));
			} else t in Z && (r = Z.set({ [t]: n[t] }));
			y(null), Y(r);
		},
		formatValue(e) {
			if (!D) return '';
			let t = d(e, U);
			return new r.CN(i, t).format(j);
		}
	};
}
function A(e) {
	var t, n, o;
	let u = (0, i.d)(e),
		[c, E] = (0, a.zk)(e.value, e.defaultValue || null, e.onChange),
		[f, p] = (0, s.useState)(
			() =>
				c || {
					start: null,
					end: null
				}
		);
	null == c &&
		f.start &&
		f.end &&
		p(
			(f = {
				start: null,
				end: null
			})
		);
	let I = c || f,
		m = (e) => {
			p(e), (null == e ? void 0 : e.start) && e.end ? E(e) : E(null);
		},
		[T] = h((null == I ? void 0 : I.start) || (null == I ? void 0 : I.end) || e.placeholderValue, e.granularity),
		g = 'hour' === T || 'minute' === T || 'second' === T,
		S = null === (o = e.shouldCloseOnSelect) || void 0 === o || o,
		[A, N] = (0, s.useState)(null),
		[v, O] = (0, s.useState)(null);
	I && I.start && I.end && ((A = I), 'hour' in I.start && (v = I));
	let R = (e, t) => {
			m({
				start: 'timeZone' in t.start ? t.start.set((0, r.WG)(e.start)) : (0, r.IO)(e.start, t.start),
				end: 'timeZone' in t.end ? t.end.set((0, r.WG)(e.end)) : (0, r.IO)(e.end, t.end)
			}),
				N(null),
				O(null);
		},
		C = (t) => {
			let n = 'function' == typeof S ? S() : S;
			g
				? n || (t.start && t.end && (null == v ? void 0 : v.start) && (null == v ? void 0 : v.end))
					? R(t, {
							start: (null == v ? void 0 : v.start) || _(e.placeholderValue),
							end: (null == v ? void 0 : v.end) || _(e.placeholderValue)
						})
					: N(t)
				: t.start && t.end
					? m(t)
					: N(t),
				n && u.setOpen(!1);
		},
		y = (e) => {
			(null == A ? void 0 : A.start) && (null == A ? void 0 : A.end) && e.start && e.end ? R(A, e) : O(e);
		},
		D =
			e.isInvalid ||
			'invalid' === e.validationState ||
			(null != I &&
				(l(I.start, e.minValue, e.maxValue) ||
					l(I.end, e.minValue, e.maxValue) ||
					(null != I.end && null != I.start && 0 > I.end.compare(I.start)) ||
					((null == I ? void 0 : I.start) &&
						(null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, I.start))) ||
					((null == I ? void 0 : I.end) &&
						(null === (n = e.isDateUnavailable) || void 0 === n ? void 0 : n.call(e, I.end))))),
		L = e.validationState || (D ? 'invalid' : null);
	return {
		value: I,
		setValue: m,
		dateRange: A,
		timeRange: v,
		granularity: T,
		hasTime: g,
		setDate(e, t) {
			C({
				...A,
				[e]: t
			});
		},
		setTime(e, t) {
			y({
				...v,
				[e]: t
			});
		},
		setDateTime(e, t) {
			m({
				...I,
				[e]: t
			});
		},
		setDateRange: C,
		setTimeRange: y,
		...u,
		setOpen(t) {
			!t &&
				!((null == I ? void 0 : I.start) && (null == I ? void 0 : I.end)) &&
				(null == A ? void 0 : A.start) &&
				(null == A ? void 0 : A.end) &&
				g &&
				R(A, {
					start: (null == v ? void 0 : v.start) || _(e.placeholderValue),
					end: (null == v ? void 0 : v.end) || _(e.placeholderValue)
				}),
				u.setOpen(t);
		},
		validationState: L,
		isInvalid: D,
		formatValue(t, n) {
			let i;
			if (!I || !I.start || !I.end) return null;
			let a = 'timeZone' in I.start ? I.start.timeZone : void 0,
				s = e.granularity || (I.start && 'minute' in I.start ? 'minute' : 'day'),
				o = 'timeZone' in I.end ? I.end.timeZone : void 0,
				l = e.granularity || (I.end && 'minute' in I.end ? 'minute' : 'day'),
				u = d(n, {
					granularity: s,
					timeZone: a,
					hideTimeZone: e.hideTimeZone,
					hourCycle: e.hourCycle,
					showEra:
						('gregory' === I.start.calendar.identifier && 'BC' === I.start.era) ||
						('gregory' === I.end.calendar.identifier && 'BC' === I.end.era)
				}),
				c = I.start.toDate(a || 'UTC'),
				_ = I.end.toDate(o || 'UTC'),
				E = new r.CN(t, u);
			if (a === o && s === l && 0 !== I.start.compare(I.end)) {
				try {
					let e = E.formatRangeToParts(c, _),
						t = -1;
					for (let n = 0; n < e.length; n++) {
						let r = e[n];
						if ('shared' === r.source && 'literal' === r.type) t = n;
						else if ('endRange' === r.source) break;
					}
					let n = '',
						r = '';
					for (let i = 0; i < e.length; i++) i < t ? (n += e[i].value) : i > t && (r += e[i].value);
					return {
						start: n,
						end: r
					};
				} catch (e) {}
				i = E;
			} else {
				let a = d(n, {
					granularity: l,
					timeZone: o,
					hideTimeZone: e.hideTimeZone,
					hourCycle: e.hourCycle
				});
				i = new r.CN(t, a);
			}
			return {
				start: E.format(c),
				end: i.format(_)
			};
		}
	};
}
function N(e) {
	let { placeholderValue: t = new r.qp(), minValue: n, maxValue: i, granularity: o } = e,
		[l, u] = (0, a.zk)(e.value, e.defaultValue, e.onChange),
		c = l || t,
		d = c && 'day' in c ? c : void 0,
		_ = e.defaultValue && 'timeZone' in e.defaultValue ? e.defaultValue.timeZone : void 0,
		E = (0, s.useMemo)(() => {
			let e = c && 'timeZone' in c ? c.timeZone : void 0;
			return (e || _) && t ? (0, r.fW)(v(t), e || _) : v(t);
		}, [t, c, _]),
		f = (0, s.useMemo)(() => v(n, d), [n, d]),
		h = (0, s.useMemo)(() => v(i, d), [i, d]),
		p = (0, s.useMemo)(() => (l && 'day' in l ? (0, r.ZB)(l) : l), [l]),
		I = (0, s.useMemo)(() => (null == l ? null : v(l)), [l]);
	return {
		...S({
			...e,
			value: I,
			defaultValue: void 0,
			minValue: f,
			maxValue: h,
			onChange: (e) => {
				u(d || _ ? e : e && (0, r.ZB)(e));
			},
			granularity: o || 'minute',
			maxGranularity: 'hour',
			placeholderValue: E,
			createCalendar: () => new r.IQ()
		}),
		timeValue: p
	};
}
function v(e, t = (0, r.Lg)((0, r.iT)())) {
	return e ? ('day' in e ? e : (0, r.IO)(t, e)) : null;
}
