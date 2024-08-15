n.d(t, {
	CP: function () {
		return l;
	},
	Je: function () {
		return f;
	},
	KJ: function () {
		return _;
	},
	OT: function () {
		return u;
	},
	Tu: function () {
		return o;
	},
	d0: function () {
		return d;
	},
	lK: function () {
		return E;
	},
	xI: function () {
		return c;
	}
}),
	n(47120),
	n(724458);
var r = n(695346),
	i = n(594174),
	a = n(55563),
	s = n(981631);
function o(e, t) {
	return ''.concat(e, ':').concat(t);
}
function l(e) {
	let [t, n] = e.split(':');
	return {
		applicationId: t,
		branchId: n
	};
}
function u(e, t) {
	if (!r.G6.getSetting() || r.co.getSetting() === s.Skl.INVISIBLE) return !1;
	let n = t.getActiveLibraryApplication(e);
	return null == n || !n.hasFlag(s.eHb.PRIVATE);
}
function c(e, t) {
	return 0 === t ? 100 : (e / t) * 100;
}
function d(e, t, n) {
	return !(null == t || (n.enabled && t.hasFlag(s.eHb.PRIVATE))) && !t.isHidden();
}
function _(e) {
	return null == e ? null : e.type === s.vxO.INSTALLING || e.type === s.vxO.UPDATING || e.type === s.vxO.UNINSTALLING ? e : null;
}
function E(e) {
	return e.reduce(
		(e, t) => {
			let n = _(t);
			return null == n || t.type === s.vxO.UP_TO_DATE
				? e
				: {
						total: e.total + Number(n.total),
						progress: e.progress + Number(n.progress)
					};
		},
		{
			total: 0,
			progress: 0
		}
	);
}
function f(e) {
	return !!e.isDiscordApplication() && e.isEntitled(i.default.getCurrentUser(), a.Z);
}
