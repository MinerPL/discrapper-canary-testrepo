n.d(t, {
  Bg: function() {
return a;
  },
  Ni: function() {
return k;
  },
  YH: function() {
return x;
  },
  ld: function() {
return r;
  },
  rf: function() {
return G;
  }
}), n(47120), n(653041);
var r, i, a, o, s, l, u = n(470079),
  c = n(392711),
  d = n.n(c),
  _ = n(772848),
  E = n(442837),
  f = n(80932),
  h = n(339085),
  p = n(906411),
  m = n(689789),
  I = n(633302),
  T = n(806966),
  g = n(28546),
  S = n(889161),
  A = n(984933),
  N = n(430824),
  v = n(914010),
  O = n(771845),
  R = n(594174),
  C = n(176354),
  y = n(111361),
  D = n(392552),
  L = n(543241),
  b = n(304852),
  M = n(199257),
  P = n(149203),
  U = n(185923),
  w = n(689938);
(o = r || (r = {}))[o.EMOJI = 0] = 'EMOJI', o[o.CREATE_EMOJI = 1] = 'CREATE_EMOJI', (s = i || (i = {}))[s.SECTION_HEADING = 0] = 'SECTION_HEADING', s[s.SECTION_ROW = 1] = 'SECTION_ROW';
let x = e => {
  let {
channel: t,
collapsedSections: n,
includeCreateEmojiButton: r = !0,
pickerIntention: i,
emojiSearchResults: a,
gridWidth: o,
emojiPaddingHorizontal: s,
emojiSpriteSize: l
  } = e, c = (0, E.e7)([h.Z], () => h.Z.categories), f = (0, E.e7)([N.Z], () => N.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]), T = null == t ? null : t.getGuildId(), g = (0, E.e7)([h.Z], () => h.Z.getDisambiguatedEmojiContext(T), [T]), x = (0, L.NJ)(T), G = (0, L.wC)(T), k = (0, L.q5)(T), {
canSplitFrecencyList: B
  } = (0, m.S)({
location: 'useEmojiGrid',
autoTrackExposure: !0
  }), {
topEmojis: F,
newlyAddedEmojis: V
  } = (0, M.Z)(T, i), H = (0, E.Wu)([O.ZP], () => O.ZP.getFlattenedGuildIds(), []), {
canCreateExpressions: Z
  } = (0, S.XJ)(f), Y = (0, E.e7)([R.default], () => R.default.getCurrentUser()), j = (0, y.I5)(Y), W = g.getCustomEmoji(), K = e => {
if (e.type === p.B.GUILD)
  return e.guildId;
  }, z = u.useMemo(() => d().groupBy(W, K), [W]), {
enabled: q,
treatment: Q
  } = D.Z.useExperiment({
location: 'EmojiPicker'
  }, {
autoTrackExposure: !0,
disable: !Z
  });
  return u.useMemo(() => {
let e = [],
  u = [],
  E = [],
  h = [],
  p = 0,
  m = 0;
if (null != g && null != o) {
  let T = Math.floor(o / (l + 2 * s)),
    g = (a, o) => {
      let s = new Map(),
        c = n.has(o.sectionId),
        [_, f] = d().partition(a, e => {
          let n = C.ZP.isEmojiDisabled({
            emoji: e,
            channel: t,
            intention: i
          });
          return s.set(e, n), !n;
        }),
        I = _.concat(f),
        g = o.guild,
        S = v.Z.getGuildId(),
        A = o.sectionId === P.En.TOP_GUILD_EMOJI,
        N = !A && null != g && S === g.id && I.length < g.getMaxEmojiSlots(),
        O = A && I.length < T && !q,
        R = null != g && A && q && Q === D.B.WITH_TOP_LIST && z[g.id].length < g.getMaxEmojiSlots(),
        y = r && Z && null != g && (N || O || R);
      y && R && I.length === T && I.shift();
      let b = q && y && !c,
        M = Math.ceil((y ? I.length + 1 : I.length) / T),
        U = [];
      for (let e = 0; e < M; e++) {
        let t = 0 === e,
          n = e * T - (b && e > 0 ? 1 : 0),
          r = n + T - (b && t ? 1 : 0),
          i = I.slice(n, r).map((e, n) => {
            var r, i;
            return {
              type: 0,
              emoji: e,
              size: l,
              isDisabled: s.get(e),
              rowIndex: m,
              columnIndex: b && t ? n + 1 : n,
              visibleRowIndex: p,
              category: o.type,
              subCategory: o.sectionId === P.En.TOP_GUILD_EMOJI ? (0, L.IP)(F, V, null !== (i = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== i ? i : e.name) : P.t0.NONE
            };
          });
        if (b && t && !c && (i = [{
              type: 1,
              guildId: g.id,
              name: w.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
              size: l,
              rowIndex: m,
              columnIndex: 0,
              visibleRowIndex: p
            },
            ...i
          ]), U.push(i), !c) {
          if (!q && y && e === M - 1) {
            let t = U[e];
            t.push({
              type: 1,
              guildId: g.id,
              name: w.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
              size: l,
              rowIndex: e,
              columnIndex: t.length,
              visibleRowIndex: p
            });
          }
          h.push(i.length), E.push(i), p++;
        }
        m++;
      }
      let x = {
        ...o,
        count: a.length
      };
      u.push(x), e.push(c ? 0 : M);
    };
  if (null != a)
    0 !== a.unlocked.length && g(a.unlocked, {
      type: P.En.SEARCH_RESULTS,
      sectionId: P.En.SEARCH_RESULTS,
      count: a.unlocked.length,
      isNitroLocked: !1
    }), 0 !== a.locked.length && g(a.locked, {
      type: P.En.PREMIUM_UPSELL,
      categoryId: P.UX.PREMIUM_UPSELL,
      sectionId: P.En.PREMIUM_UPSELL,
      count: a.locked.length,
      isNitroLocked: !j
    });
  else
    for (let e of c)
      if (e === P.UX.CUSTOM) {
        let n = n => {
          let r = z[n];
          if (null == r)
            return;
          let a = r.filter(e => C.ZP.getEmojiUnavailableReason({
            emoji: e,
            channel: null != t ? t : A.ZP.getDefaultChannel(n),
            intention: i
          }) !== U.Z5.DISALLOW_EXTERNAL);
          if (0 === a.length)
            return;
          let o = N.Z.getGuild(n),
            s = !j && C.ZP.isEmojiCategoryNitroLocked({
              categoryEmojis: a,
              channel: t,
              intention: i
            });
          g(a, {
            categoryId: e,
            guild: o,
            type: P.En.GUILD,
            sectionId: null != o ? o.id : (0, _.Z)(),
            count: a.length,
            isNitroLocked: s
          });
        };
        if (null != f && n(f.id), (0, U.Gt)(i))
          for (let e of H)
            (null == f || f.id !== e) && n(e);
      } else if (e === P.UX.TOP_GUILD_EMOJI) {
    if (null != f) {
      let {
        allEmojis: t
      } = (0, b.J)({
        topEmojis: F,
        newlyAddedEmojis: V
      });
      t.length > 0 && g(t, {
        categoryId: e,
        guild: N.Z.getGuild(f.id),
        type: P.En.TOP_GUILD_EMOJI,
        sectionId: P.En.TOP_GUILD_EMOJI,
        count: t.length,
        isNitroLocked: !1
      });
    }
  } else if (e === P.UX.RECENT) {
    let n = (i === U.Hz.REACTION && B ? k : G).filter(e => !C.ZP.isEmojiFiltered({
      emoji: e,
      channel: t,
      intention: i
    }));
    g(n, {
      categoryId: e,
      type: P.En.RECENT,
      sectionId: P.En.RECENT,
      count: n.length,
      isNitroLocked: !1
    });
  } else if (e === P.UX.FAVORITES) {
    let n = x.filter(e => !C.ZP.isEmojiFiltered({
      emoji: e,
      channel: t,
      intention: i
    }));
    0 !== n.length && g(n, {
      categoryId: e,
      type: P.En.FAVORITES,
      sectionId: P.En.FAVORITES,
      count: n.length,
      isNitroLocked: !1
    });
  } else {
    let t = I.ZP.getByCategory(e);
    null != t && g(t, {
      categoryId: e,
      type: P.En.UNICODE,
      sectionId: e,
      count: t.length,
      isNitroLocked: !1
    });
  }
}
return {
  columnCounts: h,
  emojiGrid: E,
  rowCountBySection: e,
  sectionDescriptors: u
};
  }, [
g,
o,
l,
s,
a,
n,
q,
Q,
z,
r,
Z,
t,
i,
F,
V,
j,
c,
f,
H,
B,
k,
G,
x
  ]);
};
(l = a || (a = {}))[l.PREMIUM = 0] = 'PREMIUM', l[l.ROLE_SUBSCRIPTION = 1] = 'ROLE_SUBSCRIPTION';
let G = e => {
let {
  pickerIntention: t,
  selectedChannel: n,
  onSelectEmoji: r,
  setUpsellConfigs: i,
  emojiSelectAnalytics: a,
  trackEmojiFavorited: o
} = e, s = (0, E.e7)([h.Z], () => h.Z.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
return u.useCallback((e, l) => {
  switch (e.type) {
    case 1:
      r(void 0, l.isFinalSelection, l.isBurst);
      return;
    case 0: {
      let {
        emoji: u
      } = e;
      if (null == u)
        return;
      let c = C.ZP.getEmojiUnavailableReason({
        emoji: u,
        channel: n,
        intention: t
      });
      if (l.toggleFavorite) {
        s.isFavoriteEmojiWithoutFetchingLatest(u) || null != c ? (0, f.Xe)(u) : (null == o || o(e), (0, f.$K)(u));
        return;
      }
      if (c === U.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE)
        return;
      if (c === U.Z5.PREMIUM_LOCKED) {
        i({
          type: 0,
          emojiDescriptor: e
        });
        return;
      }
      if (c === U.Z5.ROLE_SUBSCRIPTION_LOCKED && u.type === p.B.GUILD) {
        i({
          type: 1,
          guildId: u.guildId,
          emojiId: u.id
        });
        return;
      }
      if (c === U.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE)
        return;
      null == a || a(e), r(u, l.isFinalSelection, l.isBurst);
    }
  }
}, [
  n,
  t,
  r,
  i,
  s,
  a,
  o
]);
  },
  k = e => {
let {
  emojiListRef: t
} = e, n = (0, g.Iu)(e => e.searchQuery), r = u.useCallback(e => {
  var n;
  return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e);
}, [t]);
return u.useCallback(e => {
  '' !== n ? ((0, g.ql)(''), T.kJ.setActiveCategoryIndex(e)) : r(e);
}, [
  r,
  n
]);
  };