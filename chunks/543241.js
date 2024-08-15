n.d(t, {
  A3: function() {
return y;
  },
  C1: function() {
return H;
  },
  DV: function() {
return k;
  },
  Gn: function() {
return P;
  },
  IP: function() {
return Y;
  },
  J1: function() {
return w;
  },
  MZ: function() {
return Z;
  },
  NJ: function() {
return V;
  },
  Nf: function() {
return x;
  },
  PC: function() {
return D;
  },
  Y1: function() {
return G;
  },
  fe: function() {
return U;
  },
  jA: function() {
return L;
  },
  kI: function() {
return C;
  },
  nV: function() {
return j;
  },
  q5: function() {
return F;
  },
  to: function() {
return M;
  },
  wC: function() {
return B;
  },
  y$: function() {
return b;
  }
}), n(733860), n(653041), n(47120), n(724458), n(627341), n(757143);
var r = n(470079),
  i = n(392711),
  a = n(278074),
  s = n(442837),
  o = n(367907),
  l = n(339085),
  u = n(689789);
n(353842);
var c = n(558217),
  d = n(675478),
  _ = n(430824),
  E = n(771845),
  f = n(594174),
  h = n(626135),
  p = n(70956),
  m = n(176354),
  I = n(111361);
n(709054);
var T = n(304852),
  g = n(199257),
  S = n(149203),
  A = n(981631),
  N = n(185923),
  v = n(957825),
  O = n(474936),
  R = n(689938);
let C = function(e, t) {
let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
(0, c.O)(n);
let i = (0, N.Gt)(e),
  a = B(n),
  o = F(n),
  {
    canSplitFrecencyList: d
  } = (0, u.S)({
    location: 'useEmojiCategories',
    autoTrackExposure: !0
  }),
  h = V(n),
  {
    topEmojis: p,
    newlyAddedEmojis: A
  } = (0, g.Z)(n, e),
  {
    allEmojis: v
  } = (0, T.Z)({
    topEmojis: p,
    newlyAddedEmojis: A
  }),
  O = (0, s.e7)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(n), [n]),
  C = (0, s.e7)([_.Z], () => {
    var e;
    return null === (e = _.Z.getGuild(n)) || void 0 === e ? void 0 : e.name;
  }),
  y = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
  D = (0, I.I5)(y);
