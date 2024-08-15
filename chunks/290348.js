t.d(n, {
	B7: function () {
		return ee;
	},
	Ek: function () {
		return x;
	},
	F2: function () {
		return Y;
	},
	GM: function () {
		return J;
	},
	GP: function () {
		return G;
	},
	H9: function () {
		return q;
	},
	Lo: function () {
		return z;
	},
	PK: function () {
		return U;
	},
	R7: function () {
		return F;
	},
	TT: function () {
		return V;
	},
	UE: function () {
		return w;
	},
	XZ: function () {
		return W;
	},
	Xo: function () {
		return $;
	},
	_T: function () {
		return b;
	},
	d9: function () {
		return Z;
	},
	mR: function () {
		return D;
	},
	p9: function () {
		return P;
	},
	qs: function () {
		return y;
	},
	rU: function () {
		return K;
	}
}),
	t(47120);
var r = t(470079),
	i = t(512722),
	o = t.n(i),
	l = t(392711),
	u = t(772848),
	a = t(866442),
	s = t(731965),
	c = t(442837),
	d = t(80932),
	_ = t(749210),
	f = t(339085),
	E = t(73346),
	I = t(817460),
	g = t(423117),
	p = t(584825),
	S = t(289393),
	C = t(790285),
	T = t(303737),
	m = t(971792),
	A = t(22902),
	N = t(403474),
	h = t(944537),
	v = t(293810),
	L = t(981631),
	R = t(474936);
