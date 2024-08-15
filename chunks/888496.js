t.d(s, {
	Dq: function () {
		return S;
	},
	hf: function () {
		return m;
	},
	li: function () {
		return N;
	},
	oP: function () {
		return I;
	},
	rJ: function () {
		return T;
	},
	rm: function () {
		return A;
	},
	ul: function () {
		return C;
	}
}),
	t(653041),
	t(47120);
var n = t(735250);
t(470079);
var a = t(120356),
	i = t.n(a),
	r = t(392711),
	o = t.n(r),
	l = t(481060),
	c = t(930153),
	d = t(275759),
	_ = t(856651),
	E = t(689938),
	u = t(83661);
function I(e) {
	var s;
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
		a = [],
		i = Number(null !== (s = e[_.PC.REDDIT_TOTAL_KARMA]) && void 0 !== s ? s : -1),
		r = '1' === e[_.PC.REDDIT_GOLD],
		o = '1' === e[_.PC.REDDIT_MOD];
	return (
		i > -1 &&
			a.push(
				(0, n.jsx)(
					O,
					{
						className: t,
						count: i,
						label: E.Z.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
					},
					_.PC.REDDIT_TOTAL_KARMA
				)
			),
		r &&
			a.push(
				(0, n.jsx)(
					p,
					{
						className: t,
						label: E.Z.Messages.CONNECTIONS_REDDIT_GOLD
					},
					_.PC.REDDIT_GOLD
				)
			),
		o &&
			a.push(
				(0, n.jsx)(
					p,
					{
						className: t,
						label: E.Z.Messages.CONNECTIONS_REDDIT_MOD
					},
					_.PC.REDDIT_MOD
				)
			),
		a
	);
}
function T(e) {
	var s, t;
	let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
		i = [],
		r = Number(null !== (s = e[_.PC.TWITTER_STATUSES_COUNT]) && void 0 !== s ? s : -1),
		o = Number(null !== (t = e[_.PC.TWITTER_FOLLOWERS_COUNT]) && void 0 !== t ? t : -1);
	return (
		r > -1 &&
			i.push(
				(0, n.jsx)(
					O,
					{
						className: a,
						count: r,
						label: E.Z.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
					},
					_.PC.TWITTER_STATUSES_COUNT
				)
			),
		o > -1 &&
			i.push(
				(0, n.jsx)(
					O,
					{
						className: a,
						count: o,
						label: E.Z.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
					},
					_.PC.TWITTER_FOLLOWERS_COUNT
				)
			),
		i
	);
}
function S(e) {
	var s, a, i;
	let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
		o = [],
		l = Number(null !== (s = e[_.PC.STEAM_GAME_COUNT]) && void 0 !== s ? s : -1),
		c = Number(null !== (a = e[_.PC.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== a ? a : -1),
		d = Number(null !== (i = e[_.PC.STEAM_ITEM_COUNT_TF2]) && void 0 !== i ? i : -1);
	return (
		l > -1 &&
			o.push(
				(0, n.jsx)(
					O,
					{
						className: r,
						count: l,
						label: E.Z.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
					},
					_.PC.STEAM_GAME_COUNT
				)
			),
		c > -1 &&
			o.push(
				(0, n.jsx)(
					h,
					{
						className: r,
						label: E.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({ count: c }),
						imageSrc: t(448238),
						imageAlt: E.Z.Messages.CONNECTIONS_STEAM_DOTA2
					},
					_.PC.STEAM_ITEM_COUNT_DOTA2
				)
			),
		d > -1 &&
			o.push(
				(0, n.jsx)(
					h,
					{
						className: r,
						label: E.Z.Messages.CONNECTIONS_STEAM_ITEMS.format({ count: d }),
						imageSrc: t(80730),
						imageAlt: E.Z.Messages.CONNECTIONS_STEAM_TF2
					},
					_.PC.STEAM_ITEM_COUNT_TF2
				)
			),
		o
	);
}
function N(e) {
	let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
		t = [];
	return (
		'1' === e[_.PC.PAYPAL_VERIFIED] &&
			t.push(
				(0, n.jsx)(
					p,
					{
						className: i()(s, u.paypalVerifiedTag),
						label: E.Z.Messages.CONNECTIONS_PAYPAL_VERIFIED
					},
					_.PC.PAYPAL_VERIFIED
				)
			),
		t
	);
}
function C(e) {
	var s;
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
		a = [],
		i = Number(null !== (s = e[_.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== s ? s : -1),
		r = '1' === e[_.PC.EBAY_TOP_RATED_SELLER];
	return (
		i > 0 &&
			a.push(
				(0, n.jsx)(
					O,
					{
						className: t,
						count: i,
						label: E.Z.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
						percent: !0
					},
					_.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE
				)
			),
		r &&
			a.push(
				(0, n.jsx)(
					p,
					{
						className: t,
						label: E.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
					},
					_.PC.EBAY_TOP_RATED_SELLER
				)
			),
		a
	);
}
function m(e) {
	var s, t, a;
	let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
		r = [],
		o = '1' === e[_.PC.TIKTOK_VERIFIED],
		l = Number(null !== (s = e[_.PC.TIKTOK_FOLLOWER_COUNT]) && void 0 !== s ? s : -1),
		c = Number(null !== (t = e[_.PC.TIKTOK_FOLLOWING_COUNT]) && void 0 !== t ? t : -1),
		d = Number(null !== (a = e[_.PC.TIKTOK_LIKES_COUNT]) && void 0 !== a ? a : -1);
	return (
		l > -1 &&
			r.push(
				(0, n.jsx)(
					O,
					{
						className: i,
						count: l,
						label: E.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
					},
					_.PC.TIKTOK_FOLLOWER_COUNT
				)
			),
		c > -1 &&
			r.push(
				(0, n.jsx)(
					O,
					{
						className: i,
						count: c,
						label: E.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
					},
					_.PC.TIKTOK_FOLLOWING_COUNT
				)
			),
		d > -1 &&
			r.push(
				(0, n.jsx)(
					O,
					{
						className: i,
						count: d,
						label: E.Z.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
					},
					_.PC.TIKTOK_LIKES_COUNT
				)
			),
		o &&
			r.push(
				(0, n.jsx)(
					p,
					{
						className: i,
						label: E.Z.Messages.CONNECTIONS_TIKTOK_VERIFIED
					},
					_.PC.TIKTOK_VERIFIED
				)
			),
		r
	);
}
function A(e) {
	let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
		t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
		a = [],
		i = Object.keys(e.metadata);
	if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === i.length) return a;
	for (let r of o().sortBy(i, (s) => {
		var t, n;
		return null === (n = e.application_metadata) || void 0 === n
			? void 0
			: null === (t = n[s]) || void 0 === t
				? void 0
				: t.name;
	})) {
		let i = e.application_metadata[r];
		if (null == i) continue;
		let o = e.metadata[r];
		try {
			switch (i.type) {
				case _.xn.BOOLEAN_EQUAL:
				case _.xn.BOOLEAN_NOT_EQUAL:
					((i.type === _.xn.BOOLEAN_EQUAL && '1' === o) || (i.type === _.xn.BOOLEAN_NOT_EQUAL && '1' !== o)) &&
						a.push(
							(0, n.jsx)(
								p,
								{
									className: s,
									label: i.name
								},
								i.key
							)
						);
					break;
				case _.xn.DATETIME_GREATER_THAN_EQUAL:
				case _.xn.DATETIME_LESS_THAN_EQUAL:
					a.push(
						(0, n.jsx)(
							g,
							{
								className: s,
								date: o,
								locale: t,
								label: i.name
							},
							i.key
						)
					);
					break;
				case _.xn.INTEGER_EQUAL:
				case _.xn.INTEGER_NOT_EQUAL:
				case _.xn.INTEGER_GREATER_THAN_EQUAL:
				case _.xn.INTEGER_LESS_THAN_EQUAL:
					a.push(
						(0, n.jsx)(
							O,
							{
								className: s,
								count: Number(o),
								label: i.name
							},
							i.key
						)
					);
			}
		} catch (e) {}
	}
	return a;
}
function O(e) {
	let s,
		{ count: t, label: a, className: r, percent: o } = e,
		d = (0, c.$U)(t) + (o ? '%' : '');
	return (
		(s =
			'string' == typeof a
				? E.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
						name: a,
						value: d
					})
				: a.format({ value: d })),
		(0, n.jsx)(l.Text, {
			className: i()(u.connectedAccountVanityMetadata, r),
			variant: 'text-xs/normal',
			color: 'interactive-active',
			children: s
		})
	);
}
function g(e) {
	let { date: s, locale: t, label: a, className: r } = e;
	return (0, n.jsx)(l.Text, {
		className: i()(u.connectedAccountVanityMetadata, r),
		variant: 'text-xs/normal',
		color: 'interactive-active',
		children: E.Z.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
			value: (0, d.FI)(s, t),
			name: a
		})
	});
}
function h(e) {
	let { label: s, imageSrc: t, imageAlt: a, className: r } = e;
	return (0, n.jsxs)('div', {
		className: i()(u.connectedAccountVanityMetadata, u.connectedAccountVanityMetadataItem, r),
		children: [
			(0, n.jsx)(l.Tooltip, {
				text: a,
				children: (e) =>
					(0, n.jsx)('img', {
						...e,
						src: t,
						alt: a,
						className: u.connectedAccountVanityMetadataItemIcon
					})
			}),
			(0, n.jsx)(l.Text, {
				variant: 'text-xs/normal',
				color: 'interactive-active',
				children: s
			})
		]
	});
}
function p(e) {
	let { label: s, className: t } = e;
	return (0, n.jsx)(l.Text, {
		variant: 'text-xs/semibold',
		color: 'interactive-active',
		className: i()(u.connectedAccountVanityMetadata, u.connectedAccountVanityMetadataTag, t),
		children: s
	});
}
