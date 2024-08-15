n.d(t, {
	Z: function () {
		return b;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(442837),
	l = n(481060),
	u = n(230711),
	c = n(351773),
	d = n(607070),
	_ = n(100527),
	E = n(906732),
	f = n(639119),
	h = n(197115),
	p = n(587446),
	m = n(594174),
	I = n(626135),
	T = n(74538),
	g = n(94795),
	S = n(327943),
	A = n(539873),
	N = n(981631),
	v = n(921944),
	O = n(474936),
	R = n(689938),
	C = n(765630);
let y = () => {
		var e, t, n;
		let i = (0, o.e7)([m.default], () => T.ZP.isPremium(m.default.getCurrentUser())),
			a = (0, f.N)(),
			s = (null == a ? void 0 : null === (e = a.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === O.Si.TIER_2;
		return (0, r.jsx)(h.Z, {
			size: l.Button.Sizes.MEDIUM,
			buttonText: i
				? R.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE
				: s
					? (0, T.Rt)({
							intervalType: null == a ? void 0 : null === (t = a.subscription_trial) || void 0 === t ? void 0 : t.interval,
							intervalCount: null == a ? void 0 : null === (n = a.subscription_trial) || void 0 === n ? void 0 : n.interval_count
						})
					: R.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
			subscriptionTier: O.Si.TIER_2
		});
	},
	D = (e) => {
		let { markAsDismissed: t } = e,
			n = () => {
				null == t || t(v.L.DISMISS), (0, g.G8)();
			};
		return (0, r.jsxs)('div', {
			className: C.editorHeader,
			children: [
				(0, r.jsx)(l.Clickable, {
					className: C.closeCircleButton,
					onClick: () => n(),
					children: (0, r.jsx)(l.CircleXIcon, {
						size: 'md',
						color: 'currentColor',
						className: C.closeCircle
					})
				}),
				(0, r.jsxs)('div', {
					className: C.title,
					children: [
						(0, r.jsx)(l.Heading, {
							variant: 'heading-lg/extrabold',
							children: R.Z.Messages.APP_ICON_PREVIEW_TITLE
						}),
						(0, r.jsx)(p.Z, { className: C.premiumIcon })
					]
				})
			]
		});
	},
	L = (e) => {
		let { isCoachmark: t, markAsDismissed: n } = e,
			i = (0, o.e7)([S.Z], () => S.Z.isUpsellPreview);
		return (0, r.jsxs)('div', {
			className: C.editorFooter,
			children: [
				i && (0, r.jsx)(y, {}),
				(0, r.jsx)(l.Button, {
					className: C.footerButton,
					onClick: () => {
						null == n || n(v.L.DISMISS), (0, g.G8)(), !t && u.Z.open();
					},
					color: l.Button.Colors.PRIMARY,
					size: l.Button.Sizes.MEDIUM,
					children: i || t ? R.Z.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW : R.Z.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS
				})
			]
		});
	};
function b(e) {
	let { isCoachmark: t, markAsDismissed: n } = e,
		{ analyticsLocations: a } = (0, E.ZP)(_.Z.APP_ICON_EDITOR),
		u = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
		{
			isUpsellPreview: f,
			isEditorOpen: h,
			shouldEditorAnimate: p
		} = (0, o.cj)([S.Z, d.Z], () => ({
			isUpsellPreview: S.Z.isUpsellPreview,
			isEditorOpen: S.Z.isEditorOpen,
			shouldEditorAnimate: t && !d.Z.useReducedMotion
		}));
	i.useEffect(() => {
		if (!!f)
			I.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
				type: O.cd.APP_ICON_UPSELL,
				location_stack: a
			});
	}, [f, a]);
	let T = (0, c.Z)(null, f ? g.O7 : N.dG4);
	return (i.useEffect(() => {
		if (!!f && !h) return g.O7;
	}, [f, h]),
	null == u)
		? null
		: (0, r.jsx)(E.Gt, {
				value: a,
				children: (0, r.jsx)('div', {
					ref: T,
					className: s()(C.editor, p ? C.editorAnimate : null),
					children: (0, r.jsxs)(l.HeadingLevel, {
						children: [
							(0, r.jsx)(D, { markAsDismissed: n }),
							(0, r.jsx)(l.Scroller, {
								className: C.editorBody,
								children: (0, r.jsx)(A.Z, {
									className: C.selectionGroup,
									isEditor: !0
								})
							}),
							(0, r.jsx)(L, {
								markAsDismissed: n,
								isCoachmark: t
							})
						]
					})
				})
			});
}
