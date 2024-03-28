"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  },
  openInteractionModal: function() {
    return m
  }
});
var l = n("735250");
n("470079");
var u = n("481060"),
  a = n("474333"),
  o = n("154921"),
  r = n("970184"),
  i = n("471073"),
  s = n("293979"),
  c = n("954654"),
  d = n("689938"),
  f = n("526884");

function I(e) {
  let {
    customId: t,
    title: n,
    onClose: I,
    transitionState: m
  } = e, {
    components: p,
    applicationIconURL: C,
    applicationName: T,
    submissionState: M,
    error: h,
    validators: S,
    onSubmit: E
  } = (0, s.useModalState)(e, I);
  return (0, l.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), E()
    },
    children: (0, l.jsxs)(u.ModalRoot, {
      transitionState: m,
      children: [(0, l.jsxs)(u.ModalHeader, {
        separator: !1,
        children: [(0, l.jsx)(u.Avatar, {
          src: C,
          size: u.AvatarSizes.SIZE_24,
          "aria-label": T,
          className: f.applicationIcon
        }), (0, l.jsx)(o.default, {
          color: o.default.Colors.HEADER_PRIMARY,
          size: o.default.Sizes.SIZE_24,
          children: n
        }), (0, l.jsx)(u.ModalCloseButton, {
          onClick: I,
          className: f.closeButton
        })]
      }), (0, l.jsxs)(u.ModalContent, {
        children: [null != h && "" !== h ? (0, l.jsx)(a.default, {
          messageType: a.HelpMessageTypes.ERROR,
          className: f.submissionWarning,
          children: h
        }) : null, (0, l.jsx)(a.default, {
          messageType: a.HelpMessageTypes.WARNING,
          className: f.submissionWarning,
          children: d.default.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({
            applicationName: T
          })
        }), (0, l.jsx)(u.FormSection, {
          children: (0, l.jsx)(r.ComponentStateContextProvider, {
            modal: {
              customId: t
            },
            validators: S,
            children: (0, c.renderComponents)(p)
          })
        })]
      }), (0, l.jsxs)(u.ModalFooter, {
        children: [(0, l.jsx)(u.Button, {
          type: "submit",
          color: u.Button.Colors.BRAND,
          size: u.Button.Sizes.MEDIUM,
          submitting: M === i.InteractionModalState.IN_FLIGHT,
          children: d.default.Messages.SUBMIT
        }), (0, l.jsx)(u.Button, {
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          onClick: I,
          children: d.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function m(e) {
  (0, u.openModal)(t => (0, l.jsx)(I, {
    ...t,
    ...e
  }))
}