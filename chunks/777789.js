l.d(s, {
	Z: function () {
		return I;
	}
});
var n = l(735250),
	t = l(470079),
	r = l(120356),
	a = l.n(r),
	i = l(565138),
	o = l(297700),
	d = l(471885),
	u = l(424625),
	c = l(267642),
	C = l(165191);
class m extends t.PureComponent {
	render() {
		let { tier: e } = this.props;
		return (0, n.jsxs)('div', {
			className: C.tierPill,
			children: [
				(0, n.jsx)(o.Z, {
					className: C.tierPillStar,
					children: (0, n.jsx)(d.Z, {
						tier: e,
						className: C.tierPillGem
					})
				}),
				(0, c.nW)(e)
			]
		});
	}
}
let S = (e) => {
	let { subscriptionChange: s, guild: l } = e;
	if (0 === s) return null;
	let t = Math.max(l.premiumSubscriberCount + s, 0),
		r = (0, c.rF)(t, l.id),
		a = r - (0, c.rF)(l.premiumSubscriberCount, l.id);
	return 0 === a
		? null
		: (0, n.jsxs)(n.Fragment, {
				children: [(0, n.jsx)(u.Z, { className: a > 0 ? C.levelUpIcon : C.levelDownIcon }), (0, n.jsx)(m, { tier: r })]
			});
};
class I extends t.PureComponent {
	render() {
		let { guild: e, className: s, subscriptionChange: l } = this.props;
		return (0, n.jsxs)('div', {
			className: a()(C.subscription, s),
			children: [
				(0, n.jsx)(i.Z, {
					guild: e,
					size: i.Z.Sizes.LARGE
				}),
				(0, n.jsxs)('div', {
					className: C.subscriptionInfo,
					children: [
						(0, n.jsx)('div', {
							className: C.guildName,
							children: e.name
						}),
						(0, n.jsxs)('div', {
							className: C.tierInfo,
							children: [
								(0, n.jsx)(m, { tier: e.premiumTier }),
								(0, n.jsx)(S, {
									guild: e,
									subscriptionChange: null != l ? l : 0
								})
							]
						})
					]
				})
			]
		});
	}
}
