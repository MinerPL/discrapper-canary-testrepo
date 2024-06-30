s.d(n, {
    Z: function () {
        return T;
    }
}), s(47120);
var l = s(735250), i = s(470079), t = s(120356), r = s.n(t), a = s(481060), c = s(541716), o = s(752305), u = s(893718), d = s(993413), _ = s(131704), m = s(474936), I = s(981631), E = s(689938), p = s(190949);
let N = (0, _.kt)({
    id: '1',
    type: I.d4z.DM
});
function T(e) {
    let {
            sectionTitle: n,
            errors: s,
            onTextChange: t,
            pendingText: _,
            placeholder: I,
            currentText: T,
            className: S,
            innerClassName: x,
            disabled: h = !1,
            disableThemedBackground: P = !1
        } = e, [A, v] = i.useState(null != _ ? _ : T), [f, M] = i.useState((0, o.JM)(A)), g = i.useRef(!1);
    return i.useEffect(() => {
        g.current = !0;
    }, []), i.useEffect(() => {
        if (void 0 === _) {
            let e = (0, o.JM)(T);
            v(T), M(e);
        }
    }, [
        _,
        T
    ]), (0, l.jsx)('div', {
        className: r()(p.body, S),
        children: (0, l.jsxs)(d.Z, {
            title: n,
            errors: s,
            disabled: h,
            children: [
                (0, l.jsx)(u.Z, {
                    innerClassName: r()(p.textArea, x),
                    editorClassName: p.editorTextArea,
                    maxCharacterCount: m.$n,
                    onChange: function (e, n, s) {
                        n !== A && (v(n), M(s), t(n));
                    },
                    placeholder: I,
                    channel: N,
                    textValue: A,
                    richValue: f,
                    type: c.I.CUSTOM_GIFT,
                    onBlur: () => {
                        g.current = !1;
                    },
                    onFocus: () => {
                        g.current = !0;
                    },
                    focused: g.current,
                    onSubmit: function () {
                        return new Promise(e => {
                            e({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        });
                    },
                    disableThemedBackground: P
                }),
                (0, l.jsx)(a.HiddenVisually, { children: E.Z.Messages.MAXIMUM_LENGTH.format({ maxLength: m.$n }) })
            ]
        })
    });
}
