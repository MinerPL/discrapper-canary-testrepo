n.d(t, {
  Y: function() {
return g;
  },
  c: function() {
return T;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(772848),
  l = n(481060),
  u = n(596454),
  c = n(367907),
  d = n(130402),
  _ = n(626135),
  E = n(183023),
  f = n(524444),
  h = n(981631),
  p = n(185923),
  m = n(474936),
  I = n(436547);
let T = e => {
var t;
let {
  node: n,
  tooltipPosition: a = f.b_.position,
  enableClick: o = !0
} = e, c = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0], d = null != c ? c : n.name, [_, h] = i.useState(!1), p = e => (0, r.jsx)(u.Z, {
  ...e,
  emojiName: n.name,
  size: n.jumboable ? 'jumbo' : 'default',
  src: n.src,
  alt: c,
  animated: !1
}), m = e => (0, r.jsx)(l.Tooltip, {
  text: (0, f.Y)(n.name, o),
  'aria-label': d,
  ...f.b_,
  position: a,
  shouldShow: !_,
  onTooltipShow: () => {
    o && S({
      emojiNode: n,
      isCustomEmoji: !1
    });
  },
  children: t => (0, r.jsx)(l.Clickable, {
    ...e,
    tag: 'span',
    onClick: t => {
      var n;
      h(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
    },
    className: s()(I.emojiContainer, {
      [I.emojiContainerClickable]: o
    }),
    children: p(t)
  })
});
return o ? (0, r.jsx)(l.Popout, {
  animation: l.Popout.Animation.TRANSLATE,
  align: 'center',
  autoInvert: !0,
  nudgeAlignIntoViewport: !0,
  position: 'right',
  onRequestClose: () => {
    h(!1);
  },
  renderPopout: e => (0, r.jsx)(E.Az, {
    ...e,
    node: n
  }),
  children: m
}) : m();
  },
  g = e => {
let {
  node: t,
  isInteracting: n,
  tooltipPosition: a = f.b_.position,
  enableClick: c = !0
} = e, [m, T] = i.useState(String(Date.now())), [g, A] = i.useState(!1), [N, v] = i.useState(!1), O = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return (0, r.jsx)(u.Z, {
    ...e,
    emojiName: t.name,
    size: t.jumboable ? 'jumbo' : 'default',
    emojiId: t.emojiId,
    animated: t.animated,
    isInteracting: n
  });
}, R = (0, o.Z)(), C = e => (0, r.jsx)(l.Tooltip, {
  text: (0, f.Y)(t.name, c),
  'aria-label': t.name,
  ...f.b_,
  position: a,
  shouldShow: !N,
  onTooltipShow: () => {
    A(!0), c && (S({
      emojiNode: t,
      isCustomEmoji: !0,
      nonce: R
    }), (0, d.x)(p.qR.CustomEmojiTooltipShown));
  },
  children: t => (0, r.jsx)(l.Clickable, {
    ...e,
    onMouseEnter: () => {
      var t;
      null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
    },
    onClick: c ? t => {
      var n;
      A(!1), v(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
    } : void 0,
    onMouseLeave: () => {
      g && (_.default.track(h.rMx.CLOSE_POPOUT, {
        nonce: R
      }), A(!1));
    },
    tag: 'span',
    className: s()(I.emojiContainer, {
      [I.emojiContainerClickable]: c
    }),
    children: O(t)
  })
});
return c ? (0, r.jsx)(l.Popout, {
  animation: l.Popout.Animation.FADE,
  align: 'center',
  onRequestClose: () => {
    _.default.track(h.rMx.CLOSE_POPOUT, {
      nonce: R
    }), A(!1), v(!1);
  },
  autoInvert: !0,
  nudgeAlignIntoViewport: !0,
  position: 'right',
  renderPopout: e => (0, r.jsx)(E.vk, {
    ...e,
    node: t,
    refreshPositionKey: () => T(String(Date.now())),
    nonce: R
  }),
  positionKey: m,
  children: C
}) : C();
  },
  S = e => {
let {
  emojiNode: t,
  isCustomEmoji: n,
  nonce: r
} = e;
c.ZP.trackWithMetadata(h.rMx.EXPRESSION_TOOLTIP_VIEWED, {
  type: m.cd.EMOJI_IN_MESSAGE_HOVER,
  expression_id: t.emojiId,
  expression_name: t.name,
  is_animated: t.animated,
  is_custom: n,
  nonce: r
});
  };