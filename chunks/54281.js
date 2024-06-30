n.d(t, {
    V: function () {
        return a;
    }
});
var r = n(735250), i = n(470079);
let a = i.forwardRef(function (e, t) {
    let {
            className: n,
            children: a
        } = e, o = i.useRef(null), s = i.useRef(null);
    return i.useImperativeHandle(t, () => ({
        focus: () => {
            var e;
            let t = o.current;
            null != t && (null == s.current && (s.current = t.querySelector('[tabindex="0"]')), null === (e = s.current) || void 0 === e || e.focus());
        },
        blur: () => {
            var e;
            return null === (e = s.current) || void 0 === e ? void 0 : e.blur();
        },
        activate: () => !1
    }), []), i.useLayoutEffect(() => {
        let e = o.current;
        if (null != e)
            return e.addEventListener('focusin', t), () => {
                e.removeEventListener('focusin', t);
            };
        function t(e) {
            s.current = e.target;
        }
    }, []), (0, r.jsx)('div', {
        ref: o,
        className: n,
        style: { position: 'relative' },
        children: a
    });
});
