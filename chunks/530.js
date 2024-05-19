"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  s = n("481060"),
  o = n("129861"),
  l = n("5192"),
  u = n("228168"),
  d = n("689938"),
  _ = n("660120");

function c(e) {
  let {
    user: t,
    profileType: n,
    guildId: r,
    channelId: c,
    usernameIcon: E,
    tags: I,
    nicknameIcons: T,
    pronouns: f,
    className: S,
    onOpenProfile: h,
    nicknameVariant: A = "heading-lg/bold",
    pronounsVariant: m = "text-sm/medium"
  } = e, N = e => null == h ? e : (0, i.jsx)(s.Clickable, {
    onClick: h,
    className: _.clickableUsername,
    children: e
  });
  return (0, i.jsxs)("div", {
    className: a()(_.container, S),
    children: [(0, i.jsxs)("div", {
      className: _.usernameRow,
      children: [N((0, i.jsx)(s.Heading, {
        className: a()(_.nickname, n === u.UserProfileTypes.FULL_SIZE && _.fullSizeNickname),
        variant: A,
        children: l.default.getName(r, c, t)
      })), (0, i.jsx)("div", {
        className: _.nicknameIcons,
        children: T
      })]
    }), (0, i.jsxs)("div", {
      className: _.tags,
      children: [N((0, i.jsx)(o.default, {
        user: t,
        usernameIcon: E,
        forceUsername: !0,
        className: _.userTag,
        usernameClass: _.userTagUsername,
        discriminatorClass: _.userTagDiscriminator
      })), null != f && f.length > 0 && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          "aria-hidden": "true",
          className: _.dotSpacer
        }), (0, i.jsx)(s.TooltipContainer, {
          text: d.default.Messages.USER_PROFILE_PRONOUNS,
          delay: u.USER_PROFILE_TOOLTIP_DELAY,
          children: (0, i.jsx)(s.Text, {
            variant: m,
            className: _.pronouns,
            color: "header-primary",
            children: f
          })
        })]
      }), I]
    })]
  })
}