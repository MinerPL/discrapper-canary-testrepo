t.r(n), t.d(n, {
  default: function() {
return f;
  },
  openInteractionModal: function() {
return m;
  }
});
var i = t(735250);
t(470079);
var o = t(481060),
  l = t(777036),
  a = t(154921),
  r = t(970184),
  s = t(471073),
  u = t(293979),
  d = t(954654),
  c = t(689938),
  p = t(137953);

function f(e) {
  let {
title: n,
onClose: t,
transitionState: f
  } = e, {
components: m,
applicationIconURL: h,
applicationName: I,
submissionState: _,
error: C,
validators: g,
onSubmit: b
  } = (0, u.X9)(e, t);
  return (0, i.jsx)('form', {
onSubmit: e => {
  e.preventDefault(), b();
},
children: (0, i.jsxs)(o.ModalRoot, {
  transitionState: f,
  children: [
    (0, i.jsxs)(o.ModalHeader, {
      separator: !1,
      children: [
        (0, i.jsx)(o.Avatar, {
          src: h,
          size: o.AvatarSizes.SIZE_24,
          'aria-label': I,
          className: p.applicationIcon
        }),
        (0, i.jsx)(a.Z, {
          color: a.Z.Colors.HEADER_PRIMARY,
          size: a.Z.Sizes.SIZE_24,
          children: n
        }),
        (0, i.jsx)(o.ModalCloseButton, {
          onClick: t,
          className: p.closeButton
        })
      ]
    }),
    (0, i.jsxs)(o.ModalContent, {
      children: [
        null != C && '' !== C ? (0, i.jsx)(l.Z, {
          messageType: l.Q.ERROR,
          className: p.submissionWarning,
          children: C
        }) : null,
        (0, i.jsx)(l.Z, {
          messageType: l.Q.WARNING,
          className: p.submissionWarning,
          children: c.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({
            applicationName: I
          })
        }),
        (0, i.jsx)(o.FormSection, {
          children: (0, i.jsx)(r.Il, {
            modal: e,
            validators: g,
            children: (0, d.xX)(m)
          })
        })
      ]
    }),
    (0, i.jsxs)(o.ModalFooter, {
      children: [
        (0, i.jsx)(o.Button, {
          type: 'submit',
          color: o.Button.Colors.BRAND,
          size: o.Button.Sizes.MEDIUM,
          submitting: _ === s.i.IN_FLIGHT,
          children: c.Z.Messages.SUBMIT
        }),
        (0, i.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          onClick: t,
          children: c.Z.Messages.CANCEL
        })
      ]
    })
  ]
})
  });
}

function m(e) {
  (0, o.openModal)(n => (0, i.jsx)(f, {
...n,
...e
  }));
}