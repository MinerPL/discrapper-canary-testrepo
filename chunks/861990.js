"use strict";
n.d(t, {
  B: function() {
    return a
  },
  Fm: function() {
    return _
  },
  Lc: function() {
    return u
  },
  U4: function() {
    return l
  },
  hn: function() {
    return d
  },
  zz: function() {
    return o
  }
}), n(411104);
var i = n(830496),
  r = n(959517);
let s = [{
    reName: /\.jpe?g$/i,
    name: e => "image".concat(e, ".jpg"),
    type: "image/jpeg"
  }, {
    reName: /\.png$/i,
    name: e => "image".concat(e, ".png"),
    type: "image/png"
  }, {
    reName: /\.gif$/i,
    name: e => "image".concat(e, ".gif"),
    type: "image/gif"
  }, {
    reName: /\.webp$/i,
    name: e => "image".concat(e, ".webp"),
    type: "image/webp"
  }, {
    reName: /\.heic$/i,
    name: e => "image".concat(e, ".heic"),
    type: "image/heic"
  }, {
    reName: /\.heif$/i,
    name: e => "image".concat(e, ".heif"),
    type: "image/heif"
  }, {
    reName: /\.dng$/i,
    name: e => "image".concat(e, ".dng"),
    type: "image/x-adobe-dng"
  }, {
    reName: /\.mov$/i,
    name: e => "video".concat(e, ".mov"),
    type: "video/quicktime"
  }, {
    reName: /\.avi$/i,
    name: e => "video".concat(e, ".avi"),
    type: "video/x-msvideo"
  }, {
    reName: /\.mp4$/i,
    name: e => "video".concat(e, ".mp4"),
    type: "video/mp4"
  }, {
    reName: /\.webm$/i,
    name: e => "video".concat(e, ".webm"),
    type: "image/webm"
  }],
  o = 524288e3;

function a(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    s = arguments.length > 2 ? arguments[2] : void 0,
    o = {
      id: null !== (t = null == n ? void 0 : n.toString()) && void 0 !== t ? t : e.id
    };
  null != e.description && (o.description = e.description);
  let a = function(e) {
    let {
      spoiler: t
    } = e;
    return t ? r._j : ""
  }({
    spoiler: e.spoiler
  });
  return o.filename = "".concat(a).concat(null != s ? s : e.filename), o.uploaded_filename = e.uploadedFilename, "durationSecs" in e && null != e.durationSecs && (o.duration_secs = e.durationSecs), "waveform" in e && null != e.waveform && (o.waveform = e.waveform), "isThumbnail" in e && !0 === e.isThumbnail && (o.is_thumbnail = e.isThumbnail), "isRemix" in e && !0 === e.isRemix && (o.is_remix = e.isRemix), "clip" in e && null != e.clip && (o.is_clip = !0, o.title = e.clip.name, o.application_id = e.clip.applicationId, o.clip_created_at = (0, i.U)(e.clip.id), o.clip_participant_ids = (0, i.Z)(e.clip.users)), o
}

function l(e, t, n) {
  let i = new XMLHttpRequest;
  return new Promise((r, s) => {
    i.open("GET", e, !0), i.responseType = "blob", i.setRequestHeader("Range", "bytes=".concat(t, "-").concat(n)), i.onabort = e => s(e), i.onerror = e => s(e), i.ontimeout = e => s(e), i.onload = () => {
      206 === i.status ? r(i.response) : s(Error("Range request failed"))
    }, i.send()
  })
}

function u(e) {
  let t = new XMLHttpRequest;
  return new Promise((n, i) => {
    t.open("GET", e, !0), t.responseType = "blob", t.onabort = e => i(e), t.onerror = e => i(e), t.ontimeout = e => i(e), t.onload = () => {
      var e;
      return n(null == t ? void 0 : null === (e = t.response) || void 0 === e ? void 0 : e.data)
    }, t.send()
  })
}

function _(e) {
  return new Promise((t, n) => {
    let i = new XMLHttpRequest;
    i.open("HEAD", e, !0), i.onload = () => {
      if (i.status >= 200 && i.status < 300) {
        let e = i.getResponseHeader("Content-Length");
        null != e && "" !== e ? t(parseInt(e, 10)) : n(Error("Content-Length header is missing"))
      } else n(Error("HTTP request failed with status code ".concat(i.status)))
    }, i.onerror = n, i.onabort = n, i.ontimeout = n, i.send()
  })
}

function d(e) {
  var t, n, i, r, o, a;
  let l, {
      uri: u,
      i: _,
      overrideFilename: d,
      overrideType: c
    } = e,
    E = u.split("/"),
    I = E[E.length - 1];
  I = null !== (i = null === (n = I.split("?")) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== i ? i : "";
  let T = s.find(e => e.reName.test(I));
  if (null == T && null != d && (T = s.find(e => e.reName.test(d))), null != T && null != d) {
    let e = T.name(_).split(".").pop(),
      t = d.lastIndexOf(".");
    l = -1 !== t ? "".concat(d.substr(0, t), ".").concat(e) : "".concat(d, ".").concat(e)
  } else l = null != T ? T.name(_) : null != d ? d : "unknown";
  return {
    uri: u,
    filename: l,
    type: null !== (r = null != c ? c : null == T ? void 0 : T.type) && void 0 !== r ? r : "unknown",
    isVideo: -1 !== (null !== (o = null != c ? c : null == T ? void 0 : T.name(_)) && void 0 !== o ? o : "").indexOf("video"),
    isImage: -1 !== (null !== (a = null != c ? c : null == T ? void 0 : T.name(_)) && void 0 !== a ? a : "").indexOf("image")
  }
}