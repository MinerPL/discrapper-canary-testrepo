n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
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
    T = n(792125),
    N = n(51144),
    v = n(566620),
    S = n(317381),
    Z = n(619915),
    A = n(988980),
    M = n(952561),
    b = n(563218),
    R = n(884338),
    j = n(719296),
    L = n(651612),
    P = n(918559),
    O = n(981631),
    y = n(689938),
    D = n(402137);
let k = R.u.SIZE_32,
    U = {
        [P.MI.NO_CHAT]: D.noChat,
        [P.MI.RESIZABLE]: D.resizable
    };
function w(e) {
    var t, n;
    let { maxHeight: s, connectedChannelId: w, renderExternalHeader: B } = e,
        H = (0, M.Z)(),
        G = (0, r.Wu)([S.ZP], () => (null != w ? S.ZP.getEmbeddedActivitiesForChannel(w) : []), [w]),
        V = (0, r.e7)([E.Z], () => E.Z.getChannel(w)),
        F = (0, Z.gb)(G),
        W = (0, Z.uF)(F),
        z = a.useCallback(() => {
            (0, v.tg)(P.Ez.PIP);
        }, []),
        Y = a.useRef(null),
        K = (0, r.e7)([S.ZP], () => S.ZP.getFocusedLayout()),
        q = K !== P.MI.NO_CHAT,
        [X, Q] = a.useState(null !== (t = p.ZP.activityPanelHeight) && void 0 !== t ? t : s),
        J = a.useCallback((e) => {
            u.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        $ = a.useRef(null),
        [ee, et] = a.useState({
            width: 0,
            height: 0
        });
    a.useLayoutEffect(() => {
        if (null == $.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, i;
            et({
                width: null !== (n = null === (e = $.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0,
                height: null !== (i = null === (t = $.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== i ? i : 0
            });
        });
        return e.observe($.current), () => e.disconnect();
    }, []);
    let en = ee.width / Math.max(ee.height, 1) < P.I0,
        ei = 0,
        ea = 0,
        es = (0, A.Z)(null == H ? void 0 : H.id);
    if (!es) {
        let e = ee.width,
            t = ee.height;
        en ? ((t = ee.width / P.I0) > ee.height && (e = (t = ee.height) * P.I0), (ea = (ee.height - t) / 2)) : ((e = Math.min(ee.height * P.I0)) > ee.width && (t = (e = ee.width) / P.I0), (ei = (ee.width - e) / 2));
    }
    let el = W.get(null !== (n = null == H ? void 0 : H.id) && void 0 !== n ? n : ''),
        er = (0, r.e7)([C.Z], () => C.Z.getChannelId()),
        eo = (0, r.Wu)(
            [g.ZP],
            () => {
                var e;
                return null == V ? [] : Array.from(null !== (e = null == el ? void 0 : el.embeddedActivity.userIds) && void 0 !== e ? e : []).map((e) => g.ZP.getMember(V.guild_id, e));
            },
            [el, V]
        ),
        ec = a.useMemo(() => {
            let e = new Map();
            return (
                eo.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [eo]),
        eu = (function (e, t, n) {
            let i = (0, d.Z)(e),
                s = e !== i,
                [l, r] = a.useState(!1);
            a.useEffect(() => {
                r(!0);
                let e = setTimeout(() => r(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !h.Z.useReducedMotion && (s || l);
            return a.useMemo(() => {
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
        })(q, X, s);
    if (null == H) return null;
    let ed = [];
    null != el &&
        (ed = Array.from(el.embeddedActivity.userIds)
            .map((e) => I.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let eh = (e, t) => {
        var n;
        if (null == e || void 0 === e || void 0 === t) return null;
        let a = ec.get(e.id),
            s = null !== (n = null == a ? void 0 : a.nick) && void 0 !== n ? n : N.ZP.getName(e);
        return (0, i.jsx)(
            c.TooltipContainer,
            {
                text: s,
                position: 'bottom',
                children: (0, i.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(t.guild_id, k),
                        alt: s,
                        className: D.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, i.jsxs)('div', {
        className: l()(D.wrapper, U[K], (0, T.Q)(O.BRd.DARK)),
        ref: Y,
        style: eu,
        children: [
            null == B ? void 0 : B(),
            (0, i.jsxs)('div', {
                className: D.activityPanelContainer,
                children: [
                    q
                        ? null
                        : (0, i.jsx)('div', {
                              className: D.header,
                              children: (0, i.jsx)(o.x, {
                                  color: 'header-primary',
                                  variant: 'text-md/semibold',
                                  className: D.headerTitle,
                                  children: null == H ? void 0 : H.name
                              })
                          }),
                    (0, i.jsx)('div', {
                        className: l()(D.activityContainer, { [D.activityContainerNoMargin]: es }),
                        style: {
                            paddingLeft: ei,
                            paddingRight: ei,
                            paddingTop: ea,
                            paddingBottom: ea
                        },
                        ref: $,
                        children: (0, i.jsx)(b.Z, {
                            className: D.iframe,
                            embedId: (0, j.Z)(w, H.id)
                        })
                    }),
                    null != er
                        ? (0, i.jsxs)('div', {
                              className: D.footer,
                              children: [
                                  (0, i.jsx)(R.Z, {
                                      renderIcon: !1,
                                      users: ed,
                                      size: k,
                                      max: 6,
                                      className: D.userAvatars,
                                      renderUser: (e) => eh(e, V)
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: D.footerButtons,
                                      children: [
                                          (0, i.jsx)(L.Z, {
                                              channelId: er,
                                              className: D.circularButton
                                          }),
                                          (0, i.jsx)('div', {
                                              className: D.leaveButtonContainer,
                                              children: (0, i.jsx)(f.Z, {
                                                  applicationId: H.id,
                                                  channelId: w,
                                                  centerButton: !0,
                                                  color: 'red',
                                                  className: D.leaveActivityButton
                                              })
                                          }),
                                          (0, i.jsx)(_.d, {
                                              label: y.Z.Messages.EMBEDDED_ACTIVITIES_MINIMIZE_A11Y_LABEL,
                                              onClick: z,
                                              iconComponent: c.MinimizeIcon,
                                              themeable: !0,
                                              className: D.circularButton
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)('div', { className: D.flex })
                              ]
                          })
                        : null
                ]
            }),
            q
                ? (0, i.jsx)(m.Z, {
                      minHeight: 480,
                      maxHeight: s,
                      resizableNode: Y,
                      onResize: (e) => {
                          x.S.dispatch(O.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), Q(e);
                      },
                      onResizeEnd: (e) => {
                          x.S.dispatch(O.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), J(e);
                      }
                  })
                : null
        ]
    });
}
