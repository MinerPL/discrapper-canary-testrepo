"use strict";
n.d(t, {
  A3: function() {
    return L
  },
  C1: function() {
    return V
  },
  DV: function() {
    return k
  },
  Gn: function() {
    return y
  },
  IP: function() {
    return H
  },
  J1: function() {
    return b
  },
  MZ: function() {
    return Z
  },
  NJ: function() {
    return x
  },
  Nf: function() {
    return G
  },
  PC: function() {
    return v
  },
  Y1: function() {
    return w
  },
  fe: function() {
    return U
  },
  jA: function() {
    return D
  },
  kI: function() {
    return g
  },
  nV: function() {
    return F
  },
  to: function() {
    return P
  },
  wC: function() {
    return B
  },
  y$: function() {
    return M
  }
}), n(733860), n(653041), n(47120), n(724458), n(627341), n(757143);
var i = n(470079),
  r = n(392711),
  s = n(278074),
  o = n(442837),
  a = n(367907),
  l = n(339085);
n(353842);
var u = n(558217),
  _ = n(675478),
  d = n(430824),
  c = n(771845),
  E = n(594174),
  I = n(626135),
  T = n(70956),
  h = n(176354),
  S = n(111361);
n(709054);
var f = n(304852),
  N = n(199257),
  A = n(149203),
  m = n(981631),
  O = n(185923),
  R = n(957825),
  C = n(474936),
  p = n(689938);
