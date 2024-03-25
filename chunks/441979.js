"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007"), n("834022");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("529805"),
  d = n("364685"),
  c = n("41170"),
  E = n("46829"),
  f = n("840817"),
  _ = n("304198"),
  T = n("599110"),
  I = n("659500"),
  m = n("315176"),
  N = n("49111"),
  p = n("782340"),
  S = n("232979");

function A(e) {
  let {
    message: t,
    channel: l,
    compact: A
  } = e, C = (0, r.useStateFromStoresArray)([d.default], () => {
    let e = d.default.getAllGuildStickers();
    return Array.from(e.values()).flat()
  }), h = C.slice(0, 20), [g, M] = a.useState(null);
  return (a.useEffect(() => {
    let e = setInterval(() => {
      h.length > 0 && M(h[Math.floor(Math.random() * h.length)])
    }, 500);
    return () => clearInterval(e)
  }, [h]), null == l.guild_id) ? null : (0, s.jsxs)("div", {
    children: [(0, s.jsx)(_.default, {
      className: i(S.mainContainer, {
        [S.compact]: A
      }),
      icon: n("127067"),
      compact: A,
      children: (0, s.jsx)("div", {
        className: i(S.content, {
          [S.compact]: A
        }),
        children: (0, s.jsx)("div", {
          className: i(S.messageContent, {
            [S.compact]: A
          }),
          children: "" !== t.content ? t.content : p.default.Messages.DEADCHAT_PROMPT_1
        })
      })
    }), (0, s.jsxs)("div", {
      className: S.actions,
      children: [(0, s.jsx)(o.TooltipContainer, {
        text: p.default.Messages.CHANNEL_PROMPT_UPLOAD_IMAGE_CTA,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            T.default.track(N.AnalyticEvents.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: l.id,
              guild_id: l.guild_id,
              action_type: "upload_file"
            }), I.ComponentDispatch.dispatch(N.ComponentActions.UPLOAD_FILE), (0, u.createPendingReply)({
              message: t,
              channel: l,
              shouldMention: !0
            })
          },
          children: (0, s.jsx)(f.default, {})
        })
      }), (0, s.jsx)(o.TooltipContainer, {
        text: p.default.Messages.CHANNEL_PROMPT_RANDOM_STICKER_CTA,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            T.default.track(N.AnalyticEvents.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: l.id,
              guild_id: l.guild_id,
              action_type: "sticker"
            }), (0, m.sendRandomStickerOrEmoji)(t.id, l)
          },
          children: null != g ? (0, s.jsx)(c.default, {
            size: 32,
            sticker: g
          }) : (0, s.jsx)(E.default, {})
        })
      })]
    })]
  })
}