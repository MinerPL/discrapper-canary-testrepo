n.d(t, {
  Z: function() {
return l;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(376398),
  s = n(825040);
async function o(e) {
  let {
deviceId: t,
width: n,
height: r,
disabled: i
  } = e;
  if (i)
return null;
  try {
return await navigator.mediaDevices.getUserMedia({
  audio: !1,
  video: {
    width: n * window.devicePixelRatio,
    height: r * window.devicePixelRatio,
    frameRate: 30,
    deviceId: t
  }
});
  } catch (e) {
return null;
  }
}

function l(e) {
  let {
deviceId: t,
width: n,
height: l,
disabled: u
  } = e, [c, d] = i.useState();
  return i.useEffect(() => {
let e = o({
  deviceId: t,
  width: n,
  height: l,
  disabled: u
}).then(e => {
  let t = null != e ? (0, a.N7)(e) : null;
  return d(t), {
    stream: e,
    streamId: t
  };
});
return () => {
  e.then(e => {
    var t;
    let {
      stream: n,
      streamId: r
    } = e;
    null != (t = n) && t.getTracks().forEach(e => e.stop()), null != r && (0, a.jC)(r);
  });
};
  }, [
t,
n,
l,
u
  ]), null == c ? (0, r.jsx)('div', {
className: 'media-engine-video',
style: {
  width: n,
  height: l
}
  }) : (0, r.jsx)(s.Z, {
streamId: c,
style: {
  width: n,
  height: l
}
  });
}
l.defaultProps = {
  disabled: !1,
  width: 320,
  height: 180
};