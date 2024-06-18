"use strict";
n(47120), n(789020);
var i = n(481060),
  r = n(570140),
  s = n(430742),
  o = n(904245),
  a = n(166459),
  l = n(531643),
  u = n(881052),
  _ = n(673750),
  d = n(141795),
  c = n(476326),
  E = n(680287),
  I = n(163268),
  T = n(539573),
  h = n(786761),
  S = n(3148),
  f = n(48854),
  N = n(785359),
  A = n(79390),
  m = n(623292),
  O = n(807092),
  R = n(467798),
  C = n(703558),
  p = n(117530),
  g = n(630388),
  L = n(226351),
  v = n(981631),
  D = n(689938);
async function M(e) {
  var t, n, i;
  let d, {
      channelId: c,
      uploads: M,
      draftType: P,
      parsedMessage: y,
      options: U = {},
      raiseEndpointErrors: b = !1
    } = e,
    G = new E.Z(v.ANM.MESSAGES(c)),
    w = new L.o,
    k = {
      content: "",
      nonce: "",
      channel_id: c,
      type: v.uaV.DEFAULT,
      sticker_ids: null == U ? void 0 : U.stickerIds,
      poll: null == U ? void 0 : U.poll
    };
  null != y && (k.content = null == y ? void 0 : y.content), null != O.Z.getPendingReply(c) && (k.type = v.uaV.REPLY, k.message_reference = U.messageReference, k.allowed_mentions = U.allowedMentions, (0, m.A6)(c));
  let [B, x] = (0, R.ZP)(k.content);
  B && (k.content = x, k.flags = (0, g.pj)(null !== (t = k.flags) && void 0 !== t ? t : 0, v.iLy.SUPPRESS_NOTIFICATIONS));
  let V = null !== (n = U.nonce) && void 0 !== n ? n : (0, f.r)(),
    Z = (0, S.ZP)({
      channelId: c,
      content: k.content,
      tts: null !== (i = null == y ? void 0 : y.tts) && void 0 !== i && i,
      type: k.type,
      messageReference: k.message_reference,
      flags: k.flags,
      nonce: V,
      poll: (0, A.x9)(U.poll)
    });
  return (k.nonce = V, G.on("start", e => {
    d = (0, h.e5)({
      ...Z,
      id: e.id
    }), r.Z.dispatch({
      type: "UPLOAD_START",
      channelId: c,
      file: e,
      message: d,
      uploader: G
    })
  }), G.on("progress", e => {
    r.Z.dispatch({
      type: "UPLOAD_PROGRESS",
      channelId: c,
      file: e
    })
  })), G.on("error", (e, t, n, i) => {
    if (r.Z.dispatch({
        type: "UPLOAD_FAIL",
        channelId: c,
        file: e,
        messageRecord: d
      }), (0, N.x)({
        fileItems: e.items,
        failureCode: t,
        errorMessage: null == i ? void 0 : i.msg
      }), t === v.evJ.EXPLICIT_CONTENT) {
      o.Z.sendExplicitMediaClydeError(c, null == n ? void 0 : n.attachments, I.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
      return
    }
    if (t === v.evJ.AUTOMOD_MESSAGE_BLOCKED) {
      let e = {
          code: t,
          message: null == n ? void 0 : n.message
        },
        i = null == d ? null : {
          type: _.$V.SEND,
          message: {
            ...d,
            channelId: c
          }
        };
      (0, l.openUploadError)({
        title: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
        help: (0, T.uF)(i, e)
      });
      return
    }
    if (t !== v.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) b ? w.reject(new u.Hx({
      status: t,
      body: null != n ? n : {}
    }, t)) : (0, l.openUploadError)({
      title: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
      help: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
    }), "" !== k.content && "" === C.Z.getDraft(c, P) && s.Z.saveDraft(c, k.content, P), 0 === p.Z.getUploadCount(c, P) && a.Z.setUploads({
      channelId: c,
      uploads: M,
      draftType: P
    })
  }), G.on("complete", (e, t) => {
    r.Z.dispatch({
      type: "UPLOAD_COMPLETE",
      channelId: c,
      file: e,
      aborted: G._aborted,
      messageRecord: t
    })
  }), await G.uploadFiles(M, k), w.resolve(), w.promise
}
t.Z = {
  instantBatchUpload: function(e) {
    let {
      channelId: t,
      files: n,
      draftType: i,
      isThumbnail: r = !1,
      filesMetadata: s = []
    } = e, o = Array.from(n).map((e, n) => {
      let i = null != s ? s[n] : {};
      return new d.n({
        file: e,
        platform: c.ow.WEB,
        isThumbnail: r,
        ...i
      }, t)
    });
    M({
      channelId: t,
      uploads: o,
      draftType: i
    })
  },
  upload: function e(t) {
    let {
      channelId: n,
      file: a,
      draftType: u,
      message: _,
      hasSpoiler: d,
      filename: c
    } = t, T = {
      content: "",
      tts: !1,
      hasSpoiler: d,
      filename: c
    };
    if (null != _) {
      T.content = _.content, T.tts = _.tts, T.channel_id = _.channel_id;
      let e = O.Z.getPendingReply(n);
      if (null != e) {
        let t = o.Z.getSendMessageOptionsForReply(e);
        T.type = v.uaV.REPLY, T.message_reference = t.messageReference, T.allowed_mentions = t.allowedMentions, (0, m.A6)(n)
      }
    }
    let h = new E.Z(v.ANM.MESSAGES(n));
    h.on("start", e => {
      r.Z.dispatch({
        type: "UPLOAD_START",
        channelId: n,
        file: e,
        uploader: h
      })
    }), h.on("progress", e => {
      r.Z.dispatch({
        type: "UPLOAD_PROGRESS",
        channelId: n,
        file: e
      })
    }), h.on("error", (t, d, c) => {
      if (r.Z.dispatch({
          type: "UPLOAD_FAIL",
          channelId: n,
          file: t
        }), (0, N.x)({
          fileItems: t.items,
          failureCode: d
        }), d === v.evJ.EXPLICIT_CONTENT) {
        o.Z.sendExplicitMediaClydeError(n, null == c ? void 0 : c.attachments, I.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
        return
      }(0, l.openUploadError)({
        title: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
        help: D.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
          onClick: () => {
            (0, i.closeModal)(l.UPLOAD_ERROR_MODAL_KEY), e({
              channelId: n,
              file: a,
              draftType: u,
              message: _
            })
          }
        })
      }), "" !== T.content && "" === C.Z.getDraft(n, u) && s.Z.saveDraft(n, T.content, u)
    }), h.on("complete", e => {
      r.Z.dispatch({
        type: "UPLOAD_COMPLETE",
        channelId: n,
        file: e
      })
    }), h.upload(a, T)
  },
  uploadFiles: M,
  cancel(e) {
    r.Z.dispatch({
      type: "UPLOAD_CANCEL_REQUEST",
      file: e
    }), null != e.draftContent && null != e.channelId && "" === C.Z.getDraft(e.channelId, C.d.ChannelMessage) && r.Z.dispatch({
      type: "DRAFT_SAVE",
      channelId: e.channelId,
      draft: e.draftContent,
      draftType: C.d.ChannelMessage
    })
  }
}