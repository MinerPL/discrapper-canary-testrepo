t.d(s, {
    P: function () {
        return l;
    }
});
var n = t(689938);
let l = {
    get webauthn() {
        return n.Z.Messages.MFA_V2_WEBAUTHN_NAME;
    },
    get totp() {
        return n.Z.Messages.MFA_V2_TOTP_NAME;
    },
    get sms() {
        return n.Z.Messages.MFA_V2_SMS_NAME;
    },
    get password() {
        return n.Z.Messages.MFA_V2_PASSWORD_NAME;
    },
    get backup() {
        return n.Z.Messages.MFA_V2_BACKUP_NAME;
    }
};
