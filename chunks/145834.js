"use strict";
n.r(t), n.d(t, {
  participantMemberInfo: function() {
    return r
  }
});
var a = n("70956"),
  l = n("51144"),
  s = n("689938");
let i = 1 * a.default.Millis.DAY;

function r(e) {
  var t, n, a;
  if ((0, l.isNewUser)(e.user)) return s.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NEW_TO_DISCORD;
  let r = null === (t = e.member) || void 0 === t ? void 0 : t.joinedAt;
  return null == r ? s.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NON_MEMBER : null != e.member && e.member.roles.length > 0 ? null !== (a = null === (n = e.role) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : s.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_MEMBER_ROLES : new Date().getTime() - Date.parse(r) < i ? s.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_NEW_MEMBER : s.default.Messages.REQUEST_TO_SPEAK_MEMBER_INFO_MEMBER
}