"use strict";
n.d(t, {
  $G: function() {
    return T
  },
  BU: function() {
    return N
  },
  Fr: function() {
    return p
  },
  Fz: function() {
    return C
  },
  Ko: function() {
    return c
  },
  Pe: function() {
    return g
  },
  WU: function() {
    return R
  },
  cl: function() {
    return A
  },
  g9: function() {
    return h
  },
  jW: function() {
    return I
  },
  kG: function() {
    return O
  },
  qc: function() {
    return S
  },
  zV: function() {
    return f
  }
}), n(47120), n(724458);
var i = n(392711),
  r = n.n(i),
  s = n(349033),
  o = n(999650),
  a = n(731290),
  l = n(594174),
  u = n(709054),
  _ = n(981631),
  d = n(689938);

function c(e) {
  switch (e) {
    case _.dCx.FILTER_FROM:
      return d.Z.Messages.SEARCH_ANSWER_FROM;
    case _.dCx.FILTER_MENTIONS:
      return d.Z.Messages.SEARCH_ANSWER_MENTIONS;
    case _.dCx.FILTER_HAS:
      return d.Z.Messages.SEARCH_ANSWER_HAS;
    case _.dCx.FILTER_BEFORE:
    case _.dCx.FILTER_ON:
    case _.dCx.FILTER_AFTER:
      return d.Z.Messages.SEARCH_ANSWER_DATE;
    case _.dCx.FILTER_IN:
      return d.Z.Messages.SEARCH_ANSWER_IN;
    case _.dCx.FILTER_FILE_TYPE:
      return d.Z.Messages.SEARCH_ANSWER_FILE_TYPE;
    case _.dCx.FILTER_FILE_NAME:
      return d.Z.Messages.SEARCH_ANSWER_FILE_NAME;
    case _.dCx.FILTER_PINNED:
      return d.Z.Messages.SEARCH_ANSWER_BOOLEAN
  }
}
let E = {
  [_.dCx.FILTER_BEFORE]: !0,
  [_.dCx.FILTER_AFTER]: !0,
  [_.dCx.FILTER_ON]: !0
};

function I(e, t) {
  if (a.Z.didAgree(t)) {
    let t = l.default.getCurrentUser();
    null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed)
  }
}

function T(e) {
  let t = {};
  for (let [n, i] of(e.forEach(e => {
      let {
        type: n
      } = e;
      if (_.TNx.test(n)) return;
      switch (n) {
        case _.dCx.ANSWER_BEFORE:
        case _.dCx.ANSWER_ON:
        case _.dCx.ANSWER_AFTER:
          let i = e.getData("start"),
            r = e.getData("end");
          i && (t.min_id = u.default.fromTimestamp(i)), r && (t.max_id = u.default.fromTimestamp(r));
          return
      }
      let s = function(e) {
        let t = o.ZP[e],
          n = null != t ? t.queryKey : null;
        return null == n && (n = "content"), n
      }(n);
      null == t[s] && (t[s] = new Set);
      let a = t[s];
      switch (n) {
        case _.dCx.ANSWER_USERNAME_FROM:
        case _.dCx.ANSWER_USERNAME_MENTIONS:
          a.add(e.getData("userId"));
          break;
        case _.dCx.ANSWER_FILE_TYPE:
        case _.dCx.ANSWER_FILE_NAME:
          a.add(e.getMatch(1));
          break;
        case _.dCx.ANSWER_IN:
          a.add(e.getData("channel").id);
          break;
        case _.dCx.ANSWER_HAS:
          a.add(e.getData("has"));
          break;
        case _.dCx.ANSWER_PINNED:
          a.add(e.getData("pinned"));
          break;
        default:
          a.add(e.getFullMatch().trim())
      }
    }), Object.entries(t))) i instanceof Set && (t[n] = Array.from(i));
  return t.content && (t.content = t.content.join(" ").trim(), !t.content && delete t.content), t
}

function h(e, t, n) {
  let i, r;
  let s = e.find((s, o) => t >= s.start && t <= s.end && n >= s.start && n <= s.end ? (null != e[o + 1] && (r = e[o + 1]), !0) : (i = s, !1));
  return null == s ? null : {
    previousToken: i,
    currentToken: s,
    nextToken: r,
    focusOffset: t,
    anchorOffset: n
  }
}

function S(e, t) {
  let n;
  let {
    currentToken: i,
    nextToken: r,
    previousToken: o
  } = e = null != e ? e : {};
  if (0 === t.length) return {
    type: _.Sap.EMPTY,
    filter: null,
    token: null
  };
  if (null == i) return {
    type: _.Sap.FILTER_ALL,
    filter: null,
    token: null
  };
  if (_.TNx.test(i.type)) {
    if (null == r || r.type === s.ZP.NON_TOKEN_TYPE) return {
      type: _.Sap.FILTER,
      filter: i.type,
      token: r
    };
    if (null != r && !_.KA4.test(r.type)) return {
      type: _.Sap.FILTER,
      filter: i.type,
      token: null
    }
  }
  return i.type === s.ZP.NON_TOKEN_TYPE && null != o && _.TNx.test(o.type) ? {
    type: _.Sap.FILTER,
    filter: o.type,
    token: i
  } : (i.type === s.ZP.NON_TOKEN_TYPE && (n = i), {
    type: _.Sap.FILTER_ALL,
    filter: null,
    token: n
  })
}

function f(e, t) {
  let n = [];
  return r()(e).forEach(e => {
    if (null == e || 0 === e.results.length) return;
    let i = e.group;
    n = n.concat(e.results.map(e => {
      let n = e.text;
      if (t === _.Sap.FILTER_ALL) {
        var r;
        i = null !== (r = e.group) && void 0 !== r ? r : i;
        let t = o.ZP[i];
        (null == t ? void 0 : t.key) != null && (null == t ? void 0 : t.key) !== "" && (n = "".concat(t.key, " ").concat(n))
      }
      return n
    }))
  }), n.filter(e => e)
}

function N(e) {
  return e.reduce((e, t) => null == t ? e : t.results.length + e, 0)
}

function A(e) {
  return null == e ? "" : e.map(e => e.getFullMatch()).join("")
}
let m = new s.ZP;

function O(e) {
  return m.tokenize(e)
}

function R() {
  return m.clearCache()
}

function C(e) {
  return null != e ? E[e] : null
}

function p(e, t) {
  let n = _.TNx.test(e.type);
  return (null != t || !n) && (null == t || !n || !!_.KA4.test(t.type)) && !0
}

function g() {
  (0, o.Pe)(), m.reset(), r()(o.ZP).forOwn((e, t) => m.addRule({
    type: t,
    ...e
  }))
}