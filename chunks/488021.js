n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), l = n(481060), s = n(846027), r = n(131951);
function o() {
    let e = (0, a.e7)([r.Z], () => Object.values(r.Z.getOutputDevices())), t = (0, a.e7)([r.Z], () => r.Z.getOutputDeviceId());
    return e.map(e => {
        let {
            id: n,
            disabled: a,
            name: r
        } = e;
        return (0, i.jsx)(l.MenuRadioItem, {
            group: 'output-devices',
            id: 'output-'.concat(n),
            disabled: a,
            label: r,
            checked: n === t,
            action: () => s.Z.setOutputDevice(n)
        }, 'output-'.concat(n));
    });
}
