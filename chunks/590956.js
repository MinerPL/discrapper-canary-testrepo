n.d(t, {
    Y: function () {
        return I;
    },
    c: function () {
        return v;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(772848),
    l = n(481060),
    u = n(596454),
    c = n(367907),
    d = n(130402),
    f = n(626135),
    _ = n(183023),
    h = n(524444),
    p = n(981631),
    m = n(185923),
    g = n(474936),
    E = n(659932);
let v = (e) => {
        var t;
        let { node: n, tooltipPosition: a = h.b_.position, enableClick: o = !0, channelId: c, messageId: d } = e,
            f = null === (t = n.originalMatch) || void 0 === t ? void 0 : t[0],
            p = null != f ? f : n.name,
            [m, g] = i.useState(!1),
            v = (e) =>
                (0, r.jsx)(u.Z, {
                    ...e,
                    emojiName: n.name,
                    size: n.jumboable ? 'jumbo' : 'default',
                    src: n.src,
                    alt: f,
                    animated: !1,
                    channelId: c,
                    messageId: d
                }),
            I = (e) =>
                (0, r.jsx)(l.Tooltip, {
                    text: (0, h.Y)(n.name, o),
                    'aria-label': p,
                    ...h.b_,
                    position: a,
                    shouldShow: !m,
                    onTooltipShow: () => {
                        o &&
                            S({
                                emojiNode: n,
                                isCustomEmoji: !1
                            });
                    },
                    children: (t) =>
                        (0, r.jsx)(l.Clickable, {
                            ...e,
                            tag: 'span',
                            onClick: (t) => {
                                var n;
                                g(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
                            },
                            className: s()(E.emojiContainer, {
                                [E.emojiContainerClickable]: o,
                                [E.emojiJumbo]: n.jumboable
                            }),
                            children: v(t)
                        })
                });
        return o
            ? (0, r.jsx)(l.Popout, {
                  animation: l.Popout.Animation.TRANSLATE,
                  align: 'center',
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: 'right',
                  onRequestClose: () => {
                      g(!1);
                  },
                  renderPopout: (e) =>
                      (0, r.jsx)(_.Az, {
                          ...e,
                          node: n
                      }),
                  children: I
              })
            : I();
    },
    I = (e) => {
        let { node: t, isInteracting: n, tooltipPosition: a = h.b_.position, enableClick: c = !0, channelId: g, messageId: v } = e,
            [I, T] = i.useState(String(Date.now())),
            [b, y] = i.useState(!1),
            [A, N] = i.useState(!1),
            C = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, r.jsx)(u.Z, {
                    ...e,
                    emojiName: t.name,
                    size: t.jumboable ? 'jumbo' : 'default',
                    emojiId: t.emojiId,
                    animated: t.animated,
                    isInteracting: n,
                    channelId: g,
                    messageId: v
                });
            },
            R = (0, o.Z)(),
            O = (e) =>
                (0, r.jsx)(l.Tooltip, {
                    text: (0, h.Y)(t.name, c),
                    'aria-label': t.name,
                    ...h.b_,
                    position: a,
                    shouldShow: !A,
                    onTooltipShow: () => {
                        y(!0),
                            c &&
                                (S({
                                    emojiNode: t,
                                    isCustomEmoji: !0,
                                    nonce: R
                                }),
                                (0, d.x)(m.qR.CustomEmojiTooltipShown));
                    },
                    children: (n) =>
                        (0, r.jsx)(l.Clickable, {
                            ...e,
                            onMouseEnter: () => {
                                var t;
                                null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                            },
                            onClick: c
                                ? (t) => {
                                      var n;
                                      y(!1), N(!0), null == e || null === (n = e.onClick) || void 0 === n || n.call(e, t);
                                  }
                                : void 0,
                            onMouseLeave: () => {
                                b && (f.default.track(p.rMx.CLOSE_POPOUT, { nonce: R }), y(!1));
                            },
                            tag: 'span',
                            className: s()(E.emojiContainer, {
                                [E.emojiContainerClickable]: c,
                                [E.emojiJumbo]: t.jumboable
                            }),
                            children: C(n)
                        })
                });
        return c
            ? (0, r.jsx)(l.Popout, {
                  animation: l.Popout.Animation.FADE,
                  align: 'center',
                  onRequestClose: () => {
                      f.default.track(p.rMx.CLOSE_POPOUT, { nonce: R }), y(!1), N(!1);
                  },
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  position: 'right',
                  renderPopout: (e) =>
                      (0, r.jsx)(_.vk, {
                          ...e,
                          node: t,
                          refreshPositionKey: () => T(String(Date.now())),
                          nonce: R
                      }),
                  positionKey: I,
                  children: O
              })
            : O();
    },
    S = (e) => {
        let { emojiNode: t, isCustomEmoji: n, nonce: r } = e;
        c.ZP.trackWithMetadata(p.rMx.EXPRESSION_TOOLTIP_VIEWED, {
            type: g.cd.EMOJI_IN_MESSAGE_HOVER,
            expression_id: t.emojiId,
            expression_name: t.name,
            is_animated: t.animated,
            is_custom: n,
            nonce: r
        });
    };
