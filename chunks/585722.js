"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007"), n("424973");
var i = n("917351"),
  s = n.n(i),
  r = n("446674"),
  a = n("913144"),
  o = n("404118"),
  l = n("282928"),
  u = n("402752"),
  d = n("474643"),
  c = n("49111"),
  f = n("782340");
let _ = new Map,
  h = [];

function g(e, t) {
  var n, i;
  return null !== (i = null === (n = m(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== i ? i : h
}

function m(e) {
  var t;
  return null !== (t = _.get(e)) && void 0 !== t ? t : new Map
}

function E(e, t, n) {
  let i = m(e);
  i.set(t, n), _.set(e, i)
}
class p extends r.default.Store {
  getFirstUpload(e, t) {
    let n = g(e, t);
    return n.length > 0 ? n[0] : null
  }
  hasAdditionalUploads(e, t) {
    var n;
    return (null !== (n = g(e, t).length) && void 0 !== n ? n : 0) > 1
  }
  getUploads(e, t) {
    return g(e, t)
  }
  getUploadCount(e, t) {
    var n;
    return null !== (n = g(e, t).length) && void 0 !== n ? n : 0
  }
  getUpload(e, t, n) {
    return g(e, n).find(e => e.id === t)
  }
  findUpload(e, t, n) {
    return g(e, t).find(n)
  }
}
p.displayName = "UploadAttachmentStore";
var v = new p(a.default, {
  UPLOAD_ATTACHMENT_POP_FILE: function(e) {
    let {
      channelId: t
    } = e, n = [...g(t, d.DraftType.ChannelMessage)];
    n.shift(), E(t, d.DraftType.ChannelMessage, n)
  },
  UPLOAD_ATTACHMENT_ADD_FILES: e => {
    let {
      files: t,
      channelId: n,
      showLargeMessageDialog: i,
      draftType: r
    } = e, a = [...g(n, r)];
    if (a.length + t.length > c.MAX_UPLOAD_COUNT && r !== d.DraftType.SlashCommand && r !== d.DraftType.ApplicationLauncherCommand) {
      o.default.show({
        title: f.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
        body: f.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
          limit: c.MAX_UPLOAD_COUNT
        })
      });
      return
    }
    s.forEach(t, e => {
      let t = new l.CloudUpload(e, n, i, a.length);
      t.upload(), a.push(t)
    }), E(n, r, a)
  },
  UPLOAD_ATTACHMENT_UPDATE_FILE: function(e) {
    let {
      channelId: t,
      id: n,
      filename: i,
      description: s,
      spoiler: r,
      thumbnail: a,
      draftType: o
    } = e, l = [...g(t, o)], u = l.map(e => (e.id === n && (void 0 !== i && (e.filename = i), void 0 !== r && (e.spoiler = r), void 0 !== s && (e.description = s), void 0 !== a && (e.isThumbnail = a)), e));
    E(t, o, u)
  },
  UPLOAD_ATTACHMENT_REMOVE_FILE: function(e) {
    let {
      channelId: t,
      id: n,
      draftType: i
    } = e, s = [...g(t, i)], r = s.findIndex(e => (0, u.doesImageMatchUpload)({
      uri: n,
      filename: n
    }, e));
    if (r > -1) {
      let e = s.splice(r, 1)[0];
      e.cancel(), E(t, i, s)
    }
  },
  UPLOAD_ATTACHMENT_REMOVE_FILES: function(e) {
    let {
      channelId: t,
      attachmentIds: n,
      draftType: i
    } = e, s = [...g(t, i)];
    n.forEach(e => {
      let t = s.findIndex(t => e === t.id);
      if (t > -1) {
        let e = s.splice(t, 1)[0];
        e.cancel()
      }
    }), E(t, i, s)
  },
  UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function(e) {
    let {
      channelId: t,
      draftType: n
    } = e;
    E(t, n, [])
  },
  UPLOAD_ATTACHMENT_SET_UPLOADS: function(e) {
    let {
      channelId: t,
      uploads: n,
      draftType: i
    } = e;
    E(t, i, n)
  },
  UPLOAD_ATTACHMENT_SET_FILE: function(e) {
    let {
      channelId: t,
      id: n,
      file: i,
      draftType: s
    } = e, r = [...g(t, s)], a = r.filter(e => e.id !== n), o = new l.CloudUpload(i, t);
    o.upload(), a.push(o), E(t, s, a)
  },
  SIDEBAR_CLOSE: function(e) {
    let {
      baseChannelId: t
    } = e;
    E(t, d.DraftType.FirstThreadMessage, [])
  }
})