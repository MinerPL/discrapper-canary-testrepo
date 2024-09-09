t.d(n, {
    I: function () {
        return I;
    },
    Z: function () {
        return b;
    }
}),
    t(47120);
var l = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    s = t(325708),
    o = t(213557),
    c = t(433355),
    d = t(324067),
    u = t(984933),
    h = t(430824),
    m = t(496675),
    _ = t(626135),
    f = t(216306),
    C = t(775028),
    p = t(981631),
    x = t(176505),
    g = t(689938),
    N = t(252433);
function I(e) {
    let { channelId: n } = e;
    return (0, l.jsx)(s.Z, {
        sidebarType: s.y.ThreadSidebar,
        maxWidth: 600,
        children: (0, l.jsx)(o.Z, {
            channelId: n,
            baseChannelId: x.oC.CHANNEL_BROWSER
        })
    });
}
function b(e) {
    let { guildId: n } = e,
        [s, o] = a.useState(''),
        I = (0, i.e7)([h.Z], () => h.Z.getGuild(n)),
        b = (0, i.e7)([u.ZP], () => u.ZP.getChannels(n)),
        E = (0, i.e7)([d.Z], () => d.Z.getCategories(n)),
        Z = (0, f.Fo)(n, E, b, s),
        v = (0, i.e7)([m.Z], () => m.Z.canWithPartialContext(p.Plq.MANAGE_CHANNELS, { guildId: n })),
        T = (0, i.e7)([c.ZP], () => null != c.ZP.getCurrentSidebarChannelId(x.oC.CHANNEL_BROWSER)),
        j = a.useCallback(() => o(''), [o]),
        S = a.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([t.e('45094'), t.e('58983')]).then(t.bind(t, 218613));
                return (t) =>
                    (0, l.jsx)(e, {
                        ...t,
                        channelType: null,
                        guildId: n
                    });
            });
        }, [n]);
    return null == I
        ? null
        : (0, l.jsxs)('div', {
              className: N.pageBody,
              children: [
                  (0, l.jsxs)('div', {
                      className: N.header,
                      children: [
                          (0, l.jsx)(r.SearchBar, {
                              className: N.search,
                              size: r.SearchBar.Sizes.MEDIUM,
                              query: s,
                              onChange: (e) => {
                                  '' === s && '' !== e && _.default.track(p.rMx.SEARCH_STARTED, { search_type: 'channel browser' }), o(e.toLowerCase());
                              },
                              onClear: j,
                              placeholder: g.Z.Messages.CHANNEL_BROWSER_SEARCH_PLACEHOLDER
                          }),
                          v
                              ? (0, l.jsxs)(r.Button, {
                                    className: N.createButton,
                                    innerClassName: N.createButtonInner,
                                    onClick: S,
                                    children: [
                                        (0, l.jsx)(r.PlusSmallIcon, {
                                            size: 'sm',
                                            color: 'currentColor',
                                            className: N.createIcon
                                        }),
                                        g.Z.Messages.CREATE
                                    ]
                                })
                              : null
                      ]
                  }),
                  (0, l.jsx)(C.Z, {
                      className: N.browser,
                      channels: b,
                      categories: Z,
                      guild: I,
                      hasSidebar: T
                  })
              ]
          });
}
