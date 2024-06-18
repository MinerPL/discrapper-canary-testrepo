"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(300284),
  a = n(314897),
  l = n(430824),
  u = n(185403),
  _ = n(877485),
  d = n(785717),
  c = n(841040),
  E = n(993409),
  I = n(228168),
  T = n(689938);

function h(e) {
  let {
    user: t,
    guildId: n,
    profileType: h,
    onClose: S
  } = e, f = (0, r.e7)([a.default], () => a.default.getId() === t.id), N = (0, r.e7)([l.Z], () => null != n ? l.Z.getGuild(n) : null), {
    originalFriendingEnabled: A
  } = (0, _.V)({
    location: "UserProfileEditMenuButton"
  }), {
    trackUserProfileAction: m
  } = (0, d.KZ)(), O = (0, o.Z)(), R = A && h === I.y0.FULL_SIZE ? void 0 : u.Z;
  return f ? null == N ? (0, i.jsx)(E.Z, {
    variant: "text",
    icon: R,
    text: T.Z.Messages.EDIT_PROFILE,
    autoFocus: !0,
    fullWidth: !0,
    onClick: () => {
      m({
        action: "EDIT_PROFILE"
      }), null == S || S(), O()
    }
  }) : (0, i.jsx)(s.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(c.Z, {
        guild: N,
        onClose: () => {
          t(), null == S || S()
        }
      })
    },
    children: e => (0, i.jsx)(E.Z, {
      variant: "text",
      icon: R,
      text: T.Z.Messages.EDIT_PROFILE,
      autoFocus: !0,
      fullWidth: !0,
      ...e
    })
  }) : null
}