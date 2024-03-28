"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120"), n("653041");
var l = n("735250"),
  a = n("470079"),
  s = n("990547"),
  i = n("442837"),
  r = n("100527"),
  o = n("906732"),
  u = n("213609"),
  d = n("675478"),
  c = n("19780"),
  f = n("709054"),
  h = n("208049"),
  C = n("763296"),
  p = n("242291"),
  m = n("174470"),
  g = n("549771"),
  E = n("964398"),
  S = n("409673"),
  _ = n("710111"),
  I = n("403891");

function N(e) {
  let {
    guildId: t,
    channel: n,
    width: N,
    height: T,
    keepOpen: A,
    interactive: L = !0,
    analyticsSource: v,
    onClose: x
  } = e, R = function(e) {
    let [t, n] = (0, i.useStateFromStoresArray)([C.default], () => [C.default.getSounds(), C.default.getFavorites()]);
    return a.useMemo(() => {
      let l = [],
        a = [...e, _.DEFAULT_SOUND_GUILD_ID],
        s = (e, a) => {
          var s, i;
          for (let r of null !== (i = null === (s = t.get(e)) || void 0 === s ? void 0 : s.sort((e, t) => f.default.compare(e.soundId, t.soundId))) && void 0 !== i ? i : []) {
            let e = n.has(r.soundId);
            (e && a || !e && !a) && l.push(r)
          }
        };
      return a.forEach(e => s(e, !0)), a.forEach(e => s(e, !1)), l
    }, [t, n, e])
  }((0, g.useSortedGuildIdsForSoundboard)(n, !0)), M = (0, m.useGuildIdsToFetchSoundsFor)(), O = a.useRef(null), [y, D] = a.useState(void 0), b = (0, i.useStateFromStores)([c.default], () => c.default.getMediaSessionId()), {
    analyticsLocations: j
  } = (0, o.default)(r.default.SOUNDBOARD_WHEEL), G = a.useCallback(e => {
    (0, p.playSound)(e, n.id, j), x()
  }, [j, n.id, x]);
  a.useEffect(() => {
    h.maybeFetchSoundboardSounds(), d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), a.useEffect(() => {
    0 === R.length && 0 === M.length && x()
  }, [R.length, M, x]), a.useEffect(() => () => {
    let e = O.current;
    !A && null != e && G(e)
  }, [A, G]), (0, u.default)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: v,
      guild_id: t,
      media_session_id: b
    }
  }, {
    disableTrack: !L
  });
  let U = a.useCallback(e => {
      O.current = e, D(null == e ? void 0 : e.soundId)
    }, []),
    P = a.useCallback(e => {
      if (null == e) {
        U(null);
        return
      }
      let t = R[e];
      null != t && U(t)
    }, [U, R]),
    w = a.useCallback(e => {
      if (null == e) return;
      let t = R[e];
      null != t && G(t)
    }, [R, G]),
    F = a.useMemo(() => R.map(e => (0, l.jsx)(S.default, {
      interactive: L,
      className: I.soundButton,
      sound: e,
      focused: y === e.soundId,
      channel: n
    }, e.soundId)), [y, n, L, R]);
  return 0 === R.length ? null : (0, l.jsx)(o.AnalyticsLocationProvider, {
    value: j,
    children: (0, l.jsx)(E.default, {
      wheelWidth: N,
      wheelHeight: T,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !A,
      activeItem: y,
      onItemSelect: P,
      onItemAction: w,
      interactive: L,
      children: F
    })
  })
}