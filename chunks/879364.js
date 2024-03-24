"use strict";
n.r(t), n.d(t, {
  useQuests: function() {
    return f
  },
  useIsQuestExpired: function() {
    return T
  },
  useQuestFormattedDate: function() {
    return I
  },
  useShouldShowSettingBadgeForQuests: function() {
    return m
  },
  useDismissNewQuestBadge: function() {
    return N
  }
}), n("222007"), n("424973");
var s = n("884691"),
  l = n("862337"),
  a = n("446674"),
  i = n("915639"),
  r = n("448881"),
  o = n("374023"),
  u = n("2973"),
  d = n("588025"),
  c = n("227231"),
  E = n("166604");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    [n, l] = s.useState(!1),
    i = (0, a.useStateFromStoresArray)([u.default], () => [...u.default.quests.values()]),
    {
      isFetchingCurrentQuests: d,
      lastFetchedCurrentQuests: c
    } = (0, a.useStateFromStoresObject)([u.default], () => ({
      isFetchingCurrentQuests: u.default.isFetchingCurrentQuests,
      lastFetchedCurrentQuests: u.default.lastFetchedCurrentQuests
    })),
    f = (0, o.getIsEligibleForQuests)({
      location: E.QuestsExperimentLocations.USE_QUESTS
    });
  s.useEffect(() => {
    !0 === t.fetch && f && !n && !d && 0 === c && (l(!0), (0, r.fetchCurrentQuests)())
  }, [t.fetch, f, n, d, c]);
  let _ = s.useMemo(() => {
    let t = null != e ? new Set(e) : null;
    return i.filter(e => null == t || t.has(e.id))
  }, [e, i]);
  return {
    quests: _,
    isFetchingCurrentQuests: d
  }
}

function _() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = f(), [n, a] = s.useState(() => new Map(e.map(e => [e.id, (0, c.isQuestExpired)(e)])));
  return s.useEffect(() => {
    if (t) return;
    let n = [];
    for (let t of e)
      if (null == t || (0, c.isQuestExpired)(t)) null != t && (0, c.isQuestExpired)(t) && a(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
      else {
        let e = new l.Timeout,
          s = () => {
            let l = Date.parse(t.config.expiresAt) - Date.now();
            e.start(l, () => {
              (0, c.isQuestExpired)(t) ? a(e => new Map(e).set(t.id, !0)): s()
            }), n.push(e)
          };
        s()
      } return () => {
      for (let e of n) e.stop()
    }
  }, [e, t]), n
}

function T(e) {
  let t = _();
  return s.useMemo(() => {
    var n;
    return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n
  }, [e, t])
}

function I(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      dateStyle: "short"
    },
    n = (0, a.useStateFromStores)([i.default], () => i.default.locale);
  return s.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
}

function m() {
  let {
    quests: e,
    isFetchingCurrentQuests: t
  } = f(void 0, {
    fetch: !0
  }), n = _(), l = s.useMemo(() => {
    let s = [];
    if (t || 0 === e.length) return s;
    for (let t of e) {
      var l;
      if (!(0, c.includesTarget)(t, d.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (l = n.get(t.id)) && void 0 !== l && l) continue;
      if ((null == t ? void 0 : t.userStatus) == null) {
        s.push(t.id);
        continue
      }
      let e = null != t.userStatus.claimedAt,
        a = (0, c.isDismissed)(t.userStatus, d.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE);
      if (!e && !a) {
        s.push(t.id);
        continue
      }
    }
    return s
  }, [e, n, t]);
  return l
}

function N() {
  let {
    quests: e
  } = f(), t = m().length > 0;
  s.useEffect(() => {
    for (let n of e) t && (0, r.dismissQuestContent)(n.id, d.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE)
  }, [e, t])
}