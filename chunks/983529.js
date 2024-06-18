"use strict";
n(47120);
var i = n(735250);
n(470079);
var r = n(704215),
  s = n(481060),
  o = n(147913),
  a = n(605236),
  l = n(944486),
  u = n(914010),
  _ = n(626135),
  d = n(150340),
  c = n(981631),
  E = n(921944);
let I = "GUILD_ONBOARDING_UPSELL_MODAL",
  T = (e, t) => {
    if (__OVERLAY__ || null == e || null == t || !(0, d.S)(e, r.z.GUILD_ONBOARDING_UPSELL_MODAL_V2)) return;
    (0, a.kk)(r.z.GUILD_ONBOARDING_UPSELL_MODAL_V2);
    let o = function() {
      let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.L.DISMISS;
      _.default.track(c.rMx.UPSELL_CLICKED, {
        type: r.z[r.z.GUILD_ONBOARDING_UPSELL_MODAL_V2],
        action: "dismiss"
      }), (0, d.G)(e, r.z.GUILD_ONBOARDING_UPSELL_MODAL_V2), (0, a.EW)(r.z.GUILD_ONBOARDING_UPSELL_MODAL_V2, {
        dismissAction: t
      })
    };
    (0, s.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("99387"), n.e("93776")]).then(n.bind(n, 563288));
      return n => (0, i.jsx)(t, {
        ...n,
        guildId: e,
        onClose: e => {
          o(e), n.onClose()
        }
      })
    }, {
      modalKey: I,
      onCloseRequest: () => {
        o(), (0, s.closeModal)(I)
      }
    })
  };
class h extends o.Z {
  handleChannelSelect(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    T(t, n)
  }
  handlePostConnectionOpen() {
    let e = l.Z.getCurrentlySelectedChannelId();
    T(u.Z.getGuildId(), e)
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      CHANNEL_SELECT: this.handleChannelSelect,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new h