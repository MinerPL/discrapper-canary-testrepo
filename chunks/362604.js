n.d(t, {
  Z: function() {
return f;
  }
}), n(47120), n(536091);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(623292),
  d = n(926491),
  u = n(419922),
  _ = n(702346),
  E = n(626135),
  I = n(585483),
  m = n(115610),
  T = n(981631),
  h = n(689938),
  N = n(296361);

function f(e) {
  let {
message: t,
channel: s,
compact: f
  } = e, p = (0, l.Wu)([d.Z], () => Array.from(d.Z.getAllGuildStickers().values()).flat()).slice(0, 20), [C, g] = a.useState(null);
  return (a.useEffect(() => {
let e = setInterval(() => {
  p.length > 0 && g(p[Math.floor(Math.random() * p.length)]);
}, 500);
return () => clearInterval(e);
  }, [p]), null == s.guild_id) ? null : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(_.Z, {
    className: r()(N.mainContainer, {
      [N.compact]: f
    }),
    icon: n(570111),
    compact: f,
    children: (0, i.jsx)('div', {
      className: r()(N.__invalid_content, {
        [N.compact]: f
      }),
      children: (0, i.jsx)('div', {
        className: r()(N.__invalid_messageContent, {
          [N.compact]: f
        }),
        children: '' !== t.content ? t.content : h.Z.Messages.DEADCHAT_PROMPT_1
      })
    })
  }),
  (0, i.jsxs)('div', {
    className: N.actions,
    children: [
      (0, i.jsx)(o.TooltipContainer, {
        text: h.Z.Messages.CHANNEL_PROMPT_UPLOAD_IMAGE_CTA,
        children: (0, i.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            E.default.track(T.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: s.id,
              guild_id: s.guild_id,
              action_type: 'upload_file'
            }), I.S.dispatch(T.CkL.UPLOAD_FILE), (0, c.fE)({
              message: t,
              channel: s,
              shouldMention: !0
            });
          },
          children: (0, i.jsx)(o.ImagePlusIcon, {
            size: 'md',
            color: 'currentColor'
          })
        })
      }),
      (0, i.jsx)(o.TooltipContainer, {
        text: h.Z.Messages.CHANNEL_PROMPT_RANDOM_STICKER_CTA,
        children: (0, i.jsx)(o.Button, {
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            E.default.track(T.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: s.id,
              guild_id: s.guild_id,
              action_type: 'sticker'
            }), (0, m.O)(t.id, s);
          },
          children: null != C ? (0, i.jsx)(u.ZP, {
            size: 32,
            sticker: C
          }) : (0, i.jsx)(o.ReactionIcon, {
            size: 'md',
            color: 'currentColor'
          })
        })
      })
    ]
  })
]
  });
}