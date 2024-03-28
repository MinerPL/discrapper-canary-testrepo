"use strict";
a.r(e), a.d(e, {
  default: function() {
    return m
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  o = a("803997"),
  r = a.n(o),
  l = a("481060"),
  i = a("37234"),
  c = a("479531"),
  d = a("703656"),
  u = a("695346"),
  E = a("981631"),
  T = a("689938"),
  _ = a("894134"),
  h = a("794711");

function m(t) {
  let {
    transitionState: e,
    onClose: a
  } = t, [o, m] = n.useState(!1), [A, g] = n.useState(null), x = async () => {
    g(null), m(!0);
    try {
      await u.FamilyCenterEnabled.updateSetting(!1), (0, d.transitionTo)(E.Routes.FRIENDS), (0, i.popLayer)(), a()
    } catch (t) {
      g(new c.default(t).getAnyErrorMessage())
    } finally {
      m(!1)
    }
  }, C = () => {
    (0, d.transitionTo)(E.Routes.SETTINGS("family-center")), a()
  };
  return (0, s.jsxs)(l.ModalRoot, {
    className: _.root,
    transitionState: e,
    children: [(0, s.jsxs)(l.ModalHeader, {
      separator: !1,
      className: _.header,
      children: [(0, s.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        className: _.title,
        children: T.default.Messages.FAMILY_CENTER_DISABLE_FEATURE_MODAL_HEADER_TEXT
      }), (0, s.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: _.subtitle,
        children: T.default.Messages.FAMILY_CENTER_DISABLE_FEATURE_MODAL_SUBTITLE_TEXT.format({
          openSettingsHook: (t, e) => (0, s.jsx)(l.Anchor, {
            onClick: C,
            children: t
          }, e)
        })
      })]
    }), (0, s.jsxs)(l.ModalContent, {
      children: [(0, s.jsxs)("div", {
        className: r()(_.buttonContainer, h.marginTop20),
        children: [(0, s.jsx)(l.Button, {
          type: "submit",
          className: h.marginBottom8,
          grow: !0,
          color: l.Button.Colors.RED,
          onClick: x,
          submitting: o,
          children: T.default.Messages.FAMILY_CENTER_DISABLE_FEATURE_MODAL_DISABLE_BUTTON_TEXT
        }), (0, s.jsx)(l.Button, {
          grow: !0,
          color: l.Button.Colors.PRIMARY,
          onClick: a,
          children: T.default.Messages.CANCEL
        })]
      }), (0, s.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-danger",
        children: A
      })]
    })]
  })
}