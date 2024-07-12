n.d(t, {
  Z: function() {
return A;
  }
});
var i, a, s = n(735250),
  r = n(470079),
  l = n(120356),
  o = n.n(l),
  c = n(468194),
  d = n(481060),
  u = n(904245),
  _ = n(596454),
  E = n(377171),
  I = n(702346),
  m = n(809026),
  T = n(139256),
  h = n(489887),
  N = n(689938),
  f = n(619260);

function p() {
  return (0, s.jsx)('svg', {
width: '24',
height: '24',
viewBox: '0 0 24 24',
fill: E.Z.INTERACTIVE_NORMAL,
'aria-hidden': !0,
children: (0, s.jsx)('path', {
  'fill-rule': 'evenodd',
  'clip-rule': 'evenodd',
  d: 'M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.70711 9.29289C5.31658 8.90237 4.68342 8.90237 4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L5.08579 11.5L4.29289 12.2929C3.90237 12.6834 3.90237 13.3166 4.29289 13.7071C4.68342 14.0976 5.31658 14.0976 5.70711 13.7071L6.5 12.9142L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.91421 11.5L8.70711 10.7071C9.09763 10.3166 9.09763 9.68342 8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289L6.5 10.0858L5.70711 9.29289ZM15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L17.5 10.0858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L18.9142 11.5L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L17.5 12.9142L16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.0858 11.5L15.2929 10.7071C14.9024 10.3166 14.9024 9.68342 15.2929 9.29289ZM9.08869 17.5563C8.78148 18.0152 8.16038 18.1382 7.70142 17.831C7.24247 17.5238 7.11947 16.9027 7.42669 16.4437C8.41166 14.9723 10.092 14 11.9999 14C13.9078 14 15.5881 14.9723 16.5731 16.4437C16.8803 16.9027 16.7573 17.5238 16.2984 17.831C15.8394 18.1382 15.2183 18.0152 14.9111 17.5563C14.2815 16.6158 13.2124 16 11.9999 16C10.7874 16 9.71825 16.6158 9.08869 17.5563Z',
  fill: 'currentColor'
})
  });
}

function C(e) {
  let t, {
hasNoVotes: n,
victorEmoji: i
  } = e;
  if (n)
t = (0, s.jsx)(p, {});
  else if (null != i) {
let e = '' !== i.name ? i.name : i.displayName;
t = (0, s.jsx)(_.Z, {
  emojiId: i.id,
  emojiName: e,
  animated: i.animated
});
  }
  return null != t ? (0, s.jsx)('div', {
className: f.imageContainer,
children: t
  }) : null;
}
(i = a || (a = {})).NO_VOTES = 'NO_VOTES', i.VICTOR = 'VICTOR', i.TIE = 'TIE';

function g(e) {
  let t, {
type: n,
...i
  } = e;
  switch (n) {
case 'NO_VOTES':
  t = (0, s.jsx)(d.Text, {
    variant: 'text-sm/semibold',
    color: 'text-normal',
    scaleFontToUserSetting: !0,
    children: N.Z.Messages.POLL_RESULT_NO_VOTERS
  });
  break;
case 'VICTOR':
  let {
    victorAnswerText: a,
      victorVotePercentage: r
  } = i;
  t = (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsxs)('div', {
        className: f.victorAnswer,
        children: [
          (0, s.jsx)(d.Text, {
            variant: 'text-sm/semibold',
            color: 'text-normal',
            className: f.victorAnswerText,
            scaleFontToUserSetting: !0,
            children: a
          }),
          (0, s.jsx)(T.ZY, {
            size: 16,
            className: f.victorIcon,
            isVictor: !0,
            isExpired: !0
          })
        ]
      }),
      (0, s.jsxs)(d.Text, {
        variant: 'text-xs/medium',
        color: 'input-placeholder-text',
        scaleFontToUserSetting: !0,
        children: [
          N.Z.Messages.POLL_RESULT_WINNING,
          ' \u2022 ',
          r,
          '%'
        ]
      })
    ]
  });
  break;
case 'TIE':
  let {
    tiedVotePercentage: l
  } = i;
  t = (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(d.Text, {
        variant: 'text-sm/semibold',
        color: 'text-normal',
        scaleFontToUserSetting: !0,
        children: N.Z.Messages.POLL_RESULT_TIED
      }),
      (0, s.jsxs)(d.Text, {
        variant: 'text-xs/medium',
        color: 'input-placeholder-text',
        scaleFontToUserSetting: !0,
        children: [
          l,
          '%'
        ]
      })
    ]
  });
  }
  return (0, s.jsx)('div', {
className: f.description,
children: t
  });
}

function S(e) {
  let {
className: t,
data: n,
onClickPollLink: i
  } = e, a = r.useMemo(() => function(e) {
if (0 === e.totalVotes)
  return {
    type: 'NO_VOTES'
  };
let t = null != e.victorAnswerId,
  n = e.totalVotes > 0 ? Math.round(e.victorAnswerVotes / e.totalVotes * 100) : 0;
return t ? {
  type: 'VICTOR',
  victorAnswerText: e.victorAnswerText,
  victorVotePercentage: n
} : {
  type: 'TIE',
  tiedVotePercentage: n
};
  }(n), [n]);
  return (0, s.jsxs)('div', {
className: o()(f.container, t),
children: [
  (0, s.jsx)(C, {
    hasNoVotes: 'NO_VOTES' === a.type,
    victorEmoji: n.victorEmoji
  }),
  (0, s.jsx)(g, {
    ...a
  }),
  null != i && (0, s.jsx)(d.Button, {
    className: f.button,
    size: d.Button.Sizes.TINY,
    onClick: i,
    color: d.Button.Colors.PRIMARY,
    children: (0, s.jsx)(d.Text, {
      variant: 'text-sm/medium',
      color: 'none',
      scaleFontToUserSetting: !0,
      children: N.Z.Messages.POLL_RESULT_VIEW_POLL
    })
  })
]
  });
}

function A(e) {
  var t;
  let {
message: n,
compact: i,
disableInteraction: a = !1
  } = e, l = n.embeds[0], o = r.useMemo(() => (0, m.Z)(l), [l]), _ = (0, c.aF)(null !== (t = null == o ? void 0 : o.questionText) && void 0 !== t ? t : '', h.Dv), E = n.messageReference, T = r.useCallback(() => {
null != E && u.Z.jumpToMessage({
  channelId: E.channel_id,
  messageId: E.message_id,
  flash: !0,
  returnMessageId: n.id
});
  }, [
n.id,
E
  ]);
  return null == o ? null : (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(I.Z, {
    iconNode: (0, s.jsx)(d.PollsIcon, {
      size: 'xs'
    }),
    timestamp: n.timestamp,
    compact: i,
    children: N.Z.Messages.POLL_RESULT_MESSAGE_HEADER.format({
      title: _,
      titleOnClick: T
    })
  }),
  (0, s.jsx)(S, {
    className: f.embed,
    data: o,
    onClickPollLink: a ? void 0 : T
  })
]
  });
}