t(47120), t(653041), t(773603);
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(442837),
	l = t(704215),
	c = t(692547),
	d = t(780384),
	_ = t(481060),
	E = t(570140),
	u = t(457330),
	I = t(497321),
	T = t(23551),
	S = t(468026),
	N = t(410030),
	C = t(726542),
	m = t(122021),
	A = t(275759),
	O = t(231757),
	g = t(888496),
	h = t(605236),
	p = t(565138),
	R = t(297700),
	x = t(553795),
	M = t(430824),
	f = t(771845),
	D = t(246946),
	P = t(626135),
	L = t(63063),
	b = t(706454),
	Z = t(349728),
	v = t(494620),
	j = t(205266),
	B = t(216153),
	U = t(981631),
	G = t(856651),
	F = t(921944),
	y = t(689938),
	V = t(886185),
	Y = t(224499);
let w = (e) => {
	var s, t;
	let a,
		{ integration: i } = e,
		{
			isJoining: r,
			joinErrorMessage: l,
			showJoinErrorMessage: c
		} = (0, o.cj)(
			[x.Z],
			() => ({
				isJoining: x.Z.isJoining(i.id),
				joinErrorMessage: '' === x.Z.joinErrorMessage(i.id) ? y.Z.Messages.ERROR : x.Z.joinErrorMessage(i.id),
				showJoinErrorMessage: void 0 !== x.Z.joinErrorMessage(i.id)
			}),
			[i.id]
		),
		d = null != (0, o.e7)([M.Z], () => M.Z.getGuild(i.guild.id), [i.guild.id]);
	return (
		!d &&
			(a = (0, n.jsx)(_.Button, {
				size: _.ButtonSizes.SMALL,
				onClick: function () {
					u.Z.joinServer(i.id, () => {});
				},
				disabled: r,
				children: (0, n.jsx)('span', { children: r ? y.Z.Messages.JOINING_GUILD : y.Z.Messages.JOIN_GUILD })
			})),
		(0, n.jsxs)('div', {
			className: V.integrationWrapper,
			children: [
				(0, n.jsxs)('div', {
					className: V.integration,
					children: [
						(0, n.jsx)(p.Z, {
							size: p.Z.Sizes.SMALL,
							guild: i.guild,
							className: V.guildIcon
						}),
						(0, n.jsxs)('div', {
							className: V.integrationInner,
							children: [
								(0, n.jsx)(_.Text, {
									variant: 'text-md/semibold',
									color: 'header-primary',
									children: i.guild.toString()
								}),
								(0, n.jsx)(_.Anchor, {
									href: null === (t = C.Z.get(i.type)) || void 0 === t ? void 0 : null === (s = t.getPlatformUserUrl) || void 0 === s ? void 0 : s.call(t, i.account),
									children: (0, n.jsx)(_.Text, {
										variant: 'text-xs/normal',
										color: 'header-secondary',
										children: i.account.name
									})
								})
							]
						}),
						a
					]
				}),
				c &&
					(0, n.jsx)(_.Text, {
						variant: 'text-xs/normal',
						color: 'text-danger',
						className: V.integrationError,
						children: l
					})
			]
		})
	);
};
function H(e) {
	var s, t, i;
	let r,
		o,
		l,
		{ onDisconnect: E, account: I, theme: T, locale: N } = e,
		[h, p] = a.useState(I.friendSync),
		[x, M] = a.useState(I.visibility),
		[f, D] = a.useState(I.metadataVisibility),
		[P, b] = a.useState(I.showActivity),
		[F, Y] = a.useState(null),
		[H, k] = a.useState(null),
		[W, K] = a.useState(!1),
		[z, Q] = a.useState([]),
		X = (0, m.rR)(I.type),
		q = C.Z.get(X);
	a.useEffect(() => {
		p(I.friendSync), M(I.visibility), D(I.metadataVisibility), b(I.showActivity);
	}, [I]),
		a.useEffect(() => {
			if (!1 !== I.verified) null != F && (M(F), u.Z.setVisibility(I.type, I.id, F), Y(null)), null != H && (D(H), u.Z.setMetadataVisibility(I.type, I.id, H), k(null));
		}, [I]);
	function J() {
		(0, O.Z)({
			platformType: I.type,
			location: 'User Settings'
		});
	}
	function $() {
		let e = C.Z.get(I.type),
			s = y.Z.Messages.DISCONNECT_ACCOUNT_BODY;
		(0, Z.Z)(I) &&
			(s = (0, n.jsxs)(n.Fragment, {
				children: [
					s,
					(0, n.jsx)(v.Z, {
						className: V.infoBox,
						children: y.Z.Messages.CONNECTED_ACCOUNT_IS_AUTHORIZED_APP_DISCONNECT_WARNING.format({ platformName: e.name })
					})
				]
			})),
			(0, _.openModal)((t) =>
				(0, n.jsx)(S.default, {
					title: y.Z.Messages.DISCONNECT_ACCOUNT_TITLE.format({ name: e.name }),
					body: s,
					confirmText: y.Z.Messages.DISCONNECT_ACCOUNT,
					cancelText: y.Z.Messages.CANCEL,
					onConfirm: E,
					...t
				})
			);
	}
	function ee(e) {
		let { verified: s } = I,
			t = e ? 1 : 0;
		if (e && !s) {
			Y(t),
				(0, O.Z)({
					platformType: I.type,
					location: 'User Settings'
				});
			return;
		}
		M(t), u.Z.setVisibility(I.type, I.id, t);
	}
	function es(e) {
		let { verified: s } = I,
			t = e ? 1 : 0;
		if (e && !s) {
			k(t),
				(0, O.Z)({
					platformType: I.type,
					location: 'User Settings'
				});
			return;
		}
		D(t), u.Z.setMetadataVisibility(I.type, I.id, t);
	}
	function et(e) {
		p(e), u.Z.setFriendSync(I.type, I.id, e);
	}
	function en(e) {
		b(e), u.Z.setShowActivity(I.type, I.id, e);
	}
	return (0, n.jsxs)('div', {
		className: V.connection,
		children: [
			(function (e) {
				var s;
				let t = C.Z.get(e.type),
					a = C.Z.get(X),
					i = '1' === (null !== (s = e.metadata) && void 0 !== s ? s : {})[G.PC.TWITTER_VERIFIED],
					r = null;
				return (
					t.type === U.ABu.TWITTER &&
						i &&
						(r = (0, n.jsx)(_.Tooltip, {
							text: y.Z.Messages.CONNECTION_VERIFIED_ON_TWITTER,
							children: (e) =>
								(0, n.jsx)(R.Z, {
									...e,
									color: c.Z.unsafe_rawColors.TWITTER.css,
									children: (0, n.jsx)(_.CheckmarkSmallIcon, {
										size: 'xs',
										color: c.Z.unsafe_rawColors.WHITE_500.css
									})
								})
						})),
					(0, n.jsxs)('div', {
						className: V.connectionHeader,
						children: [
							(0, n.jsx)('img', {
								alt: a.name,
								className: V.connectionIcon,
								src: (0, d.wj)(T) ? a.icon.darkSVG : a.icon.lightSVG
							}),
							(0, n.jsxs)('div', {
								children: [
									(0, n.jsxs)('div', {
										className: V.connectionAccountLabelContainer,
										children: [
											(0, n.jsx)(_.Text, {
												color: 'header-primary',
												variant: 'text-md/semibold',
												className: V.connectionAccountValue,
												children: e.name
											}),
											null != r &&
												(0, n.jsx)('div', {
													className: V.connectionAccountLabelVerified,
													children: r
												})
										]
									}),
									(0, n.jsx)(_.Text, {
										variant: 'text-xs/normal',
										color: 'header-secondary',
										className: V.connectionAccountLabel,
										children: a.name
									})
								]
							}),
							(0, n.jsx)(_.Clickable, {
								className: V.connectionDelete,
								onClick: $,
								'aria-label': y.Z.Messages.SERVICE_CONNECTIONS_DISCONNECT,
								focusProps: {
									offset: {
										top: -4,
										left: -4,
										right: -4
									}
								},
								children: (0, n.jsx)(_.XSmallIcon, {
									size: 'xs',
									color: 'currentColor'
								})
							})
						]
					})
				);
			})(I),
			(s = I).twoWayLink
				? null
				: s.type === U.ABu.XBOX
					? (0, n.jsx)('div', {
							className: V.upsellWrapper,
							children: (0, n.jsx)(B.Y, {})
						})
					: s.type === U.ABu.PLAYSTATION
						? (0, n.jsx)('div', {
								className: V.upsellWrapper,
								children: (0, n.jsx)(j.t, {})
							})
						: null,
			(function (e) {
				var s;
				let t = null !== (s = e.metadata) && void 0 !== s ? s : {},
					a = null,
					i = (0, A.FI)(t[G.PC.CREATED_AT], N);
				switch (e.type) {
					case U.ABu.REDDIT:
						a = (0, g.oP)(t, V.metadataItem);
						break;
					case U.ABu.STEAM:
						a = (0, g.Dq)(t, V.metadataItem);
						break;
					case U.ABu.TWITTER:
						a = (0, g.rJ)(t, V.metadataItem);
						break;
					case U.ABu.EBAY:
						a = (0, g.ul)(t, V.metadataItem);
						break;
					case U.ABu.PAYPAL:
						a = (0, g.li)(t, V.metadataItem);
						break;
					case U.ABu.TIKTOK:
						a = (0, g.hf)(t, V.metadataItem);
				}
				null !== i &&
					(null == a && (a = []),
					null == a ||
						a.push(
							(0, n.jsx)(
								_.Text,
								{
									variant: 'text-xs/normal',
									color: 'interactive-active',
									className: V.connectedAccountVanityMetadataCreatedAt,
									children: y.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({ date: i })
								},
								'member-since'
							)
						));
				let r = z.includes(e.id),
					o = y.Z.Messages.REFRESH;
				if (null == a || 0 === a.length) {
					if (!0 !== C.Z.get(e.type).hasMetadata) return null;
					(a = [
						(0, n.jsx)(
							_.TextBadge,
							{
								className: V.connectionMetadataUpsellTag,
								text: y.Z.Messages.NEW
							},
							'badge'
						),
						(0, n.jsx)(
							_.Text,
							{
								variant: 'text-xs/normal',
								className: V.connectionMetadataUpsellDescription,
								children: y.Z.Messages.CONNECTED_ACCOUNT_ADD_DETAILS_DESCRIPTION.format({ helpdeskUrl: L.Z.getArticleURL(U.BhN.CONNECTION_DETAILS) })
							},
							'label'
						)
					]),
						(o = y.Z.Messages.CONNECTED_ACCOUNT_ADD_DETAILS);
				}
				return (
					r && (o = y.Z.Messages.DONE),
					a.push(
						(0, n.jsx)(
							_.Button,
							{
								className: V.metadataRefreshButton,
								color: r ? _.Button.Colors.GREEN : _.Button.Colors.BRAND,
								size: _.Button.Sizes.SMALL,
								submitting: W,
								disabled: r,
								onClick: r
									? void 0
									: () => {
											K(!0),
												u.Z.refresh(e.type, e.id).finally(() => {
													setTimeout(() => {
														z.push(e.id), Q(z), K(!1);
													}, 2000);
												});
										},
								children: o
							},
							'refresh-button'
						)
					),
					(0, n.jsx)('div', {
						className: V.metadataContainer,
						children: a
					})
				);
			})(I),
			((t = q),
			U.BFP.has(I.type) &&
				(r = (0, n.jsx)(_.FormSwitch, {
					className: V.connectionOptionSwitch,
					hideBorder: !0,
					value: h,
					onChange: et,
					children: (0, n.jsx)(_.Text, {
						variant: 'text-sm/semibold',
						children: y.Z.Messages.SYNC_FRIENDS
					})
				})),
			U.vbS.has(I.type) &&
				(o = (0, n.jsx)(_.FormSwitch, {
					className: V.connectionOptionSwitch,
					hideBorder: !0,
					value: P,
					onChange: en,
					children: (0, n.jsx)(_.Text, {
						variant: 'text-sm/semibold',
						children: y.Z.Messages.DISPLAY_ACTIVITY.format({ platform: t.name })
					})
				})),
			(null === (i = C.Z.get(I.type)) || void 0 === i ? void 0 : i.hasMetadata) === !0 &&
				(l = (0, n.jsx)(_.FormSwitch, {
					className: V.connectionOptionSwitch,
					hideBorder: !0,
					value: 1 === f,
					onChange: es,
					disabled: 1 !== x || null == I.metadata,
					children: (0, n.jsx)(_.Text, {
						variant: 'text-sm/semibold',
						children: y.Z.Messages.DISPLAY_DETAILS_ON_PROFILE
					})
				})),
			(0, n.jsx)('div', {
				className: V.connectionOptionsWrapper,
				children: (0, n.jsxs)('div', {
					className: V.connectionOptions,
					children: [
						(0, n.jsx)(_.FormSwitch, {
							className: V.connectionOptionSwitch,
							hideBorder: !0,
							value: 1 === x,
							onChange: ee,
							children: (0, n.jsx)(_.Text, {
								variant: 'text-sm/semibold',
								children: y.Z.Messages.DISPLAY_ON_PROFILE
							})
						}),
						l,
						o,
						r
					]
				})
			})),
			(function () {
				if (I.revoked || I.integrations.length > 0) return (0, n.jsx)(_.FormDivider, { className: V.connectedAccountSeparator });
			})(),
			I.revoked
				? (0, n.jsx)(_.FormItem, {
						className: V.integrationsWrapper,
						children: (0, n.jsx)(_.FormText, {
							className: V.integrationRevoked,
							children: y.Z.Messages.CONNECTED_ACCOUNT_REVOKED.format({ onReconnect: J })
						})
					})
				: I.integrations.length > 0
					? (0, n.jsxs)(_.FormItem, {
							className: V.integrationsWrapper,
							children: [
								(0, n.jsx)(_.FormTitle, {
									tag: _.FormTitleTags.H5,
									children: (0, n.jsx)(_.Text, {
										variant: 'text-xs/semibold',
										children: y.Z.Messages.SUB_ENABLED_SERVERS
									})
								}),
								(0, n.jsx)('div', { children: I.integrations.map((e) => (0, n.jsx)(w, { integration: e }, e.id)) })
							]
						})
					: void 0
		]
	});
}
function k() {
	return (
		a.useEffect(
			() => () => {
				(0, h.EW)(l.z.NEW_CRUNCHYROLL_CONNECTION, { dismissAction: F.L.AUTO });
			},
			[]
		),
		(0, n.jsxs)('div', {
			className: V.connectContainer,
			children: [
				(0, n.jsx)(_.Heading, {
					variant: 'heading-md/bold',
					color: 'interactive-active',
					className: V.connectHeader,
					children: y.Z.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_HEADER
				}),
				(0, n.jsx)(_.Text, {
					variant: 'text-xs/normal',
					color: 'header-secondary',
					children: y.Z.Messages.CONNECTIONS_USER_SETTINGS_CONNECT_ACCOUNTS_DESCRIPTION.format({ privacyPolicyUrl: U.EYA.PRIVACY })
				}),
				(0, n.jsx)(K, {})
			]
		})
	);
}
function W(e) {
	let s = C.Z.get(e);
	(0, O.Z)({ platformType: s.type }),
		P.default.track(U.rMx.ACCOUNT_LINK_STEP, {
			previous_step: 'desktop connections',
			current_step: 'desktop oauth',
			platform_type: s.type
		});
}
function K() {
	function e() {
		E.Z.dispatch({
			type: 'CONNECTIONS_GRID_MODAL_SHOW',
			onComplete: W
		});
	}
	let s = (0, m.fq)(),
		t = (0, _.useRedesignIconContext)().enabled ? 24 : 18;
	return (0, n.jsxs)('div', {
		className: V.connectionsContainer,
		children: [
			s.slice(0, 10).map((e) =>
				(0, n.jsx)(
					T.Z,
					{
						type: e.type,
						className: V.__invalid_accountButton,
						innerClassName: V.accountButtonInner
					},
					e.type
				)
			),
			(0, n.jsx)(_.Tooltip, {
				text: y.Z.Messages.CONNECTIONS_VIEW_MORE,
				children: (s) => {
					let { onMouseEnter: a, onMouseLeave: i } = s;
					return (0, n.jsx)('div', {
						className: r()(V.accountAddWrapper, V.__invalid_accountButton),
						children: (0, n.jsx)(_.FocusRing, {
							children: (0, n.jsx)('button', {
								onMouseEnter: a,
								onMouseLeave: i,
								className: r()(V.accountAddInner, V.accountButtonInner),
								type: 'button',
								onClick: e,
								'aria-label': y.Z.Messages.ADD_NEW_CONNECTION,
								children: (0, n.jsx)(_.ChevronSmallRightIcon, {
									size: 'custom',
									color: 'currentColor',
									height: t,
									width: t,
									'aria-label': y.Z.Messages.CONNECTIONS_VIEW_MORE
								})
							})
						})
					});
				}
			})
		]
	});
}
function z(e) {
	let s,
		{ fetching: a, accounts: i, theme: r, locale: o } = e;
	return (
		(s = a
			? (0, n.jsx)(_.Spinner, {
					className: Y.marginTop20,
					type: _.Spinner.Type.SPINNING_CIRCLE
				})
			: 0 === i.length
				? (0, n.jsxs)(_.EmptyState, {
						className: Y.marginTop40,
						theme: r,
						children: [
							(0, n.jsx)(_.EmptyStateImage, {
								darkSrc: t(703152),
								lightSrc: t(548617),
								width: 230,
								height: 220
							}),
							(0, n.jsx)(_.EmptyStateText, {
								note: y.Z.Messages.CONNECTED_ACCOUNTS_NONE,
								children: y.Z.Messages.CONNECTED_ACCOUNTS_NONE_TITLE
							})
						]
					})
				: i
						.filter((e) => C.Z.isSupported(e.type))
						.map((e, s) =>
							(0, n.jsx)(
								H,
								{
									theme: r,
									account: e,
									locale: o,
									onDisconnect: () =>
										(function (e) {
											let { type: s, id: t } = e;
											u.Z.disconnect(s, t);
										})(e)
								},
								s
							)
						)),
		(0, n.jsx)(_.FormItem, {
			className: V.connectionList,
			children: s
		})
	);
}
s.Z = () => {
	let e = (0, o.e7)([D.Z], () => D.Z.hidePersonalInformation),
		s = (0, o.e7)([x.Z], () => x.Z.isFetching()),
		t = (0, o.e7)([x.Z], () => x.Z.getAccounts()),
		i = (0, N.ZP)();
	(0, o.e7)([f.ZP], () => f.ZP.getFlattenedGuildIds());
	let r = (0, o.e7)([b.default], () => b.default.locale);
	return (a.useEffect(() => {
		u.Z.fetch();
	}, []),
	e)
		? (0, n.jsx)(I.Z, {})
		: (0, n.jsxs)(_.FormSection, {
				className: V.__invalid_connections,
				tag: _.FormTitleTags.H1,
				title: y.Z.Messages.CONNECTIONS,
				children: [
					(0, n.jsx)(k, {}),
					(0, n.jsx)(z, {
						fetching: s,
						accounts: t,
						theme: i,
						locale: r
					})
				]
			});
};
