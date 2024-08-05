n.d(t, {
  Z: function() {
return u;
  }
});
var l = n(735250),
  r = n(470079),
  i = n(941797),
  a = n(810090),
  o = n(981631),
  s = n(689938);

function d(e) {
  let {
poster: t,
src: n,
width: i,
height: s,
naturalWidth: d,
naturalHeight: u,
play: m = !0,
className: h,
alt: c,
responsive: p
  } = e, b = r.useRef(null);
  return (r.useEffect(() => {
let {
  current: e
} = b;
if (null != e)
  m ? e.play() : e.pause();
  }, [m]), d <= o.N_j && u <= o.XKF || d <= o.XKF && u <= o.N_j) ? (0, l.jsx)(a.Z, {
ref: b,
className: h,
poster: t,
src: n,
width: i,
height: s,
responsive: p,
muted: !0,
loop: !0,
autoPlay: m,
preload: 'none',
'aria-label': c
  }) : (0, l.jsx)('img', {
alt: '',
src: t,
width: i,
height: s
  });
}

function u(e) {
  let {
src: t,
poster: n,
naturalWidth: r,
naturalHeight: a,
responsive: o,
autoPlay: u,
className: m,
playable: h = !0,
renderImageComponent: c,
renderForwardComponent: p,
alt: b = s.Z.Messages.GIF,
...g
  } = e;
  return (0, l.jsx)(i.h.Consumer, {
children: e => c({
  ...g,
  alt: b,
  src: n,
  containerClassName: m,
  autoPlay: u,
  animated: h,
  responsive: o,
  renderAccessory: e,
  renderForwardComponent: p,
  tabIndex: h ? 0 : -1,
  dataSafeSrc: t,
  children(e) {
    let {
      src: n,
      size: i,
      animating: s,
      alt: u
    } = e;
    return (0, l.jsx)(d, {
      alt: u,
      className: m,
      poster: n,
      src: t,
      width: i.width,
      height: i.height,
      naturalWidth: r,
      naturalHeight: a,
      responsive: o,
      play: h && s
    });
  }
})
  });
}