"use strict";
var n, i, l, a, r = t(442837),
  o = t(570140),
  c = t(999382),
  d = t(740903),
  u = t(981631);
let E = d.u.OVERVIEW,
  _ = null;

function I(e) {
  let {
    subsection: s
  } = e;
  switch (s) {
    case u.KsC.SAFETY_AUTOMOD:
      E = d.u.AUTOMOD;
      break;
    case u.KsC.SAFETY_DM_AND_SPAM_PROTECTION:
      E = d.u.DM_AND_SPAM_PROTECTION;
      break;
    case u.KsC.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
      E = d.u.CAPTCHA_AND_RAID_PROTECTION;
      break;
    case u.KsC.SAFETY_PERMISSIONS:
      E = d.u.PERMISSIONS;
      break;
    case u.KsC.SAFETY_OVERVIEW:
    default:
      E = d.u.OVERVIEW
  }
}
class T extends(a = r.ZP.Store) {
  getCurrentPage() {
    return E
  }
}
l = "GuildSettingsSafetyStore", (i = "displayName") in(n = T) ? Object.defineProperty(n, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = l, s.Z = new T(o.Z, {
  GUILD_SETTINGS_INIT: function() {
    if (c.Z.getGuildId() === _) return !1;
    _ = c.Z.getGuildId()
  },
  GUILD_SETTINGS_SET_SECTION: I,
  GUILD_SETTINGS_SAFETY_SET_SUBSECTION: I,
  GUILD_SETTINGS_SAFETY_PAGE: function(e) {
    let {
      page: s
    } = e;
    E = s
  }
})