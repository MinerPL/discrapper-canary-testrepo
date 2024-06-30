var i = n(735250);
n(470079);
var s = n(399606), a = n(607070), r = n(970731), l = n(810090), o = n(19199), c = n(921944), d = n(689938), u = n(59864);
t.Z = e => {
    let {markAsDismissed: t} = e, n = (0, s.e7)([a.Z], () => a.Z.useReducedMotion);
    return (0, o.D)() ? (0, i.jsx)(r.ZP, {
        asset: (0, i.jsx)(l.Z, {
            className: u.video,
            src: 'https://cdn.discordapp.com/attachments/1067194967979733053/1067195118026772480/Safety_MUTE_Coachmark.mp4',
            loop: !0,
            autoPlay: !n,
            width: '100%'
        }),
        header: d.Z.Messages.SAFETY_CONSUMER_EDUCATION_MUTE_HEADER,
        content: d.Z.Messages.SAFETY_CONSUMER_EDUCATION_MUTE_CONTENT,
        buttonCTA: d.Z.Messages.GOT_IT,
        className: u.__invalid_coachmark,
        onClick: e => {
            e.stopPropagation(), t(c.L.UNKNOWN);
        },
        markAsDismissed: t,
        caretPosition: r.DF.BOTTOM_CENTER,
        headerClassName: u.header
    }) : null;
};
