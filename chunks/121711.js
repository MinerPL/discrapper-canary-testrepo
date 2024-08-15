n(47120);
var i = n(735250),
	a = n(470079),
	s = n(990547),
	r = n(780384),
	l = n(481060),
	o = n(410030),
	c = n(213609),
	d = n(252618),
	u = n(979233),
	_ = n(374939),
	E = n(611928),
	h = n(791734),
	m = n(63063),
	I = n(113434),
	g = n(471985),
	p = n(710914),
	T = n(906739),
	S = n(452081),
	f = n(46140),
	C = n(981631),
	N = n(689938),
	A = n(296561);
t.Z = function (e) {
	let {} = e,
		t = (0, g.Z)(f.dr.QUEST_HOME_DESKTOP),
		{ tabs: v, selectedTab: Z, onSelectTab: L } = (0, S.z)(),
		{ onScroll: O, scrollPosition: R } = (0, u.M)(),
		x = (0, o.ZP)(),
		b = (0, r.wj)(x),
		{ quests: P, isFetchingCurrentQuests: M } = (0, I.bA)(Z),
		D = (0, T.Z)(),
		y = null;
	if (window.location.hash.length > 0) {
		let e = window.location.hash.slice(1);
		for (let t of P)
			if (t.id === e) {
				y = e;
				break;
			}
	}
	a.useEffect(() => {
		(0, c.h)({
			name: s.ImpressionNames.QUEST_HOME,
			type: s.ImpressionTypes.VIEW
		});
	}, []);
	let j = a.useCallback(() => {
		window.open(m.Z.getArticleURL(C.BhN.QUESTS_LEARN_MORE));
	}, []);
	(0, d.Tt)({ location: N.Z.Messages.QUESTS });
	let U = a.useMemo(() => ({ backgroundImage: 'url('.concat(D, ')') }), [D]);
	return t
		? (0, i.jsxs)('div', {
				className: A.container,
				children: [
					(0, i.jsxs)(E.ZP, {
						children: [
							(0, i.jsx)('div', { className: A.dragRegion }),
							(0, i.jsx)(E.z6, { scrollPosition: R }),
							(0, i.jsx)(E.aV, { icon: l.QuestsIcon }),
							(0, i.jsx)(h.Z, {
								tabs: v,
								selectedTab: Z,
								onTabSelect: L
							})
						]
					}),
					(0, i.jsx)(_.Z, {
						title: N.Z.Messages.QUESTS_HOME_HERO_TITLE,
						description: N.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
						onScroll: O,
						bannerContainerClassName: A.bannerContainer,
						bannerBackground: (0, i.jsx)('div', {
							className: A.bannerImage,
							style: U,
							children: (0, i.jsx)('div', { className: A.bannerGradient })
						}),
						button: (0, i.jsxs)(l.Button, {
							size: 'medium',
							color: b ? l.ButtonColors.TRANSPARENT : l.ButtonColors.WHITE,
							className: A.button,
							onClick: j,
							innerClassName: A.innerButton,
							children: [
								(0, i.jsx)(l.Text, {
									variant: 'text-md/semibold',
									color: b ? 'always-white' : 'text-normal',
									className: A.externalLinkText,
									children: N.Z.Messages.LEARN_MORE
								}),
								(0, i.jsx)(l.LinkExternalSmallIcon, {
									className: A.icon,
									color: b ? 'var(--white-500)' : 'var(--redesign-button-secondary-text'
								})
							]
						}),
						children:
							M && 0 === P.length
								? (0, i.jsx)(l.Spinner, { className: A.spinner })
								: 0 === P.length && Z === I.e5.CLAIMED
									? (0, i.jsxs)(l.EmptyState, {
											theme: x,
											children: [
												(0, i.jsx)(l.EmptyStateImage, {
													lightSrc: n(979770),
													darkSrc: n(138715),
													width: 415,
													height: 200
												}),
												(0, i.jsx)(l.EmptyStateText, { note: N.Z.Messages.QUESTS_CLAIMED_QUEST_EMPTY_STATE.format({ onClick: () => L(I.e5.UNCLAIMED) }) })
											]
										})
									: (0, i.jsx)('div', {
											className: A.gridContainer,
											children: (0, i.jsx)(p.Z, {
												quests: P,
												selectedQuestId: y
											})
										})
					})
				]
			})
		: null;
};
