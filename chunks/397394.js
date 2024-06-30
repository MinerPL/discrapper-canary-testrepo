n.d(t, {
    Jh: function () {
        return v;
    },
    Lk: function () {
        return O;
    },
    Xg: function () {
        return R;
    },
    ZP: function () {
        return A;
    },
    c7: function () {
        return N;
    },
    j3: function () {
        return C;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(593473), l = n(266067), u = n(729594), c = n(466377), d = n(922770), _ = n(993365), E = n(481060), f = n(252618), h = n(703656), p = n(769654), m = n(626135), I = n(787025), T = n(981631), g = n(689938), S = n(616730);
function A(e) {
    let {
        message: t,
        footer: n,
        headerClassName: i,
        showsCloseWindowText: a,
        spinner: s,
        onClose: l
    } = e;
    return (0, f.Tt)({ location: g.Z.Messages.OAUTH2_TITLE }), (0, r.jsxs)(r.Fragment, {
        children: [
            null != l ? (0, r.jsx)(c.ol, {
                onClick: l,
                className: S.closeButton
            }) : null,
            (0, r.jsxs)('div', {
                className: S.wrapper,
                children: [
                    s ? (0, r.jsx)(d.$, {}) : null,
                    (0, r.jsx)('div', { className: o()(S.header, i) }),
                    (0, r.jsx)(_.x, {
                        variant: 'text-md/normal',
                        className: S.text,
                        children: t
                    }),
                    null != n ? n : null,
                    a ? (0, r.jsx)(_.x, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        className: S.cta,
                        children: g.Z.Messages.OAUTH2_MESSAGE_CTA
                    }) : null
                ]
            })
        ]
    });
}
function N(e) {
    return (0, r.jsx)(A, {
        ...e,
        headerClassName: S.headerSuccess
    });
}
function v(e) {
    let {
            guild: t,
            application: n,
            ...a
        } = e, {onClose: o} = a, s = g.Z.Messages.AUTHORIZED_SUCCESS, l = i.useCallback(() => {
            if ((null == t ? void 0 : t.id) != null)
                (0, p.X)(null == t ? void 0 : t.id), null == o || o(), m.default.track(T.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: null == n ? void 0 : n.id,
                    guild_id: null == t ? void 0 : t.id
                });
        }, [
            o,
            null == n ? void 0 : n.id,
            null == t ? void 0 : t.id
        ]), u = i.useCallback(() => {
            null == o || o(), m.default.track(T.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, { application_id: null == n ? void 0 : n.id });
        }, [
            o,
            null == n ? void 0 : n.id
        ]), c = i.useMemo(() => {
            if (null != n)
                return null != t ? g.Z.Messages.AUTHORIZED_APP_TO_SERVER.format({
                    installedApplicationName: null == n ? void 0 : n.name,
                    guildName: null == t ? void 0 : t.name
                }) : g.Z.Messages.AUTHORIZED_APP.format({ installedApplicationName: null == n ? void 0 : n.name });
            return g.Z.Messages.AUTHORIZED_GENERIC;
        }, [
            n,
            t
        ]), d = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(_.x, {
                    variant: 'text-sm/normal',
                    className: S.authorizedSuccessSubtext,
                    children: c
                }),
                (null != t || null != o) && (0, r.jsxs)('div', {
                    className: S.buttonsContainer,
                    children: [
                        null != t && (0, r.jsx)(E.Button, {
                            fullWidth: !0,
                            color: E.Button.Colors.BRAND,
                            onClick: l,
                            className: S.button,
                            children: (null == t ? void 0 : t.name.length) > 30 ? g.Z.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : g.Z.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({ guildName: null == t ? void 0 : t.name })
                        }),
                        null != o && (0, r.jsx)(E.Button, {
                            fullWidth: !0,
                            color: E.Button.Colors.PRIMARY,
                            onClick: u,
                            className: S.button,
                            children: g.Z.Messages.CLOSE
                        })
                    ]
                })
            ]
        });
    return i.useEffect(() => {
        m.default.track(T.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, { application_id: null == n ? void 0 : n.id });
    }, [null == n ? void 0 : n.id]), (0, r.jsx)('div', {
        className: S.authorizedSuccessWrapper,
        children: (0, r.jsx)(N, {
            message: s,
            footer: d,
            ...a
        })
    });
}
function O(e) {
    return (0, r.jsx)(A, {
        ...e,
        headerClassName: S.headerFailure
    });
}
function R() {
    var e, t;
    let n = (0, l.TH)();
    return (0, r.jsx)(I.G, {
        children: (0, r.jsx)(v, {
            guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
            application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
            showsCloseWindowText: !0
        })
    });
}
function C(e) {
    var t, n;
    let {location: a} = e;
    i.useEffect(() => {
        if (null == a)
            return;
        let e = null != document.referrer && '' !== document.referrer ? u.parse(document.referrer) : null;
        (null == e || e.host !== window.location.host || e.pathname !== T.Z5c.OAUTH2_AUTHORIZE) && (0, h.uL)(T.Z5c.INDEX);
    }, [a]);
    let o = null != a ? (0, s.parse)(a.search) : {}, l = null !== (n = null !== (t = o.error_description) && void 0 !== t ? t : o.error) && void 0 !== n ? n : g.Z.Messages.OAUTH2_UNKNOWN_ERROR;
    return (0, r.jsx)(I.G, {
        children: (0, r.jsx)(O, {
            message: l,
            showsCloseWindowText: !0
        })
    });
}
