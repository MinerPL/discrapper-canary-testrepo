n.d(t, {
    n: function () {
        return E;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(1561),
    l = n(84735),
    u = n(922770),
    c = n(481060),
    d = n(689938),
    _ = n(457390);
let E = i.forwardRef(function (e, t) {
    var n, a, E;
    let { query: f, onChange: h, loading: p = !1, disabled: m = !1, placeholder: I = d.Z.Messages.SEARCH, 'aria-label': T } = e,
        g = i.useRef(null),
        S = i.useRef(null);
    i.useImperativeHandle(
        t,
        () => ({
            focus: () => {
                var e;
                return null === (e = S.current) || void 0 === e ? void 0 : e.focus();
            },
            blur: () => {
                var e;
                return null === (e = S.current) || void 0 === e ? void 0 : e.blur();
            },
            activate: () => !1
        }),
        []
    );
    let A =
        ((n = f),
        (a = p),
        (E = h),
        a
            ? (0, r.jsx)('div', {
                  className: _.iconContainer,
                  children: (0, r.jsx)(u.$, {
                      type: u.$.Type.SPINNING_CIRCLE,
                      className: s()(_.icon)
                  })
              })
            : n.length > 0
              ? (0, r.jsx)(o.P, {
                    'aria-label': d.Z.Messages.SEARCH_CLEAR,
                    className: s()(_.iconContainer, _.iconClickable),
                    onClick: (e) => {
                        e.stopPropagation(), E('');
                    },
                    onMouseDown: (e) => {
                        e.preventDefault(), e.stopPropagation();
                    },
                    focusProps: {
                        offset: {
                            top: -3,
                            right: -3,
                            bottom: -3,
                            left: -3
                        }
                    },
                    children: (0, r.jsx)(c.XSmallIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 18,
                        height: 18,
                        className: _.icon,
                        'aria-label': d.Z.Messages.CLOSE
                    })
                })
              : (0, r.jsx)('div', {
                    className: _.iconContainer,
                    children: (0, r.jsx)(c.MagnifyingGlassIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 18,
                        height: 18,
                        className: _.icon,
                        'aria-label': d.Z.Messages.SEARCH
                    })
                }));
    return (0, r.jsx)(l.t, {
        focusTarget: S,
        ringTarget: g,
        offset: {
            top: 2,
            bottom: 2,
            left: 4,
            right: 4
        },
        children: (0, r.jsxs)('div', {
            className: _.container,
            ref: g,
            children: [
                (0, r.jsx)('input', {
                    role: 'searchbox',
                    'aria-busy': p,
                    ref: S,
                    className: _.input,
                    value: f,
                    onChange: (e) => h(e.currentTarget.value),
                    'aria-label': T,
                    placeholder: I,
                    disabled: m
                }),
                A
            ]
        })
    });
});
