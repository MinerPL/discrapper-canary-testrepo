var r,
	i = n(442837),
	a = n(570140),
	s = n(626135),
	o = n(761274),
	l = n(981631);
function u(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let c = { permissionStates: {} };
class d extends (r = i.ZP.DeviceSettingsStore) {
	initialize(e) {
		c = null != e ? e : c;
	}
	getUserAgnosticState() {
		return c;
	}
	hasPermission(e) {
		let t = c.permissionStates[e];
		return null != t && t === o.PQ.ACCEPTED;
	}
	handleSetNativePermission(e) {
		let { state: t, permissionType: n } = e,
			r = c.permissionStates,
			i = r[n];
		(r[n] = t),
			i !== t &&
				s.default.track(l.rMx.PERMISSIONS_ACKED, {
					type: n,
					action: t,
					previous_action: null != i ? i : o.PQ.NONE
				});
	}
	constructor() {
		super(a.Z, { SET_NATIVE_PERMISSION: (e) => this.handleSetNativePermission(e) });
	}
}
u(d, 'displayName', 'NativePermissionStore'), u(d, 'persistKey', 'NativePermissionsStore'), (t.Z = d);
