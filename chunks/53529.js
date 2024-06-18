"use strict";
n.d(t, {
  T: function() {
    return o
  }
}), n(47120), n(653041);
var i = n(887490);
let r = new WeakMap,
  s = new WeakMap,
  o = {
    isMerging(e) {
      var t;
      return null === (t = s.get(e)) || void 0 === t || t
    },
    isSaving(e) {
      var t;
      return null === (t = r.get(e)) || void 0 === t || t
    },
    withoutMerging(e, t) {
      let n = this.isMerging(e);
      s.set(e, !1);
      try {
        t()
      } finally {
        s.set(e, n)
      }
    },
    withoutSaving(e, t) {
      let n = this.isSaving(e);
      r.set(e, !1);
      try {
        t()
      } finally {
        r.set(e, n)
      }
    },
    withSingleEntry: (e, t) => a(e, "other", !1, t),
    withMergedEntry: (e, t) => a(e, "other", !0, t),
    currentEntry: e => e.history.stack.length > 0 ? e.history.stack[e.history.index] : null,
    insertOrMergeEntry(e, t) {
      let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = o.currentEntry(e);
      o.isMerging(e) && (null == i ? void 0 : i.mergeable) ? this.mergeEntry(e, n) : this.insertEntry(e, t, n)
    },
    insertEntry(e, t) {
      let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0,
        s = arguments.length > 4 ? arguments[4] : void 0;
      s = null != s ? s : e.selection, r = null != r ? r : i.bN.richValue(e);
      let {
        history: a
      } = e, l = o.currentEntry(e);
      for (null != l && (l.mergeable = !1), a.stack.length > 0 && (a.stack.length = a.index + 1); a.stack.length >= 250;) a.stack.shift();
      a.stack.push({
        type: t,
        mergeable: n,
        createdAt: Date.now(),
        value: r,
        selection: s
      }), a.index = a.stack.length - 1
    },
    mergeEntry(e) {
      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        {
          selection: n
        } = e,
        r = i.bN.richValue(e),
        s = o.currentEntry(e);
      null != s && (s.value = r, s.selection = n, !t && (s.mergeable = !1))
    }
  };

function a(e, t, n, s) {
  let a = e.children,
    l = e.selection,
    u = o.isSaving(e);
  r.set(e, !1);
  try {
    let r = s();
    return u && (n ? o.mergeEntry(e) : e.children !== a ? o.insertEntry(e, t, !1) : o.isMerging(e) && null != e.selection && (null == l || !i.M8.equals(e.selection, l)) && o.mergeEntry(e)), r
  } finally {
    r.set(e, u)
  }
}