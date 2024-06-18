"use strict";
n.d(t, {
  $: function() {
    return o
  }
});
var i = n(735250);
n(470079);
var r = n(907040),
  s = n(185923);

function o(e) {
  let {
    channel: t,
    closePopout: n,
    analyticsOverride: o,
    onSelectEmoji: a,
    messageId: l
  } = e;
  return (0, i.jsx)(r.Z, {
    closePopout: n,
    channel: t,
    onSelectEmoji: a,
    pickerIntention: s.Hz.REACTION,
    analyticsOverride: o,
    messageId: l
  })
}