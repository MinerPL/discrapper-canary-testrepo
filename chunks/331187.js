var i = n(735250),
    a = n(470079),
    s = n(703656),
    r = n(970731),
    l = n(626135),
    o = n(63063),
    c = n(973005),
    d = n(981631),
    u = n(921944),
    _ = n(689938),
    E = n(532333);
t.Z = (e) => {
    let { markAsDismissed: t } = e;
    return (
        a.useEffect(() => {
            l.default.track(d.rMx.DM_SAFETY_COACHMARK_ACTION, { action: c.Rv.VIEW });
        }, []),
        (0, i.jsx)(r.ZP, {
            header: _.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_HEADER_V2,
            content: _.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_CONTENT_V2.format({ helpdeskArticle: o.Z.getArticleURL(d.BhN.SAFE_DIRECT_MESSAGING) }),
            buttonCTA: _.Z.Messages.GOT_IT,
            secondaryButtonCTA: _.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_COACHMARK_REDIRECT,
            className: E.coachmark,
            onClick: (e) => {
                e.stopPropagation(), t(u.L.UNKNOWN), l.default.track(d.rMx.DM_SAFETY_COACHMARK_ACTION, { action: c.Rv.DISMISS });
            },
            onSecondaryClick: () => {
                (0, s.uL)(d.Z5c.SETTINGS('privacy-and-safety')), l.default.track(d.rMx.DM_SAFETY_COACHMARK_ACTION, { action: c.Rv.CHANGE_SETTING });
            },
            markAsDismissed: t,
            caretPosition: r.DF.BOTTOM_CENTER,
            headerClassName: E.__invalid_header
        })
    );
};
