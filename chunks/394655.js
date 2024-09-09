t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(735250),
    a = t(905405),
    i = t(63063),
    r = t(695346),
    o = t(838436),
    l = t(51331),
    c = t(726985),
    d = t(981631),
    _ = t(689938);
function u() {
    let e = (0, a.p)();
    return (0, n.jsx)(o.U, {
        setting: c.s6.PRIVACY_KEYWORD_FILTER_V2,
        children: (0, n.jsx)(l.Z, {
            value: e,
            onChange: (e) =>
                r.gw.updateSetting({
                    profanity: e,
                    slurs: e,
                    sexualContent: e
                }),
            title: _.Z.Messages.USER_KEYWORD_FILTERS_TOGGLE_TITLE_V2,
            note: _.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_V2.format({ learnMoreLink: i.Z.getArticleURL(d.BhN.KEYWORD_FILTERS) })
        })
    });
}
