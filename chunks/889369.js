"use strict";
n.r(t), n("47120");
var a, l, s, i, r = n("392711"),
  d = n.n(r),
  o = n("442837"),
  u = n("570140"),
  N = n("45966"),
  c = n("999382"),
  _ = n("981631");
let I = !1,
  E = null,
  f = new Set;

function O() {
  (function() {
    I = !1, E = null
  })(), null != (E = c.default.getGuildId()) && c.default.getSection() === _.GuildSettingsSections.ONBOARDING && (f = new Set(N.default.getDefaultChannelIds(E)))
}
class S extends(a = o.default.Store) {
  initialize() {
    this.waitFor(c.default, N.default)
  }
  hasChanges() {
    if (null == E) return !1;
    let e = N.default.getDefaultChannelIds(E).sort(),
      t = Array.from(f).sort();
    return !d().isEqual(e, t)
  }
  get guildId() {
    return E
  }
  get submitting() {
    return I
  }
  get editedDefaultChannelIds() {
    return f
  }
}
i = "GuildSettingsDefaultChannelsStore", (s = "displayName") in(l = S) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new S(u.default, {
  GUILD_SETTINGS_INIT: O,
  GUILD_SETTINGS_SET_SECTION: O,
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: O,
  GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: O,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: O,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function() {
    I = !1
  },
  GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function(e) {
    let {
      channelId: t
    } = e;
    (f = new Set(f)).has(t) ? f.delete(t) : f.add(t)
  },
  GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function() {
    I = !0
  }
})