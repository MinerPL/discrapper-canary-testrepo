i.d(n, {
    Z: function () {
        return a;
    }
}), i(627341);
var t = i(278074), o = i(162267), s = i(228168), l = i(689938);
function a(e) {
    var n;
    let i = null === (n = (0, o.Z)(e.id, !0).mutualGuilds) || void 0 === n ? void 0 : n.length;
    return [
        {
            section: s.oh.USER_INFO,
            text: l.Z.Messages.USER_PROFILE_ABOUT_ME
        },
        {
            section: s.oh.MUTUAL_GUILDS,
            text: (0, t.EQ)(i).with(void 0, () => l.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => l.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => l.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }))
        },
        {
            section: s.oh.BOT_DATA_ACCESS,
            text: l.Z.Messages.BOTS_DATA_ACCESS_TAB
        }
    ];
}
