n.d(t, {
    c: function () {
        return S;
    }
});
var r = n(481060), a = n(933557), i = n(592125), E = n(699516), _ = n(594174), u = n(273504), s = n(590433), l = n(689938);
let o = e => {
        if (e === u.jj.QUARANTINE_USER)
            return !1;
        return !0;
    }, I = e => {
        switch (e) {
        case u.jj.BLOCK_MESSAGE:
        case u.jj.FLAG_TO_CHANNEL:
        case u.jj.USER_COMMUNICATION_DISABLED:
        case u.jj.QUARANTINE_USER:
            return !0;
        default:
            return !1;
        }
    }, T = e => {
        switch (e) {
        case u.jj.BLOCK_MESSAGE:
            return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
        case u.jj.FLAG_TO_CHANNEL:
            return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
        case u.jj.USER_COMMUNICATION_DISABLED:
            return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
        case u.jj.QUARANTINE_USER:
            return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER;
        }
    }, O = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.fX.KEYWORD;
        switch (e) {
        case u.jj.BLOCK_MESSAGE:
            switch (t) {
            case u.fX.MENTION_SPAM:
                return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
            case u.fX.ML_SPAM:
                return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
            default:
                return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION;
            }
        case u.jj.FLAG_TO_CHANNEL:
            return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
        case u.jj.USER_COMMUNICATION_DISABLED:
            return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
        case u.jj.QUARANTINE_USER:
            return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION;
        }
    }, A = (e, t) => {
        var n, r, o;
        switch (e) {
        case u.jj.QUARANTINE_USER:
        case u.jj.BLOCK_MESSAGE:
            return null;
        case u.jj.FLAG_TO_CHANNEL: {
                let e = null == t ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.channelId;
                if (null == e)
                    return null;
                let r = i.Z.getChannel(e);
                if (null == r)
                    return null;
                let u = (0, a.F6)(r, _.default, E.Z);
                return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({ channelName: u });
            }
        case u.jj.USER_COMMUNICATION_DISABLED: {
                let e = null !== (o = null == t ? void 0 : null === (r = t.metadata) || void 0 === r ? void 0 : r.durationSeconds) && void 0 !== o ? o : 0, n = (0, s.L9)(e);
                if (null == n)
                    return null;
                return l.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({ duration: n });
            }
        }
    }, N = e => {
        switch (e) {
        case u.jj.BLOCK_MESSAGE:
            return r.CircleXIcon;
        case u.jj.FLAG_TO_CHANNEL:
            return r.TextIcon;
        case u.jj.USER_COMMUNICATION_DISABLED:
            return r.ClockWarningIcon;
        case u.jj.QUARANTINE_USER:
            return r.ChatXIcon;
        }
    };
function S(e, t, n) {
    var a, i, E, _;
    return I(e) ? {
        headerText: null !== (a = T(e)) && void 0 !== a ? a : '',
        descriptionText: null !== (i = O(e, n)) && void 0 !== i ? i : '',
        helperText: null !== (E = A(e, t)) && void 0 !== E ? E : null,
        icon: null !== (_ = N(e)) && void 0 !== _ ? _ : r.CircleXIcon,
        isEditable: o(e)
    } : null;
}
