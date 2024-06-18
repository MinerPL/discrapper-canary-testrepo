"use strict";
n.d(t, {
  Pe: function() {
    return z
  },
  Pr: function() {
    return V
  },
  Qe: function() {
    return i
  },
  nB: function() {
    return q
  }
}), n(47120), n(733860);
var i, r, s = n(658722),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(913527),
  _ = n.n(u),
  d = n(346610),
  c = n(984933),
  E = n(699516),
  I = n(768119),
  T = n(944486),
  h = n(914010),
  S = n(246946),
  f = n(594174),
  N = n(483360),
  A = n(226951),
  m = n(51144),
  O = n(981631),
  R = n(689938);

function C() {
  return new Set(_().months().map(e => e.toLowerCase()))
}

function p() {
  return new Set(_().weekdays().map(e => e.toLowerCase()))
}

function g() {
  let e = new Date().getFullYear();
  return new Set(l().range(2015, e + 1).map(e => e.toString()))
}

function L(e, t) {
  return [e, e.clone().add(1, t)]
}

function v(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return L(_()().startOf(e).add(t, e), e)
}

function D(e, t, n) {
  return L(_()(e, t).local(), n)
}

function M() {
  return {
    [R.Z.Messages.SEARCH_SHORTCUT_TODAY]: () => v("day"),
    [R.Z.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => v("day", -1),
    [R.Z.Messages.SEARCH_SHORTCUT_WEEK]: () => v("week"),
    [R.Z.Messages.SEARCH_SHORTCUT_MONTH]: () => v("month"),
    [R.Z.Messages.SEARCH_SHORTCUT_YEAR]: () => v("year")
  }
}
let P = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
  y = RegExp("\\s*(true|false)", "i");

function U(e) {
  return "".concat(e, ":")
}

function b(e) {
  return RegExp(U(e), "i")
}

function G(e) {
  let t;
  let n = e.getMatch(1),
    i = e => null != e ? null == e ? void 0 : e.id : null;
  return null != (t = O.Xyh.test(n) ? n : n === O.ME ? i(f.default.getCurrentUser()) : null != e.getMatch(4) ? i(f.default.findByTag(e.getMatch(4))) : i(f.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
}

function w(e, t) {
  let n, i;
  let r = e.getFullMatch().trim().toLowerCase(),
    s = M()[r];
  return null != s ? [n, i] = s() : C().has(r) ? [n, i] = D(r, "MMMM", "month") : p().has(r) ? [n, i] = D(r, "dddd", "day") : g().has(r) ? [n, i] = D(r, "YYYY", "year") : [n, i] = D(r, O.b2L, "day"), !!(n.isValid() && i.isValid()) && ("before" === t ? (i = n, n = null) : "after" === t && (n = i, i = null), e.setData("start", n), e.setData("end", i), !0)
}

function k(e) {
  let t = e.getMatch(1),
    n = h.Z.getGuildId(),
    i = c.ZP.getChannels(n)[c.sH].concat(c.ZP.getChannels(n)[c.Zb]),
    r = c.ZP.getTextChannelNameDisambiguations(n),
    s = l().chain(i).map(e => {
      let {
        channel: t
      } = e;
      return t
    }).find(e => {
      var n, i;
      return t === (null !== (i = null === (n = r[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : e.name)
    }).value();
  return null != s && (e.setData("channel", s), !0)
}

function B(e) {
  let t = {
    [R.Z.Messages.SEARCH_ANSWER_HAS_LINK]: "link",
    [R.Z.Messages.SEARCH_ANSWER_HAS_EMBED]: "embed",
    [R.Z.Messages.SEARCH_ANSWER_HAS_POLL]: "poll",
    [R.Z.Messages.SEARCH_ANSWER_HAS_SNAPSHOT]: "snapshot",
    [R.Z.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: "file",
    [R.Z.Messages.SEARCH_ANSWER_HAS_VIDEO]: "video",
    [R.Z.Messages.SEARCH_ANSWER_HAS_IMAGE]: "image",
    [R.Z.Messages.SEARCH_ANSWER_HAS_SOUND]: "sound",
    [R.Z.Messages.SEARCH_ANSWER_HAS_STICKER]: "sticker"
  } [e.getMatch(1)];
  return null != t && "" !== t && (e.setData("has", t), !0)
}

function x() {
  return [...Array.from(C()), ...Array.from(p()), ...Array.from(g()), ...Object.keys(M())]
}

function V() {
  return l().sample(x())
}

function Z(e, t, n) {
  return H(e, t, x()).map(e => ({
    ...e,
    group: n,
    key: "".concat(n, "-").concat(e.text)
  }))
}

function H(e, t, n) {
  let i = e.toLocaleLowerCase();
  return l()(n).filter(e => o()(i, e.toLocaleLowerCase())).take(t).map(e => ({
    text: e
  })).value()
}

function F(e, t) {
  let n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    s = I.Z.getSearchType(t),
    o = {
      query: e = e.split("#")[0],
      limit: i,
      request: r
    };
  switch (s) {
    case O.aib.GUILD:
      n = N.ZP.queryGuildUsers({
        ...o,
        guildId: t
      });
      break;
    case O.aib.CHANNEL:
      n = N.ZP.queryChannelUsers({
        ...o,
        channelId: t
      });
      break;
    case O.aib.DMS:
      n = N.ZP.queryUsers(e, i, !0, r, () => !0);
      break;
    default:
      return []
  }
  return n.filter(e => {
    let {
      record: t
    } = e;
    return !E.Z.isBlocked(t.id)
  }).map(e => {
    let {
      record: t
    } = e;
    return {
      text: m.ZP.getUserTag(t),
      user: t
    }
  })
}

function Y() {
  return I.Z.getSearchType() === O.aib.GUILD
}

function j() {
  return !S.Z.hidePersonalInformation
}
let W = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
(r = i || (i = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
let K = {};

function z() {
  Object.assign(K, function() {
    let {
      canForwardMessages: e
    } = d.w.getCurrentConfig({
      location: "SearchTokens"
    }, {
      autoTrackExposure: !1
    }), t = e ? [R.Z.Messages.SEARCH_ANSWER_HAS_SNAPSHOT] : [], n = [R.Z.Messages.SEARCH_ANSWER_HAS_LINK, R.Z.Messages.SEARCH_ANSWER_HAS_EMBED, R.Z.Messages.SEARCH_ANSWER_HAS_POLL, R.Z.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, R.Z.Messages.SEARCH_ANSWER_HAS_VIDEO, R.Z.Messages.SEARCH_ANSWER_HAS_IMAGE, R.Z.Messages.SEARCH_ANSWER_HAS_SOUND, R.Z.Messages.SEARCH_ANSWER_HAS_STICKER, ...t];
    return {
      [O.dCx.FILTER_FROM]: {
        regex: b(R.Z.Messages.SEARCH_FILTER_FROM),
        componentType: "FILTER",
        key: U(R.Z.Messages.SEARCH_FILTER_FROM),
        plainText: R.Z.Messages.SEARCH_FILTER_FROM,
        validator: j,
        getAutocompletions: F
      },
      [O.dCx.ANSWER_USERNAME_FROM]: {
        follows: [O.dCx.FILTER_FROM],
        regex: W,
        validator: G,
        mutable: !0,
        componentType: "ANSWER",
        queryKey: "author_id"
      },
      [O.dCx.FILTER_MENTIONS]: {
        regex: b(R.Z.Messages.SEARCH_FILTER_MENTIONS),
        componentType: "FILTER",
        key: U(R.Z.Messages.SEARCH_FILTER_MENTIONS),
        plainText: R.Z.Messages.SEARCH_FILTER_MENTIONS,
        validator: j,
        getAutocompletions: F
      },
      [O.dCx.ANSWER_USERNAME_MENTIONS]: {
        follows: [O.dCx.FILTER_MENTIONS],
        regex: W,
        validator: G,
        mutable: !0,
        componentType: "ANSWER",
        queryKey: "mentions"
      },
      [O.dCx.FILTER_HAS]: {
        regex: b(R.Z.Messages.SEARCH_FILTER_HAS),
        componentType: "FILTER",
        key: U(R.Z.Messages.SEARCH_FILTER_HAS),
        plainText: R.Z.Messages.SEARCH_FILTER_HAS,
        getAutocompletions: (e, t, i) => H(e, i, n)
      },
      [O.dCx.ANSWER_HAS]: {
        regex: RegExp("(?:\\s*-?(".concat(n.map(e => A.Z.escape(e)).join("|"), "))"), "i"),
        follows: [O.dCx.FILTER_HAS],
        validator: B,
        componentType: "ANSWER",
        queryKey: "has"
      },
      [O.dCx.FILTER_FILE_TYPE]: {
        regex: b(R.Z.Messages.SEARCH_FILTER_FILE_TYPE),
        key: U(R.Z.Messages.SEARCH_FILTER_FILE_TYPE),
        plainText: R.Z.Messages.SEARCH_FILTER_FILE_TYPE,
        componentType: "FILTER"
      },
      [O.dCx.ANSWER_FILE_TYPE]: {
        regex: /(?:\s*([^\s]+))/,
        follows: [O.dCx.FILTER_FILE_TYPE],
        mutable: !0,
        componentType: "ANSWER",
        queryKey: "attachment_extensions"
      },
      [O.dCx.FILTER_FILE_NAME]: {
        regex: b(R.Z.Messages.SEARCH_FILTER_FILE_NAME),
        key: U(R.Z.Messages.SEARCH_FILTER_FILE_NAME),
        plainText: R.Z.Messages.SEARCH_FILTER_FILE_NAME,
        componentType: "FILTER"
      },
      [O.dCx.ANSWER_FILE_NAME]: {
        regex: /(?:\s*([^\s]+)(?=\s))/,
        follows: [O.dCx.FILTER_FILE_NAME],
        mutable: !0,
        componentType: "ANSWER",
        queryKey: "attachment_filename"
      },
      [O.dCx.FILTER_BEFORE]: {
        regex: b(R.Z.Messages.SEARCH_FILTER_BEFORE),
        componentType: "FILTER",
        key: U(R.Z.Messages.SEARCH_FILTER_BEFORE),
        plainText: R.Z.Messages.SEARCH_FILTER_BEFORE,
        getAutocompletions: (e, t, n) => Z(e, n, O.dCx.FILTER_BEFORE)
      },
      [O.dCx.FILTER_ON]: {
        regex: b("(".concat(R.Z.Messages.SEARCH_FILTER_ON, "|").concat(R.Z.Messages.SEARCH_FILTER_DURING, ")")),
        componentType: "FILTER",
        key: U(R.Z.Messages.SEARCH_FILTER_DURING),
        plainText: R.Z.Messages.SEARCH_FILTER_DURING,
        getAutocompletions: (e, t, n) => Z(e, n, O.dCx.FILTER_ON)
      },
      [O.dCx.FILTER_AFTER]: {
        regex: b(R.Z.Messages.SEARCH_FILTER_AFTER),
        componentType: "FILTER",
        key: U(R.Z.Messages.SEARCH_FILTER_AFTER),
        plainText: R.Z.Messages.SEARCH_FILTER_AFTER,
        getAutocompletions: (e, t, n) => Z(e, n, O.dCx.FILTER_AFTER)
      },
      [O.dCx.ANSWER_BEFORE]: {
        regex: P,
        follows: [O.dCx.FILTER_BEFORE],
        componentType: "ANSWER",
        mutable: !0,
        validator: e => w(e, "before")
      },
      [O.dCx.ANSWER_ON]: {
        regex: P,
        follows: [O.dCx.FILTER_ON],
        componentType: "ANSWER",
        mutable: !0,
        validator: e => w(e, "on")
      },
      [O.dCx.ANSWER_AFTER]: {
        regex: P,
        follows: [O.dCx.FILTER_AFTER],
        componentType: "ANSWER",
        mutable: !0,
        validator: e => w(e, "after")
      },
      [O.dCx.FILTER_IN]: {
        regex: b(R.Z.Messages.SEARCH_FILTER_IN),
        componentType: "FILTER",
        key: U(R.Z.Messages.SEARCH_FILTER_IN),
        plainText: R.Z.Messages.SEARCH_FILTER_IN,
        validator: Y,
        getAutocompletions(e, t, n) {
          "#" === e[0] && (e = e.substring(1));
          let i = N.ZP.queryChannels({
            query: e,
            type: c.sH,
            guildId: t,
            limit: 1 / 0
          }).concat(N.ZP.queryChannels({
            query: e,
            type: c.Zb,
            guildId: t,
            limit: 1 / 0
          })).map(e => {
            let {
              record: t
            } = e;
            return t
          }).filter(e => !e.isThread());
          if ("" === e.trim()) {
            let e = T.Z.getChannelId(t),
              n = i.find(t => t.id === e);
            null != n && (i.splice(i.indexOf(n), 1), i.unshift(n))
          }
          let r = c.ZP.getTextChannelNameDisambiguations(t);
          return l()(i).take(n).map(e => {
            var t, n;
            return {
              text: "".concat(null !== (n = null === (t = r[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
              channel: e
            }
          }).value()
        }
      },
      [O.dCx.ANSWER_IN]: {
        regex: /(?:\s*#?([^ ]+))/i,
        mutable: !0,
        follows: [O.dCx.FILTER_IN],
        componentType: "ANSWER",
        validator: k,
        queryKey: "channel_id"
      },
      [O.dCx.FILTER_PINNED]: {
        regex: b(R.Z.Messages.SEARCH_FILTER_PINNED),
        componentType: "FILTER",
        key: U(R.Z.Messages.SEARCH_FILTER_PINNED),
        plainText: R.Z.Messages.SEARCH_FILTER_PINNED,
        getAutocompletions: () => [{
          text: "true"
        }, {
          text: "false"
        }]
      },
      [O.dCx.ANSWER_PINNED]: {
        regex: y,
        componentType: "ANSWER",
        follows: [O.dCx.FILTER_PINNED],
        queryKey: "pinned",
        validator: e => {
          let t = e.getMatch(1);
          return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0)
        }
      }
    }
  }())
}

function q(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(K).length;
  return l()(K).keys().filter(e => O.TNx.test(e)).filter(e => null != K[e].key).map(e => ({
    token: e,
    text: K[e].key
  })).filter(t => {
    let {
      text: n
    } = t;
    return o()(e.toLowerCase(), n)
  }).take(t).value()
}
t.ZP = K