"use strict";
var n, d, o, s, _, i, E, I;

function c(e) {
  return e.includes("LEGITIMATE_ACTIVITY") ? "LEGITIMATE_ACTIVITY" : e.includes("DM_SPAM") ? "DM_SPAM" : e.includes("JOIN_RAID") ? "JOIN_RAID" : "OTHER"
}
t.r(a), t.d(a, {
  Feedback: function() {
    return n
  },
  RaidAlertType: function() {
    return d
  },
  RaidLockdownFeedbackType: function() {
    return s
  },
  RaidResolutionType: function() {
    return o
  },
  getMostImportantRaidResolutionType: function() {
    return c
  }
}), t("689938"), (_ = n || (n = {})).BUG = "BUG", _.ALLOWED = "ALLOWED", _.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION", (i = d || (d = {})).JOIN_RAID = "JOIN_RAID", i.MENTION_RAID = "MENTION_RAID", (E = o || (o = {})).LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY", E.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS", E.LEGITIMATE_DMS = "LEGITIMATE_DMS", E.DM_SPAM = "DM_SPAM", E.JOIN_RAID = "JOIN_RAID", E.OTHER = "OTHER", (I = s || (s = {})).DM_SPAM = "DM_SPAM", I.MENTION_SPAM = "MENTION_SPAM", I.CHANNEL_SPAM = "CHANNEL_SPAM", I.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS", I.CHANGING_SETTINGS = "CHANGING_SETTINGS", I.OTHER = "OTHER"