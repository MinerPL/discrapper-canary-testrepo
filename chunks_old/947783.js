"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("446674"),
  r = n("77078"),
  o = n("79112"),
  u = n("227602"),
  d = n("945330"),
  c = n("364719"),
  f = n("701909"),
  E = n("13798"),
  h = n("386045"),
  _ = n("803725"),
  C = n("80028"),
  S = n("49111"),
  I = n("782340"),
  m = n("292271");

function p(e) {
  o.default.open(S.UserSettingsSections.CLIPS), (0, _.dismissClipsUserEducation)(e)
}

function T() {
  let e = (0, i.useStateFromStores)([u.default], () => u.default.getKeybindForAction(S.GlobalKeybindActions.SAVE_CLIP));
  if (null == e) return (0, a.jsx)(a.Fragment, {
    children: I.default.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY_NO_KEYBIND
  });
  let t = E.toString(e.shortcut, !0);
  return (0, a.jsx)(a.Fragment, {
    children: I.default.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY.format({
      keybind: t,
      keybindHook: () => (0, a.jsx)("span", {
        className: m.keyCombo,
        children: (0, a.jsx)(r.KeyCombo, {
          shortcut: t
        })
      })
    })
  })
}
let g = {
  [C.ClipsUserEducationType.Error]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.PRIMARY,
    bodyCopy: () => (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.default, {
        className: m.errorWarningIcon
      }), I.default.Messages.CLIPS_USER_EDUCATION_ERROR_BODY]
    }),
    buttonCopy: () => I.default.Messages.CLIPS_USER_EDUCATION_LEARN_MORE,
    ctaOnClick: () => {
      window.open(f.default.getArticleURL(S.HelpdeskArticles.CLIPS), "_blank")
    },
    containerClass: m.container
  },
  [C.ClipsUserEducationType.Disabled]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.BRAND,
    bodyCopy: () => I.default.Messages.CLIPS_USER_EDUCATION_DISABLED_BODY,
    buttonCopy: () => I.default.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => p(C.ClipsUserEducationType.Disabled),
    containerClass: m.container
  },
  [C.ClipsUserEducationType.Enabled]: {
    textColor: "always-white",
    buttonLook: r.Button.Looks.INVERTED,
    buttonColor: r.Button.Colors.BRAND,
    bodyCopy: () => (0, a.jsx)(T, {}),
    buttonCopy: () => I.default.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => p(C.ClipsUserEducationType.Enabled),
    containerClass: l(m.container, m.containerEnabled)
  }
};

function A() {
  var e;
  let {
    decoupledClipsEnabled: t,
    clipsError: n
  } = (0, i.useStateFromStoresObject)([h.default], () => ({
    decoupledClipsEnabled: h.default.getSettings().decoupledClipsEnabled,
    clipsError: h.default.getLastClipsError()
  }));
  let s = (e = t, null != n ? C.ClipsUserEducationType.Error : e ? C.ClipsUserEducationType.Enabled : C.ClipsUserEducationType.Disabled),
    {
      bodyCopy: l,
      buttonCopy: o,
      ctaOnClick: u,
      textColor: c,
      buttonColor: f,
      buttonLook: E,
      containerClass: S
    } = g[s];
  return (0, a.jsxs)("div", {
    className: S,
    children: [(0, a.jsx)(r.Text, {
      color: c,
      variant: "text-sm/medium",
      children: l()
    }), (0, a.jsx)(r.Button, {
      onClick: () => (0, _.dismissClipsUserEducation)(s),
      size: r.Button.Sizes.NONE,
      look: r.Button.Looks.BLANK,
      className: m.buttonClose,
      children: (0, a.jsx)(d.default, {
        className: m.dismissIcon,
        width: 16,
        height: 16
      })
    }), (0, a.jsx)(r.Button, {
      onClick: u,
      className: m.buttonCTA,
      color: f,
      look: E,
      fullWidth: !0,
      size: r.Button.Sizes.SMALL,
      children: o()
    })]
  })
}