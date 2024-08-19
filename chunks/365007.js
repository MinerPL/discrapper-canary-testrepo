n.d(t, {
    L$: function () {
        return E;
    },
    Sr: function () {
        return f;
    },
    WQ: function () {
        return _;
    },
    cT: function () {
        return d;
    },
    d$: function () {
        return u;
    },
    hL: function () {
        return c;
    },
    us: function () {
        return l;
    }
});
var r = n(525769),
    i = n(544891),
    a = n(570140),
    s = n(573261),
    o = n(981631);
async function l() {
    return (await i.tn.post(o.ANM.WEBAUTHN_CONDITIONAL_UI_CHALLENGE)).body;
}
async function u() {
    let { challenge: e, ticket: t } = (await i.tn.post(o.ANM.WEBAUTHN_PASSWORDLESS_CHALLENGE)).body;
    return {
        challenge: e,
        ticket: t
    };
}
function c() {
    i.tn.get(o.ANM.MFA_WEBAUTHN_CREDENTIALS).then((e) => {
        a.Z.dispatch({
            type: 'MFA_WEBAUTHN_CREDENTIALS_LOADED',
            credentials: e.body
        });
    });
}
function d(e) {
    i.tn.del(o.ANM.MFA_WEBAUTHN_CREDENTIAL(e.id)).then(() => {
        a.Z.dispatch({
            type: 'AUTHENTICATOR_DELETE',
            credential: e
        });
    });
}
async function _(e, t) {
    let n = await i.tn.patch({
        url: o.ANM.MFA_WEBAUTHN_CREDENTIAL(e),
        body: { name: t }
    });
    a.Z.dispatch({
        type: 'AUTHENTICATOR_UPDATE',
        credential: n.body
    });
}
async function E() {
    let {
        body: { ticket: e, challenge: t }
    } = await i.tn.post({
        url: o.ANM.MFA_WEBAUTHN_CREDENTIALS,
        body: {}
    });
    return {
        ticket: e,
        challenge: t
    };
}
async function f(e, t, n) {
    let i = await s.Z.post({
        url: o.ANM.MFA_WEBAUTHN_CREDENTIALS,
        body: {
            name: e,
            ticket: t,
            credential: n
        },
        trackedActionData: { event: r.a.WEBAUTHN_REGISTER }
    });
    a.Z.dispatch({
        type: 'AUTHENTICATOR_CREATE',
        credential: i.body
    }),
        a.Z.dispatch({
            type: 'MFA_ENABLE_SUCCESS',
            codes: i.body.backup_codes
        });
}
