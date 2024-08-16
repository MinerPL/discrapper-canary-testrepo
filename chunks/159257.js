n.d(t, {
    o: function () {
        return _;
    },
    p: function () {
        return E;
    }
});
var r = n(182823),
    i = n(882932),
    a = n(470079),
    s = n(612001),
    o = n(251433),
    l = n(616073),
    u = n(706682);
let c = new WeakMap();
function d(e, t) {
    let n = c.get(e);
    if (!n) throw Error('Unknown slider state');
    return `${n.id}-${t}`;
}
function _(e, t, n) {
    var u;
    let { labelProps: _, fieldProps: E } = (0, o.N)(e),
        f = 'vertical' === e.orientation;
    c.set(t, {
        id: null !== (u = _.id) && void 0 !== u ? u : E.id,
        'aria-describedby': e['aria-describedby'],
        'aria-details': e['aria-details']
    });
    let { direction: h } = (0, l.bU)(),
        { addGlobalListener: p, removeGlobalListener: m } = (0, r.xi)(),
        I = (0, a.useRef)(null),
        T = 'rtl' === h,
        g = (0, a.useRef)(null),
        { moveProps: S } = (0, s.r_)({
            onMoveStart() {
                g.current = null;
            },
            onMove({ deltaX: e, deltaY: r }) {
                let { height: a, width: s } = n.current.getBoundingClientRect(),
                    o = f ? a : s;
                null == g.current && (g.current = t.getThumbPercent(I.current) * o);
                let l = f ? r : e;
                if (((f || T) && (l = -l), (g.current += l), null != I.current && n.current)) {
                    let e = (0, i.uZ)(g.current / o, 0, 1);
                    t.setThumbPercent(I.current, e);
                }
            },
            onMoveEnd() {
                null != I.current && (t.setThumbDragging(I.current, !1), (I.current = null));
            }
        }),
        A = (0, a.useRef)(void 0),
        N = (r, i, a, s) => {
            if (n.current && !e.isDisabled && t.values.every((e, n) => !t.isThumbDragging(n))) {
                let e,
                    { height: o, width: l, top: u, left: c } = n.current.getBoundingClientRect(),
                    d = ((f ? s : a) - (f ? u : c)) / (f ? o : l);
                ('rtl' === h || f) && (d = 1 - d);
                let _ = t.getPercentValue(d),
                    E = t.values.findIndex((e) => _ - e < 0);
                (e = 0 === E ? E : -1 === E ? t.values.length - 1 : Math.abs(t.values[E - 1] - _) < Math.abs(t.values[E] - _) ? E - 1 : E) >= 0 && t.isThumbEditable(e) ? (r.preventDefault(), (I.current = e), t.setFocusedThumb(e), (A.current = i), t.setThumbDragging(I.current, !0), t.setThumbValue(e, _), p(window, 'mouseup', v, !1), p(window, 'touchend', v, !1), p(window, 'pointerup', v, !1)) : (I.current = null);
            }
        },
        v = (e) => {
            var n, r;
            (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === A.current && (null != I.current && (t.setThumbDragging(I.current, !1), (I.current = null)), m(window, 'mouseup', v, !1), m(window, 'touchend', v, !1), m(window, 'pointerup', v, !1));
        };
    return (
        'htmlFor' in _ &&
            _.htmlFor &&
            (delete _.htmlFor,
            (_.onClick = () => {
                var e;
                null === (e = document.getElementById(d(t, 0))) || void 0 === e || e.focus(), (0, s._w)('keyboard');
            })),
        {
            labelProps: _,
            groupProps: {
                role: 'group',
                ...E
            },
            trackProps: (0, r.dG)(
                {
                    onMouseDown(e) {
                        0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && N(e, void 0, e.clientX, e.clientY);
                    },
                    onPointerDown(e) {
                        ('mouse' !== e.pointerType || (0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey)) && N(e, e.pointerId, e.clientX, e.clientY);
                    },
                    onTouchStart(e) {
                        N(e, e.changedTouches[0].identifier, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
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
function E(e, t) {
    var n;
    let { index: _ = 0, isRequired: E, validationState: f, isInvalid: h, trackRef: p, inputRef: m, orientation: I = t.orientation, name: T } = e,
        g = e.isDisabled || t.isDisabled,
        S = 'vertical' === I,
        { direction: A } = (0, l.bU)(),
        { addGlobalListener: N, removeGlobalListener: v } = (0, r.xi)(),
        O = c.get(t),
        { labelProps: R, fieldProps: C } = (0, o.N)({
            ...e,
            id: d(t, _),
            'aria-labelledby': `${O.id} ${null !== (n = e['aria-labelledby']) && void 0 !== n ? n : ''}`.trim()
        }),
        y = t.values[_],
        D = (0, a.useCallback)(() => {
            m.current && (0, r.Ao)(m.current);
        }, [m]),
        L = t.focusedThumb === _;
    (0, a.useEffect)(() => {
        L && D();
    }, [L, D]);
    let b = 'rtl' === A,
        M = (0, a.useRef)(null),
        { keyboardProps: P } = (0, s.v5)({
            onKeyDown(e) {
                let { getThumbMaxValue: n, getThumbMinValue: r, decrementThumb: i, incrementThumb: a, setThumbValue: s, setThumbDragging: o, pageSize: l } = t;
                if (!/^(PageUp|PageDown|Home|End)$/.test(e.key)) {
                    e.continuePropagation();
                    return;
                }
                switch ((e.preventDefault(), o(_, !0), e.key)) {
                    case 'PageUp':
                        a(_, l);
                        break;
                    case 'PageDown':
                        i(_, l);
                        break;
                    case 'Home':
                        s(_, r(_));
                        break;
                    case 'End':
                        s(_, n(_));
                }
                o(_, !1);
            }
        }),
        { moveProps: U } = (0, s.r_)({
            onMoveStart() {
                (M.current = null), t.setThumbDragging(_, !0);
            },
            onMove({ deltaX: e, deltaY: n, pointerType: r, shiftKey: a }) {
                let { getThumbPercent: s, setThumbPercent: o, decrementThumb: l, incrementThumb: u, step: c, pageSize: d } = t,
                    { width: E, height: f } = p.current.getBoundingClientRect(),
                    h = S ? f : E;
                if ((null == M.current && (M.current = s(_) * h), 'keyboard' === r)) (e > 0 && b) || (e < 0 && !b) || n > 0 ? l(_, a ? d : c) : u(_, a ? d : c);
                else {
                    let t = S ? n : e;
                    (S || b) && (t = -t), (M.current += t), o(_, (0, i.uZ)(M.current / h, 0, 1));
                }
            },
            onMoveEnd() {
                t.setThumbDragging(_, !1);
            }
        });
    t.setThumbEditable(_, !g);
    let { focusableProps: w } = (0, u.kc)(
            (0, r.dG)(e, {
                onFocus: () => t.setFocusedThumb(_),
                onBlur: () => t.setFocusedThumb(void 0)
            }),
            m
        ),
        x = (0, a.useRef)(void 0),
        G = (e) => {
            D(), (x.current = e), t.setThumbDragging(_, !0), N(window, 'mouseup', k, !1), N(window, 'touchend', k, !1), N(window, 'pointerup', k, !1);
        },
        k = (e) => {
            var n, r;
            (null !== (r = e.pointerId) && void 0 !== r ? r : null === (n = e.changedTouches) || void 0 === n ? void 0 : n[0].identifier) === x.current && (D(), t.setThumbDragging(_, !1), v(window, 'mouseup', k, !1), v(window, 'touchend', k, !1), v(window, 'pointerup', k, !1));
        },
        B = t.getThumbPercent(_);
    (S || 'rtl' === A) && (B = 1 - B);
    let F = g
        ? {}
        : (0, r.dG)(P, U, {
              onMouseDown: (e) => {
                  0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && G();
              },
              onPointerDown: (e) => {
                  0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey && G(e.pointerId);
              },
              onTouchStart: (e) => {
                  G(e.changedTouches[0].identifier);
              }
          });
    return (
        (0, r.y$)(m, y, (e) => {
            t.setThumbValue(_, e);
        }),
        {
            inputProps: (0, r.dG)(w, C, {
                type: 'range',
                tabIndex: g ? void 0 : 0,
                min: t.getThumbMinValue(_),
                max: t.getThumbMaxValue(_),
                step: t.step,
                value: y,
                name: T,
                disabled: g,
                'aria-orientation': I,
                'aria-valuetext': t.getThumbValueLabel(_),
                'aria-required': E || void 0,
                'aria-invalid': h || 'invalid' === f || void 0,
                'aria-errormessage': e['aria-errormessage'],
                'aria-describedby': [O['aria-describedby'], e['aria-describedby']].filter(Boolean).join(' '),
                'aria-details': [O['aria-details'], e['aria-details']].filter(Boolean).join(' '),
                onChange: (e) => {
                    t.setThumbValue(_, parseFloat(e.target.value));
                }
            }),
            thumbProps: {
                ...F,
                style: {
                    position: 'absolute',
                    [S ? 'top' : 'left']: `${100 * B}%`,
                    transform: 'translate(-50%, -50%)',
                    touchAction: 'none'
                }
            },
            labelProps: R,
            isDragging: t.isThumbDragging(_),
            isDisabled: g,
            isFocused: L
        }
    );
}
