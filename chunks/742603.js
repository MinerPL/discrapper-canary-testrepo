n.d(t, {
  Z: function() {
return V;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(442837),
  r = n(481060),
  o = n(99690),
  c = n(40851),
  u = n(657305),
  d = n(835473),
  h = n(12498),
  m = n(933557),
  p = n(471445),
  _ = n(925329),
  f = n(554747),
  E = n(854698),
  g = n(897669),
  C = n(665149),
  I = n(984370),
  x = n(910611),
  T = n(454585),
  N = n(134483),
  v = n(210975),
  S = n(809244),
  Z = n(618158),
  A = n(792125),
  M = n(358221),
  b = n(362721),
  R = n(887012),
  j = n(613548),
  L = n(221888),
  P = n(339340),
  O = n(354459),
  y = n(981631),
  D = n(231338),
  k = n(689938),
  U = n(818479),
  w = n(910212);

function B(e) {
  let {
focusedParticipant: t,
channel: n
  } = e, a = (0, c.bp)(), s = (0, l.e7)([M.Z], () => M.Z.getLayout(n.id, a));
  return (0, i.jsx)(Z.Z, {
children: (0, i.jsx)(L.Z, {
  className: U.participants,
  participant: t,
  maxVisibleUsers: 5,
  guildId: n.getGuildId(),
  channelId: n.id,
  disableInteraction: a === y.IlC.POPOUT || s === y.AEg.FULL_SCREEN
})
  });
}

function H(e) {
  let {
user: t,
channel: n,
stream: a,
color: s
  } = e, l = (0, S.Z)(n, t, a);
  return null == t || null == a ? null : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(o.Z, {
    className: U.avatar,
    size: r.AvatarSizes.SIZE_24,
    user: t,
    animate: !1
  }),
  (0, i.jsx)(r.Text, {
    className: U.playingText,
    variant: 'text-md/medium',
    color: s,
    children: l
  })
]
  });
}

function G(e) {
  let t, {
  focusedApplication: n,
  focusedParticipant: a,
  channel: s
} = e,
l = (0, R.Z)(s, !0),
o = (0, f.qY)(s.id),
c = null != o ? (0, E.DK)(o) : null,
d = null != o;
  if ((null == a ? void 0 : a.type) === O.fO.ACTIVITY)
null != n && (t = (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)(C.ZP.Divider, {
      className: U.divider
    }),
    (0, i.jsx)(_.Z, {
      game: n,
      className: U.activityIcon
    }),
    (0, i.jsx)(r.Text, {
      className: U.playingText,
      variant: 'text-md/normal',
      color: 'none',
      children: (0, u.Z)(n.name)
    }),
    l && (0, i.jsx)(B, {
      channel: s,
      focusedParticipant: a
    })
  ]
}));
  else if ((null == a ? void 0 : a.type) === O.fO.STREAM) {
let e = a.user,
  n = a.stream;
t = (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)(C.ZP.Divider, {
      className: U.divider
    }),
    (0, i.jsx)(H, {
      user: e,
      channel: s,
      stream: n,
      color: l ? 'header-primary' : 'none'
    }),
    l && (0, i.jsx)(B, {
      channel: s,
      focusedParticipant: a
    })
  ]
});
  } else
d && (t = (0, i.jsx)(g.Z, {
  guildEvent: o,
  recurrenceId: c
}));
  return (0, i.jsx)('div', {
className: U.container,
children: t
  });
}

function V(e) {
  let {
channel: t,
guild: a,
appContext: o,
inCall: c,
isChatOpen: u,
exitFullScreen: _
  } = e, {
focusedParticipant: f
  } = (0, l.cj)([M.Z], () => ({
focusedParticipant: M.Z.getSelectedParticipant(t.id),
participantsOpen: M.Z.getParticipantsOpen(t.id)
  }), [t.id]), E = (0, m.ZP)(t), g = (0, p.KS)(t), [S] = (0, d.Z)((null == f ? void 0 : f.type) === O.fO.ACTIVITY ? [f.id] : []), Z = k.Z.Messages.VOICE_CHANNEL;
  t.isDM() ? Z = k.Z.Messages.DM : t.isGroupDM() && (Z = k.Z.Messages.GROUP_DM);
  let R = (0, l.e7)([h.Z], () => h.Z.getChannelStatus(t)),
L = t.isGuildVoice() && c && null != R && R.length > 0,
B = (0, b.Z)(t),
H = L ? (0, i.jsx)(r.Tooltip, {
  text: k.Z.Messages.VOICE_CHANNEL_SET_STATUS,
  delay: 500,
  position: 'bottom',
  shouldShow: B,
  children: e => (0, i.jsxs)(r.Clickable, {
    ...e,
    className: s()(U.channelStatusClickable, {
      [U.hoverable]: B
    }),
    onClick: B ? V : void 0,
    children: [
      (0, i.jsx)(r.Text, {
        variant: 'text-xs/normal',
        className: s()(U.channelStatus, w.markup, {
          [U.hoverable]: B
        }),
        children: T.Z.parseVoiceChannelStatus(R, !0, {
          channelId: t.id
        })
      }),
      B && (0, i.jsx)(r.PencilIcon, {
        size: 'custom',
        color: 'currentColor',
        className: s()(U.pencilIcon, U.hoverable),
        width: 14,
        height: 14
      })
    ]
  })
}) : null;

  function V() {
(0, r.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.resolve().then(n.bind(n, 339340));
  return n => (0, i.jsx)(e, {
    channel: t,
    ...n
  });
}, {
  modalKey: P.VOICE_CHANNEL_STATUS_MODAL_KEY
});
  }
  let F = (0, v.m$)({
channelId: t.id,
location: 'ChannelCallHeader'
  });
  return (0, i.jsxs)('div', {
className: U.subtitleContainer,
children: [
  (0, i.jsxs)(C.ZP, {
    onDoubleClick: I.O,
    transparent: !0,
    className: (0, A.Q)(D.BR.DARK),
    childrenBottom: H,
    toolbar: (0, i.jsx)(j.Z, {
      inPopout: o === y.IlC.POPOUT,
      channel: t,
      appContext: o,
      inCall: c,
      isChatOpen: u,
      exitFullScreen: _
    }),
    children: [
      null != g ? (0, i.jsx)(C.ZP.Icon, {
        icon: g,
        disabled: !0,
        'aria-label': Z
      }) : null,
      (0, i.jsx)(C.ZP.Title, {
        children: (0, i.jsxs)(i.Fragment, {
          children: [
            E,
            F && (0, i.jsx)(r.Tooltip, {
              text: k.Z.Messages.E2EE_CALL_VERIFIED_TOOLTIP,
              children: e => (0, i.jsx)(r.ShieldLockIcon, {
                ...e,
                size: 'xxs',
                'aria-label': k.Z.Messages.E2EE_CALL_VERIFIED_A11Y,
                color: r.tokens.colors.INTERACTIVE_NORMAL,
                className: U.secureFramesIcon
              })
            })
          ]
        })
      }),
      (0, i.jsx)(x.TS, {
        channel: t,
        guild: a
      }),
      (0, i.jsx)(G, {
        focusedApplication: S,
        focusedParticipant: f,
        channel: t
      })
    ]
  }),
  (0, i.jsx)(N.Z, {
    channelId: t.id
  })
]
  });
}