n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: function () {
            return en;
        },
        OAuth2AuthorizePage: function () {
            return et;
        },
        getOAuth2AuthorizeProps: function () {
            return eo;
        },
        openOAuth2Modal: function () {
            return es;
        },
        openOAuth2ModalWithCreateGuildModal: function () {
            return ea;
        },
        useOAuth2AuthorizeForm: function () {
            return er;
        }
    }),
    n(47120),
    n(411104);
var r,
    i,
    a = n(735250),
    s = n(470079),
    o = n(120356),
    l = n.n(o),
    u = n(266067),
    c = n(729594),
    d = n(373793),
    _ = n(243814),
    E = n(149765),
    f = n(442837),
    h = n(693789),
    p = n(952265),
    I = n(21340),
    m = n(922770),
    T = n(481060),
    S = n(893776),
    g = n(434650),
    A = n(367907),
    N = n(702493),
    O = n(728345),
    R = n(979200),
    v = n(560067),
    C = n(353926),
    y = n(341298),
    L = n(703656),
    D = n(973616),
    b = n(598077),
    M = n(314897),
    P = n(700785),
    U = n(591759),
    w = n(807675),
    x = n(489863),
    G = n(228763),
    k = n(422559),
    B = n(713938),
    F = n(166148),
    V = n(807989),
    H = n(627799),
    Z = n(260430),
    Y = n(668185),
    j = n(407546),
    W = n(41259),
    K = n(28752),
    z = n(787025),
    q = n(397394),
    Q = n(574384),
    X = n(981631),
    $ = n(689938),
    J = n(828947);