let g = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.getGuildId();
    (0, u.O)(n);
    let r = (0, O.Gt)(e),
      s = B(n),
      a = x(n),
      {
        topEmojis: _,
        newlyAddedEmojis: I
      } = (0, N.Z)(n, e),
      {
        allEmojis: T
      } = (0, f.Z)({
        topEmojis: _,
        newlyAddedEmojis: I
      }),
      m = (0, o.e7)([l.Z], () => l.Z.getDisambiguatedEmojiContext(n), [n]),
      R = (0, o.e7)([d.Z], () => {
        var e;
        return null === (e = d.Z.getGuild(n)) || void 0 === e ? void 0 : e.name
      }),
      C = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
      g = (0, S.I5)(C);
    return i.useMemo(() => {
      let i = m.getGroupedCustomEmoji(),
        o = c.ZP.getFlattenedGuildIds(),
        u = [],
        _ = (i, r) => h.ZP.getEmojiUnavailableReasons({
          categoryEmojis: i,
          channel: t,
          guildId: n,
          intention: e,
          computeUnfiltered: r
        });
      return ((e, r) => {
        for (let s of e) {
          let e;
          if (r === A.En.GUILD && (e = d.Z.getGuild(s)), null == e) continue;
          let o = null == i ? void 0 : i[e.id];
          if (null == o || 0 === o.length) continue;
          let {
            emojisDisabled: a,
            emojisFilteredCount: l,
            emojisPremiumLockedCount: c,
            emojiNitroLocked: E
          } = _(o, !1);
          if (null != t && o.length === l) continue;
          let I = null;
          r === A.En.GUILD && (I = {
            type: A.En.GUILD,
            guild: e,
            isNitroLocked: !g && E && c === o.length,
            emojis: o,
            emojisDisabled: a
          }), null != I && (e.id === n ? u.unshift(I) : u.push(I))
        }
      })(o, A.En.GUILD), l.Z.categories.reduce((e, t) => {
        if (t === A.UX.TOP_GUILD_EMOJI) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = _(T, !0);
          if (null == i || 0 === i.length) return e;
          e.push({
            type: A.En.TOP_GUILD_EMOJI,
            id: t,
            name: p.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
              guildName: R
            }),
            isNitroLocked: !1,
            emojis: i,
            emojisDisabled: n
          })
        } else if (t === A.UX.RECENT) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = _(s, !0);
          if (null == i || 0 === i.length) return e;
          e.push({
            type: A.En.RECENT,
            id: t,
            name: p.Z.Messages.EMOJI_CATEGORY_RECENT,
            isNitroLocked: !1,
            emojis: i,
            emojisDisabled: n
          })
        } else if (t === A.UX.FAVORITES) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = _(a, !0);
          if (null == i || 0 === i.length) return e;
          e.push({
            type: A.En.FAVORITES,
            id: t,
            name: p.Z.Messages.CATEGORY_FAVORITE,
            isNitroLocked: !1,
            emojis: i,
            emojisDisabled: n
          })
        } else if (t === A.UX.CUSTOM) {
          let t = u;
          !r && (t = u.filter(e => e.type === A.En.GUILD && e.guild.id === n)), e.push(...t)
        } else e.push({
          type: A.En.UNICODE,
          id: t,
          name: t,
          isNitroLocked: !1
        });
        return e
      }, [])
    }, [m, t, n, e, T, R, s, a, r, g])
  },
  L = e => {
    let t = (null == e ? void 0 : e.getGuildId()) != null;
    I.default.track(m.rMx.PREMIUM_PROMOTION_OPENED, {
      location_page: t ? m.ZY5.GUILD_CHANNEL : m.ZY5.DM_CHANNEL,
      location_section: null != e ? m.jXE.EMOJI_PICKER_POPOUT : m.jXE.CUSTOM_STATUS_MODAL
    })
  },
  v = (e, t) => {
    a.ZP.trackWithMetadata(m.rMx.SEARCH_STARTED, {
      search_type: null != t && t === O.Hz.REACTION ? m.aib.EMOJI_REACTION : m.aib.EMOJI,
      location: e
    })
  },
  D = (e, t, n, i, r) => {
    a.ZP.trackWithMetadata(m.rMx.SEARCH_RESULT_VIEWED, {
      search_type: null != r && r === O.Hz.REACTION ? m.aib.EMOJI_REACTION : m.aib.EMOJI,
      total_results: e,
      num_results_locked: t,
      query: i,
      location: n
    })
  },
  M = e => {
    var t, n, i;
    let {
      emoji: r,
      emojiSuggestions: o,
      searchQuery: l,
      isLocked: u,
      location: _,
      intention: d,
      index: c
    } = e, E = null !== (i = r.uniqueName) && void 0 !== i ? i : r.name, I = (0, s.EQ)(d).with(O.Hz.REACTION, () => m.aib.EMOJI_REACTION).with(O.Hz.AUTO_SUGGESTION, () => m.aib.EMOJI_AUTO_SUGGESTION).otherwise(() => m.aib.EMOJI);
    a.ZP.trackWithMetadata(m.rMx.SEARCH_RESULT_SELECTED, {
      search_type: I,
      location: _,
      expression_guild_id: r.guildId,
      emoji_id: r.id,
      emoji_name: E,
      is_custom: null != r.id,
      is_animated: r.animated,
      is_locked: u,
      query: l,
      index_num: c,
      load_id: null == o ? void 0 : o.loadId,
      total_results: null == o ? void 0 : null === (t = o.results) || void 0 === t ? void 0 : t.length,
      emoji_suggestion_ids: null == o ? void 0 : null === (n = o.results) || void 0 === n ? void 0 : n.map(e => {
        let {
          emoji: t
        } = e;
        return t.id
      }).filter(e => null != e)
    })
  },
  P = (e, t) => {
    a.ZP.trackWithMetadata(m.rMx.SEARCH_RESULT_EMPTY, {
      search_type: m.aib.EMOJI,
      query: t,
      location: e
    })
  },
  y = e => {
    let {
      emoji: t,
      subCategory: n,
      position: i,
      newlyAddedHighlight: r
    } = e;
    a.ZP.trackWithMetadata(m.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
      expression_section: null == n ? void 0 : n.toString(),
      newly_added_highlight: r,
      emoji_id: t.id,
      emoji_name: t.name,
      emoji_animated: t.animated,
      emoji_position: i
    })
  },
  U = e => {
    var t;
    let n, {
      emoji: i,
      location: r,
      pickerIntention: s,
      category: o,
      subCategory: l = A.t0.NONE,
      position: u,
      newlyAddedHighlight: _,
      isBurstReaction: d
    } = e;
    switch (s) {
      case O.Hz.REACTION:
        n = d ? C.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : C.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
        break;
      case O.Hz.STATUS:
        n = C.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
        break;
      default:
        n = C.cd.EMOJI_PICKER_EMOJI_CLICKED
    }
    let c = null !== (t = i.uniqueName) && void 0 !== t ? t : i.name;
    a.ZP.trackWithMetadata(m.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
      type: n,
      location: r,
      expression_id: i.id,
      expression_name: c,
      expression_guild_id: i.guildId,
      is_custom: null != i.id,
      is_animated: i.animated,
      expression_picker_section: o,
      expression_section: null == l ? void 0 : l.toString(),
      emoji_position: u,
      newly_added_highlight: _,
      is_burst: d
    })
  },
  b = e => {
    var t;
    let {
      emoji: n,
      location: i
    } = e, r = null !== (t = n.uniqueName) && void 0 !== t ? t : n.name;
    a.ZP.trackWithMetadata(m.rMx.EXPRESSION_FAVORITED, {
      location: i,
      expression_type: R.X1.EMOJI,
      expression_id: n.id,
      expression_name: r,
      expression_guild_id: n.guildId,
      is_custom: null != n.id,
      is_animated: n.animated
    })
  };
