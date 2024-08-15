n(47120), n(724458);
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(498607),
	o = n.n(l),
	c = n(913527),
	d = n.n(c),
	u = n(442837),
	_ = n(692547),
	I = n(481060),
	E = n(946314),
	T = n(984933),
	m = n(63063),
	N = n(709054),
	S = n(434404),
	h = n(981631),
	g = n(689938),
	C = n(395589);
let x = (e) => {
	let {
			name: t,
			failingName: n,
			description: a,
			checked: i,
			pending: r,
			pendingDescription: l,
			failingDescription: o
		} = e,
		c = t,
		d = null,
		u = null;
	return (
		r
			? ((d = (0, s.jsx)(I.CircleWarningIcon, {
					size: 'custom',
					color: _.Z.unsafe_rawColors.YELLOW_300.css,
					width: 20,
					height: 20
				})),
				(u = null != l ? l : a))
			: i
				? ((d = (0, s.jsx)(I.Checkbox, {
						readOnly: !0,
						shape: I.Checkbox.Shapes.ROUND,
						size: 20,
						type: I.Checkbox.Types.INVERTED,
						value: !0
					})),
					(u = a))
				: ((d = (0, s.jsx)(I.CircleXIcon, {
						size: 'custom',
						color: _.Z.unsafe_rawColors.RED_400.css,
						width: 20,
						height: 20
					})),
					(c = null != n ? n : t),
					(u = null != o ? o : a)),
		(0, s.jsxs)('div', {
			className: C.checklistItem,
			children: [
				(0, s.jsx)('div', {
					className: C.checklistIcon,
					children: d
				}),
				(0, s.jsxs)('div', {
					className: C.checklistText,
					children: [
						(0, s.jsx)(I.Heading, {
							variant: 'heading-md/semibold',
							children: c
						}),
						(0, s.jsx)(I.Text, {
							color: 'text-muted',
							variant: 'text-sm/normal',
							children: u
						})
					]
				})
			]
		})
	);
};
function p(e, t) {
	return o()(
		null == e
			? void 0
			: e.map((e) => {
					let [t, n] = e;
					return null == t ? void 0 : t.id;
				}),
		null == t
			? void 0
			: t.map((e) => {
					let [t, n] = e;
					return null == t ? void 0 : t.id;
				})
	);
}
t.Z = (e) => {
	let { guild: t, guildId: i, className: l, noHeader: o = !1, failedItemsOnly: c = !1 } = e,
		[_, R] = (0, u.Wu)([E.ZP], () => [E.ZP.getDiscoveryChecklist(i), E.ZP.isLoading()], [i]),
		{ nsfwProperties: f } = null != _ ? _ : {},
		L = null == t ? void 0 : t.hasFeature(h.oNc.PARTNERED),
		O = null == f ? void 0 : f.channels_banned_keywords,
		A = (0, u.e7)(
			[T.ZP],
			() => {
				var e, n, s;
				if (null == O) return [];
				let a =
						null !== (n = (null !== (e = T.ZP.getChannels(t.id)) && void 0 !== e ? e : {})[T.sH]) && void 0 !== n
							? n
							: [],
					i =
						null !==
							(s =
								null == a
									? void 0
									: a
											.map((e) => e.channel)
											.reduce(
												(e, t) => ({
													...e,
													[t.id]: t
												}),
												{}
											)) && void 0 !== s
							? s
							: {};
				return null == O
					? []
					: Object.entries(O).map((e) => {
							let [t, n] = e;
							return [i[t], n];
						});
			},
			[t.id, O],
			p
		);
	if (R || null == _)
		return (0, s.jsxs)('div', {
			className: r()(C.container, C.loaderContainer, l),
			children: [
				(0, s.jsx)(I.Heading, {
					className: C.loadingText,
					variant: 'heading-md/semibold',
					color: 'header-secondary',
					children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_LOADING
				}),
				(0, s.jsx)(I.Spinner, { className: C.__invalid_spinner })
			]
		});
	let M = L
			? g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_DESCRIPTION_FAILING_PARTNERS
			: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_DESCRIPTION_FAIL,
		D = [
			{
				name: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE,
				failingName: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_FAILING,
				description: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_DESCRIPTION,
				failingDescription: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SAFE_DESCRIPTION_FAILING_GUIDELINES.format({
					termsURL: h.EYA.TERMS,
					guidelinesURL: m.Z.getArticleURL(h.BhN.PUBLIC_GUILD_GUILDLINES)
				}),
				checked: null == _ ? void 0 : _.safeEnvironment
			},
			{
				name: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE.format({ minMembers: _.minimumGuildSize }),
				failingName: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_SIZE_FAIL.format({
					minMembers: _.minimumGuildSize.toLocaleString()
				}),
				description: null,
				failingDescription: M.format({ minMembers: _.minimumGuildSize.toLocaleString() }),
				checked: null == _ ? void 0 : _.size
			},
			{
				name: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE,
				failingName: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_FAILING,
				description: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_DESCRIPTION.format({
					minimumGuildAge: Math.ceil(_.minimumGuildAge / 7)
				}),
				failingDescription: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_AGE_DESCRIPTION_FAILING.format({
					minimumGuildAge: Math.ceil(_.minimumGuildAge / 7),
					passDate: d()(N.default.extractTimestamp(i)).add(_.minimumGuildAge, 'days').format('LL')
				}),
				checked: null == _ ? void 0 : _.age
			},
			{
				name: (null == _ ? void 0 : _.healthScorePending)
					? g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_PENDING
					: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY,
				failingName: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_FAILING,
				description: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION,
				failingDescription: (0, s.jsxs)(s.Fragment, {
					children: [
						(0, s.jsx)(I.Text, {
							color: 'text-muted',
							className: C.healthFailingDescription,
							variant: 'text-sm/normal',
							children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_FAILING
						}),
						(null == _ ? void 0 : _.engagementHealthy)
							? null
							: (0, s.jsx)(I.Text, {
									color: 'text-danger',
									variant: 'text-sm/normal',
									children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_ENGAGEMENT_FAILING
								}),
						(null == _ ? void 0 : _.retentionHealthy)
							? null
							: (0, s.jsx)(I.Text, {
									color: 'text-danger',
									variant: 'text-sm/normal',
									children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_RETENTION_FAILING
								}),
						(() => {
							if (null == _ || null == _.healthScore) return !1;
							let { retentionHealthy: e, engagementHealthy: t, healthScore: n } = _,
								{ avg_nonnew_participators: s, avg_nonnew_communicators: a, perc_ret_w1_intentful: i } = n;
							return (!e && null != i) || (!t && null != s && null != a);
						})() &&
							(0, s.jsx)(I.Button, {
								className: C.detailsButton,
								look: I.Button.Looks.LINK,
								size: I.Button.Sizes.NONE,
								color: I.Button.Colors.LINK,
								onClick: () =>
									(0, I.openModalLazy)(async () => {
										let { default: e } = await n.e('23401').then(n.bind(n, 666599));
										return (t) =>
											(0, s.jsx)(e, {
												...t,
												guildChecklist: _
											});
									}),
								children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTH_VIEW_DETAILS
							})
					]
				}),
				pendingDescription: (null == _ ? void 0 : _.size)
					? g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_PENDING.format({
							checkBackHook: (e, t) =>
								(0, s.jsx)(
									'strong',
									{
										className: C.healthPending,
										children: e
									},
									t
								)
						})
					: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_HEALTHY_DESCRIPTION_PENDING_SIZE.format({
							minMembers: 200
						}),
				checked: null == _ ? void 0 : _.healthy,
				pending: null == _ ? void 0 : _.healthScorePending
			},
			{
				name: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW,
				failingName: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW_FAILING,
				description: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_NSFW_DESCRIPTION,
				failingDescription: (0, s.jsxs)(s.Fragment, {
					children: [
						(null == f ? void 0 : f.channels) != null
							? (0, s.jsx)(I.Text, {
									color: 'text-muted',
									variant: 'text-sm/normal',
									children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_CHANNEL_NAMES_2.format({
										channelHook: (e, t) =>
											(0, s.jsx)(
												'span',
												{
													className: C.doesNot,
													children: e
												},
												t
											)
									})
								})
							: null,
						A.length > 0
							? (0, s.jsx)('div', {
									className: C.indent,
									children: A.map((e) => {
										let [t, n] = e;
										return null != t
											? (0, s.jsxs)(
													I.Text,
													{
														color: 'text-muted',
														variant: 'text-sm/normal',
														children: ['#', t.name, ': ', n.join(', ')]
													},
													t.id
												)
											: null;
									})
								})
							: null,
						(null == f ? void 0 : f.name) != null
							? (0, s.jsx)(I.Text, {
									color: 'text-muted',
									variant: 'text-sm/normal',
									children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_NAME.format({
										nameHook: (e, t) =>
											(0, s.jsx)(
												'span',
												{
													className: C.doesNot,
													children: e
												},
												t
											)
									})
								})
							: null,
						(null == f ? void 0 : f.description) != null
							? (0, s.jsx)(I.Text, {
									color: 'text-muted',
									variant: 'text-sm/normal',
									children: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_CHANGE_DESCRIPTION.format({
										descriptionHook: (e, t) =>
											(0, s.jsx)(
												'span',
												{
													className: C.doesNot,
													children: e
												},
												t
											)
									})
								})
							: null
					]
				}),
				checked: null == f || 0 === Object.keys(f).length
			},
			{
				name: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA,
				failingName: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_FAILING,
				description: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_DESCRIPTION,
				failingDescription: g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_2FA_DESCRIPTION_FAILING.format({
					onClick: () => S.Z.setSection(h.pNK.SAFETY, h.KsC.SAFETY_PERMISSIONS)
				}),
				checked: null == _ ? void 0 : _.protected
			}
		];
	return (0, s.jsxs)('div', {
		className: r()(C.container, l),
		children: [
			(() => {
				let e = g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_DOES_NOT_PASS,
					t = (null == _ ? void 0 : _.sufficient) ? n(909425) : n(177266);
				return o
					? null
					: (0, s.jsxs)('div', {
							className: C.header,
							children: [
								(0, s.jsx)('img', {
									alt: '',
									src: t,
									className: C.headerIcon,
									width: 40
								}),
								(0, s.jsx)(I.Heading, {
									variant: 'heading-md/semibold',
									children: (null == _ ? void 0 : _.sufficient)
										? g.Z.Messages.GUILD_SETTINGS_DISCOVERY_CHECKLIST_GOOD_STANDING
										: e.format({
												doesNotHook: (e, t) =>
													(0, s.jsx)(
														'strong',
														{
															className: C.doesNot,
															children: e
														},
														t
													)
											})
								})
							]
						});
			})(),
			D.filter((e) => !c || null == e.checked || !e.checked).map((e, t) =>
				(0, s.jsxs)(
					a.Fragment,
					{
						children: [(0, s.jsx)(x, { ...e }), t < D.length - 1 ? (0, s.jsx)('hr', { className: C.separator }) : null]
					},
					e.name
				)
			)
		]
	});
};
