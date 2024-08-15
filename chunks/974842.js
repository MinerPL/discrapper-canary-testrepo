t(47120);
var a = t(735250),
	r = t(470079),
	i = t(688619),
	s = t.n(i),
	o = t(120356),
	l = t.n(o),
	c = t(866442),
	d = t(481060),
	u = t(550271),
	m = t(688298),
	_ = t(995119),
	f = t(116175),
	C = t(308083),
	h = t(689938),
	x = t(981808),
	p = t(318577);
let g = [
	f.ZD.SWORD,
	f.ZD.WATER_DROP,
	f.ZD.SKULL,
	f.ZD.TOADSTOOL,
	f.ZD.MOON,
	f.ZD.LIGHTNING,
	f.ZD.LEAF,
	f.ZD.HEART,
	f.ZD.FIRE,
	f.ZD.COMPASS,
	f.ZD.CROSSHAIRS,
	f.ZD.FLOWER,
	f.ZD.FORCE,
	f.ZD.GEM,
	f.ZD.LAVA,
	f.ZD.PSYCHIC,
	f.ZD.SMOKE,
	f.ZD.SNOW,
	f.ZD.SOUND,
	f.ZD.SUN,
	f.ZD.WIND
];
n.Z = (e) => {
	let {
			handleUpdate: n,
			badge: t,
			primaryColor: i,
			secondaryColor: o,
			tag: T,
			error: E,
			furthestStep: I,
			inSettings: b
		} = e,
		N = r.useMemo(() => {
			let e = (0, f.yf)();
			return {
				primary: null != i ? i : e.primary,
				secondary: null != o ? o : e.secondary
			};
		}, [i, o]);
	r.useEffect(() => {
		(null == i || null == o) &&
			n({
				badgePrimaryColor: N.primary,
				badgeSecondaryColor: N.secondary
			});
	}, [N.primary, N.secondary, n, i, o]);
	let v = r.useMemo(() => {
			for (let e = 0; e < f.sg.length; e++)
				if (f.sg[e].primary === N.primary && f.sg[e].secondary === N.secondary) return 1 + e;
			return 0;
		}, [N.primary, N.secondary]),
		[y, S] = r.useState(!1),
		A = r.useCallback(() => {
			let e = g[Math.floor(Math.random() * g.length)],
				t = s().random().hex();
			n({
				badgeKind: e,
				badgePrimaryColor: t,
				badgeSecondaryColor: s().random().hex()
			});
		}, [n]);
	return (
		r.useEffect(() => {
			I === C.Wy.CUSTOMIZE_TAG_BADGE &&
				!b &&
				n({
					brandPrimaryColor: N.primary,
					brandSecondaryColor: N.secondary
				});
		}, [n, N.primary, N.secondary, I, i, o, b]),
		(0, a.jsxs)('div', {
			className: p.slideContent,
			children: [
				(0, a.jsx)(d.Heading, {
					variant: 'heading-xxl/medium',
					className: p.title,
					children: h.Z.Messages.CLAN_SETUP_CUSTOMIZE_TITLE
				}),
				(0, a.jsx)(d.Text, {
					variant: 'text-md/normal',
					color: 'header-secondary',
					className: p.subtitle,
					children: h.Z.Messages.CLAN_SETUP_CUSTOMIZE_SUBTITLE
				}),
				(0, a.jsx)(_.Z, { onClick: A }),
				(0, a.jsxs)('div', {
					className: x.container,
					children: [
						(0, a.jsxs)('div', {
							className: x.badgesContainer,
							children: [
								(0, a.jsxs)('div', {
									className: x.pickerContainer,
									children: [
										(0, a.jsx)(d.Text, {
											variant: 'text-xs/semibold',
											color: 'text-muted',
											children: h.Z.Messages.CLAN_BADGE
										}),
										(0, a.jsx)('div', {
											className: x.pickerGrid,
											children: g.map((e) =>
												(0, a.jsx)(
													d.Clickable,
													{
														onClick: () => n({ badgeKind: e }),
														className: l()(x.badgeAssetContainer, { [x.badgeAssetContainerSelected]: e === t }),
														children: (0, a.jsx)(u.A, {
															badge: e,
															width: 32,
															height: 32
														})
													},
													''.concat(e)
												)
											)
										})
									]
								}),
								(0, a.jsxs)('div', {
									className: x.pickerContainer,
									children: [
										(0, a.jsx)(d.Text, {
											variant: 'text-xs/semibold',
											color: 'text-muted',
											children: h.Z.Messages.CLAN_BADGE_COLORS
										}),
										(0, a.jsxs)('div', {
											className: x.pickerGrid,
											children: [
												(0, a.jsx)(m.Z, {
													showSecondaryColor: f.ME[t] >= 2,
													palette: N,
													onPrimaryColorChange: (e) => {
														n({ badgePrimaryColor: (0, c.Rf)(e) });
													},
													onSecondaryColorChange: (e) => {
														n({ badgeSecondaryColor: (0, c.Rf)(e) });
													},
													shouldShow: y,
													onRequestClose: () => S(!1),
													children: (e) =>
														(0, a.jsx)(d.Clickable, {
															...e,
															onClick: () => {
																S((e) => !e);
															},
															className: l()(x.badgeAssetContainer, { [x.badgeAssetContainerSelected]: 0 === v }),
															children: (0, a.jsx)(d.PaintPaletteIcon, {
																size: 'custom',
																width: 20,
																height: 20
															})
														})
												}),
												f.sg.map((e, r) =>
													(0, a.jsx)(
														d.Clickable,
														{
															onClick: () => {
																n({
																	badgePrimaryColor: f.sg[r].primary,
																	badgeSecondaryColor: f.sg[r].secondary
																});
															},
															className: l()(x.badgeAssetContainer, { [x.badgeAssetContainerSelected]: r + 1 === v }),
															children: (0, a.jsx)(u.A, {
																badge: t,
																width: 32,
																height: 32,
																primaryTintColor: e.primary,
																secondaryTintColor: e.secondary
															})
														},
														''.concat(e.primary, ':').concat(e.secondary)
													)
												)
											]
										})
									]
								})
							]
						}),
						(0, a.jsxs)('div', {
							className: x.tagContainer,
							children: [
								(0, a.jsx)(d.Text, {
									variant: 'text-xs/semibold',
									color: 'text-muted',
									children: h.Z.Messages.CLAN_OVERVIEW_LABEL_CLAN_TAG
								}),
								null != E &&
									(0, a.jsx)(d.Text, {
										variant: 'text-sm/normal',
										color: 'status-danger',
										className: p.errorText,
										children: E
									}),
								(0, a.jsx)(d.TextInput, {
									className: x.tagInputWrapper,
									inputClassName: x.tagInput,
									value: null != T ? T : '',
									onChange: (e) => n({ tag: e }),
									maxLength: C.cG,
									placeholder: h.Z.Messages.CLAN_SETUP_TAG_PLACEHOLDER,
									autoFocus: !0,
									prefixElement: (0, a.jsx)(u.A, {
										badge: t,
										width: 40,
										height: 40,
										primaryTintColor: N.primary,
										secondaryTintColor: N.secondary
									})
								}),
								(0, a.jsx)(d.Text, {
									variant: 'text-xs/medium',
									color: 'text-muted',
									className: x.tagValidationText,
									children: h.Z.Messages.CLAN_TAG_VALIDATION_RULES
								})
							]
						})
					]
				})
			]
		})
	);
};
