"use strict";
a.r(t), a.d(t, {
  cropGIF: function() {
    return n
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
    return E
  },
  calculateOverlaySize: function() {
    return I
  },
  downsizeImage: function() {
    return _
  }
}), a("511434"), a("313619"), a("654714"), a("287168"), a("956660"), a("222007"), a("70102"), a("311790"), a("477657"), a("811875"), a("90301"), a("652153"), a("28797"), a("817884"), a("597349"), a("667536"), a("690341");
var l = a("917351"),
  i = a("75015");

function s(e, t, a, l) {
  let i = e.naturalWidth / e.width,
    s = t.width / 2,
    n = t.height / 2,
    r = (e.width / 2 - s - a.x) * i,
    o = (e.height / 2 - n - a.y) * i,
    u = t.width * i,
    d = t.height * i,
    E = Math.min(u, l.width),
    I = Math.min(d, l.height);
  return {
    x: r,
    y: o,
    scaledCropWidth: u,
    scaledCropHeight: d,
    canvasWidth: E,
    canvasHeight: I
  }
}
async function n(e, t, l, n, r) {
  let {
    x: o,
    y: u,
    scaledCropWidth: d,
    scaledCropHeight: E
  } = s(t, l, n, r), I = await e.arrayBuffer(), _ = new Worker(new URL(a.p + a.u("39703"), a.b)), c = new Promise((e, t) => {
    _.onmessage = a => {
      let {
        data: l
      } = a;
      if (l.type === i.MessageTypes.CROP_GIF_COMPLETE) {
        var s;
        e((s = new Blob([l.result]), new Promise(e => {
          let t = new FileReader;
          t.onload = t => {
            var a;
            let l = null === (a = t.target) || void 0 === a ? void 0 : a.result;
            "string" == typeof l ? e(l) : e("")
          }, t.readAsDataURL(s)
        }))), _.terminate()
      } else l.type === i.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), _.terminate())
    }
  });
  return _.postMessage({
    type: i.MessageTypes.CROP_GIF_START,
    gif: new Uint8Array(I),
    x: 0 | o,
    y: 0 | u,
    width: 0 | d,
    height: 0 | E
  }), {
    result: c,
    cancelFn: () => _.terminate()
  }
}

function r(e, t, a, l) {
  let {
    x: i,
    y: n,
    scaledCropWidth: r,
    scaledCropHeight: o,
    canvasWidth: u,
    canvasHeight: d
  } = s(e, t, a, l), E = document.createElement("canvas");
  E.width = u, E.height = d;
  let I = E.getContext("2d");
  return null != I && I.drawImage(e, i, n, r, o, 0, 0, E.width, E.height), E.toDataURL("image/png")
}

function o(e, t, a) {
  return {
    x: (0, l.clamp)(e, a.left, a.right),
    y: (0, l.clamp)(t, a.bottom, a.top)
  }
}

function u(e, t, a, l) {
  let s = a,
    n = l;
  a > i.EDITING_CONTAINER_WIDTH && (s = i.EDITING_CONTAINER_WIDTH, n = l * (i.EDITING_CONTAINER_WIDTH / a));
  if (a / l < e) return {
    width: s,
    height: n
  };
  let r = t / n,
    o = s * r;
  return {
    width: o,
    height: t
  }
}

function d(e, t, a) {
  switch (e) {
    case i.UploadTypes.AVATAR:
    case i.UploadTypes.AVATAR_DECORATION:
      return {
        width: t, height: a
      };
    case i.UploadTypes.BANNER:
      return u(i.BANNER_ASPECT_RATIO, i.MAX_BANNER_OVERLAY_HEIGHT, t, a);
    case i.UploadTypes.GUILD_BANNER:
      return u(i.GUILD_BANNER_ASPECT_RATIO, i.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, a);
    case i.UploadTypes.VIDEO_BACKGROUND:
      return u(i.VIDEO_BACKGROUND_ASPECT_RATIO, i.MAX_VIDEO_OVERLAY_HEIGHT, t, a);
    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
      return u(i.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, i.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, a);
    case i.UploadTypes.HOME_HEADER:
      return u(i.HOME_HEADER_ASPECT_RATIO, i.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, a)
  }
}

function E(e, t, a) {
  let l = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    i = e - a.width,
    s = t - a.height;
  return 0 !== i && (l.left = -Math.abs(i / 2), l.right = i / 2), 0 !== s && (l.bottom = -Math.abs(s / 2), l.top = s / 2), l
}

function I(e, t, a, l) {
  switch (e) {
    case i.UploadTypes.AVATAR:
    case i.UploadTypes.AVATAR_DECORATION:
      let s = Math.min(t, a);
      return {
        width: s, height: s
      };
    case i.UploadTypes.BANNER:
      let n = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: n, height: n * (1 / i.BANNER_ASPECT_RATIO)
      };
    case i.UploadTypes.GUILD_BANNER:
      let r = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: r, height: Math.min(r * (9 / 16), l)
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

function _(e, t, a) {
  let l = e.naturalWidth / e.naturalHeight,
    i = t,
    s = a;
  e.naturalWidth > e.naturalHeight ? i /= l : s *= l;
  let n = {
    height: i,
    width: s
  };
  return r(e, {
    width: e.width,
    height: e.height
  }, {
    x: 0,
    y: 0
  }, n)
}