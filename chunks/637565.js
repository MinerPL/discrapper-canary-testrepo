n.d(t, {
	T: function () {
		return d;
	}
}),
	n(47120);
var l = n(149765),
	r = n(973542),
	i = n(790285),
	u = n(981631);
function d(e, t, n) {
	let d = new Set();
	for (let e of Object.keys(n.permissionOverwrites)) {
		let l = t[e],
			u = n.permissionOverwrites[e];
		(0, r.Z)(l) && (0, i.TG)(n, u) && d.add(l);
	}
	let s = t[e.getEveryoneRoleId()],
		a = null != s && !l.e$(s.permissions, u.Plq.VIEW_CHANNEL),
		E = (0, i.wB)(n, n.permissionOverwrites[e.id]);
	if (a && !E) for (let e of Object.values(t)) (0, r.Z)(e) && (0, i.MT)(e) && d.add(e);
	return [...d];
}
