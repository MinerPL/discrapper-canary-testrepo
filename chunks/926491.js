n(47120), n(653041);
var r, i, a, o, s = n(956067),
  l = n(442837),
  u = n(570140),
  c = n(287328),
  d = n(86670),
  _ = n(856472),
  E = n(633302),
  f = n(41776),
  h = n(93093),
  p = n(430824),
  m = n(70956),
  I = n(373228),
  T = n(378233);
let g = 2,
  S = new Map(),
  A = new Map(),
  N = null,
  v = [],
  O = null,
  R = !1,
  C = new Map(),
  y = (e, t) => {
C = new Map(C.set(e, t));
  },
  D = m.Z.Millis.HOUR,
  L = async () => {
if (0 !== g)
  return;
let e = c.Z.database();
if (null == e)
  return;
g = 2;
let t = await (0, d.gs)('StickerStore.loadSavedGuildStickers', () => s.Z.timeAsync('\uD83D\uDCBE', 'loadSavedGuildStickers', () => _.Z.getAsync(e)));
if (null != t)
  u.Z.dispatch({
    type: 'CACHED_STICKERS_LOADED',
    stickers: t
  });
  }, b = function(e) {
let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
A.set(e.id, e), t && M(e, n);
  }, M = function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
if (null == N)
  return;
let {
  tags: n
} = e, r = {
  type: I.MO.STICKER_NAME,
  value: e.name.trim().toLocaleLowerCase()
};
if ((0, T.jl)(e)) {
  let t = v.find(t => t.id === e.pack_id),
    i = [
      r,
      ...(null != n ? n : '').split(',').map(e => ({
        type: I.MO.TAG,
        value: e.trim().toLocaleLowerCase()
      }))
    ];
  null != t && i.push({
    type: I.MO.PACK_NAME,
    value: t.name
  }), N.set(e.id, i);
} else if ((0, T.J8)(e) && null != n) {
  let i = E.ZP.getByName(n),
    a = [
      r,
      {
        type: I.MO.TAG,
        value: n.trim().toLocaleLowerCase()
      }
    ];
  if (null != t) {
    let e = t.name.trim().toLocaleLowerCase();
    null != e && '' !== e && a.push({
      type: I.MO.GUILD_NAME,
      value: e
    });
  }
  if (null == i) {
    N.set(e.id, a);
    return;
  }
  a.push({
    type: I.MO.CORRELATED_EMOJI,
    value: i.surrogates
  }), i.forEachDiversity(e => a.push({
    type: I.MO.CORRELATED_EMOJI,
    value: e.surrogates
  })), N.set(e.id, a);
}
  }, P = (e, t, n) => {
S.set(e.id, e);
let r = [...v];
if (t) {
  let t = r.findIndex(t => t.id === e.id); -
  1 !== t ? r[t] = e : r.push(e), v = r;
}
(t || n) && e.stickers.forEach(e => b(e));
  }, U = () => {
C.forEach((e, t) => {
  let n = p.Z.getGuild(t);
  null != n && e.forEach(e => M(e, n));
}), v.forEach(e => {
  e.stickers.forEach(e => M(e));
});
  };

function w(e) {
  let t = p.Z.getGuild(e.id);
  null != t && null != e.stickers && (e.stickers.forEach(e => b(e, !0, t)), y(t.id, e.stickers));
}
class x extends(r = l.ZP.Store) {
  initialize() {
this.waitFor(c.Z, h.Z, p.Z);
  }
  get isLoaded() {
return 0 !== g;
  }
  get loadState() {
return g;
  }
  get stickerMetadata() {
return L(), null == N && (N = new Map(), U()), N;
  }
  get hasLoadedStickerPacks() {
return null != O && O + D > Date.now();
  }
  get isFetchingStickerPacks() {
return R;
  }
  getStickerById(e) {
return !A.has(e) && L(), A.get(e);
  }
  getStickerPack(e) {
return S.get(e);
  }
  getPremiumPacks() {
return v;
  }
  isPremiumPack(e) {
return v.some(t => t.id === e);
  }
  getRawStickersByGuild() {
return C;
  }
  getAllStickersIterator() {
return L(), A.values();
  }
  getAllGuildStickers() {
return L(), C;
  }
  getStickersByGuildId(e) {
return L(), C.get(e);
  }
}
o = 'StickersStore', (a = 'displayName') in(i = x) ? Object.defineProperty(i, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = o, t.Z = new x(u.Z, {
  BACKGROUND_SYNC: () => {
N = null, A = new Map(), C = new Map(), g = 0;
  },
  CONNECTION_OPEN: e => {
let {
  guilds: t
} = e;
N = null, A = new Map(), C = new Map(), t.forEach(w), g = t.every(e => null != e.stickers) ? 1 : 0;
  },
  GUILD_CREATE: function(e) {
let {
  guild: t
} = e;
if (!f.Z.isLurking(t.id))
  w(t), 1 === g && null == t.stickers && null != t.stickerUpdates && (g = 0);
  },
  GUILD_DELETE: function(e) {
var t;
let {
  guild: n
} = e;
(null !== (t = C.get(n.id)) && void 0 !== t ? t : []).forEach(e => {
  null != N && N.delete(e.id), A.delete(e.id);
}), C.delete(n.id), C = new Map(C);
  },
  LOGOUT: () => {
g = 0, v = [], A.clear(), S.clear(), N = null, C.clear(), C = new Map(C), R = !1, O = null;
  },
  STICKER_PACKS_FETCH_START: () => {
R = !0;
  },
  STICKER_PACKS_FETCH_SUCCESS: e => {
let {
  packs: t
} = e;
t.forEach(e => P(e, !0)), O = Date.now(), R = !1;
  },
  STICKER_PACK_FETCH_SUCCESS: e => {
let {
  pack: t,
  ingestStickers: n
} = e;
P(t, !1, n);
  },
  GUILD_STICKERS_FETCH_SUCCESS: e => {
let {
  guildId: t,
  stickers: n
} = e;
n.forEach(e => b(e)), y(t, n);
  },
  GUILD_STICKERS_CREATE_SUCCESS: e => {
var t, n;
let {
  guildId: r,
  sticker: i
} = e, a = null !== (t = C.get(r)) && void 0 !== t ? t : [];
y(r, [
  ...null !== (n = a.filter(e => e.id !== i.id)) && void 0 !== n ? n : [],
  i
]), b(i);
  },
  STICKER_FETCH_SUCCESS: e => {
let {
  sticker: t
} = e;
b(t, !1);
  },
  GUILD_STICKERS_UPDATE: e => {
var t;
let {
  guildId: n,
  stickers: r
} = e, i = e => {
  let t;
  let n = A.get(e.id);
  return null != n && (0, T.J8)(n) && (t = null != n.user ? n.user : void 0), {
    ...e,
    user: t
  };
};
(null !== (t = C.get(n)) && void 0 !== t ? t : []).filter(e => null == r.find(t => t.id === e.id)).forEach(e => {
  A.delete(e.id), null != N && N.delete(e.id);
});
let a = r.map(e => i(e));
a.forEach(e => b(e)), y(n, a);
  },
  CACHED_STICKERS_LOADED: function(e) {
let {
  stickers: t
} = e;
for (let [e, n] of t)
  if (h.Z.isMember(e) && !C.has(e)) {
    let t = p.Z.getGuild(e);
    for (let e of n)
      b(e, !0, t);
    y(e, n);
  }
  }
});