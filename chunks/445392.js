var i,
	a = t(442837),
	l = t(570140);
function o(e, n, t) {
	return (
		n in e
			? Object.defineProperty(e, n, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[n] = t),
		e
	);
}
let r = 10 * t(70956).Z.Millis.MINUTE,
	s = {
		lastUsedCommandId: null,
		lastUsedTimeMs: null
	};
class c extends (i = a.ZP.PersistedStore) {
	initialize(e) {
		null != e && ((s.lastUsedCommandId = e.lastUsedCommandId), (s.lastUsedTimeMs = e.lastUsedTimeMs));
	}
	getState() {
		return s;
	}
	getLastUsedCommandId() {
		let e = Date.now();
		return null == s.lastUsedTimeMs || null == s.lastUsedCommandId
			? null
			: (e > s.lastUsedTimeMs + r && ((s.lastUsedCommandId = null), (s.lastUsedTimeMs = null)), s.lastUsedCommandId);
	}
}
o(c, 'displayName', 'AppLauncherLastUsedCommandStore'),
	o(c, 'persistKey', 'AppLauncherLastUsedCommandStore'),
	new c(l.Z, {
		APPLICATION_COMMAND_USED: function (e) {
			let { command: n } = e;
			(s.lastUsedCommandId = n.id), (s.lastUsedTimeMs = Date.now());
		}
	});
