"use strict";
n.r(t), n.d(t, {
  RecentsPopout: function() {
    return g
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("349445"),
  i = n("442837"),
  r = n("524437"),
  o = n("481060"),
  u = n("100527"),
  d = n("906732"),
  c = n("602478"),
  f = n("641051"),
  E = n("360629"),
  _ = n("675478"),
  T = n("581883"),
  m = n("585483"),
  I = n("153209"),
  p = n("881591"),
  h = n("903672"),
  N = n("946443"),
  S = n("264233"),
  C = n("981631"),
  A = n("689938");

function g(e) {
  let {
    onOpen: t,
    onClose: n,
    children: g,
    badgeState: M,
    popoutPosition: R,
    popoutAlign: O
  } = e, {
    analyticsLocations: v
  } = (0, d.default)(u.default.NOTIFICATION_CENTER), [L, x] = a.useState(!1), [D, P] = function() {
    let e = (0, i.useStateFromStores)([T.default], () => {
      var e, t;
      return null !== (t = null === (e = T.default.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.InboxTab.UNREADS
    });
    return [e, a.useCallback(e => {
      _.PreloadedUserSettingsActionCreators.updateAsync("inbox", t => {
        if (t.currentTab === e) return !1;
        t.currentTab = e
      }, _.UserSettingsDelay.FREQUENT_USER_ACTION)
    }, [])]
  }(), {
    showTutorial: y,
    setSeenTutorial: U
  } = function(e) {
    let t = (0, i.useStateFromStores)([T.default], () => {
        var e, t;
        return null !== (t = null === (e = T.default.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
      }),
      n = a.useCallback(() => {
        _.PreloadedUserSettingsActionCreators.updateAsync("inbox", e => {
          e.viewedTutorial = !0
        }, _.UserSettingsDelay.INFREQUENT_USER_ACTION)
      }, []);
    return {
      showTutorial: !t && e === r.InboxTab.UNREADS,
      setSeenTutorial: n
    }
  }(D), b = a.useCallback(() => {
    x(!1), L && (null == n || n())
  }, [n, L]), j = a.useCallback(() => {
    x(!L), L ? null == n || n() : null == t || t()
  }, [n, t, L]), G = a.useCallback(() => {
    j(), P(r.InboxTab.UNREADS)
  }, [P, j]);
  a.useEffect(() => (m.ComponentDispatch.subscribe(C.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, G), () => void m.ComponentDispatch.unsubscribe(C.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, G)), [G]);
  let {
    showReminders: B
  } = f.default.useExperiment({
    location: "RecentsPopout"
  }, {
    autoTrackExposure: !1
  }), F = (0, E.useInDesktopNotificationCenterExperiment)(), {
    enabled: k
  } = c.default.useExperiment({
    location: "RecentsPopout"
  });
  a.useEffect(() => {
    !B && D === r.InboxTab.TODOS && P(r.InboxTab.MENTIONS)
  });
  let w = a.useCallback(e => {
    !e.shiftKey && b()
  }, [b]);
  return (0, s.jsx)(d.AnalyticsLocationProvider, {
    value: v,
    children: (0, s.jsx)(o.Popout, {
      animation: o.Popout.Animation.NONE,
      position: R,
      align: O,
      autoInvert: !1,
      shouldShow: L,
      onRequestClose: b,
      renderPopout: function() {
        return (0, s.jsx)(o.Dialog, {
          "aria-label": A.default.Messages.INBOX,
          children: D === r.InboxTab.FOR_YOU && F ? (0, s.jsx)(I.default, {
            setTab: P,
            badgeState: M,
            closePopout: b
          }) : D === r.InboxTab.MENTIONS ? (0, s.jsx)(h.default, {
            setTab: P,
            onJump: w,
            badgeState: M,
            closePopout: b
          }) : k && D === r.InboxTab.GAME_INVITES ? (0, s.jsx)(S.default, {
            setTab: P,
            badgeState: M,
            closePopout: b
          }) : B && D === r.InboxTab.TODOS ? (0, s.jsx)(p.default, {
            setTab: P,
            onJump: w,
            closePopout: b
          }) : (0, s.jsx)(l.ErrorBoundary, {
            fallback: (0, s.jsx)(N.UnreadsCrashed, {
              setTab: P,
              closePopout: b,
              badgeState: M
            }),
            children: (0, s.jsx)(N.default, {
              setTab: P,
              onJump: w,
              showTutorial: y,
              setSeenTutorial: U,
              closePopout: b,
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
        return g(j, n, e)
      }
    })
  })
}