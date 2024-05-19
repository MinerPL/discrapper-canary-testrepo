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
  m = n("763296"),
  C = n("242291"),
  p = n("174470"),
  g = n("549771"),
  E = n("964398"),
  _ = n("409673"),
  S = n("710111"),
  I = n("599046");

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
    let [t, n] = (0, i.useStateFromStoresArray)([m.default], () => [m.default.getSounds(), m.default.getFavorites()]);
    return a.useMemo(() => {
      let l = [],
        a = [...e, S.DEFAULT_SOUND_GUILD_ID],
        s = (e, a) => {
          var s, i;
          for (let r of null !== (i = null === (s = t.get(e)) || void 0 === s ? void 0 : s.sort((e, t) => f.default.compare(e.soundId, t.soundId))) && void 0 !== i ? i : []) {
            let e = n.has(r.soundId);
            (e && a || !e && !a) && r.available && l.push(r)
          }
        };
      return a.forEach(e => s(e, !0)), a.forEach(e => s(e, !1)), l
    }, [t, n, e])
  }((0, g.useSortedGuildIdsForSoundboard)(n, !0)), M = (0, p.useGuildIdsToFetchSoundsFor)(), y = a.useRef(null), [O, D] = a.useState(void 0), b = (0, i.useStateFromStores)([c.default], () => c.default.getMediaSessionId()), {
    analyticsLocations: j
  } = (0, o.default)(r.default.SOUNDBOARD_WHEEL), P = a.useCallback(e => {
    (0, C.playSound)(e, n.id, j), x()
  }, [j, n.id, x]);
  a.useEffect(() => {
    h.maybeFetchSoundboardSounds(), d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), a.useEffect(() => {
    0 === R.length && 0 === M.length && x()
  }, [R.length, M, x]), a.useEffect(() => () => {
    let e = y.current;
    !A && null != e && P(e)
  }, [A, P]), (0, u.default)({
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
  let G = a.useCallback(e => {
      y.current = e, D(null == e ? void 0 : e.soundId)
    }, []),
    U = a.useCallback(e => {
      if (null == e) {
        G(null);
        return
      }
      let t = R[e];
      null != t && G(t)
    }, [G, R]),
    w = a.useCallback(e => {
      if (null == e) return;
      let t = R[e];
      null != t && P(t)
    }, [R, P]),
    B = a.useMemo(() => R.map(e => (0, l.jsx)(_.default, {
      interactive: L,
      className: I.soundButton,
      sound: e,
      focused: O === e.soundId,
      channel: n
    }, e.soundId)), [O, n, L, R]);
  return 0 === R.length ? null : (0, l.jsx)(o.AnalyticsLocationProvider, {
    value: j,
    children: (0, l.jsx)(E.default, {
      wheelWidth: N,
      wheelHeight: T,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !A,
      activeItem: O,
      onItemSelect: U,
      onItemAction: w,
      interactive: L,
      children: B
    })
  })
}