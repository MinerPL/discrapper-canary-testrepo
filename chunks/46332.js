n.d(t, {
    L: function () {
        return c;
    }
});
var r = n(373793),
    i = n(367907),
    a = n(812206),
    s = n(69580),
    o = n(541099),
    l = n(981631),
    u = n(689079);
function c(e) {
    var t, n, c, d, f;
    let { applicationId: _, userIndexState: h, guildIndexState: p, onSuccess: m, sectionName: g, location: E, entrypoint: v, commandIntegrationTypes: I } = e;
    if ((null != I && !I.includes(r.Y.USER_INSTALL)) || _ === u.bi.BUILT_IN || (null === (t = h.result) || void 0 === t ? void 0 : t.sections[_]) != null || (null === (n = p.result) || void 0 === n ? void 0 : n.sections[_]) != null) return null == m || m(), Promise.resolve(!0);
    let S = null != v ? v : o.Z.lastShownEntrypoint();
    (0, i.yw)(l.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: E,
        application_id: _,
        section_name: g,
        source: S
    });
    let T = a.Z.getApplication(_),
        b = r.Y.USER_INSTALL,
        y = null == T ? void 0 : null === (f = T.integrationTypesConfig) || void 0 === f ? void 0 : null === (d = f[b]) || void 0 === d ? void 0 : null === (c = d.oauth2InstallParams) || void 0 === c ? void 0 : c.scopes;
    return new Promise((e) => {
        (0, s.openOAuth2Modal)(
            {
                clientId: _,
                integrationType: b,
                scopes: y,
                callback: (t) => {
                    let { location: n } = t;
                    null != n &&
                        ((0, i.yw)(l.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                            location: E,
                            application_id: _,
                            section_name: g,
                            source: S
                        }),
                        e(!0),
                        null == m || m());
                }
            },
            () => {
                e(!1);
            }
        );
    });
}
