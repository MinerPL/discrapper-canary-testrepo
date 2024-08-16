var i = n(735250);
n(470079);
var a = n(338545),
    s = n(442837),
    r = n(481060),
    l = n(536442),
    o = n(984933),
    c = n(496675),
    d = n(51382),
    u = n(91326),
    _ = n(503856),
    E = n(981631);
function h(e) {
    let { channel: t, guild: n } = e,
        o = (0, s.e7)([l.qc], () => l.qc.hasHotspot(l.v6.HUB_STUDY_ROOM_NOTICE)),
        c = (0, _.r)(t.guild_id),
        E = (0, r.useSpring)({
            maxHeight: c ? 0 : 300,
            overflow: 'hidden',
            delay: 400
        });
    return (0, i.jsx)(a.animated.div, {
        style: E,
        children: o
            ? (0, i.jsx)(d.Z, {
                  channel: t,
                  guild: n
              })
            : (0, i.jsx)(u.Z, {
                  name: '\uD83D\uDCDA\u2615 '.concat(t.name),
                  channel: t
              })
    });
}
t.Z = function (e) {
    let { guild: t } = e,
        n = (0, s.e7)([o.ZP], () => o.ZP.getChannels(t.id)[o.Zb][0]),
        a = (0, s.e7)([c.Z], () => null != n && c.Z.can(E.Plq.CONNECT, n.channel));
    return t.hasFeature(E.oNc.HUB) && null != n && a
        ? (0, i.jsx)(h, {
              channel: n.channel,
              guild: t
          })
        : null;
};
