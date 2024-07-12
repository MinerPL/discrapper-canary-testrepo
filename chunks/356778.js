n.d(t, {
  II: function() {
return p;
  },
  Ow: function() {
return g;
  },
  P2: function() {
return T;
  },
  mw: function() {
return i;
  },
  z0: function() {
return I;
  }
}), n(47120);
var i, a, l = n(470079),
  s = n(652874),
  r = n(143927),
  o = n(570140),
  c = n(110924),
  d = n(840877),
  u = n(952537),
  h = n(981631);
let p = -1;
(a = i || (i = {})).MESSAGES = 'messages', a.LINKS = 'links', a.MEDIA = 'media', a.ALL_COUNTS = 'all_counts';

function m(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
l = JSON.stringify(i);
  return a ? 'guild_'.concat(t, '_search_tab_').concat(n, '_for_').concat(e, '_with_additonal_').concat(l) : 'guild_'.concat(t, '_search_').concat(n, '_for_').concat(e, '_with_additonal_').concat(l);
}
let _ = {
searchFetcher: null,
searchTabFetcher: null,
result: null,
messageCount: p,
lastMessage: null
  },
  f = (0, s.Z)(() => new Map()),
  E = (e, t) => {
f.setState(n => {
  let i = n.get(e);
  return null == i ? n.set(e, {
    ..._,
    ...t
  }) : n.set(e, {
    ...i,
    ...t
  }), n;
});
  },
  C = e => f(t => t.get(e), r.Z);

function g(e, t, n) {
  let i = null != n ? n : {};
  switch (t) {
case 'links':
  return {
    author_id: e,
      has: ['link'],
      ...i
  };
case 'media':
  return {
    author_id: e,
      attachment_extension: [
        'png',
        'jpg',
        'webp',
        'mov',
        'mp4',
        'gif',
        'mp3',
        'wav',
        'flac',
        'ogg'
      ],
      ...i
  };
case 'all_counts':
  return {
    author_id: [e],
      limit: 1,
      cursor: null,
      ...i
  };
default:
  return {
    author_id: e,
      ...i
  };
  }
}

function I(e, t, n) {
  return function(e, t, n, i) {
let {
  addtionalQuery: a,
  shouldDispatch: s = !1
} = i, r = l.useMemo(() => m(e, t, n, a), [
  e,
  t,
  n,
  a
]), f = C(r), I = (0, c.Z)(r), [x, T] = l.useState({});
return l.useEffect(() => {
  if (I !== r) {
    let i = g(e, n, a),
      l = new d.ZP(t, h.aib.GUILD, i);
    E(r, {
      searchFetcher: l,
      messageCount: p,
      lastMessage: null
    }), setTimeout(() => {
      l.fetch(e => {
        let n = e.body,
          i = n.messages[0];
        if (E(r, {
            searchFetcher: l,
            result: n,
            messageCount: n.total_results,
            lastMessage: i
          }), T({}), s) {
          var a, c;
          o.Z.dispatch({
            type: 'MOD_VIEW_SEARCH_FINISH',
            searchId: t,
            guildId: t,
            analyticsId: n.analytics_id,
            totalResults: n.total_results,
            channels: n.channels,
            messages: n.messages,
            threads: null !== (a = n.threads) && void 0 !== a ? a : [],
            members: (null !== (c = n.members) && void 0 !== c ? c : []).map(e => (0, u.Z)(e)),
            hasError: !1,
            doingHistoricalIndex: n.doing_deep_historical_index,
            documentsIndexed: n.documents_indexed
          });
        }
      }, e => {}, e => {
        E(r, {
          messageCount: 0,
          lastMessage: null
        }), T({});
      });
    });
  }
  return () => {};
}, [
  e,
  t,
  f,
  r,
  n,
  a
]), null != f ? f : _;
  }(e, t, 'messages', n);
}

function x(e, t, n, i) {
  let a = l.useMemo(() => m(e, t, n, i, !0), [
  e,
  t,
  n,
  i
]),
s = C(a),
r = (0, c.Z)(a);
  return {
key: a,
previousKey: r,
state: s
  };
}

function T(e, t, n) {
  var i, a, s;
  let {
key: r,
state: o
  } = x(e, t, 'messages', n), {
key: c,
state: u
  } = x(e, t, 'links', n), {
key: m,
state: _
  } = x(e, t, 'media', n), f = l.useMemo(() => g(e, 'all_counts', n), [
e,
n
  ]), C = l.useMemo(() => ({
tabs: {
  messages: g(e, 'messages', f),
  links: g(e, 'links', f),
  media: g(e, 'media', f)
},
track_exact_total_hits: !0
  }), [
e,
f
  ]), I = l.useCallback(e => {
let t = e.messages,
  n = e.links,
  i = e.media;
E(r, t), E(c, n), E(m, i);
  }, [
c,
m,
r
  ]), T = l.useCallback(e => {
I({
  messages: e,
  links: e,
  media: e
});
  }, [I]);
  l.useEffect(() => {
let e = new d.tJ(t, h.aib.GUILD, f, C);
T({
  searchTabFetcher: e,
  messageCount: p,
  lastMessage: null
});
let n = setTimeout(async () => {
  let t = null;
  try {
    let n = await e.makeRequest();
    t = null == n ? void 0 : n.body;
  } catch (e) {
    t = null;
  }
  if (null == t)
    T({
      messageCount: 0,
      lastMessage: null
    });
  else {
    var n, i, a, l, s, r;
    let e = t.tabs.messages,
      o = t.tabs.links,
      c = t.tabs.media;
    I({
      messages: {
        messageCount: null !== (n = null == e ? void 0 : e.total_results) && void 0 !== n ? n : 0,
        lastMessage: null !== (i = null == e ? void 0 : e.messages[0]) && void 0 !== i ? i : null
      },
      links: {
        messageCount: null !== (a = null == o ? void 0 : o.total_results) && void 0 !== a ? a : 0,
        lastMessage: null !== (l = null == o ? void 0 : o.messages[0]) && void 0 !== l ? l : null
      },
      media: {
        messageCount: null !== (s = null == c ? void 0 : c.total_results) && void 0 !== s ? s : 0,
        lastMessage: null !== (r = null == c ? void 0 : c.messages[0]) && void 0 !== r ? r : null
      }
    });
  }
  N({});
});
return () => {
  e.cancel(), clearTimeout(n);
};
  }, [
e,
t,
f,
C,
T,
I
  ]);
  let [v, N] = l.useState({});
  return {
messagesCount: null !== (i = null == o ? void 0 : o.messageCount) && void 0 !== i ? i : p,
linksCount: null !== (a = null == u ? void 0 : u.messageCount) && void 0 !== a ? a : p,
mediaCount: null !== (s = null == _ ? void 0 : _.messageCount) && void 0 !== s ? s : p
  };
}