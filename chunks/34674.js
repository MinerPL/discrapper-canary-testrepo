n.d(t, {
	$_: function () {
		return m;
	},
	KQ: function () {
		return f;
	},
	MU: function () {
		return d;
	},
	m0: function () {
		return _;
	},
	rf: function () {
		return C;
	},
	tu: function () {
		return g;
	}
}),
	n(610138),
	n(216116),
	n(78328),
	n(815648),
	n(47120),
	n(315314);
var i = n(860911),
	l = n(477690),
	r = n(481060),
	a = n(134432),
	s = n(703656),
	o = n(768581),
	c = n(981631),
	u = n(689938);
let d = 0,
	{ API_ENDPOINT: h, CDN_HOST: p } = window.GLOBAL_ENV;
function _(e) {
	return e.id === d;
}
function f() {
	return {
		id: d,
		name: u.Z.Messages.APP_DIRECTORY_ALL_CATEGORY
	};
}
function g(e) {
	switch (e.id) {
		case 0:
			return r.GlobeEarthIcon;
		case 4:
			return r.TvIcon;
		case 5:
			return r.AnalyticsIcon;
		case 6:
			return r.GameControllerIcon;
		case 8:
			break;
		case 9:
			return r.FriendsIcon;
		case 10:
			return r.WrenchIcon;
	}
	return r.AsteriskIcon;
}
function m(e) {
	let { itemId: t, hash: n } = e,
		i = new URLSearchParams({ size: (0, a.oO)(parseFloat(l.Z.APPLICATION_DIRECTORY_CONTENT_MAX_WIDTH) * (0, a.x_)()).toString() }).toString(),
		r = o.$k ? 'webp' : 'png';
	return null != p
		? ''.concat(location.protocol, '//').concat(p, '/app-assets/application-directory/collection-items/').concat(t, '/').concat(n, '.').concat(r, '?').concat(i)
		: ''
				.concat(location.protocol)
				.concat(h)
				.concat(c.ANM.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, r), '?')
				.concat(i);
}
function C() {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
		t = new URL(location.href);
	for (let n in e) {
		let i = e[n];
		t.searchParams.set(n, i);
	}
	let n = t.pathname + t.search,
		l = (0, i.U)(n, !1);
	(0, s.uL)(l);
}
