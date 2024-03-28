"use strict";
n.r(t), n.d(t, {
  handlePollGifAttachmentAdd: function() {
    return o
  },
  handlePollMediaAttachmentAdd: function() {
    return u
  },
  removeAllPollUploadAttachments: function() {
    return c
  },
  removePollUploadAttachment: function() {
    return d
  },
  sendPollMessageWithAttachments: function() {
    return f
  }
});
var s = n("166459"),
  a = n("966390"),
  l = n("476326"),
  i = n("703558"),
  r = n("398805");
async function o(e, t, n) {
  let s = (0, r.getFileNameFromGifUrl)(t, n),
    a = await fetch(n),
    l = await a.blob();
  return u(e, t, new File([l], s, {
    type: "image/gif"
  })), n
}

function u(e, t, n) {
  let a = {
    id: t,
    channelId: e,
    file: n,
    platform: l.UploadPlatform.WEB
  };
  s.default.addFile({
    file: a,
    channelId: e,
    draftType: i.DraftType.Poll
  })
}
async function d(e, t, n) {
  s.default.remove(e, t, i.DraftType.Poll)
}
async function c(e) {
  s.default.clearAll(e, i.DraftType.Poll)
}
async function f(e) {
  let {
    channel: t,
    items: n,
    poll: s,
    nonce: l,
    maxSizeCallback: r
  } = e;
  return a.default.uploadFiles({
    channelId: t.id,
    uploads: n,
    draftType: i.DraftType.Poll,
    parsedMessage: {
      content: "",
      tts: !1,
      invalidEmojis: [],
      validNonShortcutEmojis: []
    },
    options: {
      nonce: l,
      poll: s
    },
    raiseEndpointErrors: !0
  })
}