n(47120);
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(442837),
	o = n(692547),
	c = n(481060),
	d = n(142497),
	u = n(338327),
	_ = n(496675),
	I = n(63063),
	E = n(981631),
	T = n(190378),
	m = n(689938),
	N = n(255350),
	S = n(438825),
	h = n(236140),
	g = n(37069),
	C = n(518513),
	x = n(168179),
	p = n(348986),
	R = n(930065),
	f = n(345669);
let L = () => [
		{
			icon: c.AnalyticsIcon,
			color: o.Z.unsafe_rawColors.GREEN_360.css,
			header: m.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_DISCOVERY_HEADER,
			body: m.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_DISCOVERY_BODY.format({
				featureHook: (e, t) =>
					(0, s.jsx)(
						'strong',
						{
							className: N.featuredText,
							children: e
						},
						t
					)
			})
		},
		{
			icon: c.AnalyticsIcon,
			color: o.Z.unsafe_rawColors.PARTNER.css,
			header: m.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_HEADER,
			body: m.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_BODY.format({
				infoHook: () =>
					(0, s.jsx)(c.Tooltip, {
						text: m.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_TOOLTIP,
						'aria-label': m.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_TOOLTIP,
						children: (e) =>
							(0, s.jsx)(c.CircleInformationIcon, {
								size: 'xs',
								color: 'currentColor',
								className: N.infoIcon,
								...e
							})
					}),
				featureHook: (e, t) =>
					(0, s.jsx)(
						'strong',
						{
							className: N.featuredText,
							children: e
						},
						t
					)
			})
		},
		{
			icon: c.CircleInformationIcon,
			color: o.Z.unsafe_rawColors.RED_360.css,
			header: m.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_STAY_INFORMED_HEADER,
			body: m.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_STAY_INFORMED_BODY
		}
	],
	O = [
		{
			iconSrc: p,
			name: 'Pokemon GO Paris',
			position: [-230, -100]
		},
		{
			iconSrc: R,
			name: 'Python',
			position: [-180, -100],
			faded: !0,
			rightAlign: !0
		},
		{
			iconSrc: C,
			name: 'Learn Latin',
			position: [-280, -30],
			faded: !0
		},
		{
			iconSrc: x,
			name: 'r/leagueoflegends',
			position: [-320, -30],
			rightAlign: !0
		},
		{
			iconSrc: f,
			name: 'Sneaker Fans',
			position: [-250, 40]
		},
		{
			iconSrc: g,
			name: 'Hogwarts School',
			position: [-270, 40],
			faded: !0,
			rightAlign: !0
		}
	],
	A = (e) => {
		let { icon: t, color: n, size: a = 24, header: i, body: r } = e;
		return (0, s.jsxs)('div', {
			className: N.featureCard,
			children: [
				(0, s.jsx)('div', {
					className: N.featureIcon,
					children: (0, s.jsx)(t, {
						color: null != n ? n : 'currentColor',
						width: a,
						height: a,
						size: 'custom'
					})
				}),
				(0, s.jsx)(c.Heading, {
					variant: 'heading-md/semibold',
					className: N.featureHeader,
					children: i
				}),
				(0, s.jsx)(c.Text, {
					color: 'header-secondary',
					variant: 'text-sm/normal',
					children: r
				})
			]
		});
	},
	M = (e) => {
		let { iconSrc: t, name: n, position: a, faded: i, rightAlign: l, imageCoordinates: o } = e,
			d = {
				[l ? 'right' : 'left']: o[0] + a[0],
				top: o[1] + a[1]
			};
		return (0, s.jsxs)('div', {
			className: r()(N.guildDetails, { [N.faded]: i }),
			style: d,
			children: [
				(0, s.jsx)('div', {
					className: N.guildIcon,
					children: (0, s.jsx)('img', {
						alt: '',
						src: t,
						width: 24,
						height: 24
					})
				}),
				(0, s.jsx)(c.Heading, {
					variant: 'heading-deprecated-12/semibold',
					children: n
				})
			]
		});
	};
t.Z = (e) => {
	let { guild: t } = e,
		[n, i] = a.useState(0),
		[r, o] = a.useState(0),
		[g, C] = a.useState(),
		x = (0, l.e7)([_.Z], () => _.Z.can(E.Plq.ADMINISTRATOR, t)),
		p = null == g ? void 0 : g.offsetWidth,
		R = null == g ? void 0 : g.offsetHeight;
	a.useEffect(() => {
		null != p && i(p / 2), null != R && o(R / 2);
	}, [p, R, i, o]),
		a.useEffect(() => {
			(0, d.Kw)(T.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL);
		}, []);
	let f = () => {
		u.Z.open();
	};
	return (0, s.jsxs)('div', {
		className: N.container,
		children: [
			(0, s.jsxs)('div', {
				className: N.banner,
				ref: (e) => C(e),
				children: [
					O.map((e) =>
						(0, s.jsx)(
							M,
							{
								...e,
								imageCoordinates: [n, r]
							},
							e.name
						)
					),
					(0, s.jsx)('img', {
						alt: '',
						src: S,
						className: N.image,
						width: 256
					}),
					(0, s.jsx)('img', {
						alt: '',
						src: h,
						className: N.sparkles
					})
				]
			}),
			(0, s.jsx)(c.Heading, {
				variant: 'heading-xl/semibold',
				children: m.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_HEADER
			}),
			(0, s.jsx)(c.Text, {
				color: 'header-secondary',
				variant: 'text-md/normal',
				className: N.body,
				children: m.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_BODY_WITH_HELP_ARTICLE.format({ helpdeskArticle: I.Z.getArticleURL(E.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES) })
			}),
			(0, s.jsx)(c.Tooltip, {
				text: x ? null : m.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
				'aria-label': x ? void 0 : m.Z.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
				children: (e) =>
					(0, s.jsx)(c.Button, {
						onClick: f,
						className: N.button,
						disabled: !x,
						...e,
						children: m.Z.Messages.GET_STARTED
					})
			}),
			(0, s.jsx)('hr', { className: N.separator }),
			(0, s.jsx)(c.Text, {
				color: 'header-secondary',
				variant: 'text-sm/normal',
				children: m.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_DETAILS
			}),
			(0, s.jsx)(c.Text, {
				color: 'header-secondary',
				className: N.body,
				variant: 'text-sm/normal',
				children: m.Z.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_LEARN_MORE.format({ helpdeskArticle: I.Z.getArticleURL(E.BhN.GUILD_COMMUNITY_FEATURE) })
			}),
			(0, s.jsx)('div', {
				className: N.features,
				children: L().map((e, t) => (0, s.jsx)(A, { ...e }, t))
			})
		]
	});
};
