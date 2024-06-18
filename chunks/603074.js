"use strict";
n.d(t, {
  Z: function() {
    return A
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(990547),
  l = n(442837),
  u = n(481060),
  _ = n(100527),
  d = n(906732),
  c = n(213609),
  E = n(28546),
  I = n(675478),
  T = n(19780),
  h = n(208049),
  S = n(763296),
  f = n(526617),
  N = n(949412);

function A(e) {
  let {
    guildId: t,
    channel: n,
    containerWidth: s,
    onClose: A,
    onSelect: m,
    analyticsSource: O,
    suppressPlaySound: R,
    shouldShowUpsell: C = !0,
    gridNotice: p,
    autoWidth: g = !1,
    soundButtonOverlay: L,
    listPadding: v,
    renderHeader: D,
    defaultSoundsOnly: M
  } = e, P = (0, l.e7)([S.Z], () => S.Z.isFetchingSounds() || S.Z.isFetchingDefaultSounds()), y = (0, l.e7)([T.Z], () => T.Z.getMediaSessionId()), {
    analyticsLocations: U
  } = (0, d.ZP)(_.Z.SOUNDBOARD_POPOUT);
  return (0, c.Z)({
    type: a.ImpressionTypes.POPOUT,
    name: a.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: O,
      guild_id: t,
      media_session_id: y
    }
  }), r.useEffect(() => {
    h.w(), I.DZ.loadIfNecessary(), (0, E.ql)("")
  }, []), (0, i.jsx)(d.Gt, {
    value: U,
    children: (0, i.jsx)(u.Dialog, {
      className: o()(N.picker, {
        [N.fetching]: P,
        [N.autoWidth]: g
      }),
      children: P ? (0, i.jsx)(u.Spinner, {}) : (0, i.jsx)(f.Z, {
        guildId: t,
        channel: n,
        onClose: A,
        onSelect: m,
        containerWidth: s,
        suppressPlaySound: R,
        shouldShowUpsell: C,
        gridNotice: p,
        soundButtonOverlay: L,
        listPadding: v,
        renderHeader: D,
        defaultSoundsOnly: M
      })
    })
  })
}