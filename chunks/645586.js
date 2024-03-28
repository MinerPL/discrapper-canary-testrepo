"use strict";
s.r(e), s("47120");
var a, n, i = s("735250"),
  c = s("470079"),
  r = s("442837"),
  o = s("481060"),
  l = s("355467"),
  u = s("505649"),
  d = s("626135"),
  A = s("937615"),
  T = s("622999"),
  h = s("981631"),
  N = s("689938"),
  M = s("883825");

function _(t, e, s) {
  return e in t ? Object.defineProperty(t, e, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = s, t
}(n = a || (a = {}))[n.START = 0] = "START", n[n.FAIL = 1] = "FAIL", n[n.SUCCESS = 2] = "SUCCESS", n[n.CANCELED = 3] = "CANCELED";
class E extends c.Component {
  componentDidMount() {
    d.default.track(h.AnalyticEvents.OPEN_MODAL, {
      type: h.AnalyticsSections.PAYMENT_AUTHENTICATION_MODAL
    })
  }
  componentWillUnmount() {
    d.default.track(h.AnalyticEvents.MODAL_DISMISSED, {
      type: h.AnalyticsSections.PAYMENT_AUTHENTICATION_MODAL
    })
  }
  getTitle() {
    let {
      step: t
    } = this.state;
    switch (t) {
      case 0:
        return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE;
      case 2:
        return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE_SUCCESS;
      case 3:
        return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE_CANCELED;
      default:
        return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE_FAIL
    }
  }
  getImageStyle() {
    let {
      step: t
    } = this.state;
    switch (t) {
      case 0:
        return M.authenticationRequiredImage;
      case 2:
        return M.authenticationSuccessImage;
      default:
        return M.authenticationFailImage
    }
  }
  getMessage() {
    let {
      step: t
    } = this.state, {
      pendingPayment: e
    } = this.props;
    switch (t) {
      case 0:
        return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_START.format({
          price: (0, A.formatPrice)(e.amount, e.currency),
          item: e.description
        });
      case 2:
        return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_SUCCESS;
      case 3:
        return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_CANCELED.format({
          item: e.description
        });
      default:
        return N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_FAIL
    }
  }
  renderButtons() {
    let {
      step: t
    } = this.state, {
      disableAuthentication: e
    } = this.props;
    if (0 === t) return (0, i.jsxs)(c.Fragment, {
      children: [(0, i.jsx)(o.Button, {
        color: o.ButtonColors.BRAND,
        disabled: e,
        onClick: this.handleAuthenticate,
        children: N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_BUTTON
      }), (0, i.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        size: o.Button.Sizes.NONE,
        color: o.Button.Colors.PRIMARY,
        onClick: this.cancelPayment,
        className: M.cancelButton,
        children: N.default.Messages.PAYMENT_AUTHENTICATION_MODAL_BUTTON_CANCEL_PAYMENT
      })]
    });
    return (0, i.jsx)(o.Button, {
      color: o.ButtonColors.BRAND,
      onClick: this.close,
      children: N.default.Messages.CLOSE
    })
  }
  render() {
    let {
      transitionState: t
    } = this.props;
    return (0, i.jsxs)(o.ModalRoot, {
      transitionState: t,
      className: M.modal,
      size: o.ModalSize.SMALL,
      "aria-label": this.getTitle(),
      children: [(0, i.jsxs)(o.ModalHeader, {
        children: [(0, i.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          children: (0, i.jsx)("span", {
            className: M.__invalid_modalTitle,
            children: this.getTitle()
          })
        }), (0, i.jsx)(o.ModalCloseButton, {
          className: M.closeIcon,
          onClick: this.close
        })]
      }), (0, i.jsxs)(o.ModalContent, {
        className: M.content,
        children: [(0, i.jsx)("div", {
          className: this.getImageStyle()
        }), (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          children: this.getMessage()
        })]
      }), (0, i.jsx)(o.ModalFooter, {
        className: M.__invalid_footer,
        children: this.renderButtons()
      })]
    })
  }
  constructor(...t) {
    super(...t), _(this, "state", {
      step: 0
    }), _(this, "close", async () => {
      let {
        step: t
      } = this.state, {
        onClose: e,
        pendingPayment: s
      } = this.props;
      0 === t && await (0, l.voidPendingPayment)(s.id), e()
    }), _(this, "cancelPayment", async () => {
      let {
        pendingPayment: t
      } = this.props;
      try {
        await (0, l.voidPendingPayment)(t.id)
      } catch (t) {
        throw this.setState({
          step: 3
        }), t
      }
      this.setState({
        step: 3
      })
    }), _(this, "handleAuthenticate", async () => {
      let {
        pendingPayment: t
      } = this.props, {
        error: e
      } = await (0, T.authenticatePaymentIntentForPaymentId)(t.id);
      null != e ? this.setState({
        step: 1
      }) : this.setState({
        step: 2
      })
    })
  }
}
e.default = r.default.connectStores([u.default], () => ({
  disableAuthentication: u.default.isAwaitingAuthentication
}))(E)