n.d(t, {
  Z: function() {
return g;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  l = n(665149),
  r = n(171368),
  o = n(650774),
  c = n(430824),
  u = n(496675),
  d = n(709054),
  h = n(826581),
  m = n(246364),
  p = n(360328),
  _ = n(981631),
  f = n(689938),
  E = n(617803);

function g(e) {
  let {
channelId: t,
showProfile: n = !1,
showTrailingDivider: g = !1
  } = e, C = d.default.cast(t), {
joinRequest: I,
isModmin: x,
guildId: T,
maxMembers: N
  } = (0, a.cj)([
h.Z,
c.Z,
u.Z
  ], () => {
let e = h.Z.getRequest(C),
  t = c.Z.getGuild(null == e ? void 0 : e.guildId);
return {
  joinRequest: e,
  isModmin: null != t && u.Z.can(_.Plq.KICK_MEMBERS, t),
  guildId: null == t ? void 0 : t.id,
  maxMembers: null == t ? void 0 : t.maxMembers
};
  }), v = (0, a.e7)([o.Z], () => null != T ? o.Z.getMemberCount(T) : 0), S = null != N && (null != v ? v : 0) >= N, {
approveRequest: Z,
rejectRequest: A,
submitting: M
  } = (0, p.s)(null == I ? void 0 : I.guildId, null == I ? void 0 : I.userId);
  return null != I && I.applicationStatus === m.wB.SUBMITTED && x ? (0, i.jsxs)('div', {
className: E.buttons,
children: [
  (0, i.jsx)(s.Tooltip, {
    text: f.Z.Messages.CLAN_APPLICATION_MAX_MEMBER_LIMIT_TOOLTIP,
    shouldShow: S,
    children: e => (0, i.jsx)(s.Button, {
      ...e,
      color: s.Button.Colors.GREEN,
      submitting: M,
      onClick: Z,
      size: s.ButtonSizes.SMALL,
      disabled: S,
      children: f.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
    })
  }),
  (0, i.jsx)(s.Button, {
    color: s.Button.Colors.RED,
    onClick: A,
    size: s.ButtonSizes.SMALL,
    disabled: M || I.applicationStatus !== m.wB.SUBMITTED,
    children: f.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
  }),
  n && (0, i.jsx)(s.Button, {
    color: s.Button.Colors.TRANSPARENT,
    onClick: () => {
      (0, r.openUserProfileModal)({
        userId: I.userId,
        guildId: I.guildId,
        analyticsLocation: {
          section: _.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
          object: _.qAy.JOIN_REQUEST
        }
      });
    },
    size: s.ButtonSizes.SMALL,
    children: f.Z.Messages.VIEW_PROFILE
  }),
  g && (0, i.jsx)(l.ZP.Divider, {})
]
  }) : null;
}