"use strict";
n.d(t, {
  Z: function() {
    return g
  }
}), n(724458), n(47120), n(757143), n(773603), n(315314), n(610138), n(216116), n(78328), n(815648), n(653041);
var i = n(392711),
  r = n.n(i),
  s = n(302454),
  o = n.n(s),
  a = n(675478),
  l = n(131704),
  u = n(601964),
  _ = n(709302),
  d = n(592125),
  c = n(580005),
  E = n(984933),
  I = n(699516),
  T = n(594174),
  h = n(483360),
  S = n(892880),
  f = n(591759),
  N = n(279779),
  A = n(620490),
  m = n(727785),
  O = n(981631);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = Object.freeze({});

function p(e, t) {
  var n, i;
  if (!t.frecencyBoosters) return {};
  let r = c.Z.getFrequentlyWithoutFetchingLatest(),
    s = r.reduce((e, t) => {
      let {
        id: n
      } = t, i = c.Z.getScoreWithoutFetchingLatest(n);
      return i > e ? i : e
    }, 0),
    o = [];
  switch (e) {
    case m.h8.GUILD:
      o = r.filter(e => e instanceof u.ZP);
      break;
    case m.h8.USER:
      o = r.filter(e => e instanceof l.Sf && e.type === O.d4z.DM);
      break;
    case m.h8.GROUP_DM:
      o = r.filter(e => e instanceof l.Sf && e.isMultiUserDM());
      break;
    case m.h8.TEXT_CHANNEL:
      o = r.filter(e => e instanceof l.Sf && (0, l.r8)(e.type));
      break;
    case m.h8.VOICE_CHANNEL:
      o = r.filter(e => e instanceof l.Sf && e.isGuildVocal())
  }
  let a = {};
  for (let t of o) {
    let {
      id: n
    } = t, i = c.Z.getScoreWithoutFetchingLatest(n);
    if (e === m.h8.USER && t instanceof l.mn) {
      if (t.type === O.d4z.DM) a[n = t.getRecipientId()] = 1 + i / s;
      else if (t.type === O.d4z.GROUP_DM) {
        let e = t.recipients.length;
        for (let n of t.recipients) a[n] = 1 + i / s * (1 / e)
      }
    } else a[n] = 1 + i / s
  }
  for (let e of I.Z.getFriendIDs()) a[e] = (null !== (n = a[e]) && void 0 !== n ? n : 1) + .2;
  for (let e of d.Z.getDMUserIds()) a[e] = (null !== (i = a[e]) && void 0 !== i ? i : 1) + .1;
  return a
}
class g {
  createSearchContext() {
    null == this.userSearchContext && (this.userSearchContext = N.Z.getSearchContext(this.parseUserResults, this._limit))
  }
  setLimit(e) {
    let {
      userSearchContext: t
    } = this;
    this._limit = e, null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit)
  }
  setResultTypes(e) {
    this.resultTypes = null != e ? new Set(e) : null, this._userResults = this._include(m.h8.USER) ? this._userResults : [], this._groupDMResults = this._include(m.h8.GROUP_DM) ? this._groupDMResults : [], this._textChannelResults = this._include(m.h8.TEXT_CHANNEL) ? this._textChannelResults : [], this._voiceChannelResults = this._include(m.h8.VOICE_CHANNEL) ? this._voiceChannelResults : [], this._guildResults = this._include(m.h8.GUILD) ? this._guildResults : [], this._applicationResults = this._include(m.h8.APPLICATION) ? this._applicationResults : [], this._linkResults = this._include(m.h8.LINK) ? this._linkResults : []
  }
  _include(e) {
    return null == this.resultTypes || this.resultTypes.has(e)
  }
  _isAsyncSearch() {
    return this._include(m.h8.USER)
  }
  setOptions(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    t ? this.options = {
      ...this.options,
      ...e
    } : this.options = e, null != this.options.blacklist ? this._userBlacklist = Array.from(this.options.blacklist).map(e => e.startsWith("user:") ? e.replace("user:", "") : "").filter(e => "" !== e) : this._userBlacklist = null
  }
  search(e, t) {
    if (this.query = e, "" === e.trim()) {
      this.clear(), this.updateAllResults();
      return
    }(this.options.frecencyBoosters ? a.DZ.loadIfNecessary() : Promise.resolve()).finally(() => {
      this.queryUsers(e, t, this._limit), this._groupDMResults = this.queryGroupDMs(e, this._limit), this._textChannelResults = this.queryTextChannels(e, this._limit), this._voiceChannelResults = this.queryVoiceChannels(e, this._limit), this._guildResults = this.queryGuilds(e, this._limit), this._applicationResults = this.queryApplications(e, this._limit);
      this._linkResults = this.queryLink(e, this._limit), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), this._asyncTimeout = setTimeout(this.updateAllResults, 300)) : this.updateAllResults()
    })
  }
  clear() {
    let {
      userSearchContext: e
    } = this;
    null != e && e.clearQuery(), this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = []
  }
  clean() {
    this.clear(), this.destroy(), this.query = "", this.updateAllResults()
  }
  pause() {
    var e, t;
    null === (t = this.userSearchContext) || void 0 === t || null === (e = t.unsubscribe) || void 0 === e || e.call(t)
  }
  resume() {
    var e, t;
    null === (t = this.userSearchContext) || void 0 === t || null === (e = t.subscribe) || void 0 === e || e.call(t)
  }
  destroy() {
    let {
      userSearchContext: e
    } = this;
    null != e && (e.destroy(), this.userSearchContext = null)
  }
  queryTextChannels(e, t) {
    if (!this._include(m.h8.TEXT_CHANNEL)) return [];
    let n = p(m.h8.TEXT_CHANNEL, this.options),
      {
        blacklist: i
      } = this.options,
      r = null != i ? e => !i.has("channel:".concat(e.id)) : void 0;
    return h.ZP.queryChannels({
      query: e,
      guildId: null,
      limit: t,
      fuzzy: !0,
      filter: r,
      boosters: n
    })
  }
  queryVoiceChannels(e, t) {
    if (!this._include(m.h8.VOICE_CHANNEL)) return [];
    let {
      voiceChannelGuildFilter: n
    } = this.options, i = p(m.h8.VOICE_CHANNEL, this.options);
    return h.ZP.queryChannels({
      query: e,
      guildId: n,
      limit: t,
      fuzzy: !0,
      type: E.Zb,
      boosters: i
    })
  }
  queryGuilds(e, t) {
    if (!this._include(m.h8.GUILD)) return [];
    let n = p(m.h8.GUILD, this.options),
      {
        blacklist: i
      } = this.options,
      r = null != i ? e => !i.has("guild:".concat(e.id)) : void 0;
    return h.ZP.queryGuilds({
      query: e,
      limit: t,
      fuzzy: !0,
      filter: r,
      boosters: n
    })
  }
  queryUsers(e, t, n) {
    let {
      userSearchContext: i
    } = this;
    if (null == i || !this._include(m.h8.USER)) return;
    let {
      userFilters: r
    } = this.options;
    void 0 !== t && S.Z.requestMembers(t, e, 100), i.setLimit(n), i.setQuery(e, r, this._userBlacklist, p(m.h8.USER, this.options))
  }
  queryGroupDMs(e, t) {
    if (!this._include(m.h8.GROUP_DM)) return [];
    let {
      blacklist: n
    } = this.options, i = p(m.h8.GROUP_DM, this.options), r = null != n ? e => !n.has("channel:".concat(e.id)) : void 0;
    return h.ZP.queryGroupDMs({
      query: e,
      limit: t,
      fuzzy: !0,
      filter: r,
      boosters: i
    })
  }
  queryApplications(e, t) {
    return this._include(m.h8.APPLICATION) ? h.ZP.queryApplications({
      query: e,
      limit: t,
      fuzzy: !0
    }) : []
  }
  queryLink(e, t) {
    let n;
    if (!this._include(m.h8.LINK)) return [];
    let i = o().sanitizeUrl(e);
    try {
      n = new URL(i)
    } catch (e) {
      return []
    }
    let {
      pathname: r,
      hostname: s = "",
      host: a
    } = n, l = f.Z.isDiscordHostname(s) || window.location.host === a;
    return null !== r && l && f.Z.isAppRoute(r) ? [{
      type: m.h8.LINK,
      record: _.Z.fromPath(r),
      score: 1
    }] : []
  }
  constructor(e, t, n = 100, i = C) {
    R(this, "query", ""), R(this, "options", C), R(this, "results", []), R(this, "_userResults", []), R(this, "_groupDMResults", []), R(this, "_textChannelResults", []), R(this, "_voiceChannelResults", []), R(this, "_guildResults", []), R(this, "_applicationResults", []), R(this, "_linkResults", []), R(this, "_asyncTimeout", void 0), R(this, "userSearchContext", void 0), R(this, "onResultsChange", void 0), R(this, "resultTypes", void 0), R(this, "_userBlacklist", null), R(this, "_limit", void 0), R(this, "parseUserResults", e => {
      let {
        results: t
      } = e;
      if (!!this._include(m.h8.USER)) {
        for (let {
            id: e,
            score: n,
            comparator: i
          }
          of(this._userResults = [], t)) {
          let t = T.default.getUser(e);
          if (null != t) this._userResults.push({
            type: m.h8.USER,
            record: t,
            score: function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 ? arguments[1] : void 0;
              return 1e3 * e * (null != t ? t : 1)
            }(n),
            comparator: null != i ? i : void 0
          })
        }
        this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults()
      }
    }), R(this, "updateAllResults", () => {
      clearTimeout(this._asyncTimeout), this.results = r()([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults]).uniqBy(e => "".concat(e.type, "-").concat(e.record.id)).sort(A.Z).value(), this.onResultsChange(this.results, this.query)
    }), this.onResultsChange = e, this.setOptions(i, !0), this._limit = n, this.createSearchContext(), this.setResultTypes(t)
  }
}