let ee = 'oauth2-authorize-header-id';
function et() {
    let e = (0, u.TH)(),
        t = s.useMemo(() => (0, w.y)(e.search), [e.search]);
    return (
        (0, N.Z)(),
        (0, a.jsx)(z.G, {
            removeChildWrapper: !0,
            children: (0, a.jsx)(en, {
                transitionState: T.ModalTransitionState.ENTERED,
                ...t,
                showLogout: !0
            })
        })
    );
}
function en(e) {
    let { transitionState: t, ...n } = e,
        { header: r, body: i, footer: s, nextStep: o, appDetails: u, hasContentBackground: c } = er({ ...n }),
        d = (0, a.jsxs)(a.Fragment, {
            children: [
                r,
                (0, a.jsxs)('div', {
                    className: l()(J.content, c ? J.contentBackground : null),
                    children: [i, null == o ? u : null]
                })
            ]
        });
    return (0, a.jsx)(z.j, {
        transitionState: t,
        'aria-labelledby': ee,
        footer: s,
        children: (0, a.jsx)('div', {
            className: l()(J.authorize),
            children: (0, a.jsx)(I.zJ, {
                orientation: 'auto',
                children: d
            })
        })
    });
}
function er(e) {
    var t, n, r, i, o;
    let p,
        I,
        N,
        v,
        y,
        z,
        { clientId: et, responseType: en, redirectUri: er, codeChallenge: ei, codeChallengeMethod: ea, state: es, nonce: eo, prompt: el, authorizations: eu, scopes: ec, permissions: ed, guildId: e_, channelId: eE, integrationType: ef, disableGuildSelect: eh = !1, showLogout: ep = !1, cancelCompletesFlow: eI = !0, isTrustedName: em = !1, isEmbeddedFlow: eT = !1, callback: eS, callbackWithoutPost: eg, onClose: eA, disclosures: eN } = e,
        eO = null != ef ? (null == eu ? void 0 : eu.get(ef)) : void 0,
        eR = (0, u.TH)(),
        ev = (0, f.e7)([C.Z], () => C.Z.hasLoadedExperiments);
    s.useEffect(() => {
        M.default.isAuthenticated() && !ev && S.Z.getExperiments();
    }, [ev]);
    let [eC, ey] = s.useState(null),
        [eL, eD] = s.useState(null),
        [eb, eM] = s.useState(null),
        [eP, eU] = s.useState(!1),
        [ew, ex] = s.useState(!1),
        eG = null == eC ? void 0 : eC.guilds,
        [ek, eB] = s.useState(null != e_ ? e_ : null),
        [eF, eV] = s.useState(null != eE ? eE : null),
        [eH, eZ] = s.useState(P.Hn),
        eY = s.useMemo(() => ((null == eC ? void 0 : eC.user) != null ? new b.Z(eC.user) : null), [null == eC ? void 0 : eC.user]),
        ej = s.useMemo(() => (null == eG ? void 0 : eG.find((e) => e.id === ek)), [eG, ek]),
        [eW, eK] = s.useState(null),
        ez = s.useMemo(() => {
            var e;
            return null == eO && null == ef && (null !== (e = null == ec ? void 0 : ec.length) && void 0 !== e ? e : 0) === 0 && null == er;
        }, [eO, null == ec ? void 0 : ec.length, er, ef]),
        [eq, eQ] = s.useState(null);
    s.useEffect(() => {
        ez && O.Z.fetchApplication(et).then((e) => eQ(D.Z.createFromServer(e)));
    }, [et, ez]);
    let eX = s.useMemo(() => {
            var e, t;
            return null == eW ? null : null == eq ? void 0 : null === (t = eq.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eW]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == eq ? void 0 : eq.integrationTypesConfig, eW]),
        { requestedScopes: e$, accountScopes: eJ } = s.useMemo(() => {
            let e = ez ? (null == eX ? void 0 : eX.scopes) : ec,
                t = (0, w.K)(null != e ? e : []),
                n = B.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == eX ? void 0 : eX.scopes, ec, ez]),
        e0 = s.useMemo(() => {
            var e;
            let t = ez ? E.vB(null !== (e = null == eX ? void 0 : eX.permissions) && void 0 !== e ? e : 0) : ed;
            return null != t ? t : P.Hn;
        }, [null == eX ? void 0 : eX.permissions, ed, ez]),
        e1 = s.useRef(!1),
        [e2, e3] = s.useState(null != eN ? eN : []),
        [e4, e5] = s.useState(null != eN && eN.length > 0);
    s.useEffect(() => {
        if (e1.current) return;
        let e = async () => {
            e1.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, R.de)(et);
                e5(!t), e3(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) {
                    (0, x.c$)(eR);
                    return;
                }
                eM(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e1.current = !1;
            }
        };
        if (null == eN) {
            if (!M.default.isAuthenticated()) {
                (0, x.c$)(eR);
                return;
            }
            e();
        }
    }, [et, eR, eN, e3, eM, e5, eD]);
    let e6 = s.useCallback(
            async (e) => {
                if (null != eg) {
                    eg(e);
                    return;
                }
                if (!e && !eI) {
                    null != eS &&
                        (eS({
                            application: null == eC ? void 0 : eC.application,
                            guild: ej
                        }),
                        null == eA || eA());
                    return;
                }
                if (null == eW) {
                    eM(Error('No integration type was selected.'));
                    return;
                }
                try {
                    eU(!0);
                    let t = await (0, x.Iq)({
                        authorize: e,
                        clientId: et,
                        scopes: e$,
                        responseType: en,
                        redirectUri: er,
                        codeChallenge: ei,
                        codeChallengeMethod: ea,
                        state: es,
                        nonce: eo,
                        integrationType: eW,
                        permissions: E.Od(e0, eH),
                        guildId: eW === d.Y.GUILD_INSTALL && null != ek ? ek : void 0,
                        channelId: eW === d.Y.GUILD_INSTALL && null != eF ? eF : void 0
                    });
                    if ((e && (await (0, R.x9)(et, e2)), null != eS))
                        eS({
                            application: null == eC ? void 0 : eC.application,
                            location: t.location,
                            guild: ej
                        }),
                            null == eA || eA();
                    else if (null != t.location) {
                        let { host: e, path: n } = c.parse(t.location);
                        U.Z.isDiscordHostname(e) && n === X.Z5c.OAUTH2_AUTHORIZED
                            ? (0, L.uL)(X.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eC ? void 0 : eC.application,
                                      guild: ej
                                  }
                              })
                            : (window.location = t.location);
                    } else eU(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? eM(Error(e.message)) : eM(e), eD('AUTHORIZE_SCOPES'), eU(!1);
                }
            },
            [eg, eI, eS, null == eC ? void 0 : eC.application, ej, eA, et, e$, en, er, ei, ea, es, eo, e0, eH, ek, eW, eF, e2]
        ),
        e7 = s.useRef(!1),
        e8 = s.useCallback(async () => {
            if (!M.default.isAuthenticated()) {
                (0, x.c$)(eR);
                return;
            }
            if (!e1.current) {
                if (!e7.current) {
                    e7.current = !0;
                    try {
                        let e =
                            null != eO
                                ? eO
                                : await (0, x.Ww)({
                                      clientId: et,
                                      scopes: e$,
                                      responseType: en,
                                      redirectUri: er,
                                      codeChallenge: ei,
                                      codeChallengeMethod: ea,
                                      state: es,
                                      nonce: eo,
                                      integrationType: null != eW ? eW : void 0
                                  });
                        ey((0, G.d)(e)), el === F.s.NONE && e.authorized && !e4 && e6(!0), (0, A.yw)(X.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                    } catch (n) {
                        let { status: e, body: t } = n;
                        if (401 === e) {
                            (0, x.c$)(eR);
                            return;
                        }
                        eM(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                    } finally {
                        e7.current = !1;
                    }
                }
            }
        }, [eR, eO, et, e$, en, er, ei, ea, es, eo, eW, el, e6, e4]),
        e9 = s.useMemo(() => {
            var e;
            return null != eq && ez
                ? Object.entries(null !== (e = eq.integrationTypesConfig) && void 0 !== e ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [eq, ez]),
        te = s.useRef(null);
    s.useEffect(() => {
        eL !== te.current &&
            ((te.current = eL),
            (0, A.yw)(X.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eL,
                application_id: et,
                integration_type: eW,
                scopes: e$,
                permissions: e0.toString()
            }));
    }, [et, eW, e0, e$, eL]),
        s.useEffect(() => {
            if (null == eL && (!ez || null != eq) && !!ev)
                if (null != eO) {
                    var e;
                    eK(null !== (e = eO.integration_type) && void 0 !== e ? e : d.Y.GUILD_INSTALL), eD('AUTHORIZE_SCOPES');
                } else e9.length > 1 ? eD('SELECT_INSTALL_TYPE') : (1 === e9.length ? eK(e9[0]) : null != ef ? eK(ef) : eK(d.Y.GUILD_INSTALL), eD('AUTHORIZE_SCOPES'));
        }, [eO, e9, eq, ez, ef, eL, ev]),
        s.useEffect(() => {
            if (null == eW || null != eC || null != eb) return;
            eW === d.Y.USER_INSTALL && (eB(null), eV(null));
            let e = e$.filter((e) => !B.ak.includes(e));
            0 === e$.length ? eM(Error('No scopes were provided.')) : e.length > 0 ? eM(Error('Invalid scope: '.concat(e[0]))) : (0, k._$)(e0) ? eM(Error('Invalid permission(s) provided.')) : e8();
        }, [e4, e8, e$, e0, eW, eC, eb]);
    let tt = s.useCallback((e) => {
            e && ex(!0);
        }, []),
        tn = (0, g.O)(tt);
    if (eb instanceof Error) return { body: (0, a.jsx)(q.Lk, { message: eb.message }) };
    let tr = !1,
        ti = !1,
        ta = !0,
        ts = !0,
        to = !0;
    switch (eL) {
        case null:
            return { body: (0, a.jsx)(m.$, { className: J.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == eq) return { body: (0, a.jsx)(m.$, { className: J.spinner }) };
            (p = (0, a.jsx)(K.Z, {
                application: eq,
                onSelect: (e) => {
                    eK(e), ey(null), eD('AUTHORIZE_SCOPES');
                }
            })),
                (ta = !1),
                (ts = !1),
                (to = !1);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == eC || null == eY || null == eW) return { body: (0, a.jsx)(m.$, { className: J.spinner }) };
            let tl = null == eb || eb instanceof Error ? {} : eb,
                tu = null == eG ? void 0 : eG.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tc = eW === d.Y.GUILD_INSTALL && e$.includes(_.x.WEBHOOK_INCOMING),
                td = tc || (eW === d.Y.GUILD_INSTALL && (e$.includes(_.x.BOT) || e$.includes(_.x.APPLICATIONS_COMMANDS)));
            (p = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(H.Z, { accountScopes: eJ }),
                    (0, a.jsx)(Z.Z, {
                        application: eC.application,
                        accountScopes: eJ,
                        requestedScopes: e$,
                        integrationType: eW,
                        errors: tl,
                        isTrustedName: em
                    }),
                    (0, a.jsx)('div', {
                        className: J.intObserver,
                        ref: tn
                    }),
                    td
                        ? (0, a.jsx)(j.Z, {
                              error: (null !== (n = null !== (t = tl[_.x.BOT]) && void 0 !== t ? t : tl[_.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: ek,
                              onGuildChange: eB,
                              guilds: null != tu ? tu : [],
                              disabled: '' !== ek && null != ek && !0 === eh
                          })
                        : null,
                    tc
                        ? (0, a.jsx)(Q.Z, {
                              error: (null !== (r = tl[_.x.WEBHOOK_INCOMING]) && void 0 !== r ? r : [])[0],
                              selectedChannelId: eF,
                              selectedGuildId: ek,
                              onChannelChange: eV
                          })
                        : null
                ]
            })),
                e$.includes(_.x.BOT) && !E.fS(e0, P.Hn) && (N = 'AUTHORIZE_BOT_PERMISSIONS'),
                e9.length > 1 && (I = 'SELECT_INSTALL_TYPE'),
                (ti = (td && null == ej) || (tc && null == eF)),
                (tr = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == eC) return { body: (0, a.jsx)(m.$, { className: J.spinner }) };
            (p = (0, a.jsx)(Y.Z, {
                application: eC.application,
                permissions: e0,
                deniedPermissions: eH,
                onPermissionsChange: (e, t) => {
                    eZ((n) => (e ? E.Od(n, t) : E.IH(n, t)));
                },
                guild: ej
            })),
                (I = 'AUTHORIZE_SCOPES'),
                (tr = !0);
    }
    if (ta && null != eC) {
        let e = null === (i = eC.bot) || void 0 === i ? void 0 : i.approximate_guild_count;
        v = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(V.Z, {
                    application: eC.application,
                    scopes: e$,
                    disclosures: e2,
                    redirectUri: null !== (o = eC.redirect_uri) && void 0 !== o ? o : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eT
                }),
                (0, a.jsx)('div', {
                    className: J.intObserver,
                    ref: tn
                })
            ]
        });
    }
    return (
        ts &&
            null != eC &&
            null != eY &&
            (y = (0, a.jsx)(W.Z, {
                id: ee,
                user: eY,
                application: eC.application,
                bot: eC.bot,
                accountScopes: eJ,
                showLogout: ep || !1,
                location: eR
            })),
        to &&
            (z = (0, a.jsxs)('div', {
                className: l()(J.footer),
                children: [
                    null != I
                        ? (0, a.jsx)(h.zx, {
                              look: h.zx.Looks.LINK,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => eD(I),
                              children: $.Z.Messages.BACK
                          })
                        : (0, a.jsx)(h.zx, {
                              look: h.zx.Looks.LINK,
                              color: h.zx.Colors.PRIMARY,
                              onClick: () => e6(!1),
                              children: $.Z.Messages.CANCEL
                          }),
                    'SELECT_INSTALL_TYPE' !== eL
                        ? ew
                            ? (0, a.jsx)('div', {
                                  className: J.action,
                                  children: (0, a.jsx)(h.zx, {
                                      onClick: null != N ? () => eD(N) : () => e6(!0),
                                      submitting: eP,
                                      disabled: null == v || ti,
                                      children: ti ? $.Z.Messages.OAUTH2_MISSED_FIELDS : null != N ? $.Z.Messages.CONTINUE : $.Z.Messages.AUTHORIZE
                                  })
                              })
                            : (0, a.jsx)('div', {
                                  className: J.action,
                                  children: (0, a.jsx)(T.Tooltip, {
                                      text: $.Z.Messages.OAUTH2_SCROLL_TO_READ_DISCLOSURES,
                                      children: (e) =>
                                          (0, a.jsx)('div', {
                                              ...e,
                                              className: J.tooltip,
                                              children: (0, a.jsxs)(h.zx, {
                                                  disabled: !0,
                                                  submitting: eP,
                                                  innerClassName: J.buttonOverflow,
                                                  children: [
                                                      $.Z.Messages.OAUTH2_KEEP_SCROLLING,
                                                      ' ',
                                                      (0, a.jsx)('span', {
                                                          className: J.emoji,
                                                          role: 'img',
                                                          'aria-label': 'down',
                                                          children: '\uD83D\uDC47'
                                                      })
                                                  ]
                                              })
                                          })
                                  })
                              })
                        : null
                ]
            })),
        {
            header: y,
            body: p,
            footer: z,
            nextStep: N,
            appDetails: v,
            sendAuthorize: e6,
            hasContentBackground: tr
        }
    );
}
function ei(e, t) {
    if (null == t.location || (null != e && e(t))) return;
    let { host: n, path: r, query: i } = c.parse(t.location, !0),
        s = U.Z.isDiscordHostname(n) || window.location.host === n;
    if (s && r === X.Z5c.OAUTH2_AUTHORIZED)
        (0, p.h7)((e) =>
            (0, a.jsx)(z.j, {
                ...e,
                'aria-labelledby': ee,
                children: (0, a.jsx)(q.Jh, {
                    guild: t.guild,
                    application: t.application,
                    onClose: e.onClose
                })
            })
        );
    else if (s && (null == r ? void 0 : r.startsWith(X.Z5c.OAUTH2_ERROR)))
        (0, p.h7)((e) => {
            let t = i.error_description || i.error || $.Z.Messages.OAUTH2_UNKNOWN_ERROR;
            return (
                Array.isArray(t) && (t = t[0]),
                (0, a.jsx)(z.j, {
                    ...e,
                    'aria-labelledby': ee,
                    children: (0, a.jsx)(q.Lk, {
                        message: t,
                        onClose: e.onClose
                    })
                })
            );
        });
    else {
        var o;
        null === (o = window.open(t.location, '_blank')) || void 0 === o || o.focus();
    }
}
function ea(e, t) {
    if ((0, y.g)('create-guild-and-oauth2-modal')) {
        v.Z.openCreateGuildModal({
            onSuccess: (n) =>
                es(
                    {
                        ...e,
                        guildId: n
                    },
                    t
                )
        });
        return;
    }
    es(e, t);
}
function es(e, t) {
    (0, p.h7)(
        (t) =>
            (0, a.jsx)(en, {
                ...t,
                ...e,
                cancelCompletesFlow: !1,
                callback: ei.bind(null, e.callback)
            }),
        { onCloseCallback: t }
    );
}
function eo(e) {
    let { hostname: t = '', host: n, path: r, query: i } = c.parse(e);
    return null != r && null != i && (U.Z.isDiscordHostname(t) || n === window.location.host) && (r.startsWith('/api'.concat(X.ANM.OAUTH2_AUTHORIZE)) || r.startsWith(X.Z5c.OAUTH2_AUTHORIZE)) ? (0, w.y)(i) : null;
}
((i = r || (r = {})).SELECT_INSTALL_TYPE = 'SELECT_INSTALL_TYPE'), (i.AUTHORIZE_SCOPES = 'AUTHORIZE_SCOPES'), (i.AUTHORIZE_BOT_PERMISSIONS = 'AUTHORIZE_BOT_PERMISSIONS');
