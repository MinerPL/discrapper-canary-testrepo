var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    r = n(594174),
    l = n(853197),
    o = n(921944),
    c = n(689938),
    u = n(587545);
t.Z = (e) => {
    var t;
    let { noticeType: n, markAsDismissed: d, partnerGame: _ } = e,
        E = (0, a.e7)([r.default], () => r.default.getCurrentUser());
    if (null == _) return null;
    let I = (0, l.BS)(_);
    if (null == I) return null;
    let m = 'https://survey.alchemer.com/s3/7043057/Drops-NPS?user_id='.concat(null !== (t = null == E ? void 0 : E.id) && void 0 !== t ? t : '');
    return (0, i.jsxs)(s.Notice, {
        className: u.colorGuildBlue,
        children: [
            c.Z.Messages.DROPS_BANNER_ENDED_INCOMPLETE.format({ gameTitle: I.title }),
            (0, i.jsx)(s.NoticeButtonAnchor, {
                href: m,
                target: '_blank',
                onClick: () => {
                    d(o.L.PRIMARY);
                },
                children: c.Z.Messages.DROPS_FEEDBACK_SURVEY
            }),
            (0, i.jsx)(s.NoticeCloseButton, {
                onClick: () => {
                    d(o.L.DISMISS);
                },
                noticeType: n
            })
        ]
    });
};
