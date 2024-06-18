"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(925994),
  r = n(436660),
  s = n(887490);

function o(e) {
  return e.setFragmentData = t => {
    if (null != e.selection) {
      let n = (0, i.sk)(s.bN.richValue(e), {
        mode: "plain",
        range: e.selection,
        preventEmojiSurrogates: !0
      });
      t.setData("text/plain", n)
    }
  }, e.insertData = t => {
    e.insertTextData(t)
  }, e.insertFragmentData = e => !1, e.insertTextData = t => {
    let n = t.getData("text/plain");
    return 0 !== n.length && (null != e.selection && s.M8.isExpanded(e.selection) && r.Q.delete(e, {
      at: e.selection
    }), e.insertText(n), !0)
  }, e
}