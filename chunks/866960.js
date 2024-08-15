var r,
	i,
	a,
	s,
	o = n(442837),
	l = n(570140),
	u = n(931619),
	c = n(981631);
let d = c.IWh.UNKNOWN,
	_ = c.IyS.UNKNOWN,
	E = null;
function f(e) {
	var t;
	(d = null != e.type ? e.type : c.IWh.UNKNOWN),
		(_ = null !== (t = e.effectiveSpeed) && void 0 !== t ? t : c.IyS.UNKNOWN),
		(E = e.serviceProvider),
		p.emitChange();
}
class h extends (s = o.ZP.Store) {
	initialize() {
		u.Z.getNetworkInformation().then(f), u.Z.addChangeCallback(f);
	}
	getType() {
		return d;
	}
	getEffectiveConnectionSpeed() {
		return _;
	}
	getServiceProvider() {
		return E;
	}
}
(a = 'NetworkStore'),
	(i = 'displayName') in (r = h)
		? Object.defineProperty(r, i, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (r[i] = a);
let p = new h(l.Z, {});
t.Z = p;
