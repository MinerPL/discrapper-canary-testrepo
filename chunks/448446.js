n.d(t, {
    U: function () {
        return s;
    },
    k: function () {
        return o;
    }
});
var r = n(661763),
    i = n(662845),
    a = n(921336);
function s(e, t) {
    let n,
        { elementType: s = 'button', isDisabled: o, onPress: l, onPressStart: u, onPressEnd: c, onPressUp: d, onPressChange: f, preventFocusOnPress: _, allowFocusWhenDisabled: h, onClick: p, href: m, target: g, rel: E, type: v = 'button' } = e;
    n =
        'button' === s
            ? {
                  type: v,
                  disabled: o
              }
            : {
                  role: 'button',
                  tabIndex: o ? void 0 : 0,
                  href: 'a' === s && o ? void 0 : m,
                  target: 'a' === s ? g : void 0,
                  type: 'input' === s ? v : void 0,
                  disabled: 'input' === s ? o : void 0,
                  'aria-disabled': o && 'input' !== s ? o : void 0,
                  rel: 'a' === s ? E : void 0
              };
    let { pressProps: I, isPressed: S } = (0, a.r7)({
            onPressStart: u,
            onPressEnd: c,
            onPressChange: f,
            onPress: l,
            onPressUp: d,
            isDisabled: o,
            preventFocusOnPress: _,
            ref: t
        }),
        { focusableProps: T } = (0, i.kc)(e, t);
    h && (T.tabIndex = o ? -1 : T.tabIndex);
    let b = (0, r.dG)(T, I, (0, r.zL)(e, { labelable: !0 }));
    return {
        isPressed: S,
        buttonProps: (0, r.dG)(n, b, {
            'aria-haspopup': e['aria-haspopup'],
            'aria-expanded': e['aria-expanded'],
            'aria-controls': e['aria-controls'],
            'aria-pressed': e['aria-pressed'],
            onClick: (e) => {
                p && (p(e), console.warn('onClick is deprecated, please use onPress'));
            }
        })
    };
}
function o(e, t, n) {
    let { isSelected: i } = t,
        { isPressed: a, buttonProps: o } = s(
            {
                ...e,
                onPress: (0, r.tS)(t.toggle, e.onPress)
            },
            n
        );
    return {
        isPressed: a,
        buttonProps: (0, r.dG)(o, { 'aria-pressed': i })
    };
}
