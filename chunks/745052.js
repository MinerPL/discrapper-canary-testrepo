n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(91192),
    o = n(286379),
    c = n(442837),
    d = n(704215),
    u = n(481060),
    h = n(150063),
    m = n(230711),
    p = n(112724),
    g = n(183126),
    f = n(607070),
    _ = n(209613),
    E = n(325708),
    I = n(320149),
    C = n(82295),
    v = n(252618),
    S = n(605236),
    N = n(243778),
    T = n(984370),
    x = n(797614),
    b = n(359110),
    A = n(6025),
    Z = n(897473),
    y = n(108427),
    L = n(970731),
    R = n(187819),
    P = n(210887),
    O = n(433355),
    j = n(592125),
    D = n(819640),
    M = n(626135),
    w = n(647090),
    k = n(385956),
    U = n(610697),
    G = n(26373),
    B = n(486622),
    H = n(922409),
    V = n(899740),
    F = n(177033),
    z = n(355350),
    Y = n(307947),
    W = n(96479),
    K = n(480874),
    q = n(687683),
    X = n(981631),
    Q = n(921944),
    J = n(526761),
    $ = n(388032),
    ee = n(74965),
    et = n(784237);
function en() {
    let e = r.useRef(null),
        t = (0, V.q)(),
        n = (0, F.Z)(),
        a = (0, G.K)(),
        c = (0, g.N)(),
        d = r.useCallback(() => {
            (0, u.showToast)((0, u.createToast)($.intl.string($.t.EDYbS0), u.ToastType.FAILURE));
        }, []),
        { rejectAll: h } = (0, B.m)({ onError: d }),
        m = (0, _.Z)('message-requests-list'),
        { channelId: p } = (0, H._)(),
        f = r.useCallback(() => {
            h(n.map((e) => e.channel.id));
        }, [n, h]),
        E = r.useCallback(
            (e) => {
                var t, r;
                let { row: s } = e,
                    o = n[s],
                    c = null === (r = n[s + 1]) || void 0 === r ? void 0 : null === (t = r.channel) || void 0 === t ? void 0 : t.id,
                    d = o.channel.id;
                return (0, i.jsx)(
                    W.Z,
                    {
                        index: s,
                        className: l()({
                            [ee.selected]: null != p && p === d,
                            [ee.siblingSelected]: null != p && p === c
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: a
                    },
                    d
                );
            },
            [a, n, p]
        ),
        I = r.useCallback(
            () =>
                (0, i.jsxs)(
                    C.Z,
                    {
                        className: ee.sectionTitle,
                        children: [
                            t > 0 ? $.intl.formatToPlainString($.t.rA4iWV, { count: t }) : $.intl.string($.t.flPU6u),
                            c && t > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.Text, {
                                              className: ee.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, i.jsx)(u.Button, {
                                              onClick: f,
                                              look: u.ButtonLooks.LINK,
                                              color: u.ButtonColors.LINK,
                                              size: u.ButtonSizes.NONE,
                                              className: ee.clearAllButton,
                                              'aria-label': $.intl.string($.t.p6t7RE),
                                              children: $.intl.string($.t.p6t7RE)
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'title'
                ),
            [t, f, c]
        );
    return (n.length !== t && x.Z.increment({ name: o.V.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, i.jsx)(Y.Z, { section: q.pS.REQUESTS })
        : (0, i.jsx)(s.bG, {
              navigator: m,
              children: (0, i.jsx)(s.SJ, {
                  children: (t) => {
                      let { ref: r, role: a, ...l } = t;
                      return (0, i.jsx)(
                          u.List,
                          {
                              className: ee.list,
                              innerRole: a,
                              innerAriaLabel: $.intl.string($.t.e7GWjY),
                              ref: (t) => {
                                  var n;
                                  (e.current = t), (r.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: q.oi,
                              rowHeight: q.WN,
                              renderSection: I,
                              renderRow: E,
                              sections: [n.length],
                              chunkSize: 30,
                              fade: !0,
                              ...l
                          },
                          'message-requests-list'
                      );
                  }
              })
          });
}
function ei(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        r = (0, c.e7)([O.ZP], () => O.ZP.getSidebarState(O.uZ)),
        a = (0, c.e7)([j.Z], () => j.Z.getChannel(null == r ? void 0 : r.channelId));
    if (null == r || r.type !== Z.tI.VIEW_MESSAGE_REQUEST || null == a || !a.isPrivate()) return null;
    let l = t - X.R7I;
    return (0, i.jsx)(E.Z, {
        sidebarType: E.y.MessageRequestSidebar,
        maxWidth: l,
        onWidthChange: n,
        children: (0, i.jsx)(I.Z, {
            channel: a,
            baseChannelId: O.uZ
        })
    });
}
let er = function (e) {
        let { markAsDismissed: t } = e;
        return (0, i.jsx)(L.ZP, {
            header: $.intl.string($.t.hRT8tb),
            content: $.intl.string($.t.apPgJC),
            buttonCTA: $.intl.string($.t.LNoAQU),
            className: ee.messageRequestCoachmark,
            onClick: () => t(Q.L.UNKNOWN),
            markAsDismissed: t,
            caretPosition: L.DF.TOP_CENTER,
            headerClassName: ee.__invalid_header
        });
    },
    ea = (e) => {
        let t = (0, U.Z)(),
            n = () => D.Z.hasLayers() || (0, u.hasAnyModalOpen)(),
            a = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
            l = (0, R._p)({ location: 'message-request-coachmark' });
        return (
            r.useEffect(() => {
                (0, S.kk)(d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
            }, []),
            (0, i.jsx)(N.ZP, {
                contentTypes: [d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
                children: (r) => {
                    let { visibleContent: s, markAsDismissed: o } = r;
                    if (s === d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
                        return (0, i.jsx)(u.Popout, {
                            renderPopout: () =>
                                t
                                    ? (0, i.jsx)(er, { markAsDismissed: o })
                                    : (0, i.jsx)(L.ZP, {
                                          header: $.intl.string($.t.hRT8tb),
                                          content: $.intl.string($.t['8JWodn']),
                                          buttonCTA: $.intl.string($.t.JN6EOD),
                                          secondaryButtonCTA: $.intl.string($.t.LNoAQU),
                                          className: ee.messageRequestCoachmark,
                                          onClick: (e) => {
                                              e.stopPropagation(), l ? m.Z.open(X.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: J.to.MESSAGE_REQUESTS_V2 }) : m.Z.open(X.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: J.to.MESSAGE_REQUESTS });
                                          },
                                          markAsDismissed: o,
                                          caretPosition: L.DF.TOP_CENTER,
                                          headerClassName: ee.__invalid_header
                                      }),
                            position: 'bottom',
                            align: 'center',
                            animation: a ? u.Popout.Animation.NONE : u.Popout.Animation.TRANSLATE,
                            shouldShow: !n(),
                            spacing: 16,
                            children: () => e.children
                        });
                    return e.children;
                }
            })
        );
    };
function el(e) {
    let { section: t } = e;
    return t === q.pS.SPAM ? (0, i.jsx)(K.Z, {}) : (0, i.jsx)(en, {});
}
let es = (0, p.Z)(function (e) {
    let { width: t } = e,
        n = (0, V.q)();
    r.useEffect(() => {
        h.Y(X.Z5c.MESSAGE_REQUESTS), (0, y.e)('message-requests'), M.default.track(X.rMx.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }), x.Z.increment({ name: o.V.MESSAGE_REQUEST_VIEW });
    }, []);
    let a = (0, c.e7)([P.Z], () => P.Z.theme),
        s = (0, z.w)(),
        [d, m] = r.useState(!1),
        p = (0, c.e7)([O.ZP], () => {
            let e = O.ZP.getSidebarState(O.uZ);
            return null != e && e.type === Z.tI.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        g = null == p ? void 0 : p.channelId,
        f = null != p,
        _ = (0, k.T)(g),
        E = (0, w.J)(g);
    r.useEffect(() => {
        null != g && !_ && E && f && ((0, b.Kh)(g), A.Z.closeChannelSidebar(O.uZ));
    }, [g, E, f, _]);
    let [I, C] = r.useState(q.pS.REQUESTS),
        S = (e) => {
            C(e);
        };
    return (
        (0, v.Tt)({ location: $.intl.string($.t.e7GWjY) }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: l()(et.chat, ee.container, {
                        [et.threadSidebarOpen]: f,
                        [et.threadSidebarFloating]: f && d
                    }),
                    children: [
                        (0, i.jsx)(u.ThemeProvider, {
                            theme: a,
                            children: (e) =>
                                (0, i.jsxs)(T.Z, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, i.jsx)(T.Z.Icon, {
                                            icon: u.EnvelopeIcon,
                                            'aria-hidden': !0
                                        }),
                                        (0, i.jsx)(ea, { children: (0, i.jsx)(T.Z.Title, { children: $.intl.string($.t.e7GWjY) }) }),
                                        (0, i.jsx)(T.Z.Divider, {}),
                                        (0, i.jsxs)(u.TabBar, {
                                            'aria-label': $.intl.string($.t.e7GWjY),
                                            selectedItem: I,
                                            type: 'top-pill',
                                            onItemSelect: S,
                                            className: ee.__invalid_tabBar,
                                            children: [
                                                (0, i.jsx)(u.TabBar.Item, {
                                                    id: q.pS.REQUESTS,
                                                    className: ee.__invalid_item,
                                                    children: $.intl.string($.t['7RFcXV'])
                                                }),
                                                (0, i.jsx)(u.TabBar.Item, {
                                                    id: q.pS.SPAM,
                                                    className: ee.__invalid_item,
                                                    children: 0 === s ? $.intl.string($.t.ulKXHh) : $.intl.formatToPlainString($.t['5jtrlZ'], { count: s })
                                                })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, i.jsx)('div', {
                            className: et.content,
                            children: (0, i.jsx)(el, { section: I })
                        })
                    ]
                }),
                f &&
                    (0, i.jsx)(ei, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            m(t);
                        }
                    })
            ]
        })
    );
});
t.Z = es;
