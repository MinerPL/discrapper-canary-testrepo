"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("77078"),
  o = n("142833"),
  c = n("448993"),
  d = n("476765"),
  u = n("238055"),
  _ = n("49111"),
  E = n("782340"),
  N = n("291115");
let I = (0, d.uid)();
var m = e => {
  let {
    email: t,
    setStep: n,
    onBack: l,
    school: d,
    setSchool: m
  } = e, [f, C] = s.useState(null), [T, S] = s.useState(!1), g = async () => {
    C(null), S(!0);
    try {
      await o.default.signup(t, d), n(u.HubEmailConnectionSteps.EMAIL_WAITLIST)
    } catch (e) {
      C(new c.APIError(e))
    } finally {
      S(!1)
    }
  }, h = async e => {
    null != d && "" !== d && e.charCode === _.KeyboardKeys.ENTER && await g()
  };
  return (0, a.jsxs)("div", {
    className: N.container,
    children: [(0, a.jsx)("div", {
      className: N.topImage
    }), (0, a.jsx)(r.Heading, {
      className: i(N.centerText, N.header),
      variant: "heading-xl/semibold",
      children: E.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_HEADER
    }), (0, a.jsx)("div", {
      className: N.descriptionWidth,
      children: (0, a.jsx)(r.Text, {
        className: N.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: E.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_DESCRIPTION
      })
    }), (0, a.jsxs)(r.FormItem, {
      className: N.formItem,
      children: [(0, a.jsx)(r.FormTitle, {
        id: I,
        children: E.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_HEADER
      }), (0, a.jsx)(r.TextInput, {
        onKeyPress: h,
        placeholder: E.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_PLACEHOLDER,
        onChange: e => {
          m(e)
        },
        error: null == f ? void 0 : f.getAnyErrorMessage(),
        "aria-labelledby": I
      })]
    }), (0, a.jsxs)("div", {
      className: N.footer,
      children: [(0, a.jsx)(r.Button, {
        className: N.backButton,
        onClick: l,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.NONE,
        color: r.Button.Colors.PRIMARY,
        children: E.default.Messages.BACK
      }), (0, a.jsx)(r.Button, {
        onClick: g,
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.BRAND,
        className: N.submitButton,
        submitting: T,
        children: E.default.Messages.JOIN_WAITLIST
      })]
    })]
  })
}