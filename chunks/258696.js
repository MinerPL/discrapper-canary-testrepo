"use strict";
n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(873546),
  o = n(442837),
  a = n(911969),
  l = n(607070),
  u = n(998698),
  _ = n(211242),
  d = n(276444),
  c = n(646476),
  E = n(963198),
  I = n(913663),
  T = n(117530),
  h = n(594174),
  S = n(74538),
  f = n(94161),
  N = n(9277),
  A = n(897291),
  m = n(764794),
  O = n(241553),
  R = n(319417),
  C = n(728386),
  p = n(474936),
  g = n(838329);

function L(e) {
  let {
    disabled: t,
    channel: n
  } = e, {
    enabled: s
  } = c.ZP.useExperiment({
    location: "dc120b_1"
  }, {
    autoTrackExposure: !1
  }), o = (0, c.rK)();
  return r.useEffect(() => {
    o && c.ZP.trackExposure({
      location: "dc120b_2"
    })
  }, [o]), s && o ? (0, i.jsx)(O.Z, {
    disabled: t,
    channel: n
  }) : (0, i.jsx)(A.Z, {
    disabled: t,
    channel: n
  })
}
t.Z = r.memo(function(e) {
  var t, n, r, c, A, O, v, D;
  let {
    type: M,
    disabled: P,
    channel: y,
    handleSubmit: U,
    isEmpty: b
  } = e, G = (0, o.e7)([l.Z], () => l.Z.isSubmitButtonEnabled), w = (0, o.e7)([I.Z], () => I.Z.getStickerPreview(y.id, M.drafts.type)), k = null != w && w.length > 0, B = (0, o.e7)([T.Z], () => T.Z.getUploads(y.id, M.drafts.type)), {
    activeCommand: x,
    activeCommandOption: V
  } = (0, o.cj)([u.Z], () => ({
    activeCommand: u.Z.getActiveCommand(y.id),
    activeCommandOption: u.Z.getActiveOption(y.id)
  })), {
    paymentsBlocked: Z
  } = _.Z.useExperiment({
    location: "dc120b_3"
  }, {
    autoTrackExposure: !1
  }), H = [], {
    enabled: F
  } = E.Z.getCurrentConfig({
    location: "dc120b_4"
  }, {
    autoTrackExposure: !1
  }), Y = h.default.getCurrentUser(), j = null !== (c = (0, o.e7)([d.Z], () => F && S.ZP.isPremiumExactly(Y, p.p9.TIER_2) ? d.Z.getReferralsRemaining() : 0)) && void 0 !== c ? c : 0, W = (0, o.e7)([d.Z], () => {
    if (!y.isDM() || void 0 === y.recipients || y.recipients.length > 1 || !F) return !1;
    let e = y.recipients[0];
    return d.Z.getSentUserIds().includes(e)
  }), [K, z] = (0, o.Wu)([d.Z, h.default], () => {
    let e = [!1, !1];
    if (!y.isDM() || void 0 === y.recipients || y.recipients.length > 1) return e;
    let t = y.recipients[0],
      n = h.default.getUser(t);
    if (null == n || n.bot) return e;
    let i = W || j > 0,
      r = d.Z.getRecipientEligibility(t);
    return [F && i && r, r]
  });
  return (!s.tq && (y.isDM() && (null === (A = M.gifts) || void 0 === A ? void 0 : A.button) != null && null == x && (S.ZP.isPremiumExactly(Y, p.p9.TIER_2) && z && E.Z.trackExposure({
    location: "dc120b_5"
  }), K && H.push((0, i.jsx)(m.Z, {
    disabled: P,
    referralsRemaining: j,
    channel: y,
    isResending: W
  }, "referral"))), (null === (O = M.gifts) || void 0 === O ? void 0 : O.button) != null && null == x && !Z && H.push((0, i.jsx)(L, {
    disabled: P,
    channel: y
  }, "gift")), (null === (v = M.gifs) || void 0 === v ? void 0 : v.button) != null && null == x && H.push((0, i.jsx)(N.Z, {
    disabled: P,
    type: M
  }, "gif")), (null === (D = M.stickers) || void 0 === D ? void 0 : D.button) != null && null == x && H.push((0, i.jsx)(C.Z, {
    disabled: P,
    type: M
  }, "sticker"))), (null === (t = M.emojis) || void 0 === t ? void 0 : t.button) != null && (null == x || null != V && V.type !== a.jw.ATTACHMENT) && H.push((0, i.jsx)(f.Z, {
    disabled: P,
    type: M
  }, "emoji")), (null === (n = M.submit) || void 0 === n ? void 0 : n.button) != null && ((null === (r = M.submit) || void 0 === r ? void 0 : r.ignorePreference) || G) && H.push((0, i.jsx)(R.Z, {
    onClick: U,
    disabled: P || 0 === B.length && b && !k
  }, "submit")), 0 === H.length) ? null : (0, i.jsx)("div", {
    className: g.buttons,
    children: H
  })
})