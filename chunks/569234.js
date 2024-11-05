n.d(t, {
    Z: function () {
        return f;
    }
});
var a = n(200651),
    r = n(192379),
    i = n(873546),
    c = n(481060),
    s = n(231467),
    o = n(17845),
    d = n(703656),
    l = n(981631),
    u = n(559469),
    m = n(388032),
    g = n(970047);
let p = n(575703),
    E = n(2984),
    _ = i.tq || i.Em;
function f(e) {
    let { gameId: t } = e,
        n = (0, u.n)(),
        i = r.useMemo(() => n.slice(0, 4), [n]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('img', {
                className: g.backgroundImage,
                src: p,
                alt: ''
            }),
            (0, a.jsxs)(c.Scroller, {
                className: g.pageContainer,
                children: [
                    (0, a.jsxs)('div', {
                        className: g.headerBar,
                        children: [
                            (0, a.jsx)('img', {
                                className: g.logoWithText,
                                src: E,
                                alt: ''
                            }),
                            (0, a.jsx)(c.Button, {
                                className: g.headerButton,
                                look: c.ButtonLooks.FILLED,
                                size: c.ButtonSizes.MEDIUM,
                                color: c.ButtonColors.WHITE,
                                onClick: () =>
                                    (0, d.dL)({
                                        pathname: l.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                        search: '?game='.concat(t)
                                    }),
                                children: (0, a.jsx)(c.Text, {
                                    variant: 'text-md/medium',
                                    color: 'none',
                                    children: m.intl.string(m.t.HAkXzs)
                                })
                            })
                        ]
                    }),
                    (0, a.jsx)(o.Z, {
                        className: g.banner,
                        title: m.intl.string(m.t.a2lbLi),
                        description: m.intl.string(m.t['/B+X5e']),
                        button: _
                            ? (0, a.jsx)(c.Text, {
                                  variant: 'text-md/medium',
                                  color: 'text-muted',
                                  children: m.intl.string(m.t.PrDDkp)
                              })
                            : (0, a.jsx)(c.Button, {
                                  className: g.cta,
                                  look: c.ButtonLooks.FILLED,
                                  size: c.ButtonSizes.LARGE,
                                  color: c.ButtonColors.WHITE,
                                  onClick: () =>
                                      (0, d.dL)({
                                          pathname: l.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                          search: '?game='.concat(t)
                                      }),
                                  children: (0, a.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: m.intl.string(m.t.gbOKxs)
                                  })
                              })
                    }),
                    (0, a.jsx)('div', {
                        className: g.content,
                        children: (0, a.jsxs)('div', {
                            className: g.sampleGuildsSection,
                            children: [
                                (0, a.jsx)(c.Text, {
                                    className: g.sectionTitle,
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    children: m.intl.string(m.t.x0rBe3)
                                }),
                                (0, a.jsx)('div', {
                                    className: g.cardsWrapper,
                                    children: i.map((e) =>
                                        (0, a.jsx)(
                                            s.xV,
                                            {
                                                className: g.card,
                                                clan: e
                                            },
                                            e.id
                                        )
                                    )
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
