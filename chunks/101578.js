var i = n(735250);
n(470079);
var a = n(442837), s = n(654030), l = n(906732), r = n(973616), o = n(789407), c = n(314897), d = n(158776), u = n(981631), _ = n(616922), E = n(846615);
t.Z = e => {
    var t;
    let {
            channel: n,
            message: m,
            hideParty: I
        } = e, {analyticsLocations: T} = (0, l.ZP)(), h = (0, a.e7)([c.default], () => c.default.getId()), N = (0, a.e7)([d.Z], () => {
            if (null == m.application)
                return d.Z.findActivity(m.author.id, e => e.type === u.IIU.LISTENING);
            {
                var e;
                let t = m.author.id;
                return (null === (e = m.activity) || void 0 === e ? void 0 : e.type) === u.mFx.JOIN_REQUEST && (t = t === h && n.isPrivate() ? n.getRecipientId() : h), d.Z.getApplicationActivity(t, m.application.id);
            }
        }, [
            m,
            n,
            h
        ]);
    return (0, i.jsx)(s.Z, {
        className: E.container,
        activity: N,
        activityActionType: null != m.activity ? m.activity.type : null,
        partyId: null != m.activity ? m.activity.party_id : null,
        userId: m.author.id,
        application: null != (t = m).application ? r.Z.createFromServer(t.application) : null != t.activity && null != t.activity.party_id && (0, _.Ps)(t.activity.party_id) ? o.r9 : void 0,
        message: m,
        channelId: n.id,
        guildId: n.getGuildId(),
        hideParty: I,
        isSender: m.author.id === h,
        analyticsLocations: T
    });
};
