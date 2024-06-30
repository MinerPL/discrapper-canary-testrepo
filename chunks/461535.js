t.d(n, {
    Z: function () {
        return Z;
    }
}), t(47120);
var i = t(735250);
t(470079);
var a = t(442837), s = t(481060), u = t(45114), r = t(456269), l = t(344185), d = t(569471), o = t(131704), c = t(324067), M = t(306680), _ = t(981631), E = t(689938);
function Z(e) {
    let n = function (e) {
        let n = (0, r.n2)(e.guild_id, e.id), t = (0, a.e7)([
                M.ZP,
                c.Z,
                l.Z,
                d.Z
            ], () => {
                if (e.isForumPost())
                    return M.ZP.isForumPostUnread(e.id);
                if (e.type !== _.d4z.GUILD_CATEGORY)
                    return M.ZP.hasUnreadOrMentions(e.id);
                {
                    let n = c.Z.getCategories(e.getGuildId());
                    if (null == n[e.id])
                        return !1;
                    if (n[e.id].some(e => {
                            let {channel: n} = e;
                            return (0, o.Em)(n.type) && M.ZP.hasUnreadOrMentions(n.id);
                        }))
                        return !0;
                    let t = new Set(n[e.id].map(e => e.channel.id)), i = l.Z.getThreadsForGuild(e.guild_id);
                    for (let e in i)
                        if (t.has(e)) {
                            for (let n in i[e])
                                if (d.Z.hasJoined(n) && !d.Z.isMuted(n) && M.ZP.hasUnreadOrMentions(n))
                                    return !0;
                        }
                    return !1;
                }
            }, [e]);
        return e.isForumLikeChannel() ? n > 0 : t;
    }(e);
    return (0, i.jsx)(s.MenuItem, {
        id: 'mark-channel-read',
        label: E.Z.Messages.MARK_AS_READ,
        action: function () {
            (0, u.U6)(e);
        },
        disabled: !n
    });
}
