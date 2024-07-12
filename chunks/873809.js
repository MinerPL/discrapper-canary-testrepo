n.r(t), n(47120);
var s = n(735250),
  o = n(470079),
  r = n(481060),
  i = n(689938),
  l = n(665693);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class c extends o.PureComponent {
  render() {
let {
  transitionState: e,
  header: t,
  body: o,
  confirmText: a
} = this.props;
return (0, s.jsxs)(r.ModalRoot, {
  transitionState: e,
  'aria-label': t,
  children: [
    (0, s.jsxs)(r.ModalContent, {
      className: l.content,
      children: [
        (0, s.jsx)('img', {
          src: n(568533),
          alt: t
        }),
        (0, s.jsx)(r.Heading, {
          variant: 'heading-xl/semibold',
          className: l.header,
          children: t
        }),
        (0, s.jsx)(r.Text, {
          variant: 'text-md/normal',
          children: o
        })
      ]
    }),
    (0, s.jsxs)(r.ModalFooter, {
      className: l.footer,
      children: [
        (0, s.jsx)(r.Button, {
          size: r.Button.Sizes.SMALL,
          onClick: this.handleConfirm,
          children: a
        }),
        (0, s.jsx)(r.Button, {
          size: r.Button.Sizes.SMALL,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.PRIMARY,
          onClick: this.handleDismiss,
          children: i.Z.Messages.CLOSE
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), a(this, 'handleConfirm', () => {
  let {
    onConfirm: e,
    onClose: t
  } = this.props;
  null == t || t(), null == e || e();
}), a(this, 'handleDismiss', () => {
  let {
    onDismiss: e,
    onClose: t
  } = this.props;
  null == t || t(), null == e || e();
});
  }
}
t.default = c;