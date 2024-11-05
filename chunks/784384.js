n.d(t, {
    HY: function () {
        return S;
    },
    nm: function () {
        return I;
    },
    pU: function () {
        return A;
    },
    y: function () {
        return C;
    }
}),
    n(47120),
    n(390547);
var l = n(192379),
    i = n(106351),
    a = n(442837),
    r = n(933557),
    s = n(987509),
    o = n(926491),
    c = n(378233),
    u = n(131704),
    d = n(592125),
    h = n(496675),
    f = n(699516),
    _ = n(594174),
    g = n(408433),
    m = n(823379),
    p = n(981631),
    E = n(388032);
function I(e) {
    let t = e.map(s.hl).find(m.lm),
        n = (0, a.e7)([d.Z], () => d.Z.getChannel(t), [t]);
    return l.useMemo(
        () =>
            null != n
                ? n
                : (0, u.kt)({
                      id: '1',
                      type: i.d.DM
                  }),
        [n]
    );
}
function S(e, t, n) {
    let l = n instanceof u.Sf;
    if (t.isNSFW() && !(l && n.isNSFW())) return { label: E.intl.string(E.t.KgPx1N) };
    if (l && (0, u.Km)(n.type)) {
        if ((e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) && !h.Z.can(p.Plq.ATTACH_FILES, n)) return { label: E.intl.string(E.t.P7yvbm) };
        if ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) && !(0, g.eC)(n, h.Z) && !(0, g.En)(e)) return { label: E.intl.string(E.t.Wr4RIS) };
        let t = [
            ...(0, c.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
                let { message: t } = e;
                return (0, c.cv)(t);
            })
        ];
        if (
            t.length > 0 &&
            !h.Z.can(p.Plq.USE_EXTERNAL_STICKERS, n) &&
            t.some((e) =>
                (function (e, t) {
                    let n = o.Z.getStickerById(e.id);
                    return !!(null != n && (0, c.J8)(n)) && (n.guild_id !== t.guild_id || void 0);
                })(e, n)
            )
        )
            return { label: E.intl.string(E.t['0Yyrub']) };
        if ((e.hasFlag(p.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some((e) => e.message.hasFlag(p.iLy.IS_VOICE_MESSAGE))) && !h.Z.can(p.Plq.SEND_VOICE_MESSAGES, n)) return { label: E.intl.string(E.t.quj4DQ) };
    }
}
function A(e, t) {
    return null != e.rateLimitPerUser && !!(e.rateLimitPerUser > 0) && !(t.can(p.Plq.MANAGE_CHANNELS, e) || t.can(p.Plq.MANAGE_MESSAGES, e));
}
function C(e) {
    let t = (0, a.Wu)(
        [d.Z, h.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return 'channel' === t ? d.Z.getChannel(n) : null;
                })
                .filter(m.lm)
                .filter((e) => A(e, h.Z)),
        [e]
    );
    return (0, a.Wu)([_.default, f.Z], () => t.map((e) => (0, r.F6)(e, _.default, f.Z, !0)), [t]);
}
