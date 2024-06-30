s.d(t, {
    Z: function () {
        return I;
    }
});
var n = s(735250), a = s(470079), i = s(442837), r = s(692547), o = s(481060), l = s(996753), c = s(823379), d = s(882029), _ = s(955204), E = s(248998), u = s(689938), T = s(189542);
function I(e) {
    let {onBackClick: t} = e, s = (0, i.e7)([d.Z], () => d.Z.getAllUnlockedAchievements()), I = a.useMemo(() => Object.values(s).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [s]), S = a.useMemo(() => Object.values(_.LG).filter(c.lm).filter(e => null == s[e.id]).sort((e, t) => e.rarity - t.rarity), [s]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.FormSection, {
                children: (0, n.jsxs)(o.Clickable, {
                    onClick: t,
                    className: T.backContainer,
                    children: [
                        (0, n.jsx)(l.Z, {
                            direction: l.Z.Directions.LEFT,
                            className: T.icon
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
                className: T.headerContainer,
                children: [
                    (0, n.jsxs)('div', {
                        className: T.headerTextContainer,
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
                        className: T.headerIcon,
                        children: (0, n.jsx)(o.TrophyIcon, {
                            size: 'custom',
                            color: r.Z.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40
                        })
                    })
                ]
            }),
            I.length > 0 && (0, n.jsx)(o.FormSection, {
                className: T.divider,
                children: (0, n.jsx)('div', {
                    className: T.achievementGrid,
                    children: I.map(e => {
                        let {
                            achievementId: t,
                            dateUnlocked: s
                        } = e;
                        return (0, n.jsx)(E.Z, {
                            achievementId: t,
                            dateUnlocked: s
                        }, t);
                    })
                })
            }),
            S.length > 0 && (0, n.jsxs)(o.FormSection, {
                className: T.divider,
                children: [
                    (0, n.jsx)('div', {
                        className: T.headerTextContainer,
                        children: (0, n.jsx)(o.Text, {
                            variant: 'text-md/bold',
                            color: 'header-secondary',
                            children: u.Z.Messages.POGGERMODE_ACHIEVEMENT_LOCKED_TITLE
                        })
                    }),
                    (0, n.jsx)('div', {
                        className: T.achievementGrid,
                        children: S.map(e => (0, n.jsx)(E.Z, { achievementId: e.id }, e.id))
                    })
                ]
            }),
            (0, n.jsx)(o.FormSection, {
                className: T.divider,
                children: (0, n.jsx)('div', { className: T.bottomPadding })
            })
        ]
    });
}
