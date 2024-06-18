"use strict";
t.d(s, {
  Q: function() {
    return _
  }
});
var n = t(735250);
t(470079);
var i = t(740903),
  l = t(426434),
  a = t(112824),
  r = t(181339),
  o = t(195189),
  c = t(616230),
  d = t(3896),
  u = t(981631),
  E = t(689938);
let _ = e => ({
  [i.u.CAPTCHA_AND_RAID_PROTECTION]: [{
    renderComponent: () => (0, n.jsx)(r.Z, {
      guild: e
    }, "raid-alerts"),
    enabled: !e.hasFeature(u.oNc.RAID_ALERTS_DISABLED)
  }, {
    renderComponent: () => (0, n.jsx)(o.Z, {
      title: E.Z.Messages.GUILD_SETTINGS_SAFETY_RAID_CAPTCHA
    }, "captcha-suspicious-joins"),
    enabled: !0
  }, {
    renderComponent: () => (0, n.jsx)(o.Z, {
      title: E.Z.Messages.GUILD_SETTINGS_SAFETY_RAID_CAPTCH_RAID
    }, "captcha-raid-joins"),
    enabled: !0
  }],
  [i.u.DM_AND_SPAM_PROTECTION]: [{
    renderComponent: () => (0, n.jsx)(d.Z, {
      guild: e
    }, "verification-level"),
    enabled: !0
  }, {
    renderComponent: () => (0, n.jsx)(c.Z, {
      guild: e
    }, "member-verification"),
    enabled: e.hasVerificationGate()
  }, {
    renderComponent: () => (0, n.jsx)(o.Z, {
      title: E.Z.Messages.GUILD_SETTINGS_SAFETY_SPAM_SUSPICIOUS_DMS,
      details: E.Z.Messages.GUILD_SETTINGS_SAFETY_SPAM_SUSPICIOUS_DMS_DESCRIPTION
    }, "hide-suspicious-dms"),
    enabled: !0
  }, {
    renderComponent: () => (0, n.jsx)(o.Z, {
      title: E.Z.Messages.GUILD_SETTINGS_SAFETY_SPAM_DM_NON_FRIENDS,
      details: E.Z.Messages.GUILD_SETTINGS_SAFETY_SPAM_DM_NON_FRIENDS_DESCRIPTION
    }, "filter-unknown-dms"),
    enabled: !0
  }, {
    renderComponent: () => (0, n.jsx)(o.Z, {
      title: E.Z.Messages.GUILD_SETTINGS_SAFETY_SPAM_SUSPICIOUS_LINKS
    }, "outbound-links-warn"),
    enabled: !0
  }, {
    renderComponent: () => (0, n.jsx)(o.Z, {
      title: E.Z.Messages.GUILD_SETTINGS_SAFETY_SPAM_DM_SUSPCIOUS_MESSAGES
    }, "delete-spam"),
    enabled: !0
  }],
  [i.u.PERMISSIONS]: [{
    renderComponent: () => (0, n.jsx)(l.Z, {
      guild: e
    }, "guild-mfa"),
    enabled: e.mfaLevel === u.BpS.ELEVATED
  }, {
    renderComponent: () => (0, n.jsx)(a.Z, {
      guild: e
    }, "disable-risky-perms"),
    enabled: 0 === (0, a.R)(e).length
  }]
})