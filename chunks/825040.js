n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(665443),
  o = n.n(a),
  s = n(970838),
  l = n(376398);

function u(e) {
  let {
streamId: t,
paused: n,
onReady: a,
onResize: u,
className: c,
...d
  } = e, _ = i.useRef(null), E = i.useRef({
width: 0,
height: 0
  });
  i.useLayoutEffect(() => {
let e = _.current;
if (null != e)
  return (0, s.rY)(t), e.srcObject = (0, l.aG)(t), () => {
    (0, s.Bw)(t), e.srcObject = null, e.load();
  };
  }, [t]), i.useEffect(() => {
var e, r;
return n ? (null === (e = _.current) || void 0 === e || e.pause(), (0, s.Bw)(t)) : null === (r = _.current) || void 0 === r || r.play().catch(() => {}), () => {
  n && (0, s.rY)(t);
};
  }, [n]);
  let f = i.useCallback(() => {
var e, t, n, r;
let {
  width: i,
  height: a
} = E.current, o = null !== (n = null === (e = _.current) || void 0 === e ? void 0 : e.videoWidth) && void 0 !== n ? n : 0, s = null !== (r = null === (t = _.current) || void 0 === t ? void 0 : t.videoHeight) && void 0 !== r ? r : 0;
if (i !== o || a !== s) {
  let e = {
    width: o,
    height: s
  };
  null == u || u(e), E.current = e;
}
  }, [u]);
  i.useLayoutEffect(() => {
let e = _.current;
if (null != e)
  return e.addEventListener('resize', f), () => e.removeEventListener('resize', f);
  }, [f]);
  let h = i.useCallback(() => {
  null == a || a();
}, [a]),
p = i.useCallback(e => {
  !n && e.currentTarget.play();
}, [n]);
  return (0, r.jsx)('video', {
className: o()('media-engine-video', c),
ref: _,
autoPlay: !0,
onPause: p,
onCanPlayThrough: h,
muted: !0,
...d
  });
}
u.defaultProps = {
  paused: !1
};