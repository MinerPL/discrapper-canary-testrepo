n(47120), n(177593);
var r, i, a, s, o = n(442837),
  l = n(570140),
  u = n(375954);
let c = Object.freeze([]),
  d = {},
  _ = {},
  E = {},
  f = {},
  h = {};

function p(e, t) {}

function m() {
  h = {};
}

function I(e, t) {
  let n = d[e];
  return null != n && (d[e] = n.filter(e => e.id !== t), delete _[t], delete E[t], n.length !== d[e].length);
}

function T(e, t) {
  let n = d[e];
  if (null == n)
return !1;
  d[e] = n.map(e => e.id === t.id ? {
...e,
...t
  } : e);
  let r = E[t.id];
  null != r && null != f[r.id] && (f[r.id] = {
...f[r.id],
...t
  });
}
class g extends(r = o.ZP.Store) {
  initialize() {
this.waitFor(u.Z);
  }
  getFiles(e) {
var t;
return null !== (t = d[e]) && void 0 !== t ? t : c;
  }
  getMessageForFile(e) {
return E[e];
  }
  getUploaderFileForMessageId(e) {
return f[e];
  }
  getUploadAttachments(e) {
if (null != e)
  return h[e];
  }
}
s = 'UploadStore', (a = 'displayName') in(i = g) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new g(l.Z, {
  CONNECTION_OPEN: function() {
h = {};
  },
  LOGOUT: function() {
h = {};
  },
  UPLOAD_START: function(e) {
var t;
let {
  channelId: n,
  file: r,
  uploader: i,
  message: a
} = e;
if (i._aborted || i._errored)
  return;
let s = null !== (t = d[n]) && void 0 !== t ? t : c;
_[r.id] = i, d[n] = [
  ...s,
  r
], E[r.id] = a;
let {
  items: o
} = r;
null != o && (f[a.id] = {
  ...r,
  items: o
}), p(a.nonce, r);
  },
  UPLOAD_COMPRESSION_PROGRESS: function(e) {
let {
  channelId: t,
  file: n
} = e;
T(t, n);
  },
  UPLOAD_PROGRESS: function(e) {
let {
  channelId: t,
  file: n
} = e;
T(t, n);
  },
  UPLOAD_COMPLETE: function(e) {
let {
  channelId: t,
  file: n
} = e;
return I(t, n.id);
  },
  UPLOAD_FAIL: function(e) {
let {
  channelId: t,
  file: n
} = e;
return I(t, n.id);
  },
  UPLOAD_CANCEL_REQUEST: function(e) {
let {
  file: t
} = e, n = _[t.id];
if (null == n)
  return !1;
setImmediate(() => {
  var e;
  return null === (e = n.cancel) || void 0 === e ? void 0 : e.call(n);
});
  },
  UPLOAD_ITEM_CANCEL_REQUEST: function(e) {
let {
  file: t,
  itemId: n
} = e, r = _[t.id];
if (null == r)
  return !1;
setImmediate(() => r.cancelItem(n));
  },
  UPLOAD_FILE_UPDATE: function(e) {
let {
  channelId: t,
  file: n
} = e, r = E[n.id];
null != r && p(r.nonce, n), T(t, n);
  },
  UPLOAD_RESTORE_FAILED_UPLOAD: function(e) {
let {
  file: t,
  messageId: n
} = e;
f[n] = t;
  }
});