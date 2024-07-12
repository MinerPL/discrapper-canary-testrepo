n.d(t, {
  Z: function() {
return g;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(442837),
  l = n(481060),
  u = n(367907),
  c = n(739566),
  d = n(623292),
  _ = n(703656),
  E = n(665906),
  f = n(488131),
  h = n(375954),
  p = n(981631),
  m = n(689938),
  I = n(903192);

function T(e) {
  let {
channel: t,
message: n,
replyChainLength: a
  } = e;
  return i.useEffect(() => {
(0, u.yw)(p.rMx.THREAD_NUDGE_SHOWN, {
  type: 'Reply Chain ('.concat(3, ')'),
  reply_chain_length: a + 1,
  channel_id: t.id,
  guild_id: t.guild_id
});
  }, [t]), (0, r.jsxs)(l.Clickable, {
onClick: function() {
  (0, d.A6)(t.id), (0, f.R6)(t, n, 'Reply Chain Nudge');
},
className: I.threadSuggestionBar,
focusProps: {
  offset: {
    right: -4,
    left: -4
  }
},
children: [
  (0, r.jsx)(l.Text, {
    color: 'header-secondary',
    className: I.text,
    variant: 'text-sm/normal',
    children: m.Z.Messages.THREAD_REPLY_SUGGESTION.format({
      count: Math.min(10, a + 1)
    })
  }),
  (0, r.jsx)(l.Text, {
    color: 'text-link',
    className: I.createThreadButton,
    variant: 'text-sm/semibold',
    children: m.Z.Messages.CREATE_THREAD
  })
]
  });
}

function g(e) {
  let {
reply: t,
chatInputType: n
  } = e, {
channel: i,
message: a,
shouldMention: u,
showMentionToggle: f
  } = t, {
nick: g,
colorString: S,
colorRoleName: A
  } = (0, c.ZP)(a), N = function(e, t) {
let n = e.id,
  r = t.id;
return (0, s.e7)([h.Z], () => {
  let e = r;
  for (let t = 0; t < 10; t++) {
    let r = h.Z.getMessage(n, e);
    if ((null == r ? void 0 : r.type) !== p.uaV.REPLY || null == r.messageReference)
      return t;
    e = r.messageReference.message_id;
  }
  return 10;
}, [
  n,
  r
]);
  }(i, a), v = (0, E.NE)(i, a), O = n.showThreadPromptOnReply && N >= 2 && v;

  function R(e) {
e.stopPropagation(), (0, d.qx)(i.id, !u);
  }
  return (0, r.jsx)('div', {
className: I.clipContainer,
children: (0, r.jsxs)('div', {
  className: I.container,
  children: [
    (0, r.jsxs)('div', {
      className: I.replyBar,
      children: [
        (0, r.jsx)(l.Clickable, {
          onClick: () => (0, _.uL)(p.Z5c.CHANNEL(i.getGuildId(), i.id, a.id)),
          focusProps: {
            offset: {
              top: -8,
              right: -4,
              bottom: -8,
              left: -4
            }
          },
          children: (0, r.jsx)(l.Text, {
            color: 'header-secondary',
            className: o()(I.text, I.replyLabel),
            variant: 'text-sm/normal',
            children: m.Z.Messages.REPLYING_TO.format({
              userHook: (e, t) => (0, r.jsx)(l.NameWithRole, {
                className: I.name,
                name: g,
                color: S,
                roleName: A
              }, t)
            })
          })
        }),
        (0, r.jsxs)('div', {
          className: I.actions,
          children: [
            f && (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(l.Tooltip, {
                  text: u ? m.Z.Messages.REPLY_MENTION_ON_TOOLTIP : m.Z.Messages.REPLY_MENTION_OFF_TOOLTIP,
                  children: e => {
                    let {
                      onMouseEnter: t,
                      onMouseLeave: n,
                      onFocus: i,
                      onBlur: a
                    } = e;
                    return (0, r.jsx)(l.Clickable, {
                      role: 'switch',
                      'aria-checked': u,
                      onClick: R,
                      onMouseEnter: t,
                      onMouseLeave: n,
                      onFocus: i,
                      onBlur: a,
                      children: (0, r.jsxs)(l.Text, {
                        variant: 'text-sm/bold',
                        color: u ? 'text-link' : 'text-muted',
                        className: I.mentionButton,
                        children: [
                          (0, r.jsx)(l.AtIcon, {
                            size: 'md',
                            color: 'currentColor',
                            'aria-label': m.Z.Messages.MENTION,
                            className: I.mentionIcon
                          }),
                          u ? m.Z.Messages.REPLY_MENTION_ON : m.Z.Messages.REPLY_MENTION_OFF
                        ]
                      })
                    });
                  }
                }),
                (0, r.jsx)('div', {
                  className: I.separator,
                  'aria-hidden': !0
                })
              ]
            }),
            (0, r.jsx)(l.Clickable, {
              className: I.closeButton,
              onClick: function(e) {
                e.stopPropagation(), (0, d.A6)(i.id);
              },
              children: (0, r.jsx)(l.CircleXIcon, {
                size: 'md',
                color: 'currentColor',
                className: I.closeIcon
              })
            })
          ]
        })
      ]
    }),
    O && (0, r.jsx)(T, {
      channel: i,
      message: a,
      replyChainLength: N
    })
  ]
})
  });
}