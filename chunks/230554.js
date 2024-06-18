"use strict";
n.d(t, {
  Z: function() {
    return S
  }
}), n(47120), n(757143);
var i = n(470079),
  r = n(519953),
  s = n(911969),
  o = n(998698),
  a = n(91313),
  l = n(53529),
  u = n(436660),
  _ = n(887490),
  d = n(515270),
  c = n(847302),
  E = n(42530);
let I = (e, t, n) => ({
  getSlateEditor: () => e,
  submit(e) {
    e.preventDefault(), n()
  },
  focus() {
    _.bN.focus(e)
  },
  blur() {
    r.F3.blur(e)
  },
  getCurrentWord() {
    let t = e.selection;
    if (null == t || !_.Ew.isValid(e, t) || _.M8.isExpanded(t) || (0, d.L6)(e)) return {
      word: null,
      isAtStart: !1
    };
    let [n, i] = _.bN.node(e, _.C0.parent(t.anchor.path)), [r, s] = _.bN.node(e, t.anchor.path), o = t.anchor.offset;
    if (!_.C0.hasPrevious(s) && _.LC.isText(r)) {
      let e = r.text.substring(0, o);
      if (_.aj.isType(n, "applicationCommand") && o < n.command.displayName.length + 2) return {
        word: e,
        isAtStart: !0
      }
    }
    let a = "",
      l = !1;
    for (;;) {
      if (--o < 0) {
        if (!_.C0.hasPrevious(s)) {
          l = !0;
          break
        } [r, s] = _.bN.node(e, _.C0.previous(s))
      }
      if (!_.LC.isText(r)) break;
      let t = r.text[o];
      if (E.i$.test(t)) break;
      a = t + a
    }
    return {
      word: a,
      isAtStart: l && _.C0.isFirstEditorBlock(i)
    }
  },
  getFirstText() {
    var t, n;
    return null !== (n = null === (t = _.bN.getFirstText(e)) || void 0 === t ? void 0 : t.text) && void 0 !== n ? n : ""
  },
  getCurrentCommandOption() {
    let t = a.HZ(e);
    return null == t ? null : t[0].optionName
  },
  getCurrentCommandOptionValue() {
    var n;
    let i = a.HZ(e);
    if (null == i) return [];
    let r = o.Z.getActiveCommand(t.id),
      s = null == r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.find(e => e.name === i[0].optionName);
    return null == s ? [] : a.IB(e, s, i[0], t.id)
  },
  getCommandOptionValues() {
    let n = o.Z.getActiveCommand(t.id);
    return null == n ? {} : a.tM(e, n, t.id)
  },
  insertText(n) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    l.T.withSingleEntry(e, () => {
      let s = a.HZ(e),
        o = null != s && T(t, s[0]);
      if (null != i && o && (u.Q.removeInlineChildren(e, s), r = !1), h(e, n, i, r), null != i && o) {
        let n = a.cr(e);
        if (s = _.q.updateElement(e, s), null != n) {
          let i = _.q.markdown(n[0], t.guild_id);
          (0, c.Gg)(e, s, t.id, i) && (s = _.q.updateElement(e, s))
        }
        a.xi(e, t.guild_id, t.id, _.q.updateElement(e, s), !1), u.Q.selectNextCommandOption(e)
      }
    })
  },
  insertAutocomplete(n) {
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    l.T.withSingleEntry(e, () => {
      let s = a.HZ(e),
        o = null != s && T(t, s[0]);
      if (o) u.Q.removeInlineChildren(e, s), r = !1;
      else {
        let {
          word: t
        } = this.getCurrentWord();
        null != t && t.length > 0 && u.Q.delete(e, {
          distance: t.length,
          unit: "character",
          reverse: !0
        })
      }
      h(e, n, i, r), o && u.Q.selectNextCommandOption(e)
    })
  },
  insertEmoji(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    l.T.withSingleEntry(e, () => {
      var i, r;
      let s = t.animated ? "a" : "",
        o = null !== (r = null !== (i = t.originalName) && void 0 !== i ? i : t.name) && void 0 !== r ? r : "",
        a = ":".concat(t.name, ":");
      h(e, a, null != t.id ? "<".concat(s, ":").concat(o.replace(/:/g, ""), ":").concat(t.id, ">") : null, n)
    })
  }
});

function T(e, t) {
  var n;
  let i = o.Z.getActiveCommand(e.id),
    r = null == i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find(e => e.name === t.optionName);
  return null != r && (r.type !== s.jw.STRING || (null == r ? void 0 : r.choices) != null || (null == r ? void 0 : r.autocomplete))
}

function h(e, t, n, i) {
  let r = _.bN.areStylesDisabled(e) || null == n ? t : n;
  l.T.withSingleEntry(e, () => {
    u.Q.insertText(e, i ? r + " " : r)
  })
}

function S(e, t, n, r) {
  i.useImperativeHandle(e, () => I(t, n, r), [t, n, r])
}