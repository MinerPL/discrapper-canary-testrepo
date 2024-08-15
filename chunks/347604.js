n(47120);
var s = n(735250),
	a = n(470079),
	i = n(392711),
	r = n.n(i),
	l = n(792986),
	o = n(442837),
	c = n(481060),
	d = n(946314),
	u = n(938502),
	_ = n(967916),
	I = n(68638),
	E = n(816817),
	T = n(219369),
	m = n(650774),
	N = n(845377),
	S = n(981631),
	h = n(689938),
	g = n(51583),
	C = n(716455);
let x = ['322850917248663552', '172018499005317120', '414234792121597953', '228406572756369408'],
	p = ['620723483965653003', '662246299369734154', '181970867549503489', '102860784329052160'];
t.Z = (e) => {
	let { guild: t, onEnableDiscovery: n, isGuildAdmin: i } = e,
		[R, f] = (0, l.Z)(() => [r().sample(x), r().sample(p)], []);
	a.useEffect(() => {
		_.z([R, f]);
	}, [R, f]);
	let [L, O] = (0, o.Wu)([I.Z], () => [I.Z.getGuild(R), I.Z.getGuild(f)], [R, f]),
		{ canEnableDiscovery: A, isPendingSuccess: M } = (0, o.cj)(
			[d.ZP],
			() => ({
				canEnableDiscovery: d.ZP.passesChecklist(t.id),
				isPendingSuccess: d.ZP.isPendingSuccess(t.id)
			}),
			[t.id]
		),
		[D, v] = (0, o.Wu)([m.Z], () => [null, m.Z.getMemberCount(t.id)], [t.id]),
		j = a.useCallback(() => {
			null != n && n();
		}, [n]),
		Z = null;
	return (
		i ? (M ? (Z = h.Z.Messages.GUILD_SETTINGS_DISCOVERY_PENDING_HEALTHY) : !A && (Z = h.Z.Messages.GUILD_SETTINGS_DISCOVERY_REQUIREMENTS_NOT_MET)) : (Z = h.Z.Messages.GUILD_SETTINGS_DISCOVERY_ADMIN_ONLY),
		(0, s.jsxs)('div', {
			className: g.container,
			children: [
				(0, s.jsx)('img', {
					alt: '',
					src: C,
					className: g.sparkles
				}),
				(0, s.jsxs)('div', {
					className: g.discoverPreview,
					children: [
						(0, s.jsx)(E.Z, {
							className: g.placeholderCard,
							disabled: !0,
							small: !0,
							loading: null == L,
							guild: L
						}),
						(0, s.jsx)(E.Z, {
							className: g.previewCard,
							guild: t,
							description: h.Z.Messages.GUILD_SETTINGS_DISCOVERY_PREVIEW_DESCRIPTION,
							presenceCount: D,
							memberCount: v
						}),
						(0, s.jsx)(E.Z, {
							className: g.placeholderCard,
							disabled: !0,
							small: !0,
							loading: null == O,
							guild: O
						})
					]
				}),
				(0, s.jsx)(c.Heading, {
					className: g.header,
					variant: 'heading-xl/semibold',
					children: h.Z.Messages.GUILD_SETTINGS_DISCOVERY_HEADER
				}),
				(0, s.jsx)(c.Text, {
					variant: 'text-md/normal',
					className: g.valueProp,
					color: 'header-secondary',
					children: h.Z.Messages.GUILD_SETTINGS_DISCOVERY_PAGE_DESCRIPTION.format({
						onLinkClick: () =>
							(0, T.lW)({
								articleId: S.BhN.SERVER_DISCOVERY,
								guildId: t.id,
								pageView: u.d5.INTRO
							})
					})
				}),
				(0, s.jsx)(c.Text, {
					variant: 'text-md/normal',
					className: g.byline,
					color: 'header-secondary',
					children: h.Z.Messages.GUILD_SETTINGS_DISCOVERY_PAGE_DESCRIPTION_SUBHEADING.format({
						onGuidelinesClick: () =>
							(0, T.lW)({
								articleId: S.BhN.SERVER_DISCOVERY_GUIDELINES,
								guildId: t.id,
								pageView: u.d5.INTRO
							})
					})
				}),
				(0, s.jsx)(c.Tooltip, {
					text: Z,
					children: (e) =>
						(0, s.jsx)(c.Button, {
							...e,
							className: g.enableButton,
							color: c.Button.Colors.BRAND,
							size: c.Button.Sizes.LARGE,
							disabled: !A || !i,
							onClick: j,
							children: h.Z.Messages.GUILD_SETTINGS_SET_UP_DISCOVERY
						})
				}),
				(0, s.jsx)(N.Z, {
					className: g.checklist,
					guild: t,
					guildId: t.id
				})
			]
		})
	);
};
