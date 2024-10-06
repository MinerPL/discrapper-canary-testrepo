n.d(t, {
    Z: function () {
        return b;
    }
});
var a = n(735250),
    r = n(470079),
    s = n(873546),
    i = n(481060),
    o = n(231467),
    c = n(17845),
    l = n(703656),
    d = n(981631),
    u = n(559469),
    m = n(689938),
    p = n(970047);
let _ = n(575703),
    x = n(2984),
    g = s.tq || s.Em;
function b(e) {
    let { gameId: t } = e,
        n = (0, u.n)(),
        s = r.useMemo(() => n.slice(0, 4), [n]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('img', {
                className: p.backgroundImage,
                src: _,
                alt: ''
            }),
            (0, a.jsxs)(i.Scroller, {
                className: p.pageContainer,
                children: [
                    (0, a.jsxs)('div', {
                        className: p.headerBar,
                        children: [
                            (0, a.jsx)('img', {
                                className: p.logoWithText,
                                src: x,
                                alt: ''
                            }),
                            (0, a.jsx)(i.Button, {
                                className: p.headerButton,
                                look: i.ButtonLooks.FILLED,
                                size: i.ButtonSizes.MEDIUM,
                                color: i.ButtonColors.WHITE,
                                onClick: () =>
                                    (0, l.dL)({
                                        pathname: d.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                        search: '?game='.concat(t)
                                    }),
                                children: (0, a.jsx)(i.Text, {
                                    variant: 'text-md/medium',
                                    color: 'none',
                                    children: m.Z.Messages.LOGIN
                                })
                            })
                        ]
                    }),
                    (0, a.jsx)(c.Z, {
                        className: p.banner,
                        title: (0, a.jsx)(i.Heading, {
                            className: p.title,
                            variant: 'display-lg',
                            color: 'header-primary',
                            children: m.Z.Messages.LOGGED_OUT_DISCOVERY_FIND_GAMING_GUILD_HEADER
                        }),
                        description: m.Z.Messages.LOGGED_OUT_DISCOVERY_FIND_GAMING_GUILD_SUBHEADER,
                        button: g
                            ? (0, a.jsx)(i.Text, {
                                  variant: 'text-md/medium',
                                  color: 'text-muted',
                                  children: m.Z.Messages.LOGGED_OUT_DISCOVERY_MOBILE_CTA
                              })
                            : (0, a.jsx)(i.Button, {
                                  className: p.cta,
                                  look: i.ButtonLooks.FILLED,
                                  size: i.ButtonSizes.LARGE,
                                  color: i.ButtonColors.WHITE,
                                  onClick: () =>
                                      (0, l.dL)({
                                          pathname: d.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                          search: '?game='.concat(t)
                                      }),
                                  children: (0, a.jsx)(i.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: m.Z.Messages.LOGGED_OUT_DISCOVERY_FIND_GAMING_GUILD_CTA
                                  })
                              })
                    }),
                    (0, a.jsx)('div', {
                        className: p.content,
                        children: (0, a.jsxs)('div', {
                            className: p.sampleGuildsSection,
                            children: [
                                (0, a.jsx)(i.Text, {
                                    className: p.sectionTitle,
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    children: m.Z.Messages.DISCOVERY_SAMPLE_GUILDS_LABEL
                                }),
                                (0, a.jsx)('div', {
                                    className: p.cardsWrapper,
                                    children: s.map((e) =>
                                        (0, a.jsx)(
                                            o.xV,
                                            {
                                                className: p.card,
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
