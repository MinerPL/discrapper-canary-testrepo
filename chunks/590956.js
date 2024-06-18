"use strict";
n.d(t, {
  Y: function() {
    return A
  },
  c: function() {
    return N
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(772848),
  l = n(481060),
  u = n(596454),
  _ = n(367907),
  d = n(130402),
  c = n(626135),
  E = n(183023),
  I = n(524444),
  T = n(981631),
  h = n(185923),
  S = n(474936),
  f = n(140989);
let N = e => {
    var t;
    let {
      node: n,
      tooltipPosition: s = I.b_.position,
      enableClick: a = !0
    } = e, _ = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0], d = null != _ ? _ : n.name, [c, T] = r.useState(!1), h = e => (0, i.jsx)(u.Z, {
      ...e,
      emojiName: n.name,
      size: n.jumboable ? "jumbo" : "default",
      src: n.src,
      alt: _,
      animated: !1
    }), S = e => (0, i.jsx)(l.Tooltip, {
      text: (0, I.Y)(n.name, a),
      "aria-label": d,
      ...I.b_,
      position: s,
      shouldShow: !c,
      onTooltipShow: () => {
        a && m({
          emojiNode: n,
          isCustomEmoji: !1
        })
      },
      children: t => (0, i.jsx)(l.Clickable, {
        ...e,
        tag: "span",
        onClick: t => {
          var n;
          T(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
        },
        className: o()(f.emojiContainer, {
          [f.emojiContainerClickable]: a
        }),
        children: h(t)
      })
    });
    return a ? (0, i.jsx)(l.Popout, {
      animation: l.Popout.Animation.TRANSLATE,
      align: "center",
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      position: "right",
      onRequestClose: () => {
        T(!1)
      },
      renderPopout: e => (0, i.jsx)(E.Az, {
        ...e,
        node: n
      }),
      children: S
    }) : S()
  },
  A = e => {
    let {
      node: t,
      isInteracting: n,
      tooltipPosition: s = I.b_.position,
      enableClick: _ = !0
    } = e, [S, N] = r.useState(String(Date.now())), [A, O] = r.useState(!1), [R, C] = r.useState(!1), p = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (0, i.jsx)(u.Z, {
        ...e,
        emojiName: t.name,
        size: t.jumboable ? "jumbo" : "default",
        emojiId: t.emojiId,
        animated: t.animated,
        isInteracting: n
      })
    }, g = (0, a.Z)(), L = e => (0, i.jsx)(l.Tooltip, {
      text: (0, I.Y)(t.name, _),
      "aria-label": t.name,
      ...I.b_,
      position: s,
      shouldShow: !R,
      onTooltipShow: () => {
        O(!0), _ && (m({
          emojiNode: t,
          isCustomEmoji: !0,
          nonce: g
        }), (0, d.x)(h.qR.CustomEmojiTooltipShown))
      },
      children: t => (0, i.jsx)(l.Clickable, {
        ...e,
        onMouseEnter: () => {
          var t;
          null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onClick: t => {
          var n;
          O(!1), C(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t)
        },
        onMouseLeave: () => {
          A && (c.default.track(T.rMx.CLOSE_POPOUT, {
            nonce: g
          }), O(!1))
        },
        tag: "span",
        className: o()(f.emojiContainer, {
          [f.emojiContainerClickable]: _
        }),
        children: p(t)
      })
    });
    return _ ? (0, i.jsx)(l.Popout, {
      animation: l.Popout.Animation.FADE,
      align: "center",
      onRequestClose: () => {
        c.default.track(T.rMx.CLOSE_POPOUT, {
          nonce: g
        }), O(!1), C(!1)
      },
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      position: "right",
      renderPopout: e => (0, i.jsx)(E.vk, {
        ...e,
        node: t,
        refreshPositionKey: () => N(String(Date.now())),
        nonce: g
      }),
      positionKey: S,
      children: L
    }) : L()
  },
  m = e => {
    let {
      emojiNode: t,
      isCustomEmoji: n,
      nonce: i
    } = e;
    _.ZP.trackWithMetadata(T.rMx.EXPRESSION_TOOLTIP_VIEWED, {
      type: S.cd.EMOJI_IN_MESSAGE_HOVER,
      expression_id: t.emojiId,
      expression_name: t.name,
      is_animated: t.animated,
      is_custom: n,
      nonce: i
    })
  }