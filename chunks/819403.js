l.d(n, {
    Z: function () {
        return _;
    }
});
var t = l(735250);
l(470079);
var r = l(442837),
    i = l(481060),
    a = l(430824),
    s = l(594174),
    u = l(979651),
    d = l(471253),
    o = l(200498),
    c = l(88751),
    Z = l(267980),
    E = l(623633),
    M = l(689938);
function _(e) {
    var n;
    let l = (0, E.Z)(),
        _ = null == l ? void 0 : l.id,
        f = null == l ? void 0 : l.guild_id,
        g = (0, r.e7)([a.Z], () => a.Z.getGuild(f), [f]),
        I = (0, r.e7)([u.Z], () => (null != _ ? u.Z.getVoiceStateForChannel(_, e.id) : null), [_, e.id]),
        m = (null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
        R = (0, Z.Z)(),
        N = (0, r.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, _), [_, e.id]),
        A = (0, o.B)(_);
    if (null == l || null == g || null == I || N.speaker) return null;
    let C = () => {
        m ? (0, d.RK)(l, !1) : (0, d._0)(l, e.id);
    };
    return A
        ? (0, t.jsx)(i.MenuItem, {
              id: 'invite-speaker',
              label: m ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: C
          })
        : R && m
          ? (0, t.jsx)(i.MenuItem, {
                id: 'invite-speaker',
                label: M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: C
            })
          : null;
}
