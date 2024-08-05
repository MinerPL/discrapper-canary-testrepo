n(47120), n(724458), n(852437), n(653041), n(733860), n(757143);
var r = n(392711),
  i = n.n(r),
  a = n(612002),
  s = n(593472),
  o = n(513418),
  l = n(710845),
  u = n(786761),
  c = n(709054),
  d = n(697479),
  _ = n(981631);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let f = new l.Z('ChannelMessages');

function h(e, t) {
  let n = e.get(t.id);
  return null == n || function(e, t) {
var n, r;
let i = null != e.editedTimestamp ? +e.editedTimestamp : 0;
return !!((null != t.edited_timestamp ? +new Date(t.edited_timestamp) : 0) > i) || !!(e.embeds.length < (null !== (r = null === (n = t.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0)) || e.content !== t.content;
  }(n, t) || e.cached ? (0, u.e5)(t) : n;
}
class p {
  clone() {
let e = new p(this._isCacheBefore);
return e._map = {
  ...this._map
}, e._messages = [...this._messages], e._wasAtEdge = this._wasAtEdge, e;
  }
  get wasAtEdge() {
return this._wasAtEdge;
  }
  set wasAtEdge(e) {
this._wasAtEdge = e;
  }
  get length() {
return this._messages.length;
  }
  clear() {
this._map = {}, this._messages = [], this._wasAtEdge = !1;
  }
  remove(e) {
this._messages = i().filter(this._messages, t => {
  let {
    id: n
  } = t;
  return n !== e;
}), delete this._map[e];
  }
  removeMany(e) {
i().each(e, e => {
  delete this._map[e];
}), this._messages = this._messages.filter(t => -1 === e.indexOf(t.id));
  }
  replace(e, t) {
let n = this._map[e];
null != n && (delete this._map[e], this._map[t.id] = t, this._messages[this._messages.indexOf(n)] = t);
  }
  update(e, t) {
let n = this._map[e];
if (null == n)
  return;
let r = t(n);
this._map[n.id] = r, this._messages[this._messages.indexOf(n)] = r;
  }
  has(e) {
return null != this._map[e];
  }
  get(e) {
return this._map[e];
  }
  forEach(e, t) {
this._messages.forEach(e, t);
  }
  cache(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
if (0 === this.length && (this._wasAtEdge = t), this._messages.length + e.length > _.FD8) {
  if (this._wasAtEdge = !1, e.length > _.FD8) {
    this._isCacheBefore ? this._messages = e.slice(e.length - _.FD8) : this._messages = e.slice(0, _.FD8), this._map = {}, this._messages.forEach(e => this._map[e.id] = e);
    return;
  }
  let t = _.FD8 - e.length;
  this._isCacheBefore ? this._messages = this._messages.slice(Math.max(this._messages.length - t, 0)) : this._messages = this._messages.slice(0, t);
}
this._messages = this._isCacheBefore ? [
  ...this._messages,
  ...e
] : [
  ...e,
  ...this._messages
], this._map = {}, this._messages.forEach(e => this._map[e.id] = e);
  }
  extractAll() {
let e = this._messages;
return this._messages = [], this._map = {}, e;
  }
  extract(e) {
let t;
if (this._isCacheBefore) {
  let n = Math.max(this.length - e, 0),
    r = this.length;
  t = this._messages.slice(n, r), this._messages.splice(n);
} else {
  let n = Math.min(e, this.length);
  t = this._messages.slice(0, n), this._messages.splice(0, e);
}
return t.forEach(e => delete this._map[e.id]), t;
  }
  constructor(e) {
E(this, '_messages', void 0), E(this, '_map', void 0), E(this, '_wasAtEdge', void 0), E(this, '_isCacheBefore', void 0), this._messages = [], this._map = {}, this._wasAtEdge = !1, this._isCacheBefore = e;
  }
}
class m {
  static forEach(e) {
i().forEach(m._channelMessages, e);
  }
  static get(e) {
return m._channelMessages[e];
  }
  static hasPresent(e) {
let t = m.get(e);
return null != t && t.hasPresent();
  }
  static getOrCreate(e) {
let t = m._channelMessages[e];
return null == t && (t = new m(e), m._channelMessages[e] = t), t;
  }
  static clear(e) {
delete m._channelMessages[e];
  }
  static clearCache(e) {
let t = m._channelMessages[e];
null != t && (t._before.clear(), t._after.clear(), this.commit(t));
  }
  static commit(e) {
m._channelMessages[e.channelId] = e;
  }
  mutate(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  n = new m(this.channelId);
return n._array = t ? [...this._array] : this._array, n._map = t ? {
  ...this._map
} : this._map, n._after = t ? this._after.clone() : this._after, n._before = t ? this._before.clone() : this._before, e instanceof Function ? (n.ready = this.ready, n.jumpType = this.jumpType, n.jumpTargetId = this.jumpTargetId, n.jumpTargetOffset = this.jumpTargetOffset, n.jumpSequenceId = this.jumpSequenceId, n.jumped = this.jumped, n.jumpedToPresent = this.jumpedToPresent, n.jumpFlash = this.jumpFlash, n.jumpReturnTargetId = this.jumpReturnTargetId, n.focusTargetId = this.focusTargetId, n.hasMoreBefore = this.hasMoreBefore, n.hasMoreAfter = this.hasMoreAfter, n.loadingMore = this.loadingMore, n.revealedMessageId = this.revealedMessageId, n.cached = this.cached, n.hasFetched = this.hasFetched, n.error = this.error, e(n)) : 'object' == typeof e && (n.ready = void 0 !== e.ready ? !0 === e.ready : this.ready, n.jumpType = void 0 !== e.jumpType ? e.jumpType : this.jumpType, n.jumpTargetId = void 0 !== e.jumpTargetId ? e.jumpTargetId : this.jumpTargetId, n.jumpTargetOffset = void 0 !== e.jumpTargetOffset ? e.jumpTargetOffset : this.jumpTargetOffset, n.jumpSequenceId = void 0 !== e.jumpSequenceId ? e.jumpSequenceId : this.jumpSequenceId, n.jumped = void 0 !== e.jumped ? !0 === e.jumped : this.jumped, n.jumpedToPresent = void 0 !== e.jumpedToPresent ? !0 === e.jumpedToPresent : this.jumpedToPresent, n.jumpFlash = void 0 !== e.jumpFlash ? !0 === e.jumpFlash : this.jumpFlash, n.jumpReturnTargetId = void 0 !== e.jumpReturnTargetId ? e.jumpReturnTargetId : this.jumpReturnTargetId, n.focusTargetId = void 0 !== e.focusTargetId ? e.focusTargetId : this.focusTargetId, n.hasMoreBefore = void 0 !== e.hasMoreBefore ? !0 === e.hasMoreBefore : this.hasMoreBefore, n.hasMoreAfter = void 0 !== e.hasMoreAfter ? !0 === e.hasMoreAfter : this.hasMoreAfter, n.loadingMore = void 0 !== e.loadingMore ? e.loadingMore : this.loadingMore, n.revealedMessageId = void 0 !== e.revealedMessageId ? e.revealedMessageId : this.revealedMessageId, n.cached = void 0 !== e.cached ? e.cached : this.cached, n.hasFetched = void 0 !== e.hasFetched ? e.hasFetched : this.hasFetched, n.error = void 0 !== e.error ? e.error : this.error), n;
  }
  get length() {
return this._array.length;
  }
  toArray() {
return [...this._array];
  }
  forEach(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
if (n) {
  let n = this._array;
  for (let r = n.length - 1; r >= 0 && !1 !== e.call(t, n[r], r); r--);
} else
  this._array.forEach(e, t);
  }
  reduce(e, t) {
return this._array.reduce(e, t);
  }
  some(e, t) {
return this._array.some(e, t);
  }
  filter(e, t) {
return this._array.filter(e, t);
  }
  forAll(e, t) {
this._before.forEach(e, t), this._array.forEach(e, t), this._after.forEach(e, t);
  }
  findOldest(e) {
var t, n;
return null !== (n = null !== (t = i().find(this._before._messages, e)) && void 0 !== t ? t : i().find(this._array, e)) && void 0 !== n ? n : i().find(this._after._messages, e);
  }
  findNewest(e) {
var t, n;
return null !== (n = null !== (t = i().findLast(this._after._messages, e)) && void 0 !== t ? t : i().findLast(this._array, e)) && void 0 !== n ? n : i().findLast(this._before._messages, e);
  }
  map(e, t) {
return this._array.map(e, t);
  }
  first() {
return this._array[0];
  }
  last() {
return this._array[this._array.length - 1];
  }
  get(e) {
var t;
let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  r = this._map[e];
return null == r && n ? null !== (t = this._before.get(e)) && void 0 !== t ? t : this._after.get(e) : r;
  }
  getByIndex(e) {
return this._array[e];
  }
  getAfter(e) {
let t = this.get(e);
if (null == t)
  return null;
let n = this._array.indexOf(t);
return -1 === n || n === this.length - 1 ? null : this._array[n + 1];
  }
  getManyAfter(e, t, n) {
let r = this.get(e);
if (null == r)
  return null;
let i = this._array.indexOf(r);
if (-1 === i)
  return null;
let a = [];
for (let e = i + 1; e < this.length && (-1 === t || a.length < t); e++)
  (null == n || n(this._array[e])) && a.push(this._array[e]);
return a;
  }
  getManyBefore(e, t, n) {
let r = this.get(e);
if (null == r)
  return null;
let i = this._array.indexOf(r);
if (-1 === i)
  return null;
let a = [];
for (let e = i - 1; e >= 0 && (-1 === t || a.length < t); e--)
  (null == n || n(this._array[e])) && a.unshift(this._array[e]);
return a;
  }
  has(e) {
let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
return null != this._map[e] || t && (this._before.has(e) || this._after.has(e));
  }
  indexOf(e) {
let t = -1;
return this._array.find((n, r) => n.id === e && (t = r, !0)), t;
  }
  hasPresent() {
return this._after.length > 0 && this._after.wasAtEdge || !this.hasMoreAfter;
  }
  hasBeforeCached(e) {
if (this.length > 0 && this._before.length > 0) {
  let t = this.first();
  return null != t && t.id === e;
}
return !1;
  }
  hasAfterCached(e) {
if (this.length > 0 && this._after.length > 0) {
  let t = this.last();
  return null != t && t.id === e;
}
return !1;
  }
  update(e, t) {
let n = this._map[e];
if (null == n)
  return this._before.has(e) ? this.mutate(n => n._before.update(e, t), !0) : this._after.has(e) ? this.mutate(n => n._after.update(e, t), !0) : this;
let r = t(n);
return this.mutate(e => {
  e._map[n.id] = r, e._array[e._array.indexOf(n)] = r;
}, !0);
  }
  replace(e, t) {
let n = this._map[e];
if (null == n)
  return this._before.has(e) ? this.mutate(n => n._before.replace(e, t), !0) : this._after.has(e) ? this.mutate(n => n._after.replace(e, t), !0) : this;
return this.mutate(r => {
  delete r._map[e], r._map[t.id] = t, r._array[r._array.indexOf(n)] = t;
}, !0);
  }
  remove(e) {
return this.mutate(t => {
  delete t._map[e], t._array = t._array.filter(t => t.id !== e), t._before.remove(e), t._after.remove(e);
}, !0);
  }
  removeMany(e) {
return e.some(e => this.has(e)) ? this.mutate(t => {
  i().each(e, e => {
    delete t._map[e];
  }), t._array = t._array.filter(t => -1 === e.indexOf(t.id)), t._before.removeMany(e), t._after.removeMany(e);
}, !0) : this;
  }
  merge(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
return this.mutate(r => {
  r._merge(e, t, n);
}, !0);
  }
  _merge(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
e = e.filter(e => {
  let t = this._map[e.id];
  return this._map[e.id] = e, null == t || (this._array[this._array.indexOf(t)] = e, !1);
}), n && (t ? this._before : this._after).clear(), this._array = t ? [
  ...e,
  ...this._array
] : [
  ...this._array,
  ...e
];
  }
  mergeDelta() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
return this.mutate(r => {
  r._before.clear(), r._after.clear();
  let i = new Set(n);
  e.forEach(e => i.add(e.id)), t.forEach(e => i.add(e.id)), r._array = r._array.filter(e => !i.has(e.id)).concat(e.map(e => (0, u.e5)(e)), t.map(e => (0, u.e5)(e))).sort((e, t) => c.default.compare(e.id, t.id));
});
  }
  _clearMessages() {
this._array = [], this._map = {};
  }
  reset(e) {
return this.mutate(t => {
  t._array = e, t._map = {}, e.forEach(e => t._map[e.id] = e), t._before.clear(), t._after.clear();
});
  }
  truncateTop(e) {
let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
  n = this._array.length - e;
return n <= 0 ? this : this.mutate(e => {
  for (let t = 0; t < n; t++)
    delete e._map[e._array[t].id];
  e._before.cache(e._array.slice(0, n), !e.hasMoreBefore), e._array = e._array.slice(n), e.hasMoreBefore = !0;
}, t);
  }
  truncateBottom(e) {
let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
return this._array.length <= e ? this : this.mutate(t => {
  for (let n = e; n < this._array.length; n++)
    delete t._map[t._array[n].id];
  t._after.cache(t._array.slice(e, this._array.length), !t.hasMoreAfter), t._array = t._array.slice(0, e), t.hasMoreAfter = !0;
}, t);
  }
  jumpToPresent(e) {
return this.mutate(t => {
  let n = t._after.extractAll();
  t.hasMoreAfter = !1;
  let r = Math.max(n.length - e, 0),
    i = n.slice(r);
  n.splice(r), t._before.cache(t._array), t._before.cache(n), t._clearMessages(), t._merge(i), t.hasMoreBefore = t._before.length > 0, t.jumped = !0, t.jumpTargetId = null, t.jumpTargetOffset = 0, t.jumpedToPresent = !0, t.jumpFlash = !1, t.jumpReturnTargetId = null, t.jumpSequenceId = t.jumpSequenceId + 1, t.ready = !0, t.loadingMore = !1;
}, !0);
  }
  jumpToMessage(e) {
let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
  n = arguments.length > 2 ? arguments[2] : void 0,
  r = arguments.length > 3 ? arguments[3] : void 0,
  i = arguments.length > 4 ? arguments[4] : void 0;
return this.mutate(a => {
  a.jumped = !0, a.jumpedToPresent = !1, a.jumpType = null != i ? i : s.SR.ANIMATED, a.jumpTargetId = e, a.jumpTargetOffset = null != e && null != n ? n : 0, a.jumpSequenceId = a.jumpSequenceId + 1, a.jumpFlash = t, a.jumpReturnTargetId = r, a.ready = !0, a.loadingMore = !1;
}, !1);
  }
  focusOnMessage(e) {
return this.mutate(t => {
  t.focusTargetId = e, t.ready = !0, t.loadingMore = !1;
}, !1);
  }
  loadFromCache(e, t) {
return this.mutate(n => {
  let r = e ? n._before : n._after;
  n._merge(r.extract(t), e);
  let i = r.length > 0 || !r.wasAtEdge;
  e ? n.hasMoreBefore = i : n.hasMoreAfter = i, n.ready = !0, n.loadingMore = !1;
}, !0);
  }
  truncate(e, t) {
return this.length <= _.PNu ? this : e ? this.truncateBottom(_.j3N) : t ? this.truncateTop(_.j3N) : this;
  }
  receiveMessage(e) {
var t, n;
let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
  i = null == e.nonce ? null : this.get(e.nonce, !0);
if (null != i && ((null === (t = e.author) || void 0 === t ? void 0 : t.id) === (null === (n = i.author) || void 0 === n ? void 0 : n.id) || null != e.interaction && e.interaction.user.id === i.author.id) && null != e.nonce && i.id === e.nonce) {
  let t = (0, u.e5)(e);
  return null != i.interactionData && (t.interactionData = i.interactionData), this.replace(e.nonce, t);
}
if (this.hasMoreAfter)
  this._after.wasAtEdge && (this._after.wasAtEdge = !1);
else {
  let t = a.Z.getCurrentConfig({
      location: '2ecb25_1'
    }, {
      autoTrackExposure: !1
    }).enabled ? (0, u.e5)(e) : h(this, e),
    n = this.merge([t]);
  return r ? n.truncateTop(_.j3N, !1) : this.length > _.PNu ? n.truncateBottom(_.j3N, !1) : n;
}
return this;
  }
  receivePushNotification(e) {
return null != (null == e.nonce ? null : this.get(e.nonce, !0)) ? this : this.mutate({
  ready: !0,
  cached: !0
}).merge([h(this, e)]);
  }
  loadStart(e) {
var t, n, r, i;
return this.mutate({
  loadingMore: !0,
  jumped: null != e,
  jumpedToPresent: null !== (t = null == e ? void 0 : e.present) && void 0 !== t && t,
  jumpTargetId: null !== (n = null == e ? void 0 : e.messageId) && void 0 !== n ? n : null,
  jumpTargetOffset: null !== (r = null == e ? void 0 : e.offset) && void 0 !== r ? r : 0,
  jumpReturnTargetId: null !== (i = null == e ? void 0 : e.returnMessageId) && void 0 !== i ? i : null,
  ready: null == e && this.ready
});
  }
  loadComplete(e) {
var t, n, r, o, l, c, d, E, p, m, I;
let T = [...e.newMessages],
  g = null !== (t = e.isBefore) && void 0 !== t && t,
  S = null !== (n = e.isAfter) && void 0 !== n && n,
  A = null !== (r = e.jump) && void 0 !== r ? r : null,
  N = null !== (o = e.hasMoreBefore) && void 0 !== o && o,
  v = null !== (l = e.hasMoreAfter) && void 0 !== l && l,
  O = null !== (c = e.cached) && void 0 !== c && c,
  R = i()(T).reverse().map(a.Z.getCurrentConfig({
    location: '2ecb25_2'
  }, {
    autoTrackExposure: !1
  }).enabled ? e => (0, u.e5)(e) : e => h(this, e)).value(),
  C = null;
if ((g || S) && null == A && this.ready)
  C = this.merge(R, g, !0);
else {
  let e = this._array.filter(e => e.state === _.yb.SENDING),
    t = this._array.filter(e => e.state === _.yb.SEND_FAILED),
    n = e.length > 0 || t.length > 0;
  C = this.reset(R), !n || g || S || (null == A ? void 0 : A.messageId) != null || (null == A ? void 0 : A.offset) != null ? f.info('loadComplete: resetting state for channelId='.concat(this.channelId, ', sending.length=').concat(e.length)) : (t.length > 0 && (f.info('loadComplete: merging with SEND_FAILED messages for channelId='.concat(this.channelId)), C = C.merge(t)), e.length > 0 && (f.info('loadComplete: merging with SENDING messages for channelId='.concat(this.channelId)), C = C.merge(e)));
}
return C = C.mutate({
  ready: !0,
  loadingMore: !1,
  jumpType: null !== (d = null == A ? void 0 : A.jumpType) && void 0 !== d ? d : s.SR.ANIMATED,
  jumpFlash: null !== (E = null == A ? void 0 : A.flash) && void 0 !== E && E,
  jumped: null != A,
  jumpedToPresent: null !== (p = null == A ? void 0 : A.present) && void 0 !== p && p,
  jumpTargetId: null !== (m = null == A ? void 0 : A.messageId) && void 0 !== m ? m : null,
  jumpTargetOffset: null != A && null != A.messageId && null != A.offset ? A.offset : 0,
  jumpSequenceId: null != A ? C.jumpSequenceId + 1 : C.jumpSequenceId,
  jumpReturnTargetId: null !== (I = null == A ? void 0 : A.returnMessageId) && void 0 !== I ? I : null,
  hasMoreBefore: null == A && S ? C.hasMoreBefore : N,
  hasMoreAfter: null == A && g ? C.hasMoreAfter : v,
  cached: O,
  hasFetched: e.hasFetched,
  error: !1
});
  }
  addCachedMessages(e, t) {
(0, o.Z)(e);
let n = e.map(e => h(this, e)).reverse();
return this._array.filter(e => !n.some(t => t.id === e.id)).forEach(e => d.$(n, e, (e, t) => c.default.compare(e.id, t.id))), this.reset(n).mutate({
  ready: !0,
  cached: t,
  error: !1
});
  }
  constructor(e) {
E(this, 'channelId', void 0), E(this, 'ready', void 0), E(this, 'jumpType', void 0), E(this, 'jumpTargetId', void 0), E(this, 'jumpTargetOffset', void 0), E(this, 'jumpSequenceId', void 0), E(this, 'jumped', void 0), E(this, 'jumpedToPresent', void 0), E(this, 'jumpFlash', void 0), E(this, 'jumpReturnTargetId', void 0), E(this, 'focusTargetId', void 0), E(this, 'hasMoreBefore', void 0), E(this, 'hasMoreAfter', void 0), E(this, 'loadingMore', void 0), E(this, 'revealedMessageId', void 0), E(this, 'cached', void 0), E(this, 'hasFetched', void 0), E(this, 'error', void 0), E(this, '_array', []), E(this, '_before', void 0), E(this, '_after', void 0), E(this, '_map', {}), this.channelId = e, this.ready = !1, this.jumpTargetId = null, this.jumpTargetOffset = 0, this.jumpSequenceId = 1, this.jumped = !1, this.jumpedToPresent = !1, this.jumpType = s.SR.ANIMATED, this.jumpFlash = !0, this.jumpReturnTargetId = null, this.hasMoreBefore = !0, this.hasMoreAfter = !1, this.loadingMore = !1, this.revealedMessageId = null, this._clearMessages(), this._before = new p(!0), this._after = new p(!1), this.cached = !1, this.hasFetched = !1, this.error = !1;
  }
}
E(m, '_channelMessages', {}), t.Z = m;