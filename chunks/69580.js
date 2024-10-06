n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: function () {
            return eu;
        },
        OAuth2AuthorizePage: function () {
            return el;
        },
        getOAuth2AuthorizeProps: function () {
            return ef;
        },
        openOAuth2Modal: function () {
            return eE;
        },
        openOAuth2ModalWithCreateGuildModal: function () {
            return e_;
        },
        useOAuth2AuthorizeForm: function () {
            return ec;
        }
    }),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
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
    d = n(873546),
    _ = n(373793),
    E = n(243814),
    f = n(149765),
    h = n(442837),
    p = n(946188),
    I = n(693789),
    m = n(952265),
    T = n(21340),
    S = n(922770),
    g = n(481060),
    A = n(893776),
    N = n(596454),
    O = n(434650),
    R = n(367907),
    v = n(702493),
    C = n(424602),
    L = n(728345),
    y = n(979200),
    D = n(560067),
    b = n(353926),
    M = n(341298),
    P = n(703656),
    U = n(973616),
    w = n(598077),
    x = n(314897),
    G = n(585483),
    k = n(176354),
    B = n(700785),
    F = n(591759),
    V = n(807675),
    H = n(489863),
    Z = n(228763),
    Y = n(422559),
    j = n(713938),
    W = n(166148),
    K = n(807989),
    z = n(627799),
    q = n(260430),
    Q = n(668185),
    X = n(407546),
    $ = n(41259),
    J = n(28752),
    ee = n(787025),
    et = n(397394),
    en = n(574384),
    er = n(960662),
    ei = n(981631),
    ea = n(689938),
    es = n(195943);
