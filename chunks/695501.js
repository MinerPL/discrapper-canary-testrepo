"use strict";
n.r(t), n.d(t, {
  SELECT_NAMES: function() {
    return s
  }
});
var i = n("782340");
let s = {
  get webauthn() {
    return i.default.Messages.MFA_V2_WEBAUTHN_NAME
  },
  get totp() {
    return i.default.Messages.MFA_V2_TOTP_NAME
  },
  get sms() {
    return i.default.Messages.MFA_V2_SMS_NAME
  },
  get password() {
    return i.default.Messages.MFA_V2_PASSWORD_NAME
  },
  get backup() {
    return i.default.Messages.MFA_V2_BACKUP_NAME
  }
}