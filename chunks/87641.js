"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("917351"),
  i = s.n(l),
  r = s("77078"),
  o = s("850068"),
  d = s("112679"),
  u = s("145131"),
  c = s("600785"),
  S = s("713518"),
  E = s("299039"),
  T = s("793133"),
  f = s("364735"),
  _ = s("49111"),
  m = s("782340"),
  g = s("140806");
class h extends n.PureComponent {
  render() {
    let {
      paymentSource: e,
      isDefault: t,
      isEditing: s,
      index: n,
      hideDivider: l,
      isForSubscription: i,
      locale: o,
      removing: d,
      submitting: c,
      onSubmit: S,
      onCancel: E,
      onDelete: _
    } = this.props;
    return s ? (0, a.jsx)(T.default, {
      paymentSource: e,
      isDefault: t,
      removing: d,
      submitting: c,
      locale: o,
      isForSubscription: i,
      onSubmit: S,
      onCancel: E,
      onDelete: _
    }) : (0, a.jsxs)("div", {
      className: g.paymentSourceItem,
      children: [n > 0 && !l ? (0, a.jsx)(r.FormDivider, {
        className: g.sourceDivider
      }) : null, (0, a.jsxs)(u.default, {
        align: u.default.Align.CENTER,
        justify: u.default.Justify.BETWEEN,
        className: g.paymentSourceRow,
        children: [(0, a.jsx)(f.default, {
          paymentSource: e,
          isDefault: t,
          isForSubscription: i,
          locale: o,
          showSubtext: !0
        }), s ? null : (0, a.jsx)(r.Button, {
          color: r.Button.Colors.PRIMARY,
          onClick: this.handleEditClick,
          size: r.Button.Sizes.SMALL,
          children: m.default.Messages.EDIT
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleEditClick = () => {
      this.props.onEditClick(this.props.paymentSource.id)
    }
  }
}
h.defaultProps = {
  isEditing: !1,
  hideDivider: !1,
  onEditClick: () => {}
};
class N extends n.PureComponent {
  renderFooter() {
    let {
      paymentSources: e
    } = this.props;
    return (0, a.jsxs)(u.default, {
      justify: u.default.Justify.END,
      className: g.footer,
      children: [0 === Object.keys(e).length ? (0, a.jsxs)(u.default.Child, {
        children: [(0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: m.default.Messages.BILLING_NO_PAYMENT_METHOD
        }), (0, a.jsx)("div", {
          className: g.subText,
          children: m.default.Messages.BILLING_NO_PAYMENT_METHOD_DESCRIPTION
        })]
      }) : null, (0, a.jsx)(r.Button, {
        onClick: this.handleAddPaymentMethod,
        children: m.default.Messages.BILLING_ADD_PAYMENT_METHOD
      })]
    })
  }
  render() {
    let {
      defaultPaymentSourceId: e,
      paymentSources: t,
      locale: s,
      removing: n,
      submitting: l,
      premiumSubscriptionPaymentSourceId: o
    } = this.props, d = i.values(t).sort((t, s) => t.id === e ? -1 : s.id === e ? 1 : E.default.compare(t.id, s.id)), S = this.state.editingPayment, T = d.findIndex(e => e.id === S), f = d.map((t, i) => (0, a.jsx)(h, {
      locale: s,
      paymentSource: t,
      isDefault: e === t.id,
      onCancel: this.handleCancel,
      onDelete: this.handleDelete,
      isForSubscription: t.id === o,
      hideDivider: T === i - 1,
      onSubmit: this.handleSubmit,
      index: i,
      submitting: l,
      removing: n,
      isEditing: S === t.id,
      onEditClick: this.handleEditClick
    }, t.id));
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(r.FormTitle, {
        tag: "h1",
        children: (0, a.jsxs)(u.default, {
          align: u.default.Align.CENTER,
          children: [(0, a.jsx)(r.Tooltip, {
            position: "left",
            text: m.default.Messages.BILLING_SECURE_TOOLTIP,
            children: e => (0, a.jsx)(c.default, {
              className: g.lockIcon,
              ...e
            })
          }), m.default.Messages.BILLING_PAYMENT_SOURCES]
        })
      }), f, T !== d.length - 1 ? (0, a.jsx)(r.FormDivider, {
        className: g.sourceDivider
      }) : null, this.renderFooter()]
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      editingPayment: null
    }, this.handleEditClick = e => {
      this.setState({
        editingPayment: e
      })
    }, this.handleCancel = () => {
      this.setState({
        editingPayment: null
      })
    }, this.handleDelete = async e => {
      try {
        await o.deletePaymentSource(e), this.setState({
          editingPayment: null
        })
      } catch (e) {}
    }, this.handleSubmit = async (e, t) => {
      if (null != e) try {
        await o.updatePaymentSource(e, t), this.setState({
          editingPayment: null
        })
      } catch (e) {}
    }, this.handlePaymentSourceAdded = async e => {
      await (0, S.fetchSubscriptionPlansOnNewPaymentSource)(e.id)
    }, this.handleAddPaymentMethod = () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("960391").then(s.bind(s, "960391"));
        return t => (0, a.jsx)(e, {
          ...t,
          onAddPaymentSource: this.handlePaymentSourceAdded
        })
      }, {
        onCloseCallback: () => {
          (0, d.clearError)()
        },
        onCloseRequest: _.NOOP
      })
    }
  }
}
var I = N