"use strict";
n.d(t, {
  u: function() {
    return h
  }
}), n(653041), n(998459), n(47120);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(355467),
  o = n(179360),
  a = n(821849),
  l = n(594174),
  u = n(314884),
  _ = n(509545),
  d = n(626135),
  c = n(267642),
  E = n(852679),
  I = n(981631);
let T = "apply-guild-boost-modal";
async function h(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: h,
    analyticsSourceLocation: S,
    numberOfBoostsToAdd: f,
    onClose: N,
    closeLayer: A,
    onSubscriptionConfirmation: m,
    guild: O,
    handleSubscribeModalClose: R,
    disablePremiumUpsell: C,
    inPopout: p,
    applicationId: g
  } = e, L = p ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, v = l.default.getCurrentUser();
  if (null == v) return;
  if (!v.verified) {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("35822")]).then(n.bind(n, 444688));
      return t => {
        let {
          onClose: n,
          ...r
        } = t;
        return (0, i.jsx)(e, {
          ...r,
          onClose: n
        })
      }
    }, {
      contextKey: L
    });
    return
  }
  let D = [];
  !_.Z.isLoadedForPremiumSKUs() && D.push((0, a.Y2)()), !u.Z.hasFetched && (D.push(s.jg()), D.push((0, o.X8)())), D.length > 0 && await Promise.allSettled(D);
  let M = (0, c.vx)(u.Z.boostSlots),
    P = M.length,
    y = e => {
      null == N || N(), null == R || R(e)
    };
  if (P > 0 && (null == f || P >= f)) {
    let e;
    1 === P ? e = M.slice(0, 1) : null != f && (e = M.slice(0, f)), await (0, r.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("29549"), n.e("15972"), n.e("12013"), n.e("8016"), n.e("22646"), n.e("30419"), n.e("66934")]).then(n.bind(n, 760558));
      return n => {
        let {
          onClose: r,
          ...s
        } = n;
        return (0, i.jsx)(t, {
          ...s,
          onClose: e => {
            r(), y(e)
          },
          selectedGuild: O,
          locationSection: I.ZY5.PREMIUM_GUILD_USER_MODAL,
          guildBoostSlots: e
        })
      }
    }, {
      modalKey: T,
      onCloseRequest: () => {
        (0, r.closeModal)(T), y(!1)
      },
      contextKey: L
    })
  } else(0, E.Z)({
    analyticsLocations: t,
    analyticsLocation: h,
    analyticsSourceLocation: S,
    guildId: O.id,
    closeLayer: () => {
      null == N || N(), null == A || A(), d.default.track(I.rMx.MODAL_DISMISSED, {
        type: I.ZY5.PREMIUM_GUILD_USER_MODAL,
        location_section: h.section
      })
    },
    totalNumberOfSlotsToAssign: null != f ? f : 1,
    onCloseModal: y,
    disablePremiumUpsell: C,
    onSubscriptionConfirmation: m,
    inPopout: p,
    applicationId: g
  })
}