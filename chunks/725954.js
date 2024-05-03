"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var l = s("735250");
s("470079");
var a = s("120356"),
  i = s.n(a),
  n = s("442837"),
  r = s("481060"),
  o = s("129861"),
  u = s("427217"),
  d = s("158776"),
  c = s("51144"),
  f = s("981631"),
  S = s("689938"),
  m = s("973452");

function I(e) {
  let {
    user: t,
    displayProfile: s
  } = e, a = (0, n.useStateFromStores)([d.default], () => d.default.findActivity(t.id, e => e.type === f.ActivityTypes.CUSTOM_STATUS)), I = c.default.getName(t);
  return (0, l.jsxs)("div", {
    className: m.container,
    children: [null == I && (0, l.jsx)(o.default, {
      user: t,
      className: m.nameTag,
      usernameClass: m.username,
      discriminatorClass: m.discriminator
    }), null != I && (0, l.jsxs)("div", {
      children: [(0, l.jsx)(r.Text, {
        variant: "text-lg/semibold",
        style: {
          marginRight: "12px"
        },
        children: I
      }), (0, l.jsx)(o.default, {
        user: t,
        forceUsername: !0,
        usernameClass: m.discriminator,
        discriminatorClass: m.discriminator,
        className: i()(m.nameTag, m.nameTagSmall)
      })]
    }), (null == s ? void 0 : s.pronouns) != null && (null == s ? void 0 : s.pronouns) !== "" && (0, l.jsx)(r.Tooltip, {
      text: S.default.Messages.USER_PROFILE_PRONOUNS,
      color: r.TooltipColors.NESTED,
      children: e => (0, l.jsx)(r.Text, {
        ...e,
        variant: "text-sm/normal",
        className: i()(m.pronouns, m.nameTagSmall),
        children: s.pronouns
      })
    }), null != a ? (0, l.jsx)("div", {
      className: m.__invalid_customStatusActivity,
      children: (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: m.customStatusText,
        children: (0, l.jsx)(u.default, {
          activity: a,
          className: m.customStatus,
          emojiClassName: m.customStatusEmoji,
          soloEmojiClassName: m.customStatusSoloEmoji
        })
      })
    }) : null]
  })
}