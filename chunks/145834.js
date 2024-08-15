n.d(t, {
	$: function () {
		return r;
	}
});
var i = n(70956),
	a = n(51144),
	s = n(689938);
let l = 1 * i.Z.Millis.DAY;
function r(e) {
	var t, n, i;
	if ((0, a.EO)(e.user)) return s.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NEW_TO_DISCORD;
	let r = null === (t = e.member) || void 0 === t ? void 0 : t.joinedAt;
	return null == r
		? s.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NON_MEMBER
		: null != e.member && e.member.roles.length > 0
			? null !== (i = null === (n = e.role) || void 0 === n ? void 0 : n.name) && void 0 !== i
				? i
				: s.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_MEMBER_ROLES
			: new Date().getTime() - Date.parse(r) < l
				? s.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NEW_MEMBER
				: s.Z.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_MEMBER;
}
