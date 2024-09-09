n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120),
    n(724458);
var i = n(442837),
    l = n(592125),
    r = n(496675),
    a = n(306680),
    s = n(9156),
    o = n(709054),
    c = n(231338);
function u(e) {
    return (0, i.cj)([l.Z, a.ZP, s.ZP, r.Z], () => {
        let t = o.default.keys(e);
        return t.reduce(
            (e, t) => {
                let n = l.Z.getChannel(t),
                    i = null == n ? void 0 : n.isGuildVocal();
                return (e.badge = e.badge + a.ZP.getMentionCount(t)), (e.unread = e.unread || (!i && r.Z.can(c.Pl.VIEW_CHANNEL, n) && a.ZP.hasUnread(t) && !s.ZP.isChannelMuted(null == n ? void 0 : n.getGuildId(), t))), e;
            },
            {
                badge: 0,
                unread: !1
            }
        );
    });
}
