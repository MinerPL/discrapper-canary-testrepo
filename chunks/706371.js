n.d(t, {
    Z: function () {
        return d;
    },
    r: function () {
        return c;
    }
}),
    n(47120),
    n(653041),
    n(724458);
var s = n(735250);
n(470079);
var a = n(442837),
    i = n(447003),
    r = n(984933),
    l = n(512508),
    o = n(981631);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (0, a.Wu)(
        [r.ZP],
        () => {
            let a = r.ZP.getChannels(e)[o.d4z.GUILD_CATEGORY],
                c = [...r.ZP.getChannels(e)[r.sH], ...r.ZP.getChannels(e)[r.Zb]],
                d = [],
                u = {};
            return (
                a.forEach((e) => {
                    let { channel: t, comparator: n } = e;
                    'null' !== t.id &&
                        ((u[t.id] = []),
                        d.push({
                            channel: t,
                            comparator: n
                        }));
                }),
                c.forEach((e) => {
                    let { channel: a, comparator: r } = e;
                    if (!(a.isThread() || t.has(a.id) || (a.isGuildStageVoice() && !s) || (!n && (0, i.Z)(a))))
                        null == a.parent_id
                            ? d.push({
                                  channel: a,
                                  comparator: r
                              })
                            : (null == u[a.parent_id] && (u[a.parent_id] = []),
                              u[a.parent_id].push({
                                  channel: a,
                                  comparator: r
                              }));
                }),
                d
                    .sort((e, t) => {
                        let { comparator: n, channel: s } = e,
                            { comparator: a, channel: i } = t;
                        return s.isCategory() && !i.isCategory() ? 1 : !s.isCategory() && i.isCategory() ? -1 : a - n;
                    })
                    .reduce((e, n) => {
                        let { channel: s } = n;
                        if (s.isGuildStageVoice() || s.isThread() || t.has(s.id)) return e;
                        e.push((0, l.PM)(s).row);
                        let a = u[s.id];
                        return (
                            null != a &&
                                a.length > 0 &&
                                a.forEach((t) => {
                                    let { channel: n } = t;
                                    e.push((0, l.PM)(n).row);
                                }),
                            e
                        );
                    }, [])
            );
        },
        [e, n, s, t]
    );
}
function d(e) {
    let { guildId: t, selectedChannelIds: n, onChange: a, placeholder: i, includeRoleRestrictedPrivateChannels: r = !1, includeStageVoiceChannels: o = !1, helperText: d, className: u } = e,
        _ = c(t, n, r, o);
    return (0, s.jsx)(l.ZP, {
        channelRows: _,
        guildId: t,
        selectedChannelIds: n,
        onChange: (e, t) => a(e),
        placeholder: i,
        helperText: d,
        className: u
    });
}
