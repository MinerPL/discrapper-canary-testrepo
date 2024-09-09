t(47120);
var n,
    a = t(735250),
    i = t(470079),
    r = t(392711),
    o = t.n(r),
    l = t(481060),
    c = t(355467),
    d = t(976255),
    _ = t(600164),
    E = t(212895),
    u = t(709054),
    I = t(156729),
    T = t(244526),
    S = t(981631),
    N = t(689938),
    C = t(290893);
function m(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
class A extends (n = i.PureComponent) {
    render() {
        let { paymentSource: e, isDefault: s, isEditing: t, index: n, hideDivider: i, isForSubscription: r, locale: o, removing: c, submitting: d, onSubmit: E, onCancel: u, onDelete: S } = this.props;
        return t
            ? (0, a.jsx)(I.Z, {
                  paymentSource: e,
                  isDefault: s,
                  removing: c,
                  submitting: d,
                  locale: o,
                  isForSubscription: r,
                  onSubmit: E,
                  onCancel: u,
                  onDelete: S
              })
            : (0, a.jsxs)('div', {
                  className: C.__invalid_paymentSourceItem,
                  children: [
                      n > 0 && !i ? (0, a.jsx)(l.FormDivider, { className: C.__invalid_sourceDivider }) : null,
                      (0, a.jsxs)(_.Z, {
                          align: _.Z.Align.CENTER,
                          justify: _.Z.Justify.BETWEEN,
                          className: C.paymentSourceRow,
                          children: [
                              (0, a.jsx)(T.Z, {
                                  paymentSource: e,
                                  isDefault: s,
                                  isForSubscription: r,
                                  locale: o,
                                  showSubtext: !0,
                                  showLabels: !0,
                                  showPaymentSourceIcon: !0
                              }),
                              t
                                  ? null
                                  : (0, a.jsx)(l.Button, {
                                        color: l.Button.Colors.PRIMARY,
                                        onClick: this.handleEditClick,
                                        size: l.Button.Sizes.SMALL,
                                        children: N.Z.Messages.EDIT
                                    })
                          ]
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            m(this, 'handleEditClick', () => {
                this.props.onEditClick(this.props.paymentSource.id);
            });
    }
}
m(A, 'defaultProps', {
    isEditing: !1,
    hideDivider: !1,
    onEditClick: () => {}
});
class O extends i.PureComponent {
    renderFooter() {
        let { paymentSources: e } = this.props;
        return (0, a.jsxs)(_.Z, {
            justify: _.Z.Justify.END,
            className: C.footer,
            children: [
                0 === Object.keys(e).length
                    ? (0, a.jsxs)(_.Z.Child, {
                          children: [
                              (0, a.jsx)(l.Text, {
                                  variant: 'text-sm/normal',
                                  children: N.Z.Messages.BILLING_NO_PAYMENT_METHOD
                              }),
                              (0, a.jsx)('div', {
                                  className: C.subText,
                                  children: N.Z.Messages.BILLING_NO_PAYMENT_METHOD_DESCRIPTION
                              })
                          ]
                      })
                    : null,
                (0, a.jsx)(l.Button, {
                    onClick: this.handleAddPaymentMethod,
                    children: N.Z.Messages.BILLING_ADD_PAYMENT_METHOD
                })
            ]
        });
    }
    render() {
        let { defaultPaymentSourceId: e, paymentSources: s, locale: t, removing: n, submitting: i, premiumSubscriptionPaymentSourceId: r } = this.props,
            c = o()
                .values(s)
                .sort((s, t) => (s.id === e ? -1 : t.id === e ? 1 : u.default.compare(s.id, t.id))),
            d = this.state.editingPayment,
            E = c.findIndex((e) => e.id === d),
            I = c.map((s, o) =>
                (0, a.jsx)(
                    A,
                    {
                        locale: t,
                        paymentSource: s,
                        isDefault: e === s.id,
                        onCancel: this.handleCancel,
                        onDelete: this.handleDelete,
                        isForSubscription: s.id === r,
                        hideDivider: E === o - 1,
                        onSubmit: this.handleSubmit,
                        index: o,
                        submitting: i,
                        removing: n,
                        isEditing: d === s.id,
                        onEditClick: this.handleEditClick
                    },
                    s.id
                )
            );
        return (0, a.jsxs)('div', {
            children: [
                (0, a.jsx)(l.FormTitle, {
                    tag: 'h1',
                    children: (0, a.jsxs)(_.Z, {
                        align: _.Z.Align.CENTER,
                        children: [
                            (0, a.jsx)(l.Tooltip, {
                                position: 'left',
                                text: N.Z.Messages.BILLING_SECURE_TOOLTIP,
                                children: (e) =>
                                    (0, a.jsx)(l.LockIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: C.lockIcon,
                                        ...e
                                    })
                            }),
                            N.Z.Messages.BILLING_PAYMENT_SOURCES
                        ]
                    })
                }),
                I,
                E !== c.length - 1 ? (0, a.jsx)(l.FormDivider, { className: C.__invalid_sourceDivider }) : null,
                this.renderFooter()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'state', { editingPayment: null }),
            m(this, 'handleEditClick', async (e) => {
                try {
                    await c.lO(e), this.setState({ editingPayment: e });
                } catch (e) {}
            }),
            m(this, 'handleCancel', () => {
                this.setState({ editingPayment: null });
            }),
            m(this, 'handleDelete', async (e) => {
                try {
                    await c.xt(e), this.setState({ editingPayment: null });
                } catch (e) {}
            }),
            m(this, 'handleSubmit', async (e, s) => {
                if (null != e)
                    try {
                        await c.LI(e, s), this.setState({ editingPayment: null });
                    } catch (e) {}
            }),
            m(this, 'handlePaymentSourceAdded', async (e) => {
                await (0, E.i1)(e.id);
            }),
            m(this, 'handleAddPaymentMethod', () => {
                (0, l.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(t.bind(t, 623573));
                        return (s) =>
                            (0, a.jsx)(e, {
                                ...s,
                                onAddPaymentSource: this.handlePaymentSourceAdded
                            });
                    },
                    {
                        onCloseCallback: () => {
                            (0, d.fw)();
                        },
                        onCloseRequest: S.dG4
                    }
                );
            });
    }
}
s.Z = O;
