"use strict";

function i(e) {
  let {
    knownGuildVersions: t,
    highestLastMessageId: n,
    readStateVersion: i,
    userGuildSettingsVersion: s,
    userSettingsVersion: r,
    privateChannelsVersion: a,
    apiCodeVersion: o,
    lastSelectedGuildId: l
  } = e, u = null == l || isNaN(Number(l)) ? void 0 : l;
  return {
    guild_versions: t,
    highest_last_message_id: n,
    read_state_version: i,
    user_guild_settings_version: s,
    user_settings_version: r,
    private_channels_version: a,
    api_code_version: o,
    initial_guild_id: u
  }
}
n.r(t), n.d(t, {
  toGatewayClientState: function() {
    return i
  }
})