var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(112724), o = n(613611), c = n(351248), u = n(285952), d = n(585483), h = n(340295), p = n(171277), m = n(677845), _ = n(430371), f = n(236564), E = n(981631), C = n(354459), g = n(858962);
t.Z = (0, r.Z)(e => {
    let {
        participants: t,
        filteredParticipants: n,
        selectedParticipant: l,
        participantsVersion: r,
        layout: I,
        onSelectParticipant: x,
        onContextMenuParticipant: T,
        onFullscreenParticipant: N,
        channel: v,
        hasConnectPermission: S,
        className: Z,
        inCall: A,
        showParticipants: M = !0,
        paused: b = !1,
        width: R,
        height: j,
        idle: L,
        mode: P,
        popoutWindow: O,
        awaitingRemoteSessionInfo: y
    } = e;
    a.useEffect(() => {
        d.S.dispatch(E.CkL.REMEASURE_TARGET);
    }, [
        R,
        j
    ]);
    let D = a.useMemo(() => n.filter(e => e.type !== C.fO.ACTIVITY || !e.participants.some(e => (0, o.J)(e))), [
        n,
        r
    ]);
    if ((null == y ? void 0 : y.channelId) === v.id)
        return (0, i.jsx)(p.Z, { height: j });
    if ((null == v ? void 0 : v.isGuildVocal()) && !A)
        return (0, i.jsx)(h.Z, {
            channel: v,
            participants: t,
            hasConnectPermission: S
        });
    if (P === E.WtW.VOICE)
        return (0, i.jsx)(c.Z, {
            guildId: v.guild_id,
            width: R,
            className: g.voiceCallWrapper,
            participants: t,
            onContextMenu: T
        });
    if (n = A ? n : t, null == l)
        return 0 === n.length ? (0, i.jsx)(f.Z, {
            className: s()(g.videoGrid, g.hiddenParticipants),
            channelId: v.id,
            width: R
        }) : (0, i.jsx)(u.Z, {
            className: g.videoGridWrapper,
            justify: u.Z.Justify.CENTER,
            align: u.Z.Align.CENTER,
            children: (0, i.jsx)(m.Z, {
                channel: v,
                className: g.videoGrid,
                participants: D,
                totalNumberOfParticipants: t.length,
                onClick: x,
                onDoubleClick: N,
                onContextMenu: T,
                paused: b,
                inCall: A
            })
        });
    return (0, i.jsx)(_.Z, {
        onFullscreenParticipant: N,
        onContextMenuParticipant: T,
        onSelectParticipant: x,
        selectedParticipant: l,
        filteredParticipants: D,
        participants: t,
        popoutWindow: O,
        className: Z,
        idle: L,
        height: j,
        width: R,
        layout: I,
        inCall: A,
        channel: v,
        showParticipants: M
    });
});
