r.d(t, {
	Mq: function () {
		return E;
	},
	Q3: function () {
		return _;
	},
	uE: function () {
		return s;
	}
});
var n = r(617726),
	a = r(967752),
	o = r(305625),
	i = r(696486);
function _(e, t, r, o) {
	let i = (0, n.HY)(r),
		_ = {
			sent_at: new Date().toISOString(),
			...(i && { sdk: i }),
			...(!!o && t && { dsn: (0, a.RA)(t) })
		},
		E = 'aggregates' in e ? [{ type: 'sessions' }, e] : [{ type: 'session' }, e.toJSON()];
	return (0, n.Jd)(_, [E]);
}
function E(e, t, r, a) {
	var o, i;
	let _ = (0, n.HY)(r),
		E = e.type && 'replay_event' !== e.type ? e.type : 'event';
	(o = e),
		!(i = r && r.sdk) ||
			((o.sdk = o.sdk || {}),
			(o.sdk.name = o.sdk.name || i.name),
			(o.sdk.version = o.sdk.version || i.version),
			(o.sdk.integrations = [...(o.sdk.integrations || []), ...(i.integrations || [])]),
			(o.sdk.packages = [...(o.sdk.packages || []), ...(i.packages || [])]));
	let s = (0, n.Cd)(e, _, a, t);
	delete e.sdkProcessingMetadata;
	let c = [{ type: E }, e];
	return (0, n.Jd)(s, [c]);
}
function s(e, t) {
	var r;
	let _ = (0, o.jC)(e[0]),
		E = t && t.getDsn(),
		s = t && t.getOptions().tunnel;
	let c = {
			sent_at: new Date().toISOString(),
			...(!!(r = _).trace_id && !!r.public_key && { trace: _ }),
			...(!!s && E && { dsn: (0, a.RA)(E) })
		},
		I = t && t.getOptions().beforeSendSpan,
		u = I ? (e) => I((0, i.XU)(e)) : (e) => (0, i.XU)(e),
		l = [];
	for (let t of e) {
		let e = u(t);
		e && l.push((0, n.KQ)(e));
	}
	return (0, n.Jd)(c, l);
}
