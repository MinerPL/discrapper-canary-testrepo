"use strict";
s.r(t), s.d(t, {
  NonSpamRetrainingOptInOptions: function() {
    return n
  },
  NonSpamRetrainingOptInOptionsToValue: function() {
    return m
  },
  computeFlags: function() {
    return _
  },
  generateNonSpamRetrainingOptInSettingOptions: function() {
    return g
  },
  getSanitizedActivityJoiningRestrictedGuilds: function() {
    return T
  },
  getSanitizedActivityRestrictedGuilds: function() {
    return E
  },
  getSanitizedMessageRequestRestrictedGuilds: function() {
    return S
  },
  getSanitizedRestrictedGuilds: function() {
    return c
  },
  harvestDisabled: function() {
    return f
  }
});
var a, n, l = s("695346"),
  i = s("486472"),
  r = s("430824");
s("626135");
var o = s("981631"),
  d = s("689938");
let u = 864e5 * o.REQUEST_DATA_LIMIT_DAYS;

function c() {
  let e = l.RestrictedGuildIds.getSetting();
  return 0 === i.default.totalUnavailableGuilds && (e = e.filter(e => null != r.default.getGuild(e))), e
}

function S() {
  let e = l.MessageRequestRestrictedGuildIds.getSetting();
  return 0 === i.default.totalUnavailableGuilds && (e = e.filter(e => null != r.default.getGuild(e))), e
}

function E() {
  let e = l.ActivityRestrictedGuilds.getSetting();
  return 0 === i.default.totalUnavailableGuilds && (e = e.filter(e => null != r.default.getGuild(e))), e
}

function T() {
  let e = l.ActivityJoiningRestrictedGuilds.getSetting();
  return 0 === i.default.totalUnavailableGuilds && (e = e.filter(e => null != r.default.getGuild(e))), e
}

function _(e) {
  return (e & o.AllFriendSourceFlags) === o.AllFriendSourceFlags ? {
    all: !0,
    mutualFriends: !0,
    mutualGuilds: !0
  } : {
    all: !1,
    mutualFriends: (e & o.FriendSourceFlags.MUTUAL_FRIENDS) === o.FriendSourceFlags.MUTUAL_FRIENDS,
    mutualGuilds: (e & o.FriendSourceFlags.MUTUAL_GUILDS) === o.FriendSourceFlags.MUTUAL_GUILDS
  }
}

function f(e, t) {
  return !t.verified || null != e && u > Date.now() - new Date(e.created_at).getTime()
}(a = n || (n = {}))[a.UNDECIDED = 0] = "UNDECIDED", a[a.OPTIN = 1] = "OPTIN", a[a.OPTOUT = 2] = "OPTOUT";
let m = {
  0: void 0,
  1: !0,
  2: !1
};

function g() {
  return [{
    name: d.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
    desc: d.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
    value: 1
  }, {
    name: d.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
    desc: d.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
    value: 2
  }, {
    name: d.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
    desc: d.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
    value: 0
  }]
}