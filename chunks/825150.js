"use strict";
n.r(t), n.d(t, {
  pickWelcomeSticker: function() {
    return u
  },
  handleWelcomeCtaClicked: function() {
    return d
  }
});
var s = n("819689"),
  a = n("697218"),
  l = n("599110"),
  i = n("299039"),
  r = n("417256"),
  o = n("49111");
let u = e => {
    var t;
    let n = null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
      s = null != n ? i.default.extractTimestamp(n) : 0,
      l = (s + i.default.extractTimestamp(e)) % r.WELCOME_STICKERS.length;
    return r.WELCOME_STICKERS[l]
  },
  d = (e, t, n) => {
    var i;
    s.default.sendGreetMessage(e.id, n, s.default.getSendMessageOptionsForReply({
      channel: e,
      message: t,
      shouldMention: !0,
      showMentionToggle: !0
    })), l.default.track(o.AnalyticEvents.WELCOME_CTA_CLICKED, {
      is_reply: !0,
      sticker_id: n,
      target_user: t.author.id,
      sender: null === (i = a.default.getCurrentUser()) || void 0 === i ? void 0 : i.id
    })
  }