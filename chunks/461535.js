t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(47120);
var i = t(735250);
t(470079);
var a = t(442837),
    l = t(481060),
    r = t(45114),
    u = t(456269),
    s = t(344185),
    o = t(569471),
    d = t(131704),
    c = t(324067),
    _ = t(306680),
    M = t(981631),
    I = t(689938);
function f(e) {
    let n = (function (e) {
        let n = (0, u.n2)(e.guild_id, e.id),
            t = (0, a.e7)(
                [_.ZP, c.Z, s.Z, o.Z],
                () => {
                    if (e.isForumPost()) return _.ZP.isForumPostUnread(e.id);
                    if (e.type !== M.d4z.GUILD_CATEGORY) return _.ZP.hasUnreadOrMentions(e.id);
                    {
                        let n = c.Z.getCategories(e.getGuildId());
                        if (null == n[e.id]) return !1;
                        if (
                            n[e.id].some((e) => {
                                let { channel: n } = e;
                                return (0, d.Em)(n.type) && _.ZP.hasUnreadOrMentions(n.id);
                            })
                        )
                            return !0;
                        let t = new Set(n[e.id].map((e) => e.channel.id)),
                            i = s.Z.getThreadsForGuild(e.guild_id);
                        for (let e in i)
                            if (t.has(e)) {
                                for (let n in i[e]) if (o.Z.hasJoined(n) && !o.Z.isMuted(n) && _.ZP.hasUnreadOrMentions(n)) return !0;
                            }
                        return !1;
                    }
                },
                [e]
            );
        return e.isForumLikeChannel() ? n > 0 : t;
    })(e);
    return (0, i.jsx)(l.MenuItem, {
        id: 'mark-channel-read',
        label: I.Z.Messages.MARK_AS_READ,
        action: function () {
            (0, r.U6)(e);
        },
        disabled: !n
    });
}
