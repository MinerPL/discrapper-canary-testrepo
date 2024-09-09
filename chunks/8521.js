var i = n(735250),
    a = n(470079),
    s = n(949389),
    r = n(63063),
    l = n(82950),
    o = n(981631),
    c = n(689938),
    d = n(511189);
t.Z = (e) => {
    let { guild: t } = e,
        n = a.useCallback(() => {
            (0, s.xm)(t.id);
        }, [t.id]);
    return (0, i.jsx)(l.Z, {
        guild: t,
        onDismissed: n,
        message: c.Z.Messages.NOTICE_CHANNEL_MAX_MEMBERS_CAP_REACHED_MESSAGE.format({
            maxMemberCount: t.maxMembers,
            maxMembersUrl: r.Z.getArticleURL(o.BhN.MAX_MEMBERS)
        }),
        type: o.vID.MAX_MEMBER_COUNT,
        image: d,
        imageMarginX: 61
    });
};
