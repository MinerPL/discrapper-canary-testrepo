n.d(t, {
  EO: function() {
return r;
  },
  JM: function() {
return h;
  },
  Lt: function() {
return m;
  },
  ND: function() {
return S;
  },
  PL: function() {
return N;
  },
  UY: function() {
return w;
  },
  YI: function() {
return O;
  },
  _F: function() {
return C;
  },
  h_: function() {
return D;
  },
  ji: function() {
return d;
  },
  lG: function() {
return G;
  },
  ls: function() {
return T;
  },
  pL: function() {
return P;
  },
  wK: function() {
return E;
  }
}), n(47120), n(411104), n(653041);
var r, i, a = n(230367),
  o = n(320215),
  s = n(240773),
  l = n(495852),
  u = n(397696);
(i = r || (r = {}))[i.NONE = 0] = 'NONE', i[i.IMAGE = 1] = 'IMAGE', i[i.VIDEO = 2] = 'VIDEO';
class c extends l.C {
  create(e) {
let t = {};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.versions = u.L.internalBinaryRead(e, e.uint32(), n, i.versions);
      break;
    case 2:
      i.favoriteGifs = E.internalBinaryRead(e, e.uint32(), n, i.favoriteGifs);
      break;
    case 3:
      i.favoriteStickers = m.internalBinaryRead(e, e.uint32(), n, i.favoriteStickers);
      break;
    case 4:
      i.stickerFrecency = T.internalBinaryRead(e, e.uint32(), n, i.stickerFrecency);
      break;
    case 5:
      i.favoriteEmojis = S.internalBinaryRead(e, e.uint32(), n, i.favoriteEmojis);
      break;
    case 6:
      i.emojiFrecency = N.internalBinaryRead(e, e.uint32(), n, i.emojiFrecency);
      break;
    case 7:
      i.applicationCommandFrecency = O.internalBinaryRead(e, e.uint32(), n, i.applicationCommandFrecency);
      break;
    case 8:
      i.favoriteSoundboardSounds = D.internalBinaryRead(e, e.uint32(), n, i.favoriteSoundboardSounds);
      break;
    case 9:
      i.applicationFrecency = w.internalBinaryRead(e, e.uint32(), n, i.applicationFrecency);
      break;
    case 10:
      i.heardSoundFrecency = b.internalBinaryRead(e, e.uint32(), n, i.heardSoundFrecency);
      break;
    case 11:
      i.playedSoundFrecency = P.internalBinaryRead(e, e.uint32(), n, i.playedSoundFrecency);
      break;
    case 12:
      i.guildAndChannelFrecency = G.internalBinaryRead(e, e.uint32(), n, i.guildAndChannelFrecency);
      break;
    case 13:
      i.emojiReactionFrecency = N.internalBinaryRead(e, e.uint32(), n, i.emojiReactionFrecency);
      break;
    default:
      let o = n.readUnknownField;
      if ('throw' === o)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
e.versions && u.L.internalBinaryWrite(e.versions, t.tag(1, a.TD.LengthDelimited).fork(), n).join(), e.favoriteGifs && E.internalBinaryWrite(e.favoriteGifs, t.tag(2, a.TD.LengthDelimited).fork(), n).join(), e.favoriteStickers && m.internalBinaryWrite(e.favoriteStickers, t.tag(3, a.TD.LengthDelimited).fork(), n).join(), e.stickerFrecency && T.internalBinaryWrite(e.stickerFrecency, t.tag(4, a.TD.LengthDelimited).fork(), n).join(), e.favoriteEmojis && S.internalBinaryWrite(e.favoriteEmojis, t.tag(5, a.TD.LengthDelimited).fork(), n).join(), e.emojiFrecency && N.internalBinaryWrite(e.emojiFrecency, t.tag(6, a.TD.LengthDelimited).fork(), n).join(), e.applicationCommandFrecency && O.internalBinaryWrite(e.applicationCommandFrecency, t.tag(7, a.TD.LengthDelimited).fork(), n).join(), e.favoriteSoundboardSounds && D.internalBinaryWrite(e.favoriteSoundboardSounds, t.tag(8, a.TD.LengthDelimited).fork(), n).join(), e.applicationFrecency && w.internalBinaryWrite(e.applicationFrecency, t.tag(9, a.TD.LengthDelimited).fork(), n).join(), e.heardSoundFrecency && b.internalBinaryWrite(e.heardSoundFrecency, t.tag(10, a.TD.LengthDelimited).fork(), n).join(), e.playedSoundFrecency && P.internalBinaryWrite(e.playedSoundFrecency, t.tag(11, a.TD.LengthDelimited).fork(), n).join(), e.guildAndChannelFrecency && G.internalBinaryWrite(e.guildAndChannelFrecency, t.tag(12, a.TD.LengthDelimited).fork(), n).join(), e.emojiReactionFrecency && N.internalBinaryWrite(e.emojiReactionFrecency, t.tag(13, a.TD.LengthDelimited).fork(), n).join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.FrecencyUserSettings', [{
    no: 1,
    name: 'versions',
    kind: 'message',
    T: () => u.L
  },
  {
    no: 2,
    name: 'favorite_gifs',
    kind: 'message',
    T: () => E
  },
  {
    no: 3,
    name: 'favorite_stickers',
    kind: 'message',
    T: () => m
  },
  {
    no: 4,
    name: 'sticker_frecency',
    kind: 'message',
    T: () => T
  },
  {
    no: 5,
    name: 'favorite_emojis',
    kind: 'message',
    T: () => S
  },
  {
    no: 6,
    name: 'emoji_frecency',
    kind: 'message',
    T: () => N
  },
  {
    no: 7,
    name: 'application_command_frecency',
    kind: 'message',
    T: () => O
  },
  {
    no: 8,
    name: 'favorite_soundboard_sounds',
    kind: 'message',
    T: () => D
  },
  {
    no: 9,
    name: 'application_frecency',
    kind: 'message',
    T: () => w
  },
  {
    no: 10,
    name: 'heard_sound_frecency',
    kind: 'message',
    T: () => b
  },
  {
    no: 11,
    name: 'played_sound_frecency',
    kind: 'message',
    T: () => P
  },
  {
    no: 12,
    name: 'guild_and_channel_frecency',
    kind: 'message',
    T: () => G
  },
  {
    no: 13,
    name: 'emoji_reaction_frecency',
    kind: 'message',
    T: () => N
  }
]);
  }
}
let d = new c();
class _ extends l.C {
  create(e) {
let t = {
  gifs: {},
  hideTooltip: !1
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      this.binaryReadMap1(i.gifs, e, n);
      break;
    case 2:
      i.hideTooltip = e.bool();
      break;
    default:
      let o = n.readUnknownField;
      if ('throw' === o)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  binaryReadMap1(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, o;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.string();
      break;
    case 2:
      o = h.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs');
  }
}
e[null != a ? a : ''] = null != o ? o : h.create();
  }
  internalBinaryWrite(e, t, n) {
for (let r of Object.keys(e.gifs))
  t.tag(1, a.TD.LengthDelimited).fork().tag(1, a.TD.LengthDelimited).string(r), t.tag(2, a.TD.LengthDelimited).fork(), h.internalBinaryWrite(e.gifs[r], t, n), t.join().join();
!1 !== e.hideTooltip && t.tag(2, a.TD.Varint).bool(e.hideTooltip);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.FavoriteGIFs', [{
    no: 1,
    name: 'gifs',
    kind: 'map',
    K: 9,
    V: {
      kind: 'message',
      T: () => h
    }
  },
  {
    no: 2,
    name: 'hide_tooltip',
    kind: 'scalar',
    T: 8
  }
]);
  }
}
let E = new _();
class f extends l.C {
  create(e) {
let t = {
  format: 0,
  src: '',
  width: 0,
  height: 0,
  order: 0
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.format = e.int32();
      break;
    case 2:
      i.src = e.string();
      break;
    case 3:
      i.width = e.uint32();
      break;
    case 4:
      i.height = e.uint32();
      break;
    case 5:
      i.order = e.uint32();
      break;
    default:
      let o = n.readUnknownField;
      if ('throw' === o)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
0 !== e.format && t.tag(1, a.TD.Varint).int32(e.format), '' !== e.src && t.tag(2, a.TD.LengthDelimited).string(e.src), 0 !== e.width && t.tag(3, a.TD.Varint).uint32(e.width), 0 !== e.height && t.tag(4, a.TD.Varint).uint32(e.height), 0 !== e.order && t.tag(5, a.TD.Varint).uint32(e.order);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.FavoriteGIF', [{
    no: 1,
    name: 'format',
    kind: 'enum',
    T: () => [
      'discord_protos.discord_users.v1.GIFType',
      r
    ]
  },
  {
    no: 2,
    name: 'src',
    kind: 'scalar',
    T: 9
  },
  {
    no: 3,
    name: 'width',
    kind: 'scalar',
    T: 13
  },
  {
    no: 4,
    name: 'height',
    kind: 'scalar',
    T: 13
  },
  {
    no: 5,
    name: 'order',
    kind: 'scalar',
    T: 13
  }
]);
  }
}
let h = new f();
class p extends l.C {
  create(e) {
let t = {
  stickerIds: []
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  if (1 === t) {
    if (r === a.TD.LengthDelimited)
      for (let t = e.int32() + e.pos; e.pos < t;)
        i.stickerIds.push(e.fixed64().toString());
    else
      i.stickerIds.push(e.fixed64().toString());
  } else {
    let o = n.readUnknownField;
    if ('throw' === o)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
if (e.stickerIds.length) {
  t.tag(1, a.TD.LengthDelimited).fork();
  for (let n = 0; n < e.stickerIds.length; n++)
    t.fixed64(e.stickerIds[n]);
  t.join();
}
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.FavoriteStickers', [{
  no: 1,
  name: 'sticker_ids',
  kind: 'scalar',
  repeat: 1,
  T: 6
}]);
  }
}
let m = new p();
class I extends l.C {
  create(e) {
let t = {
  stickers: {}
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  if (1 === t)
    this.binaryReadMap1(i.stickers, e, n);
  else {
    let o = n.readUnknownField;
    if ('throw' === o)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  binaryReadMap1(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, o;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.fixed64().toString();
      break;
    case 2:
      o = C.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers');
  }
}
e[null != a ? a : '0'] = null != o ? o : C.create();
  }
  internalBinaryWrite(e, t, n) {
for (let r of Object.keys(e.stickers))
  t.tag(1, a.TD.LengthDelimited).fork().tag(1, a.TD.Bit64).fixed64(r), t.tag(2, a.TD.LengthDelimited).fork(), C.internalBinaryWrite(e.stickers[r], t, n), t.join().join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.StickerFrecency', [{
  no: 1,
  name: 'stickers',
  kind: 'map',
  K: 6,
  V: {
    kind: 'message',
    T: () => C
  }
}]);
  }
}
let T = new I();
class g extends l.C {
  create(e) {
let t = {
  emojis: []
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  if (1 === t)
    i.emojis.push(e.string());
  else {
    let o = n.readUnknownField;
    if ('throw' === o)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
for (let n = 0; n < e.emojis.length; n++)
  t.tag(1, a.TD.LengthDelimited).string(e.emojis[n]);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.FavoriteEmojis', [{
  no: 1,
  name: 'emojis',
  kind: 'scalar',
  repeat: 2,
  T: 9
}]);
  }
}
let S = new g();
class A extends l.C {
  create(e) {
let t = {
  emojis: {}
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  if (1 === t)
    this.binaryReadMap1(i.emojis, e, n);
  else {
    let o = n.readUnknownField;
    if ('throw' === o)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  binaryReadMap1(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, o;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.string();
      break;
    case 2:
      o = C.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis');
  }
}
e[null != a ? a : ''] = null != o ? o : C.create();
  }
  internalBinaryWrite(e, t, n) {
for (let r of Object.keys(e.emojis))
  t.tag(1, a.TD.LengthDelimited).fork().tag(1, a.TD.LengthDelimited).string(r), t.tag(2, a.TD.LengthDelimited).fork(), C.internalBinaryWrite(e.emojis[r], t, n), t.join().join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.EmojiFrecency', [{
  no: 1,
  name: 'emojis',
  kind: 'map',
  K: 9,
  V: {
    kind: 'message',
    T: () => C
  }
}]);
  }
}
let N = new A();
class v extends l.C {
  create(e) {
let t = {
  applicationCommands: {}
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  if (1 === t)
    this.binaryReadMap1(i.applicationCommands, e, n);
  else {
    let o = n.readUnknownField;
    if ('throw' === o)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  binaryReadMap1(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, o;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.string();
      break;
    case 2:
      o = C.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands');
  }
}
e[null != a ? a : ''] = null != o ? o : C.create();
  }
  internalBinaryWrite(e, t, n) {
for (let r of Object.keys(e.applicationCommands))
  t.tag(1, a.TD.LengthDelimited).fork().tag(1, a.TD.LengthDelimited).string(r), t.tag(2, a.TD.LengthDelimited).fork(), C.internalBinaryWrite(e.applicationCommands[r], t, n), t.join().join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.ApplicationCommandFrecency', [{
  no: 1,
  name: 'application_commands',
  kind: 'map',
  K: 9,
  V: {
    kind: 'message',
    T: () => C
  }
}]);
  }
}
let O = new v();
class R extends l.C {
  create(e) {
let t = {
  totalUses: 0,
  recentUses: [],
  frecency: 0,
  score: 0
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  switch (t) {
    case 1:
      i.totalUses = e.uint32();
      break;
    case 2:
      if (r === a.TD.LengthDelimited)
        for (let t = e.int32() + e.pos; e.pos < t;)
          i.recentUses.push(e.uint64().toString());
      else
        i.recentUses.push(e.uint64().toString());
      break;
    case 3:
      i.frecency = e.int32();
      break;
    case 4:
      i.score = e.int32();
      break;
    default:
      let o = n.readUnknownField;
      if ('throw' === o)
        throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
      let s = e.skip(r);
      !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
if (0 !== e.totalUses && t.tag(1, a.TD.Varint).uint32(e.totalUses), e.recentUses.length) {
  t.tag(2, a.TD.LengthDelimited).fork();
  for (let n = 0; n < e.recentUses.length; n++)
    t.uint64(e.recentUses[n]);
  t.join();
}
0 !== e.frecency && t.tag(3, a.TD.Varint).int32(e.frecency), 0 !== e.score && t.tag(4, a.TD.Varint).int32(e.score);
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.FrecencyItem', [{
    no: 1,
    name: 'total_uses',
    kind: 'scalar',
    T: 13
  },
  {
    no: 2,
    name: 'recent_uses',
    kind: 'scalar',
    repeat: 1,
    T: 4
  },
  {
    no: 3,
    name: 'frecency',
    kind: 'scalar',
    T: 5
  },
  {
    no: 4,
    name: 'score',
    kind: 'scalar',
    T: 5
  }
]);
  }
}
let C = new R();
class y extends l.C {
  create(e) {
let t = {
  soundIds: []
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  if (1 === t) {
    if (r === a.TD.LengthDelimited)
      for (let t = e.int32() + e.pos; e.pos < t;)
        i.soundIds.push(e.fixed64().toString());
    else
      i.soundIds.push(e.fixed64().toString());
  } else {
    let o = n.readUnknownField;
    if ('throw' === o)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  internalBinaryWrite(e, t, n) {
if (e.soundIds.length) {
  t.tag(1, a.TD.LengthDelimited).fork();
  for (let n = 0; n < e.soundIds.length; n++)
    t.fixed64(e.soundIds[n]);
  t.join();
}
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.FavoriteSoundboardSounds', [{
  no: 1,
  name: 'sound_ids',
  kind: 'scalar',
  repeat: 1,
  T: 6
}]);
  }
}
let D = new y();
class L extends l.C {
  create(e) {
let t = {
  heardSounds: {}
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  if (1 === t)
    this.binaryReadMap1(i.heardSounds, e, n);
  else {
    let o = n.readUnknownField;
    if ('throw' === o)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  binaryReadMap1(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, o;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.string();
      break;
    case 2:
      o = C.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds');
  }
}
e[null != a ? a : ''] = null != o ? o : C.create();
  }
  internalBinaryWrite(e, t, n) {
for (let r of Object.keys(e.heardSounds))
  t.tag(1, a.TD.LengthDelimited).fork().tag(1, a.TD.LengthDelimited).string(r), t.tag(2, a.TD.LengthDelimited).fork(), C.internalBinaryWrite(e.heardSounds[r], t, n), t.join().join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.HeardSoundFrecency', [{
  no: 1,
  name: 'heard_sounds',
  kind: 'map',
  K: 9,
  V: {
    kind: 'message',
    T: () => C
  }
}]);
  }
}
let b = new L();
class M extends l.C {
  create(e) {
let t = {
  playedSounds: {}
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  if (1 === t)
    this.binaryReadMap1(i.playedSounds, e, n);
  else {
    let o = n.readUnknownField;
    if ('throw' === o)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  binaryReadMap1(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, o;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.string();
      break;
    case 2:
      o = C.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds');
  }
}
e[null != a ? a : ''] = null != o ? o : C.create();
  }
  internalBinaryWrite(e, t, n) {
for (let r of Object.keys(e.playedSounds))
  t.tag(1, a.TD.LengthDelimited).fork().tag(1, a.TD.LengthDelimited).string(r), t.tag(2, a.TD.LengthDelimited).fork(), C.internalBinaryWrite(e.playedSounds[r], t, n), t.join().join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.PlayedSoundFrecency', [{
  no: 1,
  name: 'played_sounds',
  kind: 'map',
  K: 9,
  V: {
    kind: 'message',
    T: () => C
  }
}]);
  }
}
let P = new M();
class U extends l.C {
  create(e) {
let t = {
  applications: {}
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  if (1 === t)
    this.binaryReadMap1(i.applications, e, n);
  else {
    let o = n.readUnknownField;
    if ('throw' === o)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  binaryReadMap1(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, o;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.string();
      break;
    case 2:
      o = C.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications');
  }
}
e[null != a ? a : ''] = null != o ? o : C.create();
  }
  internalBinaryWrite(e, t, n) {
for (let r of Object.keys(e.applications))
  t.tag(1, a.TD.LengthDelimited).fork().tag(1, a.TD.LengthDelimited).string(r), t.tag(2, a.TD.LengthDelimited).fork(), C.internalBinaryWrite(e.applications[r], t, n), t.join().join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.ApplicationFrecency', [{
  no: 1,
  name: 'applications',
  kind: 'map',
  K: 9,
  V: {
    kind: 'message',
    T: () => C
  }
}]);
  }
}
let w = new U();
class x extends l.C {
  create(e) {
let t = {
  guildAndChannels: {}
};
return globalThis.Object.defineProperty(t, s.C, {
  enumerable: !1,
  value: this
}), void 0 !== e && (0, o.l)(this, t, e), t;
  }
  internalBinaryRead(e, t, n, r) {
let i = null != r ? r : this.create(),
  o = e.pos + t;
for (; e.pos < o;) {
  let [t, r] = e.tag();
  if (1 === t)
    this.binaryReadMap1(i.guildAndChannels, e, n);
  else {
    let o = n.readUnknownField;
    if ('throw' === o)
      throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
    let s = e.skip(r);
    !1 !== o && (!0 === o ? a.z.onRead : o)(this.typeName, i, t, r, s);
  }
}
return i;
  }
  binaryReadMap1(e, t, n) {
let r = t.uint32(),
  i = t.pos + r,
  a, o;
for (; t.pos < i;) {
  let [e, r] = t.tag();
  switch (e) {
    case 1:
      a = t.fixed64().toString();
      break;
    case 2:
      o = C.internalBinaryRead(t, t.uint32(), n);
      break;
    default:
      throw new globalThis.Error('unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels');
  }
}
e[null != a ? a : '0'] = null != o ? o : C.create();
  }
  internalBinaryWrite(e, t, n) {
for (let r of Object.keys(e.guildAndChannels))
  t.tag(1, a.TD.LengthDelimited).fork().tag(1, a.TD.Bit64).fixed64(r), t.tag(2, a.TD.LengthDelimited).fork(), C.internalBinaryWrite(e.guildAndChannels[r], t, n), t.join().join();
let r = n.writeUnknownFields;
return !1 !== r && (!0 == r ? a.z.onWrite : r)(this.typeName, e, t), t;
  }
  constructor() {
super('discord_protos.discord_users.v1.GuildAndChannelFrecency', [{
  no: 1,
  name: 'guild_and_channels',
  kind: 'map',
  K: 6,
  V: {
    kind: 'message',
    T: () => C
  }
}]);
  }
}
let G = new x();