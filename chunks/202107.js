"use strict";
n(47120);
var i = n(570140),
  r = n(147913),
  s = n(271383),
  o = n(594174),
  a = n(69882);
let l = null,
  u = () => {
    let e = s.ZP.getCommunicationDisabledUserMap();
    Object.keys(e).forEach(t => {
      let n = (0, s.O5)(t),
        i = (0, s.V6)(t),
        r = e[t];
      !(0, a.J)(r) && _(n, i)
    })
  },
  _ = (e, t) => {
    var n, r, l, u, _, d;
    let c = s.ZP.getMember(e, t),
      E = o.default.getUser(t);
    if (null == c || null == E || (0, a.b)(c)) return;
    let I = {
      ...c,
      guildId: e,
      nick: null !== (n = c.nick) && void 0 !== n ? n : E.username,
      avatar: null !== (r = c.avatar) && void 0 !== r ? r : void 0,
      avatarDecoration: null != c.avatarDecoration ? {
        ...c.avatarDecoration
      } : void 0,
      premiumSince: null !== (l = c.premiumSince) && void 0 !== l ? l : void 0,
      isPending: null !== (u = c.isPending) && void 0 !== u && u,
      user: {
        ...E,
        email: null !== (_ = E.email) && void 0 !== _ ? _ : void 0,
        phone: null !== (d = E.phone) && void 0 !== d ? d : void 0
      },
      communicationDisabledUntil: null
    };
    i.Z.dispatch({
      type: "GUILD_MEMBER_UPDATE",
      ...I
    })
  };
class d extends r.Z {
  _initialize() {
    l = setInterval(() => u(), 1e4)
  }
  _terminate() {
    clearInterval(l)
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "clearGuildMemberTimeout", i = _, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new d