"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("917351"),
  o = n.n(r),
  c = n("77078"),
  d = n("142833"),
  u = n("448993"),
  _ = n("393414"),
  N = n("476765"),
  E = n("49111"),
  m = n("782340"),
  I = n("398096");
let f = (0, N.uid)();
var C = e => {
  let {
    email: t,
    guildId: n,
    onClose: l
  } = e, [r, N] = s.useState(""), [C, T] = s.useState(null), S = s.useCallback(async () => {
    if (null != n) try {
      let e = await d.default.verifyCode(r, n, t);
      e.guild && (null == l || l(), (0, _.transitionTo)(E.Routes.CHANNEL(e.guild.id)))
    } catch (e) {
      T(new u.APIError(e))
    }
  }, [r, t, n, l]), g = o.throttle(() => {
    d.default.sendVerificationEmail(t, !0, n)
  }, 1e3), h = async e => {
    null != r && "" !== r && e.charCode === E.KeyboardKeys.ENTER && await S()
  };
  return (0, a.jsxs)("div", {
    className: I.container,
    children: [(0, a.jsx)("div", {
      className: I.topImage
    }), (0, a.jsx)(c.Heading, {
      className: i(I.centerText, I.header),
      variant: "heading-xl/semibold",
      children: m.default.Messages.HUB_VERIFY_EMAIL_ADDRESS
    }), (0, a.jsx)("div", {
      className: I.descriptionWidth,
      children: (0, a.jsx)(c.Text, {
        className: I.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: m.default.Messages.HUB_PIN_DESCRIPTION.format({
          email: t,
          onClick: g
        })
      })
    }), (0, a.jsxs)(c.FormItem, {
      className: I.formItem,
      children: [(0, a.jsx)(c.FormTitle, {
        id: f,
        children: m.default.Messages.HUB_ENTER_PIN
      }), (0, a.jsx)(c.TextInput, {
        onKeyPress: h,
        onChange: e => {
          null != e && "" !== e && N(e)
        },
        error: null == C ? void 0 : C.getAnyErrorMessage(),
        "aria-labelledby": f
      })]
    }), (0, a.jsx)(c.Button, {
      fullWidth: !0,
      onClick: S,
      size: c.Button.Sizes.LARGE,
      color: c.Button.Colors.BRAND,
      children: (0, a.jsx)(c.Text, {
        className: I.submitText,
        variant: "text-sm/normal",
        children: m.default.Messages.SUBMIT
      })
    })]
  })
}