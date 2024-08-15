n(47120);
var r, i = n(735250),
  a = n(470079),
  s = n(120356),
  o = n.n(s),
  l = n(481060),
  u = n(689938),
  c = n(154773);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class _ extends(r = a.PureComponent) {
  render() {
var e;
let {
  title: t,
  actionText: n,
  children: r,
  error: s,
  isLoading: d,
  maxLength: _,
  transitionState: E,
  helpMessage: f,
  retryPrompt: h,
  retrySuccessMessage: p
} = this.props, {
  code: m,
  errorMessage: I,
  retrySuccess: T
} = this.state, g = a.Children.count(r) > 0 ? (0, i.jsx)(l.Card, {
  type: l.Card.Types.WARNING,
  className: c.card,
  children: (0, i.jsx)(l.Text, {
    variant: 'text-md/normal',
    children: r
  })
}) : null, S = null != h ? (0, i.jsxs)(l.Text, {
  className: o()(c.__invalid_submitText, c.spacing),
  variant: 'text-sm/normal',
  children: [
    (0, i.jsx)('br', {}),
    (0, i.jsx)(l.Clickable, {
      className: o()(c.spacing, c.__invalid_link),
      onClick: this.handleRetry,
      children: (0, i.jsx)(l.Anchor, {
        children: h
      })
    })
  ]
}) : null, A = T ? (0, i.jsx)(l.Card, {
  type: l.Card.Types.SUCCESS,
  className: c.card,
  children: (0, i.jsx)(l.Text, {
    variant: 'text-md/normal',
    children: p
  })
}) : null;
return (0, i.jsx)(l.ModalRoot, {
  transitionState: E,
  children: (0, i.jsxs)('form', {
    onSubmit: this.handleSubmit,
    children: [
      (0, i.jsx)(l.ModalHeader, {
        separator: !1,
        children: (0, i.jsx)(l.Heading, {
          variant: 'heading-lg/semibold',
          children: t
        })
      }),
      (0, i.jsxs)(l.ModalContent, {
        children: [
          null != f ? (0, i.jsx)(l.Text, {
            color: 'text-normal',
            variant: 'text-md/normal',
            className: c.spacing,
            children: f
          }) : null,
          g,
          A,
          (0, i.jsxs)(l.FormItem, {
            title: this.getLabelText(),
            className: c.spacing,
            children: [
              (0, i.jsx)(l.TextInput, {
                inputRef: this.setRef,
                onChange: this.handleCodeChange,
                placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                maxLength: null != _ ? _ : 10,
                value: m,
                autoComplete: 'one-time-code',
                autoFocus: !0
              }),
              this.errorPresent() ? (0, i.jsx)(l.Text, {
                color: 'text-danger',
                variant: 'text-xs/normal',
                className: c.error,
                children: null != s ? s : I
              }) : null,
              S
            ]
          })
        ]
      }),
      (0, i.jsxs)(l.ModalFooter, {
        children: [
          (0, i.jsx)(l.Button, {
            type: 'submit',
            disabled: d || 0 === m.length,
            children: null != n ? n : u.Z.Messages.CONFIRM
          }),
          (0, i.jsx)(l.Button, {
            onClick: this.handleCancel,
            disabled: d,
            look: l.Button.Looks.LINK,
            color: l.Button.Colors.PRIMARY,
            children: u.Z.Messages.CANCEL
          })
        ]
      })
    ]
  })
});
  }
  constructor(...e) {
super(...e), d(this, '_input', void 0), d(this, 'state', {
  code: '',
  errorMessage: '',
  retrySuccess: !1
}), d(this, 'setRef', e => {
  this._input = e;
}), d(this, 'getLabelText', () => {
  var e;
  return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL;
}), d(this, 'getSupportedCodeTypes', () => this.props.disallowBackupCodes ? u.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.Z.Messages.TWO_FA_AUTH_CODE), d(this, 'getPlaceholder', () => {
  var e;
  return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes();
}), d(this, 'errorPresent', () => null != this.props.error && '' !== this.props.error || null != this.state.errorMessage && '' !== this.state.errorMessage), d(this, 'handleRetry', () => {
  let {
    onRetry: e
  } = this.props;
  null == e || e().then(() => this.setState({
    retrySuccess: !0
  }));
}), d(this, 'handleSubmit', e => {
  e.preventDefault();
  let {
    handleSubmit: t,
    onError: n
  } = this.props;
  t(this.state.code).catch(e => {
    if (null != e.body)
      null == n || n(e.body), e.body.message && this.setState({
        errorMessage: e.body.message
      });
  });
}), d(this, 'handleCancel', () => {
  let {
    onClose: e,
    handleEarlyClose: t
  } = this.props;
  e(), null == t || t();
}), d(this, 'handleCodeChange', e => {
  this.setState({
    code: e
  });
});
  }
}
d(_, 'defaultProps', {
  btnClass: '',
  isLoading: !1,
  disallowBackupCodes: !1,
  error: null,
  forceNoPlaceholder: !1
}), t.Z = _;