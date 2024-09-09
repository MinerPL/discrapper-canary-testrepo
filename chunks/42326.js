n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    l = n(481060),
    r = n(618158),
    o = n(837832);
function c(e) {
    let { errorMessage: t, className: n } = e;
    return (0, i.jsx)(l.TooltipContainer, {
        className: s()(n, o.root),
        text: t,
        position: 'bottom',
        color: l.TooltipColors.GREY,
        children: (0, i.jsx)(r.Z, {
            children: (0, i.jsx)(l.CircleWarningIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                'aria-label': null != t ? t : '',
                className: o.warningIcon
            })
        })
    });
}
