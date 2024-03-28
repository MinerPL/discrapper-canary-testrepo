"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
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
  v = n("263704"),
  N = n("757698"),
  x = n("934415"),
  M = n("456269"),
  R = n("109590"),
  L = n("228392"),
  y = n("281301"),
  O = n("981631"),
  j = n("689938"),
  P = n("61226"),
  D = n("903380");

function b(e) {
  let {
    postId: t,
    isFirstMessage: n,
    isLastItem: s = !1,
    parentChannelId: b
  } = e, {
    ref: U,
    width: F
  } = (0, d.default)(), [w, k] = l.useState(3), [H, B] = l.useState(!n), [G, V] = (0, c.default)(!1, 2e3), W = (0, o.useStateFromStores)([I.default], () => I.default.getChannel(t), [t]), {
    firstMessage: Y
  } = (0, R.useFirstForumPostMessage)(W), z = (0, o.useStateFromStores)([_.default], () => _.default.hasJoined(t)), {
    disableReactionUpdates: Z,
    disableReactionCreates: K,
    isLurking: X,
    isGuest: q,
    isPendingMember: Q
  } = (0, p.default)(W), J = (0, y.useForumActivityExperiment)(null == W ? void 0 : W.guild_id), $ = (0, o.useStateFromStores)([I.default], () => I.default.getChannel(b)), ee = (0, M.useDefaultReactionEmoji)($), et = (0, o.useStateFromStores)([f.default], () => f.default.shouldDisplayPrompt(t) && !0 === n, [t, n]), en = l.useCallback(e => {
    let t = e[0];
    if (null != t && n) {
      let e = t.intersectionRect,
        n = t.boundingClientRect;
      B((e.bottom - e.top) / (n.bottom - n.top) < 1)
    }
  }, [n]);
  l.useLayoutEffect(() => {
    let e = U.current;
    if (null == e || !n) return;
    let t = new IntersectionObserver(en, {
      threshold: 1
    });
    return t.observe(e), () => {
      t.disconnect()
    }
  });
  let [ea, el] = l.useState(!0);
  if (l.useEffect(() => {
      if (null != F) k(Math.floor((F - 280) / 58)), el(!1)
    }, [F]), null == W || null == Y) return null;
  let es = Y.reactions.length > 0,
    ei = () => {
      z ? T.default.leaveThread(W, "Forum Toolbar") : T.default.joinThread(W, "Forum Toolbar")
    },
    er = () => {
      (0, L.trackForumPostLinkCopied)({
        postId: W.id,
        location: {
          section: O.AnalyticsSections.CHANNEL_HEADER
        }
      }), (0, r.copy)((0, x.getChannelLinkToCopy)(W, $)), V(!0)
    },
    eo = z ? v.default : A.default;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(P.container, {
        [P.header]: H
      }),
      ref: U,
      children: [(0, a.jsxs)("div", {
        className: i()(P.reactButtons, {
          [P.loading]: ea
        }),
        children: [!es && !K && null != ee && (0, a.jsx)("div", {
          className: D.reactions,
          children: (0, a.jsx)(S.Reaction, {
            message: Y,
            readOnly: !1,
            useChatFontScaling: !1,
            isLurking: X,
            isGuest: q,
            isPendingMember: Q,
            emoji: ee,
            type: m.ReactionTypes.NORMAL,
            hideCount: !0,
            count: 0,
            me: !1,
            burst_count: 0,
            me_burst: !1
          })
        }), (0, a.jsx)(g.default, {
          message: Y,
          channel: W,
          disableReactionCreates: !J || K,
          disableReactionUpdates: Z,
          isLurking: X,
          isGuest: q,
          isPendingMember: Q,
          maxReactions: w,
          className: P.reactions,
          useChatFontScaling: !1,
          isForumToolbar: !0,
          forceHideReactionCreates: !0
        }), !K && (0, a.jsx)(E.ButtonAddReaction, {
          type: m.ReactionTypes.NORMAL,
          message: Y,
          channel: W,
          useChatFontScaling: !1,
          className: P.addReactButton,
          isForumToolbar: !0,
          children: !es && j.default.Messages.FORUM_REACT_TO_POST
        })]
      }), (0, a.jsxs)("div", {
        className: P.buttons,
        children: [(0, a.jsx)(u.Tooltip, {
          text: j.default.Messages.FORUM_FOLLOW_TOOLTIP,
          children: e => (0, a.jsxs)(u.Button, {
            ...e,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.SMALL,
            onClick: ei,
            className: P.button,
            innerClassName: i()(P.buttonInner, {
              [P.active]: z
            }),
            children: [(0, a.jsx)(eo, {
              width: 16,
              height: 16
            }), z ? j.default.Messages.FORUM_FOLLOWING_POST : j.default.Messages.FOLLOW]
          })
        }), (0, a.jsx)(u.Tooltip, {
          text: j.default.Messages.COPY_LINK,
          children: e => (0, a.jsxs)(u.Button, {
            ...e,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.SMALL,
            onClick: er,
            className: P.button,
            innerClassName: P.buttonInner,
            children: [G ? (0, a.jsx)(v.default, {
              width: 16,
              height: 16
            }) : (0, a.jsx)(N.default, {
              width: 16,
              height: 16
            }), G ? j.default.Messages.COPIED : null]
          })
        })]
      })]
    }), et && (0, a.jsx)(h.default, {
      threadId: t
    }), (0, a.jsx)(C.default, {
      channel: W,
      isLastItem: s
    })]
  })
}