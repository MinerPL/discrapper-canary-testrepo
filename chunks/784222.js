n.d(t, {
  Bg: function() {
return a;
  },
  Ni: function() {
return B;
  },
  YH: function() {
return G;
  },
  ld: function() {
return r;
  },
  rf: function() {
return k;
  }
}), n(47120), n(653041);
var r, i, a, s, o, l, u = n(470079),
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
  D = n(111846),
  L = n(392552),
  b = n(543241),
  M = n(304852),
  P = n(199257),
  U = n(149203),
  w = n(185923),
  x = n(689938);
(s = r || (r = {}))[s.EMOJI = 0] = 'EMOJI', s[s.CREATE_EMOJI = 1] = 'CREATE_EMOJI', s[s.EXPAND_EMOJIS = 2] = 'EXPAND_EMOJIS', s[s.COLLAPSE_EMOJIS = 3] = 'COLLAPSE_EMOJIS', (o = i || (i = {}))[o.SECTION_HEADING = 0] = 'SECTION_HEADING', o[o.SECTION_ROW = 1] = 'SECTION_ROW';
let G = e => {
  let {
channel: t,
collapsedSections: n,
includeCreateEmojiButton: r = !0,
pickerIntention: i,
emojiSearchResults: a,
gridWidth: s,
emojiPaddingHorizontal: o,
emojiSpriteSize: l
  } = e, c = (0, E.e7)([h.Z], () => h.Z.categories), f = (0, E.e7)([N.Z], () => N.Z.getGuild(null == t ? void 0 : t.getGuildId()), [t]), T = null == t ? null : t.getGuildId(), g = (0, E.e7)([h.Z], () => h.Z.getDisambiguatedEmojiContext(T), [T]), G = (0, b.NJ)(T), k = (0, b.wC)(T), B = (0, b.q5)(T), {
canSplitFrecencyList: F
  } = (0, m.S)({
location: 'useEmojiGrid',
autoTrackExposure: !0
  }), {
topEmojis: V,
newlyAddedEmojis: H
  } = (0, P.Z)(T, i), Z = (0, E.Wu)([O.ZP], () => O.ZP.getFlattenedGuildIds(), []), {
canCreateExpressions: Y
  } = (0, S.XJ)(f), j = (0, E.e7)([R.default], () => R.default.getCurrentUser()), W = (0, y.I5)(j), K = g.getCustomEmoji(), z = e => {
if (e.type === p.B.GUILD)
  return e.guildId;
  }, q = u.useMemo(() => d().groupBy(K, z), [K]), {
enabled: Q,
treatment: X
  } = L.Z.useExperiment({
location: 'EmojiPicker'
  }, {
autoTrackExposure: !0,
disable: !Y
  });
  return u.useMemo(() => {
let e = [],
  u = [],
  E = [],
  h = [],
  p = 0,
  m = 0;
if (null != g && null != s) {
  let T = Math.floor(s / (l + 2 * o)),
    g = (a, s) => {
      let o = new Map(),
        c = n.has(s.sectionId),
        [_, f] = d().partition(a, e => {
          let n = C.ZP.isEmojiDisabled({
            emoji: e,
            channel: t,
            intention: i
          });
          return o.set(e, n), !n;
        }),
        I = _.concat(f),
        g = s.guild,
        S = v.Z.getGuildId(),
        A = s.sectionId === U.En.TOP_GUILD_EMOJI,
        N = !A && null != g && S === g.id && I.length < g.getMaxEmojiSlots(),
        O = A && I.length < T && !Q,
        R = null != g && A && Q && X === L.B.WITH_TOP_LIST && q[g.id].length < g.getMaxEmojiSlots(),
        y = r && Y && null != g && (N || O || R),
        M = I.length >= 3 * T && !W && s.type === U.En.GUILD && null != g && S !== g.id,
        {
          enabled: P
        } = D.Z.getCurrentConfig({
          location: 'useEmojiGrid'
        }, {
          autoTrackExposure: M,
          disable: !M
        });
      y && R && I.length === T && I.shift(), P && I.splice(3 * T);
      let w = Q && y && !c,
        G = Math.ceil((y ? I.length + 1 : I.length) / T),
        k = [];
      for (let e = 0; e < G; e++) {
        let t = 0 === e,
          n = e * T - (w && e > 0 ? 1 : 0),
          r = n + T - (w && t ? 1 : 0),
          i = I.slice(n, r).map((e, n) => {
            var r, i;
            return {
              type: 0,
              emoji: e,
              size: l,
              isDisabled: o.get(e),
              rowIndex: m,
              columnIndex: w && t ? n + 1 : n,
              visibleRowIndex: p,
              category: s.type,
              subCategory: s.sectionId === U.En.TOP_GUILD_EMOJI ? (0, b.IP)(V, H, null !== (i = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== i ? i : e.name) : U.t0.NONE
            };
          });
        if (w && t && !c && (i = [{
              type: 1,
              guildId: g.id,
              name: x.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
              size: l,
              rowIndex: m,
              columnIndex: 0,
              visibleRowIndex: p
            },
            ...i
          ]), k.push(i), !c) {
          if (!Q && y && e === G - 1) {
            let t = k[e];
            t.push({
              type: 1,
              guildId: g.id,
              name: x.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
              size: l,
              rowIndex: e,
              columnIndex: t.length,
              visibleRowIndex: p
            });
          }
          if (P && e === G - 1 && null != g) {
            let t = k[e];
            t[T - 1] = {
              type: 2,
              guildId: g.id,
              name: x.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION,
              size: l,
              rowIndex: e,
              columnIndex: t.length,
              visibleRowIndex: p
            };
          }
          h.push(i.length), E.push(i), p++;
        }
        m++;
      }
      let B = {
        ...s,
        count: a.length
      };
      u.push(B), e.push(c ? 0 : G);
    };
  if (null != a)
    0 !== a.unlocked.length && g(a.unlocked, {
      type: U.En.SEARCH_RESULTS,
      sectionId: U.En.SEARCH_RESULTS,
      count: a.unlocked.length,
      isNitroLocked: !1
    }), 0 !== a.locked.length && g(a.locked, {
      type: U.En.PREMIUM_UPSELL,
      categoryId: U.UX.PREMIUM_UPSELL,
      sectionId: U.En.PREMIUM_UPSELL,
      count: a.locked.length,
      isNitroLocked: !W
    });
  else
    for (let e of c)
      if (e === U.UX.CUSTOM) {
        let n = n => {
          let r = q[n];
          if (null == r)
            return;
          let a = r.filter(e => C.ZP.getEmojiUnavailableReason({
            emoji: e,
            channel: null != t ? t : A.ZP.getDefaultChannel(n),
            intention: i
          }) !== w.Z5.DISALLOW_EXTERNAL);
          if (0 === a.length)
            return;
          let s = N.Z.getGuild(n),
            o = !W && C.ZP.isEmojiCategoryNitroLocked({
              categoryEmojis: a,
              channel: t,
              intention: i
            });
          g(a, {
            categoryId: e,
            guild: s,
            type: U.En.GUILD,
            sectionId: null != s ? s.id : (0, _.Z)(),
            count: a.length,
            isNitroLocked: o
          });
        };
        if (null != f && n(f.id), (0, w.Gt)(i))
          for (let e of Z)
            (null == f || f.id !== e) && n(e);
      } else if (e === U.UX.TOP_GUILD_EMOJI) {
    if (null != f) {
      let {
        allEmojis: t
      } = (0, M.J)({
        topEmojis: V,
        newlyAddedEmojis: H
      });
      t.length > 0 && g(t, {
        categoryId: e,
        guild: N.Z.getGuild(f.id),
        type: U.En.TOP_GUILD_EMOJI,
        sectionId: U.En.TOP_GUILD_EMOJI,
        count: t.length,
        isNitroLocked: !1
      });
    }
  } else if (e === U.UX.RECENT) {
    let n = (i === w.Hz.REACTION && F ? B : k).filter(e => !C.ZP.isEmojiFiltered({
      emoji: e,
      channel: t,
      intention: i
    }));
    g(n, {
      categoryId: e,
      type: U.En.RECENT,
      sectionId: U.En.RECENT,
      count: n.length,
      isNitroLocked: !1
    });
  } else if (e === U.UX.FAVORITES) {
    let n = G.filter(e => !C.ZP.isEmojiFiltered({
      emoji: e,
      channel: t,
      intention: i
    }));
    0 !== n.length && g(n, {
      categoryId: e,
      type: U.En.FAVORITES,
      sectionId: U.En.FAVORITES,
      count: n.length,
      isNitroLocked: !1
    });
  } else {
    let t = I.ZP.getByCategory(e);
    null != t && g(t, {
      categoryId: e,
      type: U.En.UNICODE,
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
s,
l,
o,
a,
n,
Q,
X,
q,
r,
Y,
t,
i,
V,
H,
W,
c,
f,
Z,
F,
B,
k,
G
  ]);
};
(l = a || (a = {}))[l.PREMIUM = 0] = 'PREMIUM', l[l.ROLE_SUBSCRIPTION = 1] = 'ROLE_SUBSCRIPTION';
let k = e => {
let {
  pickerIntention: t,
  selectedChannel: n,
  onSelectEmoji: r,
  setUpsellConfigs: i,
  emojiSelectAnalytics: a,
  trackEmojiFavorited: s
} = e, o = (0, E.e7)([h.Z], () => h.Z.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId()), [n]);
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
        o.isFavoriteEmojiWithoutFetchingLatest(u) || null != c ? (0, f.Xe)(u) : (null == s || s(e), (0, f.$K)(u));
        return;
      }
      if (c === w.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE)
        return;
      if (c === w.Z5.PREMIUM_LOCKED) {
        i({
          type: 0,
          emojiDescriptor: e
        });
        return;
      }
      if (c === w.Z5.ROLE_SUBSCRIPTION_LOCKED && u.type === p.B.GUILD) {
        i({
          type: 1,
          guildId: u.guildId,
          emojiId: u.id
        });
        return;
      }
      if (c === w.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE)
        return;
      null == a || a(e), r(u, l.isFinalSelection, l.isBurst);
    }
  }
}, [
  n,
  t,
  r,
  i,
  o,
  a,
  s
]);
  },
  B = e => {
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