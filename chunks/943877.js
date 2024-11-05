n.d(t, {
    N3: function () {
        return m;
    },
    OV: function () {
        return T;
    },
    P$: function () {
        return b;
    },
    RM: function () {
        return S;
    }
});
var r = n(387103),
    i = n(781988),
    a = n(239700),
    s = n(192379),
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
    return null != t.hourCycle && (o.hour12 = 12 === t.hourCycle), (o.timeZone = t.timeZone || 'UTC'), ('hour' === r || 'minute' === r || 'second' === r) && t.timeZone && !t.hideTimeZone && (o.timeZoneName = 'short'), t.showEra && 0 === a && (o.era = 'short'), o;
}
function f(e) {
    return e && 'hour' in e ? e : new r.qp();
}
function _(e, t) {
    return null === e ? null : e ? (0, r.Mw)(e, t) : void 0;
}
function h(e, t, n, i) {
    if (e) return _(e, n);
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
function p(e, t) {
    let n = e && 'timeZone' in e ? e.timeZone : void 0,
        r = e && 'minute' in e ? 'minute' : 'day';
    if (e && t && !(t in e)) throw Error('Invalid granularity ' + t + ' for value ' + e.toString());
    let [i, a] = (0, s.useState)([r, n]);
    return e && (i[0] !== r || i[1] !== n) && a([r, n]), !t && (t = e ? r : i[0]), [t, e ? n : i[1]];
}
function m(e) {
    var t, n;
    let o = (0, i.d)(e),
        [u, c] = (0, a.zk)(e.value, e.defaultValue || null, e.onChange),
        _ = u || e.placeholderValue,
        [h, m] = p(_, e.granularity),
        g = null != u ? u.toDate(null != m ? m : 'UTC') : null,
        E = 'hour' === h || 'minute' === h || 'second' === h,
        v = null === (n = e.shouldCloseOnSelect) || void 0 === n || n,
        [I, S] = (0, s.useState)(null),
        [T, b] = (0, s.useState)(null);
    if ((u && ((I = u), 'hour' in u && (T = u)), _ && !(h in _))) throw Error('Invalid granularity ' + h + ' for value ' + _.toString());
    let y = (e, t) => {
            c('timeZone' in t ? t.set((0, r.WG)(e)) : (0, r.IO)(e, t)), S(null), b(null);
        },
        A = e.isInvalid || 'invalid' === e.validationState || l(u, e.minValue, e.maxValue) || (u && (null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, u))),
        N = e.validationState || (A ? 'invalid' : null);
    return {
        value: u,
        setValue: c,
        dateValue: I,
        timeValue: T,
        setDateValue: (t) => {
            let n = 'function' == typeof v ? v() : v;
            E ? (T || n ? y(t, T || f(e.placeholderValue)) : S(t)) : c(t), n && o.setOpen(!1);
        },
        setTimeValue: (e) => {
            I && e ? y(I, e) : b(e);
        },
        granularity: h,
        hasTime: E,
        ...o,
        setOpen(t) {
            !t && !u && I && E && y(I, T || f(e.placeholderValue)), o.setOpen(t);
        },
        validationState: N,
        isInvalid: A,
        formatValue(t, n) {
            if (!g) return '';
            let i = d(n, {
                granularity: h,
                timeZone: m,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                showEra: 'gregory' === u.calendar.identifier && 'BC' === u.era
            });
            return new r.CN(t, i).format(g);
        }
    };
}
let g = new o.J(
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
    E = {
        year: !0,
        month: !0,
        day: !0,
        hour: !0,
        minute: !0,
        second: !0,
        dayPeriod: !0,
        era: !0
    },
    v = {
        year: 5,
        month: 2,
        day: 7,
        hour: 2,
        minute: 15,
        second: 15
    },
    I = { dayperiod: 'dayPeriod' };
function S(e) {
    var t, n;
    let { locale: i, createCalendar: o, hideTimeZone: u, isDisabled: c, isReadOnly: f, isRequired: m } = e,
        S = e.value || e.defaultValue || e.placeholderValue,
        [T, b] = p(S, e.granularity),
        y = b || 'UTC';
    if (S && !(T in S)) throw Error('Invalid granularity ' + T + ' for value ' + S.toString());
    let A = (0, s.useMemo)(() => new r.CN(i), [i]),
        N = (0, s.useMemo)(() => o(A.resolvedOptions().calendar), [o, A]),
        [C, R] = (0, a.zk)(e.value, e.defaultValue, e.onChange),
        O = (0, s.useMemo)(() => _(C, N), [C, N]),
        [D, L] = (0, s.useState)(() => h(e.placeholderValue, T, N, b)),
        x = O || D,
        w = 'gregory' === N.identifier && 'BC' === x.era,
        M = (0, s.useMemo)(
            () => ({
                granularity: T,
                maxGranularity: null !== (t = e.maxGranularity) && void 0 !== t ? t : 'year',
                timeZone: b,
                hideTimeZone: u,
                hourCycle: e.hourCycle,
                showEra: w,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros
            }),
            [e.maxGranularity, T, e.hourCycle, e.shouldForceLeadingZeros, b, u, w]
        ),
        P = (0, s.useMemo)(() => d({}, M), [M]),
        k = (0, s.useMemo)(() => new r.CN(i, P), [i, P]),
        U = (0, s.useMemo)(() => k.resolvedOptions(), [k]),
        G = (0, s.useMemo)(
            () =>
                k
                    .formatToParts(new Date())
                    .filter((e) => E[e.type])
                    .reduce((e, t) => ((e[t.type] = !0), e), {}),
            [k]
        ),
        [B, Z] = (0, s.useState)(() => (e.value || e.defaultValue ? { ...G } : {})),
        F = (0, s.useRef)(),
        V = (0, s.useRef)(N.identifier);
    (0, s.useEffect)(() => {
        N.identifier !== V.current && ((V.current = N.identifier), L((t) => (Object.keys(B).length > 0 ? (0, r.Mw)(t, N) : h(e.placeholderValue, T, N, b))));
    }, [N, T, B, b, e.placeholderValue]),
        C && Object.keys(B).length < Object.keys(G).length && Z((B = { ...G })),
        null == C && Object.keys(B).length === Object.keys(G).length && (Z((B = {})), L(h(e.placeholderValue, T, N, b)));
    let j = O && Object.keys(B).length >= Object.keys(G).length ? O : D,
        H = (t) => {
            if (e.isDisabled || e.isReadOnly) return;
            let n = Object.keys(B),
                i = Object.keys(G);
            null == t ? (R(null), L(h(e.placeholderValue, T, N, b)), Z({})) : n.length >= i.length || (n.length === i.length - 1 && G.dayPeriod && !B.dayPeriod && 'dayPeriod' !== F.current) ? R((t = (0, r.Mw)(t, (null == S ? void 0 : S.calendar) || new r.IQ()))) : L(t), (F.current = null);
        },
        Y = (0, s.useMemo)(() => j.toDate(y), [j, y]),
        W = (0, s.useMemo)(
            () =>
                k.formatToParts(Y).map((e) => {
                    var t, n, a;
                    let s = E[e.type];
                    'era' === e.type && 1 === N.getEras().length && (s = !1);
                    let o = E[e.type] && !B[e.type];
                    let l = E[e.type] ? ((t = e.type), (n = e.value), (a = i), 'era' === t || 'dayPeriod' === t ? n : 'year' === t || 'month' === t || 'day' === t ? g.getStringForLocale(t, a) : '\u2013\u2013') : null;
                    return {
                        type: I[e.type] || e.type,
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
                        })(j, e.type, U),
                        isPlaceholder: o,
                        placeholder: l,
                        isEditable: s
                    };
                }),
            [Y, B, k, U, j, N, i]
        );
    G.era && B.year && !B.era ? ((B.era = !0), Z({ ...B })) : !G.era && B.era && (delete B.era, Z({ ...B }));
    let K = (e) => {
            (B[e] = !0), 'year' === e && G.era && (B.era = !0), Z({ ...B });
        },
        z = (e, t) => {
            if (B[e])
                H(
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
                    })(j, e, t, U)
                );
            else {
                K(e);
                let t = Object.keys(B),
                    n = Object.keys(G);
                (t.length >= n.length || (t.length === n.length - 1 && G.dayPeriod && !B.dayPeriod)) && H(j);
            }
        },
        q = e.isInvalid || 'invalid' === e.validationState || l(O, e.minValue, e.maxValue);
    return {
        value: O,
        dateValue: Y,
        calendar: N,
        setValue: H,
        segments: W,
        dateFormatter: k,
        validationState: e.validationState || (q ? 'invalid' : null),
        isInvalid: q,
        granularity: T,
        maxGranularity: null !== (n = e.maxGranularity) && void 0 !== n ? n : 'year',
        isDisabled: c,
        isReadOnly: f,
        isRequired: m,
        increment(e) {
            z(e, 1);
        },
        decrement(e) {
            z(e, -1);
        },
        incrementPage(e) {
            z(e, v[e] || 1);
        },
        decrementPage(e) {
            z(e, -(v[e] || 1));
        },
        setSegment(e, t) {
            K(e),
                H(
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
                    })(j, e, t, U)
                );
        },
        confirmPlaceholder() {
            if (e.isDisabled || e.isReadOnly) return;
            let t = Object.keys(B),
                n = Object.keys(G);
            t.length === n.length - 1 && G.dayPeriod && !B.dayPeriod && (Z((B = { ...G })), H(j.copy()));
        },
        clearSegment(t) {
            delete B[t], (F.current = t), Z({ ...B });
            let n = h(e.placeholderValue, T, N, b),
                r = j;
            if ('dayPeriod' === t && 'hour' in j && 'hour' in n) {
                let e = j.hour >= 12,
                    t = n.hour >= 12;
                e && !t ? (r = j.set({ hour: j.hour - 12 })) : !e && t && (r = j.set({ hour: j.hour + 12 }));
            } else t in j && (r = j.set({ [t]: n[t] }));
            R(null), H(r);
        },
        formatValue(e) {
            if (!O) return '';
            let t = d(e, M);
            return new r.CN(i, t).format(Y);
        }
    };
}
function T(e) {
    var t, n, o;
    let u = (0, i.d)(e),
        [c, _] = (0, a.zk)(e.value, e.defaultValue || null, e.onChange),
        [h, m] = (0, s.useState)(
            () =>
                c || {
                    start: null,
                    end: null
                }
        );
    null == c &&
        h.start &&
        h.end &&
        m(
            (h = {
                start: null,
                end: null
            })
        );
    let g = c || h,
        E = (e) => {
            m(e), (null == e ? void 0 : e.start) && e.end ? _(e) : _(null);
        },
        [v] = p((null == g ? void 0 : g.start) || (null == g ? void 0 : g.end) || e.placeholderValue, e.granularity),
        I = 'hour' === v || 'minute' === v || 'second' === v,
        S = null === (o = e.shouldCloseOnSelect) || void 0 === o || o,
        [T, b] = (0, s.useState)(null),
        [y, A] = (0, s.useState)(null);
    g && g.start && g.end && ((T = g), 'hour' in g.start && (y = g));
    let N = (e, t) => {
            E({
                start: 'timeZone' in t.start ? t.start.set((0, r.WG)(e.start)) : (0, r.IO)(e.start, t.start),
                end: 'timeZone' in t.end ? t.end.set((0, r.WG)(e.end)) : (0, r.IO)(e.end, t.end)
            }),
                b(null),
                A(null);
        },
        C = (t) => {
            let n = 'function' == typeof S ? S() : S;
            I
                ? n || (t.start && t.end && (null == y ? void 0 : y.start) && (null == y ? void 0 : y.end))
                    ? N(t, {
                          start: (null == y ? void 0 : y.start) || f(e.placeholderValue),
                          end: (null == y ? void 0 : y.end) || f(e.placeholderValue)
                      })
                    : b(t)
                : t.start && t.end
                  ? E(t)
                  : b(t),
                n && u.setOpen(!1);
        },
        R = (e) => {
            (null == T ? void 0 : T.start) && (null == T ? void 0 : T.end) && e.start && e.end ? N(T, e) : A(e);
        },
        O = e.isInvalid || 'invalid' === e.validationState || (null != g && (l(g.start, e.minValue, e.maxValue) || l(g.end, e.minValue, e.maxValue) || (null != g.end && null != g.start && 0 > g.end.compare(g.start)) || ((null == g ? void 0 : g.start) && (null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, g.start))) || ((null == g ? void 0 : g.end) && (null === (n = e.isDateUnavailable) || void 0 === n ? void 0 : n.call(e, g.end))))),
        D = e.validationState || (O ? 'invalid' : null);
    return {
        value: g,
        setValue: E,
        dateRange: T,
        timeRange: y,
        granularity: v,
        hasTime: I,
        setDate(e, t) {
            C({
                ...T,
                [e]: t
            });
        },
        setTime(e, t) {
            R({
                ...y,
                [e]: t
            });
        },
        setDateTime(e, t) {
            E({
                ...g,
                [e]: t
            });
        },
        setDateRange: C,
        setTimeRange: R,
        ...u,
        setOpen(t) {
            !t &&
                !((null == g ? void 0 : g.start) && (null == g ? void 0 : g.end)) &&
                (null == T ? void 0 : T.start) &&
                (null == T ? void 0 : T.end) &&
                I &&
                N(T, {
                    start: (null == y ? void 0 : y.start) || f(e.placeholderValue),
                    end: (null == y ? void 0 : y.end) || f(e.placeholderValue)
                }),
                u.setOpen(t);
        },
        validationState: D,
        isInvalid: O,
        formatValue(t, n) {
            let i;
            if (!g || !g.start || !g.end) return null;
            let a = 'timeZone' in g.start ? g.start.timeZone : void 0,
                s = e.granularity || (g.start && 'minute' in g.start ? 'minute' : 'day'),
                o = 'timeZone' in g.end ? g.end.timeZone : void 0,
                l = e.granularity || (g.end && 'minute' in g.end ? 'minute' : 'day'),
                u = d(n, {
                    granularity: s,
                    timeZone: a,
                    hideTimeZone: e.hideTimeZone,
                    hourCycle: e.hourCycle,
                    showEra: ('gregory' === g.start.calendar.identifier && 'BC' === g.start.era) || ('gregory' === g.end.calendar.identifier && 'BC' === g.end.era)
                }),
                c = g.start.toDate(a || 'UTC'),
                f = g.end.toDate(o || 'UTC'),
                _ = new r.CN(t, u);
            if (a === o && s === l && 0 !== g.start.compare(g.end)) {
                try {
                    let e = _.formatRangeToParts(c, f),
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
                i = _;
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
                start: _.format(c),
                end: i.format(f)
            };
        }
    };
}
function b(e) {
    let { placeholderValue: t = new r.qp(), minValue: n, maxValue: i, granularity: o } = e,
        [l, u] = (0, a.zk)(e.value, e.defaultValue, e.onChange),
        c = l || t,
        d = c && 'day' in c ? c : void 0,
        f = e.defaultValue && 'timeZone' in e.defaultValue ? e.defaultValue.timeZone : void 0,
        _ = (0, s.useMemo)(() => {
            let e = c && 'timeZone' in c ? c.timeZone : void 0;
            return (e || f) && t ? (0, r.fW)(y(t), e || f) : y(t);
        }, [t, c, f]),
        h = (0, s.useMemo)(() => y(n, d), [n, d]),
        p = (0, s.useMemo)(() => y(i, d), [i, d]),
        m = (0, s.useMemo)(() => (l && 'day' in l ? (0, r.ZB)(l) : l), [l]),
        g = (0, s.useMemo)(() => (null == l ? null : y(l)), [l]);
    return {
        ...S({
            ...e,
            value: g,
            defaultValue: void 0,
            minValue: h,
            maxValue: p,
            onChange: (e) => {
                u(d || f ? e : e && (0, r.ZB)(e));
            },
            granularity: o || 'minute',
            maxGranularity: 'hour',
            placeholderValue: _,
            createCalendar: () => new r.IQ()
        }),
        timeValue: m
    };
}
function y(e, t = (0, r.Lg)((0, r.iT)())) {
    return e ? ('day' in e ? e : (0, r.IO)(t, e)) : null;
}
