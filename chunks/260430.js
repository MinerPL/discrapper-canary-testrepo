n.d(t, {
    Z: function () {
        return p;
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
    u = n(260034),
    c = n(993365),
    d = n(481060),
    _ = n(713938),
    E = n(689938),
    f = n(650654);
function h(e) {
    let { text: t, error: n, isFake: i } = e;
    return (0, r.jsxs)('div', {
        className: f.scope,
        children: [
            i
                ? (0, r.jsx)(d.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: a()(f.icon, f.fakeScopeIcon)
                  })
                : (0, r.jsx)(d.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: a()(f.icon, f.scopeIcon)
                  }),
            (0, r.jsxs)('div', {
                className: f.scopeInner,
                children: [
                    (0, r.jsx)(c.x, {
                        variant: 'text-md/normal',
                        color: i ? 'text-muted' : void 0,
                        children: t
                    }),
                    null != n
                        ? (0, r.jsx)(c.x, {
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
function p(e) {
    var t;
    let { application: n, accountScopes: i, requestedScopes: a, integrationType: c, errors: d, isTrustedName: p = !1 } = e,
        I = (0, s.Z)(() => _.ZW[Math.floor(Math.random() * _.ZW.length)]);
    if (0 === i.length) return null;
    let m = I(),
        T = p ? E.Z.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : E.Z.Messages.OAUTH2_SCOPES_LABEL,
        S = c === o.Y.USER_INSTALL && a.includes(l.x.APPLICATIONS_COMMANDS);
    return (0, r.jsxs)('div', {
        className: f.scopes,
        children: [
            (0, r.jsx)(u.X, {
                variant: 'heading-sm/normal',
                className: f.sectionLabel,
                children: T.format({ application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : '' })
            }),
            i
                .map((e) =>
                    (0, _.CI)(e, i).map((t, n) => {
                        var i;
                        return (0, r.jsx)(
                            h,
                            {
                                text: t,
                                error: 0 === n ? (null == d ? void 0 : null === (i = d[e]) || void 0 === i ? void 0 : i[0]) : void 0
                            },
                            ''.concat(e, '-').concat(n)
                        );
                    })
                )
                .flat(),
            S && (0, r.jsx)(h, { text: E.Z.Messages.SCOPE_DM_YOU }),
            (0, r.jsx)(h, {
                text: m,
                isFake: !0
            })
        ]
    });
}
