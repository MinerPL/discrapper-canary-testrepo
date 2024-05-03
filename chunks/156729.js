"use strict";
s.r(t), s("47120");
var a, n = s("735250"),
  l = s("470079"),
  i = s("120356"),
  r = s.n(i),
  o = s("873546"),
  d = s("442837"),
  u = s("481060"),
  c = s("570140"),
  S = s("355467"),
  E = s("117938"),
  T = s("46141"),
  f = s("351402"),
  m = s("823379"),
  _ = s("464179"),
  g = s("211667"),
  h = s("244526"),
  I = s("689938"),
  N = s("249054");

function p(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let C = {
  IS_DEFAULT: "isDefault"
};
class A extends(a = l.PureComponent) {
  componentWillUnmount() {
    c.default.wait(() => {
      (0, S.clearUpdatePaymentSourceError)(), (0, S.clearRemovePaymentSourceError)()
    })
  }
  renderError() {
    let {
      updateError: e,
      removeError: t
    } = this.props;
    return null == e || e.hasCardError() || e.hasAddressError() ? null != t ? (0, n.jsx)(u.FormErrorBlock, {
      className: N.formError,
      children: t.message
    }) : null : (0, n.jsx)(u.FormErrorBlock, {
      className: N.formError,
      children: e.message
    })
  }
  renderBillingAddressSection() {
    let {
      billingAddress: e
    } = this.state, {
      updateError: t,
      paymentSource: s
    } = this.props, a = (0, E.getBillingAddressLayout)(s);
    return (0, n.jsxs)("div", {
      className: N.addressSection,
      children: [(0, n.jsx)(u.Text, {
        className: N.sectionHeader,
        variant: "text-sm/normal",
        children: I.default.Messages.BILLING_ADDRESS
      }), (0, n.jsx)(_.default, {
        ...e,
        mode: _.default.Modes.EDIT,
        layout: a,
        onBillingAddressChange: this.handleAddressUpdate,
        error: t
      })]
    })
  }
  renderCardExpirationSection() {
    let {
      expiresMonth: e,
      expiresYear: t
    } = this.state;
    if (null == e || null == t) return null;
    let s = "".concat(e.toString().padStart(2, "0"), "/").concat(t.toString().padStart(2, "0").slice(-2));
    return (0, n.jsxs)("div", {
      className: N.addressSection,
      children: [(0, n.jsx)(u.Text, {
        className: N.sectionHeader,
        variant: "text-sm/normal",
        children: I.default.Messages.BILLING_STEP_CREDIT_CARD_INFORMATION
      }), (0, n.jsx)(g.default, {
        expirationDate: s,
        onCardInfoChange: this.handleExpirationDateUpdate,
        error: this.props.updateError
      })]
    })
  }
  renderActions() {
    let {
      submitting: e,
      removing: t,
      isForSubscription: s
    } = this.props, {
      billingAddressValid: a,
      expirationValid: l
    } = this.state;
    return (0, n.jsxs)("div", {
      className: N.formActions,
      children: [(0, n.jsx)("div", {
        className: N.__invalid_leftAlignedButtons,
        children: (0, n.jsxs)("div", {
          className: N.disabledTooltipWrapper,
          children: [s ? (0, n.jsx)(u.Tooltip, {
            text: I.default.Messages.PAYMENT_SOURCE_DELETE_DISABLED_TOOLTIP,
            children: e => (0, n.jsx)("div", {
              "aria-hidden": !0,
              className: N.disabledTooltipTarget,
              ...e
            })
          }) : null, (0, n.jsx)(u.Button, {
            type: "button",
            disabled: s || e,
            submitting: t,
            onClick: this.handleDelete,
            look: u.Button.Looks.OUTLINED,
            color: u.Button.Colors.RED,
            size: o.isMobile ? u.ButtonSizes.SMALL : u.ButtonSizes.MEDIUM,
            children: o.isMobile ? I.default.Messages.DELETE : I.default.Messages.PAYMENT_SOURCE_DELETE
          })]
        })
      }), (0, n.jsxs)("div", {
        className: N.rightAlignedButtons,
        children: [(0, n.jsx)(u.Button, {
          type: "button",
          disabled: e || t,
          onClick: this.handleCancel,
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          size: o.isMobile ? u.ButtonSizes.SMALL : u.ButtonSizes.MEDIUM,
          children: I.default.Messages.CANCEL
        }), (0, n.jsx)(u.Button, {
          submitting: e,
          disabled: !a || t || !l,
          type: "submit",
          color: u.Button.Colors.GREEN,
          size: o.isMobile ? u.ButtonSizes.SMALL : u.ButtonSizes.MEDIUM,
          children: I.default.Messages.SAVE
        })]
      })]
    })
  }
  render() {
    let {
      paymentSource: e,
      isDefault: t,
      locale: s,
      className: a,
      isForSubscription: l
    } = this.props, {
      isDefault: i
    } = this.state, o = e instanceof T.PaypalSourceRecord;
    return (0, n.jsx)(u.Card, {
      editable: !0,
      className: r()(N.card, a),
      children: (0, n.jsxs)("form", {
        onSubmit: this.handleSubmit,
        noValidate: !0,
        children: [this.renderError(), (0, n.jsxs)("div", {
          className: N.__invalid_paymentSection,
          children: [(0, n.jsx)(h.default, {
            paymentSource: e,
            isDefault: t,
            isForSubscription: l,
            locale: s,
            showDefaultLabel: !0,
            showPaymentSourceIcon: !0
          }), e.invalid ? (0, n.jsx)("div", {
            className: N.errorSubText,
            children: I.default.Messages.PAYMENT_SOURCE_INVALID_HELP
          }) : null, (0, n.jsx)("div", {
            className: N.subText,
            children: o ? I.default.Messages.PAYMENT_SOURCE_EDIT_HELP_PAYPAL.format({
              paypalURL: "https://www.paypal.com"
            }) : I.default.Messages.PAYMENT_SOURCE_EDIT_HELP_CARD
          })]
        }), this.renderCardExpirationSection(), this.renderBillingAddressSection(), (0, n.jsx)(u.Checkbox, {
          name: C.IS_DEFAULT,
          value: i,
          onChange: (e, t) => this.handleFieldChange(t, C.IS_DEFAULT),
          type: u.Checkbox.Types.INVERTED,
          className: N.defaultSection,
          children: (0, n.jsx)(u.Text, {
            className: N.defaultCheckboxLabel,
            variant: "text-sm/normal",
            children: I.default.Messages.PAYMENT_SOURCE_MAKE_DEFAULT
          })
        }), (0, n.jsx)(u.FormDivider, {}), this.renderActions()]
      })
    })
  }
  constructor(e) {
    var t, s, a, n, l, i, r;
    super(e), p(this, "handleSubmit", e => {
      if (e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(m.isNotNullish).length) this.props.onCancel();
      else {
        let {
          billingAddress: e,
          isDefault: t,
          expiresMonth: s,
          expiresYear: a
        } = this.state;
        this.props.onSubmit(this.props.paymentSource.id, {
          billingAddress: e,
          expiresMonth: s,
          expiresYear: a,
          isDefault: t
        })
      }
    }), p(this, "handleCancel", () => {
      this.props.onCancel()
    }), p(this, "handleDelete", () => {
      let {
        onDelete: e,
        paymentSource: t
      } = this.props;
      e(t.id)
    }), p(this, "handleAddressUpdate", (e, t, s) => {
      this.setState({
        billingAddress: e,
        billingAddressValid: t,
        dirtyFields: {
          ...this.state.dirtyFields,
          billingAddress: s
        }
      })
    }), p(this, "handleExpirationDateUpdate", (e, t) => {
      let {
        expirationDate: s
      } = e;
      if (this.setState({
          expirationValid: t
        }), null == s || "" === s) return;
      let [a, n] = s.split("/");
      this.handleFieldChange(Number(a), "expiresMonth"), this.handleFieldChange(Number("".concat(new Date().getFullYear().toString().slice(0, 2)).concat(n)), "expiresYear")
    }), p(this, "handleFieldChange", (e, t) => {
      null != t && this.setState({
        [t]: e,
        dirtyFields: {
          ...this.state.dirtyFields,
          [t]: !0
        }
      })
    });
    let {
      paymentSource: o,
      isDefault: d
    } = e, u = o.billingAddress;
    this.state = {
      billingAddress: {
        name: null !== (t = u.name) && void 0 !== t ? t : "",
        line1: null !== (s = u.line1) && void 0 !== s ? s : "",
        line2: null !== (a = u.line2) && void 0 !== a ? a : "",
        country: null !== (n = u.country) && void 0 !== n ? n : "",
        state: null !== (l = u.state) && void 0 !== l ? l : "",
        city: null !== (i = u.city) && void 0 !== i ? i : "",
        postalCode: null !== (r = u.postalCode) && void 0 !== r ? r : ""
      },
      expiresMonth: o instanceof T.CreditCardSourceRecord ? o.expiresMonth : void 0,
      expiresYear: o instanceof T.CreditCardSourceRecord ? o.expiresYear : void 0,
      billingAddressValid: !1,
      isDefault: d,
      expirationValid: !0,
      dirtyFields: {}
    }
  }
}
p(A, "defaultProps", {
  onDelete: () => {},
  onSubmit: () => {},
  onCancel: () => {}
}), t.default = d.default.connectStores([f.default], () => ({
  updateError: f.default.editSourceError,
  removeError: f.default.removeSourceError
}))(A)