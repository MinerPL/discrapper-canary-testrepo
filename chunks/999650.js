"use strict";
n.r(t), n.d(t, {
  ComponentTypes: function() {
    return i
  },
  getFilterAutocompletions: function() {
    return X
  },
  getRandomDateShortcut: function() {
    return x
  },
  refreshSearchTokens: function() {
    return Z
  }
}), n("47120"), n("733860");
var i, r, a = n("658722"),
  s = n.n(a),
  o = n("392711"),
  l = n.n(o),
  u = n("913527"),
  d = n.n(u),
  _ = n("346610"),
  c = n("984933"),
  E = n("699516"),
  I = n("768119"),
  T = n("944486"),
  f = n("914010"),
  S = n("246946"),
  h = n("594174"),
  A = n("483360"),
  m = n("226951"),
  N = n("51144"),
  p = n("981631"),
  O = n("689938");

function C() {
  return new Set(d().months().map(e => e.toLowerCase()))
}

function R() {
  return new Set(d().weekdays().map(e => e.toLowerCase()))
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
  return L(d()().startOf(e).add(t, e), e)
}

function D(e, t, n) {
  return L(d()(e, t).local(), n)
}

function M() {
  return {
    [O.default.Messages.SEARCH_SHORTCUT_TODAY]: () => v("day"),
    [O.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => v("day", -1),
    [O.default.Messages.SEARCH_SHORTCUT_WEEK]: () => v("week"),
    [O.default.Messages.SEARCH_SHORTCUT_MONTH]: () => v("month"),
    [O.default.Messages.SEARCH_SHORTCUT_YEAR]: () => v("year")
  }
}
let y = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
  P = RegExp("\\s*(true|false)", "i");

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
  return null != (t = p.ID_REGEX.test(n) ? n : n === p.ME ? i(h.default.getCurrentUser()) : null != e.getMatch(4) ? i(h.default.findByTag(e.getMatch(4))) : i(h.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
}

function w(e, t) {
  let n, i;
  let r = e.getFullMatch().trim().toLowerCase(),
    a = M()[r];
  return null != a ? [n, i] = a() : C().has(r) ? [n, i] = D(r, "MMMM", "month") : R().has(r) ? [n, i] = D(r, "dddd", "day") : g().has(r) ? [n, i] = D(r, "YYYY", "year") : [n, i] = D(r, p.SEARCH_DATE_FORMAT, "day"), !!(n.isValid() && i.isValid()) && ("before" === t ? (i = n, n = null) : "after" === t && (n = i, i = null), e.setData("start", n), e.setData("end", i), !0)
}

function k(e) {
  let t = e.getMatch(1),
    n = f.default.getGuildId(),
    i = c.default.getChannels(n)[c.GUILD_SELECTABLE_CHANNELS_KEY].concat(c.default.getChannels(n)[c.GUILD_VOCAL_CHANNELS_KEY]),
    r = c.default.getTextChannelNameDisambiguations(n),
    a = l().chain(i).map(e => {
      let {
        channel: t
      } = e;
      return t
    }).find(e => {
      var n, i;
      return t === (null !== (i = null === (n = r[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : e.name)
    }).value();
  return null != a && (e.setData("channel", a), !0)
}

function B(e) {
  let t = {
    [O.default.Messages.SEARCH_ANSWER_HAS_LINK]: "link",
    [O.default.Messages.SEARCH_ANSWER_HAS_EMBED]: "embed",
    [O.default.Messages.SEARCH_ANSWER_HAS_POLL]: "poll",
    [O.default.Messages.SEARCH_ANSWER_HAS_SNAPSHOT]: "snapshot",
    [O.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: "file",
    [O.default.Messages.SEARCH_ANSWER_HAS_VIDEO]: "video",
    [O.default.Messages.SEARCH_ANSWER_HAS_IMAGE]: "image",
    [O.default.Messages.SEARCH_ANSWER_HAS_SOUND]: "sound",
    [O.default.Messages.SEARCH_ANSWER_HAS_STICKER]: "sticker"
  } [e.getMatch(1)];
  return null != t && "" !== t && (e.setData("has", t), !0)
}

function V() {
  return [...Array.from(C()), ...Array.from(R()), ...Array.from(g()), ...Object.keys(M())]
}

function x() {
  return l().sample(V())
}

function F(e, t, n) {
  return H(e, t, V()).map(e => ({
    ...e,
    group: n,
    key: "".concat(n, "-").concat(e.text)
  }))
}

function H(e, t, n) {
  let i = e.toLocaleLowerCase();
  return l()(n).filter(e => s()(i, e.toLocaleLowerCase())).take(t).map(e => ({
    text: e
  })).value()
}

function Y(e, t) {
  let n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = I.default.getSearchType(t),
    s = {
      query: e = e.split("#")[0],
      limit: i,
      request: r
    };
  switch (a) {
    case p.SearchTypes.GUILD:
      n = A.default.queryGuildUsers({
        ...s,
        guildId: t
      });
      break;
    case p.SearchTypes.CHANNEL:
      n = A.default.queryChannelUsers({
        ...s,
        channelId: t
      });
      break;
    case p.SearchTypes.DMS:
      n = A.default.queryUsers(e, i, !0, r, () => !0);
      break;
    default:
      return []
  }
  return n.filter(e => {
    let {
      record: t
    } = e;
    return !E.default.isBlocked(t.id)
  }).map(e => {
    let {
      record: t
    } = e;
    return {
      text: N.default.getUserTag(t),
      user: t
    }
  })
}

function j() {
  return I.default.getSearchType() === p.SearchTypes.GUILD
}

function W() {
  return !S.default.hidePersonalInformation
}
let K = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
(r = i || (i = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
let z = {};

function Z() {
  Object.assign(z, function() {
    let {
      canForwardMessages: e
    } = _.MessageForwardingExperiment.getCurrentConfig({
      location: "SearchTokens"
    }, {
      autoTrackExposure: !1
    }), t = e ? [O.default.Messages.SEARCH_ANSWER_HAS_SNAPSHOT] : [], n = [O.default.Messages.SEARCH_ANSWER_HAS_LINK, O.default.Messages.SEARCH_ANSWER_HAS_EMBED, O.default.Messages.SEARCH_ANSWER_HAS_POLL, O.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, O.default.Messages.SEARCH_ANSWER_HAS_VIDEO, O.default.Messages.SEARCH_ANSWER_HAS_IMAGE, O.default.Messages.SEARCH_ANSWER_HAS_SOUND, O.default.Messages.SEARCH_ANSWER_HAS_STICKER, ...t];
    return {
      [p.SearchTokenTypes.FILTER_FROM]: {
        regex: b(O.default.Messages.SEARCH_FILTER_FROM),
        componentType: "FILTER",
        key: U(O.default.Messages.SEARCH_FILTER_FROM),
        plainText: O.default.Messages.SEARCH_FILTER_FROM,
        validator: W,
        getAutocompletions: Y
      },
      [p.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
        follows: [p.SearchTokenTypes.FILTER_FROM],
        regex: K,
        validator: G,
        mutable: !0,
        componentType: "ANSWER",
        queryKey: "author_id"
      },
      [p.SearchTokenTypes.FILTER_MENTIONS]: {
        regex: b(O.default.Messages.SEARCH_FILTER_MENTIONS),
        componentType: "FILTER",
        key: U(O.default.Messages.SEARCH_FILTER_MENTIONS),
        plainText: O.default.Messages.SEARCH_FILTER_MENTIONS,
        validator: W,
        getAutocompletions: Y
      },
      [p.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
        follows: [p.SearchTokenTypes.FILTER_MENTIONS],
        regex: K,
        validator: G,
        mutable: !0,
        componentType: "ANSWER",
        queryKey: "mentions"
      },
      [p.SearchTokenTypes.FILTER_HAS]: {
        regex: b(O.default.Messages.SEARCH_FILTER_HAS),
        componentType: "FILTER",
        key: U(O.default.Messages.SEARCH_FILTER_HAS),
        plainText: O.default.Messages.SEARCH_FILTER_HAS,
        getAutocompletions: (e, t, i) => H(e, i, n)
      },
      [p.SearchTokenTypes.ANSWER_HAS]: {
        regex: RegExp("(?:\\s*-?(".concat(n.map(e => m.default.escape(e)).join("|"), "))"), "i"),
        follows: [p.SearchTokenTypes.FILTER_HAS],
        validator: B,
        componentType: "ANSWER",
        queryKey: "has"
      },
      [p.SearchTokenTypes.FILTER_FILE_TYPE]: {
        regex: b(O.default.Messages.SEARCH_FILTER_FILE_TYPE),
        key: U(O.default.Messages.SEARCH_FILTER_FILE_TYPE),
        plainText: O.default.Messages.SEARCH_FILTER_FILE_TYPE,
        componentType: "FILTER"
      },
      [p.SearchTokenTypes.ANSWER_FILE_TYPE]: {
        regex: /(?:\s*([^\s]+))/,
        follows: [p.SearchTokenTypes.FILTER_FILE_TYPE],
        mutable: !0,
        componentType: "ANSWER",
        queryKey: "attachment_extensions"
      },
      [p.SearchTokenTypes.FILTER_FILE_NAME]: {
        regex: b(O.default.Messages.SEARCH_FILTER_FILE_NAME),
        key: U(O.default.Messages.SEARCH_FILTER_FILE_NAME),
        plainText: O.default.Messages.SEARCH_FILTER_FILE_NAME,
        componentType: "FILTER"
      },
      [p.SearchTokenTypes.ANSWER_FILE_NAME]: {
        regex: /(?:\s*([^\s]+)(?=\s))/,
        follows: [p.SearchTokenTypes.FILTER_FILE_NAME],
        mutable: !0,
        componentType: "ANSWER",
        queryKey: "attachment_filename"
      },
      [p.SearchTokenTypes.FILTER_BEFORE]: {
        regex: b(O.default.Messages.SEARCH_FILTER_BEFORE),
        componentType: "FILTER",
        key: U(O.default.Messages.SEARCH_FILTER_BEFORE),
        plainText: O.default.Messages.SEARCH_FILTER_BEFORE,
        getAutocompletions: (e, t, n) => F(e, n, p.SearchTokenTypes.FILTER_BEFORE)
      },
      [p.SearchTokenTypes.FILTER_ON]: {
        regex: b("(".concat(O.default.Messages.SEARCH_FILTER_ON, "|").concat(O.default.Messages.SEARCH_FILTER_DURING, ")")),
        componentType: "FILTER",
        key: U(O.default.Messages.SEARCH_FILTER_DURING),
        plainText: O.default.Messages.SEARCH_FILTER_DURING,
        getAutocompletions: (e, t, n) => F(e, n, p.SearchTokenTypes.FILTER_ON)
      },
      [p.SearchTokenTypes.FILTER_AFTER]: {
        regex: b(O.default.Messages.SEARCH_FILTER_AFTER),
        componentType: "FILTER",
        key: U(O.default.Messages.SEARCH_FILTER_AFTER),
        plainText: O.default.Messages.SEARCH_FILTER_AFTER,
        getAutocompletions: (e, t, n) => F(e, n, p.SearchTokenTypes.FILTER_AFTER)
      },
      [p.SearchTokenTypes.ANSWER_BEFORE]: {
        regex: y,
        follows: [p.SearchTokenTypes.FILTER_BEFORE],
        componentType: "ANSWER",
        mutable: !0,
        validator: e => w(e, "before")
      },
      [p.SearchTokenTypes.ANSWER_ON]: {
        regex: y,
        follows: [p.SearchTokenTypes.FILTER_ON],
        componentType: "ANSWER",
        mutable: !0,
        validator: e => w(e, "on")
      },
      [p.SearchTokenTypes.ANSWER_AFTER]: {
        regex: y,
        follows: [p.SearchTokenTypes.FILTER_AFTER],
        componentType: "ANSWER",
        mutable: !0,
        validator: e => w(e, "after")
      },
      [p.SearchTokenTypes.FILTER_IN]: {
        regex: b(O.default.Messages.SEARCH_FILTER_IN),
        componentType: "FILTER",
        key: U(O.default.Messages.SEARCH_FILTER_IN),
        plainText: O.default.Messages.SEARCH_FILTER_IN,
        validator: j,
        getAutocompletions(e, t, n) {
          "#" === e[0] && (e = e.substring(1));
          let i = A.default.queryChannels({
            query: e,
            type: c.GUILD_SELECTABLE_CHANNELS_KEY,
            guildId: t,
            limit: 1 / 0
          }).concat(A.default.queryChannels({
            query: e,
            type: c.GUILD_VOCAL_CHANNELS_KEY,
            guildId: t,
            limit: 1 / 0
          })).map(e => {
            let {
              record: t
            } = e;
            return t
          }).filter(e => !e.isThread());
          if ("" === e.trim()) {
            let e = T.default.getChannelId(t),
              n = i.find(t => t.id === e);
            null != n && (i.splice(i.indexOf(n), 1), i.unshift(n))
          }
          let r = c.default.getTextChannelNameDisambiguations(t);
          return l()(i).take(n).map(e => {
            var t, n;
            return {
              text: "".concat(null !== (n = null === (t = r[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
              channel: e
            }
          }).value()
        }
      },
      [p.SearchTokenTypes.ANSWER_IN]: {
        regex: /(?:\s*#?([^ ]+))/i,
        mutable: !0,
        follows: [p.SearchTokenTypes.FILTER_IN],
        componentType: "ANSWER",
        validator: k,
        queryKey: "channel_id"
      },
      [p.SearchTokenTypes.FILTER_PINNED]: {
        regex: b(O.default.Messages.SEARCH_FILTER_PINNED),
        componentType: "FILTER",
        key: U(O.default.Messages.SEARCH_FILTER_PINNED),
        plainText: O.default.Messages.SEARCH_FILTER_PINNED,
        getAutocompletions: () => [{
          text: "true"
        }, {
          text: "false"
        }]
      },
      [p.SearchTokenTypes.ANSWER_PINNED]: {
        regex: P,
        componentType: "ANSWER",
        follows: [p.SearchTokenTypes.FILTER_PINNED],
        queryKey: "pinned",
        validator: e => {
          let t = e.getMatch(1);
          return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0)
        }
      }
    }
  }())
}

function X(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(z).length;
  return l()(z).keys().filter(e => p.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != z[e].key).map(e => ({
    token: e,
    text: z[e].key
  })).filter(t => {
    let {
      text: n
    } = t;
    return s()(e.toLowerCase(), n)
  }).take(t).value()
}
t.default = z