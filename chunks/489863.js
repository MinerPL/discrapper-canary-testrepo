n.d(t, {
    Iq: function () {
        return l;
    },
    UR: function () {
        return c;
    },
    Ww: function () {
        return u;
    },
    c$: function () {
        return d;
    },
    g: function () {
        return s;
    },
    i2: function () {
        return f;
    },
    tR: function () {
        return E;
    },
    tV: function () {
        return _;
    }
});
var r = n(860911), i = n(544891), a = n(893776), o = n(981631);
function s(e) {
    return i.tn.post({
        url: o.ANM.OAUTH2_WHITELIST_ACCEPT,
        query: { token: e },
        oldFormErrors: !0
    });
}
async function l(e) {
    let {
        authorize: t,
        clientId: n,
        scopes: r,
        responseType: a,
        redirectUri: s,
        codeChallenge: l,
        codeChallengeMethod: u,
        state: c,
        permissions: d,
        guildId: _,
        channelId: E,
        integrationType: f,
        nonce: h
    } = e;
    return (await i.tn.post({
        url: o.ANM.OAUTH2_AUTHORIZE,
        query: {
            client_id: n,
            response_type: a,
            redirect_uri: s,
            code_challenge: l,
            code_challenge_method: u,
            scope: r.join(' '),
            state: c,
            nonce: h
        },
        body: {
            guild_id: _,
            webhook_channel_id: null != _ && null != E ? E : void 0,
            channel_id: null == _ && null != E ? E : void 0,
            permissions: d,
            authorize: t,
            integration_type: f
        },
        oldFormErrors: !0
    })).body;
}
async function u(e) {
    let {
        clientId: t,
        scopes: n,
        responseType: r,
        redirectUri: a,
        codeChallenge: s,
        codeChallengeMethod: l,
        state: u,
        integrationType: c,
        nonce: d
    } = e;
    return (await i.tn.get({
        url: o.ANM.OAUTH2_AUTHORIZE,
        query: {
            client_id: t,
            response_type: r,
            redirect_uri: a,
            code_challenge: s,
            code_challenge_method: l,
            scope: n.join(' '),
            state: u,
            integration_type: c,
            nonce: d
        },
        retries: 3,
        oldFormErrors: !0
    })).body;
}
async function c(e) {
    let {body: t} = await i.tn.get({
        url: o.ANM.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
        query: { guild_id: e },
        oldFormErrors: !0
    });
    return t;
}
function d(e) {
    a.Z.logout((0, r.U)(e.pathname + e.search, !1));
}
async function _(e) {
    return await i.tn.post({
        url: o.ANM.OAUTH2_DEVICE_VERIFY,
        body: { user_code: e }
    });
}
async function E(e, t) {
    return await i.tn.post({
        url: o.ANM.OAUTH2_DEVICE_FINISH,
        body: {
            user_code: e,
            result: t
        }
    });
}
async function f(e, t, n) {
    return await i.tn.post({
        url: o.ANM.OAUTH2_DEVICE_FINISH,
        body: {
            user_code: e,
            result: 'two_way_link_error',
            error_code: t,
            error_source: n
        }
    });
}
