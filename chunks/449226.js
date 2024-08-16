t.d(n, {
    Z: function () {
        return l;
    }
});
var a = t(735250);
t(470079);
var r = t(120356),
    i = t.n(r),
    s = t(481060),
    o = t(70529);
function l(e) {
    let { checked: n, onChange: t, disabled: r, className: l, tooltipProps: c } = e,
        d = (e) => {
            e.stopPropagation(), e.preventDefault();
        };
    return (0, a.jsx)(s.Clickable, {
        onClick: d,
        onMouseDown: d,
        onMouseUp: d,
        className: i()(o.switch, l),
        ...c,
        children: (0, a.jsx)(s.Switch, {
            checked: n,
            onChange: t,
            disabled: r
        })
    });
}
