"use strict";
n.d(t, {
  Qe: function() {
    return o
  },
  W3: function() {
    return _
  },
  ZW: function() {
    return s
  },
  ak: function() {
    return a
  },
  jW: function() {
    return u
  },
  up: function() {
    return l
  }
});
var i = n(243814),
  r = n(689938);
let s = [() => r.Z.Messages.OAUTH2_FAKE_SCOPE_1, () => r.Z.Messages.OAUTH2_FAKE_SCOPE_2, () => r.Z.Messages.OAUTH2_FAKE_SCOPE_3, () => r.Z.Messages.OAUTH2_FAKE_SCOPE_4, () => r.Z.Messages.OAUTH2_FAKE_SCOPE_5, () => r.Z.Messages.OAUTH2_FAKE_SCOPE_6, () => r.Z.Messages.OAUTH2_FAKE_SCOPE_7, () => r.Z.Messages.OAUTH2_FAKE_SCOPE_8],
  o = [i.x.BOT, i.x.OPENID, i.x.IDENTIFY, i.x.EMAIL, i.x.CONNECTIONS, i.x.MESSAGES_READ, i.x.GUILDS, i.x.GUILDS_JOIN, i.x.GUILDS_MEMBERS_READ, i.x.GDM_JOIN, i.x.RPC, i.x.RPC_NOTIFICATIONS_READ, i.x.RPC_VOICE_READ, i.x.RPC_VOICE_WRITE, i.x.RPC_VIDEO_READ, i.x.RPC_VIDEO_WRITE, i.x.RPC_SCREENSHARE_READ, i.x.RPC_SCREENSHARE_WRITE, i.x.RPC_ACTIVITIES_WRITE, i.x.APPLICATIONS_BUILDS_UPLOAD, i.x.APPLICATIONS_BUILDS_READ, i.x.APPLICATIONS_COMMANDS, i.x.APPLICATIONS_COMMANDS_UPDATE, i.x.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE, i.x.APPLICATIONS_STORE_UPDATE, i.x.APPLICATIONS_ENTITLEMENTS, i.x.ACTIVITIES_READ, i.x.ACTIVITIES_WRITE, i.x.RELATIONSHIPS_READ, i.x.RELATIONSHIPS_WRITE, i.x.VOICE, i.x.DM_CHANNELS_READ, i.x.DM_CHANNELS_MESSAGES_READ, i.x.DM_CHANNELS_MESSAGES_WRITE, i.x.ROLE_CONNECTIONS_WRITE, i.x.PRESENCES_READ, i.x.PRESENCES_WRITE, i.x.GATEWAY_CONNECT, i.x.PAYMENT_SOURCES_COUNTRY_CODE],
  a = o.concat([i.x.WEBHOOK_INCOMING, i.x.BOT]),
  l = ["rpc.api"];

