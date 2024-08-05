n(47120);
var r = n(735250);
n(470079);
var i = n(704215),
  a = n(481060),
  s = n(147913),
  o = n(605236),
  l = n(944486),
  u = n(914010),
  c = n(626135),
  d = n(150340),
  _ = n(981631),
  E = n(921944);
let f = 'GUILD_ONBOARDING_UPSELL_MODAL',
  h = (e, t) => {
if (__OVERLAY__ || null == e || null == t || !(0, d.S)(e, i.z.GUILD_ONBOARDING_UPSELL_MODAL_V2))
  return;
(0, o.kk)(i.z.GUILD_ONBOARDING_UPSELL_MODAL_V2);
let s = function() {
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.L.DISMISS;
  c.default.track(_.rMx.UPSELL_CLICKED, {
    type: i.z[i.z.GUILD_ONBOARDING_UPSELL_MODAL_V2],
    action: 'dismiss'
  }), (0, d.G)(e, i.z.GUILD_ONBOARDING_UPSELL_MODAL_V2), (0, o.EW)(i.z.GUILD_ONBOARDING_UPSELL_MODAL_V2, {
    dismissAction: t
  });
};
(0, a.openModalLazy)(async () => {
  let {
    default: t
  } = await n.e('93776').then(n.bind(n, 563288));
  return n => (0, r.jsx)(t, {
    ...n,
    guildId: e,
    onClose: e => {
      s(e), n.onClose();
    }
  });
}, {
  modalKey: f,
  onCloseRequest: () => {
    s(), (0, a.closeModal)(f);
  }
});
  };
class p extends s.Z {
  handleChannelSelect(e) {
let {
  guildId: t,
  channelId: n
} = e;
h(t, n);
  }
  handlePostConnectionOpen() {
let e = l.Z.getCurrentlySelectedChannelId();
h(u.Z.getGuildId(), e);
  }
  constructor(...e) {
var t, n, r;
super(...e), t = this, n = 'actions', r = {
  CHANNEL_SELECT: this.handleChannelSelect,
  POST_CONNECTION_OPEN: this.handlePostConnectionOpen
}, n in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
t.Z = new p();