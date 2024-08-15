t.d(n, {
	Z: function () {
		return j;
	}
}),
	t(47120);
var l = t(735250),
	s = t(470079),
	a = t(120356),
	r = t.n(a),
	i = t(512722),
	o = t.n(i),
	c = t(848246),
	u = t(442837),
	d = t(481060),
	m = t(410575),
	E = t(2052),
	_ = t(924557),
	S = t(600164),
	g = t(436774),
	h = t(1163),
	C = t(594174),
	I = t(74538),
	N = t(451467),
	x = t(122186),
	Z = t(37113),
	f = t(981631),
	R = t(474936),
	A = t(689938),
	T = t(458623),
	v = t(782765),
	L = t(224499);
function M(e) {
	let { analyticsLocation: n, onClose: s } = e;
	(0, d.openModalLazy)(async () => {
		let { default: e } = await t.e('28479').then(t.bind(t, 78865));
		return (t) =>
			(0, l.jsx)(e, {
				...t,
				onCloseParent: s,
				analyticsSource: n
			});
	});
}
function p() {
	return (0, l.jsxs)('div', {
		className: v.toolTipTextContainer,
		children: [
			(0, l.jsx)(d.NitroWheelIcon, {
				size: 'md',
				color: g.JX.PREMIUM_TIER_2,
				className: r()(v.premiumIcon)
			}),
			(0, l.jsx)(d.Text, {
				className: v.upsellText,
				variant: 'text-sm/medium',
				children: A.Z.Messages.UNLOCK_WITH_NITRO
			})
		]
	});
}
function O(e) {
	let n,
		t,
		{
			type: s,
			selected: a,
			needsPremium: i,
			needsDemo: o,
			analyticsLocation: c,
			onClick: u,
			onClose: m,
			setIsHovering: E
		} = e,
		{ value: _, label: S } = s;
	return (
		i
			? ((n = (0, l.jsx)(d.TooltipContainer, {
					tooltipClassName: v.tooltip,
					spacing: 6,
					'aria-label': A.Z.Messages.UNLOCK_WITH_NITRO,
					text: (0, l.jsx)(p, {}),
					children: (0, l.jsx)('div', {
						className: v.textContainer,
						onMouseEnter: () => E(!0),
						onMouseLeave: () => E(!1),
						children: (0, l.jsx)(d.Text, {
							variant: 'text-xs/bold',
							className: r()(v.selectorNitroText, v.enhancedSelectorNitroText),
							children: S
						})
					})
				})),
				(t = () =>
					M({
						analyticsLocation: c,
						onClose: m
					})))
			: ((n = (0, l.jsx)('div', {
					className: v.textContainer,
					children: (0, l.jsx)(d.Text, {
						variant: 'text-xs/normal',
						className: r()(v.selectorText, { [v.enhancedSelectorNitroText]: o }),
						children: S
					})
				})),
				(t = () => u(_))),
		{
			content: n,
			className: r()(v.selectorButton, {
				[v.selectorButtonSelected]: a,
				[v.perksDemo]: o,
				[v.premiumUpsell]: i
			}),
			onClick: t
		}
	);
}
function j(e) {
	let {
			onClose: n,
			selectedPreset: t,
			selectedResolution: a,
			selectedFPS: r,
			onResolutionChange: i,
			onFPSChange: g,
			onPresetChange: p,
			targetGuildPremiumTier: j,
			captureDeviceSelected: P
		} = e,
		D = (0, u.e7)([C.default], () => {
			let e = C.default.getCurrentUser();
			return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
		}),
		G = I.ZP.canStreamQuality(I.U2.MID, D),
		{ location: U } = (0, E.O)(),
		b = (0, _.Zq)({ autoTrackExposure: !1 }),
		w = (0, I.I5)(D, R.p9.TIER_1);
	h.Z.useExperiment(
		{ location: 'Go Live Modal' },
		{
			autoTrackExposure: !0,
			disable: w
		}
	);
	let k = (0, I.So)(c.q.STREAM_HIGH_QUALITY),
		B = (!G && !b) || k,
		[V, y] = s.useState(!1),
		H = P ? Z.z8 : Z.WC,
		W = {
			...U,
			section: f.jXE.STREAM_SETTINGS
		},
		F = (0, l.jsx)(d.ButtonGroup, {
			buttons: H.map((e) =>
				O({
					type: e,
					selected: e.value === a,
					needsPremium: !(0, N.Z)(t, e.value, r, D, j),
					needsDemo: k && e.value !== Z.LY.RESOLUTION_720,
					analyticsLocation: W,
					onClick: () => i(e.value),
					onClose: n,
					setIsHovering: y
				})
			)
		}),
		z = (0, l.jsx)(d.ButtonGroup, {
			buttons: Z.k0.map((e) =>
				O({
					type: e,
					selected: e.value === r,
					needsPremium: !(0, N.Z)(t, a, e.value, D, j),
					needsDemo: k && e.value === Z.ws.FPS_60,
					analyticsLocation: W,
					onClick: () => g(e.value),
					onClose: n,
					setIsHovering: y
				})
			)
		}),
		K = [
			{
				value: Z.tI.PRESET_VIDEO,
				label: A.Z.Messages.STREAM_PRESET_VIDEO
			},
			...(P
				? []
				: [
						{
							value: Z.tI.PRESET_DOCUMENTS,
							label: A.Z.Messages.STREAM_PRESET_DOCUMENTS
						}
					]),
			{
				value: Z.tI.PRESET_CUSTOM,
				label: A.Z.Messages.STREAM_PRESET_CUSTOM
			}
		],
		Y =
			t === Z.tI.PRESET_DOCUMENTS
				? (0, l.jsxs)(l.Fragment, {
						children: [
							(0, l.jsx)(S.Z, {
								children: (0, l.jsx)(d.FormItem, {
									title: A.Z.Messages.STREAM_RESOLUTION,
									titleClassName: T.formItemTitleSlim,
									className: v.documentModeGroup,
									children: (0, l.jsx)(d.Text, {
										variant: 'text-xs/normal',
										children: A.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({ fps: r })
									})
								})
							}),
							B
								? (0, l.jsx)(x.Z, {
										message: A.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
										onClose: n,
										openStreamUpsellModal: M
									})
								: null
						]
					})
				: (0, l.jsxs)(l.Fragment, {
						children: [
							(0, l.jsxs)(S.Z, {
								children: [
									(0, l.jsx)(d.FormItem, {
										title: A.Z.Messages.STREAM_RESOLUTION,
										className: v.settingsGroup,
										titleClassName: T.formItemTitleSlim,
										children: F
									}),
									(0, l.jsx)(d.FormItem, {
										title: A.Z.Messages.SCREENSHARE_FRAME_RATE,
										className: v.settingsGroup,
										titleClassName: T.formItemTitleSlim,
										children: z
									})
								]
							}),
							B
								? (0, l.jsx)(x.Z, {
										onClose: n,
										openStreamUpsellModal: M,
										glow: V
									})
								: null
						]
					});
	return (0, l.jsx)(m.Z, {
		...W,
		children: (0, l.jsx)(d.FormItem, {
			title: A.Z.Messages.STREAM_QUALITY,
			titleClassName: T.formItemTitle,
			className: T.modalContent,
			children: (0, l.jsxs)('div', {
				className: v.qualitySettingsContainer,
				children: [
					(0, l.jsx)(d.SingleSelect, {
						value: t,
						className: L.marginTop8,
						options: K,
						onChange: (e) => p(e)
					}),
					Y
				]
			})
		})
	});
}
