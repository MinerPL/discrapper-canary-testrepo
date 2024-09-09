t.d(n, {
    Z: function () {
        return f;
    }
});
var a = t(735250);
t(470079);
var i = t(442837),
    s = t(481060),
    l = t(430824),
    o = t(594174),
    r = t(979651),
    u = t(471253),
    d = t(200498),
    c = t(88751),
    E = t(267980),
    Z = t(623633),
    M = t(689938);
function f(e) {
    var n;
    let t = (0, Z.Z)(),
        f = null == t ? void 0 : t.id,
        _ = null == t ? void 0 : t.guild_id,
        I = (0, i.e7)([l.Z], () => l.Z.getGuild(_), [_]),
        m = (0, i.e7)([r.Z], () => (null != f ? r.Z.getVoiceStateForChannel(f, e.id) : null), [f, e.id]),
        g = (null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
        A = (0, E.Z)(),
        N = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, f), [f, e.id]),
        C = (0, d.B)(f);
    if (null == t || null == I || null == m || N.speaker) return null;
    let T = () => {
        g ? (0, u.RK)(t, !1) : (0, u._0)(t, e.id);
    };
    return C
        ? (0, a.jsx)(s.MenuItem, {
              id: 'invite-speaker',
              label: g ? M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : M.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
              action: T
          })
        : A && g
          ? (0, a.jsx)(s.MenuItem, {
                id: 'invite-speaker',
                label: M.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                action: T
            })
          : null;
}
