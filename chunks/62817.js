"use strict";
n(47120), n(177593);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(375954);
let _ = Object.freeze([]),
  d = {},
  c = {},
  E = {},
  I = {},
  T = {};

function h(e, t) {}

function S() {
  T = {}
}

function f(e, t) {
  let n = d[e];
  return null != n && (d[e] = n.filter(e => e.id !== t), delete c[t], delete E[t], n.length !== d[e].length)
}

function N(e, t) {
  let n = d[e];
  if (null == n) return !1;
  d[e] = n.map(e => e.id === t.id ? {
    ...e,
    ...t
  } : e);
  let i = E[t.id];
  null != i && null != I[i.id] && (I[i.id] = {
    ...I[i.id],
    ...t
  })
}
class A extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(u.Z)
  }
  getFiles(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t ? t : _
  }
  getMessageForFile(e) {
    return E[e]
  }
  getUploaderFileForMessageId(e) {
    return I[e]
  }
  getUploadAttachments(e) {
    if (null != e) return T[e]
  }
}
o = "UploadStore", (s = "displayName") in(r = A) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new A(l.Z, {
  CONNECTION_OPEN: function() {
    T = {}
  },
  LOGOUT: function() {
    T = {}
  },
  UPLOAD_START: function(e) {
    var t;
    let {
      channelId: n,
      file: i,
      uploader: r,
      message: s
    } = e;
    if (r._aborted || r._errored) return;
    let o = null !== (t = d[n]) && void 0 !== t ? t : _;
    c[i.id] = r, d[n] = [...o, i], E[i.id] = s;
    let {
      items: a
    } = i;
    null != a && (I[s.id] = {
      ...i,
      items: a
    }), h(s.nonce, i)
  },
  UPLOAD_COMPRESSION_PROGRESS: function(e) {
    let {
      channelId: t,
      file: n
    } = e;
    N(t, n)
  },
  UPLOAD_PROGRESS: function(e) {
    let {
      channelId: t,
      file: n
    } = e;
    N(t, n)
  },
  UPLOAD_COMPLETE: function(e) {
    let {
      channelId: t,
      file: n
    } = e;
    return f(t, n.id)
  },
  UPLOAD_FAIL: function(e) {
    let {
      channelId: t,
      file: n
    } = e;
    return f(t, n.id)
  },
  UPLOAD_CANCEL_REQUEST: function(e) {
    let {
      file: t
    } = e, n = c[t.id];
    if (null == n) return !1;
    setImmediate(() => {
      var e;
      return null === (e = n.cancel) || void 0 === e ? void 0 : e.call(n)
    })
  },
  UPLOAD_ITEM_CANCEL_REQUEST: function(e) {
    let {
      file: t,
      itemId: n
    } = e, i = c[t.id];
    if (null == i) return !1;
    setImmediate(() => i.cancelItem(n))
  },
  UPLOAD_FILE_UPDATE: function(e) {
    let {
      channelId: t,
      file: n
    } = e, i = E[n.id];
    null != i && h(i.nonce, n), N(t, n)
  },
  UPLOAD_RESTORE_FAILED_UPLOAD: function(e) {
    let {
      file: t,
      messageId: n
    } = e;
    I[n] = t
  }
})