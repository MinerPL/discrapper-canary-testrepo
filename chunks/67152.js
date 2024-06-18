"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(906732),
  a = n(785717),
  l = n(588822),
  u = n(171368),
  _ = n(981631),
  d = n(689938),
  c = n(783116);
t.Z = r.memo(function(e) {
  let {
    user: t,
    onClose: n,
    bio: E,
    hidePersonalInformation: I
  } = e, {
    guildId: T,
    channelId: h,
    messageId: S,
    roleId: f
  } = (0, a.KZ)(), {
    analyticsLocations: N
  } = (0, o.ZP)(), [A, m] = r.useState(!1);
  return I || null == E || "" === E ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      ref: e => {
        null != e && m(e.scrollHeight - e.clientHeight > 1)
      },
      className: c.descriptionClamp,
      children: (0, i.jsx)(l.Z, {
        userBio: E,
        setLineClamp: !1,
        textColor: "header-primary"
      })
    }), A && (0, i.jsx)(s.Button, {
      look: s.Button.Looks.BLANK,
      size: s.Button.Sizes.NONE,
      className: c.viewFullBio,
      color: c.viewFullBioColor,
      onClick: () => {
        null == n || n(), (0, u.openUserProfileModal)({
          userId: t.id,
          guildId: null != T ? T : void 0,
          channelId: null != h ? h : void 0,
          messageId: null != S ? S : void 0,
          roleId: null != f ? f : void 0,
          analyticsLocation: {
            section: _.jXE.BITE_SIZE_PROFILE_POPOUT
          },
          sourceAnalyticsLocations: N
        })
      },
      children: (0, i.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "none",
        children: d.Z.Messages.USER_PROFILE_VIEW_FULL_BIO
      })
    })]
  })
})