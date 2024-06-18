"use strict";
n.d(t, {
  Z: function() {
    return o
  }
}), n(47120);
var i = n(710845),
  r = n(287328);
let s = new i.Z("ChannelReader");
class o {
  static getSync(e, t) {
    let n = performance.now(),
      i = r.Z.channels(e).getManySyncUnsafe(t),
      o = performance.now() - n;
    return s.log("synchronously loaded in ".concat(o, "ms (guild: ").concat(t, ", channels: ").concat(i.length, ")")), [i, o]
  }
  static async getAsync(e, t) {
    let n = performance.now(),
      i = await r.Z.channels(e).getMany(t),
      o = performance.now() - n;
    return s.verbose("loaded in ".concat(o, "ms (guild: ").concat(t, ", channels: ").concat(i.length, ")")), i
  }
  static async getGuildIds() {
    try {
      var e;
      let t = r.Z.channels();
      if (null == t) return new Set;
      let n = (null !== (e = await t.getGuildIds()) && void 0 !== e ? e : []).filter(e => null !== e && "string" == typeof e);
      return new Set(n)
    } catch (e) {
      return s.warn("couldn't get guild ids", e), new Set
    }
  }
}