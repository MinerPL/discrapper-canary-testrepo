"use strict";
n.d(t, {
  Z: function() {
    return S
  }
});
var i = n(470079),
  r = n(348327),
  s = n.n(r),
  o = n(97613),
  a = n.n(o),
  l = n(990547),
  u = n(570140),
  _ = n(592125),
  d = n(944486),
  c = n(914010),
  E = n(626135),
  I = n(367907),
  T = n(565384);
let h = (0, l.trackMaker)({
  analyticEventConfigs: E.AnalyticEventConfigs,
  dispatcher: u.Z,
  TRACK_ACTION_NAME: "TRACK"
});

function S(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      disableTrack: !1,
      trackOnInitialLoad: !1
    },
    n = arguments.length > 2 ? arguments[2] : void 0,
    r = i.useRef(),
    o = i.useRef();
  i.useEffect(() => {
    let i = !s()(r.current, e);
    i && (r.current = e);
    let u = !s()(o.current, n);
    if (u && (o.current = n), !i && !u) return;
    let S = {
      ...e,
      sequenceId: a()("impression_")
    };
    return ! function(e) {
      var t, n;
      let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          name: r,
          type: s,
          properties: o
        } = e;
      if (e.type === l.ImpressionTypes.MODAL && null == e.name && (0, T.Ez)().some(e => {
          var t;
          return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide
        })) return;
      (0, T.Ps)(e);
      let a = null !== (t = null == o ? void 0 : o.guild_id) && void 0 !== t ? t : c.Z.getGuildId(),
        u = null !== (n = null == o ? void 0 : o.channel_id) && void 0 !== n ? n : d.Z.getChannelId(a),
        S = (0, E.expandEventProperties)({
          impression_type: s,
          location: (0, T.k$)(),
          ...(0, I.hH)(a),
          ...(0, I.v_)(_.Z.getChannel(u)),
          ...o
        });
      if (i) {
        (0, T.dT)(null, null);
        return
      }
      null != r && null != s && ((0, E.debugLogEvent)(r, S), h(r, S)), (0, T.dT)(r, S)
    }(S, t.disableTrack), () => {
      null != S && (0, T.dw)(S)
    }
  }, t.trackOnInitialLoad ? [] : void 0)
}