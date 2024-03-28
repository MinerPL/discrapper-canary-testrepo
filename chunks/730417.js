"use strict";
n.r(t), n.d(t, {
  useActivityPanelDrop: function() {
    return h
  },
  useAnyDropsEnabled: function() {
    return I
  },
  useDropsExperiment: function() {
    return T
  },
  useFetchInitialDropProgress: function() {
    return p
  },
  useShowEligibilityEnrollmentTooltip: function() {
    return m
  },
  useTrackDropsImpression: function() {
    return N
  }
});
var s = n("470079"),
  a = n("442837"),
  l = n("570140"),
  i = n("213609"),
  r = n("211644"),
  o = n("605236"),
  u = n("594190"),
  d = n("960359"),
  c = n("346114"),
  f = n("524347"),
  E = n("853197"),
  _ = n("702512");

function T(e) {
  let t, n;
  let s = c.DropsForGoLiveFortniteExperiment.useExperiment({
    location: "59cc4b_1"
  });
  if (null == e) return null;
  let a = (0, E.getDrop)(e);
  if (null == a) return null;
  if (a.dropsQuestId === _.FORTNITE_QUEST_ID) t = c.DropsForGoLiveFortniteExperiment, n = s;
  else t = null, n = null;
  return null == t || null == n ? null : {
    experiment: t,
    config: n,
    drop: a
  }
}

function m(e) {
  var t;
  let n = (0, a.useStateFromStores)([f.default], () => f.default.serverEligibleByQuestIds),
    i = T(e),
    r = function(e) {
      let t = (0, a.useStateFromStoresArray)([u.default], () => u.default.getGamesSeen(!1)),
        n = s.useMemo(() => (0, E.getEligibleGameLastSeenStartTimeSeconds)(), []);
      return (0, E.isDropGameDetected)(e, t, n)
    }(e),
    o = null != i && n[i.drop.dropsQuestId];
  null != i && o && r && i.experiment.trackExposure({
    location: "ELIGIBILITY_ENROLLMENT_TOOLTIP"
  });
  let c = null == i ? void 0 : null === (t = i.config) || void 0 === t ? void 0 : t.dropsEnabled,
    _ = null == i ? void 0 : i.drop,
    m = null == _ || (0, E.getDropExpired)(_);
  return s.useEffect(() => {
    c && !m && r && null != _ && l.default.wait(() => {
      null == o && (0, d.fetchDropsEligibility)(_.dropsQuestId)
    })
  }, [o, _, c, m, r]), null != _ && !!c && !m && o && r
}

function I() {
  let e = T(_.PartnerGame.FORTNITE);
  return null == e ? void 0 : e.config.dropsEnabled
}

function p(e) {
  let t = T(e),
    n = null == t ? void 0 : t.drop,
    l = (0, a.useStateFromStores)([f.default], () => null != n && f.default.serverEligibleByQuestIds[n.dropsQuestId]),
    i = (0, a.useStateFromStores)([f.default], () => f.default.hasInitialProgressFetched);
  s.useEffect(() => {
    null != n && l && !i && (0, d.fetchProgress)(n.dropsQuestId)
  }, [n, l, i])
}

function h(e, t, n, s) {
  var l;
  let i = T(e),
    u = null == i ? void 0 : i.drop,
    d = (0, a.useStateFromStores)([f.default], () => null != u && f.default.serverEligibleByQuestIds[u.dropsQuestId]),
    c = (0, a.useStateFromStores)([f.default], () => f.default.getIsPartnerGameQuestComplete(e)),
    _ = (0, E.doesGameTitleMatchList)(null == t ? void 0 : t.name, null !== (l = null == u ? void 0 : u.gameSearchTerm) && void 0 !== l ? l : []),
    m = (0, r.useIsAnyContentShown)([n, s]),
    I = (0, o.useIsDismissibleContentDismissed)(s),
    p = null == u || (0, E.getDropExpired)(u),
    h = !!(null != u && !p && _ && (null == i ? void 0 : i.config.dropsEnabled) && d);
  return {
    partnerGame: h ? e : null,
    dropsActivityPanelExperienceBlocked: m,
    showDropsSparkles: !c && !I
  }
}

function N(e, t, n) {
  let s = (0, E.getDrop)(e);
  (0, i.default)({
    type: t,
    name: n,
    properties: {
      drops_quest_id: null == s ? void 0 : s.dropsQuestId,
      game_id: null == s ? void 0 : s.dropsGameId
    }
  })
}