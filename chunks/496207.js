"use strict";
n(47120);
var i = n(147913),
  r = n(914010),
  s = n(558217),
  o = n(185923);
class a extends i.Z {
  handleInteraction(e) {
    let {
      interaction: t
    } = e;
    if ([o.qR.EmojiButtonMouseEntered].includes(t)) {
      let e = r.Z.getGuildId();
      (0, s.O)(e)
    }
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      EMOJI_INTERACTION_INITIATED: this.handleInteraction
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new a