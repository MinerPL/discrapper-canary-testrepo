I.r(_);
var A = I(735250);
I(470079);
var O = I(481060),
  T = I(230711),
  S = I(181211),
  C = I(188879),
  N = I(981631),
  D = I(726985),
  R = I(689938),
  e = I(104418),
  V = I(170143);
_.default = E => {
  let {
transitionState: _,
onClose: I,
classificationId: i,
source: n
  } = E, P = (0, S.Z)(), t = () => {
I(), T.Z.open(N.oAB.PRIVACY_AND_SAFETY, D.s6.PRIVACY_ACCOUNT_STANDING);
  };
  return (0, A.jsxs)(O.ModalRoot, {
className: e.modalRoot,
transitionState: _,
children: [
  (0, A.jsxs)('div', {
    className: e.modalHeader,
    children: [
      (0, A.jsx)('img', {
        className: e.image,
        src: V,
        alt: ''
      }),
      (0, A.jsx)(O.ModalCloseButton, {
        className: e.modalClose,
        onClick: I
      })
    ]
  }),
  (0, A.jsx)(O.ModalContent, {
    className: e.modalContent,
    children: P ? (0, A.jsx)(O.Spinner, {}) : (0, A.jsx)(C.Z, {
      classificationId: i,
      source: n,
      onError: t
    })
  }),
  (0, A.jsx)(O.ModalFooter, {
    children: (0, A.jsx)(O.Button, {
      className: e.__invalid_button,
      type: 'button',
      color: O.Button.Colors.BRAND,
      onClick: t,
      children: R.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_REDIRECT_V2
    })
  })
]
  });
};