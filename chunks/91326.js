var i = n(735250);
n(470079);
var s = n(442837), a = n(471445), r = n(862099), l = n(938475), o = n(689938), c = n(593712);
t.Z = function (e) {
    let {
            name: t,
            channel: n
        } = e, d = (0, s.Wu)([l.ZP], () => l.ZP.getVoiceStatesForChannel(n).map(e => {
            let {user: t} = e;
            return t;
        }), [n]), u = (0, a.KS)(n);
    return (0, i.jsx)(r.gt, {
        heading: o.Z.Messages.STAGE_CHANNEL_LIVE_NOW,
        topic: t,
        location: o.Z.Messages.HUB_STUDY_ROOM_VOICE_CHANNEL_TOOLTIP,
        locationIcon: null != u ? (0, i.jsx)(u, {
            size: 'xs',
            color: 'currentColor',
            className: c.icon
        }) : null,
        children: (0, i.jsx)(r.Co, {
            channel: n,
            speakers: d,
            voiceType: r.bZ.STUDY_ROOM
        })
    });
};
