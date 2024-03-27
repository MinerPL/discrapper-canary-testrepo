"use strict";
n.r(t), n.d(t, {
  RecentsPopout: function() {
    return A
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("397613"),
  i = n("446674"),
  r = n("151426"),
  o = n("77078"),
  u = n("812204"),
  d = n("685665"),
  c = n("22082"),
  f = n("979268"),
  h = n("913796"),
  E = n("872173"),
  m = n("374363"),
  p = n("659500"),
  S = n("981024"),
  g = n("519540"),
  N = n("80649"),
  _ = n("385730"),
  T = n("788072"),
  I = n("49111"),
  C = n("782340");

function A(e) {
  let {
    onOpen: t,
    onClose: n,
    children: A,
    badgeState: M,
    popoutPosition: v,
    popoutAlign: R
  } = e, {
    analyticsLocations: x
  } = (0, d.default)(u.default.NOTIFICATION_CENTER), [L, O] = l.useState(!1), [b, y] = function() {
    let e = (0, i.useStateFromStores)([m.default], () => {
        var e, t;
        return null !== (t = null === (e = m.default.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.InboxTab.UNREADS
      }),
      t = l.useCallback(e => {
        E.PreloadedUserSettingsActionCreators.updateAsync("inbox", t => {
          if (t.currentTab === e) return !1;
          t.currentTab = e
        }, E.UserSettingsDelay.FREQUENT_USER_ACTION)
      }, []);
    return [e, t]
  }(), {
    showTutorial: j,
    setSeenTutorial: F
  } = function(e) {
    let t = (0, i.useStateFromStores)([m.default], () => {
        var e, t;
        return null !== (t = null === (e = m.default.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
      }),
      n = l.useCallback(() => {
        E.PreloadedUserSettingsActionCreators.updateAsync("inbox", e => {
          e.viewedTutorial = !0
        }, E.UserSettingsDelay.INFREQUENT_USER_ACTION)
      }, []),
      a = !t && e === r.InboxTab.UNREADS;
    return {
      showTutorial: a,
      setSeenTutorial: n
    }
  }(b), D = l.useCallback(() => {
    O(!1), L && (null == n || n())
  }, [n, L]), U = l.useCallback(() => {
    O(!L), L ? null == n || n() : null == t || t()
  }, [n, t, L]), P = l.useCallback(() => {
    U(), y(r.InboxTab.UNREADS)
  }, [y, U]);
  l.useEffect(() => (p.ComponentDispatch.subscribe(I.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, P), () => void p.ComponentDispatch.unsubscribe(I.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, P)), [P]);
  let {
    showReminders: k
  } = f.default.useExperiment({
    location: "RecentsPopout"
  }, {
    autoTrackExposure: !1
  }), w = (0, h.useInDesktopNotificationCenterExperiment)(), {
    enabled: G
  } = c.default.useExperiment({
    location: "RecentsPopout"
  });
  l.useEffect(() => {
    !k && b === r.InboxTab.TODOS && y(r.InboxTab.MENTIONS)
  });
  let B = l.useCallback(e => {
    !e.shiftKey && D()
  }, [D]);
  return (0, a.jsx)(d.AnalyticsLocationProvider, {
    value: x,
    children: (0, a.jsx)(o.Popout, {
      animation: o.Popout.Animation.NONE,
      position: v,
      align: R,
      autoInvert: !1,
      shouldShow: L,
      onRequestClose: D,
      renderPopout: function() {
        return (0, a.jsx)(o.Dialog, {
          "aria-label": C.default.Messages.INBOX,
          children: b === r.InboxTab.FOR_YOU && w ? (0, a.jsx)(S.default, {
            setTab: y,
            badgeState: M,
            closePopout: D
          }) : b === r.InboxTab.MENTIONS ? (0, a.jsx)(N.default, {
            setTab: y,
            onJump: B,
            badgeState: M,
            closePopout: D
          }) : G && b === r.InboxTab.GAME_INVITES ? (0, a.jsx)(T.default, {
            setTab: y,
            badgeState: M,
            closePopout: D
          }) : k && b === r.InboxTab.TODOS ? (0, a.jsx)(g.default, {
            setTab: y,
            onJump: B,
            closePopout: D
          }) : (0, a.jsx)(s.ErrorBoundary, {
            fallback: (0, a.jsx)(_.UnreadsCrashed, {
              setTab: y,
              closePopout: D,
              badgeState: M
            }),
            children: (0, a.jsx)(_.default, {
              setTab: y,
              onJump: B,
              showTutorial: j,
              setSeenTutorial: F,
              closePopout: D,
              badgeState: M
            })
          })
        })
      },
      ignoreModalClicks: !0,
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return A(U, n, e)
      }
    })
  })
}