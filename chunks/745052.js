"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("924826"),
  o = n("286379"),
  u = n("442837"),
  d = n("524437"),
  c = n("481060"),
  f = n("150063"),
  E = n("112724"),
  h = n("183126"),
  _ = n("607070"),
  C = n("209613"),
  m = n("325708"),
  S = n("320149"),
  I = n("252618"),
  p = n("605236"),
  T = n("243778"),
  g = n("984370"),
  A = n("797614"),
  N = n("703656"),
  v = n("359110"),
  O = n("6025"),
  R = n("897473"),
  L = n("108427"),
  P = n("970731"),
  M = n("210887"),
  y = n("433355"),
  D = n("592125"),
  b = n("819640"),
  x = n("916187"),
  U = n("151827"),
  j = n("626135"),
  G = n("792125"),
  w = n("647090"),
  k = n("385956"),
  F = n("610697"),
  B = n("26373"),
  H = n("486622"),
  V = n("922409"),
  Y = n("899740"),
  W = n("177033"),
  K = n("355350"),
  z = n("307947"),
  q = n("96479"),
  Q = n("480874"),
  Z = n("687683"),
  X = n("981631"),
  J = n("921944"),
  $ = n("689938"),
  ee = n("169819"),
  et = n("121950");

function en() {
  let e = s.useRef(null),
    t = (0, Y.useMessageRequestsCount)(),
    n = (0, W.default)(),
    l = (0, B.useListHasSingleMessageRequest)(),
    u = (0, h.useIsRejectAllMessageRequestsEnabled)(),
    d = s.useCallback(() => {
      (0, c.showToast)((0, c.createToast)($.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, c.ToastType.FAILURE))
    }, []),
    {
      rejectAll: f
    } = (0, H.useMessageRequestActions)({
      onError: d
    }),
    E = (0, C.default)("message-requests-list"),
    {
      channelId: _
    } = (0, V.useMessageRequestSidebarState)(),
    m = s.useCallback(() => {
      f(n.map(e => e.channel.id))
    }, [n, f]),
    S = s.useCallback(e => {
      var t, s;
      let {
        row: r
      } = e, o = n[r], u = null === (s = n[r + 1]) || void 0 === s ? void 0 : null === (t = s.channel) || void 0 === t ? void 0 : t.id, d = o.channel.id;
      return (0, a.jsx)(q.default, {
        index: r,
        className: i()({
          [ee.selected]: null != _ && _ === d,
          [ee.siblingSelected]: null != _ && _ === u
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, d)
    }, [l, n, _]),
    I = s.useCallback(() => (0, a.jsxs)(U.default, {
      className: ee.sectionTitle,
      children: [t > 0 ? $.default.Messages.MESSAGE_REQUESTS_PAGE_TITLE_WITH_COUNT.format({
        count: t
      }) : $.default.Messages.MESSAGE_REQUESTS_PAGE_TITLE, u && t > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.Text, {
          className: ee.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, a.jsx)(c.Button, {
          onClick: m,
          look: c.ButtonLooks.LINK,
          color: c.ButtonColors.LINK,
          size: c.ButtonSizes.SMALL,
          className: ee.clearAllButton,
          "aria-label": $.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: $.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "title"), [t, m, u]);
  return (n.length !== t && A.default.increment({
    name: o.MetricEvents.MESSAGE_REQUEST_COUNT_DRIFT
  }), 0 === n.length) ? (0, a.jsx)(z.default, {
    section: Z.MessageRequestSections.REQUESTS
  }) : (0, a.jsx)(r.ListNavigatorProvider, {
    navigator: E,
    children: (0, a.jsx)(r.ListNavigatorContainer, {
      children: t => {
        let {
          ref: s,
          role: l,
          ...i
        } = t;
        return (0, a.jsx)(c.List, {
          className: ee.list,
          innerRole: l,
          innerAriaLabel: $.default.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var n;
            e.current = t, s.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: Z.LIST_SECTION_HEIGHT,
          rowHeight: Z.LIST_ROW_HEIGHT,
          renderSection: I,
          renderRow: S,
          sections: [n.length],
          chunkSize: 30,
          fade: !0,
          ...i
        }, "message-requests-list")
      }
    })
  })
}

function ea(e) {
  let {
    pageWidth: t,
    onSidebarResize: n
  } = e, s = (0, u.useStateFromStores)([y.default], () => y.default.getSidebarState(y.MESSAGE_REQUESTS_BASE_CHANNEL_ID)), l = (0, u.useStateFromStores)([D.default], () => D.default.getChannel(null == s ? void 0 : s.channelId));
  if (null == s || s.type !== R.SidebarType.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
  let i = t - X.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
  return (0, a.jsx)(m.default, {
    sidebarType: m.ChatSidebarType.MessageRequestSidebar,
    maxWidth: i,
    onWidthChange: n,
    children: (0, a.jsx)(S.default, {
      channel: l,
      baseChannelId: y.MESSAGE_REQUESTS_BASE_CHANNEL_ID
    })
  })
}
let es = function(e) {
    let {
      markAsDismissed: t
    } = e;
    return (0, a.jsx)(P.default, {
      header: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
      content: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
      buttonCTA: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
      className: ee.messageRequestCoachmark,
      onClick: () => t(J.ContentDismissActionType.UNKNOWN),
      markAsDismissed: t,
      caretPosition: P.CaretPosition.TOP_CENTER,
      headerClassName: ee.__invalid_header
    })
  },
  el = e => {
    let t = (0, F.default)(),
      n = () => b.default.hasLayers() || (0, c.hasAnyModalOpen)(),
      l = (0, u.useStateFromStores)([_.default], () => _.default.useReducedMotion);
    return s.useEffect(() => {
      (0, p.requestMarkDismissibleContentAsShown)(d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK)
    }, []), (0, a.jsx)(T.default, {
      contentTypes: [d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK],
      children: s => {
        let {
          visibleContent: i,
          markAsDismissed: r
        } = s;
        if (i === d.DismissibleContent.MESSAGE_REQUEST_SETTINGS_COACH_MARK) return (0, a.jsx)(c.Popout, {
          renderPopout: () => t ? (0, a.jsx)(es, {
            markAsDismissed: r
          }) : (0, a.jsx)(P.default, {
            header: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
            content: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT,
            buttonCTA: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONFIRM,
            secondaryButtonCTA: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
            className: ee.messageRequestCoachmark,
            onClick: e => {
              e.stopPropagation(), (0, N.transitionTo)(X.Routes.SETTINGS("privacy-and-safety"))
            },
            markAsDismissed: r,
            caretPosition: P.CaretPosition.TOP_CENTER,
            headerClassName: ee.__invalid_header
          }),
          position: "bottom",
          align: "center",
          animation: l ? c.Popout.Animation.NONE : c.Popout.Animation.TRANSLATE,
          shouldShow: !n(),
          spacing: 16,
          children: () => e.children
        });
        return e.children
      }
    })
  };

function ei(e) {
  let {
    section: t
  } = e;
  return t === Z.MessageRequestSections.SPAM ? (0, a.jsx)(Q.default, {}) : (0, a.jsx)(en, {})
}
let er = (0, E.default)(function(e) {
  let {
    width: t
  } = e, n = (0, Y.useMessageRequestsCount)();
  s.useEffect(() => {
    f.setHomeLink(X.Routes.MESSAGE_REQUESTS), (0, L.trackAppUIViewed)("message-requests"), j.default.track(X.AnalyticEvents.MESSAGE_REQUESTS_VIEWED, {
      num_message_requests: n
    }), A.default.increment({
      name: o.MetricEvents.MESSAGE_REQUEST_VIEW
    })
  }, []);
  let l = (0, u.useStateFromStores)([M.default], () => M.default.theme),
    r = (0, K.useSpamMessageRequestCount)(),
    [d, E] = s.useState(!1),
    h = (0, u.useStateFromStores)([y.default], () => {
      let e = y.default.getSidebarState(y.MESSAGE_REQUESTS_BASE_CHANNEL_ID);
      return null != e && e.type === R.SidebarType.VIEW_MESSAGE_REQUEST ? e : null
    }),
    _ = null == h ? void 0 : h.channelId,
    C = null != h,
    m = (0, k.useIsEitherTypeOfMessageRequest)(_),
    S = (0, w.useHasUserRepliedInChannel)(_);
  s.useEffect(() => {
    null != _ && !m && S && C && ((0, v.transitionToChannel)(_), O.default.closeChannelSidebar(y.MESSAGE_REQUESTS_BASE_CHANNEL_ID))
  }, [_, S, C, m]);
  let [p, T] = s.useState(Z.MessageRequestSections.REQUESTS);
  return (0, I.usePageTitle)({
    location: $.default.Messages.MESSAGE_REQUESTS
  }), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(et.chat, ee.container, {
        [et.threadSidebarOpen]: C,
        [et.threadSidebarFloating]: C && d
      }),
      children: [(0, a.jsxs)(g.default, {
        className: (0, G.getThemeClass)(l),
        toolbar: !0,
        children: [(0, a.jsx)(g.default.Icon, {
          icon: x.default,
          "aria-hidden": !0
        }), (0, a.jsx)(el, {
          children: (0, a.jsx)(g.default.Title, {
            children: $.default.Messages.MESSAGE_REQUESTS
          })
        }), (0, a.jsx)(g.default.Divider, {}), (0, a.jsxs)(c.TabBar, {
          "aria-label": $.default.Messages.MESSAGE_REQUESTS,
          selectedItem: p,
          type: "top-pill",
          onItemSelect: e => {
            T(e)
          },
          className: ee.__invalid_tabBar,
          children: [(0, a.jsx)(c.TabBar.Item, {
            id: Z.MessageRequestSections.REQUESTS,
            className: ee.__invalid_item,
            children: $.default.Messages.MESSAGE_REQUESTS_REQUESTS_TAB_TITLE
          }), (0, a.jsx)(c.TabBar.Item, {
            id: Z.MessageRequestSections.SPAM,
            className: ee.__invalid_item,
            children: 0 === r ? $.default.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE : $.default.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE_WITH_COUNT.format({
              count: r
            })
          })]
        })]
      }), (0, a.jsx)("div", {
        className: et.content,
        children: (0, a.jsx)(ei, {
          section: p
        })
      })]
    }), C && (0, a.jsx)(ea, {
      pageWidth: t,
      onSidebarResize: (e, t) => {
        E(t)
      }
    })]
  })
});
t.default = er