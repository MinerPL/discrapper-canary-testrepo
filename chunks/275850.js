a.d(n, {
  Z: function() {
return M;
  }
}), a(411104), a(47120);
var t = a(735250),
  s = a(470079),
  r = a(120356),
  l = a.n(r),
  i = a(692547),
  o = a(481060),
  c = a(987032),
  u = a(46141),
  d = a(912454),
  _ = a(63063),
  I = a(981631),
  E = a(231338),
  T = a(689938),
  A = a(866917);
let N = '***@***.***',
  P = new u.dm({
id: 'new_payment_source_id',
brand: d.ZP.Types.UNKNOWN,
type: I.HeQ.CARD
  });

function M(e) {
  var n, a;
  let r, {
  selectedPaymentSourceId: M,
  paymentSources: p,
  prependOption: R,
  hidePersonalInformation: L,
  onChange: f,
  onPaymentSourceAdd: C,
  isTrial: m = !1,
  disabled: S = !1,
  className: b,
  optionClassName: v,
  dropdownLoading: g
} = e,
O = 0 === p.length,
h = [
  ...null != R ? [R] : [],
  ...p,
  P
].map((e, n) => {
  if (e instanceof u.ZP) {
    let {
      brand: n,
      label: a
    } = function(e, n) {
      if (e instanceof u.dm)
        return e.id === P.id ? {
          brand: null,
          label: T.Z.Messages.PAYMENT_SOURCES_ADD
        } : {
          brand: n ? d.ZP.Types.UNKNOWN : e.brand,
          label: T.Z.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format({
            last4: n ? '****' : e.last4
          })
        };
      if (e instanceof u.qo)
        return {
          brand: d.ZP.Types.PAYPAL,
          label: n ? N : e.email
        };
      if (e instanceof u.Sf)
        return {
          brand: d.ZP.Types.SOFORT,
          label: n ? N : e.email
        };
      else if (e instanceof u.fv)
        return {
          brand: d.ZP.Types.GIROPAY,
          label: T.Z.Messages.PAYMENT_SOURCE_GIROPAY
        };
      else if (e instanceof u.Vg)
        return {
          brand: d.ZP.Types.PRZELEWY24,
          label: n ? N : e.email
        };
      else if (e instanceof u.sn)
        return {
          brand: d.ZP.Types.PAYSAFECARD,
          label: T.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT
        };
      else if (e instanceof u.o_)
        return {
          brand: d.ZP.Types.GCASH,
          label: T.Z.Messages.PAYMENT_SOURCE_GCASH
        };
      else if (e instanceof u.kX)
        return {
          brand: d.ZP.Types.GRABPAY,
          label: T.Z.Messages.PAYMENT_SOURCE_GRABPAY
        };
      else if (e instanceof u.z)
        return {
          brand: d.ZP.Types.MOMO_WALLET,
          label: T.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET
        };
      else if (e instanceof u.Xc)
        return {
          brand: d.ZP.Types.VENMO,
          label: n ? '***' : '@' + e.username
        };
      else if (e instanceof u.Om)
        return {
          brand: d.ZP.Types.KAKAOPAY,
          label: T.Z.Messages.PAYMENT_SOURCE_KAKAOPAY
        };
      else if (e instanceof u.JC)
        return {
          brand: d.ZP.Types.GOPAY_WALLET,
          label: T.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET
        };
      else if (e instanceof u.U4)
        return {
          brand: d.ZP.Types.BANCONTACT,
          label: T.Z.Messages.PAYMENT_SOURCE_BANCONTACT
        };
      else if (e instanceof u.D0)
        return {
          brand: d.ZP.Types.EPS,
          label: T.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
            bank: (0, c.Ul)(e.bank)
          })
        };
      else if (e instanceof u.jc)
        return {
          brand: d.ZP.Types.IDEAL,
          label: T.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
            bank: (0, c.YE)(e.bank)
          })
        };
      else if (e instanceof u.u_)
        return {
          brand: d.ZP.Types.CASH_APP,
          label: n ? '***' : e.username
        };
      throw Error('Invalid Payment Source');
    }(e, L);
    return {
      value: e.id,
      label: (0, t.jsxs)('div', {
        className: A.paymentSourceSelectedOption,
        children: [
          null != n ? (0, t.jsx)(d.ZP, {
            type: d.ZP.getType(n)
          }) : null,
          (0, t.jsx)('div', {
            className: l()(A.paymentSourceLabel, {
              [A.error]: e.invalid
            }),
            children: a
          })
        ]
      })
    };
  }
  return {
    key: n,
    value: e.value,
    label: (0, t.jsx)('div', {
      className: A.paymentSourceLabel,
      children: e.label
    })
  };
}),
U = s.useMemo(() => p.find(e => e.id === M), [
  p,
  M
]);
  let y = (n = m, a = U, r = null, n && null != a && !a.canRedeemTrial() ? r = T.Z.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID : n && null != a && a.hasFlag(E.Cw.NEW) && (r = T.Z.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
helpDeskArticle: _.Z.getArticleURL(I.BhN.PAYMENT_AUTHORIZATION_CHARGE)
  })), r);
  return (0, t.jsxs)(t.Fragment, {
children: [
  O ? (0, t.jsx)(o.Button, {
    color: o.ButtonColors.BRAND,
    fullWidth: !0,
    onClick: C,
    children: T.Z.Messages.PAYMENT_SOURCES_ADD
  }) : (0, t.jsx)(o.SingleSelect, {
    options: h,
    value: M,
    onChange: e => {
      if (e === P.id)
        null != C && C();
      else {
        let n = p.find(n => n.id === e);
        null != f && f(n);
      }
    },
    isDisabled: S,
    className: l()({
      [A.paymentSourceHasWarning]: null != y
    }, b),
    optionClassName: v,
    placeholder: T.Z.Messages.PAYMENT_SOURCE_TYPE_SELECT,
    renderOptionValue: e => {
      let [n] = e;
      return g ? (0, t.jsx)(o.Spinner, {
        type: o.SpinnerTypes.SPINNING_CIRCLE
      }) : n.label;
    }
  }),
  null != y ? (0, t.jsxs)('div', {
    className: A.paymentSourceWarning,
    children: [
      (0, t.jsx)(o.CircleExclamationPointIcon, {
        size: 'custom',
        width: 20,
        height: 20,
        className: A.paymentSourceWarningIcon,
        color: i.Z.unsafe_rawColors.YELLOW_300.css
      }),
      (0, t.jsx)(o.Text, {
        variant: 'text-xs/normal',
        children: y
      })
    ]
  }) : null
]
  });
}