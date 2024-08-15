n.d(t, {
  Z: function() {
return N;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(512722),
  r = n.n(s),
  l = n(481060),
  o = n(976255),
  c = n(230711),
  u = n(409813),
  d = n(594174),
  _ = n(74538),
  E = n(212895),
  I = n(559725),
  m = n(439041),
  T = n(981631),
  h = n(689938);

function N(e) {
  let {
onClose: t
  } = e, s = d.default.getCurrentUser();
  r()(void 0 !== s, 'User must not be null');
  let N = (0, _.I5)(s),
f = N ? T.oAB.SUBSCRIPTIONS : T.oAB.BILLING;
  return a.useEffect(() => {
null == m.Z.cashAppPayComponent && (0, I.eI)();
  }, []), (0, i.jsxs)(l.Notice, {
color: l.NoticeColors.DEFAULT,
children: [
  (0, i.jsx)(l.NoticeCloseButton, {
    onClick: t,
    noticeType: T.kVF.CASH_APP_PAY_AWARENESS_NAGBAR
  }),
  N ? h.Z.Messages.CASH_APP_PAY_AWARENESS_SUBSCRIBER_CONTENT : h.Z.Messages.CASH_APP_PAY_AWARENESS_NON_SUBSCRIBER_CONTENT,
  (0, i.jsx)(l.PrimaryCTANoticeButton, {
    onClick: () => {
      c.Z.open(f), setTimeout(() => {
        (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([
            n.e('96427'),
            n.e('54803'),
            n.e('52619'),
            n.e('79336')
          ]).then(n.bind(n, 623573));
          return t => (0, i.jsx)(e, {
            ...t,
            initialStep: u.h8.CASH_APP_INFORMATION,
            onAddPaymentSource: e => (0, E.i1)(e.id)
          });
        }, {
          onCloseCallback: () => (0, o.fw)(),
          onCloseRequest: T.dG4
        });
      }, 1000), t();
    },
    noticeType: T.kVF.CASH_APP_PAY_AWARENESS_NAGBAR,
    children: N ? h.Z.Messages.CASH_APP_PAY_AWARENESS_SUBSCRIBER_CTA : h.Z.Messages.CASH_APP_PAY_AWARENESS_NON_SUBSCRIBER_CTA
  })
]
  });
}