t.d(e, {
    Z: function () {
        return S;
    }
});
var i = t(735250);
t(470079);
var u = t(442837), l = t(481060), r = t(430824), a = t(594174), s = t(979651), d = t(471253), o = t(200498), c = t(88751), _ = t(267980), E = t(623633), T = t(689938);
function S(n) {
    var e;
    let t = (0, E.Z)(), S = null == t ? void 0 : t.id, f = null == t ? void 0 : t.guild_id, A = (0, u.e7)([r.Z], () => r.Z.getGuild(f), [f]), I = (0, u.e7)([s.Z], () => null != S ? s.Z.getVoiceStateForChannel(S, n.id) : null, [
            S,
            n.id
        ]), N = (null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n.id, M = (0, _.Z)(), O = (0, u.e7)([c.ZP], () => c.ZP.getPermissionsForUser(n.id, S), [
            S,
            n.id
        ]), Z = (0, o.B)(S);
    if (null == t || null == A || null == I || O.speaker)
        return null;
    let g = () => {
        N ? (0, d.RK)(t, !1) : (0, d._0)(t, n.id);
    };
    return Z ? (0, i.jsx)(l.MenuItem, {
        id: 'invite-speaker',
        label: N ? T.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : T.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
        action: g
    }) : M && N ? (0, i.jsx)(l.MenuItem, {
        id: 'invite-speaker',
        label: T.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
        action: g
    }) : null;
}
