n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(735250);
n(470079);
var l = n(442837),
    r = n(481060),
    a = n(287734),
    s = n(770471),
    o = n(313201),
    c = n(592125),
    u = n(306680),
    d = n(944486),
    h = n(594174),
    p = n(436088),
    _ = n(51144),
    f = n(603592),
    g = n(674552),
    m = n(689938);
function C() {
    var e;
    let t = (0, o.Dt)(),
        [n, C] = (0, l.Wu)([d.Z, c.Z], () => [c.Z.getChannel(d.Z.getVoiceChannelId()), d.Z.getCurrentlySelectedChannelId(null)]),
        I = (0, l.e7)([u.ZP], () => (null != n ? u.ZP.getMentionCount(n.id) : 0)),
        E = (0, l.e7)([h.default], () => h.default.getUser(null == n ? void 0 : n.ownerId)),
        N = null !== (e = _.ZP.getGlobalName(E)) && void 0 !== e ? e : _.ZP.getUserTag(E),
        { canViewBroadcasts: x } = s.Z.useExperiment({ location: 'broadcast_button_guilds_bar_no_track' }, { autoTrackExposure: !1 }),
        S = null == n ? void 0 : n.isBroadcastChannel(),
        v = S && C === (null == n ? void 0 : n.id);
    return S && x
        ? (0, i.jsx)(f.Z, {
              id: t,
              onClick: () => {
                  S && null != n && a.default.selectPrivateChannel(n.id);
              },
              icon: p.Z,
              tooltip: null != N ? m.Z.Messages.BROADCASTING_CHANNEL_NAME.format({ name: N }) : void 0,
              selected: v,
              upperBadge: (0, i.jsx)(r.Avatar, {
                  size: r.AvatarSizes.SIZE_16,
                  src: null == E ? void 0 : E.getAvatarURL(null, 16),
                  'aria-label': N
              }),
              lowerBadge: I > 0 ? (0, g.Ne)(I) : null
          })
        : null;
}
