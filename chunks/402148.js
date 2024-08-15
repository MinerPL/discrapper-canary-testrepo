n.d(t, {
	F: function () {
		return r;
	},
	i: function () {
		return l;
	}
}),
	n(653041),
	n(47120);
var s = n(149765),
	a = n(233608),
	i = n(981631);
function r(e) {
	return s.Db(e.permissions, i.TC2);
}
function l(e, t) {
	let n = [],
		r = a.Z.getGuildPermissionSpecMap(e);
	for (let e of i.yYS) s.e$(t.permissions, e) && n.push(r[e.toString()].title);
	return n;
}
