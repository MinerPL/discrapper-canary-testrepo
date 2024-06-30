n.d(t, {
    M0: function () {
        return d;
    },
    YX: function () {
        return u;
    },
    tT: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(1561), s = n(981729), l = n(409875);
let u = {
        TERTIARY: l.tertiary,
        SECONDARY: l.secondary,
        PRIMARY: l.primary
    }, c = {
        SIZE_24: l.size24,
        SIZE_32: l.size32,
        SIZE_36: l.size36
    };
function d(e) {
    let {
        className: t,
        tooltip: n,
        color: i,
        size: u = c.SIZE_32,
        icon: d,
        onClick: _,
        disabled: E,
        focusProps: f
    } = e;
    return (0, r.jsx)(s.u, {
        text: n,
        shouldShow: !E,
        children: e => {
            let {
                onClick: s,
                ...c
            } = e;
            return (0, r.jsx)(o.P, {
                ...c,
                'aria-label': n,
                'aria-disabled': E,
                className: a()(t, l.button, i, u, { [l.disabled]: E }),
                onClick: e => {
                    null == s || s(), _(e);
                },
                focusProps: f,
                children: d
            });
        }
    });
}
