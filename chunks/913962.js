"use strict";
n.r(e), n.d(e, {
  default: function() {
    return T
  }
});
var s = n("735250");
n("470079");
var o = n("481060"),
  a = n("230711"),
  i = n("695346"),
  l = n("285952"),
  c = n("153124"),
  d = n("626135"),
  r = n("981631"),
  u = n("526761"),
  A = n("689938"),
  _ = n("381738"),
  C = n("38880");

function T(t) {
  let {
    onClose: e,
    transitionState: n
  } = t, T = (0, c.useUID)();

  function L() {
    e(), a.default.open(r.UserSettingsSections.ACCESSIBILITY, null, {
      scrollPosition: u.AccessibilityScrollPositions.LEGACY_CHAT_INPUT
    })
  }
  return (0, s.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-labelledby": T,
    children: [(0, s.jsx)("img", {
      className: _.art,
      src: C,
      alt: ""
    }), (0, s.jsx)(o.ModalContent, {
      children: (0, s.jsxs)(l.default, {
        direction: l.default.Direction.VERTICAL,
        justify: l.default.Justify.CENTER,
        children: [(0, s.jsx)(o.Heading, {
          id: T,
          variant: "heading-lg/semibold",
          className: _.title,
          children: A.default.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_TITLE
        }), (0, s.jsx)(o.Text, {
          variant: "text-md/normal",
          className: _.body,
          children: A.default.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_MESSAGE.format({
            openSettingsHook: (t, e) => (0, s.jsx)(o.Anchor, {
              onClick: L,
              children: t
            }, e)
          })
        })]
      })
    }), (0, s.jsxs)(o.ModalFooter, {
      children: [(0, s.jsx)(o.Button, {
        type: "button",
        onClick: function() {
          d.default.track(r.AnalyticEvents.LEGACY_CHAT_INPUT_TOGGLED, {
            enabled: !1,
            location: "LegacyChatInputExplanationModal"
          }), i.UseLegacyChatInput.updateSetting(!1), e()
        },
        children: A.default.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_BUTTON_CTA
      }), (0, s.jsx)(o.Button, {
        type: "button",
        look: o.Button.Looks.LINK,
        size: o.Button.Sizes.MEDIUM,
        color: o.Button.Colors.PRIMARY,
        onClick: e,
        children: A.default.Messages.NO_THANKS
      })]
    })]
  })
}