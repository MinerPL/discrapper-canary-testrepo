"use strict";
var i = n(735250);
n(470079);
var r = n(392711),
  s = n(481060),
  o = n(570140),
  a = n(846027),
  l = n(872810),
  u = n(695346),
  _ = n(199902),
  d = n(314897),
  c = n(650774),
  E = n(19780),
  I = n(594174),
  T = n(449753),
  h = n(569545),
  S = n(803647),
  f = n(70722),
  N = n(981631);
let A = (0, r.debounce)(l.xc, 1e3);
t.Z = {
  init() {
    T.Z.init(), o.Z.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
      let {
        videoState: t
      } = e, n = _.Z.getCurrentUserActiveStream();
      if (null != n) {
        let e = t === N.FQ1.PAUSED;
        (0, l.tK)(n, e)
      }
    }), o.Z.subscribe("STREAM_DELETE", e => {
      e.reason === N.si2.STREAM_FULL && ((0, l.aP)(e.streamKey, !1), (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("12222")]).then(n.bind(n, 309690));
        return t => (0, i.jsx)(e, {
          ...t
        })
      }))
    }), o.Z.subscribe("STREAM_WATCH", e => {
      let {
        streamKey: t,
        allowMultiple: n
      } = e;
      if (n) return;
      let i = (0, h.my)(t);
      _.Z.getAllActiveStreams().forEach(e => {
        if (e.ownerId !== i.ownerId && e.ownerId !== d.default.getId()) e.ownerId === d.default.getId() && a.Z.setGoLiveSource(null), (0, l.aP)((0, h.V9)(e), !1)
      })
    }), o.Z.subscribe("VOICE_STATE_UPDATES", e => {
      let {
        voiceStates: t
      } = e;
      t.forEach(e => {
        let {
          userId: t
        } = e;
        if (t !== d.default.getId()) return;
        let n = _.Z.getAllActiveStreams(),
          i = E.Z.getChannelId();
        n.forEach(e => {
          e.channelId !== i && (0, S.Z)(e, !1)
        })
      })
    }), o.Z.subscribe("STREAM_CREATE", e => {
      var t;
      let {
        streamKey: n
      } = e, {
        ownerId: i,
        guildId: r
      } = (0, h.my)(n);
      if (null == r || null == i || i !== (null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
      let s = c.Z.getMemberCount(r);
      if (null != s && !(s < 2) && !(s > f.tB)) u.eo.getSetting() && A(n)
    })
  }
}