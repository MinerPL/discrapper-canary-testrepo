n.d(t, {
	KQ: function () {
		return m;
	},
	aG: function () {
		return I;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(442837),
	l = n(481060),
	u = n(594174),
	c = n(645896),
	d = n(353093),
	_ = n(954138),
	E = n(426964),
	f = n(308083),
	h = n(689938),
	p = n(755150);
let m = i.memo(function (e) {
		let { src: t, tag: n, className: i, size: a = f.NC.SIZE_16 } = e;
		return null == t
			? null
			: (0, r.jsx)('img', {
					src: t,
					alt: h.Z.Messages.CLAN_BADGE_ALT.format({ tag: n }),
					className: s()(p.badge, i),
					width: a,
					height: a
				});
	}),
	I = i.memo(function (e) {
		let { guildId: t, clanTag: n, clanBadge: i, className: a, textClassName: o, badgeClassName: u, onClick: c, onMouseEnter: E, textVariant: h = 'text-xs/semibold', textColor: I = 'text-normal', badgeSize: T = f.NC.SIZE_12, inline: g = !0 } = e;
		return (0, _.Z)('base_clan_tag_chiplet')
			? (0, r.jsx)(l.Clickable, {
					tag: 'span',
					tabIndex: null == c ? -1 : void 0,
					onClick: c,
					onMouseEnter: E,
					className: s()(p.chipletContainerInner, g && p.chipletContainerInline, null != c && p.clickable, a),
					children: (0, r.jsxs)(l.Text, {
						variant: h,
						color: I,
						tag: 'span',
						className: s()(p.text, o),
						children: [
							null != i && 'string' == typeof i
								? (0, r.jsx)(m, {
										src: (0, d.ky)(t, i, T),
										tag: null == n ? void 0 : n.toString(),
										size: T,
										className: u
									})
								: i,
							(0, r.jsx)('span', {
								className: p.unselectable,
								children: n
							})
						]
					})
				})
			: null;
	}),
	T = i.memo(function (e) {
		var t, n;
		let { clan: a, userId: s, children: d, profileViewedAnalytics: _ } = e,
			f = (0, o.e7)([u.default], () => u.default.getUser(s), [s]),
			h = null !== (t = null == f ? void 0 : f.clan) && void 0 !== t ? t : a,
			[m, I] = (0, c.L_)(null !== (n = null == h ? void 0 : h.identityGuildId) && void 0 !== n ? n : null),
			T = i.useCallback(() => {
				I();
			}, [I]);
		return (0, r.jsx)(l.Popout, {
			renderPopout: (e) => {
				let { closePopout: t } = e;
				return (0, r.jsx)(E.Z, {
					isLoading: m,
					clan: h,
					onClose: t,
					profileViewedAnalytics: _
				});
			},
			position: 'top',
			animationPosition: 'top',
			spacing: 16,
			children: (e) =>
				(0, r.jsx)(l.Clickable, {
					className: p.clickable,
					tag: 'span',
					...e,
					onClick: (t) => {
						var n;
						null === (n = e.onClick) || void 0 === n || n.call(e, t), t.preventDefault(), t.stopPropagation();
					},
					onMouseEnter: () => {
						var t;
						T(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
					},
					children: d
				})
		});
	});
t.ZP = i.memo(function (e) {
	var t;
	let { clan: n, userId: i, contextGuildId: a, className: l, textVariant: c, textColor: _, badgeSize: E, disableGuildProfile: f = !1, inline: h = !0, profileViewedAnalytics: m } = e,
		g = (0, o.e7)([u.default], () => u.default.getUser(i), [i]),
		S = null !== (t = null == g ? void 0 : g.clan) && void 0 !== t ? t : n,
		{ tag: A, badge: N, guildId: v } = (0, d.vh)(S);
	return (0, d.p0)(i, a) && null != v
		? f
			? (0, r.jsx)(I, {
					guildId: v,
					clanTag: A,
					clanBadge: N,
					className: s()(p.noTooltip, l),
					textVariant: c,
					textColor: _,
					badgeSize: E,
					inline: h
				})
			: (0, r.jsx)(T, {
					clan: S,
					userId: i,
					profileViewedAnalytics: m,
					children: (0, r.jsx)(I, {
						guildId: v,
						clanTag: A,
						clanBadge: N,
						className: l,
						textVariant: c,
						textColor: _,
						badgeSize: E,
						inline: h
					})
				})
		: null;
});
