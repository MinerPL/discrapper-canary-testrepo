n.d(t, {
    L$: function () {
        return d;
    },
    Sr: function () {
        return _;
    },
    WQ: function () {
        return c;
    },
    cT: function () {
        return u;
    },
    d$: function () {
        return o;
    },
    hL: function () {
        return l;
    },
    us: function () {
        return s;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(981631);
async function s() {
    return (await r.tn.post(a.ANM.WEBAUTHN_CONDITIONAL_UI_CHALLENGE)).body;
}
async function o() {
    let { challenge: e, ticket: t } = (await r.tn.post(a.ANM.WEBAUTHN_PASSWORDLESS_CHALLENGE)).body;
    return {
        challenge: e,
        ticket: t
    };
}
function l() {
    r.tn.get(a.ANM.MFA_WEBAUTHN_CREDENTIALS).then((e) => {
        i.Z.dispatch({
            type: 'MFA_WEBAUTHN_CREDENTIALS_LOADED',
            credentials: e.body
        });
    });
}
function u(e) {
    r.tn.del(a.ANM.MFA_WEBAUTHN_CREDENTIAL(e.id)).then(() => {
        i.Z.dispatch({
            type: 'AUTHENTICATOR_DELETE',
            credential: e
        });
    });
}
async function c(e, t) {
    let n = await r.tn.patch({
        url: a.ANM.MFA_WEBAUTHN_CREDENTIAL(e),
        body: { name: t }
    });
    i.Z.dispatch({
        type: 'AUTHENTICATOR_UPDATE',
        credential: n.body
    });
}
async function d() {
    let {
        body: { ticket: e, challenge: t }
    } = await r.tn.post({
        url: a.ANM.MFA_WEBAUTHN_CREDENTIALS,
        body: {}
    });
    return {
        ticket: e,
        challenge: t
    };
}
async function _(e, t, n) {
    let s = await r.tn.post({
        url: a.ANM.MFA_WEBAUTHN_CREDENTIALS,
        body: {
            name: e,
            ticket: t,
            credential: n
        }
    });
    i.Z.dispatch({
        type: 'AUTHENTICATOR_CREATE',
        credential: s.body
    }),
        i.Z.dispatch({
            type: 'MFA_ENABLE_SUCCESS',
            codes: s.body.backup_codes
        });
}
