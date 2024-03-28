"use strict";
s.r(t);
var a, l, n, i, r = s("442837"),
  o = s("570140"),
  d = s("999382"),
  u = s("740903"),
  c = s("981631");
let E = u.GuildSettingsSafetyPage.OVERVIEW,
  _ = null;

function I(e) {
  let {
    subsection: t
  } = e;
  switch (t) {
    case c.GuildSettingsSubsections.SAFETY_AUTOMOD:
      E = u.GuildSettingsSafetyPage.AUTOMOD;
      break;
    case c.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION:
      E = u.GuildSettingsSafetyPage.DM_AND_SPAM_PROTECTION;
      break;
    case c.GuildSettingsSubsections.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
      E = u.GuildSettingsSafetyPage.CAPTCHA_AND_RAID_PROTECTION;
      break;
    case c.GuildSettingsSubsections.SAFETY_PERMISSIONS:
      E = u.GuildSettingsSafetyPage.PERMISSIONS;
      break;
    case c.GuildSettingsSubsections.SAFETY_OVERVIEW:
    default:
      E = u.GuildSettingsSafetyPage.OVERVIEW
  }
}
class T extends(i = r.default.Store) {
  getCurrentPage() {
    return E
  }
}
n = "GuildSettingsSafetyStore", (l = "displayName") in(a = T) ? Object.defineProperty(a, l, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = n, t.default = new T(o.default, {
  GUILD_SETTINGS_INIT: function() {
    if (d.default.getGuildId() === _) return !1;
    _ = d.default.getGuildId()
  },
  GUILD_SETTINGS_SET_SECTION: I,
  GUILD_SETTINGS_SAFETY_SET_SUBSECTION: I,
  GUILD_SETTINGS_SAFETY_PAGE: function(e) {
    let {
      page: t
    } = e;
    E = t
  }
})