t.d(n, {
    Z: function () {
        return m;
    },
    z: function () {
        return s;
    }
});
var l, s, a = t(735250);
t(470079);
var i = t(120356), r = t.n(i), o = t(481060), u = t(873773);
(l = s || (s = {})).INFO = 'info', l.WARNING = 'warning';
let c = {
        info: u.info,
        warning: u.warning
    }, d = {
        info: o.CircleInformationIcon,
        warning: o.CircleExclamationPointIcon
    };
function m(e) {
    let {
            children: n,
            className: t,
            look: l = 'info'
        } = e, s = d[l];
    return (0, a.jsxs)('div', {
        className: r()(u.root, t, c[l]),
        children: [
            (0, a.jsx)(s, { className: u.icon }),
            (0, a.jsx)(o.Text, {
                className: u.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: n
            })
        ]
    });
}
