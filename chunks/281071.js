"use strict";

function i(e) {
  let t = document.body;
  if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
  let n = document.createRange(),
    i = window.getSelection(),
    a = document.createElement("textarea");
  a.value = e, a.contentEditable = "true", a.style.visibility = "none", t.appendChild(a), n.selectNodeContents(a), null == i || i.removeAllRanges(), null == i || i.addRange(n), a.focus(), a.setSelectionRange(0, e.length);
  let l = document.execCommand("copy");
  return t.removeChild(a), l
}
n.r(t), n.d(t, {
  copy: function() {
    return i
  }
}), n("70102")