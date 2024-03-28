"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var l = s("803997"),
  i = s.n(l),
  o = s("442837"),
  r = s("481060"),
  n = s("129861"),
  u = s("427217"),
  c = s("158776"),
  d = s("51144"),
  f = s("981631"),
  S = s("689938"),
  m = s("968030");

function E(e) {
  let {
    user: t,
    displayProfile: s
  } = e, l = (0, o.useStateFromStores)([c.default], () => c.default.findActivity(t.id, e => e.type === f.ActivityTypes.CUSTOM_STATUS)), E = d.default.getName(t);
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [null == E && (0, a.jsx)(n.default, {
      user: t,
      className: m.nameTag,
      usernameClass: m.username,
      discriminatorClass: m.discriminator
    }), null != E && (0, a.jsxs)("div", {
      children: [(0, a.jsx)(r.Text, {
        variant: "text-lg/semibold",
        style: {
          marginRight: "12px"
        },
        children: E
      }), (0, a.jsx)(n.default, {
        user: t,
        forceUsername: !0,
        usernameClass: m.discriminator,
        discriminatorClass: m.discriminator,
        className: i()(m.nameTag, m.nameTagSmall)
      })]
    }), (null == s ? void 0 : s.pronouns) != null && (null == s ? void 0 : s.pronouns) !== "" && (0, a.jsx)(r.Tooltip, {
      text: S.default.Messages.USER_PROFILE_PRONOUNS,
      children: e => (0, a.jsx)(r.Text, {
        ...e,
        variant: "text-sm/normal",
        className: i()(m.pronouns, m.nameTagSmall),
        children: s.pronouns
      })
    }), null != l ? (0, a.jsx)("div", {
      className: m.__invalid_customStatusActivity,
      children: (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: m.customStatusText,
        children: (0, a.jsx)(u.default, {
          activity: l,
          className: m.customStatus,
          emojiClassName: m.customStatusEmoji,
          soloEmojiClassName: m.customStatusSoloEmoji
        })
      })
    }) : null]
  })
}