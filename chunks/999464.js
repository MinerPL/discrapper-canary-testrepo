"use strict";
t.r(s), t("47120");
var a = t("735250"),
  l = t("470079"),
  n = t("803997"),
  i = t.n(n),
  o = t("481060"),
  r = t("231239"),
  d = t("881052"),
  c = t("153124"),
  u = t("888592"),
  N = t("981631"),
  m = t("689938"),
  _ = t("670809");
let E = (0, c.uid)();
s.default = e => {
  let {
    email: s,
    setStep: t,
    onBack: n,
    school: c,
    setSchool: I
  } = e, [C, x] = l.useState(null), [f, h] = l.useState(!1), T = async () => {
    x(null), h(!0);
    try {
      await r.default.signup(s, c), t(u.HubEmailConnectionSteps.EMAIL_WAITLIST)
    } catch (e) {
      x(new d.APIError(e))
    } finally {
      h(!1)
    }
  }, g = async e => {
    null != c && "" !== c && e.charCode === N.KeyboardKeys.ENTER && await T()
  };
  return (0, a.jsxs)("div", {
    className: _.container,
    children: [(0, a.jsx)("div", {
      className: _.__invalid_topImage
    }), (0, a.jsx)(o.Heading, {
      className: i()(_.centerText, _.header),
      variant: "heading-xl/semibold",
      children: m.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_HEADER
    }), (0, a.jsx)("div", {
      className: _.descriptionWidth,
      children: (0, a.jsx)(o.Text, {
        className: _.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: m.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_DESCRIPTION
      })
    }), (0, a.jsxs)(o.FormItem, {
      className: _.formItem,
      children: [(0, a.jsx)(o.FormTitle, {
        id: E,
        children: m.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_HEADER
      }), (0, a.jsx)(o.TextInput, {
        onKeyPress: g,
        placeholder: m.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_PLACEHOLDER,
        onChange: e => {
          I(e)
        },
        error: null == C ? void 0 : C.getAnyErrorMessage(),
        "aria-labelledby": E
      })]
    }), (0, a.jsxs)("div", {
      className: _.footer,
      children: [(0, a.jsx)(o.Button, {
        className: _.backButton,
        onClick: n,
        look: o.Button.Looks.LINK,
        size: o.Button.Sizes.NONE,
        color: o.Button.Colors.PRIMARY,
        children: m.default.Messages.BACK
      }), (0, a.jsx)(o.Button, {
        onClick: T,
        size: o.Button.Sizes.MEDIUM,
        color: o.Button.Colors.BRAND,
        className: _.__invalid_submitButton,
        submitting: f,
        children: m.default.Messages.JOIN_WAITLIST
      })]
    })]
  })
}