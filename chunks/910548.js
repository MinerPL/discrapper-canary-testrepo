n.d(t, {
	ZP: function () {
		return G;
	}
}),
	n(47120);
var i,
	a,
	s,
	r,
	l = n(735250),
	o = n(470079),
	c = n(120356),
	u = n.n(c),
	d = n(887024),
	_ = n(772848),
	E = n(468194),
	I = n(477690),
	m = n(481060),
	T = n(230711),
	h = n(745510),
	N = n(549006),
	f = n(64078),
	C = n(29270),
	p = n(709586),
	g = n(267642),
	S = n(739566),
	A = n(834129),
	R = n(981631),
	x = n(689938),
	O = n(407339);
((s = i || (i = {})).ENTER = 'enter'),
	(s.CONFETTI = 'confetti'),
	(s.LEAF_PEEL = 'leaf_peel'),
	(s.LEAF_FALL = 'leaf_fall'),
	(s.EXIT = 'exit');
let M = {
	enter: {
		BEG: 0,
		END: 22
	},
	confetti: {
		BEG: 23,
		END: 119
	},
	leaf_peel: {
		BEG: 120,
		END: 160
	},
	leaf_fall: {
		BEG: 161,
		END: 163
	},
	exit: {
		BEG: 164,
		END: 200
	}
};
((r = a || (a = {})).TOP_LEFT = 'TOP_LEFT'),
	(r.TOP_RIGHT = 'TOP_RIGHT'),
	(r.BOTTOM_LEFT = 'BOTTOM_LEFT'),
	(r.BOTTOM_RIGHT = 'BOTTOM_RIGHT');
