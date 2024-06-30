n.d(t, {
    Qe: function () {
        return o;
    },
    W3: function () {
        return c;
    },
    ZW: function () {
        return a;
    },
    ak: function () {
        return s;
    },
    jW: function () {
        return u;
    },
    up: function () {
        return l;
    }
});
var r = n(243814), i = n(689938);
let a = [
        () => i.Z.Messages.OAUTH2_FAKE_SCOPE_1,
        () => i.Z.Messages.OAUTH2_FAKE_SCOPE_2,
        () => i.Z.Messages.OAUTH2_FAKE_SCOPE_3,
        () => i.Z.Messages.OAUTH2_FAKE_SCOPE_4,
        () => i.Z.Messages.OAUTH2_FAKE_SCOPE_5,
        () => i.Z.Messages.OAUTH2_FAKE_SCOPE_6,
        () => i.Z.Messages.OAUTH2_FAKE_SCOPE_7,
        () => i.Z.Messages.OAUTH2_FAKE_SCOPE_8
    ], o = [
        r.x.BOT,
        r.x.OPENID,
        r.x.IDENTIFY,
        r.x.EMAIL,
        r.x.CONNECTIONS,
        r.x.MESSAGES_READ,
        r.x.GUILDS,
        r.x.GUILDS_JOIN,
        r.x.GUILDS_MEMBERS_READ,
        r.x.GDM_JOIN,
        r.x.RPC,
        r.x.RPC_NOTIFICATIONS_READ,
        r.x.RPC_VOICE_READ,
        r.x.RPC_VOICE_WRITE,
        r.x.RPC_VIDEO_READ,
        r.x.RPC_VIDEO_WRITE,
        r.x.RPC_SCREENSHARE_READ,
        r.x.RPC_SCREENSHARE_WRITE,
        r.x.RPC_ACTIVITIES_WRITE,
        r.x.APPLICATIONS_BUILDS_UPLOAD,
        r.x.APPLICATIONS_BUILDS_READ,
        r.x.APPLICATIONS_COMMANDS,
        r.x.APPLICATIONS_COMMANDS_UPDATE,
        r.x.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE,
        r.x.APPLICATIONS_STORE_UPDATE,
        r.x.APPLICATIONS_ENTITLEMENTS,
        r.x.ACTIVITIES_READ,
        r.x.ACTIVITIES_WRITE,
        r.x.RELATIONSHIPS_READ,
        r.x.RELATIONSHIPS_WRITE,
        r.x.VOICE,
        r.x.DM_CHANNELS_READ,
        r.x.DM_CHANNELS_MESSAGES_READ,
        r.x.DM_CHANNELS_MESSAGES_WRITE,
        r.x.ROLE_CONNECTIONS_WRITE,
        r.x.PRESENCES_READ,
        r.x.PRESENCES_WRITE,
        r.x.GATEWAY_CONNECT,
        r.x.PAYMENT_SOURCES_COUNTRY_CODE
    ], s = o.concat([
        r.x.WEBHOOK_INCOMING,
        r.x.BOT
    ]), l = ['rpc.api'];
