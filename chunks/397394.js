n.d(t, {
    Jh: function () {
        return v;
    },
    Lk: function () {
        return L;
    },
    Xg: function () {
        return y;
    },
    ZP: function () {
        return O;
    },
    _Z: function () {
        return C;
    },
    c7: function () {
        return R;
    },
    j3: function () {
        return D;
    }
}),
    n(177593);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(593473),
    l = n(266067),
    u = n(729594),
    c = n(922770),
    d = n(993365),
    _ = n(481060),
    E = n(424602),
    f = n(132871),
    h = n(252618),
    p = n(703656),
    I = n(769654),
    m = n(626135),
    T = n(585483),
    S = n(787025),
    g = n(981631),
    A = n(689938),
    N = n(193310);
function O(e) {
    let { message: t, footer: n, headerClassName: i, showsCloseWindowText: a, spinner: o } = e;
    return (
        (0, h.Tt)({ location: A.Z.Messages.OAUTH2_TITLE }),
        (0, r.jsxs)('div', {
            className: N.wrapper,
            children: [
                o ? (0, r.jsx)(c.$, {}) : null,
                (0, r.jsx)('div', { className: s()(N.header, i) }),
                (0, r.jsx)(_.Heading, {
                    variant: 'heading-lg/bold',
                    className: N.text,
                    children: t
                }),
                null != n ? n : null,
                a
                    ? (0, r.jsx)(d.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: N.cta,
                          children: A.Z.Messages.OAUTH2_MESSAGE_CTA
                      })
                    : null
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
        s = A.Z.Messages.AUTHORIZED_SUCCESS;
    i.useEffect(() => {
        m.default.track(g.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == n ? void 0 : n.id });
    }, [null == n ? void 0 : n.id]);
    let o = i.useMemo(() => {
            if (null != n)
                return null != t
                    ? A.Z.Messages.AUTHORIZED_APP_TO_SERVER.format({
                          installedApplicationName: null == n ? void 0 : n.name,
                          guildName: null == t ? void 0 : t.name
                      })
                    : A.Z.Messages.AUTHORIZED_APP.format({ installedApplicationName: null == n ? void 0 : n.name });
            return A.Z.Messages.AUTHORIZED_GENERIC;
        }, [n, t]),
        l = (0, r.jsx)(d.x, {
            variant: 'text-md/normal',
            className: N.authorizedSuccessSubtext,
            children: o
        });
    return (0, r.jsx)('div', {
        className: N.authorizedSuccessWrapper,
        children: (0, r.jsx)(R, {
            message: s,
            footer: l,
            ...a
        })
    });
}
function C(e) {
    let { guild: t, application: n, ...a } = e,
        { onClose: s } = a,
        o = i.useCallback(() => {
            if ((null == t ? void 0 : t.id) != null)
                (0, I.X)(null == t ? void 0 : t.id),
                    null == s || s(),
                    m.default.track(g.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                        application_id: null == n ? void 0 : n.id,
                        guild_id: null == t ? void 0 : t.id
                    });
        }, [s, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
        l = (0, f.useApplicationDirectoryHistory)((e) => e.entrypoint),
        u = i.useCallback(() => {
            null == s || s(), m.default.track(g.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == n ? void 0 : n.id });
        }, [s, null == n ? void 0 : n.id]),
        c = window.location.pathname.startsWith(g.Z5c.APPLICATION_DIRECTORY),
        d = i.useCallback(() => {
            var e;
            if ((null == n ? void 0 : n.id) != null)
                null == s || s(),
                    null != l && (0, p.uL)(null !== (e = l.pathname) && void 0 !== e ? e : ''),
                    setImmediate(() => {
                        T.S.dispatchToLastSubscribed(g.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id }), m.default.track(g.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                    });
        }, [null == n ? void 0 : n.id, s, l]),
        h = E.zQ.useExperiment({ location: 'OAuth2AuthorizedSuccess' }, { autoTrackExposure: !1 }).enabled,
        S = null != t,
        O = null == t && h && (!c || null != l);
    return null != t || null != s
        ? (0, r.jsxs)('div', {
              className: N.buttonsContainer,
              children: [
                  null != s
                      ? S || O
                          ? (0, r.jsx)(_.Button, {
                                size: _.Button.Sizes.SMALL,
                                look: _.Button.Looks.LINK,
                                color: _.Button.Colors.PRIMARY,
                                onClick: u,
                                children: A.Z.Messages.CLOSE
                            })
                          : (0, r.jsx)(_.Button, {
                                fullWidth: !0,
                                color: _.Button.Colors.PRIMARY,
                                onClick: u,
                                children: A.Z.Messages.CLOSE
                            })
                      : void 0,
                  S &&
                      (0, r.jsx)(_.Button, {
                          color: _.Button.Colors.BRAND,
                          onClick: o,
                          children: (null == t ? void 0 : t.name.length) > 30 ? A.Z.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : A.Z.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({ guildName: null == t ? void 0 : t.name })
                      }),
                  O &&
                      (0, r.jsx)(_.Button, {
                          color: _.Button.Colors.BRAND,
                          onClick: d,
                          children: A.Z.Messages.OAUTH2_OPEN_APP_CTA
                      })
              ]
          })
        : null;
}
function L(e) {
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
function D(e) {
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
        children: (0, r.jsx)(L, {
            message: l,
            showsCloseWindowText: !0
        })
    });
}
