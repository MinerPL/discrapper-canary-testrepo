"use strict";
t.r(s), t.d(s, {
  useCanCurrentUserViewDisableUnsafeGuildSettingsNotice: function() {
    return d
  },
  useIsMassMentionsDefaultDisabledExperiment: function() {
    return o
  }
});
var a = t("442837"),
  l = t("818083"),
  i = t("496675"),
  n = t("981631");
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