"use strict";
n.d(t, {
  EB: function() {
    return A
  },
  cl: function() {
    return f
  }
}), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(442837),
  o = n(544891),
  a = n(570140),
  l = n(592125),
  u = n(709054),
  _ = n(238349),
  d = n(660189);
n(682474);
var c = n(981631);

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
  h = null;

function S(e, t) {
  return !e && null == t
}

function f(e) {
  var t, n;
  let {
    loaded: i,
    firstMessage: r
  } = (0, s.cj)([d.Z], () => d.Z.getMessage(e.id)), o = (0, s.e7)([l.Z], () => l.Z.getChannel(e.parent_id));
  if (null != o && (t = i, n = r, !t && null == n))(function(e, t) {
    if (T.hasRequested(e.id, t)) return;
    let n = (0, _.U)(e.id),
      i = n.findIndex(e => e === t),
      r = n.slice(i, i + 5).filter(t => !T.hasRequested(e.id, t));
    N(e, r)
  })(o, e.id);
  return {
    loaded: i,
    firstMessage: r
  }
}

function N(e, t) {
  let n = !1;
  t.forEach(t => {
    var i, r;
    let {
      loaded: s,
      firstMessage: o
    } = d.Z.getMessage(t);
    if (i = s, r = o, !i && null == r) T.request(e.id, t), n = !0
  }), n && null == h && (h = setTimeout(m, 0))
}

function A(e) {
  N(e, (0, _.U)(e.id).slice(0, 10))
}
async function m() {
  try {
    for (; T.hasNext();) await O(T.next())
  } finally {
    h = null
  }
}
async function O(e) {
  let t = T.getNextBatch(e, 10);
  try {
    var n;
    if (0 === t.length) return;
    let i = null === (n = l.Z.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
    if (null == i) return;
    let {
      body: {
        threads: r
      }
    } = await o.tn.post({
      url: c.ANM.FORUM_POSTS(e),
      body: {
        thread_ids: t
      }
    });
    a.Z.dispatch({
      type: "LOAD_FORUM_POSTS",
      guildId: i,
      threads: r
    })
  } catch (e) {} finally {
    T.finishRequesting(e, t)
  }
}