return r.useMemo(() => {
  let r = O.getGroupedCustomEmoji(),
    s = E.ZP.getFlattenedGuildIds(),
    u = [],
    c = (r, i) => m.ZP.getEmojiUnavailableReasons({
      categoryEmojis: r,
      channel: t,
      guildId: n,
      intention: e,
      computeUnfiltered: i
    });
  return ((e, i) => {
    for (let a of e) {
      let e;
      if (i === S.En.GUILD && (e = _.Z.getGuild(a)), null == e)
        continue;
      let s = null == r ? void 0 : r[e.id];
      if (null == s || 0 === s.length)
        continue;
      let {
        emojisDisabled: o,
        emojisFilteredCount: l,
        emojisPremiumLockedCount: d,
        emojiNitroLocked: E
      } = c(s, !1);
      if (null != t && s.length === l)
        continue;
      let f = null;
      i === S.En.GUILD && (f = {
        type: S.En.GUILD,
        guild: e,
        isNitroLocked: !D && E && d === s.length,
        emojis: s,
        emojisDisabled: o
      }), null != f && (e.id === n ? u.unshift(f) : u.push(f));
    }
  })(s, S.En.GUILD), l.ZP.categories.reduce((t, r) => {
    if (r === S.UX.TOP_GUILD_EMOJI) {
      let {
        emojisDisabled: e,
        emojisUnfiltered: n
      } = c(v, !0);
      if (null == n || 0 === n.length)
        return t;
      t.push({
        type: S.En.TOP_GUILD_EMOJI,
        id: r,
        name: R.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
          guildName: C
        }),
        isNitroLocked: !1,
        emojis: n,
        emojisDisabled: e
      });
    } else if (r === S.UX.RECENT) {
      let {
        emojisDisabled: n,
        emojisUnfiltered: i
      } = c(e === N.Hz.REACTION && d ? o : a, !0);
      if (null == i || 0 === i.length)
        return t;
      t.push({
        type: S.En.RECENT,
        id: r,
        name: R.Z.Messages.EMOJI_CATEGORY_RECENT,
        isNitroLocked: !1,
        emojis: i,
        emojisDisabled: n
      });
    } else if (r === S.UX.FAVORITES) {
      let {
        emojisDisabled: e,
        emojisUnfiltered: n
      } = c(h, !0);
      if (null == n || 0 === n.length)
        return t;
      t.push({
        type: S.En.FAVORITES,
        id: r,
        name: R.Z.Messages.CATEGORY_FAVORITE,
        isNitroLocked: !1,
        emojis: n,
        emojisDisabled: e
      });
    } else if (r === S.UX.CUSTOM) {
      let e = u;
      !i && (e = u.filter(e => e.type === S.En.GUILD && e.guild.id === n)), t.push(...e);
    } else
      t.push({
        type: S.En.UNICODE,
        id: r,
        name: r,
        isNitroLocked: !1
      });
    return t;
  }, []);
}, [
  O,
  t,
  n,
  e,
  v,
  C,
  d,
  o,
  a,
  h,
  i,
  D
]);
  },
  y = e => {
let t = (null == e ? void 0 : e.getGuildId()) != null;
h.default.track(A.rMx.PREMIUM_PROMOTION_OPENED, {
  location_page: t ? A.ZY5.GUILD_CHANNEL : A.ZY5.DM_CHANNEL,
  location_section: null != e ? A.jXE.EMOJI_PICKER_POPOUT : A.jXE.CUSTOM_STATUS_MODAL
});
  },
  D = (e, t) => {
o.ZP.trackWithMetadata(A.rMx.SEARCH_STARTED, {
  search_type: null != t && t === N.Hz.REACTION ? A.aib.EMOJI_REACTION : A.aib.EMOJI,
  location: e
});
  },
  L = (e, t, n, r, i) => {
o.ZP.trackWithMetadata(A.rMx.SEARCH_RESULT_VIEWED, {
  search_type: null != i && i === N.Hz.REACTION ? A.aib.EMOJI_REACTION : A.aib.EMOJI,
  total_results: e,
  num_results_locked: t,
  query: r,
  location: n
});
  },
  b = e => {
var t, n, r;
let {
  emoji: i,
  emojiSuggestions: s,
  searchQuery: l,
  isLocked: u,
  location: c,
  intention: d,
  index: _
} = e, E = null !== (r = i.uniqueName) && void 0 !== r ? r : i.name, f = (0, a.EQ)(d).with(N.Hz.REACTION, () => A.aib.EMOJI_REACTION).with(N.Hz.AUTO_SUGGESTION, () => A.aib.EMOJI_AUTO_SUGGESTION).otherwise(() => A.aib.EMOJI);
o.ZP.trackWithMetadata(A.rMx.SEARCH_RESULT_SELECTED, {
  search_type: f,
  location: c,
  expression_guild_id: i.guildId,
  emoji_id: i.id,
  emoji_name: E,
  is_custom: null != i.id,
  is_animated: i.animated,
  is_locked: u,
  query: l,
  index_num: _,
  load_id: null == s ? void 0 : s.loadId,
  total_results: null == s ? void 0 : null === (t = s.results) || void 0 === t ? void 0 : t.length,
  emoji_suggestion_ids: null == s ? void 0 : null === (n = s.results) || void 0 === n ? void 0 : n.map(e => {
    let {
      emoji: t
    } = e;
    return t.id;
  }).filter(e => null != e)
});
  },
  M = (e, t) => {
o.ZP.trackWithMetadata(A.rMx.SEARCH_RESULT_EMPTY, {
  search_type: A.aib.EMOJI,
  query: t,
  location: e
});
  },
  P = e => {
let {
  emoji: t,
  subCategory: n,
  position: r,
  newlyAddedHighlight: i
} = e;
o.ZP.trackWithMetadata(A.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
  expression_section: null == n ? void 0 : n.toString(),
  newly_added_highlight: i,
  emoji_id: t.id,
  emoji_name: t.name,
  emoji_animated: t.animated,
  emoji_position: r
});
  },
  U = e => {
var t;
let n, {
  emoji: r,
  location: i,
  pickerIntention: a,
  category: s,
  subCategory: l = S.t0.NONE,
  position: u,
  newlyAddedHighlight: c,
  isBurstReaction: d
} = e;
switch (a) {
  case N.Hz.REACTION:
    n = d ? O.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : O.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
    break;
  case N.Hz.STATUS:
    n = O.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
    break;
  default:
    n = O.cd.EMOJI_PICKER_EMOJI_CLICKED;
}
let _ = null !== (t = r.uniqueName) && void 0 !== t ? t : r.name;
o.ZP.trackWithMetadata(A.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
  type: n,
  location: i,
  expression_id: r.id,
  expression_name: _,
  expression_guild_id: r.guildId,
  is_custom: null != r.id,
  is_animated: r.animated,
  expression_picker_section: s,
  expression_section: null == l ? void 0 : l.toString(),
  emoji_position: u,
  newly_added_highlight: c,
  is_burst: d
});
  },
  w = e => {
var t;
let {
  emoji: n,
  location: r
} = e, i = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
o.ZP.trackWithMetadata(A.rMx.EXPRESSION_FAVORITED, {
  location: r,
  expression_type: v.X1.EMOJI,
  expression_id: n.id,
  expression_name: i,
  expression_guild_id: n.guildId,
  is_custom: null != n.id,
  is_animated: n.animated
});
  };