let eo = 'oauth2-authorize-header-id';
function el() {
    let e = (0, u.TH)(),
        t = s.useMemo(() => (0, V.y)(e.search), [e.search]);
    return (
        (0, v.Z)(),
        s.useEffect(() => {
            let t = !e.search.includes('response_type');
            if (d.eL && t) {
                let t = new URL('discord://action/oauth2/authorize');
                (t.search = e.search), window.open(t.toString(), '_self');
            }
        }, [e.search]),
        (0, a.jsx)(ee.G, {
            removeChildWrapper: !0,
            children: (0, a.jsx)(eu, {
                transitionState: g.ModalTransitionState.ENTERED,
                ...t,
                showLogout: !0
            })
        })
    );
}
function eu(e) {
    let { transitionState: t, ...n } = e,
        { header: r, body: i, footer: s, nextStep: o, appDetails: u, hasContentBackground: c, minimalPadding: d } = ec({ ...n }),
        _ = (0, a.jsxs)(a.Fragment, {
            children: [
                r,
                (0, a.jsxs)('div', {
                    className: l()(es.content, c ? es.contentBackground : null, d ? es.minimalPadding : null),
                    children: [i, null == o ? u : null]
                })
            ]
        });
    return (0, a.jsx)(ee.j, {
        transitionState: t,
        'aria-labelledby': eo,
        footer: s,
        children: (0, a.jsx)('div', {
            className: l()(es.authorize),
            children: (0, a.jsx)(T.zJ, {
                orientation: 'auto',
                children: _
            })
        })
    });
}
function ec(e) {
    var t, n, r, i, o;
    let d,
        m,
        T,
        v,
        C,
        D,
        { clientId: M, responseType: G, redirectUri: ee, codeChallenge: el, codeChallengeMethod: eu, state: ec, nonce: ed, prompt: e_, authorizations: eE, scopes: ef, permissions: eh, guildId: ep, channelId: eI, integrationType: em, disableGuildSelect: eT = !1, showLogout: eS = !1, cancelCompletesFlow: eg = !0, isTrustedName: eA = !1, isEmbeddedFlow: eN = !1, callback: eO, callbackWithoutPost: eR, onClose: ev, disclosures: eC } = e,
        eL = null != em ? (null == eE ? void 0 : eE.get(em)) : void 0,
        ey = (0, u.TH)(),
        eD = (0, h.e7)([b.Z], () => b.Z.hasLoadedExperiments);
    s.useEffect(() => {
        x.default.isAuthenticated() && !eD && A.Z.getExperiments();
    }, [eD]);
    let [eb, eM] = s.useState(null),
        [eP, eU] = s.useState(null),
        [ew, ex] = s.useState(null),
        [eG, ek] = s.useState(!1),
        [eB, eF] = s.useState(!1),
        eV = null == eb ? void 0 : eb.guilds,
        [eH, eZ] = s.useState(null != ep ? ep : null),
        [eY, ej] = s.useState(null != eI ? eI : null),
        [eW, eK] = s.useState(B.Hn),
        ez = s.useMemo(() => ((null == eb ? void 0 : eb.user) != null ? new w.Z(eb.user) : null), [null == eb ? void 0 : eb.user]),
        eq = s.useMemo(() => (null == eV ? void 0 : eV.find((e) => e.id === eH)), [eV, eH]),
        [eQ, eX] = s.useState(null),
        e$ = s.useMemo(() => {
            var e;
            return null == eL && null == em && (null !== (e = null == ef ? void 0 : ef.length) && void 0 !== e ? e : 0) === 0 && null == ee;
        }, [eL, null == ef ? void 0 : ef.length, ee, em]),
        [eJ, e0] = s.useState(null);
    s.useEffect(() => {
        e$ && L.ZP.fetchApplication(M).then((e) => e0(U.Z.createFromServer(e)));
    }, [M, e$]);
    let e1 = s.useMemo(() => {
            var e, t;
            return null == eQ ? null : null == eJ ? void 0 : null === (t = eJ.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[eQ]) || void 0 === e ? void 0 : e.oauth2InstallParams;
        }, [null == eJ ? void 0 : eJ.integrationTypesConfig, eQ]),
        { requestedScopes: e2, accountScopes: e3 } = s.useMemo(() => {
            let e = e$ ? (null == e1 ? void 0 : e1.scopes) : ef,
                t = (0, V.K)(null != e ? e : []),
                n = j.Qe.filter((e) => t.includes(e));
            return {
                requestedScopes: t,
                accountScopes: n
            };
        }, [null == e1 ? void 0 : e1.scopes, ef, e$]),
        e4 = s.useMemo(() => {
            var e;
            let t = e$ ? f.vB(null !== (e = null == e1 ? void 0 : e1.permissions) && void 0 !== e ? e : 0) : eh;
            return null != t ? t : B.Hn;
        }, [null == e1 ? void 0 : e1.permissions, eh, e$]),
        e5 = s.useRef(!1),
        [e6, e7] = s.useState(null != eC ? eC : []),
        [e8, e9] = s.useState(null != eC && eC.length > 0);
    s.useEffect(() => {
        if (e5.current) return;
        let e = async () => {
            e5.current = !0;
            try {
                let { disclosures: e, allAcked: t } = await (0, y.de)(M);
                e9(!t), e7(e);
            } catch (n) {
                let { status: e, body: t } = n;
                if (401 === e) {
                    (0, H.c$)(ey);
                    return;
                }
                ex(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
            } finally {
                e5.current = !1;
            }
        };
        if (null == eC) {
            if (!x.default.isAuthenticated()) {
                (0, H.c$)(ey);
                return;
            }
            e();
        }
    }, [M, ey, eC, e7, ex, e9, eU]);
    let te = s.useCallback(
            async (e) => {
                if (null != eR) {
                    eR(e);
                    return;
                }
                if (!e && !eg) {
                    null != eO &&
                        (eO({
                            application: null == eb ? void 0 : eb.application,
                            guild: eq
                        }),
                        null == ev || ev());
                    return;
                }
                if (null == eQ) {
                    ex(Error('No integration type was selected.'));
                    return;
                }
                try {
                    ek(!0);
                    let t = await (0, H.Iq)({
                        authorize: e,
                        clientId: M,
                        scopes: e2,
                        responseType: G,
                        redirectUri: ee,
                        codeChallenge: el,
                        codeChallengeMethod: eu,
                        state: ec,
                        nonce: ed,
                        integrationType: eQ,
                        permissions: f.Od(e4, eW),
                        guildId: eQ === _.Y.GUILD_INSTALL && null != eH ? eH : void 0,
                        channelId: eQ === _.Y.GUILD_INSTALL && null != eY ? eY : void 0
                    });
                    if ((e && (await (0, y.x9)(M, e6)), null != eO))
                        eO({
                            application: null == eb ? void 0 : eb.application,
                            location: t.location,
                            guild: eq
                        }),
                            null == ev || ev();
                    else if (null != t.location) {
                        let { host: e, path: n } = c.parse(t.location);
                        F.Z.isDiscordHostname(e) && n === ei.Z5c.OAUTH2_AUTHORIZED
                            ? (0, P.uL)(ei.Z5c.OAUTH2_AUTHORIZED, {
                                  state: {
                                      application: null == eb ? void 0 : eb.application,
                                      guild: eq
                                  }
                              })
                            : (window.location = t.location);
                    } else ek(!1);
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.message) != null && '' !== e.message ? ex(Error(e.message)) : ex(e), eU('AUTHORIZE_SCOPES'), ek(!1);
                }
            },
            [eR, eg, eO, null == eb ? void 0 : eb.application, eq, ev, M, e2, G, ee, el, eu, ec, ed, e4, eW, eH, eQ, eY, e6]
        ),
        tt = s.useRef(!1),
        tn = s.useCallback(async () => {
            if (!x.default.isAuthenticated()) {
                (0, H.c$)(ey);
                return;
            }
            if (!e5.current) {
                if (!tt.current) {
                    tt.current = !0;
                    try {
                        let e =
                            null != eL
                                ? eL
                                : await (0, H.Ww)({
                                      clientId: M,
                                      scopes: e2,
                                      responseType: G,
                                      redirectUri: ee,
                                      codeChallenge: el,
                                      codeChallengeMethod: eu,
                                      state: ec,
                                      nonce: ed,
                                      integrationType: null != eQ ? eQ : void 0
                                  });
                        eM((0, Z.d)(e)), e_ === W.s.NONE && e.authorized && !e8 && te(!0), (0, R.yw)(ei.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
                    } catch (n) {
                        let { status: e, body: t } = n;
                        if (401 === e) {
                            (0, H.c$)(ey);
                            return;
                        }
                        ex(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
                    } finally {
                        tt.current = !1;
                    }
                }
            }
        }, [ey, eL, M, e2, G, ee, el, eu, ec, ed, eQ, e_, te, e8]),
        tr = s.useMemo(() => {
            var e;
            return null != eJ && e$
                ? Object.entries(null !== (e = eJ.integrationTypesConfig) && void 0 !== e ? e : {})
                      .filter((e) => {
                          let [t, n] = e;
                          return null != n.oauth2InstallParams;
                      })
                      .map((e) => {
                          let [t, n] = e;
                          return Number(t);
                      })
                : [];
        }, [eJ, e$]),
        ti = s.useRef(null);
    s.useEffect(() => {
        eP !== ti.current &&
            ((ti.current = eP),
            (0, R.yw)(ei.rMx.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eP,
                application_id: M,
                integration_type: eQ,
                scopes: e2,
                permissions: e4.toString()
            }));
    }, [M, eQ, e4, e2, eP]),
        s.useEffect(() => {
            if (null == eP && (!e$ || null != eJ) && !!eD)
                if (null != eL) {
                    var e;
                    eX(null !== (e = eL.integration_type) && void 0 !== e ? e : _.Y.GUILD_INSTALL), eU('AUTHORIZE_SCOPES');
                } else tr.length > 1 ? eU('SELECT_INSTALL_TYPE') : (1 === tr.length ? eX(tr[0]) : null != em ? eX(em) : eX(_.Y.GUILD_INSTALL), eU('AUTHORIZE_SCOPES'));
        }, [eL, tr, eJ, e$, em, eP, eD]),
        s.useEffect(() => {
            if (null == eQ || null != eb || null != ew) return;
            eQ === _.Y.USER_INSTALL && (eZ(null), ej(null));
            let e = e2.filter((e) => !j.ak.includes(e));
            0 === e2.length ? ex(Error('No scopes were provided.')) : e.length > 0 ? ex(Error('Invalid scope: '.concat(e[0]))) : (0, Y._$)(e4) ? ex(Error('Invalid permission(s) provided.')) : tn();
        }, [e8, tn, e2, e4, eQ, eb, ew]);
    let ta = s.useCallback((e) => {
            e && eF(!0);
        }, []),
        ts = (0, O.O)(ta);
    if (ew instanceof Error) return { body: (0, a.jsx)(et.Lk, { message: ew.message }) };
    let to = !1,
        tl = !1,
        tu = !0,
        tc = !0,
        td = !0,
        t_ = !1;
    switch (eP) {
        case null:
            return { body: (0, a.jsx)(S.$, { className: es.spinner }) };
        case 'SELECT_INSTALL_TYPE':
            if (null == eJ) return { body: (0, a.jsx)(S.$, { className: es.spinner }) };
            (d = (0, a.jsx)(J.Z, {
                application: eJ,
                onSelect: (e) => {
                    eX(e), eM(null), eU('AUTHORIZE_SCOPES');
                },
                onClose: ev
            })),
                (tu = !1),
                (tc = !1),
                (td = !1),
                (t_ = !0);
            break;
        case 'AUTHORIZE_SCOPES':
            if (null == eb || null == ez || null == eQ) return { body: (0, a.jsx)(S.$, { className: es.spinner }) };
            let tE = null == ew || ew instanceof Error ? {} : ew,
                tf = null == eV ? void 0 : eV.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                th = eQ === _.Y.GUILD_INSTALL && e2.includes(E.x.WEBHOOK_INCOMING),
                tp = th || (eQ === _.Y.GUILD_INSTALL && (e2.includes(E.x.BOT) || e2.includes(E.x.APPLICATIONS_COMMANDS)));
            (d = (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(z.Z, { accountScopes: e3 }),
                    (0, a.jsx)(q.Z, {
                        application: eb.application,
                        accountScopes: e3,
                        requestedScopes: e2,
                        integrationType: eQ,
                        errors: tE,
                        isTrustedName: eA
                    }),
                    (0, a.jsx)('div', {
                        className: es.intObserver,
                        ref: ts
                    }),
                    tp
                        ? (0, a.jsx)(X.Z, {
                              error: (null !== (n = null !== (t = tE[E.x.BOT]) && void 0 !== t ? t : tE[E.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
                              selectedGuildId: eH,
                              onGuildChange: eZ,
                              guilds: null != tf ? tf : [],
                              disabled: '' !== eH && null != eH && !0 === eT
                          })
                        : null,
                    th
                        ? (0, a.jsx)(en.Z, {
                              error: (null !== (r = tE[E.x.WEBHOOK_INCOMING]) && void 0 !== r ? r : [])[0],
                              selectedChannelId: eY,
                              selectedGuildId: eH,
                              onChannelChange: ej
                          })
                        : null
                ]
            })),
                e2.includes(E.x.BOT) && !f.fS(e4, B.Hn) && (T = 'AUTHORIZE_BOT_PERMISSIONS'),
                tr.length > 1 && (m = 'SELECT_INSTALL_TYPE'),
                (tl = (tp && null == eq) || (th && null == eY)),
                (to = !0);
            break;
        case 'AUTHORIZE_BOT_PERMISSIONS':
            if (null == eb) return { body: (0, a.jsx)(S.$, { className: es.spinner }) };
            (d = (0, a.jsx)(Q.Z, {
                application: eb.application,
                permissions: e4,
                deniedPermissions: eW,
                onPermissionsChange: (e, t) => {
                    eK((n) => (e ? f.Od(n, t) : f.IH(n, t)));
                },
                guild: eq
            })),
                (m = 'AUTHORIZE_SCOPES'),
                (to = !0);
    }
    if (tu && null != eb) {
        let e = null === (i = eb.bot) || void 0 === i ? void 0 : i.approximate_guild_count;
        v = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(K.Z, {
                    application: eb.application,
                    scopes: e2,
                    disclosures: e6,
                    redirectUri: null !== (o = eb.redirect_uri) && void 0 !== o ? o : null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: eN
                }),
                (0, a.jsx)('div', {
                    className: es.intObserver,
                    ref: ts
                })
            ]
        });
    }
    return (
        tc &&
            null != eb &&
            null != ez &&
            (C = (0, a.jsx)($.Z, {
                id: eo,
                user: ez,
                application: eb.application,
                bot: eb.bot,
                accountScopes: e3,
                showLogout: eS || !1,
                location: ey
            })),
        td &&
            (D = (0, a.jsxs)('div', {
                className: l()(es.footer),
                children: [
                    null != m
                        ? (0, a.jsx)(I.zx, {
                              look: I.zx.Looks.LINK,
                              color: I.zx.Colors.PRIMARY,
                              onClick: () => eU(m),
                              children: ea.Z.Messages.BACK
                          })
                        : (0, a.jsx)(I.zx, {
                              look: I.zx.Looks.LINK,
                              color: I.zx.Colors.PRIMARY,
                              onClick: () => te(!1),
                              children: ea.Z.Messages.CANCEL
                          }),
                    'SELECT_INSTALL_TYPE' !== eP
                        ? eB
                            ? (0, a.jsx)('div', {
                                  className: es.action,
                                  children: (0, a.jsx)(I.zx, {
                                      onClick: null != T ? () => eU(T) : () => te(!0),
                                      submitting: eG,
                                      disabled: null == v || tl,
                                      children: tl ? ea.Z.Messages.OAUTH2_MISSED_FIELDS : null != T ? ea.Z.Messages.CONTINUE : ea.Z.Messages.AUTHORIZE
                                  })
                              })
                            : (0, a.jsx)('div', {
                                  className: es.action,
                                  children: (0, a.jsx)(g.Tooltip, {
                                      text: ea.Z.Messages.OAUTH2_SCROLL_TO_READ_DISCLOSURES,
                                      children: (e) =>
                                          (0, a.jsx)('div', {
                                              ...e,
                                              className: es.tooltip,
                                              children: (0, a.jsxs)(I.zx, {
                                                  disabled: !0,
                                                  submitting: eG,
                                                  innerClassName: es.buttonWithEmoji,
                                                  children: [
                                                      ea.Z.Messages.OAUTH2_KEEP_SCROLLING,
                                                      ' ',
                                                      (0, a.jsx)(N.Z, {
                                                          className: es.emoji,
                                                          src: k.ZP.getURL(p.Z.convert.fromCodePoint(er.I)),
                                                          emojiName: ':point_down:',
                                                          animated: !1
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
            header: C,
            body: d,
            footer: D,
            nextStep: T,
            appDetails: v,
            sendAuthorize: te,
            hasContentBackground: to,
            minimalPadding: t_
        }
    );
}
function ed(e, t) {
    if (null == t.location || (null != e && e(t))) return;
    let { host: n, path: r, query: i } = c.parse(t.location, !0),
        s = F.Z.isDiscordHostname(n) || window.location.host === n;
    if (s && r === ei.Z5c.OAUTH2_AUTHORIZED) {
        let e = C._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
            n = window.location.pathname.startsWith(ei.ANM.CHANNELS);
        e.enabled && null != t.application && null == t.guild && n
            ? G.S.safeDispatch(ei.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, { application: t.application })
            : (0, m.h7)((e) => {
                  let n = (0, a.jsx)(et._Z, {
                      guild: t.guild,
                      application: t.application,
                      onClose: e.onClose
                  });
                  return (0, a.jsx)(ee.j, {
                      ...e,
                      'aria-labelledby': eo,
                      footer: n,
                      children: (0, a.jsx)(et.Jh, {
                          guild: t.guild,
                          application: t.application,
                          onClose: e.onClose
                      })
                  });
              });
    } else if (s && (null == r ? void 0 : r.startsWith(ei.Z5c.OAUTH2_ERROR)))
        (0, m.h7)((e) => {
            let t = i.error_description || i.error || ea.Z.Messages.OAUTH2_UNKNOWN_ERROR;
            return (
                Array.isArray(t) && (t = t[0]),
                (0, a.jsx)(ee.j, {
                    ...e,
                    'aria-labelledby': eo,
                    children: (0, a.jsx)(et.Lk, {
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
function e_(e, t) {
    if ((0, M.g)('create-guild-and-oauth2-modal')) {
        D.Z.openCreateGuildModal({
            onSuccess: (n) =>
                eE(
                    {
                        ...e,
                        guildId: n
                    },
                    t
                )
        });
        return;
    }
    eE(e, t);
}
function eE(e, t) {
    (0, m.h7)(
        (t) =>
            (0, a.jsx)(eu, {
                ...t,
                ...e,
                cancelCompletesFlow: !1,
                callback: ed.bind(null, e.callback)
            }),
        { onCloseCallback: t }
    );
}
function ef(e) {
    let { hostname: t = '', host: n, path: r, query: i } = c.parse(e);
    return null != r && null != i && (F.Z.isDiscordHostname(t) || n === window.location.host) && (r.startsWith('/api'.concat(ei.ANM.OAUTH2_AUTHORIZE)) || r.startsWith(ei.Z5c.OAUTH2_AUTHORIZE)) ? (0, V.y)(i) : null;
}
((i = r || (r = {})).SELECT_INSTALL_TYPE = 'SELECT_INSTALL_TYPE'), (i.AUTHORIZE_SCOPES = 'AUTHORIZE_SCOPES'), (i.AUTHORIZE_BOT_PERMISSIONS = 'AUTHORIZE_BOT_PERMISSIONS');
