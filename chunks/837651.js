"use strict";
s.r(t), s("47120");
var r = s("735250"),
  n = s("470079"),
  a = s("481060"),
  i = s("816814"),
  l = s("200483"),
  o = s("594174"),
  d = s("285952"),
  c = s("277390"),
  u = s("287880"),
  h = s("689938"),
  f = s("177679");

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let p = e => {
  let {
    image: t,
    label: s,
    text: n,
    children: i
  } = e;
  return (0, r.jsxs)(d.default, {
    className: f.spacing,
    children: [(0, r.jsx)(d.default, {
      grow: 0,
      shrink: 0,
      basis: "156px",
      justify: d.default.Justify.CENTER,
      className: f.image,
      children: t
    }), (0, r.jsx)(d.default, {
      direction: d.default.Direction.VERTICAL,
      justify: d.default.Justify.CENTER,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.FormTitle, {
          tag: "h5",
          className: f.headerSpacing,
          children: s
        }), (0, r.jsx)(a.FormText, {
          type: a.FormText.Types.DESCRIPTION,
          children: n
        }), i]
      })
    })]
  })
};
class m extends n.PureComponent {
  render() {
    var e;
    let {
      transitionState: t,
      onClose: n
    } = this.props, {
      totpSecret: i,
      code: l,
      isVerifying: g
    } = this.state, m = null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.email, x = (0, u.encodeTotpSecretAsUrl)(null != m ? m : "", i), v = (0, r.jsx)("form", {
      onSubmit: this.handleActivate,
      children: (0, r.jsxs)(d.default, {
        className: f.inputContainer,
        align: d.default.Align.START,
        children: [(0, r.jsx)(a.TextInput, {
          value: l,
          className: f.input,
          placeholder: "000 000",
          maxLength: 7,
          autoComplete: "one-time-code",
          onChange: this.handleCodeChange,
          error: this.state.error,
          autoFocus: !0
        }), (0, r.jsx)(d.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, r.jsx)(a.Button, {
            type: "submit",
            submitting: g,
            children: h.default.Messages.TWO_FA_ACTIVATE
          })
        })]
      })
    });
    return (0, r.jsxs)(a.ModalRoot, {
      transitionState: t,
      size: a.ModalSize.DYNAMIC,
      className: f.customWidth,
      children: [(0, r.jsxs)(a.ModalHeader, {
        separator: !1,
        children: [(0, r.jsxs)(d.default.Child, {
          grow: 1,
          shrink: 1,
          children: [(0, r.jsx)(a.Heading, {
            variant: "heading-lg/semibold",
            children: h.default.Messages.TWO_FA_ENABLE
          }), (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            className: f.subHeader,
            children: h.default.Messages.TWO_FA_ENABLE_SUBHEADER
          })]
        }), (0, r.jsx)(d.default.Child, {
          grow: 0,
          children: (0, r.jsx)(a.ModalCloseButton, {
            onClick: n
          })
        })]
      }), (0, r.jsxs)(a.ModalContent, {
        children: [(0, r.jsx)(p, {
          image: (0, r.jsx)("img", {
            alt: "",
            src: s("340061"),
            width: 100,
            height: 100
          }),
          label: h.default.Messages.TWO_FA_DOWNLOAD_APP_LABEL,
          text: h.default.Messages.TWO_FA_DOWNLOAD_APP_BODY.format({
            googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en",
            authyURL: "https://www.authy.com/"
          })
        }), (0, r.jsx)(a.FormDivider, {
          className: f.divider
        }), (0, r.jsx)(p, {
          image: (0, r.jsx)(c.default, {
            text: x
          }),
          label: h.default.Messages.TWO_FA_QR_LABEL,
          text: h.default.Messages.TWO_FA_QR_BODY,
          children: (0, r.jsxs)("div", {
            className: f.topSpacing,
            children: [(0, r.jsx)(a.FormTitle, {
              tag: "h5",
              className: f.headerSpacing,
              children: h.default.Messages.TWO_FA_KEY
            }), (0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              className: f.secret,
              selectable: !0,
              children: i
            })]
          })
        }), (0, r.jsx)(a.FormDivider, {
          className: f.divider
        }), (0, r.jsx)(p, {
          image: (0, r.jsx)("img", {
            alt: "",
            src: s("308777")
          }),
          label: h.default.Messages._TWO_FA_LOGIN_LABEL,
          text: h.default.Messages.TWO_FA_LOGIN_BODY,
          children: v
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      code: "",
      totpSecret: (0, u.generateTotpSecret)(),
      error: null,
      isVerifying: !1
    }), g(this, "handleCodeChange", e => {
      this.setState({
        code: e
      })
    }), g(this, "handleActivate", e => {
      e.preventDefault();
      let {
        password: t,
        emailToken: s
      } = this.props, {
        totpSecret: r,
        code: n
      } = this.state;
      this.setState({
        isVerifying: !0
      }), i.default.enable({
        password: t,
        code: n,
        secret: (0, u.encodeTotpSecret)(r),
        ...(0, l.isMfaEmailVerificationEnabled)() && {
          emailToken: s
        }
      }).then(this.handleActivateSuccess, e => this.setState({
        error: e.body.message,
        isVerifying: !1
      }))
    }), g(this, "handleActivateSuccess", () => {
      let {
        onClose: e,
        handleEnableMFASuccess: t
      } = this.props;
      this.setState({
        isVerifying: !1
      }), t(), null == e || e()
    })
  }
}
t.default = m