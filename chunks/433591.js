"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("355262"),
  o = n("432710"),
  u = n("77078"),
  d = n("74456"),
  c = n("302437"),
  f = n("155084"),
  E = n("826684"),
  h = n("599110"),
  _ = n("803524"),
  C = n("7643"),
  S = n("785770"),
  I = n("521702"),
  m = n("452229"),
  p = n("196986"),
  T = n("92918"),
  g = n("973199"),
  A = n("49111"),
  N = n("782340"),
  R = n("451482");

function O() {
  let e = s.useRef(null),
    t = (0, I.default)(),
    n = (0, m.useSpamMessageRequestCount)(),
    l = (0, _.useListHasSingleSpamMessageRequest)(),
    O = (0, d.useIsRejectAllMessageRequestsEnabled)(),
    v = (0, c.default)("message-requests-spam-list"),
    {
      channelId: L
    } = (0, S.useMessageRequestSidebarState)(),
    M = s.useCallback(() => {
      (0, u.showToast)((0, u.createToast)(N.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, u.ToastType.FAILURE))
    }, []),
    {
      rejectAll: P
    } = (0, C.useMessageRequestActions)({
      onError: M
    }),
    y = s.useCallback(() => {
      let e = t.map(e => e.channel.id);
      P(e)
    }, [t, P]);
  s.useEffect(() => {
    h.default.track(A.AnalyticEvents.SPAM_MESSAGE_REQUESTS_VIEWED, {
      num_spam_message_requests: n
    }), f.default.increment({
      name: o.MetricEvents.SPAM_MESSAGE_REQUEST_VIEW
    })
  }, []);
  let D = s.useCallback(e => {
      var n, s;
      let {
        row: r
      } = e, o = t[r], u = null === (s = t[r + 1]) || void 0 === s ? void 0 : null === (n = s.channel) || void 0 === n ? void 0 : n.id, d = o.channel.id;
      return (0, a.jsx)(T.default, {
        index: r,
        className: i({
          [R.selected]: null != L && L === d,
          [R.siblingSelected]: null != L && L === u
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, d)
    }, [t, l, L]),
    x = s.useCallback(() => (0, a.jsxs)(E.default, {
      className: R.sectionTitle,
      children: [N.default.Messages.MESSAGE_REQUESTS_SPAM_HEADER.format({
        count: n
      }), O && n > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.Text, {
          className: R.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, a.jsx)(u.Button, {
          onClick: y,
          look: u.ButtonLooks.LINK,
          color: u.ButtonColors.LINK,
          size: u.ButtonSizes.SMALL,
          className: R.clearAllButton,
          "aria-label": N.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: N.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "message-requests-spam-title"), [n, y, O]);
  return 0 === t.length ? (0, a.jsx)(p.default, {
    section: g.MessageRequestSections.SPAM
  }) : (0, a.jsx)(r.ListNavigatorProvider, {
    navigator: v,
    children: (0, a.jsx)(r.ListNavigatorContainer, {
      children: n => {
        let {
          ref: s,
          role: l,
          ...i
        } = n;
        return (0, a.jsx)(u.List, {
          className: R.list,
          innerRole: l,
          innerAriaLabel: N.default.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var n;
            e.current = t, s.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: g.LIST_SECTION_HEIGHT,
          rowHeight: g.LIST_ROW_HEIGHT,
          renderSection: x,
          renderRow: D,
          sections: [t.length],
          chunkSize: 30,
          fade: !0,
          ...i
        }, "message-requests-spam-list")
      }
    })
  })
}