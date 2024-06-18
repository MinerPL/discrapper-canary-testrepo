"use strict";
n.d(t, {
  Z: function() {
    return r
  }
}), n(789020);
var i = n(978003);

function r(e, t) {
  return null == (t = null != t ? t : (0, i.Z)(e) ? e.messageSnapshots[0] : void 0) ? e : e.merge({
    content: t.message.content,
    attachments: t.message.attachments,
    embeds: t.message.embeds,
    flags: t.message.flags,
    components: t.message.components,
    editedTimestamp: null,
    timestamp: t.message.timestamp,
    reactions: [],
    messageSnapshots: [],
    customRenderedContent: null
  })
}