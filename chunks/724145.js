n.d(t, {
	Z: function () {
		return x;
	}
}),
	n(47120),
	n(627341);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(278074),
	l = n(442837),
	u = n(524437),
	c = n(481060),
	d = n(153867),
	_ = n(230711),
	E = n(351773),
	f = n(607070),
	h = n(100527),
	p = n(906732),
	I = n(639119),
	m = n(197115),
	T = n(587446),
	g = n(594174),
	S = n(626135),
	A = n(74538),
	N = n(238302),
	v = n(514361),
	O = n(572397),
	R = n(705262),
	C = n(981631),
	y = n(921944),
	D = n(474936),
	L = n(689938),
	b = n(864879);
let M = () =>
		(0, r.jsx)('div', {
			className: b.editorHeader,
			children: (0, r.jsxs)('div', {
				className: b.bannerUpsell,
				children: [
					(0, r.jsx)(T.Z, { className: b.premiumIcon }),
					(0, r.jsx)(c.Heading, {
						variant: 'heading-md/bold',
						color: 'always-white',
						children: L.Z.Messages.CLIENT_THEMES_EDITOR_UPSELL_HEADER
					})
				]
			})
		}),
	P = (e) => {
		let { markAsDismissed: t } = e,
			n = (0, O.q)();
		return (0, r.jsxs)('div', {
			className: b.editorHeader,
			children: [
				(0, r.jsx)(c.Clickable, {
					className: b.closeCircleButton,
					onClick: () => {
						null != t && t(y.L.DISMISS), n(C.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, N.Mo)();
					},
					children: (0, r.jsx)(c.CircleXIcon, {
						size: 'md',
						color: 'currentColor',
						className: b.closeCircle
					})
				}),
				(0, r.jsx)(c.Heading, {
					variant: 'heading-lg/extrabold',
					children: L.Z.Messages.CLIENT_THEMES_EDITOR_HEADER
				})
			]
		});
	},
	U = (e) => {
		var t, n, i;
		let { onSubscribeSuccess: a, markAsDismissed: s } = e,
			{ analyticsLocations: o } = (0, p.ZP)(h.Z.CLIENT_THEMES_EDITOR),
			[_, E] = (0, l.Wu)([g.default, v.Z], () => [v.Z.gradientPreset, A.ZP.isPremium(g.default.getCurrentUser())]),
			f = (0, I.N)(),
			T = (0, A.Rt)({
				intervalType: null == f ? void 0 : null === (t = f.subscription_trial) || void 0 === t ? void 0 : t.interval,
				intervalCount:
					null == f ? void 0 : null === (n = f.subscription_trial) || void 0 === n ? void 0 : n.interval_count
			});
		return (0, r.jsx)(m.Z, {
			size: c.Button.Sizes.MEDIUM,
			buttonText: E
				? L.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE
				: (null == f ? void 0 : null === (i = f.subscription_trial) || void 0 === i ? void 0 : i.sku_id) === D.Si.TIER_2
					? T
					: L.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
			subscriptionTier: D.Si.TIER_2,
			onSubscribeModalClose: (e) => {
				if (!e) return;
				if ((null == a || a(), null != s && s(y.L.PRIMARY), null != _))
					(0, R.Yk)({
						isPersisted: !0,
						themeName: u.Us[_.id],
						analyticsLocations: o
					}),
						(0, d.ZI)({
							backgroundGradientPresetId: _.id,
							theme: _.theme
						});
			}
		});
	},
	w = (e) => {
		let { markAsDismissed: t } = e,
			{ isPreview: n, isCoachmark: a } = (0, l.cj)([v.Z], () => ({
				isPreview: v.Z.isPreview,
				isCoachmark: v.Z.isCoachmark
			})),
			[s, u] = i.useState(!1),
			d = (0, O.q)(),
			E = (0, o.EQ)({
				isPreview: n,
				isCoachmark: a,
				forceShowCloseButton: s
			})
				.with({ isCoachmark: !0 }, { forceShowCloseButton: !0 }, () => L.Z.Messages.CLOSE)
				.with({ isPreview: !0 }, () => L.Z.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW)
				.otherwise(() => L.Z.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS);
		return (0, r.jsxs)('div', {
			className: b.editorFooter,
			children: [
				n &&
					(0, r.jsx)(U, {
						onSubscribeSuccess: () => {
							u(!0);
						},
						markAsDismissed: t
					}),
				(0, r.jsx)(c.Button, {
					className: b.footerButton,
					onClick: () => {
						null != t && t(y.L.DISMISS), d(C.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, N.Mo)(), !a && _.Z.open();
					},
					color: c.Button.Colors.PRIMARY,
					size: c.Button.Sizes.MEDIUM,
					children: E
				})
			]
		});
	};
function x(e) {
	let { markAsDismissed: t } = e,
		{ analyticsLocations: n } = (0, p.ZP)(h.Z.CLIENT_THEMES_EDITOR),
		{
			isPreview: a,
			isCoachmark: o,
			isEditorOpen: u,
			shouldEditorAnimate: d
		} = (0, l.cj)([v.Z, f.Z], () => ({
			isPreview: v.Z.isPreview,
			isCoachmark: v.Z.isCoachmark,
			isEditorOpen: v.Z.isEditorOpen,
			shouldEditorAnimate: v.Z.isCoachmark && !f.Z.useReducedMotion
		})),
		_ = (0, O.q)();
	i.useEffect(() => _(C.rMx.CLIENT_THEME_PREVIEW_VIEWED), [_]),
		i.useEffect(() => {
			if (!!a)
				S.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
					type: D.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
					location_stack: n
				});
		}, [a, n]);
	let I = (0, O.J)(),
		m = (0, E.Z)(null, a ? I : C.dG4);
	return (
		i.useEffect(() => {
			if (!!a && !u) return I;
		}, [a, u, I]),
		(0, r.jsx)(p.Gt, {
			value: n,
			children: (0, r.jsx)('div', {
				ref: m,
				className: s()(b.themeEditor, d ? b.editorAnimate : null),
				children: (0, r.jsxs)(c.HeadingLevel, {
					children: [
						o ? (0, r.jsx)(M, {}) : (0, r.jsx)(P, { markAsDismissed: t }),
						(0, r.jsx)(c.Scroller, {
							className: b.editorBody,
							children: (0, r.jsxs)(R.ZP, {
								type: R.yH.EDITOR,
								children: [
									!a && (0, r.jsx)(R.ZP.Basic, { className: b.selectionGroup }),
									(0, r.jsx)(R.ZP.Gradient, { className: b.selectionGroup })
								]
							})
						}),
						(0, r.jsx)(w, { markAsDismissed: t })
					]
				})
			})
		})
	);
}
