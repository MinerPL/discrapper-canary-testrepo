var i = n(735250),
    a = n(470079),
    s = n(392711),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(557135),
    u = n(590293),
    d = n(66999),
    h = n(665906),
    m = n(496675),
    p = n(979651),
    _ = n(585483),
    E = n(665149),
    f = n(981631),
    C = n(689938);
t.Z = a.memo(function (e) {
    let { channel: t } = e,
        n = (0, u.Z)(),
        s = (0, r.e7)([p.Z], () => p.Z.isInChannel(t.id)),
        g = (0, r.e7)([p.Z], () => !l().isEmpty(p.Z.getVoiceStatesForChannel(t.id))),
        I = (0, r.e7)([m.Z], () => m.Z.can(f.Plq.CONNECT, t)),
        { needSubscriptionToAccess: x } = (0, d.Z)(t.id),
        T = (0, h.$R)(t),
        N = a.useCallback(() => {
            c.Z.handleVoiceConnect({
                channel: t,
                connected: s,
                needSubscriptionToAccess: x,
                locked: !1
            });
        }, [t, s, x]);
    return (a.useEffect(
        () => (
            _.S.subscribe(f.CkL.CALL_START, N),
            () => {
                _.S.unsubscribe(f.CkL.CALL_START, N);
            }
        ),
        [N]
    ),
    h.tM.useExperiment(
        {
            guildId: t.guild_id,
            location: '63250c_1'
        },
        { autoTrackExposure: !1 }
    ).enabled &&
        !n &&
        !s &&
        I &&
        T &&
        t.isVocalThread())
        ? (0, i.jsx)(E.ZP.Icon, {
              icon: o.PhoneCallIcon,
              onClick: N,
              tooltip: g ? C.Z.Messages.JOIN_VOICE_CALL : C.Z.Messages.START_VOICE_CALL
          })
        : null;
});
