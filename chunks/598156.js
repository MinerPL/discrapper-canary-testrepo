"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ei
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
  R = n("582713"),
  O = n("970366"),
  v = n("5667"),
  L = n("161778"),
  M = n("982108"),
  P = n("42203"),
  y = n("778588"),
  D = n("556081"),
  x = n("826684"),
  b = n("599110"),
  U = n("439932"),
  G = n("288518"),
  j = n("486503"),
  w = n("916650"),
  k = n("803524"),
  F = n("7643"),
  B = n("785770"),
  H = n("260488"),
  V = n("500526"),
  Y = n("452229"),
  W = n("196986"),
  K = n("410560"),
  z = n("433591"),
  q = n("973199"),
  Q = n("49111"),
  Z = n("994428"),
  X = n("782340"),
  J = n("109362"),
  $ = n("250455");

function ee() {
  let e = s.useRef(null),
    t = (0, H.useMessageRequestsCount)(),
    n = (0, V.default)(),
    l = (0, k.useListHasSingleMessageRequest)(),
    u = (0, h.useIsRejectAllMessageRequestsEnabled)(),
    d = s.useCallback(() => {
      (0, c.showToast)((0, c.createToast)(X.default.Messages.MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE, c.ToastType.FAILURE))
    }, []),
    {
      rejectAll: f
    } = (0, F.useMessageRequestActions)({
      onError: d
    }),
    E = (0, C.default)("message-requests-list"),
    {
      channelId: _
    } = (0, B.useMessageRequestSidebarState)(),
    S = s.useCallback(() => {
      let e = n.map(e => e.channel.id);
      f(e)
    }, [n, f]),
    I = s.useCallback(e => {
      var t, s;
      let {
        row: r
      } = e, o = n[r], u = null === (s = n[r + 1]) || void 0 === s ? void 0 : null === (t = s.channel) || void 0 === t ? void 0 : t.id, d = o.channel.id;
      return (0, a.jsx)(K.default, {
        index: r,
        className: i({
          [J.selected]: null != _ && _ === d,
          [J.siblingSelected]: null != _ && _ === u
        }),
        channel: o.channel,
        user: o.user,
        hasSingleMessageRequest: l
      }, d)
    }, [l, n, _]),
    m = s.useCallback(() => (0, a.jsxs)(x.default, {
      className: J.sectionTitle,
      children: [t > 0 ? X.default.Messages.MESSAGE_REQUESTS_PAGE_TITLE_WITH_COUNT.format({
        count: t
      }) : X.default.Messages.MESSAGE_REQUESTS_PAGE_TITLE, u && t > 0 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.Text, {
          className: J.titleDivider,
          variant: "eyebrow",
          color: "header-secondary",
          tag: "span",
          children: "•"
        }), (0, a.jsx)(c.Button, {
          onClick: S,
          look: c.ButtonLooks.LINK,
          color: c.ButtonColors.LINK,
          size: c.ButtonSizes.SMALL,
          className: J.clearAllButton,
          "aria-label": X.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL,
          children: X.default.Messages.MESSAGE_REQUESTS_CLEAR_ALL
        })]
      }) : null]
    }, "title"), [t, S, u]);
  return (n.length !== t && A.default.increment({
    name: o.MetricEvents.MESSAGE_REQUEST_COUNT_DRIFT
  }), 0 === n.length) ? (0, a.jsx)(W.default, {
    section: q.MessageRequestSections.REQUESTS
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
          className: J.list,
          innerRole: l,
          innerAriaLabel: X.default.Messages.MESSAGE_REQUESTS,
          ref: t => {
            var n;
            e.current = t, s.current = null !== (n = null == t ? void 0 : t.getScrollerNode()) && void 0 !== n ? n : null
          },
          paddingTop: 24,
          paddingBottom: 24,
          sectionHeight: q.LIST_SECTION_HEIGHT,
          rowHeight: q.LIST_ROW_HEIGHT,
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

function et(e) {
  let {
    pageWidth: t,
    onSidebarResize: n
  } = e, s = (0, u.useStateFromStores)([M.default], () => M.default.getSidebarState(M.MESSAGE_REQUESTS_BASE_CHANNEL_ID)), l = (0, u.useStateFromStores)([P.default], () => P.default.getChannel(null == s ? void 0 : s.channelId));
  if (null == s || s.type !== R.SidebarType.VIEW_MESSAGE_REQUEST || null == l || !l.isPrivate()) return null;
  let i = t - Q.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
  return (0, a.jsx)(S.default, {
    sidebarType: S.ChatSidebarType.MessageRequestSidebar,
    maxWidth: i,
    onWidthChange: n,
    children: (0, a.jsx)(I.default, {
      channel: l,
      baseChannelId: M.MESSAGE_REQUESTS_BASE_CHANNEL_ID
    })
  })
}
let en = function(e) {
    let {
      markAsDismissed: t
    } = e;
    return (0, a.jsx)(v.default, {
      header: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
      content: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT_TEENS,
      buttonCTA: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
      className: J.messageRequestCoachmark,
      onClick: () => t(Z.ContentDismissActionType.UNKNOWN),
      markAsDismissed: t,
      caretPosition: v.CaretPosition.TOP_CENTER,
      headerClassName: J.header
    })
  },
  ea = e => {
    let t = (0, w.default)(),
      n = () => y.default.hasLayers() || (0, c.hasAnyModalOpen)(),
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
          renderPopout: () => t ? (0, a.jsx)(en, {
            markAsDismissed: r
          }) : (0, a.jsx)(v.default, {
            header: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_TITLE,
            content: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONTENT,
            buttonCTA: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_CONFIRM,
            secondaryButtonCTA: X.default.Messages.MESSAGE_REQUESTS_COACHMARK_DISMISS,
            className: J.messageRequestCoachmark,
            onClick: e => {
              e.stopPropagation(), (0, N.transitionTo)(Q.Routes.SETTINGS("privacy-and-safety"))
            },
            markAsDismissed: r,
            caretPosition: v.CaretPosition.TOP_CENTER,
            headerClassName: J.header
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

function es(e) {
  let {
    section: t
  } = e;
  return t === q.MessageRequestSections.SPAM ? (0, a.jsx)(z.default, {}) : (0, a.jsx)(ee, {})
}
let el = (0, E.default)(function(e) {
  let {
    width: t
  } = e, n = (0, H.useMessageRequestsCount)();
  s.useEffect(() => {
    f.setHomeLink(Q.Routes.MESSAGE_REQUESTS), (0, O.trackAppUIViewed)("message-requests"), b.default.track(Q.AnalyticEvents.MESSAGE_REQUESTS_VIEWED, {
      num_message_requests: n
    }), A.default.increment({
      name: o.MetricEvents.MESSAGE_REQUEST_VIEW
    })
  }, []);
  let l = (0, u.useStateFromStores)([L.default], () => L.default.theme),
    r = (0, Y.useSpamMessageRequestCount)(),
    [d, E] = s.useState(!1),
    h = (0, u.useStateFromStores)([M.default, G.default, j.default], () => {
      let e = M.default.getSidebarState(M.MESSAGE_REQUESTS_BASE_CHANNEL_ID);
      return null != e && e.type === R.SidebarType.VIEW_MESSAGE_REQUEST && (G.default.isMessageRequest(e.channelId) || j.default.isSpam(e.channelId))
    }),
    [_, C] = s.useState(q.MessageRequestSections.REQUESTS);
  return (0, m.usePageTitle)({
    location: X.default.Messages.MESSAGE_REQUESTS
  }), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i($.chat, J.container, {
        [$.threadSidebarOpen]: h,
        [$.threadSidebarFloating]: h && d
      }),
      children: [(0, a.jsxs)(g.default, {
        className: (0, U.getThemeClass)(l),
        toolbar: !0,
        children: [(0, a.jsx)(g.default.Icon, {
          icon: D.default,
          "aria-hidden": !0
        }), (0, a.jsx)(ea, {
          children: (0, a.jsx)(g.default.Title, {
            children: X.default.Messages.MESSAGE_REQUESTS
          })
        }), (0, a.jsx)(g.default.Divider, {}), (0, a.jsxs)(c.TabBar, {
          "aria-label": X.default.Messages.MESSAGE_REQUESTS,
          selectedItem: _,
          type: "top-pill",
          onItemSelect: e => {
            C(e)
          },
          className: J.tabBar,
          children: [(0, a.jsx)(c.TabBar.Item, {
            id: q.MessageRequestSections.REQUESTS,
            className: J.item,
            children: X.default.Messages.MESSAGE_REQUESTS_REQUESTS_TAB_TITLE
          }), (0, a.jsx)(c.TabBar.Item, {
            id: q.MessageRequestSections.SPAM,
            className: J.item,
            children: 0 === r ? X.default.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE : X.default.Messages.MESSAGE_REQUESTS_SPAM_TAB_TITLE_WITH_COUNT.format({
              count: r
            })
          })]
        })]
      }), (0, a.jsx)("div", {
        className: $.content,
        children: (0, a.jsx)(es, {
          section: _
        })
      })]
    }), h && (0, a.jsx)(et, {
      pageWidth: t,
      onSidebarResize: (e, t) => {
        E(t)
      }
    })]
  })
});
var ei = el