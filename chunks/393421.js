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
  E = n("476765"),
  N = n("49111"),
  I = n("782340"),
  m = n("398096");
let f = (0, E.uid)();
var C = e => {
  let {
    email: t,
    guildId: n,
    onClose: l
  } = e, [r, E] = s.useState(""), [C, T] = s.useState(null), S = s.useCallback(async () => {
    if (null != n) try {
      let e = await d.default.verifyCode(r, n, t);
      e.guild && (null == l || l(), (0, _.transitionTo)(N.Routes.CHANNEL(e.guild.id)))
    } catch (e) {
      T(new u.APIError(e))
    }
  }, [r, t, n, l]), g = o.throttle(() => {
    d.default.sendVerificationEmail(t, !0, n)
  }, 1e3), h = async e => {
    null != r && "" !== r && e.charCode === N.KeyboardKeys.ENTER && await S()
  };
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsx)("div", {
      className: m.topImage
    }), (0, a.jsx)(c.Heading, {
      className: i(m.centerText, m.header),
      variant: "heading-xl/semibold",
      children: I.default.Messages.HUB_VERIFY_EMAIL_ADDRESS
    }), (0, a.jsx)("div", {
      className: m.descriptionWidth,
      children: (0, a.jsx)(c.Text, {
        className: m.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: I.default.Messages.HUB_PIN_DESCRIPTION.format({
          email: t,
          onClick: g
        })
      })
    }), (0, a.jsxs)(c.FormItem, {
      className: m.formItem,
      children: [(0, a.jsx)(c.FormTitle, {
        id: f,
        children: I.default.Messages.HUB_ENTER_PIN
      }), (0, a.jsx)(c.TextInput, {
        onKeyPress: h,
        onChange: e => {
          null != e && "" !== e && E(e)
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
        className: m.submitText,
        variant: "text-sm/normal",
        children: I.default.Messages.SUBMIT
      })
    })]
  })
}