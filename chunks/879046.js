t.d(n, {
    Z: function () {
        return u;
    }
});
var l = t(499254),
    i = t(827498),
    a = t(835473),
    r = t(541716),
    o = t(561308),
    s = t(701488),
    c = t(689938);
function u(e) {
    let { entry: n } = e,
        t = (0, a.q)(n.extra.application_id),
        u = null == t ? void 0 : t.getIconURL(s.Si.LARGE),
        d = n.extra.activity_name,
        m = (0, o.kr)(n) && !(0, o.n2)(n) ? c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : c.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
        f = {
            onClick: () => {
                l._(i._b.TEXT, r.I.NORMAL, { applicationId: n.extra.application_id });
            },
            ariaDescription: c.Z.Messages.CONTENT_INVENTORY_OPEN_ACTIVITY_A11Y_DESCRIPTION.format({ title: d })
        };
    return {
        thumbnailUrl: u,
        title: d,
        titleClickable: f,
        thumbnailClickable: f,
        userDescription: m
    };
}
