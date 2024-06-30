t.d(n, {
    ZP: function () {
        return T;
    },
    k: function () {
        return O;
    }
}), t(47120);
var i = t(735250);
t(470079);
var a = t(913527), s = t.n(a), u = t(442837), r = t(481060), l = t(211739), d = t(92114), o = t(777861), c = t(9156), M = t(621600), _ = t(933557), E = t(981631), Z = t(969943), N = t(689938);
let O = () => [
        {
            value: Z.Oe.MINUTES_15,
            label: N.Z.Messages.MUTE_DURATION_15_MINUTES
        },
        {
            value: Z.Oe.HOURS_1,
            label: N.Z.Messages.MUTE_DURATION_1_HOUR
        },
        {
            value: Z.Oe.HOURS_3,
            label: N.Z.Messages.MUTE_DURATION_3_HOURS
        },
        {
            value: Z.Oe.HOURS_8,
            label: N.Z.Messages.MUTE_DURATION_8_HOURS
        },
        {
            value: Z.Oe.HOURS_24,
            label: N.Z.Messages.MUTE_DURATION_24_HOURS
        },
        {
            value: Z.Oe.ALWAYS,
            label: N.Z.Messages.MUTE_DURATION_ALWAYS
        }
    ], f = e => {
        let n = e > 0 ? s()().add(e, 'second').toISOString() : null;
        return {
            muted: !0,
            mute_config: {
                selected_time_window: e,
                end_time: n
            }
        };
    };
function T(e, n) {
    let [t, a] = (0, u.Wu)([c.ZP], () => [
            c.ZP.isChannelMuted(e.guild_id, e.id),
            c.ZP.getChannelMuteConfig(e.guild_id, e.id)
        ]), s = (0, o.U)(a), Z = (0, _.ZP)(e, !0);
    function T(n) {
        n && e.type === E.d4z.GUILD_CATEGORY && (0, l.c4)(e.id), d.Z.updateChannelOverrideSettings(e.guild_id, e.id, { muted: n }, M.UE.muted(n));
    }
    let A = N.Z.Messages.MUTE_CHANNEL_GENERIC, U = N.Z.Messages.UNMUTE_CHANNEL_GENERIC;
    switch (e.type) {
    case E.d4z.GUILD_CATEGORY:
        A = N.Z.Messages.MUTE_CATEGORY, U = N.Z.Messages.UNMUTE_CATEGORY;
        break;
    case E.d4z.GROUP_DM:
        A = N.Z.Messages.MUTE_CONVERSATION, U = N.Z.Messages.UNMUTE_CONVERSATION;
        break;
    case E.d4z.DM:
        A = N.Z.Messages.MUTE_CHANNEL.format({ name: Z }), U = N.Z.Messages.UNMUTE_CHANNEL.format({ name: Z });
        break;
    default:
        A = N.Z.Messages.MUTE_CHANNEL_GENERIC, U = N.Z.Messages.UNMUTE_CHANNEL_GENERIC;
    }
    return t ? (0, i.jsx)(r.MenuItem, {
        id: 'unmute-channel',
        label: U,
        subtext: s,
        action: () => T(!1)
    }) : (0, i.jsx)(r.MenuItem, {
        id: 'mute-channel',
        label: A,
        action: () => T(!0),
        children: O().map(t => {
            let {
                value: a,
                label: s
            } = t;
            return (0, i.jsx)(r.MenuItem, {
                id: ''.concat(a),
                label: s,
                action: () => function (t) {
                    e.type === E.d4z.GUILD_CATEGORY && (0, l.c4)(e.id);
                    let i = f(t);
                    d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, M.ZB.Muted, n);
                }(a)
            }, a);
        })
    });
}
