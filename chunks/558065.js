n.d(t, {
  Z: function() {
return f;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(665443),
  s = n.n(a),
  o = n(259443),
  l = n(992774);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let c = new o.Y('DirectVideo');
class d {
  addref() {
this.refcount++;
  }
  release() {
return this.refcount--, 0 === this.refcount;
  }
  constructor(e) {
u(this, 'refcount', void 0), u(this, 'stream', void 0), this.refcount = 1, this.stream = window.createDiscordStream(e);
  }
}
let _ = new Map();

function E(e) {
  let t = _.get(e);
  null != t && t.release() && ((0, l.zS)().removeDirectVideoOutputSink(e), _.delete(e));
}

function f(e) {
  let {
streamId: t,
paused: n,
onReady: a,
onResize: o,
className: u,
...f
  } = e, h = i.useRef(null), p = i.useRef(null), m = i.useRef({
width: 0,
height: 0
  }), I = i.useRef({
streamId: t,
paused: n,
onReady: a,
onResize: o
  });
  return i.useLayoutEffect(() => {
let {
  current: e
} = h;
if (null != e) {
  let t = document.createElement('video');
  t.style.display = 'block', t.style.width = '100%', t.style.height = '100%', t.autoplay = !0, t.muted = !0, t.addEventListener('pause', function() {
    if (!I.current.paused) {
      var e;
      null === (e = p.current) || void 0 === e || e.play();
    }
  }), t.addEventListener('resize', function() {
    var e, t, n, r, i, a;
    let {
      width: s,
      height: o
    } = m.current, l = null !== (n = null === (e = p.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0, u = null !== (r = null === (t = p.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== r ? r : 0;
    if (s !== l || o !== u) {
      let e = {
        width: l,
        height: u
      };
      null === (i = (a = I.current).onResize) || void 0 === i || i.call(a, e), m.current = e;
    }
  }), t.addEventListener('canplaythrough', function() {
    var e, t;
    c.info('handleReady for '.concat(I.current.streamId, ', have onReady callback = ').concat(null != I.current.onReady)), null === (e = (t = I.current).onReady) || void 0 === e || e.call(t);
  }), c.info('create video element for '.concat(I.current.streamId, ', readyState=').concat(t.readyState)), t.readyState > 3 && c.error('video element for '.concat(I.current.streamId, ' was ready before attached')), e.appendChild(t), p.current = t;
}
  }, []), i.useEffect(() => {
I.current.streamId = t, I.current.paused = n, I.current.onReady = a, I.current.onResize = o;
  }), i.useEffect(() => {
let e = p.current;
if (null != e) {
  if (n)
    null != e.srcObject && (e.srcObject = null, E(t));
  else {
    var r;
    let n;
    c.info('attaching srcObject for '.concat(t));
    return e.srcObject = (r = t, null == (n = _.get(r)) ? (n = new d(r), (0, l.zS)().addDirectVideoOutputSink(r), _.set(r, n)) : n.addref(), n.stream), () => {
      E(t), e.srcObject = null;
    };
  }
}
  }, [
n,
t
  ]), (0, r.jsx)('div', {
className: s()('media-engine-video', u),
ref: h,
...f
  });
}
f.defaultProps = {
  paused: !1
};