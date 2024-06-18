"use strict";
let i, r, s;
n.d(t, {
  AS: function() {
    return c
  },
  Dw: function() {
    return E
  },
  KF: function() {
    return _
  },
  OU: function() {
    return u
  },
  li: function() {
    return d
  }
}), n(757143), n(47120), n(512722);
var o = n(911969),
  a = n(93725),
  l = n(226951);

function u(e) {
  return null == e ? [] : e.filter((t, n) => "text" !== t.type || (n > 0 && n < e.length - 1 ? "" !== t.text : "" !== t.text.trim()))
}

function _(e, t) {
  let n = e[t],
    i = "";
  for (let e of n) switch (e.type) {
    case "text":
    case "textMention":
      i += e.text;
      break;
    case "userMention":
      i += "<@".concat(e.userId, ">");
      break;
    case "channelMention":
      i += "<#".concat(e.channelId, ">");
      break;
    case "roleMention":
      i += "<@&".concat(e.roleId, ">");
      break;
    case "emoji":
      i += e.surrogate;
      break;
    case "customEmoji":
      i += "<".concat(e.animated ? "a" : "", ":").concat(e.name.replace(/:/g, "").split("~")[0], ":").concat(e.emojiId, ">")
  }
  return i
}

function d(e, t) {
  return null == e[t] ? null : _(e, t)
}

function c(e, t) {
  if (e !== s) {
    var n;
    s = e;
    let {
      group: t,
      decimal: o
    } = null !== (n = a.L[e]) && void 0 !== n ? n : a.L["en-US"];
    i = RegExp(l.Z.escape(t), "g"), r = RegExp(l.Z.escape(o), "g")
  }
  return t.replace(i, "").replace(r, ".")
}

function E(e, t) {
  let n = {};
  for (let r of t) {
    var i;
    let t = null === (i = e.options) || void 0 === i ? void 0 : i.find(e => e.name === r.name);
    if (r.type !== o.jw.ATTACHMENT && (null == t ? !void 0 : !t.autocomplete)) n[r.name] = r
  }
  return n
}
n(689079)