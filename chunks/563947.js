n.d(t, {
    C3: function () {
        return et;
    },
    IZ: function () {
        return ee;
    },
    O7: function () {
        return ei;
    },
    kt: function () {
        return en;
    },
    wE: function () {
        return ea;
    }
});
var r = n(313921),
    i = n(19822),
    a = n(520872),
    s = n(42226),
    o = n(436337),
    l = n(768228),
    u = n(887881),
    c = n(335922),
    d = n(320168),
    f = n(756249),
    _ = n(161964),
    h = n(917849),
    p = n(413027),
    m = n(232342),
    g = n(223586),
    E = n(330718),
    v = n(199707),
    I = n(106941),
    S = n(414210),
    T = n(826768),
    b = n(447106),
    y = n(186699),
    A = n(897115),
    N = n(595537),
    C = n(95201),
    R = n(447306),
    O = n(679462),
    D = n(349398),
    L = n(608255),
    x = n(109793),
    w = n(149722),
    M = n(907603),
    P = n(805759),
    k = n(28306),
    U = n(662845),
    G = n(661763),
    B = n(969129),
    Z = n(192379),
    F = n(523603),
    V = n(921336),
    j = n(649859),
    H = n(464170),
    Y = n(387103),
    W = n(881085),
    K = n(98881);
function z(e) {
    return e && e.__esModule ? e.default : e;
}
var q = {};
function Q(e, t, n) {
    let { direction: r } = (0, j.bU)(),
        i = (0, Z.useMemo)(() => (0, U.E7)(t), [t]),
        a = () => {
            var e;
            let n = null === (e = window.event) || void 0 === e ? void 0 : e.target,
                r = (0, U.QL)(t.current, { tabbable: !0 });
            if ((n && ((r.currentNode = n), (n = r.previousNode())), !n)) {
                let e;
                do (e = r.lastChild()) && (n = e);
                while (e);
            }
            for (; null == n ? void 0 : n.hasAttribute('data-placeholder'); ) {
                let e = r.previousNode();
                if (e && e.hasAttribute('data-placeholder')) n = e;
                else break;
            }
            n && n.focus();
        },
        { pressProps: s } = (0, V.r7)({
            preventFocusOnPress: !0,
            allowTextSelectionOnPress: !0,
            onPressStart(e) {
                'mouse' === e.pointerType && a();
            },
            onPress(e) {
                'mouse' !== e.pointerType && a();
            }
        });
    return (0, G.dG)(s, {
        onKeyDown: (t) => {
            if (!!t.currentTarget.contains(t.target)) {
                if ((t.altKey && ('ArrowDown' === t.key || 'ArrowUp' === t.key) && 'setOpen' in e && (t.preventDefault(), t.stopPropagation(), e.setOpen(!0)), !n))
                    switch (t.key) {
                        case 'ArrowLeft':
                            t.preventDefault(), t.stopPropagation(), 'rtl' === r ? i.focusNext() : i.focusPrevious();
                            break;
                        case 'ArrowRight':
                            t.preventDefault(), t.stopPropagation(), 'rtl' === r ? i.focusPrevious() : i.focusNext();
                    }
            }
        }
    });
}
q = {
    'ar-AE': r.Z,
    'bg-BG': i.Z,
    'cs-CZ': a.Z,
    'da-DK': s.Z,
    'de-DE': o.Z,
    'el-GR': l.Z,
    'en-US': u.Z,
    'es-ES': c.Z,
    'et-EE': d.Z,
    'fi-FI': f.Z,
    'fr-FR': _.Z,
    'he-IL': h.Z,
    'hr-HR': p.Z,
    'hu-HU': m.Z,
    'it-IT': g.Z,
    'ja-JP': E.Z,
    'ko-KR': v.Z,
    'lt-LT': I.Z,
    'lv-LV': S.Z,
    'nb-NO': T.Z,
    'nl-NL': b.Z,
    'pl-PL': y.Z,
    'pt-BR': A.Z,
    'pt-PT': N.Z,
    'ro-RO': C.Z,
    'ru-RU': R.Z,
    'sk-SK': O.Z,
    'sl-SI': D.Z,
    'sr-SP': L.Z,
    'sv-SE': x.Z,
    'tr-TR': w.Z,
    'uk-UA': M.Z,
    'zh-CN': P.Z,
    'zh-TW': k.Z
};
let X = new WeakMap(),
    J = '__role_' + Date.now(),
    $ = '__focusManager_' + Date.now();
