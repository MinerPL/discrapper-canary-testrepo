"use strict";
n.d(t, {
  Z: function() {
    return l
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(376398),
  o = n(825040);
async function a(e) {
  let {
    deviceId: t,
    width: n,
    height: i,
    disabled: r
  } = e;
  if (r) return null;
  try {
    return await navigator.mediaDevices.getUserMedia({
      audio: !1,
      video: {
        width: n * window.devicePixelRatio,
        height: i * window.devicePixelRatio,
        frameRate: 30,
        deviceId: t
      }
    })
  } catch (e) {
    return null
  }
}

function l(e) {
  let {
    deviceId: t,
    width: n,
    height: l,
    disabled: u
  } = e, [_, d] = r.useState();
  return r.useEffect(() => {
    let e = a({
      deviceId: t,
      width: n,
      height: l,
      disabled: u
    }).then(e => {
      let t = null != e ? (0, s.N7)(e) : null;
      return d(t), {
        stream: e,
        streamId: t
      }
    });
    return () => {
      e.then(e => {
        var t;
        let {
          stream: n,
          streamId: i
        } = e;
        null != (t = n) && t.getTracks().forEach(e => e.stop()), null != i && (0, s.jC)(i)
      })
    }
  }, [t, n, l, u]), null == _ ? (0, i.jsx)("div", {
    className: "media-engine-video",
    style: {
      width: n,
      height: l
    }
  }) : (0, i.jsx)(o.Z, {
    streamId: _,
    style: {
      width: n,
      height: l
    }
  })
}
l.defaultProps = {
  disabled: !1,
  width: 320,
  height: 180
}