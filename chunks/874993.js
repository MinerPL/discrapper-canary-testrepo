n.d(t, {
	Z: function () {
		return R;
	}
}),
	n(47120),
	n(536091);
var s = n(735250),
	a = n(470079),
	i = n(442837),
	r = n(692547),
	l = n(481060),
	o = n(999382),
	c = n(279542),
	d = n(823379),
	u = n(63063),
	_ = n(426563),
	I = n(727072),
	E = n(85960),
	T = n(577330),
	m = n(65912),
	N = n(51248),
	S = n(546513),
	h = n(572456),
	g = n(273504),
	C = n(981631),
	x = n(689938),
	p = n(830760);
function R(e) {
	var t, n;
	let { guildId: R, setPreventNavigation: f = () => {} } = e,
		{ editingRule: L, setEditingRule: O } = (0, m.V)(),
		{ guild: A, subsection: M } = (0, i.cj)([o.Z], () => o.Z.getProps()),
		D = null !== (n = null !== (t = null == A ? void 0 : A.id) && void 0 !== t ? t : R) && void 0 !== n ? n : C.lds,
		v = null != L,
		[j] = (0, I.RD)(D),
		{ rulesByTriggerType: Z } = (0, I.pH)(D),
		b = {
			[E.vh.MEMBERS]: x.Z.Messages.GUILD_SETTINGS_AUTOMOD_MEMBER_CATEGORY_TITLE,
			[E.vh.CONTENT]: x.Z.Messages.GUILD_SETTINGS_AUTOMOD_CONTENT_CATEGORY_TITLE
		},
		U = a.useMemo(
			() =>
				Object.values(null != Z ? Z : {})
					.flat()
					.filter(d.lm),
			[Z]
		);
	a.useEffect(() => {
		v && O(null);
	}, [D]);
	let G = a.useCallback(
			(e, t) => {
				if (null != e) {
					var n, s;
					return null !==
						(s =
							null ===
								(n = U.find((t) => {
									let { id: n } = t;
									return n === e;
								})) || void 0 === n
								? void 0
								: n.name) && void 0 !== s
						? s
						: null;
				}
				return null != t ? E.I6[t].getDefaultRuleName() : null;
			},
			[U]
		),
		P = a.useMemo(() => {
			var e, t;
			return G(null !== (e = null == L ? void 0 : L.id) && void 0 !== e ? e : null, null !== (t = null == L ? void 0 : L.triggerType) && void 0 !== t ? t : null);
		}, [G, L]);
	a.useEffect(() => {
		f(v, (0, h.af)(P));
	}, [f, v, P]);
	let B = (0, E.Z6)(D),
		y = (e) =>
			(0, s.jsx)(s.Fragment, {
				children: e.map((e) => {
					var t;
					return (0, s.jsx)(
						S.Z,
						{
							guildId: D,
							triggerType: e,
							rules: null !== (t = Z[e]) && void 0 !== t ? t : [],
							initWithEdit: M === C.KsC.AUTOMOD_MENTION_SPAM && e === g.fX.MENTION_SPAM
						},
						e
					);
				})
			});
	return (0, s.jsxs)(l.FormSection, {
		title: x.Z.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
		tag: 'h1',
		children: [
			(0, s.jsxs)('div', {
				className: p.descriptionContainer,
				children: [
					(0, s.jsxs)(l.FormSection, {
						tag: 'h3',
						className: p.description,
						titleClassName: p.descriptionHeader,
						children: [
							(0, s.jsx)(l.Text, {
								variant: 'text-md/medium',
								color: 'header-secondary',
								children: x.Z.Messages.GUILD_SETTINGS_AUTOMOD_MESSAGE_FILTER_DESCRIPTION
							}),
							(0, s.jsx)(l.Text, {
								variant: 'text-sm/medium',
								className: p.helpUrl,
								children: x.Z.Messages.GUILD_AUTOMOD_LEARN_MORE_LINK.format({ helpUrl: u.Z.getArticleURL(C.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
							})
						]
					}),
					(0, s.jsxs)('div', {
						className: p.descriptionAvatarContainer,
						children: [
							(0, s.jsx)(l.Avatar, {
								src: (0, _.j)(),
								size: l.AvatarSizes.SIZE_80,
								'aria-label': x.Z.Messages.GUILD_AUTOMOD_USERNAME
							}),
							(0, s.jsx)(l.TextBadge, {
								text: (0, s.jsxs)('div', {
									className: p.automodBadgeText,
									children: [
										(0, s.jsx)(l.CheckmarkLargeBoldIcon, {
											size: 'xxs',
											color: 'currentColor',
											className: p.checkmarkIcon
										}),
										(0, s.jsx)(l.Text, {
											variant: 'text-xs/bold',
											className: p.automodText,
											children: x.Z.Messages.GUILD_AUTOMOD_USERNAME
										})
									]
								}),
								color: r.Z.unsafe_rawColors.BRAND_500.css,
								className: p.textBadge
							})
						]
					})
				]
			}),
			j
				? (0, s.jsx)(T.Z, {})
				: Object.entries(B).map((e) => {
						let [t, n] = e;
						if (0 === n.length) return (0, s.jsx)(a.Fragment, {}, t);
						let i =
							null != b[t]
								? (0, s.jsx)(l.FormSection, {
										tag: 'h3',
										className: p.categoryHeader,
										children: (0, s.jsx)(l.Text, {
											variant: 'text-lg/normal',
											color: 'header-primary',
											children: b[t]
										})
									})
								: null;
						return (0, s.jsxs)(
							'div',
							{
								className: p.categoryContainer,
								children: [i, y(n)]
							},
							t
						);
					}),
			null != A &&
				(0, s.jsx)(c.k0, {
					guild: A,
					withDivider: !1,
					className: p.explicitContentFilterSection
				}),
			(0, s.jsx)(N.Z, {
				guildId: D,
				existingRules: U
			}),
			v && (0, s.jsx)('div', { className: p.endSpacer })
		]
	});
}
