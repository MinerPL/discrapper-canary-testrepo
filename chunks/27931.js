"use strict";
n.r(t), n.d(t, {
  useStageChannelParticipantsListThrottled: function() {
    return p
  },
  useThrottleDurationForChannel: function() {
    return m
  }
}), n("653041"), n("47120");
var a, l, s = n("470079"),
  i = n("392711"),
  r = n("442837"),
  o = n("638730"),
  u = n("358221"),
  d = n("136015"),
  c = n("565799"),
  f = n("431328"),
  h = n("501655");

function m(e) {
  let t = (0, f.useStageParticipantsCount)(e, h.StageChannelParticipantNamedIndex.AUDIENCE),
    [n, a] = s.useState(!1);
  return s.useEffect(() => {
    t > 100 ? a(!0) : t < 75 && a(!1)
  }, [t]), n ? 5e3 : 0
}

function p(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    l = function(e, t, n) {
      let a = (0, r.useStateFromStores)([c.default], () => [e, c.default.getParticipantsVersion(e)], [e], d.isVersionEqual),
        l = (0, r.useStateFromStores)([u.default], () => u.default.getSelectedParticipantId(e), [e]);
      return s.useMemo(() => {
        let s = [],
          r = [],
          o = -1,
          u = [];
        if (n)
          for (let t of c.default.getMutableParticipants(e, h.StageChannelParticipantNamedIndex.SPEAKER))
            if (t.type === h.StageChannelParticipantTypes.STREAM) t.id !== l && u.push(t), o++;
            else break;
        let d = (e, t, n) => {
            let a = n ? e.filter((e, t) => e.id !== l && t > o) : e,
              u = (0, i.chunk)(a, t);
            r.push(u), s.push(u.length)
          },
          f = null != l ? c.default.getParticipant(e, l) : null;
        return (null == f ? void 0 : f.speaker) ? d([f], 1, !1) : d([], 1, !1), [h.StageChannelParticipantNamedIndex.SPEAKER, h.StageChannelParticipantNamedIndex.AUDIENCE].forEach(e => {
          d(c.default.getMutableParticipants(a[0], e), t[e], e === h.StageChannelParticipantNamedIndex.SPEAKER)
        }), d(u, 1, !1), [s, r]
      }, [a, t, l, n, e])
    }(e, t, a),
    [f, m] = l,
    [p, E] = (0, o.useThrottledState)(l, n, [t[h.StageChannelParticipantNamedIndex.AUDIENCE]]),
    C = [f[a ? 3 : 0], f[1], p[2]];
  return [C, [m[a ? 3 : 0], m[1], E[2]]]
}(l = a || (a = {}))[l.SELECTED = 0] = "SELECTED", l[l.SPEAKER = 1] = "SPEAKER", l[l.AUDIENCE = 2] = "AUDIENCE", l[l.MEDIA = 3] = "MEDIA"