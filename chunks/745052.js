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
    E = n(45114),
    h = n(230711),
    m = n(112724),
    I = n(183126),
    g = n(607070),
    p = n(209613),
    T = n(325708),
    S = n(320149),
    C = n(82295),
    f = n(252618),
    N = n(605236),
    A = n(243778),
    v = n(984370),
    L = n(797614),
    Z = n(359110),
    R = n(6025),
    O = n(897473),
    x = n(108427),
    b = n(970731),
    P = n(210887),
    M = n(433355),
    D = n(592125),
    y = n(819640),
    j = n(626135),
    U = n(879041),
    G = n(647090),
    w = n(385956),
    k = n(610697),
    B = n(26373),
    H = n(486622),
    V = n(922409),
    F = n(899740),
    Y = n(177033),
    W = n(355350),
    z = n(307947),
    K = n(96479),
    q = n(480874),
    Q = n(687683),
    X = n(981631),
    J = n(921944),
    $ = n(526761),
    ee = n(689938),
    et = n(23947),
    en = n(625032);
function ei() {
    let e = a.useRef(null),
        t = (0, F.q)(),
        n = (0, Y.Z)(),
        s = (0, B.K)(),
        c = (0, I.N)(),
        d = n.length > 0 ? (null == n ? void 0 : n[0].channel.id) : null,
        _ = (0, U.e)({ location: 'message-request-page-web' });
    a.useEffect(() => {
        if (!!_ && null != d) (0, E.ES)(d);
    }, [d, _]);
    let h = a.useCallback(() => {
            (0, u.showToast)((0, u.createToast)(ee.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, u.ToastType.FAILURE));
        }, []),
        { rejectAll: m } = (0, H.m)({ onError: h }),
        g = (0, p.Z)('message-requests-list'),
        { channelId: T } = (0, V._)(),
        S = a.useCallback(() => {
            m(n.map((e) => e.channel.id));
        }, [n, m]),
        f = a.useCallback(
            (e) => {
                var t, a;
                let { row: l } = e,
                    o = n[l],
                    c = null === (a = n[l + 1]) || void 0 === a ? void 0 : null === (t = a.channel) || void 0 === t ? void 0 : t.id,
                    d = o.channel.id;
                return (0, i.jsx)(
                    K.Z,
                    {
                        index: l,
                        className: r()({
                            [et.selected]: null != T && T === d,
                            [et.siblingSelected]: null != T && T === c
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: s
                    },
                    d
                );
            },
            [s, n, T]
        ),
        N = a.useCallback(
            () =>
                (0, i.jsxs)(
                    C.Z,
                    {
                        className: et.sectionTitle,
                        children: [
                            t > 0 ? ee.Z.Messages.MESSAGE_REQUESTS_PAGE_TITLE_WITH_COUNT.format({ count: t }) : ee.Z.Messages.MESSAGE_REQUESTS_PAGE_TITLE,
                            c && t > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(u.Text, {
                                              className: et.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, i.jsx)(u.Button, {
                                              onClick: S,
                                              look: u.ButtonLooks.LINK,
                                              color: u.ButtonColors.LINK,
                                              size: u.ButtonSizes.SMALL,
                                              className: et.clearAllButton,
                                              'aria-label': ee.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
                                              children: ee.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'title'
                ),
            [t, S, c]
        );
    return (n.length !== t && L.Z.increment({ name: o.V.MESSAGE_REQUEST_COUNT_DRIFT }), 0 === n.length)
        ? (0, i.jsx)(z.Z, { section: Q.pS.REQUESTS })
        : (0, i.jsx)(l.bG, {
              navigator: g,
              children: (0, i.jsx)(l.SJ, {
                  children: (t) => {
                      let { ref: a, role: s, ...r } = t;
                      return (0, i.jsx)(
                          u.List,
                          {
                              className: et.list,
                              innerRole: s,
                              innerAriaLabel: ee.Z.Messages.MESSAGE_REQUESTS,
                              ref: (t) => {
                                  var n;
                                  (e.current = t), (a.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: Q.oi,
                              rowHeight: Q.WN,
                              renderSection: N,
                              renderRow: f,
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
function ea(e) {
    let { pageWidth: t, onSidebarResize: n } = e,
        a = (0, c.e7)([M.ZP], () => M.ZP.getSidebarState(M.uZ)),
        s = (0, c.e7)([D.Z], () => D.Z.getChannel(null == a ? void 0 : a.channelId));
    if (null == a || a.type !== O.tI.VIEW_MESSAGE_REQUEST || null == s || !s.isPrivate()) return null;
    let r = t - X.R7I;
    return (0, i.jsx)(T.Z, {
        sidebarType: T.y.MessageRequestSidebar,
        maxWidth: r,
        onWidthChange: n,
        children: (0, i.jsx)(S.Z, {
            channel: s,
            baseChannelId: M.uZ
        })
    });
}
let es = function (e) {
        let { markAsDismissed: t } = e;
        return (0, i.jsx)(b.ZP, {
            header: ee.Z.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
            content: ee.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
            buttonCTA: ee.Z.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
            className: et.messageRequestCoachmark,
            onClick: () => t(J.L.UNKNOWN),
            markAsDismissed: t,
            caretPosition: b.DF.TOP_CENTER,
            headerClassName: et.__invalid_header
        });
    },
    er = (e) => {
        let t = (0, k.Z)(),
            n = () => y.Z.hasLayers() || (0, u.hasAnyModalOpen)(),
            s = (0, c.e7)([g.Z], () => g.Z.useReducedMotion);
        return (
            a.useEffect(() => {
                (0, N.kk)(d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK);
            }, []),
            (0, i.jsx)(A.ZP, {
                contentTypes: [d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
                children: (a) => {
                    let { visibleContent: r, markAsDismissed: l } = a;
                    if (r === d.z.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
                        return (0, i.jsx)(u.Popout, {
                            renderPopout: () =>
                                t
                                    ? (0, i.jsx)(es, { markAsDismissed: l })
                                    : (0, i.jsx)(b.ZP, {
                                          header: ee.Z.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
                                          content: ee.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT,
                                          buttonCTA: ee.Z.Messages.MESSAGE_REQUESTS_COACHMARK_CONFIRM,
                                          secondaryButtonCTA: ee.Z.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
                                          className: et.messageRequestCoachmark,
                                          onClick: (e) => {
                                              e.stopPropagation(), h.Z.open(X.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: $.to.MESSAGE_REQUESTS });
                                          },
                                          markAsDismissed: l,
                                          caretPosition: b.DF.TOP_CENTER,
                                          headerClassName: et.__invalid_header
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
function el(e) {
    let { section: t } = e;
    return t === Q.pS.SPAM ? (0, i.jsx)(q.Z, {}) : (0, i.jsx)(ei, {});
}
let eo = (0, m.Z)(function (e) {
    let { width: t } = e,
        n = (0, F.q)();
    a.useEffect(() => {
        _.Y(X.Z5c.MESSAGE_REQUESTS), (0, x.e)('message-requests'), j.default.track(X.rMx.MESSAGE_REQUESTS_VIEWED, { num_message_requests: n }), L.Z.increment({ name: o.V.MESSAGE_REQUEST_VIEW });
    }, []);
    let s = (0, c.e7)([P.Z], () => P.Z.theme),
        l = (0, W.w)(),
        [d, E] = a.useState(!1),
        h = (0, c.e7)([M.ZP], () => {
            let e = M.ZP.getSidebarState(M.uZ);
            return null != e && e.type === O.tI.VIEW_MESSAGE_REQUEST ? e : null;
        }),
        m = null == h ? void 0 : h.channelId,
        I = null != h,
        g = (0, w.T)(m),
        p = (0, G.J)(m);
    a.useEffect(() => {
        null != m && !g && p && I && ((0, Z.Kh)(m), R.Z.closeChannelSidebar(M.uZ));
    }, [m, p, I, g]);
    let [T, S] = a.useState(Q.pS.REQUESTS),
        C = (e) => {
            S(e);
        };
    return (
        (0, f.Tt)({ location: ee.Z.Messages.MESSAGE_REQUESTS }),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: r()(en.chat, et.container, {
                        [en.threadSidebarOpen]: I,
                        [en.threadSidebarFloating]: I && d
                    }),
                    children: [
                        (0, i.jsx)(u.ThemeProvider, {
                            theme: s,
                            children: (e) =>
                                (0, i.jsxs)(v.Z, {
                                    className: e,
                                    toolbar: !0,
                                    children: [
                                        (0, i.jsx)(v.Z.Icon, {
                                            icon: u.EnvelopeIcon,
                                            'aria-hidden': !0
                                        }),
                                        (0, i.jsx)(er, { children: (0, i.jsx)(v.Z.Title, { children: ee.Z.Messages.MESSAGE_REQUESTS }) }),
                                        (0, i.jsx)(v.Z.Divider, {}),
                                        (0, i.jsxs)(u.TabBar, {
                                            'aria-label': ee.Z.Messages.MESSAGE_REQUESTS,
                                            selectedItem: T,
                                            type: 'top-pill',
                                            onItemSelect: C,
                                            className: et.__invalid_tabBar,
                                            children: [
                                                (0, i.jsx)(u.TabBar.Item, {
                                                    id: Q.pS.REQUESTS,
                                                    className: et.__invalid_item,
                                                    children: ee.Z.Messages.MESSAGE_REQUESTS_REQUESTS_TAB_TITLE
                                                }),
                                                (0, i.jsx)(u.TabBar.Item, {
                                                    id: Q.pS.SPAM,
                                                    className: et.__invalid_item,
                                                    children: 0 === l ? ee.Z.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE : ee.Z.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE_WITH_COUNT.format({ count: l })
                                                })
                                            ]
                                        })
                                    ]
                                })
                        }),
                        (0, i.jsx)('div', {
                            className: en.content,
                            children: (0, i.jsx)(el, { section: T })
                        })
                    ]
                }),
                I &&
                    (0, i.jsx)(ea, {
                        pageWidth: t,
                        onSidebarResize: (e, t) => {
                            E(t);
                        }
                    })
            ]
        })
    );
});
t.Z = eo;