let v = ['TOP_LEFT', 'TOP_RIGHT'],
	L = (0, E.Mg)(I.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
	Z = {
		leafPosition: {
			x: 85,
			y: 125
		},
		leafRotationDirection: 1
	},
	P = Object.freeze({
		TOP_LEFT: {
			getConfettiPosition: (e) => ({
				x: e - 11,
				y: e - 125
			}),
			confettiVelocityDirection: {
				x: 1,
				y: 1
			},
			leafPosition: {
				x: 100,
				y: 144
			},
			leafRotationDirection: 1
		},
		TOP_RIGHT: {
			getConfettiPosition: (e) => ({
				x: 11,
				y: e - 125
			}),
			confettiVelocityDirection: {
				x: -1,
				y: 1
			},
			leafPosition: {
				x: 90,
				y: 144
			},
			leafRotationDirection: -1
		},
		BOTTOM_LEFT: {
			...Z,
			getConfettiPosition: (e) => ({
				x: e - 11,
				y: 125
			}),
			confettiVelocityDirection: {
				x: 1,
				y: -1
			}
		},
		BOTTOM_RIGHT: {
			...Z,
			getConfettiPosition: (e) => ({
				x: 11,
				y: 125
			}),
			confettiVelocityDirection: {
				x: -1,
				y: -1
			}
		}
	}),
	b = 'falling-leaf',
	D = ['#61D5B2'],
	j = n(303893),
	U = n(313226),
	y = [j, U];
function B() {
	return n
		.e('60005')
		.then(n.t.bind(n, 931152, 19))
		.then((e) => {
			let { default: t } = e;
			return t;
		});
}
function k(e) {
	let { onAnimationComplete: t, onClick: n, position: i, size: s } = e,
		r = o.useRef(null),
		[c, E] = o.useState(null),
		[I] = o.useState(
			null != i
				? i
				: (function () {
						switch (Math.floor(Math.random() * Object.keys(a).length)) {
							case 0:
								return 'TOP_LEFT';
							case 2:
								return 'TOP_RIGHT';
							case 3:
								return 'BOTTOM_LEFT';
							default:
								return 'BOTTOM_RIGHT';
						}
					})()
		),
		{ createMultipleConfettiAt: T, confettiCanvas: N } = o.useContext(h.h),
		[f, C] = o.useState(null),
		p = (0, d.uR)(N, f),
		g = (function (e, t) {
			if (null == e) return 'enter';
			switch (e) {
				case 'enter':
					return 'confetti';
				case 'confetti':
					if (v.includes(t)) return 'leaf_peel';
					return 'exit';
				case 'leaf_peel':
					return 'leaf_fall';
				case 'leaf_fall':
					return 'exit';
				case 'exit':
					return 'enter';
			}
		})(c, I),
		S = v.includes(I),
		A = S && 'exit' === c,
		R = o.useCallback((e) => {
			E(e);
		}, []),
		x = o.useCallback(() => {
			'exit' === c && (null == t || t());
		}, [t, c]),
		Z = o.useCallback((e) => {
			r.current = e;
		}, []);
	return (
		o.useEffect(() => {
			if ('confetti' === c) {
				let { confettiVelocityDirection: e } = P[I],
					t = (function (e, t) {
						let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : L,
							i = null == e ? void 0 : e.getBoundingClientRect();
						if (null == i)
							return {
								x: 0,
								y: 0
							};
						let a = P[t].getConfettiPosition(n);
						return {
							x: i.left + a.x,
							y: i.top + a.y
						};
					})(r.current, I, s);
				T(t.x, t.y, {
					velocity: {
						type: 'static-random',
						minValue: {
							x: 10 * e.x,
							y: 80 * e.y
						},
						maxValue: {
							x: 80 * e.x,
							y: 180 * e.y
						}
					}
				});
			}
		}, [T, I, c, s]),
		o.useEffect(() => {
			if (S && 'leaf_fall' === c) {
				let e = P[I].leafRotationDirection;
				p.createConfetti(
					{
						id: ''.concat(b, '-').concat((0, _.Z)()),
						position: {
							type: 'static',
							value: (function (e, t) {
								let n = null == e ? void 0 : e.getBoundingClientRect();
								if (null == n)
									return {
										x: 0,
										y: 0
									};
								let i = P[t];
								return {
									x: n.left + i.leafPosition.x,
									y: n.top + i.leafPosition.y
								};
							})(r.current, I)
						},
						size: {
							type: 'static',
							value: 45
						},
						rotation: {
							type: 'linear-random',
							minValue: {
								x: 0,
								y: 0,
								z: 0
							},
							maxValue: {
								x: 0,
								y: 0,
								z: 0
							},
							minAddValue: {
								x: 0,
								y: 0,
								z: 8 * e
							},
							maxAddValue: {
								x: 0,
								y: 0,
								z: 12 * e
							}
						}
					},
					{ sprite: 'TOP_LEFT' === I ? j : U }
				);
			}
		}, [S, p, I, c]),
		(0, l.jsxs)(l.Fragment, {
			children: [
				(0, l.jsx)(d.Ji, {
					ref: C,
					sprites: y,
					colors: D,
					spriteWidth: 45,
					spriteHeight: 45
				}),
				(0, l.jsx)(m.Clickable, {
					onClick: n,
					className: u()(O.easterEggAnimationClickTarget, {
						[O.easterEggAnimationClickTargetTopLeft]: 'TOP_LEFT' === I,
						[O.easterEggAnimationClickTargetTopRight]: 'TOP_RIGHT' === I,
						[O.easterEggAnimationClickTargetBottomLeft]: 'BOTTOM_LEFT' === I,
						[O.easterEggAnimationClickTargetBottomRight]: 'BOTTOM_RIGHT' === I
					}),
					children: (0, l.jsx)(m.SequencedLottieAnimation, {
						animationRef: Z,
						className: u()(O.easterEggAnimation, { [O.easterEggAnimationHideLeaf]: A }),
						nextScene: g,
						sceneSegments: M,
						onScenePlay: R,
						onSceneComplete: x,
						importData: B,
						pauseWhileUnfocused: !1
					})
				})
			]
		})
	);
}
function G(e) {
	let t,
		{ message: n, compact: i, guild: a, usernameHook: s, onClickMessage: r } = e,
		c = (function (e) {
			switch (e.type) {
				case R.uaV.GUILD_BOOST_TIER_1:
					return R.Eu4.TIER_1;
				case R.uaV.GUILD_BOOST_TIER_2:
					return R.Eu4.TIER_2;
				case R.uaV.GUILD_BOOST_TIER_3:
					return R.Eu4.TIER_3;
			}
			return null;
		})(n),
		u = (0, C.Z)(n),
		{ createMultipleConfettiAt: d, addClickListener: _ } = o.useContext(h.h),
		[E, I] = o.useState(!1),
		M = o.useRef(null),
		{ reducedMotion: v } = o.useContext(m.AccessibilityPreferencesContext),
		L = (0, S.ZH)(n),
		Z = L.nick,
		P = s(L);
	t =
		null == c || null == a
			? u > 1
				? x.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_HOOK.format({
						username: Z,
						usernameHook: P,
						numSubscriptions: u
					})
				: x.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_HOOK.format({
						username: Z,
						usernameHook: P
					})
			: u > 1
				? x.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_ACHIEVED_TIER_HOOK.format({
						username: Z,
						usernameHook: P,
						numSubscriptions: u,
						guildName: a.name,
						newTierName: (0, g.nW)(c)
					})
				: x.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_ACHIEVED_TIER_HOOK.format({
						username: Z,
						usernameHook: P,
						guildName: a.name,
						newTierName: (0, g.nW)(c)
					});
	let D = o.useCallback(() => {
			if (!v.enabled)
				if (E || 0 !== Math.floor(50 * Math.random())) {
					var e;
					let t = null === (e = M.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
					if (null == t) return;
					d(t.left + t.width / 2, t.top + t.height / 2);
				} else I(!0);
		}, [d, v, E]),
		j = o.useCallback(() => {
			I(!1);
		}, []),
		U = o.useCallback(() => {
			(0, f.AI)({ settingsVisible: !0 }), T.Z.open(R.oAB.POGGERMODE), I(!1);
		}, []),
		y = o.useCallback(
			(e, t) => {
				(null == t ? void 0 : t.id.startsWith(b)) && U();
			},
			[U]
		);
	o.useEffect(() => _(y));
	let B = (0, l.jsx)(m.Clickable, {
		className: O.iconWrapper,
		innerRef: M,
		onClick: r,
		children: (0, l.jsx)(p.Z, {
			className: O.icon,
			onMouseEnter: D
		})
	});
	return (0, l.jsxs)(A.Z, {
		iconNode: B,
		timestamp: n.timestamp,
		compact: i,
		children: [
			(0, l.jsx)('div', {
				onClick: r,
				className: O.message,
				children: t
			}),
			E
				? (0, l.jsx)(N.ZP, {
						children: (0, l.jsx)('div', {
							className: O.cannonWrapper,
							children: (0, l.jsx)(k, {
								onAnimationComplete: j,
								onClick: U
							})
						})
					})
				: null
		]
	});
}
