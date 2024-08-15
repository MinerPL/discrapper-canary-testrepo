n(47120);
var i = n(470079),
	a = n(115434),
	s = n(442837),
	r = n(704215),
	l = n(243778),
	o = n(594174),
	c = n(51144),
	d = n(874703),
	u = n(105622),
	_ = n(599960),
	E = n(683167),
	h = n(302800),
	m = n(921944);
let I = 'useCollectiblesShopTabNewBadge';
t.Z = () => {
	let e = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
		t = (0, E.I)(I),
		n = (0, s.e7)([d.Z], () => d.Z.getMarketingBySurface(a.K.DESKTOP_SHOP_BUTTON)),
		g = (0, u.J)(I),
		p = i.useMemo(() => {
			if (!(0, c.Fc)(e)) return [];
			if (g) return null != n ? [n.dismissibleContent] : [];
			switch (t) {
				case h.LM.TIDE:
					return [r.z.COLLECTIBLES_SHOP_TIDE_COACHTIP];
				case h.LM.DARK_FANTASY:
					return [r.z.COLLECTIBLES_SHOP_DARK_FANTASY_MARKETING];
				case h.LM.ROBERT:
					return [r.z.COLLECTIBLES_SHOP_ROBERT_MARKETING];
				case h.LM.STORM:
					return [r.z.COLLECTIBLES_SHOP_STORM_MARKETING];
				default:
					return [];
			}
		}, [e, g, n, t]),
		[T, S] = (0, l.US)(p, void 0, !0),
		f = (0, _.E)(I),
		C = null;
	if (null != T) {
		if (g) {
			if (null != n) {
				var N, A, v, Z, L, O;
				C = {
					type: h.k2.COACHTIP,
					title: () => n.title,
					body: () => n.body,
					imageSrc: n.avatar,
					assetIds: n.decorations,
					entrypointBackgroundStyle: null === (N = n.refTargetBackground) || void 0 === N ? void 0 : N.style
				};
				let e = null === (A = n.refTargetBackground) || void 0 === A ? void 0 : A.asset;
				null != e &&
					(C.entryPointBackgroundAssets = {
						srcDark: null === (v = e.resting) || void 0 === v ? void 0 : v.dark,
						srcLight: null === (Z = e.resting) || void 0 === Z ? void 0 : Z.light,
						srcDarkHovered: null === (L = e.hovered) || void 0 === L ? void 0 : L.dark,
						srcLightHovered: null === (O = e.hovered) || void 0 === O ? void 0 : O.light
					});
			}
		} else f === h.k2.COACHTIP ? (C = h.fY[T]) : f === h.k2.COACHTIP_HEADLINE_ONLY ? (C = h.zM[T]) : f === h.k2.BADGE && (C = { type: h.k2.BADGE });
	}
	return {
		collectiblesShopTabNewBadgeDisplayOptions: C,
		dismissCollectiblesShopTabNewBadge: () => {
			null != C && S(m.L.AUTO);
		}
	};
};
