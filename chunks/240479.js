"use strict";
a.r(t), a.d(t, {
  UserCodeInput: function() {
    return h
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("803997"),
  o = a.n(s),
  i = a("593473"),
  u = a("613828"),
  l = a("481060"),
  c = a("489863"),
  d = a("511540"),
  A = a("828878"),
  C = a("689938"),
  f = a("670430");

function h(e) {
  let {
    onUserCodeAccepted: t,
    usePrefilledCode: a
  } = e, [s, h] = r.useState(() => {
    let {
      user_code: e
    } = i.parse(window.location.search);
    return a && null != e ? e : ""
  }), E = (0, u.useLocation)(), T = r.useCallback(() => {
    (0, c.logoutWithRedirect)(E)
  }, [E]), {
    manualSubmit: I,
    error: p,
    submitting: _
  } = (0, d.useUserCodeSubmit)(s, t, T);
  return (0, n.jsxs)("div", {
    className: f.content,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-xl/extrabold",
      className: f.text,
      children: C.default.Messages.ACTIVATE_DEVICE_TITLE
    }), (0, n.jsx)(l.Text, {
      tag: "p",
      variant: "text-md/medium",
      color: "header-secondary",
      className: f.text,
      children: C.default.Messages.ACTIVATE_DEVICE_BODY
    }), (0, n.jsx)(l.TextInput, {
      placeholder: C.default.Messages.ACTIVATE_DEVICE_INPUT_PLACEHOLDER.format({
        number: A.OAuthConstants.USER_CODE_LENGTH
      }),
      maxLength: A.OAuthConstants.USER_CODE_LENGTH,
      className: f.textInputContainer,
      inputClassName: o()(f.textInput, {
        [f.textInputError]: null != p
      }),
      autoComplete: "off",
      autoFocus: !0,
      value: s,
      onChange: h,
      error: p
    }), (0, n.jsx)(l.Button, {
      fullWidth: !0,
      color: l.Button.Colors.BRAND,
      onClick: I,
      submitting: _,
      disabled: s.length !== A.OAuthConstants.USER_CODE_LENGTH,
      children: (0, n.jsx)(l.Text, {
        variant: "text-md/medium",
        children: C.default.Messages.SUBMIT
      })
    })]
  })
}