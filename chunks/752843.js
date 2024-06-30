t.d(n, {
    V: function () {
        return d;
    },
    Z: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var l = t(628028), r = t(220427), s = t(777207), o = t(330711), a = t(965991);
function c(e) {
    let {type: n} = e;
    return (0, i.jsx)(d, {
        icon: 'user' === n ? (0, i.jsx)(r.t, {
            size: 'xxs',
            color: 'var(--text-positive)'
        }) : (0, i.jsx)(l.Q, {
            size: 'xxs',
            color: 'var(--text-brand)'
        }),
        text: 'user' === n ? o.Z.Messages.Storefront.USER_SUBSCRIPTION : o.Z.Messages.Storefront.SERVER_SUBSCRIPTION
    });
}
function d(e) {
    let {
        icon: n,
        text: t
    } = e;
    return (0, i.jsxs)('div', {
        className: a.container,
        children: [
            n,
            (0, i.jsx)(s.x, {
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: t
            })
        ]
    });
}
