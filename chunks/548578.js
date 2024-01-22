"use strict";
n.r(t), n.d(t, {
  MAX_CACHE_AGE_MS: function() {
    return s
  },
  CACHE_VERSION: function() {
    return r
  },
  getDefaultState: function() {
    return a
  }
});
var i = n("718517");
let s = 30 * i.default.Millis.DAY,
  r = "stable-50";

function a() {
  return {
    nonce: "",
    useGuildVersions: !1,
    highestLastMessageId: "0",
    readStateVersion: 0,
    userGuildSettingsVersion: -1,
    version: r,
    cacheCreationDate: null,
    privateChannelsVersion: "0",
    apiCodeVersion: 0,
    guildIdsRequiringDeletedIdsSync: [],
    lastSelectedGuildId: null
  }
}