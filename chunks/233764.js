var r, i;
function a(e, t, n) {
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
n.d(t, {
	Z: function () {
		return s;
	}
}),
	((i = r || (r = {})).PRIMARY_APP_COMMAND_NOT_FOUND = 'PRIMARY_APP_COMMAND_NOT_FOUND'),
	(i.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED = 'LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED');
class s {
	constructor(e) {
		a(this, 'reason', void 0), (this.reason = e);
	}
}
a(s, 'Reasons', r);
