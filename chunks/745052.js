n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(91192),
    o = n(286379),
    c = n(442837),
    d = n(704215),
    u = n(481060),
    _ = n(150063),
    E = n(230711),
    h = n(112724),
    m = n(183126),
    I = n(607070),
    p = n(209613),
    g = n(325708),
    T = n(320149),
    f = n(82295),
    S = n(252618),
    C = n(605236),
    N = n(243778),
    A = n(984370),
    v = n(797614),
    Z = n(359110),
    L = n(6025),
    R = n(897473),
    O = n(108427),
    x = n(970731),
    b = n(187819),
    M = n(210887),
    P = n(433355),
    D = n(592125),
    y = n(819640),
    j = n(626135),
    U = n(647090),
    G = n(385956),
    w = n(610697),
    k = n(26373),
    B = n(486622),
    V = n(922409),
    H = n(899740),
    F = n(177033),
    Y = n(355350),
    z = n(307947),
    W = n(96479),
    K = n(480874),
    q = n(687683),
    Q = n(981631),
    X = n(921944),
    J = n(526761),
    $ = n(689938),
    ee = n(74965),
    et = n(784237);
function en() {
    let e = a.useRef(null),
        t = (0, H.q)(),
        n = (0, F.Z)(),
        s = (0, k.K)(),
        c = (0, m.N)(),
        d = a.useCallback(() => {
            (0, u.showToast)((0, u.createToast)($.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, u.ToastType.FAILURE));
        }, []),
        { rejectAll: _ } = (0, B.m)({ onError: d }),
        E = (0, p.Z)('message-requests-list'),
        { channelId: h } = (0, V._)(),
        I = a.useCallback(() => {
            _(n.map((e) => e.channel.id));
        }, [n, _]),
        g = a.useCallback(
            (e) => {
                var t, a;
                let { row: l } = e,
                    o = n[l],
                    c = null === (a = n[l + 1]) || void 0 === a ? void 0 : null === (t = a.channel) || void 0 === t ? void 0 : t.id,
                    d = o.channel.id;
                return (0, i.jsx)(
                    W.Z,
                    {
                        index: l,
                        className: r()({
                            [ee.selected]: null != h && h === d,
                            [ee.siblingSelected]: null != h && h === c
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: s
                    },
                    d
                );
            },
            [s, n, h]
        ),
        T = a.useCallback(
            () =>
                (0, i.jsxs)(
                    f.Z,
                    {
                        className: ee.sectionTitle,
                        children: [
                            t > 0 ? $.Z.Messages.MESSAGE_REQUESTS_PAGE_TITLE_WITH_COUNT.format({ count: t }) : $.Z.Messages.MESSAGE_REQUESTS_PAGE_TITLE,
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
                                              onClick: I,
                                              look: u.ButtonLooks.LINK,
                                              color: u.ButtonColors.LINK,
                                              size: u.ButtonSizes.NONE,
                                              className: ee.clearAllButton,
                                              'aria-label': $.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
                                              children: $.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'title'
                ),
            [t, I, c]
        );
    return (n.length !== t && v.Z.increment({ name: o.V.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, i.jsx)(z.Z, { section: q.pS.REQUESTS })
        : (0, i.jsx)(l.bG, {
              navigator: E,
              children: (0, i.jsx)(l.SJ, {
                  children: (t) => {
                      let { ref: a, role: s, ...r } = t;
                      return (0, i.jsx)(
                          u.List,
                          {
                              className: ee.list,
                              innerRole: s,
                              innerAriaLabel: $.Z.Messages.MESSAGE_REQUESTS,
                              ref: (t) => {
                                  var n;
                                  (e.current = t), (a.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: q.oi,
                              rowHeight: q.WN,
                              renderSection: T,
                              renderRow: g,
                              sections: [n.length],
                              chunkSize: 30,
                              fade: !0,
                              ...r
                          },
                          'message-requests-list'
                      );
                  }
              })
          });
}
function ei(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        a = (0, c.e7)([P.ZP], () => P.ZP.getSidebarState(P.uZ)),
        s = (0, c.e7)([D.Z], () => D.Z.getChannel(null == a ? void 0 : a.channelId));
    if (null == a || a.type !== R.tI.VIEW_MESSAGE_REQUEST || null == s || !s.isPrivate()) return null;
    let r = t - Q.R7I;
    return (0, i.jsx)(g.Z, {
        sidebarType: g.y.MessageRequestSidebar,
        maxWidth: r,
        onWidthChange: n,
        children: (0, i.jsx)(T.Z, {
            channel: s,
            baseChannelId: P.uZ
        })
    });
}
let ea = function (e) {
        let { markAsDismissed: t } = e;
        return (0, i.jsx)(x.ZP, {
            header: $.Z.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
            content: $.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
            buttonCTA: $.Z.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
            className: ee.messageRequestCoachmark,
            onClick: () => t(X.L.UNKNOWN),
            markAsDismissed: t,
            caretPosition: x.DF.TOP_CENTER,
            headerClassName: ee.__invalid_header
        });
    },
    es = (e) => {
        let t = (0, w.Z)(),
            n = () => y.Z.hasLayers() || (0, u.hasAnyModalOpen)(),
            s = (0, c.e7)([I.Z], () => I.Z.useReducedMotion),
            r = (0, b._p)({
                location: 'message-request-coachmark',
                autoTrackExposure: !1
            });
        return (
            a.useEffect(() => {
                (0, C.kk)(d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
            }, []),
            (0, i.jsx)(N.ZP, {
                contentTypes: [d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
                children: (a) => {
                    let { visibleContent: l, markAsDismissed: o } = a;
                    if (l === d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
                        return (0, i.jsx)(u.Popout, {
                            renderPopout: () =>
                                t
                                    ? (0, i.jsx)(ea, { markAsDismissed: o })
                                    : (0, i.jsx)(x.ZP, {
                                          header: $.Z.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
                                          content: $.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT,
                                          buttonCTA: $.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONFIRM,
                                          secondaryButtonCTA: $.Z.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
                                          className: ee.messageRequestCoachmark,
                                          onClick: (e) => {
                                              e.stopPropagation(), E.Z.open(Q.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: r ? J.to.MESSAGE_REQUESTS_V2 : J.to.MESSAGE_REQUESTS });
                                          },
                                          markAsDismissed: o,
                                          caretPosition: x.DF.TOP_CENTER,
                                          headerClassName: ee.__invalid_header
                                      }),
                            position: 'bottom',
                            align: 'center',
                            animation: s ? u.Popout.Animation.NONE : u.Popout.Animation.TRANSLATE,
                            shouldShow: !n(),
                            spacing: 16,
                            children: () => e.children
                        });
                    return e.children;
                }
            })
        );
    };
function er(e) {
    let { section: t } = e;
    return t === q.pS.SPAM ? (0, i.jsx)(K.Z, {}) : (0, i.jsx)(en, {});
}
let el = (0, h.Z)(function (e) {
    let { width: t } = e,
        n = (0, H.q)();
    a.useEffect(() => {
        _.Y(Q.Z5c.MESSAGE_REQUESTS), (0, O.e)('message-requests'), j.default.track(Q.rMx.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }), v.Z.increment({ name: o.V.MESSAGE_REQUEST_VIEW });
    }, []);
    let s = (0, c.e7)([M.Z], () => M.Z.theme),
        l = (0, Y.w)(),
        [d, E] = a.useState(!1),
        h = (0, c.e7)([P.ZP], () => {
            let e = P.ZP.getSidebarState(P.uZ);
            return null != e && e.type === R.tI.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = null == h ? void 0 : h.channelId,
        I = null != h,
        p = (0, G.T)(m),
        g = (0, U.J)(m);
    a.useEffect(() => {
        null != m && !p && g && I && ((0, Z.Kh)(m), L.Z.closeChannelSidebar(P.uZ));
    }, [m, g, I, p]);
    let [T, f] = a.useState(q.pS.REQUESTS),
        C = (e) => {
            f(e);
        };
    return (
        (0, S.Tt)({ location: $.Z.Messages.MESSAGE_REQUESTS }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: r()(et.chat, ee.container, {
                        [et.threadSidebarOpen]: I,
                        [et.threadSidebarFloating]: I && d
                    }),
                    children: [
                        (0, i.jsx)(u.ThemeProvider, {
                            theme: s,
                            children: (e) =>
                                (0, i.jsxs)(A.Z, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, i.jsx)(A.Z.Icon, {
                                            icon: u.EnvelopeIcon,
                                            'aria-hidden': !0
                                        }),
                                        (0, i.jsx)(es, { children: (0, i.jsx)(A.Z.Title, { children: $.Z.Messages.MESSAGE_REQUESTS }) }),
                                        (0, i.jsx)(A.Z.Divider, {}),
                                        (0, i.jsxs)(u.TabBar, {
                                            'aria-label': $.Z.Messages.MESSAGE_REQUESTS,
                                            selectedItem: T,
                                            type: 'top-pill',
                                            onItemSelect: C,
                                            className: ee.__invalid_tabBar,
                                            children: [
                                                (0, i.jsx)(u.TabBar.Item, {
                                                    id: q.pS.REQUESTS,
                                                    className: ee.__invalid_item,
                                                    children: $.Z.Messages.MESSAGE_REQUESTS_REQUESTS_TAB_TITLE
                                                }),
                                                (0, i.jsx)(u.TabBar.Item, {
                                                    id: q.pS.SPAM,
                                                    className: ee.__invalid_item,
                                                    children: 0 === l ? $.Z.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE : $.Z.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE_WITH_COUNT.format({ count: l })
                                                })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, i.jsx)('div', {
                            className: et.content,
                            children: (0, i.jsx)(er, { section: T })
                        })
                    ]
                }),
                I &&
                    (0, i.jsx)(ei, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            E(t);
                        }
                    })
            ]
        })
    );
});
t.Z = el;
