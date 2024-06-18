"use strict";
n.d(t, {
  Z: function() {
    return O
  }
});
var i = n(735250),
  r = n(470079),
  s = n(848246),
  o = n(442837),
  a = n(481060),
  l = n(846027),
  u = n(2052),
  _ = n(451467),
  d = n(386542),
  c = n(933843),
  E = n(485731),
  I = n(361291),
  T = n(430824),
  h = n(131951),
  S = n(594174),
  f = n(981631),
  N = n(37113),
  A = n(65154),
  m = n(689938);

function O(e, t) {
  let {
    preset: O,
    resolution: R,
    fps: C
  } = (0, o.cj)([I.Z], () => I.Z.getState()), p = (0, o.e7)([h.Z], () => h.Z.getGoLiveSource()), g = (0, o.e7)([S.default], () => S.default.getCurrentUser()), L = (0, o.e7)([T.Z], () => {
    var t;
    return null === (t = T.Z.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
  }), {
    location: v
  } = (0, u.O)(), {
    available: D,
    activated: M
  } = (0, d.k)(s.q.STREAM_HIGH_QUALITY), P = r.useCallback((e, r, s, o) => {
    if (e) {
      if (null != p) {
        let e = {
          qualityOptions: {
            preset: N.tI.PRESET_CUSTOM,
            resolution: r,
            frameRate: s
          },
          context: A.Yn.STREAM
        };
        null != p.desktopSource ? e.desktopSettings = {
          sourceId: p.desktopSource.id,
          sound: !0
        } : null != p.cameraSource && (e.cameraSettings = {
          videoDeviceGuid: p.cameraSource.videoDeviceGuid,
          audioDeviceGuid: p.cameraSource.audioDeviceGuid
        }), D && (0, E.J1)(!(0, c.mc)(r, s)), l.Z.setGoLiveSource(e)
      }
    } else {
      var u, _;
      u = t, _ = {
        ...v,
        object: f.qAy.RADIO_ITEM,
        objectType: o
      }, (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("28479")]).then(n.bind(n, 78865));
        return t => (0, i.jsx)(e, {
          ...t,
          analyticsSource: _
        })
      }, {
        contextKey: u === f.IlC.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
      })
    }
  }, [t, v, p, D]);
  if (null == e) return null;
  let y = O === N.tI.PRESET_DOCUMENTS ? N.ws.FPS_30 : C,
    U = N.af.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, _.Z)(N.tI.PRESET_CUSTOM, R, t, g, L);
      return D && !M && (r = !1), (0, i.jsx)(a.MenuRadioItem, {
        group: "stream-settings-fps",
        id: "stream-settings-fps-".concat(t),
        label: n,
        checked: t === C,
        action: () => P(r, R, t, f.Qqv.RESOLUTION)
      }, "stream-settings-fps-".concat(t))
    }),
    b = N.km.map(e => {
      let {
        value: t,
        label: n
      } = e, r = (0, _.Z)(N.tI.PRESET_CUSTOM, t, y, g, L);
      return D && !M && (r = !1), (0, i.jsx)(a.MenuRadioItem, {
        group: "stream-settings-resolution",
        id: "stream-settings-resolution-".concat(t),
        label: n,
        checked: t === R,
        action: () => P(r, t, y, f.Qqv.RESOLUTION)
      }, "stream-settings-resolution-".concat(t))
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.MenuGroup, {
      label: m.Z.Messages.SCREENSHARE_FRAME_RATE,
      children: U
    }), (0, i.jsx)(a.MenuGroup, {
      label: m.Z.Messages.STREAM_RESOLUTION,
      children: b
    })]
  })
}