"use strict";
n.d(t, {
  EO: function() {
    return i
  },
  JM: function() {
    return T
  },
  Lt: function() {
    return S
  },
  ND: function() {
    return m
  },
  PL: function() {
    return R
  },
  UY: function() {
    return G
  },
  YI: function() {
    return p
  },
  _F: function() {
    return L
  },
  h_: function() {
    return D
  },
  ji: function() {
    return d
  },
  lG: function() {
    return k
  },
  ls: function() {
    return N
  },
  pL: function() {
    return U
  },
  wK: function() {
    return E
  }
}), n(47120), n(411104), n(653041);
var i, r, s = n(230367),
  o = n(320215),
  a = n(240773),
  l = n(495852),
  u = n(397696);
(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.IMAGE = 1] = "IMAGE", r[r.VIDEO = 2] = "VIDEO";
class _ extends l.C {
  create(e) {
    let t = {};
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.versions = u.L.internalBinaryRead(e, e.uint32(), n, r.versions);
          break;
        case 2:
          r.favoriteGifs = E.internalBinaryRead(e, e.uint32(), n, r.favoriteGifs);
          break;
        case 3:
          r.favoriteStickers = S.internalBinaryRead(e, e.uint32(), n, r.favoriteStickers);
          break;
        case 4:
          r.stickerFrecency = N.internalBinaryRead(e, e.uint32(), n, r.stickerFrecency);
          break;
        case 5:
          r.favoriteEmojis = m.internalBinaryRead(e, e.uint32(), n, r.favoriteEmojis);
          break;
        case 6:
          r.emojiFrecency = R.internalBinaryRead(e, e.uint32(), n, r.emojiFrecency);
          break;
        case 7:
          r.applicationCommandFrecency = p.internalBinaryRead(e, e.uint32(), n, r.applicationCommandFrecency);
          break;
        case 8:
          r.favoriteSoundboardSounds = D.internalBinaryRead(e, e.uint32(), n, r.favoriteSoundboardSounds);
          break;
        case 9:
          r.applicationFrecency = G.internalBinaryRead(e, e.uint32(), n, r.applicationFrecency);
          break;
        case 10:
          r.heardSoundFrecency = P.internalBinaryRead(e, e.uint32(), n, r.heardSoundFrecency);
          break;
        case 11:
          r.playedSoundFrecency = U.internalBinaryRead(e, e.uint32(), n, r.playedSoundFrecency);
          break;
        case 12:
          r.guildAndChannelFrecency = k.internalBinaryRead(e, e.uint32(), n, r.guildAndChannelFrecency);
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    e.versions && u.L.internalBinaryWrite(e.versions, t.tag(1, s.TD.LengthDelimited).fork(), n).join(), e.favoriteGifs && E.internalBinaryWrite(e.favoriteGifs, t.tag(2, s.TD.LengthDelimited).fork(), n).join(), e.favoriteStickers && S.internalBinaryWrite(e.favoriteStickers, t.tag(3, s.TD.LengthDelimited).fork(), n).join(), e.stickerFrecency && N.internalBinaryWrite(e.stickerFrecency, t.tag(4, s.TD.LengthDelimited).fork(), n).join(), e.favoriteEmojis && m.internalBinaryWrite(e.favoriteEmojis, t.tag(5, s.TD.LengthDelimited).fork(), n).join(), e.emojiFrecency && R.internalBinaryWrite(e.emojiFrecency, t.tag(6, s.TD.LengthDelimited).fork(), n).join(), e.applicationCommandFrecency && p.internalBinaryWrite(e.applicationCommandFrecency, t.tag(7, s.TD.LengthDelimited).fork(), n).join(), e.favoriteSoundboardSounds && D.internalBinaryWrite(e.favoriteSoundboardSounds, t.tag(8, s.TD.LengthDelimited).fork(), n).join(), e.applicationFrecency && G.internalBinaryWrite(e.applicationFrecency, t.tag(9, s.TD.LengthDelimited).fork(), n).join(), e.heardSoundFrecency && P.internalBinaryWrite(e.heardSoundFrecency, t.tag(10, s.TD.LengthDelimited).fork(), n).join(), e.playedSoundFrecency && U.internalBinaryWrite(e.playedSoundFrecency, t.tag(11, s.TD.LengthDelimited).fork(), n).join(), e.guildAndChannelFrecency && k.internalBinaryWrite(e.guildAndChannelFrecency, t.tag(12, s.TD.LengthDelimited).fork(), n).join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings", [{
      no: 1,
      name: "versions",
      kind: "message",
      T: () => u.L
    }, {
      no: 2,
      name: "favorite_gifs",
      kind: "message",
      T: () => E
    }, {
      no: 3,
      name: "favorite_stickers",
      kind: "message",
      T: () => S
    }, {
      no: 4,
      name: "sticker_frecency",
      kind: "message",
      T: () => N
    }, {
      no: 5,
      name: "favorite_emojis",
      kind: "message",
      T: () => m
    }, {
      no: 6,
      name: "emoji_frecency",
      kind: "message",
      T: () => R
    }, {
      no: 7,
      name: "application_command_frecency",
      kind: "message",
      T: () => p
    }, {
      no: 8,
      name: "favorite_soundboard_sounds",
      kind: "message",
      T: () => D
    }, {
      no: 9,
      name: "application_frecency",
      kind: "message",
      T: () => G
    }, {
      no: 10,
      name: "heard_sound_frecency",
      kind: "message",
      T: () => P
    }, {
      no: 11,
      name: "played_sound_frecency",
      kind: "message",
      T: () => U
    }, {
      no: 12,
      name: "guild_and_channel_frecency",
      kind: "message",
      T: () => k
    }])
  }
}
let d = new _;
class c extends l.C {
  create(e) {
    let t = {
      gifs: {},
      hideTooltip: !1
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          this.binaryReadMap1(r.gifs, e, n);
          break;
        case 2:
          r.hideTooltip = e.bool();
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, o;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.string();
          break;
        case 2:
          o = T.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs")
      }
    }
    e[null != s ? s : ""] = null != o ? o : T.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.gifs)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(i), t.tag(2, s.TD.LengthDelimited).fork(), T.internalBinaryWrite(e.gifs[i], t, n), t.join().join();
    !1 !== e.hideTooltip && t.tag(2, s.TD.Varint).bool(e.hideTooltip);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.FavoriteGIFs", [{
      no: 1,
      name: "gifs",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: () => T
      }
    }, {
      no: 2,
      name: "hide_tooltip",
      kind: "scalar",
      T: 8
    }])
  }
}
let E = new c;
class I extends l.C {
  create(e) {
    let t = {
      format: 0,
      src: "",
      width: 0,
      height: 0,
      order: 0
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.format = e.int32();
          break;
        case 2:
          r.src = e.string();
          break;
        case 3:
          r.width = e.uint32();
          break;
        case 4:
          r.height = e.uint32();
          break;
        case 5:
          r.order = e.uint32();
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    0 !== e.format && t.tag(1, s.TD.Varint).int32(e.format), "" !== e.src && t.tag(2, s.TD.LengthDelimited).string(e.src), 0 !== e.width && t.tag(3, s.TD.Varint).uint32(e.width), 0 !== e.height && t.tag(4, s.TD.Varint).uint32(e.height), 0 !== e.order && t.tag(5, s.TD.Varint).uint32(e.order);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.FavoriteGIF", [{
      no: 1,
      name: "format",
      kind: "enum",
      T: () => ["discord_protos.discord_users.v1.GIFType", i]
    }, {
      no: 2,
      name: "src",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "width",
      kind: "scalar",
      T: 13
    }, {
      no: 4,
      name: "height",
      kind: "scalar",
      T: 13
    }, {
      no: 5,
      name: "order",
      kind: "scalar",
      T: 13
    }])
  }
}
let T = new I;
class h extends l.C {
  create(e) {
    let t = {
      stickerIds: []
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) {
        if (i === s.TD.LengthDelimited)
          for (let t = e.int32() + e.pos; e.pos < t;) r.stickerIds.push(e.fixed64().toString());
        else r.stickerIds.push(e.fixed64().toString())
      } else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    if (e.stickerIds.length) {
      t.tag(1, s.TD.LengthDelimited).fork();
      for (let n = 0; n < e.stickerIds.length; n++) t.fixed64(e.stickerIds[n]);
      t.join()
    }
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.FavoriteStickers", [{
      no: 1,
      name: "sticker_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }])
  }
}
let S = new h;
class f extends l.C {
  create(e) {
    let t = {
      stickers: {}
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) this.binaryReadMap1(r.stickers, e, n);
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, o;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.fixed64().toString();
          break;
        case 2:
          o = L.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers")
      }
    }
    e[null != s ? s : "0"] = null != o ? o : L.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.stickers)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.Bit64).fixed64(i), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.stickers[i], t, n), t.join().join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.StickerFrecency", [{
      no: 1,
      name: "stickers",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => L
      }
    }])
  }
}
let N = new f;
class A extends l.C {
  create(e) {
    let t = {
      emojis: []
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) r.emojis.push(e.string());
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    for (let n = 0; n < e.emojis.length; n++) t.tag(1, s.TD.LengthDelimited).string(e.emojis[n]);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.FavoriteEmojis", [{
      no: 1,
      name: "emojis",
      kind: "scalar",
      repeat: 2,
      T: 9
    }])
  }
}
let m = new A;
class O extends l.C {
  create(e) {
    let t = {
      emojis: {}
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) this.binaryReadMap1(r.emojis, e, n);
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, o;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.string();
          break;
        case 2:
          o = L.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis")
      }
    }
    e[null != s ? s : ""] = null != o ? o : L.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.emojis)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(i), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.emojis[i], t, n), t.join().join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.EmojiFrecency", [{
      no: 1,
      name: "emojis",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: () => L
      }
    }])
  }
}
let R = new O;
class C extends l.C {
  create(e) {
    let t = {
      applicationCommands: {}
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) this.binaryReadMap1(r.applicationCommands, e, n);
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, o;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.string();
          break;
        case 2:
          o = L.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands")
      }
    }
    e[null != s ? s : ""] = null != o ? o : L.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.applicationCommands)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(i), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.applicationCommands[i], t, n), t.join().join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ApplicationCommandFrecency", [{
      no: 1,
      name: "application_commands",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: () => L
      }
    }])
  }
}
let p = new C;
class g extends l.C {
  create(e) {
    let t = {
      totalUses: 0,
      recentUses: [],
      frecency: 0,
      score: 0
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      switch (t) {
        case 1:
          r.totalUses = e.uint32();
          break;
        case 2:
          if (i === s.TD.LengthDelimited)
            for (let t = e.int32() + e.pos; e.pos < t;) r.recentUses.push(e.uint64().toString());
          else r.recentUses.push(e.uint64().toString());
          break;
        case 3:
          r.frecency = e.int32();
          break;
        case 4:
          r.score = e.int32();
          break;
        default:
          let o = n.readUnknownField;
          if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
          let a = e.skip(i);
          !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    if (0 !== e.totalUses && t.tag(1, s.TD.Varint).uint32(e.totalUses), e.recentUses.length) {
      t.tag(2, s.TD.LengthDelimited).fork();
      for (let n = 0; n < e.recentUses.length; n++) t.uint64(e.recentUses[n]);
      t.join()
    }
    0 !== e.frecency && t.tag(3, s.TD.Varint).int32(e.frecency), 0 !== e.score && t.tag(4, s.TD.Varint).int32(e.score);
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyItem", [{
      no: 1,
      name: "total_uses",
      kind: "scalar",
      T: 13
    }, {
      no: 2,
      name: "recent_uses",
      kind: "scalar",
      repeat: 1,
      T: 4
    }, {
      no: 3,
      name: "frecency",
      kind: "scalar",
      T: 5
    }, {
      no: 4,
      name: "score",
      kind: "scalar",
      T: 5
    }])
  }
}
let L = new g;
class v extends l.C {
  create(e) {
    let t = {
      soundIds: []
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) {
        if (i === s.TD.LengthDelimited)
          for (let t = e.int32() + e.pos; e.pos < t;) r.soundIds.push(e.fixed64().toString());
        else r.soundIds.push(e.fixed64().toString())
      } else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  internalBinaryWrite(e, t, n) {
    if (e.soundIds.length) {
      t.tag(1, s.TD.LengthDelimited).fork();
      for (let n = 0; n < e.soundIds.length; n++) t.fixed64(e.soundIds[n]);
      t.join()
    }
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.FavoriteSoundboardSounds", [{
      no: 1,
      name: "sound_ids",
      kind: "scalar",
      repeat: 1,
      T: 6
    }])
  }
}
let D = new v;
class M extends l.C {
  create(e) {
    let t = {
      heardSounds: {}
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) this.binaryReadMap1(r.heardSounds, e, n);
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, o;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.string();
          break;
        case 2:
          o = L.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds")
      }
    }
    e[null != s ? s : ""] = null != o ? o : L.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.heardSounds)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(i), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.heardSounds[i], t, n), t.join().join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.HeardSoundFrecency", [{
      no: 1,
      name: "heard_sounds",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: () => L
      }
    }])
  }
}
let P = new M;
class y extends l.C {
  create(e) {
    let t = {
      playedSounds: {}
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) this.binaryReadMap1(r.playedSounds, e, n);
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, o;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.string();
          break;
        case 2:
          o = L.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds")
      }
    }
    e[null != s ? s : ""] = null != o ? o : L.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.playedSounds)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(i), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.playedSounds[i], t, n), t.join().join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.PlayedSoundFrecency", [{
      no: 1,
      name: "played_sounds",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: () => L
      }
    }])
  }
}
let U = new y;
class b extends l.C {
  create(e) {
    let t = {
      applications: {}
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) this.binaryReadMap1(r.applications, e, n);
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, o;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.string();
          break;
        case 2:
          o = L.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications")
      }
    }
    e[null != s ? s : ""] = null != o ? o : L.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.applications)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.LengthDelimited).string(i), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.applications[i], t, n), t.join().join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.ApplicationFrecency", [{
      no: 1,
      name: "applications",
      kind: "map",
      K: 9,
      V: {
        kind: "message",
        T: () => L
      }
    }])
  }
}
let G = new b;
class w extends l.C {
  create(e) {
    let t = {
      guildAndChannels: {}
    };
    return globalThis.Object.defineProperty(t, a.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, o.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, i) {
    let r = null != i ? i : this.create(),
      o = e.pos + t;
    for (; e.pos < o;) {
      let [t, i] = e.tag();
      if (1 === t) this.binaryReadMap1(r.guildAndChannels, e, n);
      else {
        let o = n.readUnknownField;
        if ("throw" === o) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName));
        let a = e.skip(i);
        !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, r, t, i, a)
      }
    }
    return r
  }
  binaryReadMap1(e, t, n) {
    let i = t.uint32(),
      r = t.pos + i,
      s, o;
    for (; t.pos < r;) {
      let [e, i] = t.tag();
      switch (e) {
        case 1:
          s = t.fixed64().toString();
          break;
        case 2:
          o = L.internalBinaryRead(t, t.uint32(), n);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels")
      }
    }
    e[null != s ? s : "0"] = null != o ? o : L.create()
  }
  internalBinaryWrite(e, t, n) {
    for (let i of Object.keys(e.guildAndChannels)) t.tag(1, s.TD.LengthDelimited).fork().tag(1, s.TD.Bit64).fixed64(i), t.tag(2, s.TD.LengthDelimited).fork(), L.internalBinaryWrite(e.guildAndChannels[i], t, n), t.join().join();
    let i = n.writeUnknownFields;
    return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.discord_users.v1.GuildAndChannelFrecency", [{
      no: 1,
      name: "guild_and_channels",
      kind: "map",
      K: 6,
      V: {
        kind: "message",
        T: () => L
      }
    }])
  }
}
let k = new w