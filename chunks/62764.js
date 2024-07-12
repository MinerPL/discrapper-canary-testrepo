n.d(t, {
  Z: function() {
return j;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(852229),
  o = n(442837),
  c = n(481060),
  d = n(393238),
  u = n(330726),
  h = n(48929),
  p = n(333535),
  m = n(566006),
  _ = n(443877),
  f = n(60174),
  E = n(216337),
  C = n(920888),
  g = n(287151),
  I = n(569471),
  x = n(346479),
  T = n(592125),
  v = n(934415),
  N = n(456269),
  S = n(109590),
  Z = n(228392),
  A = n(981631),
  M = n(689938),
  b = n(150631),
  R = n(716862);

function j(e) {
  let {
postId: t,
isFirstMessage: n,
isLastItem: l = !1,
parentChannelId: j
  } = e, {
ref: L,
width: P
  } = (0, d.Z)(), [O, y] = a.useState(3), [D, k] = a.useState(!n), [U, w] = (0, u.Z)(!1, 2000), B = (0, o.e7)([T.Z], () => T.Z.getChannel(t), [t]), {
firstMessage: H
  } = (0, S.cl)(B), G = (0, o.e7)([I.Z], () => I.Z.hasJoined(t)), {
disableReactionUpdates: V,
disableReactionCreates: F,
isLurking: W,
isGuest: z,
isPendingMember: Y
  } = (0, _.Z)(B), K = (0, o.e7)([T.Z], () => T.Z.getChannel(j)), q = (0, N.Bs)(K), X = (0, o.e7)([h.Z], () => h.Z.shouldDisplayPrompt(t) && !0 === n, [
t,
n
  ]), Q = a.useCallback(e => {
let t = e[0];
if (null != t && n) {
  let e = t.intersectionRect,
    n = t.boundingClientRect;
  k((e.bottom - e.top) / (n.bottom - n.top) < 1);
}
  }, [n]);
  a.useLayoutEffect(() => {
let e = L.current;
if (null == e || !n)
  return;
let t = new IntersectionObserver(Q, {
  threshold: 1
});
return t.observe(e), () => {
  t.disconnect();
};
  });
  let [J, $] = a.useState(!0);
  if (a.useEffect(() => {
  if (null != P)
    y(Math.floor((P - 280) / 58)), $(!1);
}, [P]), null == B || null == H)
return null;
  let ee = H.reactions.length > 0,
et = () => {
  G ? x.Z.leaveThread(B, 'Forum Toolbar') : x.Z.joinThread(B, 'Forum Toolbar');
},
en = () => {
  (0, Z.B)({
    postId: B.id,
    location: {
      section: A.jXE.CHANNEL_HEADER
    }
  }), (0, r.J)((0, v.EO)(B, K)), w(!0);
},
ei = G ? c.CheckmarkLargeIcon : c.BellIcon;
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)('div', {
    className: s()(b.container, {
      [b.header]: D
    }),
    ref: L,
    children: [
      (0, i.jsxs)('div', {
        className: s()(b.reactButtons, {
          [b.loading]: J
        }),
        children: [
          !ee && !F && null != q && (0, i.jsx)('div', {
            className: R.reactions,
            children: (0, i.jsx)(g.le, {
              message: H,
              readOnly: !1,
              useChatFontScaling: !1,
              isLurking: W,
              isGuest: z,
              isPendingMember: Y,
              emoji: q,
              type: m.O.NORMAL,
              hideCount: !0,
              count: 0,
              me: !1,
              burst_count: 0,
              me_burst: !1
            })
          }),
          (0, i.jsx)(C.Z, {
            message: H,
            channel: B,
            disableReactionCreates: !0,
            disableReactionUpdates: V,
            isLurking: W,
            isGuest: z,
            isPendingMember: Y,
            maxReactions: O,
            className: b.reactions,
            useChatFontScaling: !1,
            isForumToolbar: !0,
            forceHideReactionCreates: !0
          }),
          !F && (0, i.jsx)(f.X, {
            type: m.O.NORMAL,
            message: H,
            channel: B,
            useChatFontScaling: !1,
            className: b.addReactButton,
            isForumToolbar: !0,
            children: !ee && M.Z.Messages.FORUM_REACT_TO_POST
          })
        ]
      }),
      (0, i.jsxs)('div', {
        className: b.buttons,
        children: [
          (0, i.jsx)(c.Tooltip, {
            text: M.Z.Messages.FORUM_FOLLOW_TOOLTIP,
            children: e => (0, i.jsxs)(c.Button, {
              ...e,
              look: c.Button.Looks.BLANK,
              size: c.Button.Sizes.SMALL,
              onClick: et,
              className: b.button,
              innerClassName: s()(b.buttonInner, {
                [b.active]: G
              }),
              children: [
                (0, i.jsx)(ei, {
                  size: 'xs',
                  color: 'currentColor'
                }),
                G ? M.Z.Messages.FORUM_FOLLOWING_POST : M.Z.Messages.FOLLOW
              ]
            })
          }),
          (0, i.jsx)(c.Tooltip, {
            text: M.Z.Messages.COPY_LINK,
            children: e => (0, i.jsxs)(c.Button, {
              ...e,
              look: c.Button.Looks.BLANK,
              size: c.Button.Sizes.SMALL,
              onClick: en,
              className: b.button,
              innerClassName: b.buttonInner,
              children: [
                U ? (0, i.jsx)(c.CheckmarkLargeIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 16,
                  height: 16
                }) : (0, i.jsx)(c.LinkIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 16,
                  height: 16
                }),
                U ? M.Z.Messages.COPIED : null
              ]
            })
          })
        ]
      })
    ]
  }),
  X && (0, i.jsx)(p.Z, {
    threadId: t
  }),
  (0, i.jsx)(E.Z, {
    channel: B,
    isLastItem: l
  })
]
  });
}