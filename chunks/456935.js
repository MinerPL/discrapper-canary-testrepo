"use strict";
i.r(t), i.d(t, {
  getVerificationLevelText: function() {
    return I
  }
});
var a = i("735250"),
  l = i("470079"),
  n = i("692547"),
  s = i("481060"),
  r = i("496675"),
  o = i("916187"),
  d = i("736921"),
  c = i("185403"),
  u = i("484455"),
  f = i("981631"),
  m = i("689938"),
  E = i("482249");

function I(e) {
  switch (e) {
    case f.VerificationLevels.LOW:
      return m.default.Messages.VERIFICATION_LEVEL_LOW;
    case f.VerificationLevels.MEDIUM:
      return m.default.Messages.VERIFICATION_LEVEL_MEDIUM;
    case f.VerificationLevels.HIGH:
      return m.default.Messages.VERIFICATION_LEVEL_HIGH;
    case f.VerificationLevels.VERY_HIGH:
      return m.default.Messages.VERIFICATION_LEVEL_VERY_HIGH;
    default:
      return ""
  }
}
let x = {
  [f.VerificationLevels.NONE]: "",
  [f.VerificationLevels.LOW]: n.default.unsafe_rawColors.GREEN_360.css,
  [f.VerificationLevels.MEDIUM]: n.default.unsafe_rawColors.YELLOW_300.css,
  [f.VerificationLevels.HIGH]: n.default.unsafe_rawColors.ORANGE_345.css,
  [f.VerificationLevels.VERY_HIGH]: n.default.unsafe_rawColors.RED_400.css
};
t.default = function(e) {
  let {
    guild: t
  } = e, n = r.default.can(f.Permissions.MANAGE_GUILD, t), h = t.verificationLevel, T = h === f.VerificationLevels.VERY_HIGH ? d.default : o.default, M = l.useMemo(() => I(h), [h]), F = x[h], _ = (0, a.jsx)("div", {
    className: E.verificationLevelTitle,
    children: m.default.Messages.MEMBER_VERIFICATION_GUILD_VERIFICATION_LEVEL.format({
      verificationLevelHook: function() {
        return (0, a.jsx)(s.Text, {
          className: E.verificationLevelHook,
          style: {
            color: F
          },
          variant: "text-sm/semibold",
          children: M
        }, "hook")
      }
    })
  }), v = h === f.VerificationLevels.VERY_HIGH ? m.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PHONE_VERIFICATION_SETTINGS_LABEL : m.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_EMAIL_VERIFICATION_SETTINGS_LABEL;
  return (0, a.jsx)(u.default, {
    title: _,
    children: (0, a.jsxs)("div", {
      className: E.verificationContainer,
      children: [(0, a.jsx)(T, {
        width: 20,
        height: 20,
        className: E.icon
      }), (0, a.jsx)(s.Text, {
        className: E.guildVerificationText,
        variant: "text-sm/normal",
        children: v
      }), n && (0, a.jsx)(s.Clickable, {
        className: E.iconInteractiveContainer,
        onClick: () => (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([i.e("99387"), i.e("72458")]).then(i.bind(i, "694278"));
          return i => (0, a.jsx)(e, {
            ...i,
            guild: t
          })
        }),
        children: (0, a.jsx)(c.default, {
          width: 20,
          height: 20,
          className: E.iconInteractive
        })
      })]
    })
  })
}