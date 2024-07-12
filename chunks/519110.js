n.d(t, {
  Z: function() {
return C;
  }
}), n(757143);
var a = n(735250),
  i = n(470079),
  l = n(442837),
  u = n(481060),
  s = n(80932),
  o = n(2052),
  r = n(543241),
  c = n(339085),
  I = n(633302),
  d = n(691251),
  E = n(268350),
  M = n(217590),
  S = n(453070),
  g = n(926491),
  b = n(378233),
  f = n(981631),
  O = n(689938);

function Z(e) {
  return I.ZP.getByName(e.replace(/(^:|:$)/g, ''));
}

function C(e) {
  let {
type: t,
id: n,
name: C,
isInExpressionPicker: T = !1
  } = e, {
location: _
  } = (0, o.O)(), p = i.useMemo(() => ({
..._,
section: T ? f.jXE.EXPRESSION_PICKER : f.jXE.CONTEXT_MENU
  }), [
_,
T
  ]), v = (0, S.Go)(), A = (0, l.e7)([g.Z], () => t === d.S.STICKER && null != n ? g.Z.getStickerById(n) : null), m = null != A && v.includes(A.id), R = (0, l.e7)([c.Z], () => {
if (t === d.S.EMOJI) {
  if (null != n)
    return c.Z.getDisambiguatedEmojiContext().getById(n);
  if (null != C) {
    var e;
    return null !== (e = Z(C)) && void 0 !== e ? e : Z(I.ZP.convertSurrogateToName(C));
  }
}
  }), j = (0, r.C1)(null, R);
  if (null != A && t === d.S.STICKER)
return (0, b.J8)(A) && !(0, b.V9)(A) ? null : m ? (0, a.jsx)(u.MenuItem, {
  id: 'unfavorite',
  action: () => (0, E.hW)(A.id),
  label: O.Z.Messages.UNFAVORITE_ITEM
}) : (0, a.jsx)(u.MenuItem, {
  id: 'favorite',
  action: () => {
    (0, M.cQ)({
      sticker: A,
      location: {
        ...p,
        object: f.qAy.STICKER
      }
    }), (0, E.SA)(null == A ? void 0 : A.id);
  },
  label: O.Z.Messages.FAVORITE_ITEM
});
  if (null != R && t === d.S.EMOJI)
return j ? (0, a.jsx)(u.MenuItem, {
  id: 'unfavorite',
  action: () => (0, s.Xe)(R),
  label: O.Z.Messages.UNFAVORITE_ITEM
}) : (0, a.jsx)(u.MenuItem, {
  id: 'favorite',
  action: () => {
    (0, r.J1)({
      emoji: R,
      location: {
        ...p,
        object: f.qAy.EMOJI
      }
    }), (0, s.$K)(R);
  },
  label: O.Z.Messages.FAVORITE_ITEM
});
}