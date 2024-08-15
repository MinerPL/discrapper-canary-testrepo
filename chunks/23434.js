var i,
	a,
	s,
	r,
	l = n(442837),
	o = n(570140);
let c = null;
class u extends (r = l.ZP.Store) {
	hasAction() {
		return null != c;
	}
	getAction() {
		return c;
	}
}
function d(e) {
	c = e.requiredAction;
}
(s = 'UserRequiredActionStore'),
	(a = 'displayName') in (i = u)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new u(o.Z, {
		CONNECTION_OPEN: d,
		USER_REQUIRED_ACTION_UPDATE: d
	}));
