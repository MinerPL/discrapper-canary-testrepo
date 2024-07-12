n(47120);
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(570140),
  r = n(317770),
  l = n(594174),
  o = n(295226),
  c = n(74538),
  d = n(374023),
  u = n(913976),
  _ = n(104494),
  h = n(29920),
  E = n(786397),
  I = n(248042),
  m = n(318199),
  g = n(474936);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let T = 'PremiumServerDriveAnnouncementModal';
class S extends r.Z {
  _initialize() {
a.Z.subscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal), a.Z.subscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
  }
  _terminate() {
a.Z.unsubscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal), a.Z.unsubscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
  }
  constructor(...e) {
super(...e), p(this, 'maybeOpenServerDriveAnnouncementModal', async (e, t) => {
  let a = (0, m.extractAnnouncementModalContent)({
    content: e,
    isPreview: t
  });
  if (null != a)
    return !!((null == a ? void 0 : a.contentIdentifier) !== 'summer_bogo_content' || await (0, I.k)()) && ((0, s.closeModal)(T), (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 318199));
      return t => (0, i.jsx)(e, {
        renderModalProps: t,
        properties: a
      });
    }, {
      modalKey: T
    }), !0);
  return !1;
}), p(this, 'handlePreview', e => {
  let {
    properties: t
  } = e;
  this.maybeOpenServerDriveAnnouncementModal(t, !0);
}), p(this, 'getOfferFromStore', () => {
  let e = l.default.getCurrentUser();
  if ((0, c.I5)(e))
    return {};
  let t = [
    g.hs,
    g.RU,
    g.rB,
    g.ih
  ].map(e => o.Z.getUserDiscountOffer(e)).filter(e => null != e && !(0, _.kA)(e)).shift();
  if (null != t)
    return {
      userDiscountOffer: t
    };
  let n = [
    g.i_,
    g.Cn,
    g.wh,
    g.AU,
    g.TL,
    g.ET,
    g.C2,
    g.Hk
  ].map(e => o.Z.getUserTrialOffer(e)).filter(e => null != e && !(0, E.B)(e)).shift();
  return null != n ? {
    userTrialOffer: n
  } : {};
}), p(this, 'mayShowAnnouncementModal', async () => {
  if (await (0, I.l2)(), !d.s.isDisallowPopupsSet()) {
    if (!(0, s.hasAnyModalOpen)() && u.Z.getCurrentConfig({
        location: 'OfferAnnouncementManager'
      }).enabled) {
      for (let e of await (0, h.H)(this.getOfferFromStore()))
        if (await this.maybeOpenServerDriveAnnouncementModal(e, !1))
          break;
    }
  }
});
  }
}
t.Z = new S();