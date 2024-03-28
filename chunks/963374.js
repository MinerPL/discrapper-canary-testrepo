"use strict";
i.r(t), i.d(t, {
  createASTHighlighter: function() {
    return h
  }
}), i("47120"), i("757143"), i("653041");
var n = i("392711"),
  a = i.n(n),
  s = i("340358"),
  l = i.n(s);
let o = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function r(e) {
  return e.replace(/('|\u2019|\uFF07)(s|S)$/, "")
}

function u(e) {
  return e.toLowerCase()
}

function d(e) {
  return o.has(e)
}

function c(e) {
  return 0 === e.length
}

function h(e) {
  var t;
  let i = new Set((t = e, a()(t.split(/\W+/)).map(r).reject(c).map(u).reject(d).map(l()).value()));
  return e => (function e(t, i) {
    if (Array.isArray(t)) t.forEach(t => e(t, i));
    else if ("string" == typeof t.content && "codeBlock" !== t.type) {
      let e = [],
        n = "";
      t.content.split(/(\W+)/g).forEach(t => {
        var a, s;
        if (a = t, s = i, !c(a = u(r(a))) && !d(a) && s.has(l()(a))) n.length > 0 && e.push({
          type: "text",
          content: n
        }), e.push({
          type: "highlight",
          content: t
        }), n = "";
        else n += t
      }), e.length > 0 && (n.length > 0 && e.push({
        type: "text",
        content: n
      }), "text" === t.type ? t.content = e : t.content = [{
        type: "text",
        content: e
      }])
    } else null != t.content && e(t.content, i);
    return t
  })(e, i)
}