(0, r.throttle)(e => {
  let {
    emojiSuggestions: t,
    analyticsLocation: n
  } = e;
  a.ZP.trackWithMetadata(m.rMx.AUTO_SUGGEST_DISPLAYED, {
    suggestion_type: m.Z9p.EMOJI,
    suggestion_quantity: t.results.length,
    custom_quantity: t.results.filter(e => {
      let {
        emoji: t
      } = e;
      return null != t.id
    }).length,
    load_id: t.loadId,
    location: n
  })
}, T.Z.Millis.HALF_SECOND, {
  leading: !1,
  trailing: !0
});
let G = (e, t) => {
    if (e.type === A.En.GUILD) return null != t ? t.toString() : "";
    return e.id
  },
  w = (e, t) => {
    switch (e) {
      case A.UX.TOP_GUILD_EMOJI:
        return p.Z.Messages.EMOJI_CATEGORY_TOP_GUILD_EMOJI.format({
          guildName: t
        });
      case A.UX.RECENT:
        return p.Z.Messages.EMOJI_CATEGORY_RECENT;
      case A.UX.FAVORITES:
        return p.Z.Messages.CATEGORY_FAVORITE;
      case A.UX.ACTIVITY:
        return p.Z.Messages.EMOJI_CATEGORY_ACTIVITY;
      case A.UX.FLAGS:
        return p.Z.Messages.EMOJI_CATEGORY_FLAGS;
      case A.UX.FOOD:
        return p.Z.Messages.EMOJI_CATEGORY_FOOD;
      case A.UX.NATURE:
        return p.Z.Messages.EMOJI_CATEGORY_NATURE;
      case A.UX.OBJECTS:
        return p.Z.Messages.EMOJI_CATEGORY_OBJECTS;
      case A.UX.PEOPLE:
        return p.Z.Messages.EMOJI_CATEGORY_PEOPLE;
      case A.UX.SYMBOLS:
        return p.Z.Messages.EMOJI_CATEGORY_SYMBOLS;
      case A.UX.TRAVEL:
        return p.Z.Messages.EMOJI_CATEGORY_TRAVEL;
      case A.UX.PREMIUM_UPSELL:
        return p.Z.Messages.EMOJI_CATEGORY_PREMIUM_UPSELL;
      default:
        return null != t ? t : e
    }
  };

function k(e, t, n) {
  i.useEffect(() => {
    _.DZ.loadIfNecessary()
  }, []);
  let r = (0, O.Gt)(n);
  return (0, o.e7)([l.Z], () => {
    let i = e.replace(/^:/, "").replace(/:$/, "");
    return "" === i ? null : l.Z.searchWithoutFetchingLatest({
      channel: t,
      query: i,
      count: 0,
      intention: n,
      includeExternalGuilds: r
    })
  }, [t, n, e, r], o.pF)
}

function B(e) {
  return i.useEffect(() => {
    _.DZ.loadIfNecessary()
  }, []), (0, o.Wu)([l.Z], () => l.Z.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
}

function x(e) {
  return i.useEffect(() => {
    _.DZ.loadIfNecessary()
  }, []), (0, o.Wu)([l.Z], () => l.Z.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
}

function V(e, t) {
  return i.useEffect(() => {
    _.DZ.loadIfNecessary()
  }, []), (0, o.e7)([l.Z], () => null != t && l.Z.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
}

function Z(e) {
  return i.useEffect(() => {
    _.DZ.loadIfNecessary()
  }, []), (0, o.Wu)([l.Z], () => l.Z.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
}

function H(e, t, n) {
  if (null == n) return A.t0.NONE;
  let i = e.map(e => {
      var t, n;
      return null !== (n = null !== (t = e.id) && void 0 !== t ? t : e.uniqueName) && void 0 !== n ? n : e.name
    }),
    r = t.map(e => e.id);
  return i.includes(n) ? A.t0.TOP_GUILD_EMOJI : r.includes(n) ? A.t0.NEWLY_ADDED_EMOJI : A.t0.NONE
}

function F(e, t) {
  return e === O.Hz.REACTION ? t ? p.Z.Messages.SEARCH_FOR_SUPER_REACTION : p.Z.Messages.SEARCH_FOR_REACTION : p.Z.Messages.SEARCH_FOR_EMOJI
}