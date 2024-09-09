n.r(t),
    n.d(t, {
        default: function () {
            return u;
        }
    });
var s = n(735250);
n(470079);
var i = n(765717),
    r = n(384666),
    o = n(69580),
    l = n(397394),
    a = n(449934),
    c = n(721751),
    d = n(981631);
function u() {
    return (0, s.jsxs)(c.Z, {
        splash: (0, a.gK)(),
        children: [
            (0, s.jsx)(i.Z, {
                path: d.Z5c.OAUTH2_AUTHORIZED,
                component: l.Xg
            }),
            (0, s.jsx)(i.Z, {
                path: d.Z5c.OAUTH2_AUTHORIZE,
                component: o.OAuth2AuthorizePage
            }),
            (0, s.jsx)(i.Z, {
                path: d.Z5c.OAUTH2_ERROR,
                component: l.j3
            }),
            (0, s.jsx)(i.Z, {
                path: [d.Z5c.OAUTH2_WHITELIST_ACCEPT, '/oauth2/whitelist/accept'],
                component: r.Z
            })
        ]
    });
}
