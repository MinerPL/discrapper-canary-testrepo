i.d(n, {
    O: function () {
        return r;
    }
});
var t = i(630388), a = i(981631);
function r(e) {
    if (null != e)
        return {
            guildPresences: (0, t.yE)(e, a.udG.GATEWAY_PRESENCE),
            guildMembers: (0, t.yE)(e, a.udG.GATEWAY_GUILD_MEMBERS),
            messageContent: (0, t.yE)(e, a.udG.GATEWAY_MESSAGE_CONTENT),
            guildPresencesLimited: (0, t.yE)(e, a.udG.GATEWAY_PRESENCE_LIMITED),
            guildMembersLimited: (0, t.yE)(e, a.udG.GATEWAY_GUILD_MEMBERS_LIMITED),
            messageContentLimited: (0, t.yE)(e, a.udG.GATEWAY_MESSAGE_CONTENT_LIMITED)
        };
}
