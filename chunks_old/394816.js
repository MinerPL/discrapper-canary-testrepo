"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  },
  openInteractionModal: function() {
    return p
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  u = n("555158"),
  o = n("258078"),
  r = n("307311"),
  s = n("470055"),
  i = n("732523"),
  c = n("383247"),
  d = n("782340"),
  f = n("343225");

function I(e) {
  let {
    customId: t,
    title: n,
    onClose: I,
    transitionState: p
  } = e, {
    components: m,
    applicationIconURL: T,
    applicationName: C,
    submissionState: h,
    error: M,
    validators: E,
    onSubmit: N
  } = (0, i.useModalState)(e, I);
  return (0, l.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), N()
    },
    children: (0, l.jsxs)(a.ModalRoot, {
      transitionState: p,
      children: [(0, l.jsxs)(a.ModalHeader, {
        separator: !1,
        children: [(0, l.jsx)(a.Avatar, {
          src: T,
          size: a.AvatarSizes.SIZE_24,
          "aria-label": C,
          className: f.applicationIcon
        }), (0, l.jsx)(o.default, {
          color: o.default.Colors.HEADER_PRIMARY,
          size: o.default.Sizes.SIZE_24,
          children: n
        }), (0, l.jsx)(a.ModalCloseButton, {
          onClick: I,
          className: f.closeButton
        })]
      }), (0, l.jsxs)(a.ModalContent, {
        children: [null != M && "" !== M ? (0, l.jsx)(u.default, {
          messageType: u.HelpMessageTypes.ERROR,
          className: f.submissionWarning,
          children: M
        }) : null, (0, l.jsx)(u.default, {
          messageType: u.HelpMessageTypes.WARNING,
          className: f.submissionWarning,
          children: d.default.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({
            applicationName: C
          })
        }), (0, l.jsx)(a.FormSection, {
          children: (0, l.jsx)(r.ComponentStateContextProvider, {
            modal: {
              customId: t
            },
            validators: E,
            children: (0, c.renderComponents)(m)
          })
        })]
      }), (0, l.jsxs)(a.ModalFooter, {
        children: [(0, l.jsx)(a.Button, {
          type: "submit",
          color: a.Button.Colors.BRAND,
          size: a.Button.Sizes.MEDIUM,
          submitting: h === s.InteractionModalState.IN_FLIGHT,
          children: d.default.Messages.SUBMIT
        }), (0, l.jsx)(a.Button, {
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.PRIMARY,
          onClick: I,
          children: d.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function p(e) {
  (0, a.openModal)(t => (0, l.jsx)(I, {
    ...t,
    ...e
  }))
}