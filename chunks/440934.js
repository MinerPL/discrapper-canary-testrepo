"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  },
  openInteractionModal: function() {
    return m
  }
});
var r = n("735250");
n("470079");
var l = n("481060"),
  i = n("474333"),
  s = n("154921"),
  o = n("970184"),
  a = n("471073"),
  u = n("293979"),
  d = n("954654"),
  c = n("689938"),
  f = n("130116");

function h(e) {
  let {
    title: t,
    onClose: n,
    transitionState: h
  } = e, {
    components: m,
    applicationIconURL: p,
    applicationName: g,
    submissionState: M,
    error: v,
    validators: I,
    onSubmit: C
  } = (0, u.useModalState)(e, n);
  return (0, r.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), C()
    },
    children: (0, r.jsxs)(l.ModalRoot, {
      transitionState: h,
      children: [(0, r.jsxs)(l.ModalHeader, {
        separator: !1,
        children: [(0, r.jsx)(l.Avatar, {
          src: p,
          size: l.AvatarSizes.SIZE_24,
          "aria-label": g,
          className: f.applicationIcon
        }), (0, r.jsx)(s.default, {
          color: s.default.Colors.HEADER_PRIMARY,
          size: s.default.Sizes.SIZE_24,
          children: t
        }), (0, r.jsx)(l.ModalCloseButton, {
          onClick: n,
          className: f.closeButton
        })]
      }), (0, r.jsxs)(l.ModalContent, {
        children: [null != v && "" !== v ? (0, r.jsx)(i.default, {
          messageType: i.HelpMessageTypes.ERROR,
          className: f.submissionWarning,
          children: v
        }) : null, (0, r.jsx)(i.default, {
          messageType: i.HelpMessageTypes.WARNING,
          className: f.submissionWarning,
          children: c.default.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({
            applicationName: g
          })
        }), (0, r.jsx)(l.FormSection, {
          children: (0, r.jsx)(o.ComponentStateContextProvider, {
            modal: e,
            validators: I,
            children: (0, d.renderComponents)(m)
          })
        })]
      }), (0, r.jsxs)(l.ModalFooter, {
        children: [(0, r.jsx)(l.Button, {
          type: "submit",
          color: l.Button.Colors.BRAND,
          size: l.Button.Sizes.MEDIUM,
          submitting: M === a.InteractionModalState.IN_FLIGHT,
          children: c.default.Messages.SUBMIT
        }), (0, r.jsx)(l.Button, {
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.PRIMARY,
          onClick: n,
          children: c.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function m(e) {
  (0, l.openModal)(t => (0, r.jsx)(h, {
    ...t,
    ...e
  }))
}