t.d(s, {
    Z: function () {
        return d;
    }
});
var n = t(735250);
t(470079);
var a = t(442837),
    i = t(481060),
    r = t(657254),
    o = t(716364),
    l = t(474873),
    c = t(871465);
function d(e) {
    let { className: s } = e,
        t = (0, a.e7)([l.Z], () => l.Z.getSoundpack()),
        { allowAprilFoolsSoundpack: d } = r.Z.useExperiment({ location: 'a96548_1' }, { autoTrackExposure: !1 });
    if (!d) return null;
    let _ = d ? (0, c.QI)() : [];
    return (0, n.jsx)(i.SingleSelect, {
        className: s,
        onChange: (e) => (0, o.c)(e),
        value: t,
        options: _
    });
}
