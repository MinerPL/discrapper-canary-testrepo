"use strict";
s.r(t), s.d(t, {
  getSanitizedRestrictedGuilds: function() {
    return S
  },
  getSanitizedMessageRequestRestrictedGuilds: function() {
    return o
  },
  getSanitizedActivityRestrictedGuilds: function() {
    return T
  },
  getSanitizedActivityJoiningRestrictedGuilds: function() {
    return E
  },
  computeFlags: function() {
    return I
  },
  harvestDisabled: function() {
    return _
  },
  NonSpamRetrainingOptInOptions: function() {
    return n
  },
  NonSpamRetrainingOptInOptionsToValue: function() {
    return N
  },
  generateNonSpamRetrainingOptInSettingOptions: function() {
    return R
  }
});
var i, n, a = s("845579"),
  d = s("341542"),
  u = s("305961");
s("599110");
var l = s("49111"),
  r = s("782340");
let c = 864e5 * l.REQUEST_DATA_LIMIT_DAYS;

function S() {
  let e = a.RestrictedGuildIds.getSetting();
  return 0 === d.default.totalUnavailableGuilds && (e = e.filter(e => null != u.default.getGuild(e))), e
}

function o() {
  let e = a.MessageRequestRestrictedGuildIds.getSetting();
  return 0 === d.default.totalUnavailableGuilds && (e = e.filter(e => null != u.default.getGuild(e))), e
}

function T() {
  let e = a.ActivityRestrictedGuilds.getSetting();
  return 0 === d.default.totalUnavailableGuilds && (e = e.filter(e => null != u.default.getGuild(e))), e
}

function E() {
  let e = a.ActivityJoiningRestrictedGuilds.getSetting();
  return 0 === d.default.totalUnavailableGuilds && (e = e.filter(e => null != u.default.getGuild(e))), e
}

function I(e) {
  return (e & l.AllFriendSourceFlags) === l.AllFriendSourceFlags ? {
    all: !0,
    mutualFriends: !0,
    mutualGuilds: !0
  } : {
    all: !1,
    mutualFriends: (e & l.FriendSourceFlags.MUTUAL_FRIENDS) === l.FriendSourceFlags.MUTUAL_FRIENDS,
    mutualGuilds: (e & l.FriendSourceFlags.MUTUAL_GUILDS) === l.FriendSourceFlags.MUTUAL_GUILDS
  }
}

function _(e, t) {
  return !t.verified || null != e && c > Date.now() - new Date(e.created_at).getTime()
}(i = n || (n = {}))[i.UNDECIDED = 0] = "UNDECIDED", i[i.OPTIN = 1] = "OPTIN", i[i.OPTOUT = 2] = "OPTOUT";
let N = {
  0: void 0,
  1: !0,
  2: !1
};

function R() {
  return [{
    name: r.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
    desc: r.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
    value: 1
  }, {
    name: r.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
    desc: r.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
    value: 2
  }, {
    name: r.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
    desc: r.default.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
    value: 0
  }]
}