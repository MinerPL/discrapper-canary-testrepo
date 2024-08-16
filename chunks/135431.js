n.d(t, {
    E: function () {
        return u;
    },
    L: function () {
        return c;
    }
});
var r = n(873546),
    i = n(149765),
    a = n(69580),
    s = n(626135),
    o = n(49012),
    l = n(981631);
function u(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: r } = e;
    return null != t || null != n || (null != r && Object.values(r).some((e) => null != e && null != e.oauth2_install_params));
}
function c(e) {
    let { applicationId: t, customInstallUrl: n, installParams: u, integrationTypesConfig: c, guildId: d, channelId: _, disableGuildSelect: E, source: f } = e;
    if (null != n) {
        s.default.track(l.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: 'custom_url',
            source: f,
            device_platform: r.tq ? 'mobile_web' : 'desktop_web'
        }),
            (0, o.q)({ href: n });
        return;
    }
    if (null != c && Object.values(c).some((e) => null != e && null != e.oauth2_install_params)) {
        s.default.track(l.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: 'in_app',
            source: f,
            device_platform: r.tq ? 'mobile_web' : 'desktop_web'
        }),
            (0, a.openOAuth2Modal)({
                clientId: t,
                guildId: d,
                channelId: _,
                disableGuildSelect: E
            });
        return;
    }
    null != u &&
        (s.default.track(l.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: d,
            auth_type: 'in_app',
            source: f,
            device_platform: r.tq ? 'mobile_web' : 'desktop_web'
        }),
        (0, a.openOAuth2Modal)({
            clientId: t,
            guildId: d,
            channelId: _,
            disableGuildSelect: E,
            scopes: u.scopes,
            permissions: null != u.permissions ? i.vB(u.permissions) : void 0
        }));
}
