var i = n(735250);
n(470079);
var a = n(913527), s = n.n(a), l = n(481060), r = n(730417), o = n(921944), c = n(689938), d = n(983209);
let u = (e, t) => ({
    bodyText: c.Z.Messages.DROPS_BANNER_NOTICE.format({
        gameName: e.title,
        endDate: s()(e.endDate, 'YYYY-MM-DD HH:mm').format('MMM Do'),
        streamLengthRequirement: t
    }),
    articleUrl: e.articleUrl
});
t.Z = e => {
    let {
            noticeType: t,
            markAsDismissed: n,
            partnerGame: a
        } = e, s = (0, r.au)(a);
    if (null == s)
        return null;
    let {
        bodyText: _,
        articleUrl: E
    } = u(s.drop, s.config.streamLengthRequirement);
    return (0, i.jsxs)(l.Notice, {
        className: d.colorGuildBlue,
        children: [
            _,
            (0, i.jsx)(l.NoticeButtonAnchor, {
                href: E,
                target: '_blank',
                onClick: () => {
                    n(o.L.PRIMARY);
                },
                children: c.Z.Messages.LEARN_MORE
            }),
            (0, i.jsx)(l.NoticeCloseButton, {
                onClick: () => {
                    n(o.L.DISMISS);
                },
                noticeType: t
            })
        ]
    });
};