function M(e, n, t) {
	let i = (0, h.n)((e) => e.setListing),
		o = r.useCallback(
			(r) => {
				i(e, (e) => {
					var i;
					let o = null !== (i = null == e ? void 0 : e[n]) && void 0 !== i ? i : t;
					return Object.assign({}, e, { [n]: 'function' == typeof r ? r(o) : r });
				});
			},
			[i, e, n, t]
		),
		l = (0, h.n)((t) => {
			var r;
			return null === (r = t.listings[e]) || void 0 === r ? void 0 : r[n];
		});
	return [void 0 !== l ? l : t, o];
}
function O(e, n) {
	let t = (0, c.e7)([S.Z], () => S.Z.getSubscriptionListing(e));
	return r.useMemo(() => n(t), [t]);
}
function b(e) {
	let n = O(e, (e) => {
		var n;
		return null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : '';
	});
	return M(e, 'name', n);
}
function D(e) {
	let n = O(e, (e) => {
		var n;
		return null == e ? void 0 : null === (n = e.subscription_plans[0]) || void 0 === n ? void 0 : n.price;
	});
	return M(e, 'priceTier', n);
}
function U(e) {
	let n = O(e, (e) => {
		var n;
		return null !== (n = null == e ? void 0 : e.description) && void 0 !== n ? n : '';
	});
	return M(e, 'description', n);
}
function Z(e, n) {
	let t = O(e, (e) => {
		if ((null == e ? void 0 : e.image_asset) != null) return (0, E._W)(e.application_id, e.image_asset, n);
	});
	return M(e, 'image', t);
}
function P(e, n) {
	let t = (0, m.Z)(n, e);
	return M(
		e,
		'roleIcon',
		r.useMemo(() => {
			var e, n;
			return {
				icon: null !== (e = null == t ? void 0 : t.icon) && void 0 !== e ? e : void 0,
				unicodeEmoji: null !== (n = null == t ? void 0 : t.unicodeEmoji) && void 0 !== n ? n : void 0
			};
		}, [t])
	);
}
function y(e, n) {
	let t = (0, m.Z)(n, e),
		i = (0, h.n)((n) => {
			var t;
			return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleColor;
		}),
		o = (0, h.n)((n) => {
			var t;
			return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleIcon;
		});
	return r.useMemo(() => {
		let e = { ...(null != t ? t : N.k) };
		if (void 0 !== o) {
			var n, r;
			(e.icon = null !== (n = o.icon) && void 0 !== n ? n : ''), (e.unicodeEmoji = null !== (r = o.unicodeEmoji) && void 0 !== r ? r : '');
		}
		return void 0 !== i && ((e.color = i), (e.colorString = (0, a.Rf)(i))), e;
	}, [t, o, i]);
}
function x(e, n) {
	let t = (0, m.Z)(n, e);
	return M(
		e,
		'roleColor',
		r.useMemo(() => {
			var e;
			return null !== (e = null == t ? void 0 : t.color) && void 0 !== e ? e : L.p6O;
		}, [t])
	);
}
function G(e, n) {
	let t = (0, m.Z)(n, e);
	return M(
		e,
		'channelAccessFormat',
		r.useMemo(() => (null == t ? h.I.SOME_CHANNELS_ACCESS : (0, C.MT)(t) ? h.I.ALL_CHANNELS_ACCESS : h.I.SOME_CHANNELS_ACCESS), [t])
	);
}
let j = [];
function w(e) {
	let n = O(e, (e) => (null == e ? j : e.role_benefits.benefits.filter(I.rC)));
	return M(e, 'channelBenefits', n);
}
let B = [];
function F(e) {
	let n = O(e, (e) => (null == e ? B : e.role_benefits.benefits.filter(I.lL)));
	return M(e, 'intangibleBenefits', n);
}
let k = new Set();
function H(e, n) {
	return 0 === e.length
		? k
		: new Set(
				e
					.filter((e) => e.roles.includes(n))
					.map((e) => {
						let { id: n } = e;
						return n;
					})
			);
}
function W(e, n) {
	let t = (0, m.Z)(n, e),
		i = (0, c.Wu)([f.ZP], () => f.ZP.getGuildEmoji(n), [n]);
	return M(
		e,
		'tierEmojiIds',
		r.useMemo(() => (null == t ? k : H(i, t.id)), [i, t])
	);
}
function V(e) {
	var n;
	let t = (0, p.oC)(e),
		{ selectedOption: r } = (0, A.Z)(null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n ? n : null);
	return M(e, 'trialInterval', null != r ? r : null);
}
function Y(e) {
	var n;
	let t = (0, p.oC)(e);
	return M(e, 'trialLimit', null !== (n = null == t ? void 0 : t.max_num_active_trial_users) && void 0 !== n ? n : null);
}
function K(e) {
	return (0, h.n)((n) => void 0 !== n.listings[e]);
}
function z(e) {
	return (0, h.n)((n) => {
		for (let t of e) if (void 0 !== n.listings[t]) return !0;
		return !1;
	});
}
function q(e) {
	let n = O(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
		[t] = M(e, 'priceTier', void 0);
	return [
		r.useMemo(() => {
			var e, r, i, o, l;
			return {
				price: null !== (e = null != t ? t : null == n ? void 0 : n.price) && void 0 !== e ? e : 0,
				currency: null !== (r = null == n ? void 0 : n.currency) && void 0 !== r ? r : L.pKx.USD,
				interval: null !== (i = null == n ? void 0 : n.interval) && void 0 !== i ? i : R.rV.MONTH,
				interval_count: null !== (o = null == n ? void 0 : n.interval_count) && void 0 !== o ? o : 1,
				id: null !== (l = null == n ? void 0 : n.id) && void 0 !== l ? l : ''
			};
		}, [n, t])
	];
}
function J(e) {
	var n;
	(n = e),
		(0, s.j)(() => {
			h.n.setState((e) => ({
				listings: {
					...e.listings,
					[n]: e.listings.nonexistantEditStateId
				}
			}));
		});
}
async function X(e) {
	let { guildId: n, editStateId: t } = e,
		r = S.Z.getSubscriptionListing(t);
	o()(null != r, 'listing doesnt exist');
	let i = r.role_id,
		u = r.id,
		a = h.n.getState().listings[t];
	o()(null != a, 'edit state does not exist');
	let { roleColor: s, roleIcon: c, trialLimit: E, trialInterval: I, tierEmojiIds: p } = a;
	(void 0 !== s || void 0 !== c) &&
		(await _.Z.updateRole(n, i, {
			color: s,
			icon: null == c ? void 0 : c.icon,
			unicodeEmoji: null == c ? void 0 : c.unicodeEmoji
		}));
	let C = S.Z.getSubscriptionTrial(u);
	if (
		((null != E || null != I || (null != C && null == I)) &&
			(await g.I1(n, u, {
				trial: I,
				max_num_active_trial_users: E
			})),
		void 0 !== p)
	) {
		let e = H(f.ZP.getGuildEmoji(n), i),
			t = (0, l.difference)([...p], [...e]),
			r = (0, l.difference)([...e], [...p]),
			o = t
				.map((e) => f.ZP.getCustomEmojiById(e))
				.map((e) => {
					if (null != e)
						return (0, d.dv)({
							guildId: n,
							emojiId: e.id,
							roles: [...e.roles, i]
						});
				}),
			u = r
				.map((e) => f.ZP.getCustomEmojiById(e))
				.map((e) => {
					if (null == e) return;
					let t = e.roles.filter((e) => e !== i);
					return t.length > 0
						? (0, d.dv)({
								guildId: n,
								emojiId: e.id,
								roles: t
							})
						: (0, d.RE)(n, e.id);
				});
		await Promise.all([...o, ...u]);
	}
}
async function Q(e) {
	let { guildId: n, editStateId: t, groupListingId: r, onBeforeDispatchNewListing: i } = e,
		l = h.n.getState().listings[t];
	o()(null != l, 'edit state does not exist');
	let { name: u, description: a, channelBenefits: s, intangibleBenefits: c, priceTier: d, image: _, channelAccessFormat: f } = l;
	o()(null != u, 'no name provided'), o()(null != a, 'no description provided'), o()(null != d, 'no priceTier provided'), o()(null != _, 'no image provided');
	let E = f === h.I.ALL_CHANNELS_ACCESS,
		I = r;
	null == I && (I = (await g.uw(n, {})).id), null != s && s.length > 0 && (await (0, T.r4)(n, s));
	let p = [...(null != s ? s : []), ...(null != c ? c : [])],
		S = (0, T.yL)(t, n);
	return g.dA({
		guildId: n,
		groupListingId: I,
		data: {
			can_access_all_channels: E,
			image: _,
			name: u,
			description: a,
			benefits: p,
			priceTier: d
		},
		analyticsContext: S,
		onBeforeDispatchNewListing: i
	});
}
function $() {
	let [e, n] = r.useState(!1),
		[t, i] = r.useState();
	return {
		loading: e,
		error: t,
		handleCreateOrUpdateFromEditState: r.useCallback(async (e) => {
			let { guildId: t, editStateId: r, groupListingId: u, onBeforeDispatchNewListing: a, onAfterDispatchNewListing: c } = e,
				d = r,
				_ = S.Z.getSubscriptionListing(d);
			try {
				if ((n(!0), i(void 0), null != _))
					o()(null != u, 'groupListingId is null'),
						await (function (e) {
							var n;
							let { guildId: t, editStateId: r, groupListingId: i } = e,
								u = S.Z.getSubscriptionListing(r);
							o()(null != u, 'listing doesnt exist');
							let a = h.n.getState().listings[r];
							o()(null != a, 'edit state does not exist');
							let { name: s, description: c, channelBenefits: d, intangibleBenefits: _, priceTier: f, image: E, channelAccessFormat: p } = a,
								C = {};
							if ((s !== u.name && (C.name = s), c !== u.description && (C.description = c), f !== (null === (n = u.subscription_plans[0]) || void 0 === n ? void 0 : n.price) && (C.priceTier = f), null != E && (C.image = E), null != p && (C.can_access_all_channels = p === h.I.ALL_CHANNELS_ACCESS), null != d || null != _)) {
								let e = u.role_benefits.benefits.filter(I.rC),
									n = u.role_benefits.benefits.filter(I.lL),
									t = [...(null != d ? d : e), ...(null != _ ? _ : n)];
								C.benefits = t;
							}
							return (0, l.isEmpty)(C)
								? u
								: g.O0({
										guildId: t,
										groupListingId: i,
										listingId: r,
										data: C
									});
						})({
							guildId: t,
							editStateId: d,
							groupListingId: u
						});
				else {
					var f, E;
					let e = await Q({
						guildId: t,
						editStateId: d,
						groupListingId: u,
						onBeforeDispatchNewListing: a
					});
					(d = e.id),
						(f = r),
						(E = d),
						(0, s.j)(() => {
							h.n.setState((e) => ({
								listings: {
									...e.listings,
									[E]: e.listings[f],
									[f]: void 0
								}
							}));
						}),
						null == c || c(e);
				}
				return (
					await X({
						guildId: t,
						editStateId: d
					}),
					J(d),
					!0
				);
			} catch (e) {
				if (!('getAnyErrorMessage' in e)) throw e;
				i(e);
			} finally {
				n(!1);
			}
		}, [])
	};
}
function ee(e, n) {
	let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
		i = (0, p._k)(e, t),
		o = (0, h.n)((e) => e.editStateIdsForGroup[n]),
		l = (0, h.n)((e) => e.setEditStateIdsForGroup),
		a = (0, h.n)((e) => e.setListing),
		s = r.useMemo(
			() => [
				...i.map((e) => {
					let { id: n } = e;
					return n;
				}),
				...(null != o ? o : [])
			],
			[o, i]
		),
		c = r.useCallback(() => {
			let e = (0, u.Z)();
			l(n, (n) => [...(null != n ? n : []), e]);
		}, [n, l]),
		d = r.useCallback(
			(e) => {
				let t = (0, u.Z)();
				return (
					l(n, (e) => [...(null != e ? e : []), t]),
					e.listings.forEach((n) => {
						a(t, () => ({
							name: n.name,
							description: n.description,
							priceTier: n.price_tier,
							image: n.image,
							intangibleBenefits: n.additional_perks,
							channelBenefits: n.channels.map((e) => ({
								ref_id: e.id,
								ref_type: v.Qs.CHANNEL,
								description: e.description,
								name: e.name,
								emoji_name: e.emoji_name
							})),
							roleIcon: {
								unicodeEmoji: void 0,
								icon: n.image
							},
							roleColor: n.role_color,
							usedTemplate: e.category
						}));
					}),
					t
				);
			},
			[n, l, a]
		);
	return {
		editStateIds: s,
		addNewEditStateId: c,
		addNewEditStateFromTemplate: d,
		removeEditStateId: r.useCallback(
			(e) => {
				l(n, (n) => (null != n ? n : []).filter((n) => n !== e));
			},
			[n, l]
		)
	};
}
