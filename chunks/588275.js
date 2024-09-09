n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250);
n(470079);
var l = n(442837),
    r = n(239091),
    a = n(246364),
    s = n(937111),
    o = n(914010),
    c = n(451478),
    u = n(325257),
    d = n(674552),
    h = n(981631);
function p(e, t) {
    (0, r.jW)(e, async () => {
        let { default: e } = await n.e('6368').then(n.bind(n, 987999));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                guild: t
            });
    });
}
function _(e) {
    let { guildNode: t } = e,
        n = t.id,
        r = (0, l.e7)([s.Z], () => s.Z.getRequest(n)),
        _ = (0, l.e7)([s.Z], () => s.Z.getJoinRequestGuild(n), [n]),
        f = (0, l.e7)([c.Z], () => c.Z.isFocused()),
        g = (0, l.e7)([o.Z], () => o.Z.getGuildId());
    return null == _
        ? null
        : (0, i.jsx)(u.Z, {
              guildNode: t,
              guild: _,
              animatable: f,
              draggable: !1,
              selected: n === g,
              preloadOnClick: !1,
              contextMenu: p,
              lowerBadge: (null == r ? void 0 : r.applicationStatus) === a.wB.REJECTED ? (0, d.jt)({ guildJoinRequestStatus: r.applicationStatus }) : void 0,
              route: h.Z5c.GUILD_MEMBER_VERIFICATION(n)
          });
}
