n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(536091);
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(77866),
    o = n(373793),
    l = n(243814),
    u = n(993365),
    c = n(481060),
    d = n(713938),
    _ = n(689938),
    E = n(341772);
function f(e) {
    let { text: t, error: n, isFake: i } = e;
    return (0, r.jsxs)('div', {
        className: E.scope,
        children: [
            i
                ? (0, r.jsx)(c.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: a()(E.icon, E.fakeScopeIcon)
                  })
                : (0, r.jsx)(c.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: a()(E.icon, E.scopeIcon)
                  }),
            (0, r.jsxs)('div', {
                className: E.scopeInner,
                children: [
                    (0, r.jsx)(u.x, {
                        variant: 'text-md/normal',
                        color: i ? 'text-muted' : void 0,
                        children: t
                    }),
                    null != n
                        ? (0, r.jsx)(u.x, {
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: n
                          })
                        : null
                ]
            })
        ]
    });
}
function h(e) {
    var t;
    let { application: n, accountScopes: i, requestedScopes: a, integrationType: u, errors: h, isTrustedName: p = !1 } = e,
        I = (0, s.Z)(() => d.ZW[Math.floor(Math.random() * d.ZW.length)]);
    if (0 === i.length) return null;
    let m = I(),
        T = p ? _.Z.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : _.Z.Messages.OAUTH2_SCOPES_LABEL,
        S = u === o.Y.USER_INSTALL && a.includes(l.x.APPLICATIONS_COMMANDS);
    return (0, r.jsxs)('div', {
        className: E.scopes,
        children: [
            (0, r.jsx)(c.Heading, {
                variant: 'heading-sm/normal',
                className: E.sectionLabel,
                children: T.format({ application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : '' })
            }),
            i
                .map((e) =>
                    (0, d.CI)(e, i).map((t, n) => {
                        var i;
                        return (0, r.jsx)(
                            f,
                            {
                                text: t,
                                error: 0 === n ? (null == h ? void 0 : null === (i = h[e]) || void 0 === i ? void 0 : i[0]) : void 0
                            },
                            ''.concat(e, '-').concat(n)
                        );
                    })
                )
                .flat(),
            S && (0, r.jsx)(f, { text: _.Z.Messages.SCOPE_DM_YOU }),
            (0, r.jsx)(f, {
                text: m,
                isFake: !0
            })
        ]
    });
}
