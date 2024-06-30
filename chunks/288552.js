n.d(t, {
    a: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(135172);
let l = e => {
    let {
        text: t,
        icon: n,
        onClick: l
    } = e;
    return (0, i.jsxs)(a.Button, {
        className: s.button,
        innerClassName: s.buttonInner,
        onClick: l,
        children: [
            (0, i.jsx)(n, { color: 'currentColor' }),
            (0, i.jsx)(a.Text, {
                variant: 'text-md/semibold',
                color: 'none',
                children: t
            })
        ]
    });
};
