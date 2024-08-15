n.d(t, {
	Z: function () {
		return M;
	}
}),
	n(47120);
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(512722),
	o = n.n(l),
	c = n(780384),
	d = n(481060),
	u = n(99690),
	_ = n(410030),
	I = n(726542),
	E = n(981631),
	T = n(856651),
	m = n(689938),
	N = n(840679);
function S(e) {
	var t, n;
	let a,
		{ theme: i, platform: l, integration: _, onRemove: I, locked: E } = e;
	if ((null == _ ? void 0 : _.application) != null)
		o()(null != _.application.bot, 'bot is null'),
			(a = (0, s.jsx)(u.Z, {
				size: d.AvatarSizes.SIZE_24,
				user: _.application.bot,
				className: N.verifiedIcon
			}));
	else if (null != l) {
		let e = (0, c.ap)(i) ? l.icon.lightSVG : l.icon.darkSVG;
		a = (0, s.jsx)('img', {
			className: N.verifiedIcon,
			src: e,
			alt: m.Z.Messages.IMG_ALT_LOGO.format({ name: l.name })
		});
	}
	return (0, s.jsxs)('div', {
		className: r()(
			N.verifiedRow,
			(null == l ? void 0 : l.hasMetadata) === !0 ||
				((null == _ ? void 0 : _.role_connections_metadata) != null &&
					(null == _ ? void 0 : _.role_connections_metadata.length) > 0)
				? N.verifiedRowWithMetadata
				: null
		),
		children: [
			a,
			(0, s.jsx)(d.Text, {
				variant: 'text-md/medium',
				className: N.verifiedText,
				children: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_ACCOUNT.format({
					platformName:
						null !== (n = null == l ? void 0 : l.name) && void 0 !== n
							? n
							: null == _
								? void 0
								: null === (t = _.application) || void 0 === t
									? void 0
									: t.name
				})
			}),
			(0, s.jsx)(d.Button, {
				'aria-label': m.Z.Messages.REMOVE,
				size: d.Button.Sizes.TINY,
				look: d.Button.Looks.BLANK,
				onClick: I,
				disabled: E,
				className: N.closeButton,
				children: (0, s.jsx)(d.Tooltip, {
					text: m.Z.Messages.REMOVE,
					children: (e) =>
						(0, s.jsx)(d.XSmallIcon, {
							size: 'md',
							color: 'currentColor',
							className: N.closeIcon,
							...e
						})
				})
			})
		]
	});
}
function h(e) {
	var t, n, i;
	let {
			inputRef: r,
			existingPendingConfiguration: l,
			locked: o,
			onConfigurationChange: c,
			platform: u,
			applicationId: _,
			metadataField: I,
			operator: E
		} = e,
		m = null !== (n = null == l ? void 0 : l.index) && void 0 !== n ? n : -1,
		S = null != E ? E : T.iO.GREATER_THAN,
		h = Math.round(
			Number(
				null !== (i = null == l ? void 0 : null === (t = l.configuration) || void 0 === t ? void 0 : t.value) &&
					void 0 !== i
					? i
					: 0
			)
		);
	S === T.iO.GREATER_THAN ? (h = Math.max(1, h + 1)) : S === T.iO.LESS_THAN && (h = Math.max(0, h - 1));
	let [g, C] = a.useState(h.toString());
	return (
		a.useEffect(() => {
			C(g);
		}, [g]),
		(0, s.jsx)(
			d.TextInput,
			{
				inputRef: r,
				type: 'number',
				className: N.numericalRuleInput,
				size: d.TextInput.Sizes.MINI,
				value: g,
				onChange: (e) => {
					if (null != l) {
						if ('' !== e) {
							var t;
							let n = Math.round(Number(e));
							S === T.iO.GREATER_THAN ? (n = Math.max(0, n - 1)) : S === T.iO.LESS_THAN && (n = Math.max(1, n + 1)),
								c(
									{
										connectionType: null !== (t = null == u ? void 0 : u.type) && void 0 !== t ? t : T.Kt,
										applicationId: _,
										connectionMetadataField: I,
										operator: S,
										value: n.toString()
									},
									m
								);
						}
						C(e);
					}
				},
				disabled: o
			},
			I
		)
	);
}
function g(e) {
	let {
		titleText: t,
		fieldText: n,
		metadataField: a,
		existingPendingConfiguration: i,
		platform: r,
		applicationId: l,
		onConfigurationChange: o,
		locked: c
	} = e;
	return (0, s.jsxs)(
		'div',
		{
			className: N.ruleContainer,
			children: [
				(0, s.jsxs)('div', {
					children: [
						(0, s.jsx)(d.Text, {
							variant: 'text-md/bold',
							className: N.ruleItemHeader,
							children: t
						}),
						(0, s.jsx)('div', {
							className: N.numericalRuleSubItemContainer,
							children: (0, s.jsx)(d.Text, {
								variant: 'text-md/normal',
								className: N.numericalRuleSubText,
								children: n
							})
						})
					]
				}),
				(0, s.jsx)(d.Switch, {
					className: N.ruleItemSwitch,
					checked: (null == i ? void 0 : i.configuration.value) === '1',
					onChange: (e) => {
						var t, n;
						let s = null;
						e &&
							(s = {
								connectionType: null !== (t = null == r ? void 0 : r.type) && void 0 !== t ? t : T.Kt,
								applicationId: l,
								connectionMetadataField: a,
								operator: T.iO.EQUAL,
								value: '1'
							}),
							o(s, null !== (n = null == i ? void 0 : i.index) && void 0 !== n ? n : -1);
					},
					disabled: c
				})
			]
		},
		a
	);
}
function C(e) {
	let {
			titleText: t,
			fieldText: n,
			fieldTextHook: i,
			metadataField: r,
			existingPendingConfiguration: l,
			platform: o,
			applicationId: c,
			onConfigurationChange: u,
			locked: _,
			operator: I
		} = e,
		E = a.createRef(),
		m = (null == l ? void 0 : l.configuration) != null,
		S = (0, s.jsx)(
			h,
			{
				inputRef: E,
				metadataField: r,
				existingPendingConfiguration: l,
				locked: _ || !m,
				onConfigurationChange: u,
				platform: o,
				operator: I,
				applicationId: c
			},
			r
		),
		g =
			null != i
				? i.format({ metadataHook: () => S })
				: (0, s.jsxs)(s.Fragment, {
						children: [
							S,
							(0, s.jsx)('span', {
								className: N.fieldText,
								children: n
							})
						]
					});
	return (0, s.jsxs)(
		'div',
		{
			className: N.ruleContainer,
			children: [
				(0, s.jsxs)('div', {
					className: N.ruleContainerLabel,
					children: [
						(0, s.jsx)(d.Text, {
							variant: 'text-md/bold',
							className: N.ruleItemHeader,
							children: t
						}),
						(0, s.jsx)('div', {
							className: N.numericalRuleSubItemContainer,
							children: (0, s.jsx)(d.Text, {
								variant: 'text-md/normal',
								className: N.numericalRuleSubText,
								children: g
							})
						})
					]
				}),
				(0, s.jsx)(d.Switch, {
					className: N.ruleItemSwitch,
					checked: m,
					onChange: (e) => {
						var t, n, s;
						let a = null;
						if (e) {
							let e = null != I ? I : T.iO.GREATER_THAN,
								s = Math.round(Number(null === (t = E.current) || void 0 === t ? void 0 : t.value));
							e === T.iO.GREATER_THAN ? (s = Math.max(0, s - 1)) : e === T.iO.LESS_THAN && (s = Math.max(1, s + 1)),
								(a = {
									connectionType: null !== (n = null == o ? void 0 : o.type) && void 0 !== n ? n : T.Kt,
									applicationId: c,
									connectionMetadataField: r,
									operator: e,
									value: s.toString()
								});
						}
						u(a, null !== (s = null == l ? void 0 : l.index) && void 0 !== s ? s : -1);
					},
					disabled: _
				})
			]
		},
		r
	);
}
function x(e) {
	let { configMetadataMap: t, onConfigurationChange: n, locked: a } = e,
		i = I.Z.get(E.ABu.STEAM);
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
				metadataField: T.PC.CREATED_AT,
				existingPendingConfiguration: t.get(T.PC.CREATED_AT),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.CONNECTIONS_STEAM_GAMES,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_GAMES,
				metadataField: T.PC.STEAM_GAME_COUNT,
				existingPendingConfiguration: t.get(T.PC.STEAM_GAME_COUNT),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ITEMS.format({
					gameName: m.Z.Messages.CONNECTIONS_STEAM_DOTA2
				}),
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_DOTA2,
				metadataField: T.PC.STEAM_ITEM_COUNT_DOTA2,
				existingPendingConfiguration: t.get(T.PC.STEAM_ITEM_COUNT_DOTA2),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ITEMS.format({
					gameName: m.Z.Messages.CONNECTIONS_STEAM_TF2
				}),
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_TF2,
				metadataField: T.PC.STEAM_ITEM_COUNT_TF2,
				existingPendingConfiguration: t.get(T.PC.STEAM_ITEM_COUNT_TF2),
				platform: i,
				onConfigurationChange: n,
				locked: a
			})
		]
	});
}
function p(e) {
	let { configMetadataMap: t, onConfigurationChange: n, locked: a } = e,
		i = I.Z.get(E.ABu.TWITTER);
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
				metadataField: T.PC.CREATED_AT,
				existingPendingConfiguration: t.get(T.PC.CREATED_AT),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.CONNECTIONS_TWITTER_FOLLOWERS,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_FOLLOWERS,
				metadataField: T.PC.TWITTER_FOLLOWERS_COUNT,
				existingPendingConfiguration: t.get(T.PC.TWITTER_FOLLOWERS_COUNT),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.CONNECTIONS_TWITTER_STATUSES,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_TWEETS,
				metadataField: T.PC.TWITTER_STATUSES_COUNT,
				existingPendingConfiguration: t.get(T.PC.TWITTER_STATUSES_COUNT),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(g, {
				titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_VERIFIED,
				fieldText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_VERIFIED,
				metadataField: T.PC.TWITTER_VERIFIED,
				existingPendingConfiguration: t.get(T.PC.TWITTER_VERIFIED),
				platform: i,
				onConfigurationChange: n,
				locked: a
			})
		]
	});
}
function R(e) {
	let { configMetadataMap: t, onConfigurationChange: n, locked: a } = e,
		i = I.Z.get(E.ABu.REDDIT);
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
				metadataField: T.PC.CREATED_AT,
				existingPendingConfiguration: t.get(T.PC.CREATED_AT),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.CONNECTIONS_REDDIT_KARMA,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_KARMA,
				metadataField: T.PC.REDDIT_TOTAL_KARMA,
				existingPendingConfiguration: t.get(T.PC.REDDIT_TOTAL_KARMA),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(g, {
				titleText: m.Z.Messages.CONNECTIONS_REDDIT_MOD,
				fieldText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_MOD,
				metadataField: T.PC.REDDIT_MOD,
				existingPendingConfiguration: t.get(T.PC.REDDIT_MOD),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(g, {
				titleText: m.Z.Messages.CONNECTIONS_REDDIT_GOLD,
				fieldText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_GOLD,
				metadataField: T.PC.REDDIT_GOLD,
				existingPendingConfiguration: t.get(T.PC.REDDIT_GOLD),
				platform: i,
				onConfigurationChange: n,
				locked: a
			})
		]
	});
}
function f(e) {
	let { configMetadataMap: t, onConfigurationChange: n, locked: a } = e,
		i = I.Z.get(E.ABu.PAYPAL);
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
				metadataField: T.PC.CREATED_AT,
				existingPendingConfiguration: t.get(T.PC.CREATED_AT),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(g, {
				titleText: m.Z.Messages.CONNECTIONS_PAYPAL_VERIFIED,
				fieldText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_PAYPAL_VERIFIED_BANK_ACCOUNT,
				metadataField: T.PC.PAYPAL_VERIFIED,
				existingPendingConfiguration: t.get(T.PC.PAYPAL_VERIFIED),
				platform: i,
				onConfigurationChange: n,
				locked: a
			})
		]
	});
}
function L(e) {
	let { configMetadataMap: t, onConfigurationChange: n, locked: a } = e,
		i = I.Z.get(E.ABu.EBAY);
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER_ACCOUNT_AGE,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AGE,
				metadataField: T.PC.CREATED_AT,
				existingPendingConfiguration: t.get(T.PC.CREATED_AT),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.CONNECTIONS_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_POSITIVE_FEEDBACK_PERCENTAGE,
				metadataField: T.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
				existingPendingConfiguration: t.get(T.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.CONNECTIONS_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_UNIQUE_POSITIVE_FEEDBACK_COUNT,
				metadataField: T.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT,
				existingPendingConfiguration: t.get(T.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.CONNECTIONS_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_MOST_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
				metadataField: T.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT,
				existingPendingConfiguration: t.get(T.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT),
				platform: i,
				onConfigurationChange: n,
				locked: a,
				operator: T.iO.LESS_THAN
			}),
			(0, s.jsx)(g, {
				titleText: m.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER,
				fieldText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_TOP_RATED_SELLER,
				metadataField: T.PC.EBAY_TOP_RATED_SELLER,
				existingPendingConfiguration: t.get(T.PC.EBAY_TOP_RATED_SELLER),
				platform: i,
				onConfigurationChange: n,
				locked: a
			})
		]
	});
}
function O(e) {
	let { configMetadataMap: t, onConfigurationChange: n, locked: a } = e,
		i = I.Z.get(E.ABu.TIKTOK);
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsx)(g, {
				titleText: m.Z.Messages.CONNECTIONS_TIKTOK_VERIFIED,
				fieldText: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_BE_VERIFIED,
				metadataField: T.PC.TIKTOK_VERIFIED,
				existingPendingConfiguration: t.get(T.PC.TIKTOK_VERIFIED),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.CONNECTIONS_TIKTOK_FOLLOWERS,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_FOLLOWERS,
				metadataField: T.PC.TIKTOK_FOLLOWER_COUNT,
				existingPendingConfiguration: t.get(T.PC.TIKTOK_FOLLOWER_COUNT),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.CONNECTIONS_TIKTOK_FOLLOWING,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_FOLLOWING,
				metadataField: T.PC.TIKTOK_FOLLOWING_COUNT,
				existingPendingConfiguration: t.get(T.PC.TIKTOK_FOLLOWING_COUNT),
				platform: i,
				onConfigurationChange: n,
				locked: a
			}),
			(0, s.jsx)(C, {
				titleText: m.Z.Messages.CONNECTIONS_TIKTOK_LIKES,
				fieldTextHook: m.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MUST_HAVE_AT_LEAST_LIKES,
				metadataField: T.PC.TIKTOK_LIKES_COUNT,
				existingPendingConfiguration: t.get(T.PC.TIKTOK_LIKES_COUNT),
				platform: i,
				onConfigurationChange: n,
				locked: a
			})
		]
	});
}
function A(e) {
	let { configMetadataMap: t, onConfigurationChange: n, locked: a, integration: i } = e;
	if (null == i || null == i.role_connections_metadata) return null;
	let r = i.role_connections_metadata.map((e) => {
		var r, l;
		let o;
		switch (e.type) {
			case T.xn.INTEGER_LESS_THAN_EQUAL:
			case T.xn.DATETIME_LESS_THAN_EQUAL:
				o = T.iO.LESS_THAN;
				break;
			case T.xn.INTEGER_GREATER_THAN_EQUAL:
			case T.xn.DATETIME_GREATER_THAN_EQUAL:
				o = T.iO.GREATER_THAN;
				break;
			case T.xn.INTEGER_EQUAL:
			case T.xn.BOOLEAN_EQUAL:
				o = T.iO.EQUAL;
				break;
			case T.xn.INTEGER_NOT_EQUAL:
			case T.xn.BOOLEAN_NOT_EQUAL:
				o = T.iO.NOT_EQUAL;
				break;
			default:
				return null;
		}
		switch (e.type) {
			case T.xn.INTEGER_LESS_THAN_EQUAL:
			case T.xn.INTEGER_GREATER_THAN_EQUAL:
			case T.xn.INTEGER_EQUAL:
			case T.xn.INTEGER_NOT_EQUAL:
			case T.xn.DATETIME_LESS_THAN_EQUAL:
			case T.xn.DATETIME_GREATER_THAN_EQUAL:
				return (0, s.jsx)(
					C,
					{
						titleText: e.name,
						fieldText: e.description,
						metadataField: e.key,
						existingPendingConfiguration: t.get(e.key),
						platform: null,
						onConfigurationChange: n,
						locked: a,
						operator: o,
						applicationId: null === (r = i.application) || void 0 === r ? void 0 : r.id
					},
					e.key
				);
			case T.xn.BOOLEAN_EQUAL:
			case T.xn.BOOLEAN_NOT_EQUAL:
				return (0, s.jsx)(
					g,
					{
						titleText: e.name,
						fieldText: e.description,
						metadataField: e.key,
						existingPendingConfiguration: t.get(e.key),
						platform: null,
						onConfigurationChange: n,
						locked: a,
						operator: o,
						applicationId: null === (l = i.application) || void 0 === l ? void 0 : l.id
					},
					e.key
				);
		}
	});
	return (0, s.jsx)(s.Fragment, { children: r });
}
function M(e) {
	let t,
		{ configurationItems: n, onConfigurationChange: a, locked: i, integrations: r } = e,
		l = (0, _.ZP)();
	if (n.length < 1) return null;
	let o = n[0].configuration.applicationId,
		c =
			null != o
				? null == r
					? void 0
					: r.find((e) => {
							var t;
							return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === o;
						})
				: void 0;
	if (null != o && null == c) return null;
	let d = null;
	try {
		d = I.Z.get(n[0].configuration.connectionType);
	} catch (e) {}
	let u = new Map();
	n.forEach((e) => {
		null != e.configuration.connectionMetadataField
			? u.set(e.configuration.connectionMetadataField, e)
			: null == e.configuration.value &&
				null == e.configuration.operator &&
				null == e.configuration.connectionMetadataField &&
				(t = e);
	});
	let T = {
			configMetadataMap: u,
			onConfigurationChange: a,
			locked: i
		},
		m = null;
	switch (null == d ? void 0 : d.type) {
		case E.ABu.STEAM:
			m = (0, s.jsx)(x, { ...T });
			break;
		case E.ABu.TWITTER:
			m = (0, s.jsx)(p, { ...T });
			break;
		case E.ABu.REDDIT:
			m = (0, s.jsx)(R, { ...T });
			break;
		case E.ABu.PAYPAL:
			m = (0, s.jsx)(f, { ...T });
			break;
		case E.ABu.EBAY:
			m = (0, s.jsx)(L, { ...T });
			break;
		case E.ABu.TIKTOK:
			m = (0, s.jsx)(O, { ...T });
			break;
		default:
			m = (0, s.jsx)(A, {
				...T,
				integration: c
			});
	}
	return (0, s.jsxs)('div', {
		className: N.container,
		children: [
			(0, s.jsx)(S, {
				theme: l,
				platform: d,
				integration: c,
				onRemove: () => a(null, t.index),
				locked: i
			}),
			m
		]
	});
}
