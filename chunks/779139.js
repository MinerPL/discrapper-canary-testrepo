"use strict";
n.r(t), n.d(t, {
  handleWelcomeCtaClicked: function() {
    return d
  },
  pickWelcomeSticker: function() {
    return u
  }
});
var s = n("904245"),
  a = n("594174"),
  l = n("626135"),
  i = n("709054"),
  r = n("8532"),
  o = n("981631");
let u = e => {
    var t;
    let n = null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
      s = ((null != n ? i.default.extractTimestamp(n) : 0) + i.default.extractTimestamp(e)) % r.WELCOME_STICKERS.length;
    return r.WELCOME_STICKERS[s]
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