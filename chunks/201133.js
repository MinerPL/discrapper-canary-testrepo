"use strict";
n.d(t, {
  B: function() {
    return T
  },
  a: function() {
    return I
  }
}), n(411104);
var i = n(570140),
  r = n(493683),
  s = n(957730),
  o = n(222677),
  a = n(995774),
  l = n(314897),
  u = n(592125),
  _ = n(703558),
  d = n(62817);
let c = e => {
    let t = d.Z.getFiles(e)[0];
    return null == d.Z.getMessageForFile(t.id) ? Promise.reject() : new Promise((e, n) => {
      let r = s => {
        s.file.id === t.id && (i.Z.unsubscribe("UPLOAD_COMPLETE", r), i.Z.unsubscribe("UPLOAD_FAIL", r), "UPLOAD_COMPLETE" === s.type ? e(s.messageRecord) : n(Error("Upload failed")))
      };
      i.Z.subscribe("UPLOAD_COMPLETE", r), i.Z.subscribe("UPLOAD_FAIL", r)
    })
  },
  E = async function(e, t) {
    var i;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      o = arguments.length > 3 ? arguments[3] : void 0,
      a = arguments.length > 4 ? arguments[4] : void 0,
      d = u.Z.getChannel(t);
    if (i = l.default.getToken(), s.ZP.parse(d, ""), r);
    else {
      if (null == u.Z.getChannel(t)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
      {
        let i = n(966390).Z;
        e.description = o, await i.uploadFiles({
          channelId: t,
          uploads: [e],
          draftType: _.d.ChannelMessage,
          parsedMessage: a
        })
      }
    }
  }, I = async e => {
    let {
      file: t,
      reaction: n,
      user: i,
      altText: s,
      requireConfirmation: l = !1
    } = e, u = await r.Z.openPrivateChannel(i.id, !1, !1);
    E(t, u, l, s);
    let _ = await c(u);
    if (null != _) {
      let e = (0, a.g1)(n);
      await (0, o.rU)(u, _.id, e)
    }
  }, T = e => {
    let {
      file: t,
      reply: n,
      channel: i,
      altText: r,
      requireConfirmation: o = !1
    } = e, a = s.ZP.parse(i, n);
    return E(t, i.id, o, r, a)
  }