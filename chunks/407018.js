n.d(t, {
    o: function () {
        return f;
    },
    p: function () {
        return _;
    }
});
var r = n(661763),
    i = n(239700),
    a = n(192379),
    s = n(921336),
    o = n(523603),
    l = n(649859),
    u = n(662845);
let c = new WeakMap();
function d(e, t) {
    let n = c.get(e);
    if (!n) throw Error('Unknown slider state');
    return `${n.id}-${t}`;
}
function f(e, t, n) {
    var u;
    let { labelProps: f, fieldProps: _ } = (0, o.N)(e),
        h = 'vertical' === e.orientation;
    c.set(t, {
        id: null !== (u = f.id) && void 0 !== u ? u : _.id,
        'aria-describedby': e['aria-describedby'],
        'aria-details': e['aria-details']
    });
    let { direction: p } = (0, l.bU)(),
        { addGlobalListener: m, removeGlobalListener: g } = (0, r.xi)(),
        E = (0, a.useRef)(null),
        v = 'rtl' === p,
        I = (0, a.useRef)(null),
        { moveProps: S } = (0, s.r_)({
            onMoveStart() {
                I.current = null;
            },
            onMove({ deltaX: e, deltaY: r }) {
                let { height: a, width: s } = n.current.getBoundingClientRect(),
                    o = h ? a : s;
                null == I.current && (I.current = t.getThumbPercent(E.current) * o);
                let l = h ? r : e;
                if (((h || v) && (l = -l), (I.current += l), null != E.current && n.current)) {
                    let e = (0, i.uZ)(I.current / o, 0, 1);
                    t.setThumbPercent(E.current, e);
                }
            },
            onMoveEnd() {
                null != E.current && (t.setThumbDragging(E.current, !1), (E.current = null));
            }
        }),
        T = (0, a.useRef)(void 0),
        b = (r, i, a, s) => {
            if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
                let e,
                    { height: o, width: l, top: u, left: c } = n.current.getBoundingClientRect(),
                    d = ((h ? s : a) - (h ? u : c)) / (h ? o : l);
                ('rtl' === p || h) && (d = 1 - d);
                let f = t.getPercentValue(d),
                    _ = t.values.findIndex((e) => f - e < 0);
                (e = 0 === _ ? _ : -1 === _ ? t.values.length - 1 : Math.abs(t.values[_ - 1] - f) < Math.abs(t.values[_] - f) ? _ - 1 : _) >= 0 && t.isThumbEditable(e) ? (r.preventDefault(), (E.current = e), t.setFocusedThumb(e), (T.current = i), t.setThumbDragging(E.current, !0), t.setThumbValue(e, f), m(window, 'mouseup', y, !1), m(window, 'touchend', y, !1), m(window, 'pointerup', y, !1)) : (E.current = null);
            }
        },
        y = (e) => {
            var n, r;
            (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === T.current && (null != E.current && (t.setThumbDragging(E.current, !1), (E.current = null)), g(window, 'mouseup', y, !1), g(window, 'touchend', y, !1), g(window, 'pointerup', y, !1));
        };
    return (
        'htmlFor' in f &&
            f.htmlFor &&
            (delete f.htmlFor,
            (f.onClick = () => {
                var e;
                null === (e = document.getElementById(d(t, 0))) || void 0 === e || e.focus(), (0, s._w)('keyboard');
            })),
        {
            labelProps: f,
            groupProps: {
                role: 'group',
                ..._
            },
            trackProps: (0, r.dG)(
                {
                    onMouseDown(e) {
                        0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && b(e, void 0, e.clientX, e.clientY);
                    },
                    onPointerDown(e) {
                        ('mouse' !== e.pointerType || (0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey)) && b(e, e.pointerId, e.clientX, e.clientY);
                    },
                    onTouchStart(e) {
                        b(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                    },
                    style: {
                        position: 'relative',
                        touchAction: 'none'
                    }
                },
                S
            ),
            outputProps: {
                htmlFor: t.values.map((e, n) => d(t, n)).join(' '),
                'aria-live': 'off'
            }
        }
    );
}
function _(e, t) {
    var n;
    let { index: f = 0, isRequired: _, validationState: h, isInvalid: p, trackRef: m, inputRef: g, orientation: E = t.orientation, name: v } = e,
        I = e.isDisabled || t.isDisabled,
        S = 'vertical' === E,
        { direction: T } = (0, l.bU)(),
        { addGlobalListener: b, removeGlobalListener: y } = (0, r.xi)(),
        A = c.get(t),
        { labelProps: N, fieldProps: C } = (0, o.N)({
            ...e,
            id: d(t, f),
            'aria-labelledby': `${A.id} ${null !== (n = e['aria-labelledby']) && void 0 !== n ? n : ''}`.trim()
        }),
        R = t.values[f],
        O = (0, a.useCallback)(() => {
            g.current && (0, r.Ao)(g.current);
        }, [g]),
        D = t.focusedThumb === f;
    (0, a.useEffect)(() => {
        D && O();
    }, [D, O]);
    let L = 'rtl' === T,
        x = (0, a.useRef)(null),
        { keyboardProps: w } = (0, s.v5)({
            onKeyDown(e) {
                let { getThumbMaxValue: n, getThumbMinValue: r, decrementThumb: i, incrementThumb: a, setThumbValue: s, setThumbDragging: o, pageSize: l } = t;
                if (!/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
                    e.continuePropagation();
                    return;
                }
                switch ((e.preventDefault(), o(f, !0), e.key)) {
                    case 'PageUp':
                        a(f, l);
                        break;
                    case 'PageDown':
                        i(f, l);
                        break;
                    case 'Home':
                        s(f, r(f));
                        break;
                    case 'End':
                        s(f, n(f));
                }
                o(f, !1);
            }
        }),
        { moveProps: M } = (0, s.r_)({
            onMoveStart() {
                (x.current = null), t.setThumbDragging(f, !0);
            },
            onMove({ deltaX: e, deltaY: n, pointerType: r, shiftKey: a }) {
                let { getThumbPercent: s, setThumbPercent: o, decrementThumb: l, incrementThumb: u, step: c, pageSize: d } = t,
                    { width: _, height: h } = m.current.getBoundingClientRect(),
                    p = S ? h : _;
                if ((null == x.current && (x.current = s(f) * p), 'keyboard' === r)) (e > 0 && L) || (e < 0 && !L) || n > 0 ? l(f, a ? d : c) : u(f, a ? d : c);
                else {
                    let t = S ? n : e;
                    (S || L) && (t = -t), (x.current += t), o(f, (0, i.uZ)(x.current / p, 0, 1));
                }
            },
            onMoveEnd() {
                t.setThumbDragging(f, !1);
            }
        });
    t.setThumbEditable(f, !I);
    let { focusableProps: P } = (0, u.kc)(
            (0, r.dG)(e, {
                onFocus: () => t.setFocusedThumb(f),
                onBlur: () => t.setFocusedThumb(void 0)
            }),
            g
        ),
        k = (0, a.useRef)(void 0),
        U = (e) => {
            O(), (k.current = e), t.setThumbDragging(f, !0), b(window, 'mouseup', G, !1), b(window, 'touchend', G, !1), b(window, 'pointerup', G, !1);
        },
        G = (e) => {
            var n, r;
            (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === k.current && (O(), t.setThumbDragging(f, !1), y(window, 'mouseup', G, !1), y(window, 'touchend', G, !1), y(window, 'pointerup', G, !1));
        },
        B = t.getThumbPercent(f);
    (S || 'rtl' === T) && (B = 1 - B);
    let Z = I
        ? {}
        : (0, r.dG)(w, M, {
              onMouseDown: (e) => {
                  0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && U();
              },
              onPointerDown: (e) => {
                  0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && U(e.pointerId);
              },
              onTouchStart: (e) => {
                  U(e.changedTouches[0].identifier);
              }
          });
    return (
        (0, r.y$)(g, R, (e) => {
            t.setThumbValue(f, e);
        }),
        {
            inputProps: (0, r.dG)(P, C, {
                type: 'range',
                tabIndex: I ? void 0 : 0,
                min: t.getThumbMinValue(f),
                max: t.getThumbMaxValue(f),
                step: t.step,
                value: R,
                name: v,
                disabled: I,
                'aria-orientation': E,
                'aria-valuetext': t.getThumbValueLabel(f),
                'aria-required': _ || void 0,
                'aria-invalid': p || 'invalid' === h || void 0,
                'aria-errormessage': e['aria-errormessage'],
                'aria-describedby': [A['aria-describedby'], e['aria-describedby']].filter(Boolean).join(' '),
                'aria-details': [A['aria-details'], e['aria-details']].filter(Boolean).join(' '),
                onChange: (e) => {
                    t.setThumbValue(f, parseFloat(e.target.value));
                }
            }),
            thumbProps: {
                ...Z,
                style: {
                    position: 'absolute',
                    [S ? 'top' : 'left']: `${100 * B}%`,
                    transform: 'translate(-50%, -50%)',
                    touchAction: 'none'
                }
            },
            labelProps: N,
            isDragging: t.isThumbDragging(f),
            isDisabled: I,
            isFocused: D
        }
    );
}
