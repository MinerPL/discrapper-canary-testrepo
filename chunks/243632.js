"use strict";
n.r(t), n.d(t, {
  useDropsExperiment: function() {
    return T
  },
  useShowEligibilityEnrollmentTooltip: function() {
    return I
  },
  useAnyDropsEnabled: function() {
    return m
  },
  useFetchInitialDropProgress: function() {
    return N
  },
  useActivityPanelDrop: function() {
    return p
  },
  useTrackDropsImpression: function() {
    return S
  }
});
var s = n("884691"),
  a = n("446674"),
  l = n("913144"),
  i = n("428958"),
  r = n("862853"),
  o = n("10641"),
  u = n("161454"),
  d = n("376152"),
  c = n("931115"),
  E = n("180273"),
  f = n("579565"),
  _ = n("411511");

function T(e) {
  let t, n;
  let s = c.DropsForGoLiveFortniteExperiment.useExperiment({
    location: "59cc4b_1"
  });
  if (null == e) return null;
  let a = (0, f.getDrop)(e);
  if (null == a) return null;
  if (a.dropsQuestId === _.FORTNITE_QUEST_ID) t = c.DropsForGoLiveFortniteExperiment, n = s;
  else t = null, n = null;
  return null == t || null == n ? null : {
    experiment: t,
    config: n,
    drop: a
  }
}

function I(e) {
  var t;
  let n = (0, a.useStateFromStores)([E.default], () => E.default.serverEligibleByQuestIds),
    i = T(e),
    r = function(e) {
      let t = (0, a.useStateFromStoresArray)([u.default], () => u.default.getGamesSeen(!1)),
        n = s.useMemo(() => (0, f.getEligibleGameLastSeenStartTimeSeconds)(), []),
        l = (0, f.isDropGameDetected)(e, t, n);
      return l
    }(e),
    o = null != i && n[i.drop.dropsQuestId];
  null != i && o && r && i.experiment.trackExposure({
    location: "ELIGIBILITY_ENROLLMENT_TOOLTIP"
  });
  let c = null == i ? void 0 : null === (t = i.config) || void 0 === t ? void 0 : t.dropsEnabled,
    _ = null == i ? void 0 : i.drop,
    I = null == _ || (0, f.getDropExpired)(_);
  return s.useEffect(() => {
    c && !I && r && null != _ && l.default.wait(() => {
      null == o && (0, d.fetchDropsEligibility)(_.dropsQuestId)
    })
  }, [o, _, c, I, r]), null != _ && !!c && !I && o && r
}

function m() {
  let e = T(_.PartnerGame.FORTNITE);
  return null == e ? void 0 : e.config.dropsEnabled
}

function N(e) {
  let t = T(e),
    n = null == t ? void 0 : t.drop,
    l = (0, a.useStateFromStores)([E.default], () => null != n && E.default.serverEligibleByQuestIds[n.dropsQuestId]),
    i = (0, a.useStateFromStores)([E.default], () => E.default.hasInitialProgressFetched);
  s.useEffect(() => {
    null != n && l && !i && (0, d.fetchProgress)(n.dropsQuestId)
  }, [n, l, i])
}

function p(e, t, n, s) {
  var l;
  let i = T(e),
    u = null == i ? void 0 : i.drop,
    d = (0, a.useStateFromStores)([E.default], () => null != u && E.default.serverEligibleByQuestIds[u.dropsQuestId]),
    c = (0, a.useStateFromStores)([E.default], () => E.default.getIsPartnerGameQuestComplete(e)),
    _ = (0, f.doesGameTitleMatchList)(null == t ? void 0 : t.name, null !== (l = null == u ? void 0 : u.gameSearchTerm) && void 0 !== l ? l : []),
    I = (0, r.useIsAnyContentShown)([n, s]),
    m = (0, o.useIsDismissibleContentDismissed)(s),
    N = null == u || (0, f.getDropExpired)(u),
    p = !!(null != u && !N && _ && (null == i ? void 0 : i.config.dropsEnabled) && d);
  return {
    partnerGame: p ? e : null,
    dropsActivityPanelExperienceBlocked: I,
    showDropsSparkles: !c && !m
  }
}

function S(e, t, n) {
  let s = (0, f.getDrop)(e);
  (0, i.default)({
    type: t,
    name: n,
    properties: {
      drops_quest_id: null == s ? void 0 : s.dropsQuestId,
      game_id: null == s ? void 0 : s.dropsGameId
    }
  })
}