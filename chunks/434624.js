n.d(t, {
  l: function() {
return h;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(866442),
  o = n(596454),
  c = n(434650),
  u = n(446489),
  d = n(56314),
  _ = n(566006),
  E = n(287151),
  I = n(716862),
  m = n(372178);
let T = s.memo(function(e) {
let t, n, {
    useChatFontScaling: s,
    hideEmoji: a,
    emoji: c,
    className: T,
    count: h,
    me: N,
    me_burst: C,
    burst_count: f,
    burst_colors: p,
    readOnly: g,
    isLurking: S,
    isGuest: A,
    isPendingMember: R,
    type: O
  } = e,
  x = O === _.O.BURST,
  M = (0, E.y4)(N, C, O),
  v = (0, d.v)(x && null != p ? p : []),
  L = s ? m : I,
  Z = x ? f : h,
  P = (0, u.y)(Z, E.aO),
  D = {};
if (x && null != v) {
  var b;
  let {
    accentColor: e,
    backgroundColor: i,
    opacity: s
  } = v, a = null !== (b = (0, l.wK)(null != i ? i : '', s)) && void 0 !== b ? b : '';
  M && (D.borderColor = i), D.background = a, t = e, n = e;
}
let j = {
  minWidth: P,
  color: t,
  borderColor: n
};
return (0, i.jsxs)('div', {
  className: r()(L.reaction, L.reactionInner, T, {
    [L.reactionMe]: M,
    [L.reactionReadOnly]: g && !S && !R && !A
  }),
  style: D,
  children: [
    (0, i.jsx)(o.Z, {
      className: r()({
        [L.hideEmoji]: a
      }),
      emojiId: c.id,
      emojiName: c.name,
      size: 'reaction',
      animated: x && c.animated
    }),
    (0, i.jsx)('div', {
      className: L.reactionCount,
      style: j,
      children: Z
    })
  ]
});
  }),
  h = s.memo(function(e) {
let {
  showImmediate: t,
  reactions: n,
  ...a
} = e, [r, l] = s.useState(!1), [o, u] = s.useTransition(), d = s.useCallback(e => {
  e && !r && !o && u(() => {
    l(!0);
  });
}, [
  r,
  o
]), I = (0, c.O)(d), m = r && !o || t ? E.le : T;
return (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)('div', {
      ref: I
    }),
    n.map(e => {
      var t, n;
      return (0, i.jsx)(m, {
        ...a,
        ...e
      }, (t = e, ''.concat(t.type === _.O.BURST ? 'burst:' : '').concat(null !== (n = t.emoji.id) && void 0 !== n ? n : 0, ':').concat(t.emoji.name)));
    })
  ]
});
  });