var i = n(735250);
n(470079);
var a = n(442837), s = n(481060), l = n(594174), r = n(853197), o = n(921944), c = n(689938), d = n(703422);
t.Z = e => {
    var t;
    let {
            noticeType: n,
            markAsDismissed: u,
            partnerGame: _
        } = e, E = (0, a.e7)([l.default], () => l.default.getCurrentUser());
    if (null == _)
        return null;
    let m = (0, r.BS)(_);
    if (null == m)
        return null;
    let I = 'https://survey.alchemer.com/s3/7043057/Drops-NPS?user_id='.concat(null !== (t = null == E ? void 0 : E.id) && void 0 !== t ? t : '');
    return (0, i.jsxs)(s.Notice, {
        className: d.colorGuildBlue,
        children: [
            c.Z.Messages.DROPS_BANNER_ENDED_INCOMPLETE.format({ gameTitle: m.title }),
            (0, i.jsx)(s.NoticeButtonAnchor, {
                href: I,
                target: '_blank',
                onClick: () => {
                    u(o.L.PRIMARY);
                },
                children: c.Z.Messages.DROPS_FEEDBACK_SURVEY
            }),
            (0, i.jsx)(s.NoticeCloseButton, {
                onClick: () => {
                    u(o.L.DISMISS);
                },
                noticeType: n
            })
        ]
    });
};
