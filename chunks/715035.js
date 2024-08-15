var i,
	a = n(442837),
	s = n(570140);
function r(e, t, n) {
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
let l = {};
class o extends (i = a.ZP.DeviceSettingsStore) {
	initialize(e) {
		l = null != e ? e : {};
	}
	filterNSFW() {
		return !0 !== l.showNSFW;
	}
	negativeContentOnly() {
		return !0 === l.negativeContentOnly;
	}
	getState() {
		return l;
	}
	getUserAgnosticState() {
		return l;
	}
}
r(o, 'displayName', 'GravityFiltersStore'),
	r(o, 'persistKey', 'GravityFiltersStore'),
	(t.Z = new o(s.Z, {
		SET_GRAVITY_FILTERS: function (e) {
			l = e.filters;
		}
	}));
