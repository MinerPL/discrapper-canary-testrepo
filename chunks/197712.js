"use strict";
n.r(e), n.d(e, {
  adjustImageDimensionsForAspectRatio: function() {
    return h
  },
  calculateDragBoundaries: function() {
    return l
  },
  calculateOverlaySize: function() {
    return T
  },
  cropGIF: function() {
    return E
  },
  cropStaticImage: function() {
    return s
  },
  downsizeImage: function() {
    return _
  },
  getBoundedCoordinates: function() {
    return o
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120"), n("411104"), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817");
var a = n("392711"),
  r = n("486324");

function i(t, e, n, a) {
  let r = t.naturalWidth / t.width,
    i = e.width / 2,
    E = e.height / 2,
    s = (t.width / 2 - i - n.x) * r,
    o = (t.height / 2 - E - n.y) * r,
    u = e.width * r,
    h = e.height * r,
    l = Math.min(u, a.width),
    T = Math.min(h, a.height);
  return {
    x: s,
    y: o,
    scaledCropWidth: u,
    scaledCropHeight: h,
    canvasWidth: l,
    canvasHeight: T
  }
}
async function E(t, e, a, E, s) {
  let {
    x: o,
    y: u,
    scaledCropWidth: h,
    scaledCropHeight: l
  } = i(e, a, E, s), T = await t.arrayBuffer(), _ = new Worker(new URL(n.p + n.u("86047"), n.b)), A = new Promise((t, e) => {
    _.onmessage = n => {
      let {
        data: a
      } = n;
      if (a.type === r.MessageTypes.CROP_GIF_COMPLETE) {
        var i;
        t((i = new Blob([a.result]), new Promise(t => {
          let e = new FileReader;
          e.onload = e => {
            var n;
            let a = null === (n = e.target) || void 0 === n ? void 0 : n.result;
            "string" == typeof a ? t(a) : t("")
          }, e.readAsDataURL(i)
        }))), _.terminate()
      } else a.type === r.MessageTypes.CROP_GIF_ERROR && (e(Error("Error cropping GIF")), _.terminate())
    }
  });
  return _.postMessage({
    type: r.MessageTypes.CROP_GIF_START,
    gif: new Uint8Array(T),
    x: 0 | o,
    y: 0 | u,
    width: 0 | h,
    height: 0 | l
  }), {
    result: A,
    cancelFn: () => _.terminate()
  }
}

function s(t, e, n, a) {
  let {
    x: r,
    y: E,
    scaledCropWidth: s,
    scaledCropHeight: o,
    canvasWidth: u,
    canvasHeight: h
  } = i(t, e, n, a), l = document.createElement("canvas");
  l.width = u, l.height = h;
  let T = l.getContext("2d");
  return null != T && T.drawImage(t, r, E, s, o, 0, 0, l.width, l.height), l.toDataURL("image/png")
}

function o(t, e, n) {
  return {
    x: (0, a.clamp)(t, n.left, n.right),
    y: (0, a.clamp)(e, n.bottom, n.top)
  }
}

function u(t, e, n, a) {
  let i = n,
    E = a;
  return (n > r.EDITING_CONTAINER_WIDTH && (i = r.EDITING_CONTAINER_WIDTH, E = r.EDITING_CONTAINER_WIDTH / n * a), n / a < t) ? {
    width: i,
    height: E
  } : {
    width: e / E * i,
    height: e
  }
}

function h(t, e, n) {
  switch (t) {
    case r.UploadTypes.AVATAR:
    case r.UploadTypes.AVATAR_DECORATION:
      return {
        width: e, height: n
      };
    case r.UploadTypes.BANNER:
      return u(r.BANNER_ASPECT_RATIO, r.MAX_BANNER_OVERLAY_HEIGHT, e, n);
    case r.UploadTypes.GUILD_BANNER:
      return u(r.GUILD_BANNER_ASPECT_RATIO, r.MAX_GUILD_BANNER_OVERLAY_HEIGHT, e, n);
    case r.UploadTypes.VIDEO_BACKGROUND:
      return u(r.VIDEO_BACKGROUND_ASPECT_RATIO, r.MAX_VIDEO_OVERLAY_HEIGHT, e, n);
    case r.UploadTypes.SCHEDULED_EVENT_IMAGE:
      return u(r.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, r.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, e, n);
    case r.UploadTypes.HOME_HEADER:
      return u(r.HOME_HEADER_ASPECT_RATIO, r.MAX_HOME_HEADER_OVERLAY_HEIGHT, e, n)
  }
}

function l(t, e, n) {
  let a = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    r = t - n.width,
    i = e - n.height;
  return 0 !== r && (a.left = -Math.abs(r / 2), a.right = r / 2), 0 !== i && (a.bottom = -Math.abs(i / 2), a.top = i / 2), a
}

function T(t, e, n, a) {
  switch (t) {
    case r.UploadTypes.AVATAR:
    case r.UploadTypes.AVATAR_DECORATION:
      let i = Math.min(e, n);
      return {
        width: i, height: i
      };
    case r.UploadTypes.BANNER:
      let E = Math.min(e, r.EDITING_CONTAINER_WIDTH);
      return {
        width: E, height: 1 / r.BANNER_ASPECT_RATIO * E
      };
    case r.UploadTypes.GUILD_BANNER:
      let s = Math.min(e, r.EDITING_CONTAINER_WIDTH);
      return {
        width: s, height: Math.min(9 / 16 * s, a)
      };
    case r.UploadTypes.VIDEO_BACKGROUND:
      let o = Math.min(e, r.EDITING_CONTAINER_WIDTH);
      return {
        width: o, height: 9 / 16 * o
      };
    case r.UploadTypes.SCHEDULED_EVENT_IMAGE:
      let u = Math.min(e, r.EDITING_CONTAINER_WIDTH);
      return {
        width: u, height: .4 * u
      };
    case r.UploadTypes.HOME_HEADER:
      let h = Math.min(e, r.EDITING_CONTAINER_WIDTH);
      return {
        width: h, height: 1 / r.HOME_HEADER_ASPECT_RATIO * h
      }
  }
}

function _(t, e, n) {
  let a = t.naturalWidth / t.naturalHeight,
    r = e,
    i = n;
  t.naturalWidth > t.naturalHeight ? r /= a : i *= a;
  let E = {
    height: r,
    width: i
  };
  return s(t, {
    width: t.width,
    height: t.height
  }, {
    x: 0,
    y: 0
  }, E)
}