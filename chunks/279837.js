"use strict";
s.r(t), s("47120"), s("773603");
var n, a = s("735250"),
  l = s("470079"),
  i = s("481060"),
  o = s("689938"),
  r = s("139102");

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class d extends(n = l.PureComponent) {
  render() {
    let {
      title: e,
      actionText: t,
      children: s,
      transitionState: n
    } = this.props, {
      error: u,
      isLoading: d,
      value: h
    } = this.state, c = l.Children.count(s) > 0 ? (0, a.jsx)(i.Card, {
      type: i.Card.Types.WARNING,
      className: r.card,
      children: (0, a.jsx)(i.Text, {
        className: r.warning,
        variant: "text-md/normal",
        children: s
      })
    }) : null;
    return (0, a.jsx)(i.ModalRoot, {
      transitionState: n,
      children: (0, a.jsxs)("form", {
        onSubmit: this.handleSubmit,
        children: [(0, a.jsx)(i.ModalHeader, {
          separator: !1,
          children: (0, a.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            children: e
          })
        }), (0, a.jsxs)(i.ModalContent, {
          children: [c, (0, a.jsxs)(i.FormItem, {
            title: o.default.Messages.FORM_LABEL_PASSWORD,
            className: r.spacing,
            children: [(0, a.jsx)(i.TextInput, {
              type: "password",
              autoComplete: "off",
              autoFocus: !0,
              value: h,
              onChange: this.handlePasswordChange
            }), null != u && "" !== u ? (0, a.jsxs)(i.Text, {
              variant: "text-xs/normal",
              color: "text-danger",
              className: r.error,
              children: [" ", u, " "]
            }) : null]
          })]
        }), (0, a.jsxs)(i.ModalFooter, {
          children: [(0, a.jsx)(i.Button, {
            type: "submit",
            disabled: d || 0 === h.length,
            children: null != t ? t : o.default.Messages.CONFIRM
          }), (0, a.jsx)(i.Button, {
            onClick: this.handleCancel,
            look: i.Button.Looks.LINK,
            color: i.Button.Colors.PRIMARY,
            children: o.default.Messages.CANCEL
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "state", {
      value: "",
      error: null,
      isLoading: !1
    }), u(this, "handleSubmit", e => {
      e.preventDefault();
      let {
        value: t
      } = this.state, {
        handleSubmit: s,
        onClose: n,
        onError: a
      } = this.props;
      this.setState({
        isLoading: !0
      }), s(t).then(e => n(null != e ? e : void 0), e => {
        if (null != e.body) null == a || a(e.body), !this.shouldSkipErrorMsgRender(e.body) && (e.body.password ? this.setState({
          error: e.body.password,
          isLoading: !1
        }) : e.body.message && this.setState({
          error: e.body.message,
          isLoading: !1
        }))
      }).finally(() => this.setState({
        isLoading: !1
      }))
    }), u(this, "shouldSkipErrorMsgRender", e => {
      let {
        skipErrorMsgAbortCode: t
      } = this.props;
      return null != t && (null == e ? void 0 : e.code) === t
    }), u(this, "handleCancel", () => {
      let {
        onClose: e
      } = this.props;
      e()
    }), u(this, "handlePasswordChange", e => {
      let {
        onPasswordChange: t
      } = this.props;
      null == t || t(e), this.setState({
        value: e
      })
    })
  }
}
u(d, "key", () => "password-confirm-modal"), t.default = d