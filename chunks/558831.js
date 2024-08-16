n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(481060),
    o = n(950279),
    c = n(741595),
    d = n(359380),
    u = n(689938),
    _ = n(417222),
    E = n(318577);
function h(e) {
    let { gameApplicationIds: t, onUpdateGames: n, error: s } = e,
        r = a.useCallback(
            (e) => {
                n(new Set(e));
            },
            [n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'heading-lg/medium',
                className: E.sectionTitle,
                children: u.Z.Messages.GAMES
            }),
            (0, i.jsx)(o.p, {
                gameApplicationIds: t,
                preventGameRemoval: !1,
                onUpdateGames: r,
                minGames: 0,
                error: s
            })
        ]
    });
}
function m(e) {
    let { traits: t, onUpdateTraits: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'heading-lg/medium',
                className: E.sectionTitle,
                children: u.Z.Messages.CLAN_DISCOVERY_TRAITS
            }),
            (0, i.jsx)(d.d, {
                availableTraits: t,
                onUpdateTraits: n
            })
        ]
    });
}
function I(e) {
    let { playstyle: t, onUpdatePlaystyle: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: E.sectionTitle,
                children: (0, i.jsx)(l.Heading, {
                    variant: 'heading-lg/medium',
                    children: u.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE
                })
            }),
            (0, i.jsx)(c.R, {
                playstyle: t,
                onUpdatePlaystyle: n
            })
        ]
    });
}
t.Z = (e) => {
    let { traits: t, gameApplicationIds: n, playstyle: a, onUpdateTraits: s, onUpdateGames: o, onUpdatePlaystyle: c } = e;
    return (0, i.jsxs)('div', {
        className: r()(E.slideContent, _.container),
        children: [
            (0, i.jsxs)('div', {
                className: _.mainHeader,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-xxl/medium',
                        className: E.title,
                        children: u.Z.Messages.CLAN_DISCOVERY_PREFERENCES_TITLE
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: E.subtitle,
                        children: u.Z.Messages.CLAN_DISCOVERY_PREFERENCES_DESCRIPTION
                    })
                ]
            }),
            (0, i.jsx)(h, {
                gameApplicationIds: n,
                onUpdateGames: o
            }),
            (0, i.jsx)('hr', { className: E.divider }),
            (0, i.jsx)(I, {
                playstyle: a,
                onUpdatePlaystyle: c
            }),
            (0, i.jsx)('hr', { className: E.divider }),
            (0, i.jsx)(m, {
                traits: t,
                onUpdateTraits: s
            })
        ]
    });
};
