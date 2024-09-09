t.d(s, {
    Z: function () {
        return _;
    }
});
var n = t(735250);
t(470079);
var a = t(63063),
    i = t(695346),
    r = t(838436),
    o = t(51331),
    l = t(726985),
    c = t(981631),
    d = t(689938);
function _() {
    let e = i.bh.useSetting();
    return (0, n.jsx)(r.U, {
        setting: l.s6.PRIVACY_DATA_QUESTS_V2,
        children: (0, n.jsx)(o.Z, {
            title: d.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT,
            note: d.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({ helpdeskArticle: a.Z.getArticleURL(c.BhN.DATA_PRIVACY_CONTROLS) }),
            value: !e,
            onChange: (e) => i.bh.updateSetting(!e)
        })
    });
}
