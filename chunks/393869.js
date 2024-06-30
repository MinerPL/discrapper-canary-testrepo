t.d(s, {
    i: function () {
        return l;
    },
    w: function () {
        return r;
    }
});
var n = t(990547), a = t(573261), o = t(981631);
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return a.Z.put({
        url: o.ANM.USER_EMAIL,
        trackedActionData: {
            event: n.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: e }
        }
    });
}
async function r(e) {
    return (await a.Z.post({
        url: o.ANM.USER_EMAIL_VERIFY_CODE,
        body: { code: e },
        trackedActionData: { event: n.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE }
    })).body;
}
