n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    a = n(192379),
    l = n(120356),
    r = n.n(l),
    c = n(91192),
    o = n(481060),
    s = n(768581),
    d = n(4461),
    u = n(924489),
    g = n(824606),
    m = n(388032),
    f = n(734888);
function p(e) {
    var t, n, l, p;
    let { application: _, className: h, childrenClassName: x, showAdd: C, showMutualGuilds: b, showPrimaryCategory: v, children: j, onView: y, guildCountPosition: I = 'top', subheaderTextVariant: N = 'text-sm/normal', mutualGuildShownMax: S, guildIconSize: A, source: T } = e,
        P = (0, c.JA)(_.id),
        R = s.ZP.getApplicationIconURL({
            id: _.id,
            icon: _.icon,
            size: 48
        }),
        { canInstall: L, install: Z } = (0, d.P)(_),
        k = (0, g.Z)({
            application: _,
            showMutualGuilds: b
        }),
        E = a.useCallback(
            (e) => {
                e.stopPropagation(), Z(T);
            },
            [Z, T]
        ),
        M = null === (t = _.categories) || void 0 === t ? void 0 : t[0],
        w = (null !== (l = null === (n = _.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== l ? l : 0) > 0 || k.length > 0,
        D = (0, i.jsx)(u.Z, {
            application: _,
            textVariant: N,
            mutualGuilds: k,
            mutualGuildShownMax: S,
            guildIconSize: A,
            compact: !0
        }),
        O = v && null != M,
        B = w && 'top' === I,
        U = w && 'bottom' === I,
        H = null !== (p = _.storefront_available) && void 0 !== p && p,
        G = (0, i.jsxs)('article', {
            children: [
                (0, i.jsxs)('div', {
                    className: f.topWrapper,
                    children: [
                        (0, i.jsx)('img', {
                            className: f.icon,
                            alt: '',
                            'aria-hidden': !0,
                            src: R,
                            width: 48,
                            height: 48
                        }),
                        (0, i.jsxs)('div', {
                            className: f.info,
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: 'heading-md/medium',
                                    children: _.name
                                }),
                                (O || B) &&
                                    (0, i.jsxs)('div', {
                                        className: f.details,
                                        children: [
                                            O
                                                ? (0, i.jsx)(o.Text, {
                                                      tag: 'span',
                                                      color: 'header-secondary',
                                                      variant: N,
                                                      children: M.name
                                                  })
                                                : null,
                                            B
                                                ? (0, i.jsxs)(i.Fragment, {
                                                      children: [
                                                          O
                                                              ? (0, i.jsx)('span', {
                                                                    className: f.bullet,
                                                                    children: '\u2022'
                                                                })
                                                              : null,
                                                          D,
                                                          H
                                                              ? (0, i.jsxs)('div', {
                                                                    className: f.premiumContainer,
                                                                    children: [
                                                                        (0, i.jsx)('span', {
                                                                            className: f.bullet,
                                                                            children: '\u2022'
                                                                        }),
                                                                        (0, i.jsx)(o.TicketIcon, {
                                                                            size: 'xs',
                                                                            color: 'currentColor'
                                                                        }),
                                                                        (0, i.jsx)(o.Text, {
                                                                            variant: 'text-sm/medium',
                                                                            className: f.premiumText,
                                                                            children: m.intl.string(m.t['19wGKi'])
                                                                        })
                                                                    ]
                                                                })
                                                              : null
                                                      ]
                                                  })
                                                : null
                                        ]
                                    })
                            ]
                        }),
                        C
                            ? (0, i.jsx)(o.Button, {
                                  size: o.Button.Sizes.SMALL,
                                  onClick: E,
                                  disabled: !L,
                                  children: m.intl.string(m.t.qRZ35u)
                              })
                            : null
                    ]
                }),
                null != j || null != x
                    ? (0, i.jsx)('div', {
                          className: r()(x, f.__invalid_children),
                          children: j
                      })
                    : null,
                U
                    ? (0, i.jsx)('div', {
                          className: f.bottomGuildCountContainer,
                          children: D
                      })
                    : null
            ]
        });
    return null != y
        ? (0, i.jsx)(o.Clickable, {
              tag: 'li',
              onClick: () => y({ mutualGuilds: k }),
              className: r()(h, f.listing, f.clickable),
              ...P,
              children: G
          })
        : (0, i.jsx)(o.FocusRing, {
              children: (0, i.jsx)('li', {
                  className: r()(h, f.listing),
                  ...P,
                  children: G
              })
          });
}