function u(e, t) {
  switch (e) {
    case i.x.IDENTIFY:
      return r.Z.Messages.SCOPE_IDENTIFY;
    case i.x.OPENID:
      return r.Z.Messages.SCOPE_OPENID;
    case i.x.EMAIL:
      return r.Z.Messages.SCOPE_EMAIL;
    case i.x.BOT:
      return r.Z.Messages.SCOPE_BOT;
    case i.x.CONNECTIONS:
      return r.Z.Messages.SCOPE_CONNECTIONS;
    case i.x.MESSAGES_READ:
      return r.Z.Messages.SCOPE_MESSAGES_READ;
    case i.x.GUILDS:
      return r.Z.Messages.SCOPE_GUILDS;
    case i.x.GUILDS_JOIN:
      return r.Z.Messages.SCOPE_GUILDS_JOIN;
    case i.x.GUILDS_MEMBERS_READ:
      if (t.includes(i.x.VOICE)) return r.Z.Messages.SCOPE_GUILDS_MEMBERS_READ_VOICE;
      return r.Z.Messages.SCOPE_GUILDS_MEMBERS_READ;
    case i.x.GDM_JOIN:
      return r.Z.Messages.SCOPE_GDM_JOIN;
    case i.x.RPC:
      return r.Z.Messages.SCOPE_RPC;
    case i.x.RPC_NOTIFICATIONS_READ:
      return r.Z.Messages.SCOPE_RPC_NOTIFICATIONS_READ;
    case i.x.RPC_VOICE_WRITE:
      return r.Z.Messages.SCOPE_RPC_VOICE_WRITE;
    case i.x.RPC_VIDEO_READ:
      return r.Z.Messages.SCOPE_RPC_VIDEO_READ;
    case i.x.RPC_VIDEO_WRITE:
      return r.Z.Messages.SCOPE_RPC_VIDEO_WRITE;
    case i.x.RPC_SCREENSHARE_READ:
      return r.Z.Messages.SCOPE_RPC_SCREENSHARE_READ;
    case i.x.RPC_SCREENSHARE_WRITE:
      return r.Z.Messages.SCOPE_RPC_SCREENSHARE_WRITE;
    case i.x.RPC_VOICE_READ:
      return r.Z.Messages.SCOPE_RPC_VOICE_READ;
    case i.x.RPC_ACTIVITIES_WRITE:
      return r.Z.Messages.SCOPE_RPC_ACTIVITIES_WRITE;
    case i.x.APPLICATIONS_BUILDS_UPLOAD:
      return r.Z.Messages.SCOPE_APPLICATIONS_BUILDS_UPLOAD;
    case i.x.APPLICATIONS_BUILDS_READ:
      return r.Z.Messages.SCOPE_APPLICATIONS_BUILDS_READ;
    case i.x.APPLICATIONS_COMMANDS:
      return r.Z.Messages.SCOPE_APPLICATIONS_COMMANDS;
    case i.x.APPLICATIONS_COMMANDS_UPDATE:
      return r.Z.Messages.SCOPE_APPLICATIONS_COMMANDS_UPDATE;
    case i.x.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE:
      return r.Z.Messages.SCOPE_APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE;
    case i.x.APPLICATIONS_STORE_UPDATE:
      return r.Z.Messages.SCOPE_APPLICATIONS_STORE_UPDATE;
    case i.x.APPLICATIONS_ENTITLEMENTS:
      return r.Z.Messages.SCOPE_APPLICATIONS_ENTITLEMENTS;
    case i.x.ACTIVITIES_READ:
      return r.Z.Messages.SCOPE_ACTIVITIES_READ;
    case i.x.ACTIVITIES_WRITE:
      return r.Z.Messages.SCOPE_ACTIVITIES_WRITE;
    case i.x.RELATIONSHIPS_READ:
      return r.Z.Messages.SCOPE_RELATIONSHIPS_READ;
    case i.x.RELATIONSHIPS_WRITE:
      return r.Z.Messages.SCOPE_RELATIONSHIPS_WRITE;
    case i.x.VOICE:
      return r.Z.Messages.SCOPE_VOICE;
    case i.x.DM_CHANNELS_READ:
      return r.Z.Messages.SCOPE_DM_CHANNELS_READ;
    case i.x.ROLE_CONNECTIONS_WRITE:
      return r.Z.Messages.SCOPE_ROLE_CONNECTIONS_WRITE;
    case i.x.PRESENCES_READ:
      return r.Z.Messages.SCOPE_PRESENCES_READ;
    case i.x.PRESENCES_WRITE:
      return r.Z.Messages.SCOPE_PRESENCES_WRITE;
    case i.x.DM_CHANNELS_MESSAGES_READ:
      return r.Z.Messages.SCOPE_DM_CHANNELS_MESSAGES_READ;
    case i.x.DM_CHANNELS_MESSAGES_WRITE:
      return r.Z.Messages.SCOPE_DM_CHANNELS_MESSAGES_WRITE;
    case i.x.GATEWAY_CONNECT:
      return r.Z.Messages.SCOPE_GATEWAY_CONNECT;
    case i.x.PAYMENT_SOURCES_COUNTRY_CODE:
      return r.Z.Messages.SCOPE_PAYMENT_SOURCES_COUNTRY_CODE;
    default:
      return e
  }
}

function _(e) {
  return e.includes(i.x.MESSAGES_READ) ? r.Z.Messages.OAUTH2_CAN_READ_NOTICE.format() : r.Z.Messages.OAUTH2_CANNOT_READ_SEND_NOTICE.format()
}