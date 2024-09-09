t.d(s, {
    Z: function () {
        return E;
    }
});
var n = t(735250),
    a = t(604849),
    i = t(278828),
    r = t(63063),
    o = t(838436),
    l = t(51331),
    c = t(526761),
    d = t(726985),
    _ = t(981631),
    u = t(689938);
function E() {
    let e = (0, a.c)();
    return (0, n.jsx)(o.U, {
        setting: d.s6.PRIVACY_SAFETY_ALERTS_V2,
        scrollPosition: c.to.DM_SAFETY_ALERTS,
        children: (0, n.jsx)(l.Z, {
            value: e,
            onChange: i.Q,
            title: u.Z.Messages.SAFETY_ALERTS_SETTING_TITLE,
            note: u.Z.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({ learnMoreLink: r.Z.getArticleURL(_.BhN.SAFETY_ALERTS) })
        })
    });
}
