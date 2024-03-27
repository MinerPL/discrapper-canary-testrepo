"use strict";
i.r(t), i.d(t, {
  getVerificationLevelText: function() {
    return T
  },
  default: function() {
    return _
  }
});
var n = i("37983"),
  a = i("884691"),
  l = i("669491"),
  s = i("77078"),
  r = i("957255"),
  o = i("556081"),
  d = i("216947"),
  u = i("987772"),
  c = i("192918"),
  f = i("49111"),
  E = i("782340"),
  I = i("935090");

function T(e) {
  switch (e) {
    case f.VerificationLevels.LOW:
      return E.default.Messages.VERIFICATION_LEVEL_LOW;
    case f.VerificationLevels.MEDIUM:
      return E.default.Messages.VERIFICATION_LEVEL_MEDIUM;
    case f.VerificationLevels.HIGH:
      return E.default.Messages.VERIFICATION_LEVEL_HIGH;
    case f.VerificationLevels.VERY_HIGH:
      return E.default.Messages.VERIFICATION_LEVEL_VERY_HIGH;
    default:
      return ""
  }
}
let m = {
  [f.VerificationLevels.NONE]: "",
  [f.VerificationLevels.LOW]: l.default.unsafe_rawColors.GREEN_360.css,
  [f.VerificationLevels.MEDIUM]: l.default.unsafe_rawColors.YELLOW_300.css,
  [f.VerificationLevels.HIGH]: l.default.unsafe_rawColors.ORANGE_345.css,
  [f.VerificationLevels.VERY_HIGH]: l.default.unsafe_rawColors.RED_400.css
};
var _ = function(e) {
  let {
    guild: t
  } = e, l = r.default.can(f.Permissions.MANAGE_GUILD, t), _ = t.verificationLevel, x = _ === f.VerificationLevels.VERY_HIGH ? d.default : o.default, h = a.useMemo(() => T(_), [_]), p = m[_], M = (0, n.jsx)("div", {
    className: I.verificationLevelTitle,
    children: E.default.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
      verificationLevelHook: function() {
        return (0, n.jsx)(s.Text, {
          className: I.verificationLevelHook,
          style: {
            color: p
          },
          variant: "text-sm/semibold",
          children: h
        }, "hook")
      }
    })
  }), R = _ === f.VerificationLevels.VERY_HIGH ? E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL : E.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
  return (0, n.jsx)(c.default, {
    title: M,
    children: (0, n.jsxs)("div", {
      className: I.verificationContainer,
      children: [(0, n.jsx)(x, {
        width: 20,
        height: 20,
        className: I.icon
      }), (0, n.jsx)(s.Text, {
        className: I.guildVerificationText,
        variant: "text-sm/normal",
        children: R
      }), l && (0, n.jsx)(s.Clickable, {
        className: I.iconInteractiveContainer,
        onClick: () => (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await i.el("161069").then(i.bind(i, "161069"));
          return i => (0, n.jsx)(e, {
            ...i,
            guild: t
          })
        }),
        children: (0, n.jsx)(u.default, {
          width: 20,
          height: 20,
          className: I.iconInteractive
        })
      })]
    })
  })
}