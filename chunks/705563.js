n.d(t, {
  Z: function() {
return C;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(481060),
  s = n(665149),
  r = n(171368),
  o = n(650774),
  c = n(430824),
  d = n(496675),
  u = n(709054),
  h = n(826581),
  p = n(246364),
  m = n(360328),
  _ = n(981631),
  f = n(689938),
  E = n(593269);

function C(e) {
  let {
channelId: t,
showProfile: n = !1,
showTrailingDivider: C = !1
  } = e, g = u.default.cast(t), {
joinRequest: I,
isModmin: x,
guildId: T,
maxMembers: v
  } = (0, a.cj)([
h.Z,
c.Z,
d.Z
  ], () => {
let e = h.Z.getRequest(g),
  t = c.Z.getGuild(null == e ? void 0 : e.guildId);
return {
  joinRequest: e,
  isModmin: null != t && d.Z.can(_.Plq.KICK_MEMBERS, t),
  guildId: null == t ? void 0 : t.id,
  maxMembers: null == t ? void 0 : t.maxMembers
};
  }), N = (0, a.e7)([o.Z], () => null != T ? o.Z.getMemberCount(T) : 0), S = null != v && (null != N ? N : 0) >= v, {
approveRequest: Z,
rejectRequest: A,
submitting: M
  } = (0, m.s)(null == I ? void 0 : I.guildId, null == I ? void 0 : I.userId);
  return null != I && I.applicationStatus === p.wB.SUBMITTED && x ? (0, i.jsxs)('div', {
className: E.buttons,
children: [
  (0, i.jsx)(l.Tooltip, {
    text: f.Z.Messages.CLAN_APPLICATION_MAX_MEMBER_LIMIT_TOOLTIP,
    shouldShow: S,
    children: e => (0, i.jsx)(l.Button, {
      ...e,
      color: l.Button.Colors.GREEN,
      submitting: M,
      onClick: Z,
      size: l.ButtonSizes.SMALL,
      disabled: S,
      children: f.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
    })
  }),
  (0, i.jsx)(l.Button, {
    color: l.Button.Colors.RED,
    onClick: A,
    size: l.ButtonSizes.SMALL,
    disabled: M || I.applicationStatus !== p.wB.SUBMITTED,
    children: f.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
  }),
  n && (0, i.jsx)(l.Button, {
    color: l.Button.Colors.TRANSPARENT,
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
    size: l.ButtonSizes.SMALL,
    children: f.Z.Messages.VIEW_PROFILE
  }),
  C && (0, i.jsx)(s.ZP.Divider, {})
]
  }) : null;
}