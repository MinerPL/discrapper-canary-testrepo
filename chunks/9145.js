n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(993365),
    c = n(481060),
    u = n(153867),
    d = n(110924),
    h = n(607070),
    m = n(900211),
    p = n(740492),
    _ = n(871499),
    f = n(402113),
    E = n(592125),
    g = n(271383),
    C = n(944486),
    I = n(594174),
    x = n(585483),
    T = n(51144),
    v = n(566620),
    S = n(317381),
    N = n(619915),
    A = n(988980),
    Z = n(952561),
    M = n(563218),
    b = n(884338),
    R = n(719296),
    L = n(651612),
    j = n(918559),
    P = n(981631),
    O = n(689938),
    y = n(402137);
let D = b.u.SIZE_32,
    k = {
        [j.MI.NO_CHAT]: y.noChat,
        [j.MI.RESIZABLE]: y.resizable
    };
function U(e) {
    var t, n;
    let { maxHeight: a, connectedChannelId: U, renderExternalHeader: w } = e,
        B = (0, Z.Z)(),
        H = (0, r.Wu)([S.ZP], () => (null != U ? S.ZP.getEmbeddedActivitiesForChannel(U) : []), [U]),
        G = (0, r.e7)([E.Z], () => E.Z.getChannel(U)),
        V = (0, N.gb)(H),
        F = (0, N.uF)(V),
        W = s.useCallback(() => {
            (0, v.tg)(j.Ez.PIP);
        }, []),
        z = s.useRef(null),
        Y = (0, r.e7)([S.ZP], () => S.ZP.getFocusedLayout()),
        K = Y !== j.MI.NO_CHAT,
        [q, X] = s.useState(null !== (t = p.ZP.activityPanelHeight) && void 0 !== t ? t : a),
        Q = s.useCallback((e) => {
            u.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        J = s.useRef(null),
        [$, ee] = s.useState({
            width: 0,
            height: 0
        });
    s.useLayoutEffect(() => {
        if (null == J.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, i;
            ee({
                width: null !== (n = null === (e = J.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0,
                height: null !== (i = null === (t = J.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== i ? i : 0
            });
        });
        return e.observe(J.current), () => e.disconnect();
    }, []);
    let et = $.width / Math.max($.height, 1) < j.I0,
        en = 0,
        ei = 0,
        es = (0, A.Z)(null == B ? void 0 : B.id);
    if (!es) {
        let e = $.width,
            t = $.height;
        et ? ((t = $.width / j.I0) > $.height && (e = (t = $.height) * j.I0), (ei = ($.height - t) / 2)) : ((e = Math.min($.height * j.I0)) > $.width && (t = (e = $.width) / j.I0), (en = ($.width - e) / 2));
    }
    let ea = F.get(null !== (n = null == B ? void 0 : B.id) && void 0 !== n ? n : ''),
        el = (0, r.e7)([C.Z], () => C.Z.getChannelId()),
        er = (0, r.Wu)(
            [g.ZP],
            () => {
                var e;
                return null == G ? [] : Array.from(null !== (e = null == ea ? void 0 : ea.embeddedActivity.userIds) && void 0 !== e ? e : []).map((e) => g.ZP.getMember(G.guild_id, e));
            },
            [ea, G]
        ),
        eo = s.useMemo(() => {
            let e = new Map();
            return (
                er.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [er]),
        ec = (function (e, t, n) {
            let i = (0, d.Z)(e),
                a = e !== i,
                [l, r] = s.useState(!1);
            s.useEffect(() => {
                r(!0);
                let e = setTimeout(() => r(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !h.Z.useReducedMotion && (a || l);
            return s.useMemo(() => {
                let i = o
                    ? {
                          transitionProperty: 'height, max-height',
                          transitionDuration: ''.concat(50, 'ms'),
                          transitionTimingFunction: 'ease-in-out'
                      }
                    : void 0;
                return e && null != t
                    ? {
                          ...i,
                          minHeight: 200,
                          maxHeight: n,
                          height: t
                      }
                    : i;
            }, [o, e, n, t]);
        })(K, q, a);
    if (null == B) return null;
    let eu = [];
    null != ea &&
        (eu = Array.from(ea.embeddedActivity.userIds)
            .map((e) => I.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ed = (e, t) => {
        var n;
        if (null == e || void 0 === e || void 0 === t) return null;
        let s = eo.get(e.id),
            a = null !== (n = null == s ? void 0 : s.nick) && void 0 !== n ? n : T.ZP.getName(e);
        return (0, i.jsx)(
            c.TooltipContainer,
            {
                text: a,
                position: 'bottom',
                children: (0, i.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(t.guild_id, D),
                        alt: a,
                        className: y.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, i.jsx)(c.ThemeProvider, {
        theme: P.BRd.DARK,
        children: (e) =>
            (0, i.jsxs)('div', {
                className: l()(y.wrapper, k[Y], e),
                ref: z,
                style: ec,
                children: [
                    null == w ? void 0 : w(),
                    (0, i.jsxs)('div', {
                        className: y.activityPanelContainer,
                        children: [
                            K
                                ? null
                                : (0, i.jsx)('div', {
                                      className: y.header,
                                      children: (0, i.jsx)(o.x, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          className: y.headerTitle,
                                          children: null == B ? void 0 : B.name
                                      })
                                  }),
                            (0, i.jsx)('div', {
                                className: l()(y.activityContainer, { [y.activityContainerNoMargin]: es }),
                                style: {
                                    paddingLeft: en,
                                    paddingRight: en,
                                    paddingTop: ei,
                                    paddingBottom: ei
                                },
                                ref: J,
                                children: (0, i.jsx)(M.Z, {
                                    className: y.iframe,
                                    embedId: (0, R.Z)(U, B.id)
                                })
                            }),
                            null != el
                                ? (0, i.jsxs)('div', {
                                      className: y.footer,
                                      children: [
                                          (0, i.jsx)(b.Z, {
                                              renderIcon: !1,
                                              users: eu,
                                              size: D,
                                              max: 6,
                                              className: y.userAvatars,
                                              renderUser: (e) => ed(e, G)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: y.footerButtons,
                                              children: [
                                                  (0, i.jsx)(L.Z, {
                                                      channelId: el,
                                                      className: y.circularButton
                                                  }),
                                                  (0, i.jsx)('div', {
                                                      className: y.leaveButtonContainer,
                                                      children: (0, i.jsx)(f.Z, {
                                                          applicationId: B.id,
                                                          channelId: U,
                                                          centerButton: !0,
                                                          color: 'red',
                                                          className: y.leaveActivityButton
                                                      })
                                                  }),
                                                  (0, i.jsx)(_.d, {
                                                      label: O.Z.Messages.EMBEDDED_ACTIVITIES_MINIMIZE_A11Y_LABEL,
                                                      onClick: W,
                                                      iconComponent: c.MinimizeIcon,
                                                      themeable: !0,
                                                      className: y.circularButton
                                                  })
                                              ]
                                          }),
                                          (0, i.jsx)('div', { className: y.flex })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    K
                        ? (0, i.jsx)(m.Z, {
                              minHeight: 480,
                              maxHeight: a,
                              resizableNode: z,
                              onResize: (e) => {
                                  x.S.dispatch(P.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), X(e);
                              },
                              onResizeEnd: (e) => {
                                  x.S.dispatch(P.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), Q(e);
                              }
                          })
                        : null
                ]
            })
    });
}
