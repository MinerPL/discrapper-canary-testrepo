"use strict";
n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(481060),
  u = n(689938),
  _ = n(603838);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class c extends(i = s.PureComponent) {
  render() {
    var e;
    let {
      title: t,
      actionText: n,
      children: i,
      error: o,
      isLoading: d,
      maxLength: c,
      transitionState: E,
      helpMessage: I,
      retryPrompt: T,
      retrySuccessMessage: h
    } = this.props, {
      code: S,
      errorMessage: f,
      retrySuccess: N
    } = this.state, A = s.Children.count(i) > 0 ? (0, r.jsx)(l.Card, {
      type: l.Card.Types.WARNING,
      className: _.card,
      children: (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: i
      })
    }) : null, m = null != T ? (0, r.jsxs)(l.Text, {
      className: a()(_.__invalid_submitText, _.spacing),
      variant: "text-sm/normal",
      children: [(0, r.jsx)("br", {}), (0, r.jsx)(l.Clickable, {
        className: a()(_.spacing, _.__invalid_link),
        onClick: this.handleRetry,
        children: (0, r.jsx)(l.Anchor, {
          children: T
        })
      })]
    }) : null, O = N ? (0, r.jsx)(l.Card, {
      type: l.Card.Types.SUCCESS,
      className: _.card,
      children: (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: h
      })
    }) : null;
    return (0, r.jsx)(l.ModalRoot, {
      transitionState: E,
      children: (0, r.jsxs)("form", {
        onSubmit: this.handleSubmit,
        children: [(0, r.jsx)(l.ModalHeader, {
          separator: !1,
          children: (0, r.jsx)(l.Heading, {
            variant: "heading-lg/semibold",
            children: t
          })
        }), (0, r.jsxs)(l.ModalContent, {
          children: [null != I ? (0, r.jsx)(l.Text, {
            color: "text-normal",
            variant: "text-md/normal",
            className: _.spacing,
            children: I
          }) : null, A, O, (0, r.jsxs)(l.FormItem, {
            title: this.getLabelText(),
            className: _.spacing,
            children: [(0, r.jsx)(l.TextInput, {
              inputRef: this.setRef,
              onChange: this.handleCodeChange,
              placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
              maxLength: null != c ? c : 10,
              value: S,
              autoComplete: "one-time-code",
              autoFocus: !0
            }), this.errorPresent() ? (0, r.jsx)(l.Text, {
              color: "text-danger",
              variant: "text-xs/normal",
              className: _.error,
              children: null != o ? o : f
            }) : null, m]
          })]
        }), (0, r.jsxs)(l.ModalFooter, {
          children: [(0, r.jsx)(l.Button, {
            type: "submit",
            disabled: d || 0 === S.length,
            children: null != n ? n : u.Z.Messages.CONFIRM
          }), (0, r.jsx)(l.Button, {
            onClick: this.handleCancel,
            disabled: d,
            look: l.Button.Looks.LINK,
            color: l.Button.Colors.PRIMARY,
            children: u.Z.Messages.CANCEL
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), d(this, "_input", void 0), d(this, "state", {
      code: "",
      errorMessage: "",
      retrySuccess: !1
    }), d(this, "setRef", e => {
      this._input = e
    }), d(this, "getLabelText", () => {
      var e;
      return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL
    }), d(this, "getSupportedCodeTypes", () => this.props.disallowBackupCodes ? u.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.Z.Messages.TWO_FA_AUTH_CODE), d(this, "getPlaceholder", () => {
      var e;
      return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
    }), d(this, "errorPresent", () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage), d(this, "handleRetry", () => {
      let {
        onRetry: e
      } = this.props;
      null == e || e().then(() => this.setState({
        retrySuccess: !0
      }))
    }), d(this, "handleSubmit", e => {
      e.preventDefault();
      let {
        handleSubmit: t,
        onError: n
      } = this.props;
      t(this.state.code).catch(e => {
        if (null != e.body) null == n || n(e.body), e.body.message && this.setState({
          errorMessage: e.body.message
        })
      })
    }), d(this, "handleCancel", () => {
      let {
        onClose: e,
        handleEarlyClose: t
      } = this.props;
      e(), null == t || t()
    }), d(this, "handleCodeChange", e => {
      this.setState({
        code: e
      })
    })
  }
}
d(c, "defaultProps", {
  btnClass: "",
  isLoading: !1,
  disallowBackupCodes: !1,
  error: null,
  forceNoPlaceholder: !1
}), t.Z = c