"use strict";
n.r(t), n.d(t, {
  sortChannelIds: function() {
    return s
  }
});
var a = n("299039");

function s(e) {
  return e.sort((e, t) => a.default.compare(e.lastMessageId, t.lastMessageId)).reverse()
}