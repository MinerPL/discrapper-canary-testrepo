"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("872717"),
  a = n("913144"),
  o = n("650893"),
  l = n("49111");

function r(e, t) {
  return a.default.dispatch({
    type: "MFA_SMS_TOGGLE"
  }), i.HTTP.post({
    url: e,
    body: {
      password: t
    },
    oldFormErrors: !0
  }).then(e => (a.default.dispatch({
    type: "MFA_SMS_TOGGLE_COMPLETE"
  }), e), e => {
    throw a.default.dispatch({
      type: "MFA_SMS_TOGGLE_COMPLETE"
    }), e
  })
}
var s = {
  async enableMFAStart(e) {
    let t = await i.HTTP.post({
      url: l.Endpoints.MFA_TOTP_ENABLE,
      body: {
        password: e
      },
      oldFormErrors: !0
    });
    return t.body
  },
  async verifyEmailCode(e) {
    let t = await i.HTTP.post({
      url: l.Endpoints.MFA_TOTP_ENABLE_VERIFY,
      body: {
        code: e
      }
    });
    return t.body
  },
  resendEmailCode: e => i.HTTP.post({
    url: l.Endpoints.MFA_TOTP_ENABLE_RESEND,
    body: {
      password: e
    }
  }),
  setEmailToken(e) {
    a.default.dispatch({
      type: "MFA_ENABLE_EMAIL_TOKEN",
      token: e
    })
  },
  enable(e) {
    let {
      password: t,
      code: n,
      secret: o,
      emailToken: r
    } = e;
    return i.HTTP.post({
      url: l.Endpoints.MFA_TOTP_ENABLE,
      body: {
        code: n,
        secret: o,
        password: t,
        email_token: r
      },
      oldFormErrors: !0
    }).then(e => a.default.dispatch({
      type: "MFA_ENABLE_SUCCESS",
      token: e.body.token,
      codes: e.body.backup_codes
    }))
  },
  disable() {
    i.HTTP.post({
      url: l.Endpoints.MFA_TOTP_DISABLE,
      oldFormErrors: !0
    }).then(e => {
      let {
        body: {
          token: t
        }
      } = e;
      return a.default.dispatch({
        type: "MFA_DISABLE_SUCCESS",
        token: t
      })
    })
  },
  enableSMS: e => r(l.Endpoints.MFA_SMS_ENABLE, e),
  disableSMS: e => r(l.Endpoints.MFA_SMS_DISABLE, e),
  sendMFABackupCodesVerificationKeyEmail: e => i.HTTP.post({
    url: l.Endpoints.MFA_SEND_VERIFICATION_KEY,
    body: {
      password: e
    },
    oldFormErrors: !0
  }).then(e => a.default.dispatch({
    type: "MFA_SEND_VERIFICATION_KEY",
    nonces: {
      viewNonce: e.body.nonce,
      regenerateNonce: e.body.regenerate_nonce
    }
  }), e => {
    throw e
  }),
  confirmViewBackupCodes(e, t) {
    let {
      viewNonce: n,
      regenerateNonce: r
    } = o.default.getNonces();
    return i.HTTP.post({
      url: l.Endpoints.MFA_CODES_VERIFICATION,
      body: {
        key: e,
        nonce: t ? r : n,
        regenerate: t
      },
      oldFormErrors: !0
    }).then(t => a.default.dispatch({
      type: "MFA_VIEW_BACKUP_CODES",
      codes: t.body.backup_codes,
      key: e
    }), e => {
      throw e
    })
  },
  clearBackupCodes() {
    a.default.dispatch({
      type: "MFA_CLEAR_BACKUP_CODES"
    })
  }
}