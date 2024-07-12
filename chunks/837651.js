s.r(t), s(47120);
var n = s(735250),
  r = s(470079),
  i = s(481060),
  a = s(816814),
  o = s(200483),
  l = s(594174),
  c = s(285952),
  d = s(277390),
  u = s(287880),
  h = s(689938),
  f = s(174950);

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let p = e => {
  let {
image: t,
label: s,
text: r,
children: a
  } = e;
  return (0, n.jsxs)(c.Z, {
className: f.spacing,
children: [
  (0, n.jsx)(c.Z, {
    grow: 0,
    shrink: 0,
    basis: '156px',
    justify: c.Z.Justify.CENTER,
    className: f.image,
    children: t
  }),
  (0, n.jsx)(c.Z, {
    direction: c.Z.Direction.VERTICAL,
    justify: c.Z.Justify.CENTER,
    children: (0, n.jsxs)('div', {
      children: [
        (0, n.jsx)(i.FormTitle, {
          tag: 'h5',
          className: f.headerSpacing,
          children: s
        }),
        (0, n.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          children: r
        }),
        a
      ]
    })
  })
]
  });
};
class m extends r.PureComponent {
  render() {
var e;
let {
  transitionState: t,
  onClose: r
} = this.props, {
  totpSecret: a,
  code: o,
  isVerifying: g
} = this.state, m = null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.email, x = (0, u.U0)(null != m ? m : '', a), _ = (0, n.jsx)('form', {
  onSubmit: this.handleActivate,
  children: (0, n.jsxs)(c.Z, {
    className: f.inputContainer,
    align: c.Z.Align.START,
    children: [
      (0, n.jsx)(i.TextInput, {
        value: o,
        className: f.input,
        placeholder: '000 000',
        maxLength: 7,
        autoComplete: 'one-time-code',
        onChange: this.handleCodeChange,
        error: this.state.error,
        autoFocus: !0
      }),
      (0, n.jsx)(c.Z.Child, {
        grow: 0,
        shrink: 0,
        children: (0, n.jsx)(i.Button, {
          type: 'submit',
          submitting: g,
          children: h.Z.Messages.TWO_FA_ACTIVATE
        })
      })
    ]
  })
});
return (0, n.jsxs)(i.ModalRoot, {
  transitionState: t,
  size: i.ModalSize.DYNAMIC,
  className: f.customWidth,
  children: [
    (0, n.jsxs)(i.ModalHeader, {
      separator: !1,
      children: [
        (0, n.jsxs)(c.Z.Child, {
          grow: 1,
          shrink: 1,
          children: [
            (0, n.jsx)(i.Heading, {
              variant: 'heading-lg/semibold',
              children: h.Z.Messages.TWO_FA_ENABLE
            }),
            (0, n.jsx)(i.Text, {
              variant: 'text-xs/normal',
              className: f.subHeader,
              children: h.Z.Messages.TWO_FA_ENABLE_SUBHEADER
            })
          ]
        }),
        (0, n.jsx)(c.Z.Child, {
          grow: 0,
          children: (0, n.jsx)(i.ModalCloseButton, {
            onClick: r
          })
        })
      ]
    }),
    (0, n.jsxs)(i.ModalContent, {
      children: [
        (0, n.jsx)(p, {
          image: (0, n.jsx)('img', {
            alt: '',
            src: s(340061),
            width: 100,
            height: 100
          }),
          label: h.Z.Messages.TWO_FA_DOWNLOAD_APP_LABEL,
          text: h.Z.Messages.TWO_FA_DOWNLOAD_APP_BODY.format({
            googleAuthURL: 'https://support.google.com/accounts/answer/1066447?hl=en',
            authyURL: 'https://www.authy.com/'
          })
        }),
        (0, n.jsx)(i.FormDivider, {
          className: f.divider
        }),
        (0, n.jsx)(p, {
          image: (0, n.jsx)(d.ZP, {
            text: x
          }),
          label: h.Z.Messages.TWO_FA_QR_LABEL,
          text: h.Z.Messages.TWO_FA_QR_BODY,
          children: (0, n.jsxs)('div', {
            className: f.topSpacing,
            children: [
              (0, n.jsx)(i.FormTitle, {
                tag: 'h5',
                className: f.headerSpacing,
                children: h.Z.Messages.TWO_FA_KEY
              }),
              (0, n.jsx)(i.Text, {
                variant: 'text-md/normal',
                className: f.secret,
                selectable: !0,
                children: a
              })
            ]
          })
        }),
        (0, n.jsx)(i.FormDivider, {
          className: f.divider
        }),
        (0, n.jsx)(p, {
          image: (0, n.jsx)('img', {
            alt: '',
            src: s(308777)
          }),
          label: h.Z.Messages._TWO_FA_LOGIN_LABEL,
          text: h.Z.Messages.TWO_FA_LOGIN_BODY,
          children: _
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), g(this, 'state', {
  code: '',
  totpSecret: (0, u.bV)(),
  error: null,
  isVerifying: !1
}), g(this, 'handleCodeChange', e => {
  this.setState({
    code: e
  });
}), g(this, 'handleActivate', e => {
  e.preventDefault();
  let {
    password: t,
    emailToken: s
  } = this.props, {
    totpSecret: n,
    code: r
  } = this.state;
  this.setState({
    isVerifying: !0
  }), a.Z.enable({
    password: t,
    code: r,
    secret: (0, u.Qe)(n),
    ...(0, o.j)() && {
      emailToken: s
    }
  }).then(this.handleActivateSuccess, e => this.setState({
    error: e.body.message,
    isVerifying: !1
  }));
}), g(this, 'handleActivateSuccess', () => {
  let {
    onClose: e,
    handleEnableMFASuccess: t
  } = this.props;
  this.setState({
    isVerifying: !1
  }), t(), null == e || e();
});
  }
}
t.default = m;