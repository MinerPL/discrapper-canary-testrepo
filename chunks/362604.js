n.d(t, {
  Z: function() {
return C;
  }
}), n(47120), n(536091);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  o = n(481060),
  c = n(623292),
  u = n(926491),
  d = n(419922),
  _ = n(702346),
  E = n(626135),
  I = n(585483),
  m = n(115610),
  T = n(981631),
  h = n(689938),
  N = n(296361);

function C(e) {
  let {
message: t,
channel: a,
compact: C
  } = e, f = (0, l.Wu)([u.Z], () => Array.from(u.Z.getAllGuildStickers().values()).flat()).slice(0, 20), [p, g] = s.useState(null);
  return (s.useEffect(() => {
let e = setInterval(() => {
  f.length > 0 && g(f[Math.floor(Math.random() * f.length)]);
}, 500);
return () => clearInterval(e);
  }, [f]), null == a.guild_id) ? null : (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(_.Z, {
    className: r()(N.mainContainer, {
      [N.compact]: C
    }),
    icon: n(570111),
    compact: C,
    children: (0, i.jsx)('div', {
      className: r()(N.__invalid_content, {
        [N.compact]: C
      }),
      children: (0, i.jsx)('div', {
        className: r()(N.__invalid_messageContent, {
          [N.compact]: C
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
              channel_id: a.id,
              guild_id: a.guild_id,
              action_type: 'upload_file'
            }), I.S.dispatch(T.CkL.UPLOAD_FILE), (0, c.fE)({
              message: t,
              channel: a,
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
              channel_id: a.id,
              guild_id: a.guild_id,
              action_type: 'sticker'
            }), (0, m.O)(t.id, a);
          },
          children: null != p ? (0, i.jsx)(d.ZP, {
            size: 32,
            sticker: p
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