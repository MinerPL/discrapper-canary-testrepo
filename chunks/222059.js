"use strict";
n.r(t), n.d(t, {
  HomeButton: function() {
    return K
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
  m = n("292584"),
  C = n("835865"),
  p = n("456541"),
  g = n("143614"),
  E = n("544803"),
  _ = n("899740"),
  S = n("734741"),
  I = n("155409"),
  N = n("699516"),
  T = n("944486"),
  A = n("594174"),
  L = n("295226"),
  v = n("774343"),
  x = n("417363"),
  R = n("941128"),
  M = n("436088"),
  y = n("880080"),
  O = n("26290"),
  D = n("15434"),
  b = n("780570"),
  j = n("557177"),
  P = n("278464"),
  G = n("682662"),
  U = n("662146"),
  w = n("674552"),
  B = n("981631"),
  F = n("474936"),
  H = n("871465"),
  V = n("689938"),
  k = n("471155");
let Y = {
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

function W(e) {
  let {
    selected: t,
    user: n,
    badge: f,
    link: m,
    showProgressBadge: C
  } = e, _ = (0, i.useStateFromStores)([d.default], () => d.default.isEditorOpen), [S, N] = a.useState(!1), [T, A] = a.useState(!1), [L, v] = a.useState(null), [x, R] = a.useState(0), [b, P] = a.useState(!1), {
    canViewBroadcasts: F
  } = h.default.useExperiment({
    location: "home_button_no_track"
  }, {
    autoTrackExposure: !1
  }), W = (0, g.default)(), K = W.length > 0 && F;
  (0, p.useTrackNewBroadcastDetected)();
  let z = (0, s.useTreeItem)("home"),
    Z = () => {
      v(null), R(0), clearTimeout(L)
    };
  if (null == n) return null;
  let X = V.default.Messages.DIRECT_MESSAGES;
  T && (X = r.Storage.get(B.DISCODO_STORAGE_KEY) ? V.default.Messages.DISCODO_ENABLED : V.default.Messages.DISCODO_DISABLED), W.length > 0 && h.default.trackExposure({
    location: "home_button"
  });
  let Q = null;
  !t && C ? Q = (0, l.jsx)(u.default, {
    className: k.downloadProgress,
    determineOwnVisibility: !1
  }) : K && (Q = (0, l.jsx)(M.default, {
    className: k.broadcastBadge
  }));
  let J = t || S || _,
    q = (0, l.jsx)(o.BlobMask, {
      highlight: K,
      selected: J,
      lowerBadge: f > 0 ? (0, w.renderMentionBadge)(f) : null,
      upperBadge: Q,
      lowerBadgeWidth: (0, O.getBadgeWidthForValue)(f),
      children: (0, l.jsx)(D.default, {
        onMouseEnter: () => N(!0),
        onMouseLeave: () => N(!1),
        onClick: () => {
          if (!__OVERLAY__ && (null != L && clearTimeout(L), v(setTimeout(Z, 500)), R(x + 1), 15 === x)) {
            Z();
            let e = !r.Storage.get(B.DISCODO_STORAGE_KEY);
            r.Storage.set(B.DISCODO_STORAGE_KEY, e), e && r.Storage.set(H.CUSTOM_NOTIFICATION_SOUNDS_DISCODO_STORAGE_KEY, !0), e ? (0, j.playSound)("discodo") : (0, j.playSound)("user_leave"), A(!0), setTimeout(() => {
              A(!1)
            }, 1e3)
          }
        },
        selected: J,
        ariaLabel: V.default.Messages.DIRECT_MESSAGES,
        ...z,
        to: {
          pathname: m,
          state: {
            analyticsSource: {
              page: B.AnalyticsPages.GUILD_CHANNEL,
              section: B.AnalyticsSections.NAVIGATION,
              object: B.AnalyticsObjects.BUTTON_HOME
            }
          }
        },
        children: (0, l.jsx)(c.default, {})
      })
    }),
    $ = K ? (0, l.jsx)(o.Popout, {
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
        P(!1)
      },
      spacing: 8,
      shouldShow: b,
      children: () => q
    }) : null;
  return (0, l.jsx)("div", {
    className: k.tutorialContainer,
    onMouseEnter: () => {
      P(!0)
    },
    onMouseLeave: () => {
      setTimeout(() => {
        P(!1)
      }, 250)
    },
    children: (0, l.jsx)(I.default, {
      inlineSpecs: Y,
      tutorialId: "friends-list",
      position: "right",
      children: (0, l.jsxs)(G.ListItem, {
        children: [(0, l.jsx)(y.default, {
          selected: t,
          hovered: S,
          className: k.pill
        }), null != $ ? $ : (0, l.jsx)(U.default, {
          color: o.Tooltip.Colors.PRIMARY,
          hideOnClick: !0,
          text: X,
          selected: t,
          children: q
        })]
      })
    })
  })
}

function K() {
  let e = (0, P.useIsHomeSelected)(),
    t = (0, i.useStateFromStores)([R.default, x.default], () => {
      let e = (0, u.getDispatchApplicationStates)(R.default.activeItems, x.default),
        {
          total: t,
          progress: n
        } = b.getCombinedProgress(e),
        l = b.calculateProgressPercentage(n, t);
      return l > 0 && l < 100
    }),
    n = (0, i.useStateFromStores)([m.default], () => m.default.getUserIdsToValidate()),
    s = (0, i.useStateFromStores)([N.default], () => N.default.getPendingCount()),
    r = Object.keys(F.SubscriptionTrials),
    {
      unviewedTrialCount: o,
      unviewedDiscountCount: d
    } = (0, i.useStateFromStoresObject)([L.default], () => ({
      unviewedTrialCount: L.default.getUnacknowledgedOffers(r).length,
      unviewedDiscountCount: L.default.getUnacknowledgedDiscountOffers().length
    })),
    c = o + d,
    h = (0, i.useStateFromStores)([A.default], () => A.default.getCurrentUser()),
    p = (0, _.useMessageRequestsCount)(),
    g = s + c + p + (0, S.useWhatsNewBadgeCount)(),
    E = g === c && c > 0 && s + p === 0;
  a.useEffect(() => {
    n.length > 0 && (0, f.fetchBroadcasterBuckets)()
  }, [n]), (0, C.default)();
  let I = v.default.getHomeLink();
  return E && (I = B.Routes.APPLICATION_STORE), (0, l.jsx)(W, {
    selected: e,
    user: h,
    selectedChannelId: T.default.getChannelId(B.ME),
    badge: g,
    link: I,
    showProgressBadge: t
  })
}