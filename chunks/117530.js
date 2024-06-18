"use strict";
n(47120), n(653041);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(668781),
  c = n(141795),
  E = n(596956),
  I = n(703558),
  T = n(981631),
  h = n(689938);
let S = new Map,
  f = [];

function N(e, t) {
  var n, i;
  return null !== (i = null === (n = A(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : f
}

function A(e) {
  var t;
  return null !== (t = S.get(e)) && void 0 !== t ? t : new Map
}

function m(e, t, n) {
  let i = A(e);
  i.set(t, n), S.set(e, i)
}
class O extends(i = u.ZP.Store) {
  getFirstUpload(e, t) {
    let n = N(e, t);
    return n.length > 0 ? n[0] : null
  }
  hasAdditionalUploads(e, t) {
    var n;
    return (null !== (n = N(e, t).length) && void 0 !== n ? n : 0) > 1
  }
  getUploads(e, t) {
    return N(e, t)
  }
  getUploadCount(e, t) {
    var n;
    return null !== (n = N(e, t).length) && void 0 !== n ? n : 0
  }
  getUpload(e, t, n) {
    return N(e, n).find(e => e.id === t)
  }
  findUpload(e, t, n) {
    return N(e, t).find(n)
  }
}
o = "UploadAttachmentStore", (s = "displayName") in(r = O) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new O(_.Z, {
  UPLOAD_ATTACHMENT_POP_FILE: function(e) {
    let {
      channelId: t
    } = e, n = [...N(t, I.d.ChannelMessage)];
    n.shift(), m(t, I.d.ChannelMessage, n)
  },
  UPLOAD_ATTACHMENT_ADD_FILES: e => {
    let {
      files: t,
      channelId: n,
      showLargeMessageDialog: i,
      draftType: r
    } = e, s = [...N(n, r)];
    if (s.length + t.length > T.dN1 && r !== I.d.SlashCommand && r !== I.d.ApplicationLauncherCommand) {
      d.Z.show({
        title: h.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
        body: h.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
          limit: T.dN1
        })
      });
      return
    }
    l().forEach(t, e => {
      let t = new c.n(e, n, i, s.length);
      t.upload(), s.push(t)
    }), m(n, r, s)
  },
  UPLOAD_ATTACHMENT_UPDATE_FILE: function(e) {
    let {
      channelId: t,
      id: n,
      filename: i,
      description: r,
      spoiler: s,
      thumbnail: o,
      draftType: a
    } = e, l = [...N(t, a)].map(e => (e.id === n && (void 0 !== i && (e.filename = i), void 0 !== s && (e.spoiler = s), void 0 !== r && (e.description = r), void 0 !== o && (e.isThumbnail = o)), e));
    m(t, a, l)
  },
  UPLOAD_ATTACHMENT_REMOVE_FILE: function(e) {
    let {
      channelId: t,
      id: n,
      draftType: i
    } = e, r = [...N(t, i)], s = r.findIndex(e => (0, E.T)({
      uri: n,
      filename: n
    }, e));
    s > -1 && (r.splice(s, 1)[0].cancel(), m(t, i, r))
  },
  UPLOAD_ATTACHMENT_REMOVE_FILES: function(e) {
    let {
      channelId: t,
      attachmentIds: n,
      draftType: i
    } = e, r = [...N(t, i)];
    n.forEach(e => {
      let t = r.findIndex(t => e === t.id);
      t > -1 && r.splice(t, 1)[0].cancel()
    }), m(t, i, r)
  },
  UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function(e) {
    let {
      channelId: t,
      draftType: n
    } = e;
    m(t, n, [])
  },
  UPLOAD_ATTACHMENT_SET_UPLOADS: function(e) {
    let {
      channelId: t,
      uploads: n,
      draftType: i
    } = e;
    m(t, i, n)
  },
  UPLOAD_ATTACHMENT_SET_FILE: function(e) {
    let {
      channelId: t,
      id: n,
      file: i,
      draftType: r
    } = e, s = [...N(t, r)].filter(e => e.id !== n), o = new c.n(i, t);
    o.upload(), s.push(o), m(t, r, s)
  },
  SIDEBAR_CLOSE: function(e) {
    let {
      baseChannelId: t
    } = e;
    m(t, I.d.FirstThreadMessage, [])
  }
})