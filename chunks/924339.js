e.r(t), e(411104);
var n = e(735250);
e(470079);
var o = e(512722),
	a = e.n(o),
	l = e(593473),
	i = e(186231),
	u = e(159277),
	c = e(478677),
	d = e(457330),
	s = e(702493),
	A = e(77987),
	h = e(275759),
	I = e(710845),
	T = e(807675),
	_ = e(69580),
	p = e(787025),
	v = e(591759),
	w = e(981631);
let f = new I.Z('LinkAuthorize');
async function L(r, t, e, n) {
	var o, l, i, u, s;
	let A = null;
	try {
		let { body: r } = await d.Z.authorize(n, { twoWayLinkType: c.g.WEB });
		A = r.url;
	} catch (r) {
		throw Error(
			'error at authorize with code '.concat(
				null !== (l = null == r ? void 0 : null === (o = r.body) || void 0 === o ? void 0 : o.code) && void 0 !== l
					? l
					: 0
			)
		);
	}
	let I = null;
	try {
		a()(null != A, 'No URL in authorize response');
		let { state: r } = (0, h.xp)(A);
		a()(null != r, 'Authorize URL state query parameter must be present'), (I = r);
	} catch (r) {
		throw Error('error at authorize parsing callback params');
	}
	try {
		let o = await d.Z.completeTwoWayLink(n, r, t, I, e);
		return null == o ? void 0 : null === (i = o.body) || void 0 === i ? void 0 : i.redirect;
	} catch (r) {
		throw Error(
			'error at callback with code '.concat(
				null !== (s = null == r ? void 0 : null === (u = r.body) || void 0 === u ? void 0 : u.code) && void 0 !== s
					? s
					: 0
			)
		);
	}
}
function P(r) {
	let { platformType: t } = r;
	(0, s.Z)();
	let e = (0, T.y)(window.location.search),
		{ code: o, token_redirect_uri: a } = l.parse(window.location.search),
		u = async (r) => {
			let { location: e } = r;
			if (null == e) return;
			let { error: n } = l.parse(e),
				u = null;
			if (null == n && null != o)
				try {
					u = await L(e, o, a, t);
				} catch (t) {
					var c;
					f.error('Error Creating Discord link', null == t ? void 0 : t.message);
					let r = v.Z.toURLSafe(e);
					if (null == r) return;
					r.searchParams.delete('code'),
						r.searchParams.set('error', 'two_way_link_error'),
						r.searchParams.set(
							'error_description',
							null !== (c = null == t ? void 0 : t.message) && void 0 !== c ? c : 'unknown_error'
						),
						(e = r.toString());
				}
			window.location = null == u || u === i.b.OAUTH_REDIRECT ? e : u;
		};
	return (0, n.jsx)(p.G, {
		children: (0, n.jsx)(_.OAuth2Authorize, {
			...e,
			showLogout: !0,
			callback: u
		})
	});
}
t.default = (0, A.e)(function (r) {
	let { match: t } = r,
		e = t.params.type,
		{ client_id: o = '' } = l.parse(window.location.search),
		a = e === w.ABu.PLAYSTATION && o === u.t.PLAYSTATION_APPLICATION_ID,
		i = e === w.ABu.PLAYSTATION_STAGING && o === u.t.PLAYSTATION_STAGING_APPLICATION_ID;
	return a || i ? (0, n.jsx)(P, { platformType: e }) : null;
});
