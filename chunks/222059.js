"use strict";
n.r(t), n.d(t, {
  HomeButton: function() {
    return Y
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("924826"),
  i = n("442837"),
  r = n("433517"),
  o = n("481060"),
  u = n("339149"),
  d = n("327943"),
  c = n("864682"),
  f = n("67212"),
  h = n("770471"),
  C = n("292584"),
  p = n("835865"),
  m = n("456541"),
  g = n("143614"),
  E = n("544803"),
  S = n("899740"),
  _ = n("155409"),
  I = n("699516"),
  N = n("944486"),
  T = n("594174"),
  A = n("295226"),
  L = n("774343"),
  v = n("417363"),
  x = n("941128"),
  R = n("436088"),
  M = n("880080"),
  O = n("26290"),
  y = n("15434"),
  D = n("780570"),
  b = n("557177"),
  j = n("278464"),
  G = n("682662"),
  U = n("662146"),
  P = n("674552"),
  w = n("981631"),
  F = n("474936"),
  B = n("689938"),
  V = n("111790");
let H = {
  origin: {
    x: -16,
    y: 0
  },
  targetWidth: 48,
  targetHeight: 48,
  offset: {
    x: 0,
    y: 0
  }
};

function k(e) {
  let {
    selected: t,
    user: n,
    badge: f,
    link: C,
    showProgressBadge: p
  } = e, S = (0, i.useStateFromStores)([d.default], () => d.default.isEditorOpen), [I, N] = a.useState(!1), [T, A] = a.useState(!1), [L, v] = a.useState(null), [x, D] = a.useState(0), [j, F] = a.useState(!1), {
    canViewBroadcasts: k
  } = h.default.useExperiment({
    location: "home_button_no_track"
  }, {
    autoTrackExposure: !1
  }), Y = (0, g.default)(), K = Y.length > 0 && k;
  (0, m.useTrackNewBroadcastDetected)();
  let W = (0, s.useTreeItem)("home"),
    Z = () => {
      v(null), D(0), clearTimeout(L)
    };
  if (null == n) return null;
  let z = B.default.Messages.DIRECT_MESSAGES;
  T && (z = r.Storage.get(w.DISCODO_STORAGE_KEY) ? B.default.Messages.DISCODO_ENABLED : B.default.Messages.DISCODO_DISABLED), Y.length > 0 && h.default.trackExposure({
    location: "home_button"
  });
  let X = null;
  !t && p ? X = (0, l.jsx)(u.default, {
    className: V.downloadProgress,
    determineOwnVisibility: !1
  }) : K && (X = (0, l.jsx)(R.default, {
    className: V.broadcastBadge
  }));
  let Q = t || I || S,
    q = (0, l.jsx)(o.BlobMask, {
      highlight: K,
      selected: Q,
      lowerBadge: f > 0 ? (0, P.renderMentionBadge)(f) : null,
      upperBadge: X,
      lowerBadgeWidth: (0, O.getBadgeWidthForValue)(f),
      children: (0, l.jsx)(y.default, {
        onMouseEnter: () => N(!0),
        onMouseLeave: () => N(!1),
        onClick: () => {
          if (!__OVERLAY__ && (null != L && clearTimeout(L), v(setTimeout(Z, 500)), D(x + 1), 15 === x)) {
            Z();
            let e = !r.Storage.get(w.DISCODO_STORAGE_KEY);
            r.Storage.set(w.DISCODO_STORAGE_KEY, e), e ? (0, b.playSound)("discodo") : (0, b.playSound)("user_leave"), A(!0), setTimeout(() => {
              A(!1)
            }, 1e3)
          }
        },
        selected: Q,
        ariaLabel: B.default.Messages.DIRECT_MESSAGES,
        ...W,
        to: {
          pathname: C,
          state: {
            analyticsSource: {
              page: w.AnalyticsPages.GUILD_CHANNEL,
              section: w.AnalyticsSections.NAVIGATION,
              object: w.AnalyticsObjects.BUTTON_HOME
            }
          }
        },
        children: (0, l.jsx)(c.default, {})
      })
    }),
    J = K ? (0, l.jsx)(o.Popout, {
      position: "right",
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, l.jsx)(E.default, {
          closePopout: t
        })
      },
      onRequestClose: () => {
        F(!1)
      },
      spacing: 8,
      shouldShow: j,
      children: () => q
    }) : null;
  return (0, l.jsx)("div", {
    className: V.tutorialContainer,
    onMouseEnter: () => {
      F(!0)
    },
    onMouseLeave: () => {
      setTimeout(() => {
        F(!1)
      }, 250)
    },
    children: (0, l.jsx)(_.default, {
      inlineSpecs: H,
      tutorialId: "friends-list",
      position: "right",
      children: (0, l.jsxs)(G.ListItem, {
        children: [(0, l.jsx)(M.default, {
          selected: t,
          hovered: I,
          className: V.pill
        }), null != J ? J : (0, l.jsx)(U.default, {
          color: o.Tooltip.Colors.PRIMARY,
          hideOnClick: !0,
          text: z,
          selected: t,
          children: q
        })]
      })
    })
  })
}

function Y() {
  let e = (0, j.useIsHomeSelected)(),
    t = (0, i.useStateFromStores)([x.default, v.default], () => {
      let e = (0, u.getDispatchApplicationStates)(x.default.activeItems, v.default),
        {
          total: t,
          progress: n
        } = D.getCombinedProgress(e),
        l = D.calculateProgressPercentage(n, t);
      return l > 0 && l < 100
    }),
    n = (0, i.useStateFromStores)([C.default], () => C.default.getUserIdsToValidate()),
    s = (0, i.useStateFromStores)([I.default], () => I.default.getPendingCount()),
    r = Object.keys(F.SubscriptionTrials),
    {
      unviewedTrialCount: o,
      unviewedDiscountCount: d
    } = (0, i.useStateFromStoresObject)([A.default], () => ({
      unviewedTrialCount: A.default.getUnacknowledgedOffers(r).length,
      unviewedDiscountCount: A.default.getUnacknowledgedDiscountOffers().length
    })),
    c = o + d,
    h = (0, i.useStateFromStores)([T.default], () => T.default.getCurrentUser()),
    m = (0, S.useMessageRequestsCount)(),
    g = s + c + m,
    E = g === c && c > 0 && s + m === 0;
  a.useEffect(() => {
    n.length > 0 && (0, f.fetchBroadcasterBuckets)()
  }, [n]), (0, p.default)();
  let _ = L.default.getHomeLink();
  return E && (_ = w.Routes.APPLICATION_STORE), (0, l.jsx)(k, {
    selected: e,
    user: h,
    selectedChannelId: N.default.getChannelId(w.ME),
    badge: g,
    link: _,
    showProgressBadge: t
  })
}