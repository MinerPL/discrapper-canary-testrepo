n.d(t, {
    n: function () {
        return s;
    }
});
var r = n(661763),
    i = n(662845),
    a = n(921336);
function s(e, t) {
    let { elementType: n = 'a', onPress: s, onPressStart: o, onPressEnd: l, onClick: u, isDisabled: c, ...d } = e,
        f = {};
    'a' !== n &&
        (f = {
            role: 'link',
            tabIndex: c ? void 0 : 0
        });
    let { focusableProps: _ } = (0, i.kc)(e, t),
        { pressProps: h, isPressed: p } = (0, a.r7)({
            onPress: s,
            onPressStart: o,
            onPressEnd: l,
            isDisabled: c,
            ref: t
        }),
        m = (0, r.zL)(d, {
            labelable: !0,
            isLink: 'a' === n
        }),
        g = (0, r.dG)(_, h),
        E = (0, r.tv)();
    return {
        isPressed: p,
        linkProps: (0, r.dG)(m, {
            ...g,
            ...f,
            'aria-disabled': c || void 0,
            'aria-current': e['aria-current'],
            onClick: (e) => {
                var t;
                null === (t = h.onClick) || void 0 === t || t.call(h, e), u && (u(e), console.warn('onClick is deprecated, please use onPress')), !E.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && (0, r.b0)(e.currentTarget, e) && (e.preventDefault(), E.open(e.currentTarget, e));
            }
        })
    };
}
