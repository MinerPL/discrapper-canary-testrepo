t.r(e),
	t.d(e, {
		ItemDetailsModal: function () {
			return _;
		}
	});
var i = t(735250);
t(470079);
var l = t(752843),
	r = t(442837),
	o = t(481060),
	s = t(55563),
	a = t(551428),
	c = t(73346),
	d = t(591759),
	u = t(110742),
	S = t(886253),
	m = t(680005),
	I = t(938337),
	x = t(981631),
	f = t(689938);
function _(n) {
	var e, t, _, p;
	let { onClose: h, transitionState: T, skuId: v, appId: E, onHeaderTitleClick: N } = n,
		g = (0, r.e7)([a.Z], () => a.Z.getForSKU(v), [v]),
		L = (0, r.e7)([s.Z], () => s.Z.get(v), [v]),
		R = (0, u.M)(v);
	if (null == L) return null;
	let j = null !== (t = L.name) && void 0 !== t ? t : '',
		C =
			null !== (_ = null == g ? void 0 : null === (e = g.description) || void 0 === e ? void 0 : e.trim()) &&
			void 0 !== _
				? _
				: void 0,
		O =
			(null == g ? void 0 : g.headerBackground) != null &&
			null !== (p = d.Z.toURLSafe((0, c._W)(E, g.headerBackground, 256))) &&
			void 0 !== p
				? p
				: void 0,
		Z = L.type === x.epS.DURABLE && R,
		A =
			L.type === x.epS.DURABLE
				? Z
					? f.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
					: f.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
				: void 0,
		{ price: M } = L;
	return null == M
		? null
		: (0, i.jsx)(S.A, {
				appId: E,
				skuId: L.id,
				transitionState: T,
				onHeaderTitleClick: null != N ? N : h,
				onClose: h,
				footer: (0, i.jsx)(m.Y, {
					appId: E,
					sku: L
				}),
				children: (0, i.jsx)(I.i, {
					appId: E,
					skuId: L.id,
					title: j,
					description: C,
					imgSrc: O,
					tag: null != A ? (0, i.jsx)(l.V, { text: A }) : void 0,
					FallbackIcon: o.TicketIcon
				})
			});
}
