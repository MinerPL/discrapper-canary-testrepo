"use strict";
t.r(s), t.d(s, {
  useIsMassMentionsDefaultDisabledExperiment: function() {
    return o
  },
  useCanCurrentUserViewDisableUnsafeGuildSettingsNotice: function() {
    return d
  }
});
var a = t("446674"),
  l = t("862205"),
  i = t("957255"),
  n = t("49111");
let r = (0, l.createExperiment)({
  kind: "guild",
  id: "2022-11_default_disable_mass_mention",
  label: "Disable mass mentions for communities by default",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function o(e) {
  return r.useExperiment({
    guildId: e,
    location: "dd4beb_1"
  }, {
    autoTrackExposure: !0
  })
}

function d(e) {
  var s;
  let t = (0, a.useStateFromStores)([i.default], () => i.default.can(n.Permissions.MANAGE_GUILD, e)),
    {
      enabled: l
    } = r.useExperiment({
      guildId: null !== (s = null == e ? void 0 : e.id) && void 0 !== s ? s : n.EMPTY_STRING_SNOWFLAKE_ID,
      location: "dd4beb_3"
    }, {
      autoTrackExposure: !0
    });
  if (null == e) return !1;
  let o = e.hasFeature(n.GuildFeatures.COMMUNITY);
  return t && o && l
}