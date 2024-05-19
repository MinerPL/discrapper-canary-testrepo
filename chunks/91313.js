"use strict";
n.r(t), n.d(t, {
  findTextOptions: function() {
    return C
  },
  getCommandBlock: function() {
    return S
  },
  getCurrentCommandOption: function() {
    return h
  },
  getOptionNames: function() {
    return A
  },
  getOptionValues: function() {
    return m
  },
  optionToValues: function() {
    return N
  },
  validateOption: function() {
    return O
  },
  validateOptionValues: function() {
    return p
  }
}), n("653041"), n("47120");
var i = n("911969"),
  r = n("555573"),
  a = n("998698"),
  s = n("509716"),
  o = n("897473"),
  l = n("433355"),
  u = n("703558"),
  d = n("944486"),
  _ = n("117530"),
  c = n("752305"),
  E = n("925994"),
  I = n("887490"),
  T = n("42530");
let f = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;

function S(e) {
  let t = I.EditorUtils.richValue(e)[0];
  return null == t || "applicationCommand" !== t.type ? null : [t, T.FIRST_BLOCK_PATH]
}

function h(e) {
  var t, n;
  if (null == e.selection) return null;
  let i = null !== (t = I.EditorUtils.above(e, {
    at: e.selection.focus,
    match: e => I.NodeUtils.isType(e, "applicationCommandOption")
  })) && void 0 !== t ? t : null;
  return null != i || I.RangeUtils.isCollapsed(e.selection) ? i : null !== (n = I.EditorUtils.above(e, {
    at: e.selection.anchor,
    match: e => I.NodeUtils.isType(e, "applicationCommandOption")
  })) && void 0 !== n ? n : null
}

function A(e) {
  let t = S(e),
    n = [],
    i = null == t ? void 0 : t[0].children;
  if (null != i)
    for (let e of i) I.NodeUtils.isType(e, "applicationCommandOption") && n.push(e.optionName);
  return n
}

function m(e, t) {
  let n = {};
  if (null == t.options) return {};
  let i = S(e),
    r = Object.fromEntries(t.options.map(e => [e.name, e])),
    a = null == i ? void 0 : i[0].children;
  if (null != a) {
    for (let t of a)
      if (I.NodeUtils.isType(t, "applicationCommandOption")) {
        let i = r[t.optionName];
        null != i && (n[t.optionName] = N(e, i, t))
      }
  }
  return n
}

function N(e, t, n) {
  let r = d.default.getCurrentlySelectedChannelId(),
    a = l.default.getSidebarState(r),
    s = (null == a ? void 0 : a.type) === o.SidebarType.VIEW_THREAD ? a.channelId : r,
    T = n.children.map(n => {
      if (t.type === i.ApplicationCommandOptionType.ATTACHMENT) {
        let e = _.default.getUpload(s, t.name, u.DraftType.SlashCommand);
        if (null != e) {
          var r;
          return {
            type: "text",
            text: null !== (r = e.filename) && void 0 !== r ? r : ""
          }
        }
      }
      if (I.TextUtils.isText(n)) return {
        type: "text",
        text: n.text
      };
      if (I.EditorUtils.isVoid(e, n)) {
        let e = (0, c.voidToOptionValue)(n);
        if (null != e) return e
      }
      return {
        type: "text",
        text: (0, E.serializeDescendant)(n, {
          mode: "raw"
        })
      }
    });
  if (t.type !== i.ApplicationCommandOptionType.STRING) {
    for (; T.length > 0 && "text" === T[0].type && "" === T[0].text.trim();) T.shift();
    for (; T.length > 0 && "text" === T[T.length - 1].type && "" === T[T.length - 1].text.trim();) T.pop()
  }
  return T
}

function p(e, t, n, i, a) {
  if (null == e.options) return {};
  let o = Object.fromEntries(e.options.map(e => {
    var r;
    return [e.name, s.validateOptionContent({
      option: e,
      content: null !== (r = i[e.name]) && void 0 !== r ? r : null,
      guildId: t,
      channelId: n,
      allowEmptyValues: a
    })]
  }));
  return r.updateOptionValidationStates(n, o), o
}

function O(e, t, n, i, o) {
  var l;
  let [u] = i, d = a.default.getActiveCommand(n), _ = null == d ? void 0 : null === (l = d.options) || void 0 === l ? void 0 : l.find(e => e.name === u.optionName);
  if (null == _) return;
  let c = N(e, _, u),
    E = s.validateOptionContent({
      option: _,
      content: c,
      guildId: t,
      channelId: n,
      allowEmptyValues: o
    });
  return r.updateOptionStates(n, {
    [u.optionName]: {
      lastValidationResult: E
    }
  }), E
}

function C(e, t) {
  if (null == t.options || 0 === t.options.length) return [];
  let n = I.EditorUtils.richValue(e),
    i = [],
    r = new Set(A(e)),
    a = {},
    s = new Set;
  for (let e of t.options) a[e.displayName] = e, !r.has(e.name) && s.add(e.displayName);
  let o = null;
  for (let t = 0; t < n.length; t++) {
    let r = n[t];
    if ("line" === r.type || "applicationCommand" === r.type)
      for (let u = 0; u < r.children.length; u++) {
        let d;
        let _ = r.children[u],
          c = [t, u];
        if (I.NodeUtils.isType(_, "applicationCommandOption")) {
          if (null != o) {
            var l;
            o.valueRange.focus = null !== (l = I.EditorUtils.before(e, c)) && void 0 !== l ? l : I.EditorUtils.start(e, []), o.text = (0, E.toTextValue)(n, {
              mode: "raw",
              range: o.valueRange
            }).trim(), i.push(o), o = null
          }
          continue
        }
        if (!!I.TextUtils.isText(_))
          for (f.lastIndex = 0; null != (d = f.exec(_.text));) {
            if (0 !== d.index && null == _.text.charAt(d.index - 1).match(/(\t|\s)/)) continue;
            let e = d[1];
            if (!s.has(e)) continue;
            s.delete(e);
            let t = a[e];
            if (null == t) continue;
            let r = {
                path: c,
                offset: d.index
              },
              l = {
                path: c,
                offset: r.offset + d[0].length
              },
              u = {
                path: c,
                offset: l.offset
              },
              I = {
                name: t.name,
                displayName: t.displayName,
                type: t.type,
                keyRange: {
                  anchor: r,
                  focus: l
                },
                valueRange: {
                  anchor: u,
                  focus: u
                },
                text: ""
              };
            null != o && (o.valueRange.focus = I.keyRange.anchor, o.text = (0, E.toTextValue)(n, {
              mode: "raw",
              range: o.valueRange
            }).trim(), i.push(o)), o = I
          }
      }
  }
  return null != o && (o.valueRange.focus = I.EditorUtils.end(e, []), o.text = (0, E.toTextValue)(n, {
    mode: "raw",
    range: o.valueRange
  }).trim(), i.push(o)), i
}