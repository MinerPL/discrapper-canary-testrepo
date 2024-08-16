n.d(t, {
    Z: function () {
        return j;
    },
    _: function () {
        return M;
    }
}),
    n(47120);
var a = n(735250),
    s = n(470079),
    r = n(512722),
    l = n.n(r),
    i = n(338545),
    o = n(442837),
    c = n(481060),
    d = n(53281),
    u = n(607070),
    m = n(541716),
    h = n(859235),
    _ = n(898463),
    g = n(592125),
    x = n(703558),
    f = n(117530),
    C = n(585483),
    p = n(127654),
    T = n(228392),
    I = n(981631),
    E = n(374443);
let N = {
        scale: 0.95,
        opacity: 0
    },
    b = {
        scale: 1,
        opacity: 1
    },
    v = {
        scale: 1,
        opacity: 1
    },
    S = {
        tension: 2400,
        friction: 52
    };
function M(e) {
    let { channelId: t, onClick: n, onClose: r, onMouseEnter: i } = e,
        u = s.useRef(null),
        m = (0, o.e7)([g.Z], () => g.Z.getChannel(t), [t]);
    return (
        l()(null != m, 'Forum Channel is null'),
        (0, a.jsxs)(c.Clickable, {
            className: E.uploadInput,
            onMouseEnter: i,
            onClick: () => {
                (0, T.N3)({ isMobile: !1 }), null == n || n();
            },
            onKeyPress: (e) => {
                if ('Enter' === e.key) {
                    var t;
                    null === (t = u.current) || void 0 === t || t.activateUploadDialogue(), (0, T.N3)({ isMobile: !1 });
                }
            },
            children: [
                (0, a.jsx)(d.Z, {
                    className: E.fileInput,
                    ref: u,
                    onChange: (e) => {
                        null == r || r(), (0, p.d)(e.currentTarget.files, m, x.d.FirstThreadMessage, { requireConfirm: !0 }), C.S.dispatch(I.CkL.TEXTAREA_FOCUS), (e.currentTarget.value = null);
                    },
                    multiple: m.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                }),
                (0, a.jsx)(c.ImagePlusIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 28,
                    height: 28,
                    className: E.uploadIcon
                })
            ]
        })
    );
}
function A(e) {
    let { channelId: t, closePopout: n } = e,
        [r, l] = s.useState(!1),
        { reducedMotion: d } = s.useContext(c.AccessibilityPreferencesContext),
        g = (0, c.useSpring)(
            {
                from: d.enabled ? b : N,
                to: v,
                config: S
            },
            'animate-always'
        ),
        x = (0, o.e7)([u.Z], () => u.Z.keyboardModeEnabled),
        C = (0, o.e7)([f.Z], () => f.Z.getUploads(t, m.I.CREATE_FORUM_POST.drafts.type));
    return (0, a.jsx)(i.animated.div, {
        className: E.popoutContainer,
        onMouseLeave: () => {
            !r && n();
        },
        style: g,
        children: (0, a.jsxs)(c.ScrollerThin, {
            orientation: 'horizontal',
            className: E.popout,
            paddingFix: !1,
            fade: !0,
            children: [
                (0, a.jsx)(M, {
                    channelId: t,
                    onClick: () => {
                        l(!0);
                    },
                    onClose: () => {
                        l(!1), n();
                    }
                }),
                (0, a.jsx)('div', {
                    className: E.uploads,
                    children: C.map((e) =>
                        (0, a.jsx)(
                            _.Z,
                            {
                                channelId: t,
                                draftType: m.I.CREATE_FORUM_POST.drafts.type,
                                upload: e,
                                keyboardModeEnabled: x,
                                hideFileName: !0,
                                size: h.q.SMALL
                            },
                            e.id
                        )
                    )
                })
            ]
        })
    });
}
function j(e) {
    let { channelId: t } = e,
        [n, r] = s.useState(!1),
        l = (0, o.e7)([f.Z], () => f.Z.getUploads(t, m.I.CREATE_FORUM_POST.drafts.type)),
        i = l.length,
        c = i > 0;
    s.useEffect(() => {
        n && !c && r(!1);
    }, [n, c]);
    let d = () => {
        c && r(!0);
    };
    return (0, a.jsxs)('div', {
        className: E.container,
        children: [
            c
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(_.r, {
                              upload: l[0],
                              size: h.q.SMALL,
                              onMouseEnter: d
                          }),
                          !n &&
                              (0, a.jsx)('div', {
                                  className: E.badge,
                                  children: i
                              })
                      ]
                  })
                : (0, a.jsx)(M, {
                      onMouseEnter: d,
                      channelId: t
                  }),
            n &&
                (0, a.jsx)(A, {
                    channelId: t,
                    closePopout: () => {
                        r(!1);
                    }
                })
        ]
    });
}
