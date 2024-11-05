var i = n(200651);
n(192379);
var r = n(481060),
    a = n(570140),
    l = n(813615),
    s = n(812206),
    o = n(69580),
    c = n(568963),
    d = n(808506),
    u = n(358085),
    h = n(998502),
    m = n(996106),
    p = n(703912),
    g = n(852926),
    f = n(981631);
t.Z = (0, p.Z)(
    (e) => {
        var t;
        let { clientId: n, authorizations: d, scopes: u, parsedPermissions: h, responseType: p, redirectUri: _, codeChallenge: E, codeChallengeMethod: I, state: C, guildId: v, channelId: S, prompt: N, disableGuildSelect: T, disclosures: x, integrationType: b, pid: A } = e,
            Z = 'OAuth2Authorize_'.concat(n, '_').concat(v, '_').concat(S),
            y = null != b ? (null == d ? void 0 : d.get(b)) : void 0,
            L = null !== (t = null == y ? void 0 : y.application) && void 0 !== t ? t : s.Z.getApplication(n);
        return new Promise((e, t) => {
            let s = (0, g.jU)(A),
                y = (i) => {
                    let { clientId: r, location: l } = i;
                    if (null == r || r === n) s.lock(), a.Z.unsubscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', y), null != location ? e(l) : t(new m.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                },
                R = (0, c.R)();
            if (s.context === f.IlC.OVERLAY && !R) {
                a.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', y),
                    a.Z.dispatch({
                        type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN',
                        clientId: n,
                        authorizeProps: {
                            authorizations: d,
                            clientId: n,
                            scopes: null != u ? u : [],
                            disclosures: null != x ? x : [],
                            responseType: p,
                            redirectUri: _,
                            codeChallenge: E,
                            codeChallengeMethod: I,
                            state: C,
                            permissions: h.toString(),
                            guildId: v,
                            channelId: S,
                            prompt: N,
                            disableGuildSelect: 'boolean' == typeof T ? T : 'true' === T,
                            integrationType: b
                        }
                    });
                return;
            }
            (0, r.openModal)(
                (e) =>
                    (0, i.jsx)(o.OAuth2AuthorizeModal, {
                        ...e,
                        authorizations: d,
                        clientId: n,
                        scopes: null != u ? u : [],
                        disclosures: null != x ? x : [],
                        callback: y,
                        responseType: p,
                        redirectUri: _,
                        codeChallenge: E,
                        codeChallengeMethod: I,
                        state: C,
                        permissions: h,
                        guildId: v,
                        channelId: S,
                        prompt: N,
                        disableGuildSelect: 'boolean' == typeof T ? T : 'true' === T,
                        integrationType: b
                    }),
                {
                    modalKey: Z,
                    onCloseRequest: () => {
                        (0, r.closeModal)(Z), t(new m.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                    }
                },
                (null != L && (0, l.Z)(L, S)) || R ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
            );
        });
    },
    function (e, t, n) {
        if (d.Z.isReady(null != n ? n : 0) || !u.isPlatformEmbedded) return;
        let i = (0, l.Z)(e, t) ? f.KJ3.CHANNEL_CALL_POPOUT : null;
        (0, u.isWindows)() ? h.ZP.minimize(i) : h.ZP.restore(i), h.ZP.focus(i);
    }
);
