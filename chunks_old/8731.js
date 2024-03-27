"use strict";
l.r(t), l.d(t, {
  cropGIF: function() {
    return s
  },
  cropStaticImage: function() {
    return r
  },
  getBoundedCoordinates: function() {
    return o
  },
  adjustImageDimensionsForAspectRatio: function() {
    return d
  },
  calculateDragBoundaries: function() {
    return c
  },
  calculateOverlaySize: function() {
    return E
  },
  downsizeImage: function() {
    return I
  }
}), l("511434"), l("313619"), l("654714"), l("287168"), l("956660"), l("222007"), l("70102"), l("311790"), l("477657"), l("811875"), l("90301"), l("652153"), l("28797"), l("817884"), l("597349"), l("667536"), l("690341");
var a = l("917351"),
  i = l("75015");

function n(e, t, l, a) {
  let i = e.naturalWidth / e.width,
    n = t.width / 2,
    s = t.height / 2,
    r = (e.width / 2 - n - l.x) * i,
    o = (e.height / 2 - s - l.y) * i,
    u = t.width * i,
    d = t.height * i,
    c = Math.min(u, a.width),
    E = Math.min(d, a.height);
  return {
    x: r,
    y: o,
    scaledCropWidth: u,
    scaledCropHeight: d,
    canvasWidth: c,
    canvasHeight: E
  }
}
async function s(e, t, a, s, r) {
  let {
    x: o,
    y: u,
    scaledCropWidth: d,
    scaledCropHeight: c
  } = n(t, a, s, r), E = await e.arrayBuffer(), I = new Worker(new URL(l.p + l.u("39703"), l.b)), _ = new Promise((e, t) => {
    I.onmessage = l => {
      let {
        data: a
      } = l;
      if (a.type === i.MessageTypes.CROP_GIF_COMPLETE) {
        var n;
        e((n = new Blob([a.result]), new Promise(e => {
          let t = new FileReader;
          t.onload = t => {
            var l;
            let a = null === (l = t.target) || void 0 === l ? void 0 : l.result;
            "string" == typeof a ? e(a) : e("")
          }, t.readAsDataURL(n)
        }))), I.terminate()
      } else a.type === i.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), I.terminate())
    }
  });
  return I.postMessage({
    type: i.MessageTypes.CROP_GIF_START,
    gif: new Uint8Array(E),
    x: 0 | o,
    y: 0 | u,
    width: 0 | d,
    height: 0 | c
  }), {
    result: _,
    cancelFn: () => I.terminate()
  }
}

function r(e, t, l, a) {
  let {
    x: i,
    y: s,
    scaledCropWidth: r,
    scaledCropHeight: o,
    canvasWidth: u,
    canvasHeight: d
  } = n(e, t, l, a), c = document.createElement("canvas");
  c.width = u, c.height = d;
  let E = c.getContext("2d");
  return null != E && E.drawImage(e, i, s, r, o, 0, 0, c.width, c.height), c.toDataURL("image/png")
}

function o(e, t, l) {
  return {
    x: (0, a.clamp)(e, l.left, l.right),
    y: (0, a.clamp)(t, l.bottom, l.top)
  }
}

function u(e, t, l, a) {
  let n = l,
    s = a;
  l > i.EDITING_CONTAINER_WIDTH && (n = i.EDITING_CONTAINER_WIDTH, s = a * (i.EDITING_CONTAINER_WIDTH / l));
  if (l / a < e) return {
    width: n,
    height: s
  };
  let r = t / s,
    o = n * r;
  return {
    width: o,
    height: t
  }
}

function d(e, t, l) {
  switch (e) {
    case i.UploadTypes.AVATAR:
    case i.UploadTypes.AVATAR_DECORATION:
      return {
        width: t, height: l
      };
    case i.UploadTypes.BANNER:
      return u(i.BANNER_ASPECT_RATIO, i.MAX_BANNER_OVERLAY_HEIGHT, t, l);
    case i.UploadTypes.GUILD_BANNER:
      return u(i.GUILD_BANNER_ASPECT_RATIO, i.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, l);
    case i.UploadTypes.VIDEO_BACKGROUND:
      return u(i.VIDEO_BACKGROUND_ASPECT_RATIO, i.MAX_VIDEO_OVERLAY_HEIGHT, t, l);
    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
      return u(i.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, i.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, l);
    case i.UploadTypes.HOME_HEADER:
      return u(i.HOME_HEADER_ASPECT_RATIO, i.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, l)
  }
}

function c(e, t, l) {
  let a = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    i = e - l.width,
    n = t - l.height;
  return 0 !== i && (a.left = -Math.abs(i / 2), a.right = i / 2), 0 !== n && (a.bottom = -Math.abs(n / 2), a.top = n / 2), a
}

function E(e, t, l, a) {
  switch (e) {
    case i.UploadTypes.AVATAR:
    case i.UploadTypes.AVATAR_DECORATION:
      let n = Math.min(t, l);
      return {
        width: n, height: n
      };
    case i.UploadTypes.BANNER:
      let s = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: s, height: s * (1 / i.BANNER_ASPECT_RATIO)
      };
    case i.UploadTypes.GUILD_BANNER:
      let r = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: r, height: Math.min(r * (9 / 16), a)
      };
    case i.UploadTypes.VIDEO_BACKGROUND:
      let o = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: o, height: o * (9 / 16)
      };
    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
      let u = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: u, height: .4 * u
      };
    case i.UploadTypes.HOME_HEADER:
      let d = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: d, height: d * (1 / i.HOME_HEADER_ASPECT_RATIO)
      }
  }
}

function I(e, t, l) {
  let a = e.naturalWidth / e.naturalHeight,
    i = t,
    n = l;
  e.naturalWidth > e.naturalHeight ? i /= a : n *= a;
  let s = {
    height: i,
    width: n
  };
  return r(e, {
    width: e.width,
    height: e.height
  }, {
    x: 0,
    y: 0
  }, s)
}