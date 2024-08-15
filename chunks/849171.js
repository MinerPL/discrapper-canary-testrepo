n.d(t, {
	OV: function () {
		return D;
	},
	ZP: function () {
		return U;
	}
}),
	n(47120);
var i,
	a,
	s = n(735250),
	l = n(470079),
	r = n(120356),
	o = n.n(r),
	c = n(442837),
	u = n(481060),
	d = n(2052),
	h = n(317381),
	m = n(638880),
	p = n(613611),
	_ = n(527805),
	f = n(716600),
	E = n(778569),
	g = n(563218),
	C = n(318891),
	I = n(884338),
	x = n(719296),
	T = n(958185),
	N = n(100527),
	v = n(906732),
	S = n(890280),
	Z = n(835473),
	A = n(522474),
	M = n(314897),
	b = n(819640),
	R = n(594174),
	j = n(823379),
	L = n(5192),
	P = n(689938),
	O = n(305268);
((a = i || (i = {}))[(a.SMALL = 0)] = 'SMALL'), (a[(a.MEDIUM = 1)] = 'MEDIUM'), (a[(a.LARGE = 2)] = 'LARGE');
let y = ['embedded_background'];
function D(e) {
	let { avatarSize: t, guildId: n, channelId: i, users: a } = e,
		l = null != t ? t : u.AvatarSizes.SIZE_32,
		r = (0, u.getAvatarSize)(l);
	return (0, s.jsx)(I.Z, {
		size: r,
		guildId: n,
		users: a,
		max: 4,
		renderUser: (e) => {
			if (null == e) return null;
			let t = L.ZP.getName(n, i, e);
			return (0, s.jsx)(
				u.TooltipContainer,
				{
					text: t,
					color: u.TooltipColors.GREY,
					children: (0, s.jsx)(
						'img',
						{
							src: e.getAvatarURL(n, r),
							alt: t,
							className: O.avatar
						},
						e.id
					)
				},
				e.id
			);
		}
	});
}
function k(e) {
	var t, n, i, a;
	let { participants: r, application: f, channel: E, width: g } = e;
	let C = (i = g) > 400 ? 2 : i > 300 ? 1 : 0;
	let [I] =
			(a = g) > 400 ? [u.AvatarSizes.SIZE_56, 56] : a > 300 ? [u.AvatarSizes.SIZE_32, 32] : [u.AvatarSizes.SIZE_24, 24],
		x = (0, c.Wu)([R.default, M.default], () =>
			Array.from(r)
				.map((e) => ((0, p.J)(e, M.default) ? null : R.default.getUser(e.userId)))
				.filter(j.lm)
		),
		T = (0, c.e7)([h.ZP], () => h.ZP.getEmbeddedActivitiesForChannel(E.id).find((e) => e.applicationId === f.id)),
		{ analyticsLocations: N } = (0, v.ZP)(),
		Z = (0, d.O)(),
		A = L.ZP.getName(E.getGuildId(), E.id, null == x ? void 0 : x[0]),
		b =
			(0, _.s5)({
				userId: null === (t = R.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
				channelId: E.id,
				application: f
			}) === _.Fw.CAN_JOIN,
		y = null !== (n = E.getGuildId()) && void 0 !== n ? n : void 0,
		k = l.useId(),
		U = E.id,
		w = f.id,
		{ submitting: B } = (0, S.Z)({
			applicationId: w,
			channelId: U,
			launchingComponentId: k
		});
	return (0, s.jsxs)('div', {
		className: O.splash,
		children: [
			(0, s.jsx)(D, {
				avatarSize: I,
				guildId: y,
				channelId: E.id,
				users: x
			}),
			(0, s.jsx)(u.Text, {
				className: o()(O.subheader, {
					[O.small]: 0 === C,
					[O.medium]: 1 === C
				}),
				variant: 'text-sm/normal',
				children:
					x.length > 1
						? P.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
								username: A,
								count: x.length - 1
							})
						: P.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({ username: A })
			}),
			(0, s.jsx)(u.Text, {
				className: o()(O.header, {
					[O.small]: 0 === C,
					[O.medium]: 1 === C
				}),
				variant: 'text-sm/normal',
				children: f.name
			}),
			(0, s.jsx)('div', {
				className: O.buttons,
				children: b
					? (0, s.jsx)(u.Button, {
							onClick: function (e) {
								if ((e.stopPropagation(), null != T))
									(0, m.Z)({
										applicationId: T.applicationId,
										activityChannelId: E.id,
										locationObject: Z.location,
										analyticsLocations: N,
										componentId: k
									});
							},
							submitting: B,
							size: (function (e) {
								switch (e) {
									case 2:
										return u.Button.Sizes.LARGE;
									case 1:
										return u.Button.Sizes.MEDIUM;
									case 0:
										return u.Button.Sizes.SMALL;
								}
							})(C),
							className: O.button,
							color: u.Button.Colors.PRIMARY,
							children: P.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
						})
					: null
			})
		]
	});
}
function U(e) {
	let { participant: t, width: n, selected: i, interactible: a, channel: r } = e,
		{ analyticsLocations: o } = (0, v.ZP)(N.Z.ACTIVITY_TILE),
		{ id: u } = t,
		d = (0, f.Z)(),
		h = (null == d ? void 0 : d.channelId) === r.id && d.applicationId === u,
		[m] = (0, Z.Z)([u]),
		{ url: p } = (0, E.Z)({
			applicationId: u,
			names: y,
			size: 1024
		}),
		_ = !i && h,
		I = !h,
		S = !h && !i,
		M = (0, c.e7)([b.Z, A.Z], () =>
			(0, T.Z)({
				LayerStore: b.Z,
				PopoutWindowStore: A.Z
			})
		);
	return (
		l.useEffect(() => {
			if (_ && null != d && !M) {
				let e = (0, x.Z)(d.channelId, d.applicationId);
				(0, C.jy)(e);
			}
		}, [_, d, M]),
		(0, s.jsx)(v.Gt, {
			value: o,
			children: (0, s.jsx)('div', {
				className: O.container,
				children: (0, s.jsxs)(s.Fragment, {
					children: [
						_ &&
							(0, s.jsx)(g.Z, {
								className: O.iframe,
								embedId: (0, x.Z)(r.id, u)
							}),
						I && null != m && null != p && '' !== p
							? (0, s.jsx)('img', {
									className: O.splashImage,
									alt: m.name,
									src: p
								})
							: null,
						S &&
							null != m &&
							(0, s.jsx)(k, {
								width: n,
								channel: r,
								participants: t.participants,
								application: m
							}),
						a || I ? null : (0, s.jsx)('div', { className: O.clickShield })
					]
				})
			})
		})
	);
}
