"use strict";
s.r(t), s("47120");
var a, n = s("735250"),
  l = s("470079"),
  i = s("392711"),
  r = s.n(i),
  o = s("481060"),
  d = s("355467"),
  u = s("976255"),
  c = s("285952"),
  S = s("242411"),
  E = s("212895"),
  T = s("709054"),
  f = s("156729"),
  m = s("244526"),
  _ = s("981631"),
  g = s("689938"),
  h = s("558667");

function I(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class N extends(a = l.PureComponent) {
  render() {
    let {
      paymentSource: e,
      isDefault: t,
      isEditing: s,
      index: a,
      hideDivider: l,
      isForSubscription: i,
      locale: r,
      removing: d,
      submitting: u,
      onSubmit: S,
      onCancel: E,
      onDelete: T
    } = this.props;
    return s ? (0, n.jsx)(f.default, {
      paymentSource: e,
      isDefault: t,
      removing: d,
      submitting: u,
      locale: r,
      isForSubscription: i,
      onSubmit: S,
      onCancel: E,
      onDelete: T
    }) : (0, n.jsxs)("div", {
      className: h.__invalid_paymentSourceItem,
      children: [a > 0 && !l ? (0, n.jsx)(o.FormDivider, {
        className: h.__invalid_sourceDivider
      }) : null, (0, n.jsxs)(c.default, {
        align: c.default.Align.CENTER,
        justify: c.default.Justify.BETWEEN,
        className: h.paymentSourceRow,
        children: [(0, n.jsx)(m.default, {
          paymentSource: e,
          isDefault: t,
          isForSubscription: i,
          locale: r,
          showSubtext: !0,
          showDefaultLabel: !0,
          showPaymentSourceIcon: !0
        }), s ? null : (0, n.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: this.handleEditClick,
          size: o.Button.Sizes.SMALL,
          children: g.default.Messages.EDIT
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), I(this, "handleEditClick", () => {
      this.props.onEditClick(this.props.paymentSource.id)
    })
  }
}
I(N, "defaultProps", {
  isEditing: !1,
  hideDivider: !1,
  onEditClick: () => {}
});
class p extends l.PureComponent {
  renderFooter() {
    let {
      paymentSources: e
    } = this.props;
    return (0, n.jsxs)(c.default, {
      justify: c.default.Justify.END,
      className: h.footer,
      children: [0 === Object.keys(e).length ? (0, n.jsxs)(c.default.Child, {
        children: [(0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: g.default.Messages.BILLING_NO_PAYMENT_METHOD
        }), (0, n.jsx)("div", {
          className: h.subText,
          children: g.default.Messages.BILLING_NO_PAYMENT_METHOD_DESCRIPTION
        })]
      }) : null, (0, n.jsx)(o.Button, {
        onClick: this.handleAddPaymentMethod,
        children: g.default.Messages.BILLING_ADD_PAYMENT_METHOD
      })]
    })
  }
  render() {
    let {
      defaultPaymentSourceId: e,
      paymentSources: t,
      locale: s,
      removing: a,
      submitting: l,
      premiumSubscriptionPaymentSourceId: i
    } = this.props, d = r().values(t).sort((t, s) => t.id === e ? -1 : s.id === e ? 1 : T.default.compare(t.id, s.id)), u = this.state.editingPayment, E = d.findIndex(e => e.id === u), f = d.map((t, r) => (0, n.jsx)(N, {
      locale: s,
      paymentSource: t,
      isDefault: e === t.id,
      onCancel: this.handleCancel,
      onDelete: this.handleDelete,
      isForSubscription: t.id === i,
      hideDivider: E === r - 1,
      onSubmit: this.handleSubmit,
      index: r,
      submitting: l,
      removing: a,
      isEditing: u === t.id,
      onEditClick: this.handleEditClick
    }, t.id));
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)(o.FormTitle, {
        tag: "h1",
        children: (0, n.jsxs)(c.default, {
          align: c.default.Align.CENTER,
          children: [(0, n.jsx)(o.Tooltip, {
            position: "left",
            text: g.default.Messages.BILLING_SECURE_TOOLTIP,
            children: e => (0, n.jsx)(S.default, {
              className: h.lockIcon,
              ...e
            })
          }), g.default.Messages.BILLING_PAYMENT_SOURCES]
        })
      }), f, E !== d.length - 1 ? (0, n.jsx)(o.FormDivider, {
        className: h.__invalid_sourceDivider
      }) : null, this.renderFooter()]
    })
  }
  constructor(...e) {
    super(...e), I(this, "state", {
      editingPayment: null
    }), I(this, "handleEditClick", e => {
      this.setState({
        editingPayment: e
      })
    }), I(this, "handleCancel", () => {
      this.setState({
        editingPayment: null
      })
    }), I(this, "handleDelete", async e => {
      try {
        await d.deletePaymentSource(e), this.setState({
          editingPayment: null
        })
      } catch (e) {}
    }), I(this, "handleSubmit", async (e, t) => {
      if (null != e) try {
        await d.updatePaymentSource(e, t), this.setState({
          editingPayment: null
        })
      } catch (e) {}
    }), I(this, "handlePaymentSourceAdded", async e => {
      await (0, E.fetchSubscriptionPlansOnNewPaymentSource)(e.id)
    }), I(this, "handleAddPaymentMethod", () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(s.bind(s, "623573"));
        return t => (0, n.jsx)(e, {
          ...t,
          onAddPaymentSource: this.handlePaymentSourceAdded
        })
      }, {
        onCloseCallback: () => {
          (0, u.clearError)()
        },
        onCloseRequest: _.NOOP
      })
    })
  }
}
t.default = p