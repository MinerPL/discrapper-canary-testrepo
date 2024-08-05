n.d(t, {
  Z: function() {
return R;
  }
}), n(724458), n(47120), n(757143), n(773603), n(315314), n(610138), n(216116), n(78328), n(815648), n(653041);
var r = n(392711),
  i = n.n(r),
  a = n(302454),
  s = n.n(a),
  o = n(675478),
  l = n(131704),
  u = n(601964),
  c = n(709302),
  d = n(592125),
  _ = n(580005),
  E = n(984933),
  f = n(699516),
  h = n(594174),
  p = n(483360),
  m = n(892880),
  I = n(591759),
  T = n(279779),
  g = n(620490),
  S = n(727785),
  A = n(981631);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let v = Object.freeze({});

function O(e, t) {
  var n, r;
  if (!t.frecencyBoosters)
return {};
  let i = _.Z.getFrequentlyWithoutFetchingLatest(),
a = i.reduce((e, t) => {
  let {
    id: n
  } = t, r = _.Z.getScoreWithoutFetchingLatest(n);
  return r > e ? r : e;
}, 0),
s = [];
  switch (e) {
case S.h8.GUILD:
  s = i.filter(e => e instanceof u.ZP);
  break;
case S.h8.USER:
  s = i.filter(e => e instanceof l.Sf && e.type === A.d4z.DM);
  break;
case S.h8.GROUP_DM:
  s = i.filter(e => e instanceof l.Sf && e.isMultiUserDM());
  break;
case S.h8.TEXT_CHANNEL:
  s = i.filter(e => e instanceof l.Sf && (0, l.r8)(e.type));
  break;
case S.h8.VOICE_CHANNEL:
  s = i.filter(e => e instanceof l.Sf && e.isGuildVocal());
  }
  let o = {};
  for (let t of s) {
let {
  id: n
} = t, r = _.Z.getScoreWithoutFetchingLatest(n);
if (e === S.h8.USER && t instanceof l.mn) {
  if (t.type === A.d4z.DM)
    o[n = t.getRecipientId()] = 1 + r / a;
  else if (t.type === A.d4z.GROUP_DM) {
    let e = t.recipients.length;
    for (let n of t.recipients)
      o[n] = 1 + r / a * (1 / e);
  }
} else
  o[n] = 1 + r / a;
  }
  for (let e of f.Z.getFriendIDs())
o[e] = (null !== (n = o[e]) && void 0 !== n ? n : 1) + 0.2;
  for (let e of d.Z.getDMUserIds())
o[e] = (null !== (r = o[e]) && void 0 !== r ? r : 1) + 0.1;
  return o;
}
class R {
  createSearchContext() {
null == this.userSearchContext && (this.userSearchContext = T.Z.getSearchContext(this.parseUserResults, this._limit));
  }
  setLimit(e) {
let {
  userSearchContext: t
} = this;
this._limit = e, null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit), this._inAppNavigations.length > this._limit && (this._inAppNavigations.length = this._limit);
  }
  setResultTypes(e) {
this.resultTypes = null != e ? new Set(e) : null, this._userResults = this._include(S.h8.USER) ? this._userResults : [], this._groupDMResults = this._include(S.h8.GROUP_DM) ? this._groupDMResults : [], this._textChannelResults = this._include(S.h8.TEXT_CHANNEL) ? this._textChannelResults : [], this._voiceChannelResults = this._include(S.h8.VOICE_CHANNEL) ? this._voiceChannelResults : [], this._guildResults = this._include(S.h8.GUILD) ? this._guildResults : [], this._applicationResults = this._include(S.h8.APPLICATION) ? this._applicationResults : [], this._linkResults = this._include(S.h8.LINK) ? this._linkResults : [], this._inAppNavigations = this._include(S.h8.IN_APP_NAVIGATION) ? this._inAppNavigations : [];
  }
  _include(e) {
return null == this.resultTypes || this.resultTypes.has(e);
  }
  _isAsyncSearch() {
return this._include(S.h8.USER);
  }
  setOptions(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
t ? this.options = {
  ...this.options,
  ...e
} : this.options = e, null != this.options.blacklist ? this._userBlacklist = Array.from(this.options.blacklist).map(e => e.startsWith('user:') ? e.replace('user:', '') : '').filter(e => '' !== e) : this._userBlacklist = null;
  }
  search(e, t) {
if (this.query = e, '' === e.trim()) {
  this.clear(), this.updateAllResults();
  return;
}
(this.options.frecencyBoosters ? o.DZ.loadIfNecessary() : Promise.resolve()).finally(() => {
  this.queryUsers(e, t, this._limit), this._groupDMResults = this.queryGroupDMs(e, this._limit), this._textChannelResults = this.queryTextChannels(e, this._limit), this._voiceChannelResults = this.queryVoiceChannels(e, this._limit), this._guildResults = this.queryGuilds(e, this._limit), this._applicationResults = this.queryApplications(e, this._limit);
  this._linkResults = this.queryLink(e, this._limit), this._inAppNavigations = this.queryInAppNavigations(e, this._limit), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), this._asyncTimeout = setTimeout(this.updateAllResults, 300)) : this.updateAllResults();
});
  }
  clear() {
let {
  userSearchContext: e
} = this;
null != e && e.clearQuery(), this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = [], this._inAppNavigations = [];
  }
  clean() {
this.clear(), this.destroy(), this.query = '', this.updateAllResults();
  }
  pause() {
var e, t;
null === (t = this.userSearchContext) || void 0 === t || null === (e = t.unsubscribe) || void 0 === e || e.call(t);
  }
  resume() {
var e, t;
null === (t = this.userSearchContext) || void 0 === t || null === (e = t.subscribe) || void 0 === e || e.call(t);
  }
  destroy() {
let {
  userSearchContext: e
} = this;
null != e && (e.destroy(), this.userSearchContext = null);
  }
  queryTextChannels(e, t) {
if (!this._include(S.h8.TEXT_CHANNEL))
  return [];
let n = O(S.h8.TEXT_CHANNEL, this.options),
  {
    blacklist: r
  } = this.options,
  i = null != r ? e => !r.has('channel:'.concat(e.id)) : void 0;
return p.ZP.queryChannels({
  query: e,
  guildId: null,
  limit: t,
  fuzzy: !0,
  filter: i,
  boosters: n
});
  }
  queryVoiceChannels(e, t) {
if (!this._include(S.h8.VOICE_CHANNEL))
  return [];
let {
  voiceChannelGuildFilter: n
} = this.options, r = O(S.h8.VOICE_CHANNEL, this.options);
return p.ZP.queryChannels({
  query: e,
  guildId: n,
  limit: t,
  fuzzy: !0,
  type: E.Zb,
  boosters: r
});
  }
  queryGuilds(e, t) {
if (!this._include(S.h8.GUILD))
  return [];
let n = O(S.h8.GUILD, this.options),
  {
    blacklist: r
  } = this.options,
  i = null != r ? e => !r.has('guild:'.concat(e.id)) : void 0;
return p.ZP.queryGuilds({
  query: e,
  limit: t,
  fuzzy: !0,
  filter: i,
  boosters: n
});
  }
  queryUsers(e, t, n) {
let {
  userSearchContext: r
} = this;
if (null == r || !this._include(S.h8.USER))
  return;
let {
  userFilters: i
} = this.options;
void 0 !== t && m.Z.requestMembers(t, e, 100), r.setLimit(n), r.setQuery(e, i, this._userBlacklist, O(S.h8.USER, this.options));
  }
  queryGroupDMs(e, t) {
if (!this._include(S.h8.GROUP_DM))
  return [];
let {
  blacklist: n
} = this.options, r = O(S.h8.GROUP_DM, this.options), i = null != n ? e => !n.has('channel:'.concat(e.id)) : void 0;
return p.ZP.queryGroupDMs({
  query: e,
  limit: t,
  fuzzy: !0,
  filter: i,
  boosters: r
});
  }
  queryApplications(e, t) {
return this._include(S.h8.APPLICATION) ? p.ZP.queryApplications({
  query: e,
  limit: t,
  fuzzy: !0
}) : [];
  }
  queryLink(e, t) {
let n;
if (!this._include(S.h8.LINK))
  return [];
let r = s().sanitizeUrl(e);
try {
  n = new URL(r);
} catch (e) {
  return [];
}
let {
  pathname: i,
  hostname: a = '',
  host: o
} = n, l = I.Z.isDiscordHostname(a) || window.location.host === o;
return null !== i && l && I.Z.isAppRoute(i) ? [{
  type: S.h8.LINK,
  record: c.Z.fromPath(i),
  score: 1
}] : [];
  }
  queryInAppNavigations(e, t) {
return this._include(S.h8.IN_APP_NAVIGATION) ? p.ZP.queryInAppNavigations({
  query: e,
  limit: t,
  fuzzy: !0
}) : [];
  }
  constructor(e, t, n = 100, r = v) {
N(this, 'query', ''), N(this, 'options', v), N(this, 'results', []), N(this, '_userResults', []), N(this, '_groupDMResults', []), N(this, '_textChannelResults', []), N(this, '_voiceChannelResults', []), N(this, '_guildResults', []), N(this, '_applicationResults', []), N(this, '_linkResults', []), N(this, '_inAppNavigations', []), N(this, '_asyncTimeout', void 0), N(this, 'userSearchContext', void 0), N(this, 'onResultsChange', void 0), N(this, 'resultTypes', void 0), N(this, '_userBlacklist', null), N(this, '_limit', void 0), N(this, 'parseUserResults', e => {
  let {
    results: t
  } = e;
  if (!!this._include(S.h8.USER)) {
    for (let {
        id: e,
        score: n,
        comparator: r
      }
      of(this._userResults = [], t)) {
      let t = h.default.getUser(e);
      if (null != t)
        this._userResults.push({
          type: S.h8.USER,
          record: t,
          score: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              t = arguments.length > 1 ? arguments[1] : void 0;
            return 1000 * e * (null != t ? t : 1);
          }(n),
          comparator: null != r ? r : void 0
        });
    }
    this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults();
  }
}), N(this, 'updateAllResults', () => {
  clearTimeout(this._asyncTimeout), this.results = i()([
    ...this._userResults,
    ...this._groupDMResults,
    ...this._textChannelResults,
    ...this._voiceChannelResults,
    ...this._guildResults,
    ...this._linkResults,
    ...this._inAppNavigations
  ]).uniqBy(e => ''.concat(e.type, '-').concat(e.record.id)).sort(g.Z).value(), this.onResultsChange(this.results, this.query);
}), this.onResultsChange = e, this.setOptions(r, !0), this._limit = n, this.createSearchContext(), this.setResultTypes(t);
  }
}