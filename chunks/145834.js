n.d(t, {
    $: function () {
        return r;
    }
});
var i = n(70956), a = n(51144), l = n(689938);
let s = 1 * i.Z.Millis.DAY;
function r(e) {
    var t, n, i;
    if ((0, a.EO)(e.user))
        return l.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NEW_TO_DISCORD;
    let r = null === (t = e.member) || void 0 === t ? void 0 : t.joinedAt;
    return null == r ? l.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NON_MEMBER : null != e.member && e.member.roles.length > 0 ? null !== (i = null === (n = e.role) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : l.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_MEMBER_ROLES : new Date().getTime() - Date.parse(r) < s ? l.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NEW_MEMBER : l.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_MEMBER;
}
