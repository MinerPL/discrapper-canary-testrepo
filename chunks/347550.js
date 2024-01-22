"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var l = s("37983");
s("884691");
var a = s("414456"),
  i = s.n(a),
  r = s("446674"),
  o = s("77078"),
  n = s("145079"),
  u = s("775377"),
  d = s("824563"),
  c = s("158998"),
  f = s("49111"),
  S = s("782340"),
  m = s("811136");

function E(e) {
  let {
    user: t,
    displayProfile: s
  } = e, a = (0, r.useStateFromStores)([d.default], () => d.default.findActivity(t.id, e => e.type === f.ActivityTypes.CUSTOM_STATUS)), E = c.default.getName(t);
  return (0, l.jsxs)("div", {
    className: m.container,
    children: [null == E && (0, l.jsx)(n.default, {
      user: t,
      className: m.nameTag,
      usernameClass: m.username,
      discriminatorClass: m.discriminator
    }), null != E && (0, l.jsxs)("div", {
      children: [(0, l.jsx)(o.Text, {
        variant: "text-lg/semibold",
        style: {
          marginRight: "12px"
        },
        children: E
      }), (0, l.jsx)(n.default, {
        user: t,
        forceUsername: !0,
        usernameClass: m.discriminator,
        discriminatorClass: m.discriminator,
        className: i(m.nameTag, m.nameTagSmall)
      })]
    }), (null == s ? void 0 : s.pronouns) != null && (null == s ? void 0 : s.pronouns) !== "" && (0, l.jsx)(o.Tooltip, {
      text: S.default.Messages.USER_PROFILE_PRONOUNS,
      children: e => (0, l.jsx)(o.Text, {
        ...e,
        variant: "text-sm/normal",
        className: i(m.pronouns, m.nameTagSmall),
        children: s.pronouns
      })
    }), null != a ? (0, l.jsx)("div", {
      className: m.customStatusActivity,
      children: (0, l.jsx)(o.Text, {
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