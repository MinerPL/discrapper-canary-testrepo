n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(846027),
    o = n(131951);
function l() {
    let e = (0, i.e7)([o.Z], () => Object.values(o.Z.getVideoDevices())),
        t = (0, i.e7)([o.Z], () => o.Z.getVideoDeviceId());
    return e.map((e) => {
        let { id: n, disabled: i, name: o } = e;
        return (0, r.jsx)(
            a.MenuRadioItem,
            {
                group: 'video-devices',
                id: 'video-device-'.concat(n),
                disabled: i,
                label: o,
                checked: n === t,
                action: () => s.Z.setVideoDevice(n)
            },
            'video-device-'.concat(n)
        );
    });
}
