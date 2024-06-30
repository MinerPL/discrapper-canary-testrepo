n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), l = n(481060), s = n(846027), r = n(131951), o = n(36703), c = n(358085), u = n(689938);
function d() {
    let e = (0, a.e7)([r.Z], () => (0, o.P)(r.Z.getOutputVolume()));
    return (0, i.jsx)(l.MenuControlItem, {
        id: 'output',
        label: u.Z.Messages.FORM_LABEL_OUTPUT_VOLUME,
        control: (t, n) => (0, i.jsx)(l.MenuSliderControl, {
            ...t,
            ref: n,
            value: e,
            maxValue: c.isPlatformEmbedded ? 200 : 100,
            onChange: e => s.Z.setOutputVolume((0, o.A)(e)),
            'aria-label': u.Z.Messages.FORM_LABEL_OUTPUT_VOLUME
        })
    });
}
