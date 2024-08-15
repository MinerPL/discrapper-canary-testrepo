t.d(s, {
  Yn: function() {
return u;
  }
}), t(411104), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(283693),
  r = t(481060),
  o = t(816814),
  l = t(200483),
  c = t(981631),
  d = t(689938);

function _(e) {
  let {
onError: s,
onSuccess: t,
PasswordConfirm: r,
...l
  } = e, [_, E] = a.useState('');
  return (0, n.jsx)(r, {
...l,
handleSubmit: e => o.Z.enableMFAStart(e),
onError: e => {
  var n;
  if (('object' == typeof(n = e) && null != n && (0, i.nr)(n, 'code') && 'number' == typeof n.code ? n.code : 0) === c.evJ.MFA_INVALID_SECRET)
    t(_), l.onClose();
  else
    s(e);
},
onPasswordChange: E,
title: d.Z.Messages.TWO_FA_ENABLE,
actionText: d.Z.Messages.CONTINUE,
skipErrorMsgAbortCode: c.evJ.MFA_INVALID_SECRET
  });
}

function E(e, s) {
  return new Promise(a => {
(0, r.openModalLazy)(async () => {
  let {
    default: i
  } = await Promise.all([
    t.e('32873'),
    t.e('23746')
  ]).then(t.bind(t, 837651));
  return t => (0, n.jsx)(i, {
    ...t,
    password: e,
    emailToken: s,
    handleEnableMFASuccess: a
  });
});
  });
}

function u() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  return new Promise(s => {
(0, r.openModalLazy)(async () => {
  let {
    default: s
  } = await Promise.all([
    t.e('76540'),
    t.e('92539')
  ]).then(t.bind(t, 628908));
  return t => (0, n.jsx)(s, {
    ...t,
    isTotp: e
  });
}, {
  onCloseCallback: s,
  onCloseRequest: c.VqG
});
  });
}
async function I() {
  let e = await new Promise((e, s) => {
(0, r.openModalLazy)(async () => {
  let {
    default: a
  } = await t.e('24642').then(t.bind(t, 279837));
  return t => (0, n.jsx)(_, {
    ...t,
    onSuccess: e,
    onError: s,
    PasswordConfirm: a
  });
});
  });
  if ((0, l.j)()) {
var s;
let a = await (s = e, new Promise(e => {
  (0, r.openModalLazy)(async () => {
    let {
      default: a
    } = await t.e('94566').then(t.bind(t, 965072));
    return t => (0, n.jsx)(a, {
      ...t,
      onFormSubmit: async e => await o.Z.verifyEmailCode(e),
      onResend: async () => {
        await o.Z.resendEmailCode(s);
      },
      onSuccess: e,
      headerText: d.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP,
      confirmButtonText: d.Z.Messages.NEXT
    });
  });
}));
await E(e, null == a ? void 0 : a.token);
  } else
await E(e);
  await u();
}
s.ZP = {
  enableMFA: I
};