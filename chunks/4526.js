o.r(s), o(47120);
var r = o(735250),
  t = o(470079),
  n = o(512722),
  a = o.n(n),
  l = o(481060),
  c = o(985002),
  d = o(880257),
  i = o(198952),
  _ = o(329242),
  u = o(689938),
  E = o(158278);
s.default = e => {
  let {
currentUser: s,
otherUser: o,
transitionState: n,
onClose: f
  } = e, [L, h] = t.useState(!1), N = t.useCallback(() => {
h(!0);
  }, []), C = t.useCallback(() => {
h(!1);
  }, []), x = t.useCallback(() => {
f();
  }, [f]), I = (0, d.Z)(), {
declineLinkRequest: M,
isDeclineLoading: m
  } = (0, c.G)({
onError: N,
onSuccess: x
  });
  return a()(!I, 'FamilyCenterDeclineLinkModal should only be rendered for teens.'), (0, r.jsx)(l.ModalRoot, {
transitionState: n,
children: (0, r.jsxs)('form', {
  onSubmit: e => {
    e.preventDefault(), M(o);
  },
  children: [
    L ? (0, r.jsx)(l.FormErrorBlock, {
      className: E.error,
      onDismiss: C,
      children: u.Z.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_ERROR
    }) : null,
    (0, r.jsx)(l.ModalContent, {
      children: (0, r.jsxs)('div', {
        className: E.header,
        children: [
          (0, r.jsx)(i.Z, {
            currentUser: s,
            otherUser: o,
            children: (0, r.jsx)(l.CloseSmallIcon, {
              size: 'md',
              color: 'currentColor',
              className: E.closeIcon
            })
          }),
          (0, r.jsx)(l.Heading, {
            className: E.headerText,
            variant: 'text-lg/bold',
            children: u.Z.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_TITLE
          }),
          (0, r.jsx)(_.Z, {
            user: o
          }),
          (0, r.jsxs)('div', {
            className: E.content,
            children: [
              (0, r.jsx)(l.Text, {
                className: E.__invalid_noticeHeader,
                variant: 'eyebrow',
                color: 'header-primary',
                children: u.Z.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_NOTICE_HEADER
              }),
              (0, r.jsx)(l.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: u.Z.Messages.FAMILY_CENTER_DECLINE_LINK_MODAL_DISCLAIMER_TEEN
              })
            ]
          })
        ]
      })
    }),
    (0, r.jsx)(l.ModalFooter, {
      children: (0, r.jsxs)('div', {
        className: E.footer,
        children: [
          (0, r.jsx)(l.Button, {
            className: E.button,
            type: 'button',
            disabled: m,
            look: l.Button.Looks.LINK,
            color: l.Button.Colors.PRIMARY,
            onClick: f,
            size: l.Button.Sizes.SMALL,
            children: u.Z.Messages.CANCEL
          }),
          (0, r.jsx)(l.Button, {
            className: E.button,
            type: 'submit',
            disabled: m,
            submitting: m,
            color: l.ButtonColors.RED,
            size: l.Button.Sizes.SMALL,
            children: u.Z.Messages.FAMILY_CENTER_DECLINE_REQUEST
          })
        ]
      })
    })
  ]
})
  });
};