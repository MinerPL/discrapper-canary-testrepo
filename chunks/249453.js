e.d(n, {
    Z: function () {
        return u;
    }
});
var i = e(200651);
e(192379);
var o = e(481060),
    r = e(765250),
    a = e(388032);
function u(t) {
    return (0, i.jsx)(o.MenuControlItem, {
        id: 'opacity',
        'aria-haspopup': !0,
        label: a.intl.string(a.t.OVovCQ),
        control: (n, e) =>
            (0, i.jsx)(o.MenuSliderControl, {
                ...n,
                ref: e,
                value: 100 * t.opacity,
                maxValue: 100,
                onChange: (n) =>
                    (0, r.nv)({
                        widgetId: t.id,
                        opacity: n / 100
                    }),
                'aria-label': a.intl.string(a.t.kbFsAA)
            })
    });
}
