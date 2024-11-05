n.d(t, {
    Jh: function () {
        return D;
    },
    Lk: function () {
        return x;
    },
    Xg: function () {
        return w;
    },
    ZP: function () {
        return R;
    },
    _Z: function () {
        return L;
    },
    c7: function () {
        return O;
    },
    j3: function () {
        return M;
    }
}),
    n(177593);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(593473),
    l = n(512969),
    u = n(729594),
    c = n(442837),
    d = n(922770),
    f = n(993365),
    _ = n(481060),
    h = n(424602),
    p = n(132871),
    m = n(252618),
    g = n(703656),
    E = n(769654),
    v = n(592125),
    I = n(496675),
    S = n(944486),
    T = n(626135),
    b = n(585483),
    y = n(787025),
    A = n(981631),
    N = n(388032),
    C = n(193310);
function R(e) {
    let { message: t, footer: n, headerClassName: i, showsCloseWindowText: a, spinner: o } = e;
    return (
        (0, m.Tt)({ location: N.intl.string(N.t['3S249/']) }),
        (0, r.jsxs)('div', {
            className: C.wrapper,
            children: [
                o ? (0, r.jsx)(d.$, {}) : null,
                (0, r.jsx)('div', { className: s()(C.header, i) }),
                (0, r.jsx)(_.Heading, {
                    variant: 'heading-lg/bold',
                    className: C.text,
                    children: t
                }),
                null != n ? n : null,
                a
                    ? (0, r.jsx)(f.x, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: C.cta,
                          children: N.intl.string(N.t['k7J/w8'])
                      })
                    : null
            ]
        })
    );
}
function O(e) {
    return (0, r.jsx)(R, {
        ...e,
        headerClassName: C.headerSuccess
    });
}
function D(e) {
    let { guild: t, application: n, ...a } = e,
        s = N.intl.string(N.t.se5gLi);
    i.useEffect(() => {
        T.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == n ? void 0 : n.id });
    }, [null == n ? void 0 : n.id]);
    let o = i.useMemo(() => {
            if (null != n)
                return null != t
                    ? N.intl.format(N.t.IlF6IS, {
                          installedApplicationName: null == n ? void 0 : n.name,
                          guildName: null == t ? void 0 : t.name
                      })
                    : N.intl.format(N.t.vTVC5e, { installedApplicationName: null == n ? void 0 : n.name });
            return N.intl.string(N.t['Dp+rgI']);
        }, [n, t]),
        l = (0, r.jsx)(f.x, {
            variant: 'text-md/normal',
            className: C.authorizedSuccessSubtext,
            children: o
        });
    return (0, r.jsx)('div', {
        className: C.authorizedSuccessWrapper,
        children: (0, r.jsx)(O, {
            message: s,
            footer: l,
            ...a
        })
    });
}
function L(e) {
    let { guild: t, application: n, ...a } = e,
        { onClose: s } = a,
        o = i.useCallback(() => {
            if ((null == t ? void 0 : t.id) != null)
                (0, E.X)(null == t ? void 0 : t.id),
                    null == s || s(),
                    T.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                        application_id: null == n ? void 0 : n.id,
                        guild_id: null == t ? void 0 : t.id
                    });
        }, [s, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
        l = (0, p.useApplicationDirectoryHistory)((e) => e.entrypoint),
        u = i.useCallback(() => {
            null == s || s(), T.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == n ? void 0 : n.id });
        }, [s, null == n ? void 0 : n.id]),
        d = window.location.pathname.startsWith(A.Z5c.APPLICATION_DIRECTORY),
        f = i.useCallback(() => {
            var e;
            if ((null == n ? void 0 : n.id) != null)
                null == s || s(),
                    null != l && (0, g.uL)(null !== (e = l.pathname) && void 0 !== e ? e : ''),
                    setImmediate(() => {
                        b.S.dispatchToLastSubscribed(A.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id }), T.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, { application_id: n.id });
                    });
        }, [null == n ? void 0 : n.id, s, l]),
        m = h.zQ.useExperiment({ location: 'OAuth2AuthorizedSuccess' }, { autoTrackExposure: !1 }).enabled,
        y = (0, c.e7)([S.Z, v.Z], () => v.Z.getChannel(S.Z.getChannelId())),
        R = (0, c.e7)([I.Z], () => I.Z.can(A.Plq.SEND_MESSAGES, y)),
        O = null != t,
        D = null == t && R && m && (!d || null != l);
    return null != t || null != s
        ? (0, r.jsxs)('div', {
              className: C.buttonsContainer,
              children: [
                  null != s
                      ? O || D
                          ? (0, r.jsx)(_.Button, {
                                size: _.Button.Sizes.SMALL,
                                look: _.Button.Looks.LINK,
                                color: _.Button.Colors.PRIMARY,
                                onClick: u,
                                children: N.intl.string(N.t.cpT0Cg)
                            })
                          : (0, r.jsx)(_.Button, {
                                fullWidth: !0,
                                color: _.Button.Colors.PRIMARY,
                                onClick: u,
                                children: N.intl.string(N.t.cpT0Cg)
                            })
                      : void 0,
                  O &&
                      (0, r.jsx)(_.Button, {
                          color: _.Button.Colors.BRAND,
                          onClick: o,
                          children: (null == t ? void 0 : t.name.length) > 30 ? N.intl.string(N.t.M35zFB) : N.intl.format(N.t.UdYYPz, { guildName: null == t ? void 0 : t.name })
                      }),
                  D &&
                      (0, r.jsx)(_.Button, {
                          color: _.Button.Colors.BRAND,
                          onClick: f,
                          children: N.intl.string(N.t['0cCDKC'])
                      })
              ]
          })
        : null;
}
function x(e) {
    return (0, r.jsx)(R, {
        ...e,
        headerClassName: C.headerFailure
    });
}
function w() {
    var e, t;
    let n = (0, l.TH)();
    return (0, r.jsx)(y.G, {
        children: (0, r.jsx)(D, {
            guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
            application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
            showsCloseWindowText: !0
        })
    });
}
function M(e) {
    var t, n;
    let { location: a } = e;
    i.useEffect(() => {
        if (null == a || '' === a.search) return;
        let e = null != document.referrer && '' !== document.referrer ? u.parse(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== A.Z5c.OAUTH2_AUTHORIZE) && (0, g.uL)(A.Z5c.INDEX);
    }, [a]);
    let s = null != a ? (0, o.parse)(a.search) : {},
        l = null !== (n = null !== (t = s.error_description) && void 0 !== t ? t : s.error) && void 0 !== n ? n : N.intl.string(N.t['mqn87+']);
    return (0, r.jsx)(y.G, {
        children: (0, r.jsx)(x, {
            message: l,
            showsCloseWindowText: !0
        })
    });
}