function ee(e, t, n) {
    var r;
    let i;
    let { isInvalid: a, validationErrors: s, validationDetails: o } = t.displayValidation,
        {
            labelProps: l,
            fieldProps: u,
            descriptionProps: c,
            errorMessageProps: d
        } = (0, F.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: a,
            errorMessage: e.errorMessage || s
        }),
        f = (0, Z.useRef)(null),
        { focusWithinProps: _ } = (0, V.L_)({
            ...e,
            onFocusWithin(n) {
                var r;
                (f.current = t.value), null === (r = e.onFocus) || void 0 === r || r.call(e, n);
            },
            onBlurWithin: (n) => {
                var r;
                t.confirmPlaceholder(), t.value !== f.current && t.commitValidation(), null === (r = e.onBlur) || void 0 === r || r.call(e, n);
            },
            onFocusWithinChange: e.onFocusChange
        }),
        h = (0, j.qb)(z(q), '@react-aria/datepicker'),
        p = 'hour' === t.maxGranularity ? 'selectedTimeDescription' : 'selectedDateDescription',
        m = 'hour' === t.maxGranularity ? 'time' : 'date',
        g = t.value ? h.format(p, { [m]: t.formatValue({ month: 'long' }) }) : '',
        E = (0, G.PK)(g),
        v = 'presentation' === e[J] ? u['aria-describedby'] : [E['aria-describedby'], u['aria-describedby']].filter(Boolean).join(' ') || void 0,
        I = e[$],
        S = (0, Z.useMemo)(() => I || (0, U.E7)(n), [I, n]),
        T = Q(t, n, 'presentation' === e[J]);
    X.set(t, {
        ariaLabel: e['aria-label'],
        ariaLabelledBy: [l.id, e['aria-labelledby']].filter(Boolean).join(' ') || void 0,
        ariaDescribedBy: v,
        focusManager: S
    });
    let b = (0, Z.useRef)(e.autoFocus);
    (i =
        'presentation' === e[J]
            ? { role: 'presentation' }
            : (0, G.dG)(u, {
                  role: 'group',
                  'aria-disabled': e.isDisabled || void 0,
                  'aria-describedby': v
              })),
        (0, Z.useEffect)(() => {
            b.current && S.focusFirst(), (b.current = !1);
        }, [S]),
        (0, G.y$)(e.inputRef, t.value, t.setValue),
        (0, H.Q)(
            {
                ...e,
                focus() {
                    S.focusFirst();
                }
            },
            t,
            e.inputRef
        );
    let y = {
        type: 'hidden',
        name: e.name,
        value: (null === (r = t.value) || void 0 === r ? void 0 : r.toString()) || ''
    };
    'native' === e.validationBehavior && ((y.type = 'text'), (y.hidden = !0), (y.required = e.isRequired), (y.onChange = () => {}));
    let A = (0, G.zL)(e);
    return {
        labelProps: {
            ...l,
            onClick: () => {
                S.focusFirst();
            }
        },
        fieldProps: (0, G.dG)(A, i, T, _, {
            onKeyDown(t) {
                e.onKeyDown && e.onKeyDown(t);
            },
            onKeyUp(t) {
                e.onKeyUp && e.onKeyUp(t);
            }
        }),
        inputProps: y,
        descriptionProps: c,
        errorMessageProps: d,
        isInvalid: a,
        validationErrors: s,
        validationDetails: o
    };
}
function et(e, t, n) {
    var r;
    let i = ee(e, t, n);
    return (i.inputProps.value = (null === (r = t.timeValue) || void 0 === r ? void 0 : r.toString()) || ''), i;
}
function en(e, t, n) {
    let r = (0, G.Me)(),
        i = (0, G.Me)(),
        a = (0, G.Me)(),
        s = (0, j.qb)(z(q), '@react-aria/datepicker'),
        { isInvalid: o, validationErrors: l, validationDetails: u } = t.displayValidation,
        {
            labelProps: c,
            fieldProps: d,
            descriptionProps: f,
            errorMessageProps: _
        } = (0, F.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: o,
            errorMessage: e.errorMessage || l
        }),
        h = Q(t, n),
        p = d['aria-labelledby'] || d.id,
        { locale: m } = (0, j.bU)(),
        g = t.formatValue(m, { month: 'long' }),
        E = g ? s.format('selectedDateDescription', { date: g }) : '',
        v = (0, G.PK)(E),
        I = [v['aria-describedby'], d['aria-describedby']].filter(Boolean).join(' ') || void 0,
        S = (0, G.zL)(e),
        T = (0, Z.useMemo)(() => (0, U.E7)(n), [n]),
        { focusWithinProps: b } = (0, V.L_)({
            ...e,
            isDisabled: t.isOpen,
            onBlurWithin: e.onBlur,
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange
        });
    return {
        groupProps: (0, G.dG)(S, h, d, v, b, {
            role: 'group',
            'aria-disabled': e.isDisabled || null,
            'aria-labelledby': p,
            'aria-describedby': I,
            onKeyDown(n) {
                !t.isOpen && e.onKeyDown && e.onKeyDown(n);
            },
            onKeyUp(n) {
                !t.isOpen && e.onKeyUp && e.onKeyUp(n);
            }
        }),
        labelProps: {
            ...c,
            onClick: () => {
                T.focusFirst();
            }
        },
        fieldProps: {
            ...d,
            id: a,
            [J]: 'presentation',
            'aria-describedby': I,
            value: t.value,
            onChange: t.setValue,
            placeholderValue: e.placeholderValue,
            hideTimeZone: e.hideTimeZone,
            hourCycle: e.hourCycle,
            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            granularity: e.granularity,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isRequired: e.isRequired,
            validationBehavior: e.validationBehavior,
            [B.tL]: t,
            autoFocus: e.autoFocus,
            name: e.name
        },
        descriptionProps: f,
        errorMessageProps: _,
        buttonProps: {
            ...v,
            id: r,
            'aria-haspopup': 'dialog',
            'aria-label': s.format('calendar'),
            'aria-labelledby': `${r} ${p}`,
            'aria-describedby': I,
            'aria-expanded': t.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => t.setOpen(!0)
        },
        dialogProps: {
            id: i,
            'aria-labelledby': `${r} ${p}`
        },
        calendarProps: {
            autoFocus: !0,
            value: t.dateValue,
            onChange: t.setDateValue,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isDateUnavailable: e.isDateUnavailable,
            defaultFocusedValue: t.dateValue ? void 0 : e.placeholderValue,
            isInvalid: t.isInvalid,
            errorMessage: 'function' == typeof e.errorMessage ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(' ')
        },
        isInvalid: o,
        validationErrors: l,
        validationDetails: u
    };
}
class er {
    of(e) {
        return this.dictionary.getStringForLocale(e, this.locale);
    }
    constructor(e, t) {
        (this.locale = e), (this.dictionary = t);
    }
}
function ei(e, t, n) {
    let r = (0, Z.useRef)(''),
        { locale: i } = (0, j.bU)(),
        a = (function () {
            let { locale: e } = (0, j.bU)(),
                t = (0, j.Kq)(z(q), '@react-aria/datepicker');
            return (0, Z.useMemo)(() => {
                try {
                    return new Intl.DisplayNames(e, { type: 'dateTimeField' });
                } catch (n) {
                    return new er(e, t);
                }
            }, [e, t]);
        })(),
        { ariaLabel: s, ariaLabelledBy: o, ariaDescribedBy: l, focusManager: u } = X.get(t),
        c = e.isPlaceholder ? '' : e.text,
        d = (0, Z.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]),
        f = (0, j.aQ)({
            month: 'long',
            timeZone: d.timeZone
        }),
        _ = (0, j.aQ)({
            hour: 'numeric',
            hour12: d.hour12,
            timeZone: d.timeZone
        });
    if ('month' !== e.type || e.isPlaceholder) 'hour' === e.type && !e.isPlaceholder && (c = _.format(t.dateValue));
    else {
        let e = f.format(t.dateValue);
        c = e !== c ? `${c} \u{2013} ${e}` : e;
    }
    let { spinButtonProps: h } = (0, K.G)({
            value: e.value,
            textValue: c,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: t.isDisabled,
            isReadOnly: t.isReadOnly || !e.isEditable,
            isRequired: t.isRequired,
            onIncrement: () => {
                (r.current = ''), t.increment(e.type);
            },
            onDecrement: () => {
                (r.current = ''), t.decrement(e.type);
            },
            onIncrementPage: () => {
                (r.current = ''), t.incrementPage(e.type);
            },
            onDecrementPage: () => {
                (r.current = ''), t.decrementPage(e.type);
            },
            onIncrementToMax: () => {
                (r.current = ''), t.setSegment(e.type, e.maxValue);
            },
            onDecrementToMin: () => {
                (r.current = ''), t.setSegment(e.type, e.minValue);
            }
        }),
        p = (0, Z.useMemo)(() => new W.d(i, { maximumFractionDigits: 0 }), [i]),
        m = () => {
            if (!p.isValidPartialNumber(e.text) || t.isReadOnly || e.isPlaceholder) 'dayPeriod' === e.type && t.clearSegment(e.type);
            else {
                let n = e.text.slice(0, -1),
                    i = p.parse(n);
                0 === n.length || 0 === i ? t.clearSegment(e.type) : t.setSegment(e.type, i), (r.current = n);
            }
        },
        { startsWith: g } = (0, j.L0)({ sensitivity: 'base' }),
        E = (0, j.aQ)({
            hour: 'numeric',
            hour12: !0
        }),
        v = (0, Z.useMemo)(() => {
            let e = new Date();
            return e.setHours(0), E.formatToParts(e).find((e) => 'dayPeriod' === e.type).value;
        }, [E]),
        I = (0, Z.useMemo)(() => {
            let e = new Date();
            return e.setHours(12), E.formatToParts(e).find((e) => 'dayPeriod' === e.type).value;
        }, [E]),
        S = (0, j.aQ)({
            year: 'numeric',
            era: 'narrow',
            timeZone: 'UTC'
        }),
        T = (0, Z.useMemo)(() => {
            if ('era' !== e.type) return [];
            let n = (0, Y.Mw)(new Y.aw(1, 1, 1), t.calendar),
                r = t.calendar.getEras().map((e) => {
                    let t = n
                        .set({
                            year: 1,
                            month: 1,
                            day: 1,
                            era: e
                        })
                        .toDate('UTC');
                    return {
                        era: e,
                        formatted: S.formatToParts(t).find((e) => 'era' === e.type).value
                    };
                }),
                i = (function (e) {
                    e.sort();
                    let t = e[0],
                        n = e[e.length - 1];
                    for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return e;
                    return 0;
                })(r.map((e) => e.formatted));
            if (i) for (let e of r) e.formatted = e.formatted.slice(i);
            return r;
        }, [S, t.calendar, e.type]),
        b = (n) => {
            if (t.isDisabled || t.isReadOnly) return;
            let i = r.current + n;
            switch (e.type) {
                case 'dayPeriod':
                    if (g(v, n)) t.setSegment('dayPeriod', 0);
                    else if (g(I, n)) t.setSegment('dayPeriod', 12);
                    else break;
                    u.focusNext();
                    break;
                case 'era': {
                    let e = T.find((e) => g(e.formatted, n));
                    e && (t.setSegment('era', e.era), u.focusNext());
                    break;
                }
                case 'day':
                case 'hour':
                case 'minute':
                case 'second':
                case 'month':
                case 'year': {
                    if (!p.isValidPartialNumber(i)) return;
                    let a = p.parse(i),
                        s = a,
                        o = 0 === e.minValue;
                    if ('hour' === e.type && t.dateFormatter.resolvedOptions().hour12) {
                        switch (t.dateFormatter.resolvedOptions().hourCycle) {
                            case 'h11':
                                a > 11 && (s = p.parse(n));
                                break;
                            case 'h12':
                                (o = !1), a > 12 && (s = p.parse(n));
                        }
                        e.value >= 12 && a > 1 && (a += 12);
                    } else a > e.maxValue && (s = p.parse(n));
                    if (isNaN(a)) return;
                    let l = 0 !== s || o;
                    l && t.setSegment(e.type, s), Number(a + '0') > e.maxValue || i.length >= String(e.maxValue).length ? ((r.current = ''), l && u.focusNext()) : (r.current = i);
                }
            }
        },
        y = (0, Z.useRef)('');
    (0, G.zX)(n, 'beforeinput', (r) => {
        switch ((r.preventDefault(), r.inputType)) {
            case 'deleteContentBackward':
            case 'deleteContentForward':
                p.isValidPartialNumber(e.text) && !t.isReadOnly && m();
                break;
            case 'insertCompositionText':
                (y.current = n.current.textContent), (n.current.textContent = n.current.textContent);
                break;
            default:
                null != r.data && b(r.data);
        }
    }),
        (0, G.zX)(n, 'input', (e) => {
            let { inputType: t, data: r } = e;
            if ('insertCompositionText' === t) (n.current.textContent = y.current), (g(v, r) || g(I, r)) && b(r);
        }),
        (0, G.bt)(() => {
            let e = n.current;
            return () => {
                document.activeElement === e && !u.focusPrevious() && u.focusNext();
            };
        }, [n, u]);
    let A =
        (0, G.gn)() || 'timeZoneName' === e.type
            ? {
                  role: 'textbox',
                  'aria-valuemax': null,
                  'aria-valuemin': null,
                  'aria-valuetext': null,
                  'aria-valuenow': null
              }
            : {};
    e !== (0, Z.useMemo)(() => t.segments.find((e) => e.isEditable), [t.segments]) && !t.isInvalid && (l = void 0);
    let N = (0, G.Me)(),
        C = !t.isDisabled && !t.isReadOnly && e.isEditable,
        R = 'literal' === e.type ? '' : a.of(e.type),
        O = (0, G.bE)({
            'aria-label': `${R}${s ? `, ${s}` : ''}${o ? ', ' : ''}`,
            'aria-labelledby': o
        });
    return 'literal' === e.type
        ? { segmentProps: { 'aria-hidden': !0 } }
        : {
              segmentProps: (0, G.dG)(h, O, {
                  id: N,
                  ...A,
                  'aria-invalid': t.isInvalid ? 'true' : void 0,
                  'aria-describedby': l,
                  'aria-readonly': t.isReadOnly || !e.isEditable ? 'true' : void 0,
                  'data-placeholder': e.isPlaceholder || void 0,
                  contentEditable: C,
                  suppressContentEditableWarning: C,
                  spellCheck: C ? 'false' : void 0,
                  autoCapitalize: C ? 'off' : void 0,
                  autoCorrect: C ? 'off' : void 0,
                  [parseInt(Z.version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: C ? 'next' : void 0,
                  inputMode: t.isDisabled || 'dayPeriod' === e.type || 'era' === e.type || !C ? void 0 : 'numeric',
                  tabIndex: t.isDisabled ? void 0 : 0,
                  onKeyDown: (e) => {
                      if (('a' === e.key && ((0, G.V5)() ? e.metaKey : e.ctrlKey) && e.preventDefault(), !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey))
                          switch (e.key) {
                              case 'Backspace':
                              case 'Delete':
                                  e.preventDefault(), e.stopPropagation(), m();
                          }
                  },
                  onFocus: () => {
                      (r.current = ''), (0, G.Gt)(n.current, { containingElement: (0, G.rP)(n.current) }), window.getSelection().collapse(n.current);
                  },
                  style: { caretColor: 'transparent' },
                  onPointerDown(e) {
                      e.stopPropagation();
                  },
                  onMouseDown(e) {
                      e.stopPropagation();
                  }
              })
          };
}
function ea(e, t, n) {
    var r, i;
    let a = (0, j.qb)(z(q), '@react-aria/datepicker'),
        { isInvalid: s, validationErrors: o, validationDetails: l } = t.displayValidation,
        {
            labelProps: u,
            fieldProps: c,
            descriptionProps: d,
            errorMessageProps: f
        } = (0, F.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: s,
            errorMessage: e.errorMessage || o
        }),
        _ = c['aria-labelledby'] || c.id,
        { locale: h } = (0, j.bU)(),
        p = t.formatValue(h, { month: 'long' }),
        m = p
            ? a.format('selectedRangeDescription', {
                  startDate: p.start,
                  endDate: p.end
              })
            : '',
        g = (0, G.PK)(m),
        E = {
            'aria-label': a.format('startDate'),
            'aria-labelledby': _
        },
        v = {
            'aria-label': a.format('endDate'),
            'aria-labelledby': _
        },
        I = (0, G.Me)(),
        S = (0, G.Me)(),
        T = Q(t, n),
        b = [g['aria-describedby'], c['aria-describedby']].filter(Boolean).join(' ') || void 0,
        y = (0, Z.useMemo)(() => (0, U.E7)(n, { accept: (e) => e.id !== I }), [n, I]),
        A = {
            [$]: y,
            [J]: 'presentation',
            'aria-describedby': b,
            placeholderValue: e.placeholderValue,
            hideTimeZone: e.hideTimeZone,
            hourCycle: e.hourCycle,
            granularity: e.granularity,
            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isRequired: e.isRequired,
            validationBehavior: e.validationBehavior
        },
        N = (0, G.zL)(e),
        { focusWithinProps: C } = (0, V.L_)({
            ...e,
            isDisabled: t.isOpen,
            onBlurWithin: e.onBlur,
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange
        }),
        R = (0, Z.useRef)(B.PS),
        O = (0, Z.useRef)(B.PS);
    return {
        groupProps: (0, G.dG)(N, T, c, g, C, {
            role: 'group',
            'aria-disabled': e.isDisabled || null,
            'aria-describedby': b,
            onKeyDown(n) {
                !t.isOpen && e.onKeyDown && e.onKeyDown(n);
            },
            onKeyUp(n) {
                !t.isOpen && e.onKeyUp && e.onKeyUp(n);
            }
        }),
        labelProps: {
            ...u,
            onClick: () => {
                y.focusFirst();
            }
        },
        buttonProps: {
            ...g,
            id: I,
            'aria-haspopup': 'dialog',
            'aria-label': a.format('calendar'),
            'aria-labelledby': `${I} ${_}`,
            'aria-describedby': b,
            'aria-expanded': t.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => t.setOpen(!0)
        },
        dialogProps: {
            id: S,
            'aria-labelledby': `${I} ${_}`
        },
        startFieldProps: {
            ...E,
            ...A,
            value: null === (r = t.value) || void 0 === r ? void 0 : r.start,
            onChange: (e) => t.setDateTime('start', e),
            autoFocus: e.autoFocus,
            name: e.startName,
            [B.tL]: {
                realtimeValidation: t.realtimeValidation,
                displayValidation: t.displayValidation,
                updateValidation(e) {
                    (R.current = e), t.updateValidation((0, B.W0)(e, O.current));
                },
                resetValidation: t.resetValidation,
                commitValidation: t.commitValidation
            }
        },
        endFieldProps: {
            ...v,
            ...A,
            value: null === (i = t.value) || void 0 === i ? void 0 : i.end,
            onChange: (e) => t.setDateTime('end', e),
            name: e.endName,
            [B.tL]: {
                realtimeValidation: t.realtimeValidation,
                displayValidation: t.displayValidation,
                updateValidation(e) {
                    (O.current = e), t.updateValidation((0, B.W0)(R.current, e));
                },
                resetValidation: t.resetValidation,
                commitValidation: t.commitValidation
            }
        },
        descriptionProps: d,
        errorMessageProps: f,
        calendarProps: {
            autoFocus: !0,
            value: t.dateRange,
            onChange: t.setDateRange,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isDateUnavailable: e.isDateUnavailable,
            allowsNonContiguousRanges: e.allowsNonContiguousRanges,
            defaultFocusedValue: t.dateRange ? void 0 : e.placeholderValue,
            isInvalid: t.isInvalid,
            errorMessage: 'function' == typeof e.errorMessage ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(' ')
        },
        isInvalid: s,
        validationErrors: o,
        validationDetails: l
    };
}
