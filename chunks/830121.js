n.d(t, {
	FO: function () {
		return Z;
	},
	Sq: function () {
		return B;
	},
	ZP: function () {
		return V;
	},
	el: function () {
		return H;
	},
	oO: function () {
		return C;
	},
	zO: function () {
		return Y;
	}
}),
	n(757143),
	n(47120),
	n(653041);
var r,
	i,
	a,
	s,
	o,
	l,
	u = n(729594),
	c = n(421474);
n(865427);
var d = n(264229);
n(413605);
var _ = n(701190),
	E = n(226951),
	f = n(591759),
	h = n(960904),
	p = n(981631);
let m = /^\/([a-zA-Z0-9-]+)$/,
	I = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
	T = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
	g = RegExp('^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?'),
	S = /^\/application-directory\/([0-9-]+)\/?$/,
	A = /^\/application-directory\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
	N = /^\/activities\/([0-9-]+)\/?$/,
	v = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
	O = /^\/channels\/([0-9]+)\/shop$/,
	R = /^\/quests\/([0-9-]+)\/?$/,
	C = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
	y = G(window.GLOBAL_ENV.INVITE_HOST),
	D = G(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
	L = G(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : '//canary.'.concat(p.$R1)),
	b = G('//canary.'.concat(p.$R1)),
	M = G('//ptb.'.concat(p.$R1)),
	P = G('discordapp.com'),
	U = G('discord.com'),
	w = [E.Z.escape(null !== (i = y.host) && void 0 !== i ? i : ''), E.Z.escape(null !== (a = D.host) && void 0 !== a ? a : ''), E.Z.escape(null !== (s = L.host) && void 0 !== s ? s : ''), E.Z.escape(null !== (o = P.host) && void 0 !== o ? o : ''), E.Z.escape(null !== (l = U.host) && void 0 !== l ? l : '')].filter(Boolean),
	x = RegExp('((https?://[^ ]*)|^|[^/][^/.])('.concat(w.join('|'), ')'), 'g');
function G(e) {
	if (null == e)
		return {
			host: null,
			pathPrefix: null
		};
	if (e.indexOf('/') >= 0) {
		let t = (0, u.parse)(e, void 0, !0);
		return {
			host: t.host,
			pathPrefix: t.pathname
		};
	}
	return {
		host: e,
		pathPrefix: null
	};
}
function k(e, t) {
	var n, r, i;
	if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, '')) !== e.host) return null;
	let a = null !== (r = t.pathname) && void 0 !== r ? r : '',
		s = null !== (i = e.pathPrefix) && void 0 !== i ? i : '';
	if (!a.startsWith(s)) return null;
	let o = a.substring(s.length);
	return '' === o ? null : o;
}
function B(e) {
	var t, n, r, i;
	return null !== (i = null !== (r = null !== (n = null !== (t = k(L, e)) && void 0 !== t ? t : k(b, e)) && void 0 !== n ? n : k(M, e)) && void 0 !== r ? r : k(P, e)) && void 0 !== i ? i : k(U, e);
}
function F(e) {
	var t, n, r, i;
	let a = Z(e);
	if (null == a || null == a.pathname)
		return {
			url: null,
			inviteHostRemainingPath: null,
			templateHostRemainingPath: null,
			primaryHostRemainingPath: null
		};
	let s = k(y, a),
		o = k(D, a),
		l = null !== (i = null !== (r = null !== (n = null !== (t = k(L, a)) && void 0 !== t ? t : k(b, a)) && void 0 !== n ? n : k(M, a)) && void 0 !== r ? r : k(P, a)) && void 0 !== i ? i : k(U, a);
	return {
		url: a,
		inviteHostRemainingPath: s,
		templateHostRemainingPath: o,
		primaryHostRemainingPath: l
	};
}
function V(e) {
	if (null == e) return [];
	let t = new Set(),
		n = [],
		r = (e = e.replace(x, (e, t, n, r) => (null == n ? ''.concat(t, 'http://').concat(r) : e))).match(f.Z.URL_REGEX),
		i = e.match(C);
	if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
	for (let e of r) {
		if (n.length >= 10) break;
		let { url: r, inviteHostRemainingPath: i, templateHostRemainingPath: a, primaryHostRemainingPath: s } = F(e);
		if (null == r || null == r.pathname) continue;
		let o = (e, r) => {
			!t.has(r) &&
				(t.add(r),
				n.push({
					type: e,
					code: r
				}));
		};
		if ((null == i ? void 0 : i.match(m)) != null) {
			let e = (0, d.mb)(i.substring(1), r.search);
			_.Z.getInvite(e);
			o(h.g.INVITE, e);
		}
		(null == a ? void 0 : a.match(m)) != null && o(h.g.TEMPLATE, a.substring(1));
		let l = null == s ? void 0 : s.match(T);
		if (null != l) {
			let e = l[1].toUpperCase();
			if (e === h.g.INVITE) {
				let e = (0, d.mb)(l[2], r.search);
				o(h.g.INVITE, e);
			} else o(e, l[2]);
		}
		(null == s ? void 0 : s.match(I)) != null && o(h.g.CHANNEL_LINK, s.replace('/channels/', ''));
		let u = (function (e) {
			if (null == e) return null;
			let t = e.match(g);
			return null != t && t.length >= 4
				? {
						guildId: t[1],
						guildEventId: t[2],
						recurrenceId: t[4]
					}
				: null;
		})(r.pathname);
		null != u && o(h.g.EVENT, ''.concat(u.guildId, '-').concat(u.guildEventId) + (null != u.recurrenceId ? '-'.concat(u.recurrenceId) : ''));
		let E = null == s ? void 0 : s.match(S);
		if (null != E) {
			let e = E[1];
			o(h.g.APP_DIRECTORY_PROFILE, e);
		}
		let f = null == s ? void 0 : s.match(A);
		if (null != f) {
			let e = f[1],
				t = f[2];
			if (null != t) {
				let n = (0, c.l)(e, t);
				o(h.g.APP_DIRECTORY_STOREFRONT_SKU, n);
			} else o(h.g.APP_DIRECTORY_STOREFRONT, e);
		}
		let p = null == s ? void 0 : s.match(N);
		if (null != p) {
			let e = p[1];
			o(h.g.ACTIVITY_BOOKMARK, e);
		}
		let R = null == s ? void 0 : s.match(v);
		null != R && o(h.g.GUILD_PRODUCT, ''.concat(R[1], '-').concat(R[2]));
		let C = null == s ? void 0 : s.match(O);
		null != C && o(h.g.SERVER_SHOP, C[1]);
		let y = H(e);
		null != y && o(h.g.QUESTS_EMBED, y);
	}
	return n;
}
function H(e) {
	var t, n;
	let r = F(e),
		i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(R);
	return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null;
}
function Z(e) {
	try {
		return (0, u.parse)(e);
	} catch (e) {
		return null;
	}
}
function Y(e) {
	return V(e)[0];
}
