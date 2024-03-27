"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("394846"),
  o = s("446674"),
  d = s("77078"),
  u = s("913144"),
  c = s("850068"),
  S = s("607191"),
  E = s("865146"),
  T = s("160299"),
  f = s("449008"),
  _ = s("18502"),
  m = s("58502"),
  g = s("364735"),
  h = s("782340"),
  N = s("909380");
let I = {
  IS_DEFAULT: "isDefault"
};
class p extends n.PureComponent {
  componentWillUnmount() {
    u.default.wait(() => {
      (0, c.clearUpdatePaymentSourceError)(), (0, c.clearRemovePaymentSourceError)()
    })
  }
  renderError() {
    let {
      updateError: e,
      removeError: t
    } = this.props;
    return null == e || e.hasCardError() || e.hasAddressError() ? null != t ? (0, a.jsx)(d.FormErrorBlock, {
      className: N.formError,
      children: t.message
    }) : null : (0, a.jsx)(d.FormErrorBlock, {
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
    } = this.props, n = (0, S.getBillingAddressLayout)(s);
    return (0, a.jsxs)("div", {
      className: N.addressSection,
      children: [(0, a.jsx)(d.Text, {
        className: N.sectionHeader,
        variant: "text-sm/normal",
        children: h.default.Messages.BILLING_ADDRESS
      }), (0, a.jsx)(_.default, {
        ...e,
        mode: _.default.Modes.EDIT,
        layout: n,
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
    return (0, a.jsxs)("div", {
      className: N.addressSection,
      children: [(0, a.jsx)(d.Text, {
        className: N.sectionHeader,
        variant: "text-sm/normal",
        children: h.default.Messages.BILLING_STEP_CREDIT_CARD_INFORMATION
      }), (0, a.jsx)(m.default, {
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
      billingAddressValid: n,
      expirationValid: l
    } = this.state;
    return (0, a.jsxs)("div", {
      className: N.formActions,
      children: [(0, a.jsx)("div", {
        className: N.leftAlignedButtons,
        children: (0, a.jsxs)("div", {
          className: N.disabledTooltipWrapper,
          children: [s ? (0, a.jsx)(d.Tooltip, {
            text: h.default.Messages.PAYMENT_SOURCE_DELETE_DISABLED_TOOLTIP,
            children: e => (0, a.jsx)("div", {
              "aria-hidden": !0,
              className: N.disabledTooltipTarget,
              ...e
            })
          }) : null, (0, a.jsx)(d.Button, {
            type: "button",
            disabled: s || e,
            submitting: t,
            onClick: this.handleDelete,
            look: d.Button.Looks.OUTLINED,
            color: d.Button.Colors.RED,
            size: r.isMobile ? d.ButtonSizes.SMALL : d.ButtonSizes.MEDIUM,
            children: r.isMobile ? h.default.Messages.DELETE : h.default.Messages.PAYMENT_SOURCE_DELETE
          })]
        })
      }), (0, a.jsxs)("div", {
        className: N.rightAlignedButtons,
        children: [(0, a.jsx)(d.Button, {
          type: "button",
          disabled: e || t,
          onClick: this.handleCancel,
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.PRIMARY,
          size: r.isMobile ? d.ButtonSizes.SMALL : d.ButtonSizes.MEDIUM,
          children: h.default.Messages.CANCEL
        }), (0, a.jsx)(d.Button, {
          submitting: e,
          disabled: !n || t || !l,
          type: "submit",
          color: d.Button.Colors.GREEN,
          size: r.isMobile ? d.ButtonSizes.SMALL : d.ButtonSizes.MEDIUM,
          children: h.default.Messages.SAVE
        })]
      })]
    })
  }
  render() {
    let {
      paymentSource: e,
      isDefault: t,
      locale: s,
      className: n,
      isForSubscription: l
    } = this.props, {
      isDefault: r
    } = this.state, o = e instanceof E.PaypalSourceRecord;
    return (0, a.jsx)(d.Card, {
      editable: !0,
      className: i(N.card, n),
      children: (0, a.jsxs)("form", {
        onSubmit: this.handleSubmit,
        noValidate: !0,
        children: [this.renderError(), (0, a.jsxs)("div", {
          className: N.paymentSection,
          children: [(0, a.jsx)(g.default, {
            paymentSource: e,
            isDefault: t,
            isForSubscription: l,
            locale: s
          }), e.invalid ? (0, a.jsx)("div", {
            className: N.errorSubText,
            children: h.default.Messages.PAYMENT_SOURCE_INVALID_HELP
          }) : null, (0, a.jsx)("div", {
            className: N.subText,
            children: o ? h.default.Messages.PAYMENT_SOURCE_EDIT_HELP_PAYPAL.format({
              paypalURL: "https://www.paypal.com"
            }) : h.default.Messages.PAYMENT_SOURCE_EDIT_HELP_CARD
          })]
        }), this.renderCardExpirationSection(), this.renderBillingAddressSection(), (0, a.jsx)(d.Checkbox, {
          name: I.IS_DEFAULT,
          value: r,
          onChange: (e, t) => this.handleFieldChange(t, I.IS_DEFAULT),
          type: d.Checkbox.Types.INVERTED,
          className: N.defaultSection,
          children: (0, a.jsx)(d.Text, {
            className: N.defaultCheckboxLabel,
            variant: "text-sm/normal",
            children: h.default.Messages.PAYMENT_SOURCE_MAKE_DEFAULT
          })
        }), (0, a.jsx)(d.FormDivider, {}), this.renderActions()]
      })
    })
  }
  constructor(e) {
    var t, s, a, n, l, i, r;
    super(e), this.handleSubmit = e => {
      if (e.preventDefault(), e.stopPropagation(), 0 === Object.values(this.state.dirtyFields).filter(f.isNotNullish).length) this.props.onCancel();
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
    }, this.handleCancel = () => {
      this.props.onCancel()
    }, this.handleDelete = () => {
      let {
        onDelete: e,
        paymentSource: t
      } = this.props;
      e(t.id)
    }, this.handleAddressUpdate = (e, t, s) => {
      this.setState({
        billingAddress: e,
        billingAddressValid: t,
        dirtyFields: {
          ...this.state.dirtyFields,
          billingAddress: s
        }
      })
    }, this.handleExpirationDateUpdate = (e, t) => {
      let {
        expirationDate: s
      } = e;
      if (this.setState({
          expirationValid: t
        }), null == s || "" === s) return;
      let [a, n] = s.split("/");
      this.handleFieldChange(Number(a), "expiresMonth"), this.handleFieldChange(Number("".concat(new Date().getFullYear().toString().slice(0, 2)).concat(n)), "expiresYear")
    }, this.handleFieldChange = (e, t) => {
      null != t && this.setState({
        [t]: e,
        dirtyFields: {
          ...this.state.dirtyFields,
          [t]: !0
        }
      })
    };
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
      expiresMonth: o instanceof E.CreditCardSourceRecord ? o.expiresMonth : void 0,
      expiresYear: o instanceof E.CreditCardSourceRecord ? o.expiresYear : void 0,
      billingAddressValid: !1,
      isDefault: d,
      expirationValid: !0,
      dirtyFields: {}
    }
  }
}
p.defaultProps = {
  onDelete: () => {},
  onSubmit: () => {},
  onCancel: () => {}
};
var C = o.default.connectStores([T.default], () => ({
  updateError: T.default.editSourceError,
  removeError: T.default.removeSourceError
}))(p)