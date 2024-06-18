"use strict";
n.d(t, {
  Z: function() {
    return I
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(665443),
  o = n.n(s),
  a = n(259443),
  l = n(992774);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = new a.Y("DirectVideo");
class d {
  addref() {
    this.refcount++
  }
  release() {
    return this.refcount--, 0 === this.refcount
  }
  constructor(e) {
    u(this, "refcount", void 0), u(this, "stream", void 0), this.refcount = 1, this.stream = window.createDiscordStream(e)
  }
}
let c = new Map;

function E(e) {
  let t = c.get(e);
  null != t && t.release() && ((0, l.zS)().removeDirectVideoOutputSink(e), c.delete(e))
}

function I(e) {
  let {
    streamId: t,
    paused: n,
    onReady: s,
    onResize: a,
    className: u,
    ...I
  } = e, T = r.useRef(null), h = r.useRef(null), S = r.useRef({
    width: 0,
    height: 0
  }), f = r.useRef({
    streamId: t,
    paused: n,
    onReady: s,
    onResize: a
  });
  return r.useLayoutEffect(() => {
    let {
      current: e
    } = T;
    if (null != e) {
      let t = document.createElement("video");
      t.style.display = "block", t.style.width = "100%", t.style.height = "100%", t.autoplay = !0, t.muted = !0, t.addEventListener("pause", function() {
        if (!f.current.paused) {
          var e;
          null === (e = h.current) || void 0 === e || e.play()
        }
      }), t.addEventListener("resize", function() {
        var e, t, n, i, r, s;
        let {
          width: o,
          height: a
        } = S.current, l = null !== (n = null === (e = h.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0, u = null !== (i = null === (t = h.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== i ? i : 0;
        if (o !== l || a !== u) {
          let e = {
            width: l,
            height: u
          };
          null === (r = (s = f.current).onResize) || void 0 === r || r.call(s, e), S.current = e
        }
      }), t.addEventListener("canplaythrough", function() {
        var e, t;
        _.info("handleReady for ".concat(f.current.streamId, ", have onReady callback = ").concat(null != f.current.onReady)), null === (e = (t = f.current).onReady) || void 0 === e || e.call(t)
      }), _.info("create video element for ".concat(f.current.streamId, ", readyState=").concat(t.readyState)), t.readyState > 3 && _.error("video element for ".concat(f.current.streamId, " was ready before attached")), e.appendChild(t), h.current = t
    }
  }, []), r.useEffect(() => {
    f.current.streamId = t, f.current.paused = n, f.current.onReady = s, f.current.onResize = a
  }), r.useEffect(() => {
    let e = h.current;
    if (null != e) {
      if (n) null != e.srcObject && (e.srcObject = null, E(t));
      else {
        var i;
        let n;
        _.info("attaching srcObject for ".concat(t));
        return e.srcObject = (i = t, null == (n = c.get(i)) ? (n = new d(i), (0, l.zS)().addDirectVideoOutputSink(i), c.set(i, n)) : n.addref(), n.stream), () => {
          E(t), e.srcObject = null
        }
      }
    }
  }, [n, t]), (0, i.jsx)("div", {
    className: o()("media-engine-video", u),
    ref: T,
    ...I
  })
}
I.defaultProps = {
  paused: !1
}