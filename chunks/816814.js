var n = s(544891),
  a = s(570140),
  i = s(325067),
  r = s(981631);

function o(e, t) {
  return a.Z.dispatch({
type: 'MFA_SMS_TOGGLE'
  }), n.tn.post({
url: e,
body: {
  password: t
},
oldFormErrors: !0
  }).then(e => (a.Z.dispatch({
type: 'MFA_SMS_TOGGLE_COMPLETE'
  }), e), e => {
throw a.Z.dispatch({
  type: 'MFA_SMS_TOGGLE_COMPLETE'
}), e;
  });
}
t.Z = {
  enableMFAStart: async e => (await n.tn.post({
url: r.ANM.MFA_TOTP_ENABLE,
body: {
  password: e
},
oldFormErrors: !0
  })).body,
  verifyEmailCode: async e => (await n.tn.post({
url: r.ANM.MFA_TOTP_ENABLE_VERIFY,
body: {
  code: e
}
  })).body,
  resendEmailCode: e => n.tn.post({
url: r.ANM.MFA_TOTP_ENABLE_RESEND,
body: {
  password: e
}
  }),
  setEmailToken(e) {
a.Z.dispatch({
  type: 'MFA_ENABLE_EMAIL_TOKEN',
  token: e
});
  },
  enable(e) {
let {
  password: t,
  code: s,
  secret: i,
  emailToken: o
} = e;
return n.tn.post({
  url: r.ANM.MFA_TOTP_ENABLE,
  body: {
    code: s,
    secret: i,
    password: t,
    email_token: o
  },
  oldFormErrors: !0
}).then(e => a.Z.dispatch({
  type: 'MFA_ENABLE_SUCCESS',
  token: e.body.token,
  codes: e.body.backup_codes
}));
  },
  disable() {
n.tn.post({
  url: r.ANM.MFA_TOTP_DISABLE,
  oldFormErrors: !0
}).then(e => {
  let {
    body: {
      token: t
    }
  } = e;
  return a.Z.dispatch({
    type: 'MFA_DISABLE_SUCCESS',
    token: t
  });
});
  },
  enableSMS: e => o(r.ANM.MFA_SMS_ENABLE, e),
  disableSMS: e => o(r.ANM.MFA_SMS_DISABLE, e),
  sendMFABackupCodesVerificationKeyEmail: e => n.tn.post({
url: r.ANM.MFA_SEND_VERIFICATION_KEY,
body: {
  password: e
},
oldFormErrors: !0
  }).then(e => a.Z.dispatch({
type: 'MFA_SEND_VERIFICATION_KEY',
nonces: {
  viewNonce: e.body.nonce,
  regenerateNonce: e.body.regenerate_nonce
}
  }), e => {
throw e;
  }),
  confirmViewBackupCodes(e, t) {
let {
  viewNonce: s,
  regenerateNonce: o
} = i.Z.getNonces();
return n.tn.post({
  url: r.ANM.MFA_CODES_VERIFICATION,
  body: {
    key: e,
    nonce: t ? o : s,
    regenerate: t
  },
  oldFormErrors: !0
}).then(t => a.Z.dispatch({
  type: 'MFA_VIEW_BACKUP_CODES',
  codes: t.body.backup_codes,
  key: e
}), e => {
  throw e;
});
  },
  clearBackupCodes() {
a.Z.dispatch({
  type: 'MFA_CLEAR_BACKUP_CODES'
});
  }
};