n.d(t, {
	EJ: function () {
		return p;
	},
	XV: function () {
		return f;
	},
	Z4: function () {
		return I;
	},
	Zp: function () {
		return m;
	},
	f6: function () {
		return T;
	},
	ky: function () {
		return S;
	},
	p0: function () {
		return N;
	},
	pY: function () {
		return A;
	},
	vh: function () {
		return h;
	}
});
var r = n(108131),
	i = n.n(r),
	a = n(442837),
	s = n(607070),
	o = n(715903),
	l = n(271383),
	u = n(594174);
n(963202);
var c = n(954138),
	d = n(308083),
	_ = n(981631),
	E = n(689938);
function f(e, t) {
	let n = Array.from(e);
	return (
		n.sort((e, n) => {
			let r = i().v3(''.concat(e).concat(t));
			return r - i().v3(''.concat(n).concat(t));
		}),
		n
	);
}
function h(e) {
	return null != e && e.identityEnabled
		? {
				guildId: e.identityGuildId,
				tag: e.tag,
				badge: e.badge
			}
		: {};
}
function p(e) {
	return null != e && e.hasFeature(_.oNc.CLAN);
}
function m(e, t) {
	var n, r;
	return null != t && t.identityGuildId === (null == e ? void 0 : e.id) && (((null == e ? void 0 : null === (n = e.clan) || void 0 === n ? void 0 : n.tag) != null && (null == e ? void 0 : null === (r = e.clan) || void 0 === r ? void 0 : r.tag) !== t.tag) || null == t.identityEnabled);
}
function I(e, t) {
	return (null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled) || !1;
}
let T = (e, t) => {
		if (0 === e.length) return null;
		if (1 === e.length) return e[1];
		if (2 === e.length)
			return E.Z.Messages.CLAN_OVERVIEW_LIST_TWO_ITEMS.format({
				item1: e[0],
				item2: e[1]
			});
		if (null != t && e.length > t) {
			let n = e.slice(0, t).join(', '),
				r = E.Z.Messages.CLAN_OVERVIEW_LIST_OTHERS_COUNT.format({ n: e.length - t });
			return E.Z.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
				items: n,
				last: r
			});
		}
		{
			let t = e.slice(0, -1).join(', '),
				n = e[e.length - 1];
			return E.Z.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
				items: t,
				last: n
			});
		}
	},
	g = {
		[d.NC.SIZE_12]: 16,
		[d.NC.SIZE_16]: 16,
		[d.NC.SIZE_24]: 24,
		[d.NC.SIZE_32]: 32,
		[d.NC.SIZE_36]: 40
	};
function S(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.NC.SIZE_12;
	if (null == t) return;
	let { CDN_HOST: r } = window.GLOBAL_ENV;
	if (null == r) return;
	let i = g[n];
	return ''.concat(location.protocol, '//').concat(r, '/clan-badges/').concat(e, '/').concat(t, '.png?size=').concat(i);
}
function A(e, t) {
	if (null == t) return;
	let { CDN_HOST: n } = window.GLOBAL_ENV;
	if (null != n) return ''.concat(location.protocol, '//').concat(n, '/clan-banners/').concat(e, '/').concat(t, '.png?size=512');
}
function N(e, t) {
	let n = (0, a.e7)([s.Z], () => s.Z.hideTags),
		r = (0, a.e7)([u.default], () => u.default.getUser(e), [e]),
		i = (0, a.e7)(
			[l.ZP],
			() => {
				if (null == t || null == e) return null;
				let n = l.ZP.getMember(t, e);
				return (0, o.EY)(n);
			},
			[t, e]
		),
		{ tag: d, guildId: _ } = h(null == r ? void 0 : r.clan),
		E = (0, c.Z)('clan_tag_chiplet');
	return !n && !!E && null != _ && null != d && !i && !0;
}
d.NC.SIZE_12, d.NC.SIZE_16, d.NC.SIZE_24, d.NC.SIZE_32, d.NC.SIZE_36;
