"use strict";
n.r(t), n.d(t, {
  preloadForumThreads: function() {
    return m
  },
  useFirstForumPostMessage: function() {
    return h
  }
}), n("47120");
var i = n("392711"),
  r = n.n(i),
  a = n("442837"),
  s = n("544891"),
  o = n("570140"),
  l = n("592125"),
  u = n("709054"),
  d = n("238349"),
  _ = n("660189");
n("682474");
var c = n("981631");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class I {
  get(e) {
    return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
  }
  delete(e) {
    delete this._set[e]
  }
  hasNext() {
    return !r().isEmpty(this._set)
  }
  next() {
    return u.default.keys(this._set)[0]
  }
  constructor(e) {
    E(this, "_set", void 0), E(this, "_defaultValueFunc", void 0), this._set = {}, this._defaultValueFunc = e
  }
}
let T = new class e {
    request(e, t) {
      this.requested.get(e).add(t)
    }
    hasRequested(e, t) {
      return this.requested.get(e).has(t)
    }
    finishRequesting(e, t) {
      let n = this.requested.get(e);
      t.forEach(e => n.delete(e)), T.compact(e)
    }
    getRequested(e) {
      return this.requested.get(e)
    }
    getNextBatch(e, t) {
      return Array.from(this.requested.get(e)).slice(0, t)
    }
    hasNext() {
      return this.requested.hasNext()
    }
    next() {
      return this.requested.next()
    }
    compact(e) {
      0 === this.requested.get(e).size && this.requested.delete(e)
    }
    constructor() {
      E(this, "requested", void 0), this.requested = new I(() => new Set)
    }
  },
  f = null;

function S(e, t) {
  return !e && null == t
}

function h(e) {
  var t, n;
  let {
    loaded: i,
    firstMessage: r
  } = (0, a.useStateFromStoresObject)([_.default], () => _.default.getMessage(e.id)), s = (0, a.useStateFromStores)([l.default], () => l.default.getChannel(e.parent_id));
  if (null != s && (t = i, n = r, !t && null == n))(function(e, t) {
    if (T.hasRequested(e.id, t)) return;
    let n = (0, d.computeThreadIdsSnapshot)(e.id),
      i = n.findIndex(e => e === t),
      r = n.slice(i, i + 5).filter(t => !T.hasRequested(e.id, t));
    A(e, r)
  })(s, e.id);
  return {
    loaded: i,
    firstMessage: r
  }
}

function A(e, t) {
  let n = !1;
  t.forEach(t => {
    var i, r;
    let {
      loaded: a,
      firstMessage: s
    } = _.default.getMessage(t);
    if (i = a, r = s, !i && null == r) T.request(e.id, t), n = !0
  }), n && null == f && (f = setTimeout(N, 0))
}

function m(e) {
  A(e, (0, d.computeThreadIdsSnapshot)(e.id).slice(0, 10))
}
async function N() {
  try {
    for (; T.hasNext();) await p(T.next())
  } finally {
    f = null
  }
}
async function p(e) {
  let t = T.getNextBatch(e, 10);
  try {
    var n;
    if (0 === t.length) return;
    let i = null === (n = l.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
    if (null == i) return;
    let {
      body: {
        threads: r
      }
    } = await s.HTTP.post({
      url: c.Endpoints.FORUM_POSTS(e),
      body: {
        thread_ids: t
      }
    });
    o.default.dispatch({
      type: "LOAD_FORUM_POSTS",
      guildId: i,
      threads: r
    })
  } catch (e) {} finally {
    T.finishRequesting(e, t)
  }
}