(0, i.throttle)(e => {
  let {
emojiSuggestions: t,
analyticsLocation: n
  } = e;
  o.ZP.trackWithMetadata(A.rMx.AUTO_SUGGEST_DISPLAYED, {
suggestion_type: A.Z9p.EMOJI,
suggestion_quantity: t.results.length,
custom_quantity: t.results.filter(e => {
  let {
    emoji: t
  } = e;
  return null != t.id;
}).length,
load_id: t.loadId,
location: n
  });
}, p.Z.Millis.HALF_SECOND, {
  leading: !1,
  trailing: !0
});
let x = (e, t) => {
if (e.type === S.En.GUILD)
  return null != t ? t.toString() : '';
return e.id;
  },
  G = (e, t) => {
switch (e) {
  case S.UX.TOP_GUILD_EMOJI:
    return R.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
      guildName: t
    });
  case S.UX.RECENT:
    return R.Z.Messages.EMOJI_CATEGORY_RECENT;
  case S.UX.FAVORITES:
    return R.Z.Messages.CATEGORY_FAVORITE;
  case S.UX.ACTIVITY:
    return R.Z.Messages.EMOJI_CATEGORY_ACTIVITY;
  case S.UX.FLAGS:
    return R.Z.Messages.EMOJI_CATEGORY_FLAGS;
  case S.UX.FOOD:
    return R.Z.Messages.EMOJI_CATEGORY_FOOD;
  case S.UX.NATURE:
    return R.Z.Messages.EMOJI_CATEGORY_NATURE;
  case S.UX.OBJECTS:
    return R.Z.Messages.EMOJI_CATEGORY_OBJECTS;
  case S.UX.PEOPLE:
    return R.Z.Messages.EMOJI_CATEGORY_PEOPLE;
  case S.UX.SYMBOLS:
    return R.Z.Messages.EMOJI_CATEGORY_SYMBOLS;
  case S.UX.TRAVEL:
    return R.Z.Messages.EMOJI_CATEGORY_TRAVEL;
  case S.UX.PREMIUM_UPSELL:
    return R.Z.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
  default:
    return null != t ? t : e;
}
  };

function k(e, t, n) {
  r.useEffect(() => {
d.DZ.loadIfNecessary();
  }, []);
  let i = (0, N.Gt)(n);
  return (0, s.e7)([l.ZP], () => {
let r = e.replace(/^:/, '').replace(/:$/, '');
return '' === r ? null : l.ZP.searchWithoutFetchingLatest({
  channel: t,
  query: r,
  count: 0,
  intention: n,
  includeExternalGuilds: i
});
  }, [
t,
n,
e,
i
  ], s.pF);
}

function B(e) {
  return r.useEffect(() => {
d.DZ.loadIfNecessary();
  }, []), (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest());
}

function F(e) {
  return r.useEffect(() => {
d.DZ.loadIfNecessary();
  }, []), (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest());
}

function V(e) {
  return r.useEffect(() => {
d.DZ.loadIfNecessary();
  }, []), (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest);
}

function H(e, t) {
  return r.useEffect(() => {
d.DZ.loadIfNecessary();
  }, []), (0, s.e7)([l.ZP], () => null != t && l.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t));
}

function Z(e) {
  return r.useEffect(() => {
d.DZ.loadIfNecessary();
  }, []), (0, s.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest());
}

function Y(e, t, n) {
  if (null == n)
return S.t0.NONE;
  let r = e.map(e => {
  var t, n;
  return null !== (n = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== n ? n : e.name;
}),
i = t.map(e => e.id);
  return r.includes(n) ? S.t0.TOP_GUILD_EMOJI : i.includes(n) ? S.t0.NEWLY_ADDED_EMOJI : S.t0.NONE;
}

function j(e, t) {
  return e === N.Hz.REACTION ? t ? R.Z.Messages.SEARCH_FOR_SUPER_REACTION : R.Z.Messages.SEARCH_FOR_REACTION : R.Z.Messages.SEARCH_FOR_EMOJI;
}