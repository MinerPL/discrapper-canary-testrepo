"use strict";
n.r(t), n.d(t, {
  useFirstForumPostMessage: function() {
    return x
  },
  useMostRecentForumMessage: function() {
    return A
  },
  preloadForumThreads: function() {
    return T
  }
}), n("222007");
var l = n("917351"),
  i = n.n(l),
  a = n("446674"),
  s = n("872717"),
  r = n("913144"),
  u = n("42203"),
  o = n("299039"),
  d = n("670902"),
  c = n("349778"),
  f = n("430475"),
  m = n("324261"),
  g = n("49111");
class _ {
  get(e) {
    return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e]
  }
  delete(e) {
    delete this._set[e]
  }
  hasNext() {
    return !i.isEmpty(this._set)
  }
  next() {
    return o.default.keys(this._set)[0]
  }
  constructor(e) {
    this._set = {}, this._defaultValueFunc = e
  }
}
let h = new class e {
    request(e, t) {
      this.requested.get(e).add(t)
    }
    hasRequested(e, t) {
      return this.requested.get(e).has(t)
    }
    finishRequesting(e, t) {
      let n = this.requested.get(e);
      t.forEach(e => n.delete(e)), h.compact(e)
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
      this.requested = new _(() => new Set)
    }
  },
  p = null;

function E(e, t) {
  let n = (0, c.isForumActivityExperimentEnabled)(e);
  if (n) {
    let {
      loaded: e,
      message: n
    } = m.default.getMessageState(t);
    return !e && null == n
  }
  return !1
}

function M(e, t) {
  return !e && null == t
}

function x(e) {
  var t, n;
  let {
    loaded: l,
    firstMessage: i
  } = (0, a.useStateFromStoresObject)([f.default], () => f.default.getMessage(e.id)), s = (0, a.useStateFromStores)([u.default], () => u.default.getChannel(e.parent_id));
  if (null != s && (t = l, n = i, !t && null == n)) v(s, e.id);
  return {
    loaded: l,
    firstMessage: i
  }
}

function A(e, t) {
  let {
    loaded: n,
    message: l
  } = (0, a.useStateFromStoresObject)([m.default], () => m.default.getMessageState(t.id));
  return null != e && E(t.guild_id, t.id) && v(e, t.id), {
    loaded: n,
    mostRecentMessage: l
  }
}

function S(e, t) {
  let n = !1;
  t.forEach(t => {
    var l, i;
    let {
      loaded: a,
      firstMessage: s
    } = f.default.getMessage(t);
    if (l = a, i = s, !l && null == i || E(e.guild_id, t)) h.request(e.id, t), n = !0
  }), n && null == p && (p = setTimeout(C, 0))
}

function T(e) {
  S(e, (0, d.computeThreadIdsSnapshot)(e.id).slice(0, 10))
}

function v(e, t) {
  if (h.hasRequested(e.id, t)) return;
  let n = (0, d.computeThreadIdsSnapshot)(e.id),
    l = n.findIndex(e => e === t),
    i = n.slice(l, l + 5).filter(t => !h.hasRequested(e.id, t));
  S(e, i)
}
async function C() {
  try {
    for (; h.hasNext();) await I(h.next())
  } finally {
    p = null
  }
}
async function I(e) {
  let t = h.getNextBatch(e, 10);
  try {
    var n;
    if (0 === t.length) return;
    let l = null === (n = u.default.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
    if (null == l) return;
    let {
      body: {
        threads: i
      }
    } = await s.HTTP.post({
      url: g.Endpoints.FORUM_POSTS(e),
      body: {
        thread_ids: t
      }
    });
    r.default.dispatch({
      type: "LOAD_FORUM_POSTS",
      guildId: l,
      threads: i
    })
  } catch (e) {} finally {
    h.finishRequesting(e, t)
  }
}