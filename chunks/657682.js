n.d(t, {
    NF: function () {
        return d;
    },
    Zy: function () {
        return c;
    }
}),
    n(47120),
    n(512722);
var r = n(626135),
    i = n(777754),
    a = n(981631),
    s = n(689938);
let o = /^\d+$/,
    l = /^(.+?@.+?\..+?|.+?#\d{4})$/,
    u = /^[a-zA-Z0-9_\\.]+$/;
function c(e) {
    return u.test(e) || (e.includes('#') && l.test(e))
        ? null
        : ((function (e) {
              let [t, n] = e.split('#');
              r.default.track(a.rMx.FRIEND_REQUEST_FAILED, {
                  reason: 'Invalid Username',
                  query: e,
                  discrim_len: (null != n ? n : '').length,
                  username_len: t.length,
                  is_email_like: i.Z.isEmail(e),
                  is_invite_like: i.Z.isInvite(e),
                  is_num_only: o.test(e)
              });
          })(e),
          s.Z.Messages.POMELO_ADD_FRIEND_ERROR);
}
function d(e, t) {
    switch (e) {
        case a.evJ.RELATIONSHIP_INCOMING_DISABLED:
            return s.Z.Messages.ADD_FRIEND_ERROR_INVALID_DISCORD_TAG.format({ discordTag: t });
        case a.evJ.TOO_MANY_FRIENDS:
            return s.Z.Messages.ADD_FRIEND_ERROR_TOO_MANY_FRIENDS;
        case a.evJ.RELATIONSHIP_ALREADY_FRIENDS:
            return s.Z.Messages.ADD_FRIEND_ERROR_ALREADY_FRIENDS;
        case a.evJ.USER_QUARANTINED:
        case a.evJ.USER_FRIEND_REQUEST_LIMITED_ACCESS:
            return s.Z.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING;
        case a.evJ.TOO_MANY_BLOCKED_USERS:
            return s.Z.Messages.BLOCK_USER_ERROR_TOO_MANY_BLOCKED_USERS;
        case a.evJ.RELATIONSHIP_INCOMING_BLOCKED:
        case a.evJ.RELATIONSHIP_INVALID_SELF:
        case a.evJ.RELATIONSHIP_INVALUD_USER_BOT:
        case a.evJ.RELATIONSHIP_INVALID_DISCORD_TAG:
        default:
            return s.Z.Messages.POMELO_ADD_FRIEND_ERROR;
    }
}
