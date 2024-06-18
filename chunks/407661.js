"use strict";
n.d(t, {
  Z: function() {
    return O
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(367907),
  _ = n(739566),
  d = n(623292),
  c = n(703656),
  E = n(665906),
  I = n(488131),
  T = n(375954),
  h = n(36082),
  S = n(696202),
  f = n(981631),
  N = n(689938),
  A = n(98482);

function m(e) {
  let {
    channel: t,
    message: n,
    replyChainLength: s
  } = e;
  return r.useEffect(() => {
    (0, u.yw)(f.rMx.THREAD_NUDGE_SHOWN, {
      type: "Reply Chain (".concat(3, ")"),
      reply_chain_length: s + 1,
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t]), (0, i.jsxs)(l.Clickable, {
    onClick: function() {
      (0, d.A6)(t.id), (0, I.R6)(t, n, "Reply Chain Nudge")
    },
    className: A.threadSuggestionBar,
    focusProps: {
      offset: {
        right: -4,
        left: -4
      }
    },
    children: [(0, i.jsx)(l.Text, {
      color: "header-secondary",
      className: A.text,
      variant: "text-sm/normal",
      children: N.Z.Messages.THREAD_REPLY_SUGGESTION.format({
        count: Math.min(10, s + 1)
      })
    }), (0, i.jsx)(l.Text, {
      color: "text-link",
      className: A.createThreadButton,
      variant: "text-sm/semibold",
      children: N.Z.Messages.CREATE_THREAD
    })]
  })
}

function O(e) {
  let {
    reply: t,
    chatInputType: n
  } = e, {
    channel: r,
    message: s,
    shouldMention: u,
    showMentionToggle: I
  } = t, {
    nick: O,
    colorString: R,
    colorRoleName: C
  } = (0, _.ZP)(s), p = function(e, t) {
    let n = e.id,
      i = t.id;
    return (0, a.e7)([T.Z], () => {
      let e = i;
      for (let t = 0; t < 10; t++) {
        let i = T.Z.getMessage(n, e);
        if ((null == i ? void 0 : i.type) !== f.uaV.REPLY || null == i.messageReference) return t;
        e = i.messageReference.message_id
      }
      return 10
    }, [n, i])
  }(r, s), g = (0, E.NE)(r, s), L = n.showThreadPromptOnReply && p >= 2 && g;

  function v(e) {
    e.stopPropagation(), (0, d.qx)(r.id, !u)
  }
  return (0, i.jsx)("div", {
    className: A.clipContainer,
    children: (0, i.jsxs)("div", {
      className: A.container,
      children: [(0, i.jsxs)("div", {
        className: A.replyBar,
        children: [(0, i.jsx)(l.Clickable, {
          onClick: () => (0, c.uL)(f.Z5c.CHANNEL(r.getGuildId(), r.id, s.id)),
          focusProps: {
            offset: {
              top: -8,
              right: -4,
              bottom: -8,
              left: -4
            }
          },
          children: (0, i.jsx)(l.Text, {
            color: "header-secondary",
            className: o()(A.text, A.replyLabel),
            variant: "text-sm/normal",
            children: N.Z.Messages.REPLYING_TO.format({
              userHook: (e, t) => (0, i.jsx)(l.NameWithRole, {
                className: A.name,
                name: O,
                color: R,
                roleName: C
              }, t)
            })
          })
        }), (0, i.jsxs)("div", {
          className: A.actions,
          children: [I && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Tooltip, {
              text: u ? N.Z.Messages.REPLY_MENTION_ON_TOOLTIP : N.Z.Messages.REPLY_MENTION_OFF_TOOLTIP,
              children: e => {
                let {
                  onMouseEnter: t,
                  onMouseLeave: n,
                  onFocus: r,
                  onBlur: s
                } = e;
                return (0, i.jsx)(l.Clickable, {
                  role: "switch",
                  "aria-checked": u,
                  onClick: v,
                  onMouseEnter: t,
                  onMouseLeave: n,
                  onFocus: r,
                  onBlur: s,
                  children: (0, i.jsxs)(l.Text, {
                    variant: "text-sm/bold",
                    color: u ? "text-link" : "text-muted",
                    className: A.mentionButton,
                    children: [(0, i.jsx)(h.Z, {
                      "aria-label": N.Z.Messages.MENTION,
                      className: A.mentionIcon
                    }), u ? N.Z.Messages.REPLY_MENTION_ON : N.Z.Messages.REPLY_MENTION_OFF]
                  })
                })
              }
            }), (0, i.jsx)("div", {
              className: A.separator,
              "aria-hidden": !0
            })]
          }), (0, i.jsx)(l.Clickable, {
            className: A.closeButton,
            onClick: function(e) {
              e.stopPropagation(), (0, d.A6)(r.id)
            },
            children: (0, i.jsx)(S.Z, {
              className: A.closeIcon
            })
          })]
        })]
      }), L && (0, i.jsx)(m, {
        channel: r,
        message: s,
        replyChainLength: p
      })]
    })
  })
}