n.d(t, {
	y: function () {
		return C;
	}
});
var s = n(735250);
n(470079);
var o = n(481060),
	a = n(617136),
	r = n(497505),
	l = n(918701),
	i = n(796111),
	c = n(667105),
	d = n(46140),
	u = n(689938),
	p = n(575137);
let x = (e) => {
		let { quest: t } = e;
		return (0, s.jsx)(o.Button, {
			className: p.cta,
			size: o.Button.Sizes.SMALL,
			onClick: () =>
				(0, l.FE)(t, {
					content: r.jn.QUEST_BAR_V2,
					ctaContent: a.jZ.OPEN_GAME_LINK
				}),
			children: u.Z.Messages.QUESTS_GET_THIS_GAME
		});
	},
	m = (e) => {
		let { quest: t } = e;
		return (0, s.jsx)(o.Button, {
			fullWidth: !0,
			className: p.cta,
			onClick: () =>
				(0, l.gI)(
					{
						quest: t,
						showInline: !1
					},
					{
						content: r.jn.QUEST_BAR_V2,
						ctaContent: a.jZ.CONNECT_CONSOLE
					}
				),
			size: o.Button.Sizes.SMALL,
			children: u.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
		});
	},
	g = (e) => {
		let { quest: t, useReducedMotion: n, isExpanded: a } = e,
			l = (0, c.hf)({
				quest: t,
				location: r.jn.QUEST_BAR_V2
			});
		return (0, s.jsx)(o.ShinyButton, {
			fullWidth: !0,
			size: o.Button.Sizes.SMALL,
			onClick: l,
			pauseAnimation: n || !a,
			className: p.cta,
			buttonShineClassName: p.shine,
			children: u.Z.Messages.QUESTS_CLAIM_REWARD
		});
	},
	_ = (e) => {
		var t;
		let { quest: n, useReducedMotion: o, isExpanded: a, awaitingConsoleConnections: l, hasMadeProgress: c, isProgressing: u, activeScreen: p } = e,
			_ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
			C = (0, i.P)({ location: d.dr.QUESTS_BAR });
		if (_)
			return (0, s.jsx)(g, {
				quest: n,
				useReducedMotion: o,
				isExpanded: a
			});
		if (p === r.LI.CONSOLE && l && !C) return (0, s.jsx)(m, { quest: n });
		if (p !== r.LI.SELECT && !c && !u) return (0, s.jsx)(x, { quest: n });
		return null;
	};
function C(e) {
	return (0, s.jsxs)('div', {
		className: p.ctaButtons,
		children: [
			e.showBackButton &&
				(0, s.jsx)(o.Button, {
					className: p.backButton,
					innerClassName: p.backButtonInner,
					look: 'blank',
					grow: !1,
					fullWidth: !1,
					size: 'none',
					onClick: e.onBack,
					children: (0, s.jsx)(o.ChevronSmallLeftIcon, { className: p.backIcon })
				}),
			(0, s.jsx)(_, { ...e })
		]
	});
}
