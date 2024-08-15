var r,
	i,
	a,
	s,
	o = n(442837),
	l = n(570140),
	u = n(827498);
let c = {
	show: !1,
	entrypoint: u._b.NONE,
	lastShownEntrypoint: u._b.NONE,
	activeViewType: null,
	closeReason: u.ti.DISMISSED
};
function d(e) {
	let { closeReason: t = u.ti.DISMISSED } = e;
	return (c.show = !1), (c.entrypoint = u._b.NONE), (c.closeReason = t), !0;
}
class _ extends (s = o.ZP.Store) {
	initialize() {}
	shouldShowPopup() {
		return c.show && c.entrypoint === u._b.TEXT;
	}
	shouldShowModal() {
		return c.show && c.entrypoint === u._b.VOICE;
	}
	entrypoint() {
		return c.entrypoint;
	}
	lastShownEntrypoint() {
		return c.lastShownEntrypoint;
	}
	activeViewType() {
		return c.activeViewType;
	}
	closeReason() {
		return c.closeReason;
	}
}
function E() {
	d({ closeReason: u.ti.DISMISSED });
}
function f() {
	d({ closeReason: u.ti.COMMAND });
}
(a = 'AppLauncherStore'),
	(i = 'displayName') in (r = _)
		? Object.defineProperty(r, i, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (r[i] = a),
	(t.Z = new _(l.Z, {
		APP_LAUNCHER_SHOW: function (e) {
			let { entrypoint: t, activeViewType: n } = e;
			return (
				(c.show = !0),
				(c.entrypoint = t),
				(c.lastShownEntrypoint = t),
				(c.closeReason = u.ti.DISMISSED),
				(c.activeViewType = n),
				!0
			);
		},
		APP_LAUNCHER_DISMISS: d,
		CONNECTION_OPEN: E,
		LOGOUT: E,
		CHANNEL_SELECT: E,
		APPLICATION_COMMAND_SET_ACTIVE_COMMAND: f,
		APP_LAUNCHER_SET_ACTIVE_COMMAND: f
	}));
