"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  r = s.n(l),
  o = s("442837"),
  i = s("692547"),
  c = s("481060"),
  u = s("771308"),
  d = s("13430"),
  f = s("594174"),
  E = s("68972"),
  p = s("63063"),
  m = s("981631"),
  h = s("723359"),
  N = s("689938"),
  _ = s("603586");

function T(e) {
  let {
    onComplete: t,
    onClose: s
  } = e, [l, T] = n.useState(null), [v, A] = n.useState(null), [S, x] = n.useState(!1), I = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser()), g = n.createRef();
  async function C(e) {
    e.preventDefault(), r()(null != l, "Cannot submit null birthday."), x(!0);
    try {
      await u.submitDateOfBirth(l, h.AgeGateSource.NEW_USER_FLOW), t()
    } catch (e) {
      if (null != e.body && null != e.body.date_of_birth) u.preventUnderageRegistration(h.AgeGateSource.NEW_USER_FLOW), u.logoutUnderageNewUser(h.AgeGateSource.NEW_USER_FLOW), s();
      else {
        var a;
        (null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.username) != null ? A(N.default.Messages.USER_SETTINGS_UPDATE_FAILURE) : A(null == e ? void 0 : e.body.message)
      }
    }
    x(!1)
  }
  n.useEffect(() => {
    null != I && null != I.nsfwAllowed && t()
  }, [I, t]);
  let b = n.useCallback(e => {
      T(e)
    }, [T]),
    O = n.useCallback(() => {
      var e;
      null === (e = g.current) || void 0 === e || e.focus()
    }, [g]);
  return null == I ? null : (0, a.jsxs)("form", {
    className: _.content,
    onSubmit: C,
    children: [(0, a.jsx)(E.default, {
      width: 56,
      height: 40,
      className: _.logo,
      color: i.default.unsafe_rawColors.BRAND_500.css
    }), (0, a.jsx)(c.Heading, {
      className: _.title,
      variant: "heading-xl/semibold",
      children: N.default.Messages.NUF_JOIN_SERVER_TITLE_2
    }), (0, a.jsx)(c.Text, {
      color: "text-normal",
      className: _.description,
      variant: "text-md/normal",
      children: N.default.Messages.NUF_AGE_GATE_BODY.format({
        helpURL: p.default.getArticleURL(m.HelpdeskArticles.AGE_GATE)
      })
    }), (0, a.jsx)(c.ThemeContextProvider, {
      theme: m.ThemeTypes.LIGHT,
      children: (0, a.jsx)(d.default, {
        required: !0,
        autoFocus: !0,
        wrapperClassName: _.formItem,
        label: N.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
        name: "birthday",
        onChange: b,
        onPopulated: O,
        error: v,
        value: l
      })
    }), (0, a.jsx)("div", {
      className: _.footer,
      children: (0, a.jsx)("div", {
        className: _.buttonWrapper,
        children: (0, a.jsx)(c.Button, {
          buttonRef: g,
          type: "submit",
          size: c.Button.Sizes.LARGE,
          submitting: S,
          disabled: null == l,
          fullWidth: !0,
          children: N.default.Messages.NEXT
        })
      })
    })]
  })
}