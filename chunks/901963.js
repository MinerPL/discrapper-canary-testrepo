"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(913527),
  o = n.n(s),
  a = n(442837),
  l = n(433517),
  u = n(481060),
  _ = n(355467),
  d = n(230711),
  c = n(78839),
  E = n(672752),
  I = n(465670),
  T = n(466111),
  h = n(74538),
  S = n(543241),
  f = n(981631),
  N = n(474936),
  A = n(689938),
  m = n(375660);
let O = "premiumRetentionEmojiPickerNotice",
  R = l.K.get(O);
t.Z = e => {
  let {
    closePopout: t,
    channel: n
  } = e, [s, C] = r.useState(!1), {
    subscription: p,
    hasFetchedSubscriptions: g
  } = (0, a.cj)([c.ZP], () => ({
    subscription: c.ZP.getPremiumSubscription(),
    hasFetchedSubscriptions: c.ZP.hasFetchedSubscriptions()
  }));
  if (r.useEffect(() => {
      !g && (0, _.jg)()
    }, [g]), null == p || !(0, h.zV)(p.status) || s) return null;
  let L = p.status === f.O0b.PAST_DUE ? (0, h.lY)(p).expiresDate : o()(p.currentPeriodStart).add(N.gh),
    v = "".concat(p.id, ":").concat(L.toISOString());
  if (R === v) return null;
  let D = h.ZP.getPremiumType(p.planId) === N.p9.TIER_0 ? E.JX.PREMIUM_TIER_0 : h.ZP.getPremiumType(p.planId) === N.p9.TIER_1 ? E.JX.PREMIUM_TIER_1 : E.JX.PREMIUM_TIER_2;
  return (0, i.jsxs)("div", {
    className: m.premiumRetentionNotice,
    children: [(0, i.jsx)(T.Z, {
      className: m.premiumRetentionNoticeIcon,
      color: D
    }), (0, i.jsxs)("div", {
      className: m.premiumRetentionNoticeContent,
      children: [(0, i.jsx)(u.Text, {
        variant: "text-xs/normal",
        children: A.Z.Messages.PREMIUM_RETENTION_EMOJI_PICKER_DESCRIPTION.format({
          planName: h.ZP.getDisplayPremiumType(p.planId),
          endsAt: L
        })
      }), (0, i.jsx)("div", {
        children: (0, i.jsx)(u.Anchor, {
          onClick: () => {
            (0, S.A3)(n), t(), d.Z.open(f.oAB.PREMIUM)
          },
          children: A.Z.Messages.PREMIUM_RETENTION_EMOJI_PICKER_UPDATE_PAYMENT_INFORMATION
        })
      })]
    }), (0, i.jsx)(u.Clickable, {
      onClick: () => {
        l.K.set(O, v), R = v, C(!0)
      },
      children: (0, i.jsx)(I.Z, {
        className: m.premiumRetentionNoticeClose
      })
    })]
  })
}