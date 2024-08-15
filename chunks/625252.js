t.d(s, {
	Z: function () {
		return A;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(704215),
	l = t(780384),
	c = t(481060),
	d = t(37234),
	_ = t(410030),
	E = t(605236),
	u = t(471985),
	I = t(341907),
	T = t(906739),
	S = t(46140),
	N = t(689938),
	C = t(74242),
	m = t(66094);
function A() {
	let e = (0, u.Z)(S.dr.USER_SETTINGS_GIFT_INVENTORY),
		s = (0, T.Z)(),
		t = (0, l.wj)((0, _.ZP)()),
		i = a.useMemo(() => ({ backgroundImage: 'url('.concat(s, ')') }), [s]),
		A = a.useCallback(() => {
			(0, d.xf)(), (0, I.navigateToQuestHome)(S.dr.USER_SETTINGS_GIFT_INVENTORY);
		}, []);
	return (a.useCallback(() => {
		(0, E.EW)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME);
	}, []),
	e)
		? ((0, E.un)(o.z.GIFT_INVENTORY_QUESTS_MOVED_TO_QUEST_HOME),
			(0, n.jsxs)('div', {
				className: r()(C.container),
				style: i,
				children: [
					!1,
					(0, n.jsxs)('div', {
						className: C.textContainer,
						children: [
							(0, n.jsxs)('div', {
								className: C.headerContainer,
								children: [
									(0, n.jsx)('img', {
										alt: '',
										src: m,
										className: C.icon
									}),
									(0, n.jsx)(c.Heading, {
										variant: 'heading-lg/bold',
										color: 'always-white',
										children: N.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_TITLE
									})
								]
							}),
							(0, n.jsx)(c.Text, {
								variant: 'text-md/medium',
								color: 'text-muted',
								children: N.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_DESCRIPTION_V2
							}),
							(0, n.jsx)(c.Button, {
								size: 'large',
								color: t ? c.ButtonColors.BRAND : c.ButtonColors.WHITE,
								className: C.button,
								onClick: A,
								innerClassName: C.innerButton,
								children: (0, n.jsx)(c.Text, {
									variant: 'text-md/medium',
									color: t ? 'always-white' : 'text-normal',
									children: N.Z.Messages.QUESTS_HOME_MOVED_CALLOUT_BUTTON
								})
							})
						]
					})
				]
			}))
		: null;
}
