"use strict";
n.d(t, {
  E: function() {
    return u
  },
  L: function() {
    return _
  }
});
var i = n(873546),
  r = n(149765),
  s = n(69580),
  o = n(626135),
  a = n(49012),
  l = n(981631);

function u(e) {
  let {
    customInstallUrl: t,
    installParams: n,
    integrationTypesConfig: i
  } = e;
  return null != t || null != n || null != i && Object.values(i).some(e => null != e && null != e.oauth2_install_params)
}

function _(e) {
  let {
    applicationId: t,
    customInstallUrl: n,
    installParams: u,
    integrationTypesConfig: _,
    guildId: d,
    channelId: c,
    disableGuildSelect: E,
    source: I
  } = e;
  if (null != n) {
    o.default.track(l.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
      application_id: t,
      guild_id: d,
      auth_type: "custom_url",
      source: I,
      device_platform: i.tq ? "mobile_web" : "desktop_web"
    }), (0, a.q)({
      href: n
    });
    return
  }
  if (null != _ && Object.values(_).some(e => null != e && null != e.oauth2_install_params)) {
    o.default.track(l.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
      application_id: t,
      guild_id: d,
      auth_type: "in_app",
      source: I,
      device_platform: i.tq ? "mobile_web" : "desktop_web"
    }), (0, s.openOAuth2Modal)({
      clientId: t,
      guildId: d,
      channelId: c,
      disableGuildSelect: E
    });
    return
  }
  null != u && (o.default.track(l.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
    application_id: t,
    guild_id: d,
    auth_type: "in_app",
    source: I,
    device_platform: i.tq ? "mobile_web" : "desktop_web"
  }), (0, s.openOAuth2Modal)({
    clientId: t,
    guildId: d,
    channelId: c,
    disableGuildSelect: E,
    scopes: u.scopes,
    permissions: null != u.permissions ? r.vB(u.permissions) : void 0
  }))
}