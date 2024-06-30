t.d(n, {
    Z: function () {
        return E;
    }
});
var a = t(735250);
t(470079);
var l = t(442837), i = t(481060), s = t(430824), o = t(594174), r = t(724213), d = t(398758), u = t(981631), c = t(689938);
function E(e) {
    let n = (0, d.DM)(e), t = (0, l.e7)([s.Z], () => s.Z.getGuild(e)), E = (0, l.e7)([o.default], () => o.default.getCurrentUser());
    return null != E && null != t && (t.hasFeature(u.oNc.COMMUNITY) || E.isStaff()) ? (0, a.jsx)(i.MenuCheckboxItem, {
        id: 'opt-in',
        label: c.Z.Messages.GUILD_CHANNEL_OPT_IN,
        checked: !n,
        action: () => {
            (0, r.kH)(e);
        }
    }) : null;
}
