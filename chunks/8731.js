"use strict";
n.r(t), n.d(t, {
  cropGIF: function() {
    return a
  },
  cropStaticImage: function() {
    return o
  },
  getBoundedCoordinates: function() {
    return s
  },
  adjustImageDimensionsForAspectRatio: function() {
    return c
  },
  calculateDragBoundaries: function() {
    return d
  },
  calculateOverlaySize: function() {
    return E
  },
  downsizeImage: function() {
    return f
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
var l = n("917351"),
  i = n("75015");

function r(e, t, n, l) {
  let i = e.naturalWidth / e.width,
    r = t.width / 2,
    a = t.height / 2,
    o = (e.width / 2 - r - n.x) * i,
    s = (e.height / 2 - a - n.y) * i,
    u = t.width * i,
    c = t.height * i,
    d = Math.min(u, l.width),
    E = Math.min(c, l.height);
  return {
    x: o,
    y: s,
    scaledCropWidth: u,
    scaledCropHeight: c,
    canvasWidth: d,
    canvasHeight: E
  }
}
async function a(e, t, l, a, o) {
  let {
    x: s,
    y: u,
    scaledCropWidth: c,
    scaledCropHeight: d
  } = r(t, l, a, o), E = await e.arrayBuffer(), f = new Worker(new URL(n.p + n.u("39703"), n.b)), A = new Promise((e, t) => {
    f.onmessage = n => {
      let {
        data: l
      } = n;
      if (l.type === i.MessageTypes.CROP_GIF_COMPLETE) {
        var r;
        e((r = new Blob([l.result]), new Promise(e => {
          let t = new FileReader;
          t.onload = t => {
            var n;
            let l = null === (n = t.target) || void 0 === n ? void 0 : n.result;
            "string" == typeof l ? e(l) : e("")
          }, t.readAsDataURL(r)
        }))), f.terminate()
      } else l.type === i.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), f.terminate())
    }
  });
  return f.postMessage({
    type: i.MessageTypes.CROP_GIF_START,
    gif: new Uint8Array(E),
    x: 0 | s,
    y: 0 | u,
    width: 0 | c,
    height: 0 | d
  }), {
    result: A,
    cancelFn: () => f.terminate()
  }
}

function o(e, t, n, l) {
  let {
    x: i,
    y: a,
    scaledCropWidth: o,
    scaledCropHeight: s,
    canvasWidth: u,
    canvasHeight: c
  } = r(e, t, n, l), d = document.createElement("canvas");
  d.width = u, d.height = c;
  let E = d.getContext("2d");
  return null != E && E.drawImage(e, i, a, o, s, 0, 0, d.width, d.height), d.toDataURL("image/png")
}

function s(e, t, n) {
  return {
    x: (0, l.clamp)(e, n.left, n.right),
    y: (0, l.clamp)(t, n.bottom, n.top)
  }
}

function u(e, t, n, l) {
  let r = n,
    a = l;
  n > i.EDITING_CONTAINER_WIDTH && (r = i.EDITING_CONTAINER_WIDTH, a = l * (i.EDITING_CONTAINER_WIDTH / n));
  if (n / l < e) return {
    width: r,
    height: a
  };
  let o = t / a,
    s = r * o;
  return {
    width: s,
    height: t
  }
}

function c(e, t, n) {
  switch (e) {
    case i.UploadTypes.AVATAR:
    case i.UploadTypes.AVATAR_DECORATION:
      return {
        width: t, height: n
      };
    case i.UploadTypes.BANNER:
      return u(i.BANNER_ASPECT_RATIO, i.MAX_BANNER_OVERLAY_HEIGHT, t, n);
    case i.UploadTypes.GUILD_BANNER:
      return u(i.GUILD_BANNER_ASPECT_RATIO, i.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, n);
    case i.UploadTypes.VIDEO_BACKGROUND:
      return u(i.VIDEO_BACKGROUND_ASPECT_RATIO, i.MAX_VIDEO_OVERLAY_HEIGHT, t, n);
    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
      return u(i.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, i.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, n);
    case i.UploadTypes.HOME_HEADER:
      return u(i.HOME_HEADER_ASPECT_RATIO, i.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, n)
  }
}

function d(e, t, n) {
  let l = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    i = e - n.width,
    r = t - n.height;
  return 0 !== i && (l.left = -Math.abs(i / 2), l.right = i / 2), 0 !== r && (l.bottom = -Math.abs(r / 2), l.top = r / 2), l
}

function E(e, t, n, l) {
  switch (e) {
    case i.UploadTypes.AVATAR:
    case i.UploadTypes.AVATAR_DECORATION:
      let r = Math.min(t, n);
      return {
        width: r, height: r
      };
    case i.UploadTypes.BANNER:
      let a = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: a, height: a * (1 / i.BANNER_ASPECT_RATIO)
      };
    case i.UploadTypes.GUILD_BANNER:
      let o = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: o, height: Math.min(o * (9 / 16), l)
      };
    case i.UploadTypes.VIDEO_BACKGROUND:
      let s = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: s, height: s * (9 / 16)
      };
    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
      let u = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: u, height: .4 * u
      };
    case i.UploadTypes.HOME_HEADER:
      let c = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: c, height: c * (1 / i.HOME_HEADER_ASPECT_RATIO)
      }
  }
}

function f(e, t, n) {
  let l = e.naturalWidth / e.naturalHeight,
    i = t,
    r = n;
  e.naturalWidth > e.naturalHeight ? i /= l : r *= l;
  let a = {
    height: i,
    width: r
  };
  return o(e, {
    width: e.width,
    height: e.height
  }, {
    x: 0,
    y: 0
  }, a)
}