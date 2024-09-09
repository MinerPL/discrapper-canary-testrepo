n.d(t, {
    L: function () {
        return c;
    }
});
var i = n(373793),
    o = n(367907),
    a = n(69580),
    l = n(812206),
    r = n(981631),
    d = n(689079);
function c(e) {
    var t, n, c, m, u;
    let { applicationId: s, userIndexState: p, guildIndexState: _, sectionName: E, location: g, source: x } = e;
    if (s === d.bi.BUILT_IN || (null === (t = p.result) || void 0 === t ? void 0 : t.sections[s]) != null || (null === (n = _.result) || void 0 === n ? void 0 : n.sections[s]) != null) return Promise.resolve(!0);
    (0, o.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: g,
        application_id: s,
        section_name: E,
        source: x
    });
    let M = l.Z.getApplication(s),
        A = i.Y.USER_INSTALL,
        I = null == M ? void 0 : null === (u = M.integrationTypesConfig) || void 0 === u ? void 0 : null === (m = u[A]) || void 0 === m ? void 0 : null === (c = m.oauth2InstallParams) || void 0 === c ? void 0 : c.scopes;
    return new Promise((e) => {
        (0, a.openOAuth2Modal)(
            {
                clientId: s,
                integrationType: A,
                scopes: I,
                callback: (t) => {
                    let { location: n } = t;
                    null != n
                        ? ((0, o.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                              location: g,
                              application_id: s,
                              section_name: E,
                              source: x
                          }),
                          e(!0))
                        : e(!1);
                }
            },
            () => {
                e(!1);
            }
        );
    });
}
