n.d(t, {
	D: function () {
		return N;
	},
	Z: function () {
		return f;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(338545),
	r = n(442837),
	l = n(686777),
	o = n(113434),
	c = n(569984),
	u = n(497505),
	d = n(602667),
	_ = n(87894),
	E = n(372113),
	I = n(206044),
	m = n(266843),
	T = n(46140),
	h = n(861495);
function N(e) {
	let { questId: t, ...n } = e,
		a = (0, r.e7)([c.Z], () => c.Z.getQuest(t));
	if (null == a) return null;
	{
		let e = {
			quest: a,
			...n
		};
		return (0, i.jsx)(f, { ...e });
	}
}
function f(e) {
	let { quest: t, location: n, initiallyExpanded: r, contentPosition: c } = e,
		[N, f] = a.useState(!1),
		C = a.useCallback(() => f(!0), []),
		p = a.useCallback(() => f(!1), []),
		g = (0, o.tP)(t),
		{ containerRef: S, size: A, height: R } = (0, m.h)(),
		x = (0, l.q)({ location: T.dr.QUESTS_CARD }),
		{
			expansionSpring: O,
			isAnimating: M,
			isExpanded: v,
			toggleExpanded: L
		} = (0, m.O)({
			initiallyExpanded:
				!x ||
				r ||
				(0, _.iM)({
					location: n,
					quest: t
				})
		}),
		Z = null != R ? R : _.U0;
	return (0, i.jsx)(d.A, {
		questOrQuests: t,
		questContent: n,
		questContentPosition: c,
		trackGuildAndChannelMetadata: n === u.jn.QUESTS_EMBED,
		children: (e) =>
			(0, i.jsx)(i.Fragment, {
				children: (0, i.jsx)(s.animated.div, {
					style: {
						maxHeight:
							n === u.jn.QUESTS_EMBED
								? void 0
								: O.to({
										range: [0, 1],
										output: [_.DJ, Z]
									})
					},
					className: h.questsCard,
					onFocus: C,
					onMouseEnter: C,
					onBlur: p,
					onMouseLeave: p,
					children: (0, i.jsxs)('div', {
						ref: (t) => {
							(e.current = t), (S.current = t);
						},
						children: [
							(0, i.jsx)(I.Z, {
								isFocused: N,
								isQuestExpired: g,
								location: n,
								quest: t,
								size: A,
								expansionSpring: O,
								isAnimating: M,
								isExpanded: v,
								isInConcurrentQuestExperiment: x,
								contentPosition: c,
								toggleExpanded: L
							}),
							(0, i.jsx)(E.Z, {
								quest: t,
								isQuestExpired: g,
								location: n,
								size: A,
								isFocused: N,
								isExpanded: v,
								isAnimating: M,
								contentPosition: c
							})
						]
					})
				})
			})
	});
}
