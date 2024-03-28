"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("47120"), n("536091");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("623292"),
  d = n("926491"),
  c = n("419922"),
  f = n("642113"),
  E = n("180277"),
  _ = n("702346"),
  T = n("626135"),
  m = n("585483"),
  I = n("115610"),
  p = n("981631"),
  h = n("689938"),
  N = n("138558");

function S(e) {
  let {
    message: t,
    channel: l,
    compact: S
  } = e, C = (0, r.useStateFromStoresArray)([d.default], () => Array.from(d.default.getAllGuildStickers().values()).flat()).slice(0, 20), [A, g] = a.useState(null);
  return (a.useEffect(() => {
    let e = setInterval(() => {
      C.length > 0 && g(C[Math.floor(Math.random() * C.length)])
    }, 500);
    return () => clearInterval(e)
  }, [C]), null == l.guild_id) ? null : (0, s.jsxs)("div", {
    children: [(0, s.jsx)(_.default, {
      className: i()(N.mainContainer, {
        [N.compact]: S
      }),
      icon: n("570111"),
      compact: S,
      children: (0, s.jsx)("div", {
        className: i()(N.__invalid_content, {
          [N.compact]: S
        }),
        children: (0, s.jsx)("div", {
          className: i()(N.__invalid_messageContent, {
            [N.compact]: S
          }),
          children: "" !== t.content ? t.content : h.default.Messages.DEADCHAT_PROMPT_1
        })
      })
    }), (0, s.jsxs)("div", {
      className: N.actions,
      children: [(0, s.jsx)(o.TooltipContainer, {
        text: h.default.Messages.CHANNEL_PROMPT_UPLOAD_IMAGE_CTA,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            T.default.track(p.AnalyticEvents.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: l.id,
              guild_id: l.guild_id,
              action_type: "upload_file"
            }), m.ComponentDispatch.dispatch(p.ComponentActions.UPLOAD_FILE), (0, u.createPendingReply)({
              message: t,
              channel: l,
              shouldMention: !0
            })
          },
          children: (0, s.jsx)(E.default, {})
        })
      }), (0, s.jsx)(o.TooltipContainer, {
        text: h.default.Messages.CHANNEL_PROMPT_RANDOM_STICKER_CTA,
        children: (0, s.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            T.default.track(p.AnalyticEvents.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: l.id,
              guild_id: l.guild_id,
              action_type: "sticker"
            }), (0, I.sendRandomStickerOrEmoji)(t.id, l)
          },
          children: null != A ? (0, s.jsx)(c.default, {
            size: 32,
            sticker: A
          }) : (0, s.jsx)(f.default, {})
        })
      })]
    })]
  })
}