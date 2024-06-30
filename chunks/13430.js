n(47120), n(653041);
var a = n(735250), s = n(470079), o = n(120356), r = n.n(o), l = n(913527), i = n.n(l), c = n(481060), d = n(987134), u = n(689938), _ = n(967794);
let p = i()().localeData().months(), f = Array.from(Array(31).keys()).map(e => ({
        value: e + 1,
        label: ''.concat(e + 1)
    })), m = Array.from(Array(12).keys()).map(e => ({
        value: e + 1,
        label: p[e]
    })), h = /[a-zA-Z0-9]/;
function E(e) {
    let {
            options: t,
            selectOption: n,
            children: o
        } = e, [r, l] = s.useState('');
    s.useEffect(() => {
        if ('' !== r) {
            let e = setTimeout(() => l(''), 1000);
            return () => clearTimeout(e);
        }
    }, [
        r,
        l
    ]);
    let i = s.useCallback(e => {
        if (h.test(e.key)) {
            let a = ''.concat(r).concat(e.key.toLowerCase()), s = t.find(e => e.label.toLowerCase().startsWith(a));
            null != s && n(s.value), l(a);
        }
    }, [
        n,
        l,
        r,
        t
    ]);
    return (0, a.jsx)('div', {
        onKeyDown: i,
        children: o
    });
}
function N() {
    let e = i()().localeData().longDateFormat('L'), t = e.indexOf('D'), n = e.indexOf('M'), a = e.indexOf('Y');
    return (-1 === t || -1 === n || -1 === a) && (t = 0, n = 1, a = 2), [
        {
            index: t,
            type: 'day'
        },
        {
            index: n,
            type: 'month'
        },
        {
            index: a,
            type: 'year'
        }
    ].sort((e, t) => e.index < t.index ? -1 : 1);
}
let T = s.forwardRef(function (e, t) {
    let {
            value: n,
            wrapperClassName: o,
            onChange: l,
            onPopulated: p,
            error: h,
            autoFocus: T,
            required: x
        } = e, {
            day: A,
            setDay: v,
            month: b,
            setMonth: C,
            year: I,
            setYear: g
        } = function (e) {
            let t = null, n = null, a = null;
            null != e && (t = e.date(), n = e.month() + 1, a = e.year());
            let [o, r] = s.useState(t), [l, i] = s.useState(n), [c, d] = s.useState(a);
            return {
                day: o,
                setDay: r,
                month: l,
                setMonth: i,
                year: c,
                setYear: d
            };
        }(n), M = s.useMemo(() => null != A && null != b && null != I ? i()(''.concat(A, '/').concat(b, '/').concat(I), 'DD/MM/YYYY') : null, [
            A,
            b,
            I
        ]);
    s.useEffect(() => {
        l((null == M ? void 0 : M.isValid()) ? M : null);
    }, [
        M,
        l
    ]);
    let O = h;
    null != M && !M.isValid() && (O = u.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);
    let S = function () {
            let e = new Date().getFullYear(), t = s.useRef(Array.from(Array(150).keys()).map(t => ({
                    value: e - t - 3,
                    label: ''.concat(e - t - 3)
                })));
            return s.useEffect(() => {
                t.current = Array.from(Array(150).keys()).map(t => ({
                    value: e - t - 3,
                    label: ''.concat(e - t - 3)
                }));
            }, [e]), t.current;
        }(), [G, R] = s.useState(T ? 0 : -1), j = s.useRef(null), F = s.useRef(null), y = s.useRef(null), D = s.useMemo(N, []), Z = s.useCallback(() => {
            var e, t, n, a;
            switch (null === (e = D[G]) || void 0 === e ? void 0 : e.type) {
            case 'day':
                null === (t = j.current) || void 0 === t || t.focus();
                break;
            case 'month':
                null === (n = F.current) || void 0 === n || n.focus();
                break;
            case 'year':
                null === (a = y.current) || void 0 === a || a.focus();
            }
        }, [
            G,
            j,
            F,
            y,
            D
        ]);
    s.useEffect(() => {
        setTimeout(Z, 500);
    }, []), s.useEffect(() => {
        if (G >= D.length) {
            null == p || p();
            return;
        }
        Z();
    }, [
        G,
        Z
    ]);
    let L = [];
    for (let e = 0; e < 3; e++) {
        let {type: t} = D[e];
        switch (t) {
        case 'day':
            L.push({
                key: 'day',
                input: (0, a.jsx)(E, {
                    options: f,
                    selectOption: v,
                    children: (0, a.jsx)(d.Z, {
                        ref: j,
                        className: _.__invalid_inputDay,
                        'aria-label': u.Z.Messages.AGE_GATE_DOB_DAY,
                        menuPlacement: d.Z.MenuPlacements.TOP,
                        placeholder: (0, a.jsx)('span', {
                            'aria-hidden': !0,
                            children: u.Z.Messages.AGE_GATE_DOB_DAY
                        }),
                        options: f,
                        value: A,
                        onChange: t => {
                            let {value: n} = t;
                            v(n), R(e + 1);
                        },
                        maxMenuHeight: 215
                    })
                })
            });
            break;
        case 'month':
            L.push({
                key: 'month',
                input: (0, a.jsx)(E, {
                    options: m,
                    selectOption: C,
                    children: (0, a.jsx)(d.Z, {
                        ref: F,
                        className: _.__invalid_inputMonth,
                        'aria-label': u.Z.Messages.AGE_GATE_DOB_MONTH,
                        menuPlacement: d.Z.MenuPlacements.TOP,
                        placeholder: (0, a.jsx)('span', {
                            'aria-hidden': !0,
                            children: u.Z.Messages.AGE_GATE_DOB_MONTH
                        }),
                        options: m,
                        value: b,
                        onChange: t => {
                            let {value: n} = t;
                            C(n), R(e + 1);
                        },
                        maxMenuHeight: 215
                    })
                })
            });
            break;
        case 'year':
            L.push({
                key: 'year',
                input: (0, a.jsx)(E, {
                    options: S,
                    selectOption: g,
                    children: (0, a.jsx)(d.Z, {
                        ref: y,
                        className: _.__invalid_inputYear,
                        'aria-label': u.Z.Messages.AGE_GATE_DOB_YEAR,
                        menuPlacement: d.Z.MenuPlacements.TOP,
                        placeholder: (0, a.jsx)('span', {
                            'aria-hidden': !0,
                            children: u.Z.Messages.AGE_GATE_DOB_YEAR
                        }),
                        options: S,
                        value: I,
                        onChange: t => {
                            let {value: n} = t;
                            g(n), R(e + 1);
                        },
                        maxMenuHeight: 215
                    })
                })
            });
        }
    }
    return (0, a.jsxs)('fieldset', {
        className: r()(_.container, o),
        children: [
            (0, a.jsx)(c.FormTitle, {
                tag: 'legend',
                required: x,
                error: O,
                children: u.Z.Messages.AGE_GATE_DATE_OF_BIRTH
            }),
            (0, a.jsx)('div', {
                className: _.inputs,
                children: L.map((e, t) => {
                    let {
                        key: n,
                        input: s
                    } = e;
                    return (0, a.jsx)('div', {
                        tabIndex: t + 1,
                        className: _[n],
                        children: s
                    }, n);
                })
            })
        ]
    });
});
t.Z = T;
