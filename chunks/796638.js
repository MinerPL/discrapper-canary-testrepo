"use strict";
n.r(t), n.d(t, {
  PARTICIPANTS_HEIGHT: function() {
    return h
  },
  default: function() {
    return g
  },
  useVisibleParticipants: function() {
    return C
  }
}), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n("933546"),
  r = n("314897"),
  o = n("70956"),
  u = n("823379"),
  d = n("27457"),
  c = n("354459"),
  f = n("390441");
let h = 112,
  m = 16 / 9 * h + 8,
  p = 10 * o.default.Millis.SECOND;

function E(e) {
  var t;
  let n = r.default.getId();
  return e.type === c.ParticipantTypes.USER && e.user.id === n && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo)
}

function C(e, t) {
  let [n, a] = l.useState(Date.now());
  l.useEffect(() => {
    let e = setTimeout(() => {
      a(Date.now())
    }, p);
    return () => {
      clearTimeout(e)
    }
  }, [t]);
  let r = l.useRef({}),
    {
      visibleParticipants: o,
      participantTileWidth: d
    } = l.useMemo(() => {
      let n = Date.now(),
        a = (0, s.sortBy)(t, e => (function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          switch (e.type) {
            case c.ParticipantTypes.ACTIVITY:
              return "\0".concat(e.sortKey);
            case c.ParticipantTypes.HIDDEN_STREAM:
            case c.ParticipantTypes.STREAM:
              return "\x01".concat((0, i.default)(e.userNick, e.user));
            case c.ParticipantTypes.USER:
              var n;
              let a = "\x05";
              return e.speaking ? a = "\x02" : t - e.lastSpoke < p ? a = "\x03" : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) && (a = "\x04"), "".concat(a).concat(function(e) {
                let t = String(864e13).length;
                return String(864e13 - e).padStart(t, "0")
              }(e.lastSpoke)).concat((0, i.default)(e.userNick, e.user))
          }
        })(e, n)),
        [l, o] = (0, s.partition)(a, c.isStreamParticipant),
        d = o.findIndex(E),
        f = null; - 1 !== d && (f = o[d], o.splice(d, 1));
      let h = null != f ? e - m - 8 : e,
        C = Math.max(0, Math.min(Math.floor((h - 8) / 132), 12, t.length)),
        g = Math.min((h - 8) / C - 8, m),
        S = Math.max(0, C - l.length),
        _ = l.slice(0, C),
        T = o.slice(0, S),
        I = Array(S);
      if (S > 0) {
        let e = [];
        for (let t of T) {
          let n = r.current[t.id];
          null != n && n < S ? I[n] = t : e.push(t)
        }
        for (let t = 0; t < I.length; t++) {
          if (null != I[t]) continue;
          let n = e.shift();
          if (null == n) break;
          I[t] = n
        }
      }
      let A = I.filter(u.isNotNullish),
        v = (0, s.keyBy)((0, s.range)(A.length), e => A[e].id);
      r.current = v;
      let N = [..._, ...A];
      return null != f && N.push(f), {
        visibleParticipants: N,
        participantTileWidth: g
      }
    }, [e, t, n]);
  return {
    visibleParticipants: o,
    participantTileWidth: d
  }
}

function g(e) {
  let {
    participants: t,
    participantTileWidth: n,
    selectedParticipantId: l,
    onDoubleClick: s,
    onContextMenu: i,
    onClick: r,
    channel: o,
    inCall: u,
    popoutWindow: c,
    paused: h = !1
  } = e, p = null != c;
  return (0, a.jsx)("div", {
    className: f.root,
    children: t.map(e => {
      if (null == e) return null;
      let t = E(e);
      return (0, a.jsx)("div", {
        className: f.tileSizer,
        style: t ? {
          flexShrink: 0
        } : void 0,
        children: (0, a.jsx)(d.default, {
          participant: e,
          selected: l === e.id,
          channel: o,
          className: f.tile,
          fit: d.CallTileFit.COVER,
          onClick: r,
          onDoubleClick: s,
          onContextMenu: i,
          width: t ? m : n,
          inCall: u,
          paused: h,
          inPopout: p
        })
      }, e.id)
    })
  })
}