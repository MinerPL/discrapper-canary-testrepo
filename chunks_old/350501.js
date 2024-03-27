"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007"), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("759843"),
  i = n("446674"),
  r = n("812204"),
  o = n("685665"),
  u = n("428958"),
  d = n("872173"),
  c = n("945956"),
  f = n("299039"),
  h = n("305122"),
  C = n("235004"),
  p = n("78581"),
  m = n("24156"),
  E = n("774473"),
  g = n("679864"),
  I = n("553372"),
  S = n("846325"),
  _ = n("711582");

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
  } = e, R = (0, E.useSortedGuildIdsForSoundboard)(n, !0), M = function(e) {
    let [t, n] = (0, i.useStateFromStoresArray)([C.default], () => [C.default.getSounds(), C.default.getFavorites()]);
    return a.useMemo(() => {
      let l = [],
        a = [...e, S.DEFAULT_SOUND_GUILD_ID],
        s = (e, a) => {
          var s, i;
          let r = null !== (i = null === (s = t.get(e)) || void 0 === s ? void 0 : s.sort((e, t) => f.default.compare(e.soundId, t.soundId))) && void 0 !== i ? i : [];
          for (let e of r) {
            let t = n.has(e.soundId),
              s = t && a || !t && !a;
            s && l.push(e)
          }
        };
      return a.forEach(e => s(e, !0)), a.forEach(e => s(e, !1)), l
    }, [t, n, e])
  }(R), O = (0, m.useGuildIdsToFetchSoundsFor)(), y = a.useRef(null), [D, b] = a.useState(void 0), j = (0, i.useStateFromStores)([c.default], () => c.default.getMediaSessionId()), {
    analyticsLocations: G
  } = (0, o.default)(r.default.SOUNDBOARD_WHEEL), U = a.useCallback(e => {
    (0, p.playSound)(e, n.id, G), x()
  }, [G, n.id, x]);
  a.useEffect(() => {
    h.maybeFetchSoundboardSounds(), d.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), a.useEffect(() => {
    0 === M.length && 0 === O.length && x()
  }, [M.length, O, x]), a.useEffect(() => () => {
    let e = y.current;
    !A && null != e && U(e)
  }, [A, U]), (0, u.default)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: v,
      guild_id: t,
      media_session_id: j
    }
  }, {
    disableTrack: !L
  });
  let P = a.useCallback(e => {
      y.current = e, b(null == e ? void 0 : e.soundId)
    }, []),
    w = a.useCallback(e => {
      if (null == e) {
        P(null);
        return
      }
      let t = M[e];
      null != t && P(t)
    }, [P, M]),
    F = a.useCallback(e => {
      if (null == e) return;
      let t = M[e];
      null != t && U(t)
    }, [M, U]),
    B = a.useMemo(() => M.map(e => (0, l.jsx)(I.default, {
      interactive: L,
      className: _.soundButton,
      sound: e,
      focused: D === e.soundId,
      channel: n
    }, e.soundId)), [D, n, L, M]);
  return 0 === M.length ? null : (0, l.jsx)(o.AnalyticsLocationProvider, {
    value: G,
    children: (0, l.jsx)(g.default, {
      wheelWidth: N,
      wheelHeight: T,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !A,
      activeItem: D,
      onItemSelect: w,
      onItemAction: F,
      interactive: L,
      children: B
    })
  })
}