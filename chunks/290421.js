n.d(t, {
    Z: function () {
        return c;
    },
    i: function () {
        return l;
    }
});
var r = n(399606), i = n(695346), a = n(246946), o = n(594174), s = n(689938);
let l = 'quest_completed', u = 'legacy_username';
function c(e) {
    var t;
    let n = i.R_.useSetting(), l = (0, r.e7)([o.default], () => o.default.getCurrentUser()), c = (0, r.e7)([a.Z], () => a.Z.hidePersonalInformation);
    if (null == e)
        return [];
    let d = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
    return null != l && l.id === e.userId && n && (d = d.filter(e => e.id !== u)), c && (d = d.map(e => ({
        ...e,
        description: e.id === u ? s.Z.Messages.STREAMER_MODE_ENABLED : e.description
    }))), d;
}
