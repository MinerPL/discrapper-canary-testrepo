n.d(t, {
    a: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(634125);
function l(e) {
    let {
        children: t,
        onClick: n,
        className: i,
        tooltip: l
    } = e;
    return (0, r.jsx)(o.Tooltip, {
        text: l,
        children: e => {
            let {
                onClick: l,
                ...u
            } = e;
            return (0, r.jsx)(o.Button, {
                ...u,
                onClick: e => {
                    null == n || n(e), null == l || l();
                },
                innerClassName: s.buttonReset,
                color: a()(s.cta, i),
                size: o.Button.Sizes.MIN,
                children: t
            });
        }
    });
}
