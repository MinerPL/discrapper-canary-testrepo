s.d(n, {
  Z: function() {
return P;
  }
}), s(411104), s(47120);
var t = s(735250),
  r = s(470079),
  l = s(120356),
  a = s.n(l),
  i = s(692547),
  c = s(481060),
  o = s(987032),
  u = s(219929),
  I = s(46141),
  _ = s(63063),
  E = s(981631),
  T = s(231338),
  d = s(689938),
  N = s(866917);
let M = '***@***.***',
  A = new I.dm({
id: 'new_payment_source_id',
brand: u.ZP.Types.UNKNOWN,
type: E.HeQ.CARD
  });

function P(e) {
  var n, s;
  let l, {
  selectedPaymentSourceId: P,
  paymentSources: L,
  prependOption: R,
  hidePersonalInformation: S,
  onChange: m,
  onPaymentSourceAdd: U,
  isTrial: p = !1,
  disabled: O = !1,
  className: C,
  optionClassName: v,
  dropdownLoading: h
} = e,
f = 0 === L.length,
g = [
  ...null != R ? [R] : [],
  ...L,
  A
].map((e, n) => {
  if (e instanceof I.ZP) {
    let {
      brand: n,
      label: s
    } = function(e, n) {
      if (e instanceof I.dm)
        return e.id === A.id ? {
          brand: null,
          label: d.Z.Messages.PAYMENT_SOURCES_ADD
        } : {
          brand: n ? u.ZP.Types.UNKNOWN : e.brand,
          label: d.Z.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format({
            last4: n ? '****' : e.last4
          })
        };
      if (e instanceof I.qo)
        return {
          brand: u.ZP.Types.PAYPAL,
          label: n ? M : e.email
        };
      if (e instanceof I.Sf)
        return {
          brand: u.ZP.Types.SOFORT,
          label: n ? M : e.email
        };
      else if (e instanceof I.fv)
        return {
          brand: u.ZP.Types.GIROPAY,
          label: d.Z.Messages.PAYMENT_SOURCE_GIROPAY
        };
      else if (e instanceof I.Vg)
        return {
          brand: u.ZP.Types.PRZELEWY24,
          label: n ? M : e.email
        };
      else if (e instanceof I.sn)
        return {
          brand: u.ZP.Types.PAYSAFECARD,
          label: d.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT
        };
      else if (e instanceof I.o_)
        return {
          brand: u.ZP.Types.GCASH,
          label: d.Z.Messages.PAYMENT_SOURCE_GCASH
        };
      else if (e instanceof I.kX)
        return {
          brand: u.ZP.Types.GRABPAY,
          label: d.Z.Messages.PAYMENT_SOURCE_GRABPAY
        };
      else if (e instanceof I.z)
        return {
          brand: u.ZP.Types.MOMO_WALLET,
          label: d.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET
        };
      else if (e instanceof I.Xc)
        return {
          brand: u.ZP.Types.VENMO,
          label: n ? '***' : '@' + e.username
        };
      else if (e instanceof I.Om)
        return {
          brand: u.ZP.Types.KAKAOPAY,
          label: d.Z.Messages.PAYMENT_SOURCE_KAKAOPAY
        };
      else if (e instanceof I.JC)
        return {
          brand: u.ZP.Types.GOPAY_WALLET,
          label: d.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET
        };
      else if (e instanceof I.U4)
        return {
          brand: u.ZP.Types.BANCONTACT,
          label: d.Z.Messages.PAYMENT_SOURCE_BANCONTACT
        };
      else if (e instanceof I.D0)
        return {
          brand: u.ZP.Types.EPS,
          label: d.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
            bank: (0, o.Ul)(e.bank)
          })
        };
      else if (e instanceof I.jc)
        return {
          brand: u.ZP.Types.IDEAL,
          label: d.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
            bank: (0, o.YE)(e.bank)
          })
        };
      else if (e instanceof I.u_)
        return {
          brand: u.ZP.Types.CASH_APP,
          label: n ? '***' : e.username
        };
      throw Error('Invalid Payment Source');
    }(e, S);
    return {
      value: e.id,
      label: (0, t.jsxs)('div', {
        className: N.paymentSourceSelectedOption,
        children: [
          null != n ? (0, t.jsx)(u.ZP, {
            type: u.ZP.getType(n)
          }) : null,
          (0, t.jsx)('div', {
            className: a()(N.paymentSourceLabel, {
              [N.error]: e.invalid
            }),
            children: s
          })
        ]
      })
    };
  }
  return {
    key: n,
    value: e.value,
    label: (0, t.jsx)('div', {
      className: N.paymentSourceLabel,
      children: e.label
    })
  };
}),
x = r.useMemo(() => L.find(e => e.id === P), [
  L,
  P
]);
  let Z = (n = p, s = x, l = null, n && null != s && !s.canRedeemTrial() ? l = d.Z.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID : n && null != s && s.hasFlag(T.Cw.NEW) && (l = d.Z.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
helpDeskArticle: _.Z.getArticleURL(E.BhN.PAYMENT_AUTHORIZATION_CHARGE)
  })), l);
  return (0, t.jsxs)(t.Fragment, {
children: [
  f ? (0, t.jsx)(c.Button, {
    color: c.ButtonColors.BRAND,
    fullWidth: !0,
    onClick: U,
    children: d.Z.Messages.PAYMENT_SOURCES_ADD
  }) : (0, t.jsx)(c.SingleSelect, {
    options: g,
    value: P,
    onChange: e => {
      if (e === A.id)
        null != U && U();
      else {
        let n = L.find(n => n.id === e);
        null != m && m(n);
      }
    },
    isDisabled: O,
    className: a()({
      [N.paymentSourceHasWarning]: null != Z
    }, C),
    optionClassName: v,
    placeholder: d.Z.Messages.PAYMENT_SOURCE_TYPE_SELECT,
    renderOptionValue: e => {
      let [n] = e;
      return h ? (0, t.jsx)(c.Spinner, {
        type: c.SpinnerTypes.SPINNING_CIRCLE
      }) : n.label;
    }
  }),
  null != Z ? (0, t.jsxs)('div', {
    className: N.paymentSourceWarning,
    children: [
      (0, t.jsx)(c.CircleWarningIcon, {
        size: 'custom',
        width: 20,
        height: 20,
        className: N.paymentSourceWarningIcon,
        color: i.Z.unsafe_rawColors.YELLOW_300.css
      }),
      (0, t.jsx)(c.Text, {
        variant: 'text-xs/normal',
        children: Z
      })
    ]
  }) : null
]
  });
}