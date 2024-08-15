n.d(t, {
	N: function () {
		return R;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(442837),
	o = n(481060),
	c = n(259580),
	_ = n(499033),
	u = n(626135),
	d = n(709054),
	E = n(219230),
	T = n(531441),
	S = n(236289),
	A = n(788080),
	I = n(467432),
	N = n(451284),
	g = n(613734),
	f = n(800530),
	C = n(981631),
	U = n(689938),
	m = n(827530);
let h = (e) => {
		let { status: t, onClick: n, opened: a, count: s } = e;
		return (0, i.jsxs)(o.Clickable, {
			className: m.header,
			onClick: n,
			children: [
				(0, i.jsx)('div', {
					className: m.headerIconWrapper,
					children: (0, i.jsx)(o.WarningIcon, {
						size: 'md',
						color: 'active' === t ? o.tokens.colors.INTERACTIVE_ACTIVE : o.tokens.colors.INTERACTIVE_MUTED
					})
				}),
				(0, i.jsxs)('div', {
					className: m.title,
					children: [
						(0, i.jsx)(o.Heading, {
							variant: 'heading-md/semibold',
							color: 'text-normal',
							children:
								'active' === t
									? U.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_ACTIVE_V2.format({ count: s.toString() })
									: U.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_HEADER_EXPIRED_V2.format({ count: s.toString() })
						}),
						(0, i.jsx)(o.Heading, {
							variant: 'text-sm/normal',
							color: 'text-muted',
							children:
								'active' === t
									? U.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_ACTIVE_V2
									: U.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_SUBHEADER_EXPIRED_V2
						})
					]
				}),
				(0, i.jsx)('div', {
					className: m.caret,
					children: (0, i.jsx)(c.Z, {
						width: 18,
						height: 18,
						direction: a ? c.Z.Directions.UP : c.Z.Directions.DOWN
					})
				})
			]
		});
	},
	p = () =>
		(0, i.jsxs)('div', {
			className: m.emptyState,
			children: [
				(0, i.jsxs)('div', {
					className: m.iconContainer,
					children: [
						(0, i.jsx)('div', {
							className: m.iconBackground,
							children: (0, i.jsx)(o.TrophyIcon, {
								size: 'md',
								color: 'currentColor',
								className: m.icon
							})
						}),
						(0, i.jsx)(_.Z, { className: m.stars })
					]
				}),
				(0, i.jsx)(o.Heading, {
					variant: 'heading-md/bold',
					className: m.emptyStateText,
					children: U.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_ACTIVE
				}),
				(0, i.jsx)(o.Text, {
					variant: 'text-xs/normal',
					className: m.emptyStateSubtext,
					children: U.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_SUBTEXT_ACTIVE
				})
			]
		}),
	O = () =>
		(0, i.jsx)('div', {
			className: m.emptyState,
			children: (0, i.jsx)(o.Text, {
				variant: 'text-xs/normal',
				className: m.emptyStateSubtext,
				children: U.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_EMPTY_STATE_EXPIRED
			})
		}),
	x = (e) => {
		let { timestamp: t } = e;
		return (0, i.jsx)(o.Text, {
			variant: 'text-xs/normal',
			className: m.timestamp,
			children: (0, A.XX)(t)
		});
	},
	v = () =>
		(0, i.jsx)(o.Text, {
			variant: 'text-xs/bold',
			className: m.newBadge,
			children: U.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_NEW
		}),
	D = (e) => {
		let { classification: t } = e,
			{ id: s, description: r } = t,
			c = d.default.extractTimestamp(s),
			_ = (0, I.e)(t),
			u = (0, E.B)('violations_container'),
			S = a.useMemo(() => {
				var e, n, a;
				let s = {
					description: r,
					descriptionHook: (e) =>
						(0, i.jsx)(o.Text, {
							tag: 'span',
							variant: 'heading-lg/bold',
							children: e
						})
				};
				if (!(u && (0, A.FB)(t))) return U.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION.format(s);
				return (null == t ? void 0 : null === (e = t.guild_metadata) || void 0 === e ? void 0 : e.member_type) ===
					T.wO.OWNER
					? U.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_DESCRIPTION_GUILD.format({
							...s,
							guildName: null == t ? void 0 : null === (n = t.guild_metadata) || void 0 === n ? void 0 : n.name
						})
					: U.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD_PRESENCE.format({
							guildName: null == t ? void 0 : null === (a = t.guild_metadata) || void 0 === a ? void 0 : a.name,
							classification_type: s.description,
							classificationHook: s.descriptionHook
						});
			}, [t, r, u]);
		return (0, i.jsx)(
			o.Clickable,
			{
				onClick: () => {
					(0, o.openModalLazy)(async () => {
						let { default: e } = await Promise.all([n.e('72181'), n.e('46097'), n.e('18831'), n.e('10621')]).then(
							n.bind(n, 41164)
						);
						return (t) =>
							(0, i.jsx)(e, {
								classificationId: s,
								source: f.s.StandingTab,
								...t
							});
					});
				},
				className: l()(m.itemDetail, { [m.itemDetailNew]: _ }),
				children: (0, i.jsxs)('div', {
					className: m.descriptionContainer,
					children: [
						_ ? (0, i.jsx)(v, {}) : (0, i.jsx)(x, { timestamp: c }),
						(0, i.jsx)(o.Heading, {
							variant: 'heading-lg/normal',
							children: S
						})
					]
				})
			},
			s
		);
	},
	F = (e) => {
		let { status: t, classifications: n } = e,
			[s, l] = a.useState(!1),
			[c, _] = a.useState(3),
			d = (0, N.P)(),
			E = (0, r.e7)([S.Z], () => S.Z.getIsDsaEligible()),
			T = a.useMemo(() => n.slice(0, c), [n, c]);
		a.useEffect(() => {
			s &&
				u.default.track(C.rMx.SAFETY_HUB_ACTION, {
					action: f.n0.ViewViolationsDropdown,
					account_standing: d.state,
					classification_ids: T.map((e) => Number(e.id)),
					source: f.s.StandingTab,
					is_violative_content_shown: !1,
					is_dsa_eligible: E
				});
		}, [s, d.state, T, E]);
		let A = n.length - T.length > 3 ? 3 : n.length - T.length;
		return (0, i.jsxs)('div', {
			className: m.dropdown,
			children: [
				(0, i.jsx)(h, {
					status: t,
					onClick: () => l((e) => !e),
					opened: s,
					count: n.length
				}),
				s &&
					(0, i.jsxs)('div', {
						className: m.items,
						children: [
							(0, i.jsx)(o.TabBar.Separator, {
								style: {
									height: '1px',
									width: '100%'
								}
							}),
							T.length > 0 && T.map((e) => (0, i.jsx)(D, { classification: e }, e.id)),
							T.length < n.length &&
								(0, i.jsxs)(i.Fragment, {
									children: [
										(0, i.jsx)(o.TabBar.Separator, {
											style: {
												height: '1px',
												width: '100%'
											}
										}),
										(0, i.jsx)('button', {
											className: m.paginationButton,
											onClick: () => _((e) => e + A),
											children: U.Z.Messages.SAFETY_HUB_VIOLATIONS_CONTAINER_PAGINATION_BUTTON.format({
												nextPageSize: A
											})
										})
									]
								}),
							0 === T.length && 'active' === t && (0, i.jsx)(p, {}),
							0 === T.length && 'expired' === t && (0, i.jsx)(O, {})
						]
					})
			]
		});
	},
	R = () => {
		let e = (0, g.y9)(),
			t = (0, g.KM)();
		return 0 === e.length && 0 === t.length
			? null
			: (0, i.jsxs)('div', {
					children: [
						(0, i.jsx)(F, {
							status: 'active',
							classifications: e
						}),
						(0, i.jsx)(F, {
							status: 'expired',
							classifications: t
						})
					]
				});
	};
