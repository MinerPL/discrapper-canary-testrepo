n(47120);
var r = n(147913),
    i = n(914010),
    a = n(558217),
    s = n(185923);
class o extends r.Z {
    handleInteraction(e) {
        let { interaction: t } = e;
        if ([s.qR.EmojiButtonMouseEntered].includes(t)) {
            let e = i.Z.getGuildId();
            (0, a.O)(e);
        }
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = { EMOJI_INTERACTION_INITIATED: this.handleInteraction }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new o();
