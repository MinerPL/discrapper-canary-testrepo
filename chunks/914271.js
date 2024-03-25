"use strict";
n.r(t), n.d(t, {
  handlePollGifAttachmentAdd: function() {
    return o
  },
  handlePollMediaAttachmentAdd: function() {
    return u
  },
  removePollUploadAttachment: function() {
    return d
  },
  removeAllPollUploadAttachments: function() {
    return c
  },
  sendPollMessageWithAttachments: function() {
    return E
  }
});
var s = n("81594"),
  a = n("783480"),
  l = n("966724"),
  i = n("474643"),
  r = n("314743");
async function o(e, t, n) {
  let s = (0, r.getFileNameFromGifUrl)(t, n),
    a = await fetch(n),
    l = await a.blob(),
    i = new File([l], s, {
      type: "image/gif"
    });
  return u(e, t, i), n
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
async function E(e) {
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