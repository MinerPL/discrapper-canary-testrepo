"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eo
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("974667"),
  o = n("432710"),
  u = n("446674"),
  d = n("151426"),
  c = n("77078"),
  f = n("939488"),
  E = n("737960"),
  h = n("74456"),
  _ = n("206230"),
  C = n("302437"),
  S = n("665182"),
  I = n("442174"),
  m = n("69927"),
  p = n("10641"),
  T = n("384997"),
  g = n("539938"),
  A = n("155084"),
  N = n("393414"),
  R = n("144491"),
  O = n("208021"),
  v = n("582713"),
  L = n("970366"),
  M = n("5667"),
  P = n("161778"),
  y = n("982108"),
  D = n("42203"),
  x = n("778588"),
  b = n("556081"),
  U = n("826684"),
  G = n("599110"),
  j = n("439932"),
  w = n("687415"),
  k = n("674015"),
  F = n("916650"),
  B = n("803524"),
  H = n("7643"),
  V = n("785770"),
  Y = n("260488"),
  W = n("500526"),
  K = n("452229"),
  z = n("196986"),
  q = n("410560"),
  Q = n("433591"),
  Z = n("973199"),
  X = n("49111"),
  J = n("994428"),
  $ = n("782340"),
  ee = n("109362"),
  et = n("250455");

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
    S = s.useCallback(() => {
      let e = n.map(e => e.channel.id);
      f(e)
    }, [n, f]),
    I = s.useCallback(e => {
      var t, s;
      let {
        row: r
      } = e, o = n[r], u = null === (s = n[r + 1]) || void 0 === s ? void 0 : null === (t = s.channel) || void 0 === t ? void 0 : t.id, d = o.channel.id;
      return (0, a.jsx)(q.default, {
        index: r,
        className: i({
          [ee.selected]: null != _ && _ === d,
          [ee.siblingSelected]: null != _ && _ === u
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, d)
    }, [l, n, _]),
    m = s.useCallback(() => (0, a.jsxs)(U.default, {
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
          onClick: S,
          look: c.ButtonLooks.LINK,
          color: c.ButtonColors.LINK,
          size: c.ButtonSizes.SMALL,
          className: ee.clearAllButton,
          "aria-label": $.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: $.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "title"), [t, S, u]);
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
          renderSection: m,
          renderRow: I,
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
  if (null == s || s.type !== v.SidebarType.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
  let i = t - X.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
  return (0, a.jsx)(S.default, {
    sidebarType: S.ChatSidebarType.MessageRequestSidebar,
    maxWidth: i,
    onWidthChange: n,
    children: (0, a.jsx)(I.default, {
      channel: l,
      baseChannelId: y.MESSAGE_REQUESTS_BASE_CHANNEL_ID
    })
  })
}
let es = function(e) {
    let {
      markAsDismissed: t
    } = e;
    return (0, a.jsx)(M.default, {
      header: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
      content: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
      buttonCTA: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
      className: ee.messageRequestCoachmark,
      onClick: () => t(J.ContentDismissActionType.UNKNOWN),
      markAsDismissed: t,
      caretPosition: M.CaretPosition.TOP_CENTER,
      headerClassName: ee.header
    })
  },
  el = e => {
    let t = (0, F.default)(),
      n = () => x.default.hasLayers() || (0, c.hasAnyModalOpen)(),
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
          }) : (0, a.jsx)(M.default, {
            header: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
            content: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT,
            buttonCTA: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONFIRM,
            secondaryButtonCTA: $.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
            className: ee.messageRequestCoachmark,
            onClick: e => {
              e.stopPropagation(), (0, N.transitionTo)(X.Routes.SETTINGS("privacy-and-safety"))
            },
            markAsDismissed: r,
            caretPosition: M.CaretPosition.TOP_CENTER,
            headerClassName: ee.header
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
    f.setHomeLink(X.Routes.MESSAGE_REQUESTS), (0, L.trackAppUIViewed)("message-requests"), G.default.track(X.AnalyticEvents.MESSAGE_REQUESTS_VIEWED, {
      num_message_requests: n
    }), A.default.increment({
      name: o.MetricEvents.MESSAGE_REQUEST_VIEW
    })
  }, []);
  let l = (0, u.useStateFromStores)([P.default], () => P.default.theme),
    r = (0, K.useSpamMessageRequestCount)(),
    [d, E] = s.useState(!1),
    h = (0, u.useStateFromStores)([y.default], () => {
      let e = y.default.getSidebarState(y.MESSAGE_REQUESTS_BASE_CHANNEL_ID);
      return null != e && e.type === v.SidebarType.VIEW_MESSAGE_REQUEST ? e : null
    }),
    _ = null == h ? void 0 : h.channelId,
    C = null != h,
    S = (0, k.useIsEitherTypeOfMessageRequest)(_),
    I = (0, w.useHasUserRepliedInChannel)(_);
  s.useEffect(() => {
    null != _ && !S && I && C && ((0, R.transitionToChannel)(_), O.default.closeChannelSidebar(y.MESSAGE_REQUESTS_BASE_CHANNEL_ID))
  }, [_, I, C, S]);
  let [p, T] = s.useState(Z.MessageRequestSections.REQUESTS);
  return (0, m.usePageTitle)({
    location: $.default.Messages.MESSAGE_REQUESTS
  }), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i(et.chat, ee.container, {
        [et.threadSidebarOpen]: C,
        [et.threadSidebarFloating]: C && d
      }),
      children: [(0, a.jsxs)(g.default, {
        className: (0, j.getThemeClass)(l),
        toolbar: !0,
        children: [(0, a.jsx)(g.default.Icon, {
          icon: b.default,
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
          className: ee.tabBar,
          children: [(0, a.jsx)(c.TabBar.Item, {
            id: Z.MessageRequestSections.REQUESTS,
            className: ee.item,
            children: $.default.Messages.MESSAGE_REQUESTS_REQUESTS_TAB_TITLE
          }), (0, a.jsx)(c.TabBar.Item, {
            id: Z.MessageRequestSections.SPAM,
            className: ee.item,
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
var eo = er