n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(91192),
    o = n(286379),
    c = n(481060),
    d = n(183126),
    u = n(209613),
    _ = n(82295),
    E = n(797614),
    h = n(626135),
    m = n(26373),
    I = n(486622),
    g = n(922409),
    p = n(727813),
    T = n(355350),
    S = n(307947),
    f = n(125855),
    C = n(687683),
    N = n(981631),
    A = n(689938),
    v = n(47892);
function Z() {
    let e = a.useRef(null),
        t = (0, p.Z)(),
        n = (0, T.w)(),
        s = (0, m.V)(),
        Z = (0, d.N)(),
        L = (0, u.Z)('message-requests-spam-list'),
        { channelId: O } = (0, g._)(),
        R = a.useCallback(() => {
            (0, c.showToast)((0, c.createToast)(A.Z.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, c.ToastType.FAILURE));
        }, []),
        { rejectAll: x } = (0, I.m)({ onError: R }),
        b = a.useCallback(() => {
            x(t.map((e) => e.channel.id));
        }, [t, x]);
    a.useEffect(() => {
        h.default.track(N.rMx.SPAM_MESSAGE_REQUESTS_VIEWED, { num_spam_message_requests: n }), E.Z.increment({ name: o.V.SPAM_MESSAGE_REQUEST_VIEW });
    }, []);
    let P = a.useCallback(
            (e) => {
                var n, a;
                let { row: l } = e,
                    o = t[l],
                    c = null === (a = t[l + 1]) || void 0 === a ? void 0 : null === (n = a.channel) || void 0 === n ? void 0 : n.id,
                    d = o.channel.id;
                return (0, i.jsx)(
                    f.Z,
                    {
                        index: l,
                        className: r()({
                            [v.selected]: null != O && O === d,
                            [v.siblingSelected]: null != O && O === c
                        }),
                        channel: o.channel,
                        user: o.user,
                        hasSingleMessageRequest: s
                    },
                    d
                );
            },
            [t, s, O]
        ),
        M = a.useCallback(
            () =>
                (0, i.jsxs)(
                    _.Z,
                    {
                        className: v.sectionTitle,
                        children: [
                            A.Z.Messages.MESSAGE_REQUESTS_SPAM_HEADER.format({ count: n }),
                            Z && n > 0
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(c.Text, {
                                              className: v.titleDivider,
                                              variant: 'eyebrow',
                                              color: 'header-secondary',
                                              tag: 'span',
                                              children: '\u2022'
                                          }),
                                          (0, i.jsx)(c.Button, {
                                              onClick: b,
                                              look: c.ButtonLooks.LINK,
                                              color: c.ButtonColors.LINK,
                                              size: c.ButtonSizes.SMALL,
                                              className: v.clearAllButton,
                                              'aria-label': A.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
                                              children: A.Z.Messages.MESSAGE_REQUESTS_CLEAR_ALL
                                          })
                                      ]
                                  })
                                : null
                        ]
                    },
                    'message-requests-spam-title'
                ),
            [n, b, Z]
        );
    return 0 === t.length
        ? (0, i.jsx)(S.Z, { section: C.pS.SPAM })
        : (0, i.jsx)(l.bG, {
              navigator: L,
              children: (0, i.jsx)(l.SJ, {
                  children: (n) => {
                      let { ref: a, role: s, ...r } = n;
                      return (0, i.jsx)(
                          c.List,
                          {
                              className: v.list,
                              innerRole: s,
                              innerAriaLabel: A.Z.Messages.MESSAGE_REQUESTS,
                              ref: (t) => {
                                  var n;
                                  (e.current = t), (a.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null);
                              },
                              paddingTop: 24,
                              paddingBottom: 24,
                              sectionHeight: C.oi,
                              rowHeight: C.WN,
                              renderSection: M,
                              renderRow: P,
                              sections: [t.length],
                              chunkSize: 30,
                              fade: !0,
                              ...r
                          },
                          'message-requests-spam-list'
                      );
                  }
              })
          });
}
