n.d(t, {
    q: function () {
        return c;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(743236),
    l = n(939350),
    u = n(667947);
function c(e) {
    let { color: t = 'default', disabled: n, isFocused: a, showDefaultFocus: c = !1, menuItemProps: d, children: f } = e,
        _ = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            if (!a) return;
            let e = _.current;
            if (null == e) return;
            (0, o.F)(_);
            let t = e.querySelector('[tabindex="0"]');
            null == t || t.focus();
        }, [a]),
        (0, r.jsx)('div', {
            ref: _,
            className: s()(u.item, l._[t], {
                [u.disabled]: n,
                [u.focused]: c && a,
                [u.hideInteraction]: !c
            }),
            'aria-disabled': n,
            ...d,
            children: f
        })
    );
}
