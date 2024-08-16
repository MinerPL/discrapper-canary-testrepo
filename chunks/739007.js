n.d(t, {
    _: function () {
        return l;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(561779),
    s = n(575502);
let o = (e) => ''.concat(e.toFixed(0), '%'),
    l = i.forwardRef(function (e, t) {
        let { value: n, minValue: l = 0, maxValue: u = 100, onChange: c, renderValue: d = o, 'aria-label': _ } = e,
            E = i.useRef(null);
        return (
            i.useImperativeHandle(
                t,
                () => ({
                    focus: () => {
                        var e;
                        return null === (e = E.current) || void 0 === e ? void 0 : e.focus();
                    },
                    blur: () => {
                        var e;
                        return null === (e = E.current) || void 0 === e ? void 0 : e.blur();
                    },
                    activate: () => !1
                }),
                []
            ),
            (0, r.jsx)('div', {
                className: s.sliderContainer,
                children: (0, r.jsx)(a.i, {
                    ref: E,
                    mini: !0,
                    handleSize: 16,
                    className: s.slider,
                    initialValue: n,
                    minValue: l,
                    maxValue: u,
                    onValueChange: c,
                    asValueChanges: c,
                    onValueRender: d,
                    orientation: 'horizontal',
                    'aria-label': _
                })
            })
        );
    });
