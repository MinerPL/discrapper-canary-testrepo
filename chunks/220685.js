n.d(t, {
	Z: function () {
		return j;
	}
}),
	n(47120);
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(512722),
	o = n.n(l),
	c = n(392711),
	d = n.n(c),
	u = n(442837),
	_ = n(692547),
	I = n(215569),
	E = n(481060),
	T = n(484614),
	m = n(852860),
	N = n(782568),
	S = n(367907),
	h = n(674180),
	g = n(999382),
	C = n(626135),
	x = n(730647),
	p = n(584825),
	R = n(981631),
	f = n(689938),
	L = n(217611);
let O = [14361481, 12200937, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 13064760, 13058360, 12401000, 12933021, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
	A = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
	M = O[4],
	D = (e) => {
		var t, n;
		let { guild: i, canEnable: l } = e,
			c = (0, p.YB)(i.id),
			{ loading: u, updateSubscriptionsSettings: g } = (0, p.QV)(),
			[x, D] = a.useState(i.hasFeature(R.oNc.CREATOR_STORE_PAGE)),
			[v, j] = a.useState(null !== (t = null == c ? void 0 : c.store_page_primary_color) && void 0 !== t ? t : M),
			[Z, b] = a.useState(null == c ? void 0 : c.store_page_trailer_url),
			U = null == Z || null != Z.match(A),
			[G, P] = a.useState(null !== (n = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== n && n),
			B = a.useRef(null == c ? void 0 : c.store_page_slug).current,
			y = x !== i.hasFeature(R.oNc.CREATOR_STORE_PAGE) || ((null == c ? void 0 : c.store_page_primary_color) == null && v !== M) || ((null == c ? void 0 : c.store_page_primary_color) != null && v !== (null == c ? void 0 : c.store_page_primary_color)) || Z !== (null == c ? void 0 : c.store_page_trailer_url) || (null != G && G !== (null == c ? void 0 : c.store_page_show_subscriber_count)),
			F = async () => {
				o()(null != c, 'Settings must be defined');
				let e = {};
				x !== i.hasFeature(R.oNc.CREATOR_STORE_PAGE) && (e.store_page_enabled = x),
					(((null == c ? void 0 : c.store_page_primary_color) == null && v !== M) || ((null == c ? void 0 : c.store_page_primary_color) != null && v !== (null == c ? void 0 : c.store_page_primary_color))) && (e.store_page_primary_color = v),
					Z !== (null == c ? void 0 : c.store_page_trailer_url) && (e.store_page_trailer_url = Z),
					G !== (null == c ? void 0 : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = G),
					!d().isEmpty(e) &&
						(await g(i.id, e),
						'store_page_enabled' in e &&
							C.default.track(R.rMx.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, {
								enabled: x,
								...(0, S.hH)(i.id)
							}));
			},
			k = R.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(B),
			w = null != Z && Z === (null == c ? void 0 : c.store_page_trailer_url),
			{ shouldRestrictUpdatingCreatorMonetizationSettings: H } = (0, h.gX)(i.id),
			V = H || !U;
		return (0, s.jsxs)('div', {
			children: [
				(0, s.jsx)(E.FormTitle, {
					tag: 'h1',
					children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TITLE
				}),
				(0, s.jsx)(E.FormText, {
					type: E.FormText.Types.DESCRIPTION,
					children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DESCRIPTION
				}),
				(0, s.jsx)(E.FormSwitch, {
					className: L.enableSwitch,
					value: x,
					disabled: H || (!x && !l),
					tooltipNote: x || l ? void 0 : f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_PRIMARY_TOGGLE_DISABLED_TOOLTIP,
					hideBorder: !0,
					onChange: (e) => D(e),
					children: (0, s.jsx)(E.Text, {
						variant: 'text-md/semibold',
						color: 'header-primary',
						children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ENABLE
					})
				}),
				(0, s.jsxs)(E.FormItem, {
					title: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_PROMO_URL,
					disabled: H,
					children: [
						(0, s.jsx)(T.Z, {
							value: k,
							className: r()({ [L.disabled]: H })
						}),
						(0, s.jsx)(E.Button, {
							onClick: () => (0, N.Z)(k),
							className: L.openPageButton,
							disabled: H,
							children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_GO_TO_PAGE
						})
					]
				}),
				(0, s.jsx)(E.FormDivider, { className: L.divider }),
				(0, s.jsxs)(E.FormItem, {
					title: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_TITLE,
					disabled: H,
					children: [
						(0, s.jsx)(E.FormText, {
							disabled: H,
							children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_DESCRIPTION
						}),
						(0, s.jsxs)('div', {
							className: L.accentColorContainer,
							children: [
								(0, s.jsx)(E.Button, {
									onClick: () => null,
									color: E.Button.Colors.CUSTOM,
									style: { backgroundColor: '#'.concat(v.toString(16).padStart(6, '0')) },
									className: L.buttonPreview,
									disabled: H,
									children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_ACCENT_COLOR_BUTTON_PREVIEW
								}),
								(0, s.jsx)(E.ColorPicker, {
									colors: O,
									customColor: null,
									defaultColor: M,
									value: v,
									onChange: (e) => j(e),
									renderDefaultButton: () => null,
									renderCustomButton: () => null,
									colorContainerClassName: L.hideColorButtons,
									disabled: H
								})
							]
						})
					]
				}),
				(0, s.jsx)(E.FormDivider, { className: L.divider }),
				(0, s.jsxs)(E.FormItem, {
					title: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_TITLE,
					disabled: H,
					children: [
						(0, s.jsx)(E.FormText, {
							disabled: H,
							children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_DESCRIPTION
						}),
						(0, s.jsx)(E.TextInput, {
							value: null != Z ? Z : void 0,
							onChange: (e) => b('' === e ? null : e),
							error: U ? null : f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_BAD_LINK,
							placeholder: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_TRAILER_PLACEHOLDER,
							className: L.trailerInputWrapper,
							inputClassName: r()(L.trailerInput, {
								[L.error]: !U,
								[L.trailerInputWithCheckmark]: w || !U
							}),
							prefixElement:
								U &&
								w &&
								(0, s.jsx)(E.CircleCheckIcon, {
									size: 'md',
									color: _.Z.unsafe_rawColors.BRAND_500.css,
									secondaryColor: _.Z.unsafe_rawColors.WHITE_500.css,
									className: L.inputCheckmark
								}),
							disabled: H
						})
					]
				}),
				(0, s.jsx)(E.FormDivider, { className: L.divider }),
				(0, s.jsxs)(E.FormItem, {
					title: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_TITLE,
					disabled: H,
					children: [
						(0, s.jsx)(E.FormText, {
							disabled: H,
							children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_DESCRIPTION
						}),
						(0, s.jsx)(E.FormSwitch, {
							className: L.premiumMemberCountSwitchContainer,
							value: G,
							hideBorder: !0,
							onChange: (e) => P(e),
							disabled: H,
							children: (0, s.jsxs)('div', {
								className: L.iconSwitchLabel,
								children: [
									(0, s.jsx)('div', {
										className: L.iconContainer,
										children: (0, s.jsx)(E.UserIcon, {
											size: 'custom',
											color: 'currentColor',
											width: 28,
											height: 28,
											className: L.premiumMemberCountIcon
										})
									}),
									(0, s.jsxs)('div', {
										children: [
											(0, s.jsx)(E.Text, {
												variant: 'text-md/medium',
												color: 'header-primary',
												children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_PREMIUM_MEMBER_COUNT
											}),
											(0, s.jsx)(E.Text, {
												variant: 'text-sm/normal',
												color: 'header-secondary',
												children: f.Z.Messages.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_SETTINGS_DISPLAY_OPTIONS_PREMIUM_MEMBER_COUNT_DESCRIPTION
											})
										]
									})
								]
							})
						})
					]
				}),
				(0, s.jsx)(I.W, {
					component: 'div',
					className: L.contentRegion,
					children:
						y &&
						(0, s.jsx)(E.SlideIn, {
							children: (0, s.jsx)(m.Z, {
								submitting: u,
								onReset: () => {
									var e, t;
									D(i.hasFeature(R.oNc.CREATOR_STORE_PAGE)), j(null !== (e = null == c ? void 0 : c.store_page_primary_color) && void 0 !== e ? e : M), b(null == c ? void 0 : c.store_page_trailer_url), P(null !== (t = null == c ? void 0 : c.store_page_show_subscriber_count) && void 0 !== t && t);
								},
								onSave: F,
								disabled: V
							})
						})
				})
			]
		});
	};
function v() {
	let e = (0, u.e7)([g.Z], () => g.Z.getGuild()),
		t = (0, x.f)(),
		n = (0, p.qi)(null == e ? void 0 : e.id).some((e) => e.published);
	return null != e && t
		? (0, s.jsx)(D, {
				guild: e,
				canEnable: n
			})
		: (0, s.jsx)(E.Spinner, {});
}
function j() {
	let e = (0, u.e7)([g.Z], () => g.Z.getGuild());
	return (0, s.jsxs)(x.l, {
		guildId: null == e ? void 0 : e.id,
		refetchOnMount: !0,
		children: [(0, s.jsx)(v, {}), ';']
	});
}
