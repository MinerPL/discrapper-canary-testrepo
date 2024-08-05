n.d(t, {
  EB: function() {
return g;
  },
  cl: function() {
return I;
  }
}), n(47120);
var r = n(392711),
  i = n.n(r),
  a = n(442837),
  s = n(544891),
  o = n(570140),
  l = n(592125),
  u = n(709054),
  c = n(238349),
  d = n(660189);
n(682474);
var _ = n(981631);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class f {
  get(e) {
return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e];
  }
  delete(e) {
delete this._set[e];
  }
  hasNext() {
return !i().isEmpty(this._set);
  }
  next() {
return u.default.keys(this._set)[0];
  }
  constructor(e) {
E(this, '_set', void 0), E(this, '_defaultValueFunc', void 0), this._set = {}, this._defaultValueFunc = e;
  }
}
let h = new class e {
request(e, t) {
  this.requested.get(e).add(t);
}
hasRequested(e, t) {
  return this.requested.get(e).has(t);
}
finishRequesting(e, t) {
  let n = this.requested.get(e);
  t.forEach(e => n.delete(e)), h.compact(e);
}
getRequested(e) {
  return this.requested.get(e);
}
getNextBatch(e, t) {
  return Array.from(this.requested.get(e)).slice(0, t);
}
hasNext() {
  return this.requested.hasNext();
}
next() {
  return this.requested.next();
}
compact(e) {
  0 === this.requested.get(e).size && this.requested.delete(e);
}
constructor() {
  E(this, 'requested', void 0), this.requested = new f(() => new Set());
}
  }(),
  p = null;

function m(e, t) {
  return !e && null == t;
}

function I(e) {
  var t, n;
  let {
loaded: r,
firstMessage: i
  } = (0, a.cj)([d.Z], () => d.Z.getMessage(e.id)), s = (0, a.e7)([l.Z], () => l.Z.getChannel(e.parent_id));
  if (null != s && (t = r, n = i, !t && null == n))
(function(e, t) {
  if (h.hasRequested(e.id, t))
    return;
  let n = (0, c.U)(e.id),
    r = n.findIndex(e => e === t),
    i = n.slice(r, r + 5).filter(t => !h.hasRequested(e.id, t));
  T(e, i);
}(s, e.id));
  return {
loaded: r,
firstMessage: i
  };
}

function T(e, t) {
  let n = !1;
  t.forEach(t => {
var r, i;
let {
  loaded: a,
  firstMessage: s
} = d.Z.getMessage(t);
if (r = a, i = s, !r && null == i)
  h.request(e.id, t), n = !0;
  }), n && null == p && (p = setTimeout(S, 0));
}

function g(e) {
  T(e, (0, c.U)(e.id).slice(0, 10));
}
async function S() {
  try {
for (; h.hasNext();)
  await A(h.next());
  } finally {
p = null;
  }
}
async function A(e) {
  let t = h.getNextBatch(e, 10);
  try {
var n;
if (0 === t.length)
  return;
let r = null === (n = l.Z.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
if (null == r)
  return;
let {
  body: {
    threads: i
  }
} = await s.tn.post({
  url: _.ANM.FORUM_POSTS(e),
  body: {
    thread_ids: t
  }
});
o.Z.dispatch({
  type: 'LOAD_FORUM_POSTS',
  guildId: r,
  threads: i
});
  } catch (e) {} finally {
h.finishRequesting(e, t);
  }
}