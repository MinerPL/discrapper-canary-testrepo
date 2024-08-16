n.d(t, {
    GN: function () {
        return R;
    },
    M2: function () {
        return C;
    },
    Nq: function () {
        return O;
    },
    SZ: function () {
        return L;
    },
    aC: function () {
        return D;
    },
    pI: function () {
        return N;
    },
    sR: function () {
        return y;
    },
    tt: function () {
        return M;
    }
}),
    n(653041);
var r = n(399606),
    i = n(704215),
    a = n(736045),
    s = n(695346),
    o = n(675478),
    l = n(581883),
    u = n(401062),
    c = n(131704),
    d = n(496675),
    _ = n(594174),
    E = n(626135),
    f = n(74538),
    h = n(51144),
    p = n(208049),
    m = n(763296),
    I = n(697426),
    T = n(641015),
    g = n(893663),
    S = n(710111),
    A = n(981631);
function N() {
    var e;
    let t = s.kU.getSetting();
    return null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100;
}
function v(e, t) {
    return (null == t ? void 0 : t.guild_id) == null || d.Z.can(A.Plq.USE_EXTERNAL_SOUNDS, t) || e.guildId === S.X8 || e.guildId === (null == t ? void 0 : t.guild_id);
}
function O(e, t, n) {
    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    return (f.ZP.canUseSoundboardEverywhere(e) || t.guildId === (null == n ? void 0 : n.guild_id) || t.guildId === S.X8) && v(t, n) && (!r || t.available);
}
function R(e, t, n) {
    (0, p.XE)(t, e, I.YQ.SOUNDBOARD), (0, u.kq)(t, e, __OVERLAY__, n);
}
async function C(e) {
    let t = _.default.getCurrentUser(),
        n = (0, a.Z)(),
        r = (0, g.k9)(e);
    if (null == n || c.Lr.has(n.type) || null == r || !f.ZP.canUseCustomCallSounds(t) || !(0, T.D)()) return;
    await (0, p.w)();
    let i = r.guildId === S.hY ? S.X8 : r.guildId,
        s = m.Z.getSound(i, r.soundId);
    if (null != s) {
        var o, l;
        if (!v(s, n) || !O(t, s, n, !0)) return null;
        (o = s), (l = n.id), (0, p.XE)(l, o, I.YQ.JOINED_VOICE_CHANNEL), (0, u.vy)(l, o, __OVERLAY__);
    }
}
function y(e) {
    var t, n;
    let { isSoundboardButtonDisabled: a = !1 } = e,
        s = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        o = [i.z.SOUNDBOARD_EDUCATION];
    if (!a && !Object.values(null !== (n = null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {}).some((e) => null != e.joinSound)) {
        o.push(i.z.CUSTOM_CALL_SOUNDS_SPARKLES);
        let e = (0, h.Fc)(s);
        (f.ZP.canUseCustomCallSounds(s) || e) && o.push(i.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL);
    }
    return o;
}
function D(e, t) {
    (0, o.PS)(
        e,
        (n) => {
            (n.joinSound = void 0),
                b({
                    guildId: e,
                    changeType: I.MW.REMOVED,
                    soundType: I.jy.ENTRY,
                    location: t
                });
        },
        o.fy.INFREQUENT_USER_ACTION
    );
}
function L(e, t, n) {
    (0, o.PS)(
        e,
        (r) => {
            let i = t.guildId === S.X8,
                a = i ? I.H$.DEFAULT : I.H$.CUSTOM,
                s = null != r.joinSound ? I.MW.UPDATED : I.MW.ADDED;
            (r.joinSound = {
                soundId: t.soundId,
                guildId: i ? S.hY : t.guildId
            }),
                b({
                    guildId: e,
                    changeType: s,
                    soundSource: a,
                    soundType: I.jy.ENTRY,
                    location: n
                });
        },
        o.fy.INFREQUENT_USER_ACTION
    );
}
function b(e) {
    let { guildId: t, changeType: n, soundType: r, soundSource: i, location: a } = e;
    E.default.track(A.rMx.USER_CUSTOM_CALL_SOUND_SETTING_UPDATED, {
        location_stack: a,
        guild_id: '' === t ? 0 : Number(t),
        change_type: n,
        sound_type: r,
        sound_source: i
    });
}
function M(e) {
    let { location: t } = e;
    E.default.track(A.rMx.USER_CUSTOM_CALL_SOUND_SETTING_GUILD_REMOVED, { location_stack: t });
}