function u(e, t) {
    switch (e) {
    case r.x.IDENTIFY:
        return i.Z.Messages.SCOPE_IDENTIFY;
    case r.x.OPENID:
        return i.Z.Messages.SCOPE_OPENID;
    case r.x.EMAIL:
        return i.Z.Messages.SCOPE_EMAIL;
    case r.x.BOT:
        return i.Z.Messages.SCOPE_BOT;
    case r.x.CONNECTIONS:
        return i.Z.Messages.SCOPE_CONNECTIONS;
    case r.x.MESSAGES_READ:
        return i.Z.Messages.SCOPE_MESSAGES_READ;
    case r.x.GUILDS:
        return i.Z.Messages.SCOPE_GUILDS;
    case r.x.GUILDS_JOIN:
        return i.Z.Messages.SCOPE_GUILDS_JOIN;
    case r.x.GUILDS_MEMBERS_READ:
        if (t.includes(r.x.VOICE))
            return i.Z.Messages.SCOPE_GUILDS_MEMBERS_READ_VOICE;
        return i.Z.Messages.SCOPE_GUILDS_MEMBERS_READ;
    case r.x.GDM_JOIN:
        return i.Z.Messages.SCOPE_GDM_JOIN;
    case r.x.RPC:
        return i.Z.Messages.SCOPE_RPC;
    case r.x.RPC_NOTIFICATIONS_READ:
        return i.Z.Messages.SCOPE_RPC_NOTIFICATIONS_READ;
    case r.x.RPC_VOICE_WRITE:
        return i.Z.Messages.SCOPE_RPC_VOICE_WRITE;
    case r.x.RPC_VIDEO_READ:
        return i.Z.Messages.SCOPE_RPC_VIDEO_READ;
    case r.x.RPC_VIDEO_WRITE:
        return i.Z.Messages.SCOPE_RPC_VIDEO_WRITE;
    case r.x.RPC_SCREENSHARE_READ:
        return i.Z.Messages.SCOPE_RPC_SCREENSHARE_READ;
    case r.x.RPC_SCREENSHARE_WRITE:
        return i.Z.Messages.SCOPE_RPC_SCREENSHARE_WRITE;
    case r.x.RPC_VOICE_READ:
        return i.Z.Messages.SCOPE_RPC_VOICE_READ;
    case r.x.RPC_ACTIVITIES_WRITE:
        return i.Z.Messages.SCOPE_RPC_ACTIVITIES_WRITE;
    case r.x.APPLICATIONS_BUILDS_UPLOAD:
        return i.Z.Messages.SCOPE_APPLICATIONS_BUILDS_UPLOAD;
    case r.x.APPLICATIONS_BUILDS_READ:
        return i.Z.Messages.SCOPE_APPLICATIONS_BUILDS_READ;
    case r.x.APPLICATIONS_COMMANDS:
        return i.Z.Messages.SCOPE_APPLICATIONS_COMMANDS;
    case r.x.APPLICATIONS_COMMANDS_UPDATE:
        return i.Z.Messages.SCOPE_APPLICATIONS_COMMANDS_UPDATE;
    case r.x.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE:
        return i.Z.Messages.SCOPE_APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE;
    case r.x.APPLICATIONS_STORE_UPDATE:
        return i.Z.Messages.SCOPE_APPLICATIONS_STORE_UPDATE;
    case r.x.APPLICATIONS_ENTITLEMENTS:
        return i.Z.Messages.SCOPE_APPLICATIONS_ENTITLEMENTS;
    case r.x.ACTIVITIES_READ:
        return i.Z.Messages.SCOPE_ACTIVITIES_READ;
    case r.x.ACTIVITIES_WRITE:
        return i.Z.Messages.SCOPE_ACTIVITIES_WRITE;
    case r.x.RELATIONSHIPS_READ:
        return i.Z.Messages.SCOPE_RELATIONSHIPS_READ;
    case r.x.RELATIONSHIPS_WRITE:
        return i.Z.Messages.SCOPE_RELATIONSHIPS_WRITE;
    case r.x.VOICE:
        return i.Z.Messages.SCOPE_VOICE;
    case r.x.DM_CHANNELS_READ:
        return i.Z.Messages.SCOPE_DM_CHANNELS_READ;
    case r.x.ROLE_CONNECTIONS_WRITE:
        return i.Z.Messages.SCOPE_ROLE_CONNECTIONS_WRITE;
    case r.x.PRESENCES_READ:
        return i.Z.Messages.SCOPE_PRESENCES_READ;
    case r.x.PRESENCES_WRITE:
        return i.Z.Messages.SCOPE_PRESENCES_WRITE;
    case r.x.DM_CHANNELS_MESSAGES_READ:
        return i.Z.Messages.SCOPE_DM_CHANNELS_MESSAGES_READ;
    case r.x.DM_CHANNELS_MESSAGES_WRITE:
        return i.Z.Messages.SCOPE_DM_CHANNELS_MESSAGES_WRITE;
    case r.x.GATEWAY_CONNECT:
        return i.Z.Messages.SCOPE_GATEWAY_CONNECT;
    case r.x.PAYMENT_SOURCES_COUNTRY_CODE:
        return i.Z.Messages.SCOPE_PAYMENT_SOURCES_COUNTRY_CODE;
    default:
        return e;
    }
}
function c(e) {
    return e.includes(r.x.MESSAGES_READ) ? i.Z.Messages.OAUTH2_CAN_READ_NOTICE.format() : i.Z.Messages.OAUTH2_CANNOT_READ_SEND_NOTICE.format();
}
