n(47120);
var i = n(735250);
n(470079);
var a = n(392711),
	s = n.n(a),
	r = n(481060),
	l = n(463395),
	o = n(820486),
	c = n(131951),
	d = n(65154);
let u = new Set(['DisplayPort']),
	_ = !1;
function E() {
	let e;
	if (_) return;
	let t = c.Z.getInputDeviceId(),
		a = c.Z.getOutputDeviceId();
	if (o.Z.getState().neverShowModal || s().isEmpty(o.Z.lastDeviceConnected)) return;
	let E = (0, o.X)(c.Z.getInputDevices()[t]),
		h = (0, o.X)(c.Z.getOutputDevices()[a]);
	if (s().some(o.Z.lastDeviceConnected, (e) => u.has(e.displayName) || e.displayName === E || e.displayName === h))
		return;
	let m = s().some(
		o.Z.lastDeviceConnected,
		(e) => l.Z.isCertified(o.Z.inputDevices[e.displayName]) || l.Z.isCertified(o.Z.outputDevices[e.displayName])
	);
	if (
		((t === d.w5 && o.Z.lastInputSystemDevice.justChanged) || (a === d.w5 && o.Z.lastOutputSystemDevice.justChanged)) &&
		!m
	)
		return;
	let I = s().first(Object.keys(o.Z.lastDeviceConnected)),
		g = null != I && '' !== I ? o.Z.lastDeviceConnected[I] : null;
	null != g &&
		(o.Z.initialized &&
			null != I &&
			(l.Z.isCertified(o.Z.inputDevices[I])
				? (e = l.Z.getCertifiedDevice(o.Z.inputDevices[I]))
				: l.Z.isCertified(o.Z.outputDevices[I]) && (e = l.Z.getCertifiedDevice(o.Z.outputDevices[I]))),
		(_ = !0),
		(0, r.openModalLazy)(async () => {
			let { default: t } = await n.e('83536').then(n.bind(n, 43991));
			return (n) => {
				let { transitionState: a, onClose: s } = n;
				return (0, i.jsx)(t, {
					device: g,
					certifiedDeviceMetadata: e,
					transitionState: a,
					onClose: () => ((_ = !1), s())
				});
			};
		}));
}
t.Z = {
	init() {
		o.Z.addChangeListener(E);
	}
};
