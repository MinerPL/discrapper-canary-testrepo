"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("442837"),
  r = n("481060"),
  o = n("230711"),
  u = n("556296"),
  d = n("465670"),
  c = n("729017"),
  f = n("63063"),
  E = n("13140"),
  h = n("435064"),
  _ = n("39604"),
  C = n("356659"),
  m = n("981631"),
  S = n("689938"),
  I = n("783348");

function p(e) {
  o.default.open(m.UserSettingsSections.CLIPS), (0, _.dismissClipsUserEducation)(e)
}

function T() {
  let e = (0, i.useStateFromStores)([u.default], () => u.default.getKeybindForAction(m.GlobalKeybindActions.SAVE_CLIP));
  if (null == e) return (0, a.jsx)(a.Fragment, {
    children: S.default.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY_NO_KEYBIND
  });
  let t = E.toString(e.shortcut, !0);
  return (0, a.jsx)(a.Fragment, {
    children: S.default.Messages.CLIPS_USER_EDUCATION_ENABLED_BODY.format({
      keybind: t,
      keybindHook: () => (0, a.jsx)("span", {
        className: I.keyCombo,
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
        className: I.errorWarningIcon
      }), S.default.Messages.CLIPS_USER_EDUCATION_ERROR_BODY]
    }),
    buttonCopy: () => S.default.Messages.CLIPS_USER_EDUCATION_LEARN_MORE,
    ctaOnClick: () => {
      window.open(f.default.getArticleURL(m.HelpdeskArticles.CLIPS), "_blank")
    },
    containerClass: I.container
  },
  [C.ClipsUserEducationType.Disabled]: {
    textColor: "text-primary",
    buttonLook: r.Button.Looks.FILLED,
    buttonColor: r.Button.Colors.BRAND,
    bodyCopy: () => S.default.Messages.CLIPS_USER_EDUCATION_DISABLED_BODY,
    buttonCopy: () => S.default.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => p(C.ClipsUserEducationType.Disabled),
    containerClass: I.container
  },
  [C.ClipsUserEducationType.Enabled]: {
    textColor: "always-white",
    buttonLook: r.Button.Looks.INVERTED,
    buttonColor: r.Button.Colors.BRAND,
    bodyCopy: () => (0, a.jsx)(T, {}),
    buttonCopy: () => S.default.Messages.CLIPS_USER_EDUCATION_MANAGE_CLIPS_SETTINGS,
    ctaOnClick: () => p(C.ClipsUserEducationType.Enabled),
    containerClass: l()(I.container, I.containerEnabled)
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
      containerClass: m
    } = g[s];
  return (0, a.jsxs)("div", {
    className: m,
    children: [(0, a.jsx)(r.Text, {
      color: c,
      variant: "text-sm/medium",
      children: l()
    }), (0, a.jsx)(r.Button, {
      onClick: () => (0, _.dismissClipsUserEducation)(s),
      size: r.Button.Sizes.NONE,
      look: r.Button.Looks.BLANK,
      className: I.buttonClose,
      children: (0, a.jsx)(d.default, {
        className: I.dismissIcon,
        width: 16,
        height: 16
      })
    }), (0, a.jsx)(r.Button, {
      onClick: u,
      className: I.buttonCTA,
      color: f,
      look: E,
      fullWidth: !0,
      size: r.Button.Sizes.SMALL,
      children: o()
    })]
  })
}