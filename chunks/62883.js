"use strict";
n.r(t), n.d(t, {
  contextMenuCallbackNative: function() {
    return o
  },
  contextMenuCallbackWeb: function() {
    return a
  },
  getSelectionText: function() {
    return s
  }
});
var i = n(735250);
n(470079);
var r = n(239091);

function s() {
  let e;
  if (null != window.getSelection) {
    var t;
    e = null === (t = window.getSelection()) || void 0 === t ? void 0 : t.toString()
  } else null != document.selection && "Control" !== document.selection.type && (e = document.selection.createRange().text);
  return null != e ? e : ""
}

function o(e) {
  let t = s(),
    o = e.target;
  if ((null == o ? void 0 : o.tagName) === "TEXTAREA" || (null == o ? void 0 : o.tagName) === "INPUT") {
    if ((null == o ? void 0 : o.type) !== "checkbox") return (0, r.jW)(e, async () => {
      let {
        default: e
      } = await n.e("99989").then(n.bind(n, 889662));
      return n => (0, i.jsx)(e, {
        ...n,
        text: t
      })
    }, {
      enableSpellCheck: !0
    })
  } else if ("none" === window.getComputedStyle(o).getPropertyValue("-webkit-user-select")) {
    e.preventDefault();
    return
  } else {
    let s, o, a, l = e.target;
    for (; null != l;) "src" in l && null != l.src && (o = l.src), "href" in l && null != l.href && (s = l.href, a = l.textContent), l = null == l ? void 0 : l.parentNode;
    if (null != o) return (0, r.jW)(e, async () => {
      let {
        default: e
      } = await n.e("12241").then(n.bind(n, 115512));
      return t => (0, i.jsx)(e, {
        ...t,
        src: null != o ? o : ""
      })
    });
    if (null != s) return (0, r.jW)(e, async () => {
      let {
        default: e
      } = await n.e("96473").then(n.bind(n, 805362));
      return t => (0, i.jsx)(e, {
        ...t,
        href: s,
        textContent: a
      })
    });
    else if (null != t && "" !== t) return (0, r.jW)(e, async () => {
      let {
        default: e
      } = await n.e("3865").then(n.bind(n, 745763));
      return n => (0, i.jsx)(e, {
        ...n,
        text: t
      })
    })
  }
  return e.preventDefault(), null
}

function a(e) {
  let t = !1,
    n = e.target;
  if ((null == n ? void 0 : n.tagName) === "INPUT" || (null == n ? void 0 : n.tagName) === "TEXTAREA") t = !0;
  else if ((null == n ? void 0 : n.closest) != null && (null == n ? void 0 : n.closest("[contenteditable=true]")) != null) t = !0;
  else if (null != s() && "" !== s()) t = !0;
  else {
    let n, i, r = e.target;
    for (; null != r;) "src" in r && null != r.src && (i = r.src), "href" in r && null != r.href && (n = r.href), r = null == r ? void 0 : r.parentNode;
    (null != n || null != i) && (t = !0)
  }!t && e.preventDefault()
}