n(47120);
var i = n(735250);
n(470079);
var s = n(392711), a = n.n(s), r = n(481060), l = n(463395), o = n(820486), c = n(131951), d = n(65154);
let u = new Set(['DisplayPort']), _ = !1;
function E() {
    let e;
    if (_)
        return;
    let t = c.Z.getInputDeviceId(), s = c.Z.getOutputDeviceId();
    if (o.Z.getState().neverShowModal || a().isEmpty(o.Z.lastDeviceConnected))
        return;
    let E = (0, o.X)(c.Z.getInputDevices()[t]), h = (0, o.X)(c.Z.getOutputDevices()[s]);
    if (a().some(o.Z.lastDeviceConnected, e => u.has(e.displayName) || e.displayName === E || e.displayName === h))
        return;
    let I = a().some(o.Z.lastDeviceConnected, e => l.Z.isCertified(o.Z.inputDevices[e.displayName]) || l.Z.isCertified(o.Z.outputDevices[e.displayName]));
    if ((t === d.w5 && o.Z.lastInputSystemDevice.justChanged || s === d.w5 && o.Z.lastOutputSystemDevice.justChanged) && !I)
        return;
    let m = a().first(Object.keys(o.Z.lastDeviceConnected)), p = null != m && '' !== m ? o.Z.lastDeviceConnected[m] : null;
    null != p && (o.Z.initialized && null != m && (l.Z.isCertified(o.Z.inputDevices[m]) ? e = l.Z.getCertifiedDevice(o.Z.inputDevices[m]) : l.Z.isCertified(o.Z.outputDevices[m]) && (e = l.Z.getCertifiedDevice(o.Z.outputDevices[m]))), _ = !0, (0, r.openModalLazy)(async () => {
        let {default: t} = await n.e('83536').then(n.bind(n, 43991));
        return n => {
            let {
                transitionState: s,
                onClose: a
            } = n;
            return (0, i.jsx)(t, {
                device: p,
                certifiedDeviceMetadata: e,
                transitionState: s,
                onClose: () => (_ = !1, a())
            });
        };
    }));
}
t.Z = {
    init() {
        o.Z.addChangeListener(E);
    }
};
