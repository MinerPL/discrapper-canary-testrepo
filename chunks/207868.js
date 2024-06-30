var i = n(735250), a = n(470079), l = n(392711), s = n.n(l), r = n(442837), o = n(481060), c = n(557135), u = n(590293), d = n(66999), h = n(665906), p = n(496675), m = n(979651), _ = n(502568), f = n(585483), E = n(981631), C = n(689938);
t.Z = a.memo(function (e) {
    let {channel: t} = e, n = (0, u.Z)(), l = (0, r.e7)([m.Z], () => m.Z.isInChannel(t.id)), g = (0, r.e7)([m.Z], () => !s().isEmpty(m.Z.getVoiceStatesForChannel(t.id))), I = (0, r.e7)([p.Z], () => p.Z.can(E.Plq.CONNECT, t)), {needSubscriptionToAccess: x} = (0, d.Z)(t.id), T = (0, h.$R)(t), N = a.useCallback(() => {
            c.Z.handleVoiceConnect({
                channel: t,
                connected: l,
                needSubscriptionToAccess: x,
                locked: !1
            });
        }, [
            t,
            l,
            x
        ]);
    return (a.useEffect(() => (f.S.subscribe(E.CkL.CALL_START, N), () => {
        f.S.unsubscribe(E.CkL.CALL_START, N);
    }), [N]), h.tM.useExperiment({
        guildId: t.guild_id,
        location: '63250c_1'
    }, { autoTrackExposure: !1 }).enabled && !n && !l && I && T && t.isVocalThread()) ? (0, i.jsx)(_.ZP.Icon, {
        icon: o.PhoneCallIcon,
        onClick: N,
        tooltip: g ? C.Z.Messages.JOIN_VOICE_CALL : C.Z.Messages.START_VOICE_CALL
    }) : null;
});
