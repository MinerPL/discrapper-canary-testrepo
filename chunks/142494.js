"use strict";
let i, r;
n.d(t, {
  FC: function() {
    return I
  },
  _H: function() {
    return c
  },
  yR: function() {
    return E
  }
}), n(47120), n(757143);
var s = n(400053),
  o = n.n(s),
  a = n(302454),
  l = n.n(a),
  u = n(20970),
  _ = n(959525);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class c {
  format(e) {
    if (!this.hasMarkdown) return this.intlMessage.format(e);
    let [t, n] = this.getContext(e);
    return i(this.intlMessage.format(t), t, n)
  }
  astFormat(e) {
    let [t, n] = this.getContext(e);
    return r(this.intlMessage.format(t), t, n)
  }
  plainFormat(e) {
    return this.intlMessage.format(e)
  }
  getContext(e) {
    let t = _.yF.test(this.message),
      n = {};
    if (t) {
      let t = 0;
      for (let [i, r] of Object.entries(e)) this.message.includes("!!{".concat(i, "}!!")) && (n[++t] = r, e[i] = t)
    }
    return [e, n]
  }
  constructor(e, t, n) {
    d(this, "message", void 0), d(this, "hasMarkdown", void 0), d(this, "intlMessage", void 0), this.message = n ? e : e.replace(_.hN, ""), this.hasMarkdown = n, this.intlMessage = new(o())(this.message, t)
  }
}

function E(e) {
  i = function(e, t) {
    let n = l().parserFor(t(e)),
      i = l().reactFor(l().ruleOutput(e, "react"));
    return (e, t, r) => {
      let s = !e.includes("\n\n");
      return !s && (e += "\n\n"), i(n(e, {
        inline: s,
        context: t,
        unsafeContext: r
      }))
    }
  }(u.j, e), r = function(e) {
    let t = l().parserFor(e);
    return (e, n, i) => t(e + "\n\n", {
      inline: !1,
      context: n,
      unsafeContext: i
    })
  }(u.j)
}

function I(e, t) {
  if (null == e) return "";
  null == i && E(n(281071).Z), e = e.replace(/^\n+|\n+$/g, "");
  let r = _.aT.test(e),
    s = _.b9.test(e);
  return r || s ? new c(e, t, s) : e
}