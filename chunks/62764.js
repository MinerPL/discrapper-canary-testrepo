"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("852229"),
  o = n("442837"),
  u = n("481060"),
  d = n("393238"),
  c = n("330726"),
  f = n("48929"),
  h = n("333535"),
  m = n("566006"),
  p = n("443877"),
  E = n("60174"),
  C = n("216337"),
  g = n("920888"),
  S = n("287151"),
  _ = n("569471"),
  T = n("346479"),
  I = n("592125"),
  A = n("808602"),
  N = n("263704"),
  v = n("757698"),
  x = n("934415"),
  M = n("456269"),
  R = n("109590"),
  L = n("228392"),
  y = n("981631"),
  O = n("689938"),
  j = n("836475"),
  P = n("254192");

function D(e) {
  let {
    postId: t,
    isFirstMessage: n,
    isLastItem: s = !1,
    parentChannelId: D
  } = e, {
    ref: b,
    width: U
  } = (0, d.default)(), [F, w] = l.useState(3), [k, H] = l.useState(!n), [B, G] = (0, c.default)(!1, 2e3), V = (0, o.useStateFromStores)([I.default], () => I.default.getChannel(t), [t]), {
    firstMessage: W
  } = (0, R.useFirstForumPostMessage)(V), Y = (0, o.useStateFromStores)([_.default], () => _.default.hasJoined(t)), {
    disableReactionUpdates: z,
    disableReactionCreates: K,
    isLurking: Z,
    isGuest: q,
    isPendingMember: X
  } = (0, p.default)(V), Q = (0, o.useStateFromStores)([I.default], () => I.default.getChannel(D)), J = (0, M.useDefaultReactionEmoji)(Q), $ = (0, o.useStateFromStores)([f.default], () => f.default.shouldDisplayPrompt(t) && !0 === n, [t, n]), ee = l.useCallback(e => {
    let t = e[0];
    if (null != t && n) {
      let e = t.intersectionRect,
        n = t.boundingClientRect;
      H((e.bottom - e.top) / (n.bottom - n.top) < 1)
    }
  }, [n]);
  l.useLayoutEffect(() => {
    let e = b.current;
    if (null == e || !n) return;
    let t = new IntersectionObserver(ee, {
      threshold: 1
    });
    return t.observe(e), () => {
      t.disconnect()
    }
  });
  let [et, en] = l.useState(!0);
  if (l.useEffect(() => {
      if (null != U) w(Math.floor((U - 280) / 58)), en(!1)
    }, [U]), null == V || null == W) return null;
  let ea = W.reactions.length > 0,
    el = () => {
      Y ? T.default.leaveThread(V, "Forum Toolbar") : T.default.joinThread(V, "Forum Toolbar")
    },
    es = () => {
      (0, L.trackForumPostLinkCopied)({
        postId: V.id,
        location: {
          section: y.AnalyticsSections.CHANNEL_HEADER
        }
      }), (0, r.copy)((0, x.getChannelLinkToCopy)(V, Q)), G(!0)
    },
    ei = Y ? N.default : A.default;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(j.container, {
        [j.header]: k
      }),
      ref: b,
      children: [(0, a.jsxs)("div", {
        className: i()(j.reactButtons, {
          [j.loading]: et
        }),
        children: [!ea && !K && null != J && (0, a.jsx)("div", {
          className: P.reactions,
          children: (0, a.jsx)(S.Reaction, {
            message: W,
            readOnly: !1,
            useChatFontScaling: !1,
            isLurking: Z,
            isGuest: q,
            isPendingMember: X,
            emoji: J,
            type: m.ReactionTypes.NORMAL,
            hideCount: !0,
            count: 0,
            me: !1,
            burst_count: 0,
            me_burst: !1
          })
        }), (0, a.jsx)(g.default, {
          message: W,
          channel: V,
          disableReactionCreates: !0,
          disableReactionUpdates: z,
          isLurking: Z,
          isGuest: q,
          isPendingMember: X,
          maxReactions: F,
          className: j.reactions,
          useChatFontScaling: !1,
          isForumToolbar: !0,
          forceHideReactionCreates: !0
        }), !K && (0, a.jsx)(E.ButtonAddReaction, {
          type: m.ReactionTypes.NORMAL,
          message: W,
          channel: V,
          useChatFontScaling: !1,
          className: j.addReactButton,
          isForumToolbar: !0,
          children: !ea && O.default.Messages.FORUM_REACT_TO_POST
        })]
      }), (0, a.jsxs)("div", {
        className: j.buttons,
        children: [(0, a.jsx)(u.Tooltip, {
          text: O.default.Messages.FORUM_FOLLOW_TOOLTIP,
          children: e => (0, a.jsxs)(u.Button, {
            ...e,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.SMALL,
            onClick: el,
            className: j.button,
            innerClassName: i()(j.buttonInner, {
              [j.active]: Y
            }),
            children: [(0, a.jsx)(ei, {
              width: 16,
              height: 16
            }), Y ? O.default.Messages.FORUM_FOLLOWING_POST : O.default.Messages.FOLLOW]
          })
        }), (0, a.jsx)(u.Tooltip, {
          text: O.default.Messages.COPY_LINK,
          children: e => (0, a.jsxs)(u.Button, {
            ...e,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.SMALL,
            onClick: es,
            className: j.button,
            innerClassName: j.buttonInner,
            children: [B ? (0, a.jsx)(N.default, {
              width: 16,
              height: 16
            }) : (0, a.jsx)(v.default, {
              width: 16,
              height: 16
            }), B ? O.default.Messages.COPIED : null]
          })
        })]
      })]
    }), $ && (0, a.jsx)(h.default, {
      threadId: t
    }), (0, a.jsx)(C.default, {
      channel: V,
      isLastItem: s
    })]
  })
}