"use strict";
n.r(t), n.d(t, {
  PARTICIPANTS_HEIGHT: function() {
    return h
  },
  useVisibleParticipants: function() {
    return g
  },
  default: function() {
    return S
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("917351"),
  i = n("246846"),
  r = n("271938"),
  u = n("718517"),
  o = n("449008"),
  d = n("679243"),
  c = n("99795"),
  f = n("11417");
let h = 112,
  m = 16 / 9 * h + 8,
  p = 10 * u.default.Millis.SECOND;

function E(e) {
  var t;
  let n = r.default.getId();
  return e.type === c.ParticipantTypes.USER && e.user.id === n && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo)
}

function g(e, t) {
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
      visibleParticipants: u,
      participantTileWidth: d
    } = l.useMemo(() => {
      let n = Date.now(),
        a = (0, s.sortBy)(t, e => (function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          switch (e.type) {
            case c.ParticipantTypes.ACTIVITY:
              return "\x00".concat(e.sortKey);
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
        [l, u] = (0, s.partition)(a, c.isStreamParticipant),
        d = u.findIndex(E),
        f = null; - 1 !== d && (f = u[d], u.splice(d, 1));
      let h = null != f ? e - m - 8 : e,
        g = Math.max(0, Math.min(Math.floor((h - 8) / 132), 12, t.length)),
        S = Math.min((h - 8) / g - 8, m),
        C = Math.max(0, g - l.length),
        _ = l.slice(0, g),
        I = u.slice(0, C),
        T = Array(C);
      if (C > 0) {
        let e = [];
        for (let t of I) {
          let n = r.current[t.id];
          null != n && n < C ? T[n] = t : e.push(t)
        }
        for (let t = 0; t < T.length; t++) {
          if (null != T[t]) continue;
          let n = e.shift();
          if (null == n) break;
          T[t] = n
        }
      }
      let v = T.filter(o.isNotNullish),
        x = (0, s.keyBy)((0, s.range)(v.length), e => v[e].id);
      r.current = x;
      let N = [..._, ...v];
      return null != f && N.push(f), {
        visibleParticipants: N,
        participantTileWidth: S
      }
    }, [e, t, n]);
  return {
    visibleParticipants: u,
    participantTileWidth: d
  }
}

function S(e) {
  let {
    participants: t,
    participantTileWidth: n,
    selectedParticipantId: l,
    onDoubleClick: s,
    onContextMenu: i,
    onClick: r,
    channel: u,
    inCall: o,
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
          channel: u,
          className: f.tile,
          fit: d.CallTileFit.COVER,
          onClick: r,
          onDoubleClick: s,
          onContextMenu: i,
          width: t ? m : n,
          inCall: o,
          paused: h,
          inPopout: p
        })
      }, e.id)
    })
  })
}