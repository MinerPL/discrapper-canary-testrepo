n.r(t),
	n.d(t, {
		default: function () {
			return N;
		}
	}),
	n(47120);
var r = n(735250),
	s = n(470079),
	i = n(979554),
	l = n(442837),
	a = n(481060),
	o = n(100527),
	c = n(906732),
	d = n(335131),
	u = n(884697),
	f = n(449217),
	m = n(566111),
	E = n(197115),
	p = n(150039),
	_ = n(594174),
	h = n(626135),
	g = n(74538),
	I = n(934261),
	v = n(52268),
	C = n(981631),
	x = n(474936),
	P = n(689938),
	A = n(118610);
function Z(e) {
	let { user: t, product: n, purchase: i, onApply: l, onClose: c, disableApplyButton: f, canUseCollectibles: m, selectedProfileEffectId: p, selectedProfileEffectItem: _, analyticsLocations: h } = e,
		I = s.useCallback(() => {
			c(),
				(0, d.mK)({
					analyticsLocations: h,
					analyticsSource: o.Z.EDIT_PROFILE_EFFECT_MODAL,
					initialProductSkuId: null != _ ? _.skuId : void 0
				});
		}, [c, h, _]);
	return (0, r.jsx)(a.ModalFooter, {
		className: A.modalFooter,
		children: (0, r.jsxs)('div', {
			className: A.buttonsRight,
			children: [
				(0, r.jsx)(a.Button, {
					look: a.Button.Looks.LINK,
					color: a.Button.Colors.PRIMARY,
					onClick: c,
					children: P.Z.Messages.CANCEL
				}),
				(null != i && (!(0, u.qS)(i) || m)) || null === p
					? (0, r.jsx)(a.Button, {
							onClick: l,
							disabled: f,
							children: P.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
						})
					: m || !(0, u.G1)(n)
						? (0, r.jsx)(a.Button, {
								className: A.__invalid_modalFooterShopButton,
								onClick: I,
								children: P.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
							})
						: (0, r.jsx)(E.Z, {
								subscriptionTier: x.Si.TIER_2,
								buttonText: g.ZP.isPremium(t) ? P.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : P.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
							})
			]
		})
	});
}
function T(e) {
	let { user: t, guild: n, categories: i, purchases: l, onClose: o, initialSelectedProfileEffectId: c, currentSavedEffectId: d, analyticsLocations: m } = e,
		{ pendingProfileEffectId: E } = (0, p.bd)(n),
		[_, h] = s.useMemo(() => {
			let e = (0, u.bl)(i, l);
			return [e.purchased, e.shopPreviews];
		}, [i, l]),
		[C, x] = s.useState(() => (null != c ? c : void 0 !== E ? E : null == d ? null : null != d ? d : null)),
		[T, N] = s.useMemo(() => {
			var e;
			let t = _.find((e) => (null == e ? void 0 : e.id) === C),
				n = null != t || null === C;
			return [null !== (e = null != t ? t : h.find((e) => (null == e ? void 0 : e.id) === C)) && void 0 !== e ? e : null, n];
		}, [C, _, h]),
		{ product: S, purchase: j } = (0, f.Z)(null == T ? void 0 : T.skuId),
		R = s.useRef(null),
		M = g.ZP.canUseCollectibles(t),
		O = C === (void 0 === E ? (null != d ? d : null) : E),
		L = s.useCallback(
			(e) => {
				x(e);
			},
			[x]
		);
	return (0, r.jsxs)(r.Fragment, {
		children: [
			(0, r.jsxs)(a.ModalHeader, {
				separator: !1,
				className: A.modalHeader,
				children: [
					(0, r.jsx)(a.Heading, {
						variant: 'heading-lg/semibold',
						children: P.Z.Messages.PROFILE_EFFECT_MODAL_HEADER
					}),
					(0, r.jsx)(a.ModalCloseButton, {
						className: A.modalCloseButton,
						onClick: o
					})
				]
			}),
			(0, r.jsxs)(a.ModalContent, {
				className: A.modalContent,
				children: [
					(0, r.jsx)(v.Z, {
						user: t,
						guild: n,
						pendingProfileEffect: C,
						selectedProfileEffectRef: R,
						onSelect: L,
						onClose: o
					}),
					(0, r.jsx)(I.Z, {
						user: t,
						canApplySelectedChange: N,
						pendingProfileEffectRecord: T,
						product: S,
						purchase: j,
						guild: n
					})
				]
			}),
			(0, r.jsx)(Z, {
				user: t,
				onApply: () => {
					(0, p.s6)(C, d, n), o();
				},
				onClose: o,
				product: S,
				purchase: j,
				canUseCollectibles: M,
				selectedProfileEffectId: C,
				selectedProfileEffectItem: T,
				disableApplyButton: O,
				analyticsLocations: m
			})
		]
	});
}
function N(e) {
	let { transitionState: t, analyticsLocations: n, initialSelectedEffectId: u, guild: f, onClose: E } = e,
		{ isFetching: g, categories: I, purchases: v } = (0, m.Z)(),
		x = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
		{ analyticsLocations: P } = (0, c.ZP)(n, o.Z.EDIT_PROFILE_EFFECT_MODAL),
		Z = (0, p.Kg)(x, f);
	return (
		s.useEffect(() => {
			h.default.track(C.rMx.OPEN_MODAL, {
				type: C.jXE.PROFILE_EFFECT_CUSTOMIZATION,
				location_stack: P
			});
		}, [P]),
		s.useEffect(
			() => () => {
				(0, d.K$)({
					categories: [...I.values()],
					itemTypes: [i.Z.PROFILE_EFFECT]
				});
			},
			[I]
		),
		(0, r.jsx)(c.Gt, {
			value: P,
			children: (0, r.jsx)(a.ModalRoot, {
				transitionState: t,
				className: A.modal,
				size: g ? a.ModalSize.DYNAMIC : a.ModalSize.MEDIUM,
				children: g
					? (0, r.jsx)(a.Spinner, {
							className: A.spinner,
							type: a.Spinner.Type.SPINNING_CIRCLE
						})
					: (0, r.jsx)(T, {
							user: x,
							guild: f,
							categories: I,
							purchases: v,
							initialSelectedProfileEffectId: u,
							currentSavedEffectId: Z,
							onClose: E,
							analyticsLocations: P
						})
			})
		})
	);
}
