"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  },
  generateAttachmentSpec: function() {
    return d
  },
  generateMessageSpecs: function() {
    return c
  }
}), n("411104"), n("653041"), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("392711"),
  i = n.n(s),
  r = n("38371"),
  o = n("981631"),
  u = n("363027");

function d() {
  return {
    width: i().random(140, 400),
    height: i().random(100, 320)
  }
}

function c(e) {
  let {
    compact: t,
    messageGroups: n,
    groupRange: a,
    attachments: l,
    fontSize: s,
    groupSpacing: u
  } = e;
  if (l > n) throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(l));
  let c = s / o.Accessibility.FONT_SIZE_DEFAULT,
    f = t ? r.HEIGHT_COMPACT_MESSAGE_START : r.HEIGHT_COZY_MESSAGE_START,
    h = t ? r.HEIGHT_COMPACT_MESSAGE : r.HEIGHT_COZY_MESSAGE,
    m = 0,
    p = Array(n).fill(null).map(() => {
      let e = i().random(1, a);
      return m += u * c + f * c + (e - 1) * h * c, e
    }),
    E = p.map((e, t) => t),
    C = [];
  for (; C.length < l;) {
    let e = d();
    C.push([E.splice(i().random(0, E.length - 1), 1)[0], e]), m += e.height + r.HEIGHT_ATTACHMEMT_PADDING * c
  }
  return {
    messages: p,
    attachmentSpecs: C,
    totalHeight: m,
    groupSpacing: u
  }
}

function f(e) {
  let {
    compact: t,
    messages: n,
    attachmentSpecs: s,
    totalHeight: i,
    groupSpacing: o
  } = e;
  return l.useMemo(() => {
    let e = Array(n.length).fill(void 0);
    for (let [t, n] of s) e[t] = n;
    return (0, a.jsx)("div", {
      className: u.wrapper,
      style: {
        height: i
      },
      children: n.map((n, l) => (0, a.jsx)(r.default, {
        groupSpacing: o,
        compact: t,
        messages: n,
        attachmentSpecs: e[l]
      }, l))
    })
  }, [t, n, s, i, o])
}