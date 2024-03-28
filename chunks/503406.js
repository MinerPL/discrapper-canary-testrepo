"use strict";
t.r(s), t("47120");
var a = t("735250"),
  l = t("470079"),
  n = t("803997"),
  i = t.n(n),
  o = t("392711"),
  r = t.n(o),
  d = t("481060"),
  c = t("231239"),
  u = t("881052"),
  N = t("703656"),
  m = t("153124"),
  _ = t("981631"),
  E = t("689938"),
  I = t("920326");
let C = (0, m.uid)();
s.default = e => {
  let {
    email: s,
    guildId: t,
    onClose: n
  } = e, [o, m] = l.useState(""), [x, f] = l.useState(null), h = l.useCallback(async () => {
    if (null != t) try {
      let e = await c.default.verifyCode(o, t, s);
      e.guild && (null == n || n(), (0, N.transitionTo)(_.Routes.CHANNEL(e.guild.id)))
    } catch (e) {
      f(new u.APIError(e))
    }
  }, [o, s, t, n]), T = r().throttle(() => {
    c.default.sendVerificationEmail(s, !0, t)
  }, 1e3), g = async e => {
    null != o && "" !== o && e.charCode === _.KeyboardKeys.ENTER && await h()
  };
  return (0, a.jsxs)("div", {
    className: I.container,
    children: [(0, a.jsx)("div", {
      className: I.topImage
    }), (0, a.jsx)(d.Heading, {
      className: i()(I.centerText, I.header),
      variant: "heading-xl/semibold",
      children: E.default.Messages.HUB_VERIFY_EMAIL_ADDRESS
    }), (0, a.jsx)("div", {
      className: I.descriptionWidth,
      children: (0, a.jsx)(d.Text, {
        className: I.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: E.default.Messages.HUB_PIN_DESCRIPTION.format({
          email: s,
          onClick: T
        })
      })
    }), (0, a.jsxs)(d.FormItem, {
      className: I.formItem,
      children: [(0, a.jsx)(d.FormTitle, {
        id: C,
        children: E.default.Messages.HUB_ENTER_PIN
      }), (0, a.jsx)(d.TextInput, {
        onKeyPress: g,
        onChange: e => {
          null != e && "" !== e && m(e)
        },
        error: null == x ? void 0 : x.getAnyErrorMessage(),
        "aria-labelledby": C
      })]
    }), (0, a.jsx)(d.Button, {
      fullWidth: !0,
      onClick: h,
      size: d.Button.Sizes.LARGE,
      color: d.Button.Colors.BRAND,
      children: (0, a.jsx)(d.Text, {
        className: I.submitText,
        variant: "text-sm/normal",
        children: E.default.Messages.SUBMIT
      })
    })]
  })
}