"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(53529),
  r = n(887490);

function s(e, t) {
  let {
    apply: n,
    deleteBackward: s,
    deleteForward: a,
    deleteFragment: l,
    insertData: u,
    insertText: _,
    onChange: d
  } = e;

  function c(n) {
    let r = i.T.currentEntry(e);
    if (null != r && (r.mergeable = !1), n >= e.history.stack.length) return;
    e.history.index = n;
    let s = i.T.currentEntry(e);
    t({
      newValue: s.value,
      newSelection: s.selection
    })
  }
  e.history = {
    index: 0,
    stack: []
  }, e.onChange = () => {
    let {
      history: t
    } = e;
    0 === t.stack.length && (t.stack = [o(e)], t.index = 0), null != e.selection && (i.T.currentEntry(e).selection = e.selection), I = null, d()
  }, e.undo = () => {
    e.history.index > 0 && c(e.history.index - 1)
  }, e.redo = () => {
    e.history.index < e.history.stack.length - 1 && c(e.history.index + 1)
  };
  let E = null,
    I = null,
    T = null;
  return e.apply = t => {
    let {
      history: s
    } = e;
    n(t);
    let a = r.bN.richValue(e);
    if (a !== T) 0 === s.stack.length && (s.stack = [o(e)], s.index = 0), i.T.isSaving(e) && (function(e, t, n) {
      let r;
      let {
        selection: s
      } = e, o = i.T.currentEntry(e), a = !0, l = !0;
      if ("insert_text" === t.type && 1 === t.text.length ? (r = "insert", l = !(("" === t.text || t.text.endsWith(" ")) && (null == n ? void 0 : n.type) === "insert_text" && !("" === n.text && n.text.endsWith(" ")))) : "split_node" === t.type ? r = "insert" : "remove_text" === t.type && 1 === t.text.length ? r = "delete" : (r = "other", a = !1, l = !1), "set_selection" === t.type && null != o) {
        o.selection = s;
        return
      }
      a && function(e, t) {
        return !((null == e ? void 0 : e.type) !== t || Date.now() - e.createdAt >= 4e3) && !0
      }(o, r) ? i.T.insertOrMergeEntry(e, r, l) : i.T.insertEntry(e, r, l)
    }(e, t, E), E = t), I = t, T = a
  }, e.deleteBackward = t => {
    i.T.withSingleEntry(e, () => s(t))
  }, e.deleteForward = t => {
    i.T.withSingleEntry(e, () => a(t))
  }, e.deleteFragment = t => {
    i.T.withSingleEntry(e, () => l(t))
  }, e.insertText = t => {
    1 === t.length && (null == I ? void 0 : I.type) === "remove_text" ? i.T.withMergedEntry(e, () => _(t)) : null != e.selection && r.M8.isExpanded(e.selection) ? i.T.withSingleEntry(e, () => _(t)) : _(t)
  }, e.insertData = t => {
    (null == I ? void 0 : I.type) === "remove_text" ? i.T.withMergedEntry(e, () => u(t)): i.T.withSingleEntry(e, () => u(t))
  }, e
}

function o(e) {
  return {
    type: "other",
    mergeable: !1,
    createdAt: Date.now(),
    value: r.bN.richValue(e),
    selection: e.selection
  }
}