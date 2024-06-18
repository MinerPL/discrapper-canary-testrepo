"use strict";
n.d(t, {
  PF: function() {
    return G
  },
  R7: function() {
    return D
  },
  Tg: function() {
    return P
  },
  UU: function() {
    return y
  },
  gK: function() {
    return M
  },
  hM: function() {
    return R
  },
  iy: function() {
    return U
  },
  mO: function() {
    return L
  },
  t1: function() {
    return O
  },
  uL: function() {
    return b
  },
  v2: function() {
    return v
  },
  yC: function() {
    return g
  }
}), n(757143);
var i = n(392711),
  r = n.n(i),
  s = n(772848),
  o = n(544891),
  a = n(377108),
  l = n(570140),
  u = n(367907),
  _ = n(198620),
  d = n(706454),
  c = n(675478),
  E = n(656733),
  I = n(626135),
  T = n(708406),
  h = n(591759),
  S = n(668781),
  f = n(981631),
  N = n(526761),
  A = n(689938);
let m = /-/g;

function O(e) {
  let t = null != e ? {
    [e]: 1
  } : {};
  u.ZP.trackWithMetadata(f.rMx.SEARCH_STARTED, {
    search_type: f.aib.GIF,
    load_id: E.Z.getAnalyticsID(),
    num_modifiers: Object.keys(t).length,
    modifiers: t
  })
}

function R(e, t) {
  let {
    startTime: n,
    ...i
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = {
    offset: 0,
    limit: null,
    totalResults: e.length
  }, s = (0, T._)(E.Z.getAnalyticsID(), t, {
    ...r,
    ...i,
    results: e
  }), o = null == n ? {} : {
    load_duration_ms: Date.now() - n
  };
  u.ZP.trackWithMetadata(f.rMx.SEARCH_RESULT_VIEWED, {
    ...s,
    ...o
  })
}

function C(e, t, n) {
  let i = Date.now();
  O(t), o.tn.get({
    url: f.ANM.GIFS_SEARCH,
    query: {
      q: e,
      media_format: E.Z.getSelectedFormat(),
      provider: "tenor",
      locale: d.default.locale,
      limit: n
    },
    oldFormErrors: !0
  }).then(r => {
    let s = r.body;
    R(s, t, {
      startTime: i,
      limit: n
    }), l.Z.dispatch({
      type: "GIF_PICKER_QUERY_SUCCESS",
      query: e,
      items: s
    })
  }, () => l.Z.dispatch({
    type: "GIF_PICKER_QUERY_FAILURE",
    query: e
  }))
}
let p = r().debounce(C, 250);

function g(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 ? arguments[3] : void 0;
  "" === e ? v() : (l.Z.dispatch({
    type: "GIF_PICKER_QUERY",
    query: e
  }), n ? C(e, t, i) : p(e, t, i))
}

function L(e) {
  if ("" !== e && null != e) o.tn.get({
    url: f.ANM.GIFS_SUGGEST,
    query: {
      q: e,
      provider: "tenor",
      limit: 5,
      locale: d.default.locale
    },
    oldFormErrors: !0
  }).then(t => {
    let n = t.body;
    l.Z.dispatch({
      type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
      query: e,
      items: n
    })
  })
}

function v() {
  l.Z.dispatch({
    type: "GIF_PICKER_QUERY",
    query: ""
  })
}

function D(e) {
  let {
    type: t,
    index: n,
    offset: i,
    limit: r,
    results: s,
    totalResults: a,
    query: l,
    gifId: _
  } = e, d = (0, T._)(E.Z.getAnalyticsID(), t, {
    offset: i,
    limit: r,
    results: s,
    totalResults: a
  });
  u.ZP.trackWithMetadata(f.rMx.SEARCH_RESULT_SELECTED, {
    ...d,
    index_num: n,
    source_object: "GIF Picker",
    query: l
  }), null != _ && o.tn.post({
    url: f.ANM.GIFS_SELECT,
    body: {
      id: _,
      q: l
    },
    oldFormErrors: !0
  })
}

function M() {
  let e = (0, s.Z)().replace(m, "");
  u.ZP.trackWithMetadata(f.rMx.SEARCH_OPENED, {
    search_type: f.aib.GIF,
    load_id: e
  }), l.Z.wait(() => {
    l.Z.dispatch({
      type: "GIF_PICKER_INITIALIZE",
      analyticsID: e
    })
  })
}

function P() {
  o.tn.get({
    url: f.ANM.GIFS_TRENDING,
    query: {
      provider: "tenor",
      locale: d.default.locale,
      media_format: E.Z.getSelectedFormat()
    },
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e, {
      categories: n,
      gifs: i
    } = t;
    l.Z.dispatch({
      type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
      trendingCategories: n,
      trendingGIFPreview: i[0]
    })
  })
}

function y(e) {
  let t = Date.now();
  O(f.wI2.TRENDING_GIFS), o.tn.get({
    url: f.ANM.GIFS_TRENDING_GIFS,
    query: {
      media_format: E.Z.getSelectedFormat(),
      provider: "tenor",
      locale: d.default.locale,
      limit: e
    },
    oldFormErrors: !0
  }).then(n => {
    let {
      body: i
    } = n;
    R(i, f.wI2.TRENDING_GIFS, {
      startTime: t,
      limit: e
    }), l.Z.dispatch({
      type: "GIF_PICKER_QUERY_SUCCESS",
      items: i
    })
  }, () => {
    l.Z.dispatch({
      type: "GIF_PICKER_QUERY_FAILURE"
    })
  })
}

function U(e) {
  let t = h.Z.toURLSafe(e);
  return null == t ? e : (0, _.MO)(t) ? (0, _.q5)(t).toString() : e
}

function b(e) {
  c.DZ.updateAsync("favoriteGifs", t => {
    var n;
    let i = null !== (n = r().max(Object.values(t.gifs).map(e => e.order))) && void 0 !== n ? n : 0;
    if (t.gifs[U(e.url)] = {
        ...e,
        order: i + 1
      }, a.wK.toBinary(t).length > N.vY) return S.Z.show({
      title: A.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
      body: A.Z.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
    }), !1;
    let s = r().size(t.gifs);
    s > 2 && (t.hideTooltip = !0), I.default.track(f.rMx.GIF_FAVORITED, {
      total_num_favorited: s
    })
  }, N.fy.INFREQUENT_USER_ACTION)
}

function G(e) {
  c.DZ.updateAsync("favoriteGifs", t => {
    e in t.gifs ? delete t.gifs[e] : delete t.gifs[U(e)], I.default.track(f.rMx.GIF_UNFAVORITED, {
      total_num_favorited: r().size(t.gifs)
    })
  }, N.fy.INFREQUENT_USER_ACTION)
}