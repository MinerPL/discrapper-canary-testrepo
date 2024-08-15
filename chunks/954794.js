t.d(s, {
	Z: function () {
		return T;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(442837),
	r = t(692547),
	o = t(481060),
	l = t(768762),
	c = t(823379),
	d = t(882029),
	_ = t(955204),
	E = t(248998),
	u = t(689938),
	I = t(914480);
function T(e) {
	let { onBackClick: s } = e,
		t = (0, i.e7)([d.Z], () => d.Z.getAllUnlockedAchievements()),
		T = a.useMemo(() => Object.values(t).sort((e, s) => s.dateUnlocked - e.dateUnlocked), [t]),
		S = a.useMemo(
			() =>
				Object.values(_.LG)
					.filter(c.lm)
					.filter((e) => null == t[e.id])
					.sort((e, s) => e.rarity - s.rarity),
			[t]
		);
	return (0, n.jsxs)(n.Fragment, {
		children: [
			(0, n.jsx)(o.FormSection, {
				children: (0, n.jsxs)(o.Clickable, {
					onClick: s,
					className: I.backContainer,
					children: [
						(0, n.jsx)(l.Z, {
							direction: l.Z.Directions.LEFT,
							className: I.icon
						}),
						(0, n.jsx)(o.Text, {
							variant: 'text-lg/normal',
							color: 'text-normal',
							children: u.Z.Messages.BACK
						})
					]
				})
			}),
			(0, n.jsxs)('div', {
				className: I.headerContainer,
				children: [
					(0, n.jsxs)('div', {
						className: I.headerTextContainer,
						children: [
							(0, n.jsx)(o.Heading, {
								variant: 'heading-lg/extrabold',
								color: 'header-primary',
								children: u.Z.Messages.POGGERMODE_ACHIEVEMENT_TITLE
							}),
							(0, n.jsx)(o.Text, {
								variant: 'text-md/normal',
								color: 'header-secondary',
								children: u.Z.Messages.POGGERMODE_ACHIEVEMENT_DESCRIPTION
							})
						]
					}),
					(0, n.jsx)('div', {
						className: I.headerIcon,
						children: (0, n.jsx)(o.TrophyIcon, {
							size: 'custom',
							color: r.Z.unsafe_rawColors.ORANGE_345.css,
							width: 40,
							height: 40
						})
					})
				]
			}),
			T.length > 0 &&
				(0, n.jsx)(o.FormSection, {
					className: I.divider,
					children: (0, n.jsx)('div', {
						className: I.achievementGrid,
						children: T.map((e) => {
							let { achievementId: s, dateUnlocked: t } = e;
							return (0, n.jsx)(
								E.Z,
								{
									achievementId: s,
									dateUnlocked: t
								},
								s
							);
						})
					})
				}),
			S.length > 0 &&
				(0, n.jsxs)(o.FormSection, {
					className: I.divider,
					children: [
						(0, n.jsx)('div', {
							className: I.headerTextContainer,
							children: (0, n.jsx)(o.Text, {
								variant: 'text-md/bold',
								color: 'header-secondary',
								children: u.Z.Messages.POGGERMODE_ACHIEVEMENT_LOCKED_TITLE
							})
						}),
						(0, n.jsx)('div', {
							className: I.achievementGrid,
							children: S.map((e) => (0, n.jsx)(E.Z, { achievementId: e.id }, e.id))
						})
					]
				}),
			(0, n.jsx)(o.FormSection, {
				className: I.divider,
				children: (0, n.jsx)('div', { className: I.bottomPadding })
			})
		]
	});
}
