n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var a = n(392711),
    i = n.n(a),
    o = n(481060),
    s = n(481250),
    l = n(513547),
    c = n(689938);
function d(e) {
    let { camera: t } = e;
    if (null == t) return (0, r.jsx)(o.Spinner, { type: o.Spinner.Type.SPINNING_CIRCLE });
    let n = i().map(t, (e, t) => {
        if (!(l.al[t] || void 0 === e))
            return (0, r.jsx)(
                l.ck,
                {
                    label: t,
                    value: e
                },
                t
            );
    });
    return (0, r.jsx)(o.FormSection, {
        tag: o.FormTitleTags.H2,
        title: c.Z.Messages.RTC_DEBUG_CAMERA,
        children: (0, s.a)(n)
    });
}
