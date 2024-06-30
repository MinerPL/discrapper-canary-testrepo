n.d(t, {
    o: function () {
        return d;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(1561), l = n(743236), u = n(939350), c = n(639897);
function d(e) {
    let {
            children: t,
            color: n = 'default',
            isFocused: a = !1,
            disabled: d = !1,
            keepItemStyles: _ = !1,
            menuItemProps: E,
            action: f,
            dontCloseOnActionIfHoldingShiftKey: h,
            dontCloseOnAction: p,
            onClose: m
        } = e, I = i.useRef(null);
    i.useEffect(() => {
        a && (0, l.F)(I);
    }, [a]);
    let T = i.useCallback(e => {
            if (null == f)
                return !1;
            !(e.shiftKey && h) && !p && m(), e.persist(), requestAnimationFrame(() => f(e));
        }, [
            f,
            m,
            h,
            p
        ]), g = _ ? o()(c.item, u._[n], { [c.focused]: a }) : c.customItem;
    return (0, r.jsx)(s.P, {
        innerRef: I,
        className: g,
        onClick: d ? void 0 : T,
        'aria-disabled': d,
        ...E,
        children: t({
            color: n,
            disabled: d,
            isFocused: a
        })
    });
}
