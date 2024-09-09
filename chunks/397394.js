n.d(t, {
    Jh: function () {
        return v;
    },
    Lk: function () {
        return C;
    },
    Xg: function () {
        return y;
    },
    ZP: function () {
        return O;
    },
    c7: function () {
        return R;
    },
    j3: function () {
        return L;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(593473),
    l = n(266067),
    u = n(729594),
    c = n(466377),
    d = n(922770),
    _ = n(993365),
    E = n(481060),
    f = n(424602),
    h = n(252618),
    p = n(703656),
    I = n(769654),
    m = n(626135),
    T = n(585483),
    S = n(787025),
    g = n(981631),
    A = n(689938),
    N = n(19807);
function O(e) {
    let { message: t, footer: n, headerClassName: i, showsCloseWindowText: a, spinner: o, onClose: l } = e;
    return (
        (0, h.Tt)({ location: A.Z.Messages.OAUTH2_TITLE }),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != l
                    ? (0, r.jsx)(c.ol, {
                          onClick: l,
                          className: N.closeButton
                      })
                    : null,
                (0, r.jsxs)('div', {
                    className: N.wrapper,
                    children: [
                        o ? (0, r.jsx)(d.$, {}) : null,
                        (0, r.jsx)('div', { className: s()(N.header, i) }),
                        (0, r.jsx)(_.x, {
                            variant: 'text-md/normal',
                            className: N.text,
                            children: t
                        }),
                        null != n ? n : null,
                        a
                            ? (0, r.jsx)(_.x, {
                                  variant: 'text-xs/normal',
                                  color: 'text-muted',
                                  className: N.cta,
                                  children: A.Z.Messages.OAUTH2_MESSAGE_CTA
                              })
                            : null
                    ]
                })
            ]
        })
    );
}
function R(e) {
    return (0, r.jsx)(O, {
        ...e,
        headerClassName: N.headerSuccess
    });
}
function v(e) {
    let { guild: t, application: n, ...a } = e,
        { onClose: s } = a,
        o = A.Z.Messages.AUTHORIZED_SUCCESS,
        l = i.useCallback(() => {
            if ((null == t ? void 0 : t.id) != null)
                (0, I.X)(null == t ? void 0 : t.id),
                    null == s || s(),
                    m.default.track(g.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                        application_id: null == n ? void 0 : n.id,
                        guild_id: null == t ? void 0 : t.id
                    });
        }, [s, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
        u = i.useCallback(() => {
            if ((null == n ? void 0 : n.id) != null) null == s || s(), T.S.dispatchToLastSubscribed(g.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id }), m.default.track(g.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
        }, [s, null == n ? void 0 : n.id]),
        c = i.useCallback(() => {
            null == s || s(), m.default.track(g.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == n ? void 0 : n.id });
        }, [s, null == n ? void 0 : n.id]),
        d = i.useMemo(() => {
            if (null != n)
                return null != t
                    ? A.Z.Messages.AUTHORIZED_APP_TO_SERVER.format({
                          installedApplicationName: null == n ? void 0 : n.name,
                          guildName: null == t ? void 0 : t.name
                      })
                    : A.Z.Messages.AUTHORIZED_APP.format({ installedApplicationName: null == n ? void 0 : n.name });
            return A.Z.Messages.AUTHORIZED_GENERIC;
        }, [n, t]),
        h = f.zQ.useExperiment({ location: 'OAuth2AuthorizedSuccess' }, { autoTrackExposure: !1 }).enabled,
        p = null != t,
        S = null == t && h,
        O = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(_.x, {
                    variant: 'text-sm/normal',
                    className: N.authorizedSuccessSubtext,
                    children: d
                }),
                (null != t || null != s) &&
                    (0, r.jsxs)('div', {
                        className: N.buttonsContainer,
                        children: [
                            p &&
                                (0, r.jsx)(E.Button, {
                                    fullWidth: !0,
                                    color: E.Button.Colors.BRAND,
                                    onClick: l,
                                    className: N.button,
                                    children: (null == t ? void 0 : t.name.length) > 30 ? A.Z.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : A.Z.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({ guildName: null == t ? void 0 : t.name })
                                }),
                            S &&
                                (0, r.jsx)(E.Button, {
                                    fullWidth: !0,
                                    color: E.Button.Colors.BRAND,
                                    onClick: u,
                                    className: N.button,
                                    children: A.Z.Messages.OAUTH2_OPEN_APP_CTA
                                }),
                            null != s &&
                                (0, r.jsx)(E.Button, {
                                    fullWidth: !0,
                                    color: E.Button.Colors.PRIMARY,
                                    onClick: c,
                                    className: N.button,
                                    children: A.Z.Messages.CLOSE
                                })
                        ]
                    })
            ]
        });
    return (
        i.useEffect(() => {
            m.default.track(g.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == n ? void 0 : n.id });
        }, [null == n ? void 0 : n.id]),
        (0, r.jsx)('div', {
            className: N.authorizedSuccessWrapper,
            children: (0, r.jsx)(R, {
                message: o,
                footer: O,
                ...a
            })
        })
    );
}
function C(e) {
    return (0, r.jsx)(O, {
        ...e,
        headerClassName: N.headerFailure
    });
}
function y() {
    var e, t;
    let n = (0, l.TH)();
    return (0, r.jsx)(S.G, {
        children: (0, r.jsx)(v, {
            guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
            application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
            showsCloseWindowText: !0
        })
    });
}
function L(e) {
    var t, n;
    let { location: a } = e;
    i.useEffect(() => {
        if (null == a || '' === a.search) return;
        let e = null != document.referrer && '' !== document.referrer ? u.parse(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== g.Z5c.OAUTH2_AUTHORIZE) && (0, p.uL)(g.Z5c.INDEX);
    }, [a]);
    let s = null != a ? (0, o.parse)(a.search) : {},
        l = null !== (n = null !== (t = s.error_description) && void 0 !== t ? t : s.error) && void 0 !== n ? n : A.Z.Messages.OAUTH2_UNKNOWN_ERROR;
    return (0, r.jsx)(S.G, {
        children: (0, r.jsx)(C, {
            message: l,
            showsCloseWindowText: !0
        })
    });
}
