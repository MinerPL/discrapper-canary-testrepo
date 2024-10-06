t.d(e, {
    V: function () {
        return d;
    },
    Z: function () {
        return c;
    }
});
var l = t(735250);
t(470079);
var i = t(628028),
    r = t(220427),
    a = t(777207),
    o = t(692547),
    s = t(330711),
    u = t(350727);
function c(n) {
    let { type: e } = n;
    return (0, l.jsx)(d, {
        icon:
            'user' === e
                ? (0, l.jsx)(r.t, {
                      size: 'xxs',
                      color: o.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, l.jsx)(i.Q, {
                      size: 'xxs',
                      color: o.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === e ? s.Z.Messages.Storefront.USER_SUBSCRIPTION : s.Z.Messages.Storefront.SERVER_SUBSCRIPTION
    });
}
function d(n) {
    let { icon: e, text: t } = n;
    return (0, l.jsxs)('div', {
        className: u.container,
        children: [
            e,
            (0, l.jsx)(a.x, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: t
            })
        ]
    });
}
