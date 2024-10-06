t.d(s, {
    Z: function () {
        return I;
    }
});
var n = t(735250);
t(470079);
var a = t(442837),
    i = t(481060),
    r = t(846027),
    o = t(906732),
    l = t(600164),
    c = t(313201),
    d = t(131951),
    _ = t(36703),
    u = t(689938),
    E = t(113207);
let T = (0, c.hQ)(),
    S = (0, c.hQ)();
function I() {
    let { analyticsLocations: e } = (0, o.ZP)(),
        { inputVolume: s, outputVolume: t } = (0, a.cj)([d.Z], () => ({
            inputVolume: d.Z.getInputVolume(),
            outputVolume: d.Z.getOutputVolume()
        }));
    return (0, n.jsxs)(l.Z, {
        className: 'volume',
        children: [
            (0, n.jsxs)(l.Z.Child, {
                basis: '50%',
                children: [
                    (0, n.jsx)(i.FormTitle, {
                        id: T,
                        tag: i.FormTitleTags.H5,
                        className: E.marginBottom4,
                        children: u.Z.Messages.FORM_LABEL_INPUT_VOLUME
                    }),
                    (0, n.jsx)(i.Slider, {
                        initialValue: (0, _.P)(s),
                        asValueChanges: (s) => r.Z.setInputVolume((0, _.A)(s), { analyticsLocations: e }),
                        'aria-labelledby': T
                    })
                ]
            }),
            (0, n.jsxs)(l.Z.Child, {
                basis: '50%',
                children: [
                    (0, n.jsx)(i.FormTitle, {
                        id: S,
                        tag: i.FormTitleTags.H5,
                        className: E.marginBottom4,
                        children: u.Z.Messages.FORM_LABEL_OUTPUT_VOLUME
                    }),
                    (0, n.jsx)(i.Slider, {
                        initialValue: (0, _.P)(t),
                        maxValue: 200,
                        onValueRender: (e) => ''.concat(e.toFixed(0), '%'),
                        asValueChanges: (s) => r.Z.setOutputVolume((0, _.A)(s), { analyticsLocations: e }),
                        'aria-labelledby': S
                    })
                ]
            })
        ]
    });
}
