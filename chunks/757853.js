n.d(t, {
  F: function() {
return w;
  },
  G: function() {
return l;
  }
}), n(47120);
var l, a, i = n(735250),
  s = n(470079),
  r = n(120356),
  o = n.n(r),
  u = n(913527),
  c = n.n(u),
  d = n(91192),
  _ = n(442837),
  h = n(481060),
  f = n(700582),
  E = n(560361),
  g = n(724757),
  S = n(212819),
  A = n(933557),
  I = n(266076),
  p = n(810123),
  m = n(448486),
  C = n(987509),
  N = n(592125),
  L = n(430824),
  b = n(158776),
  T = n(306680),
  Z = n(699516),
  y = n(594174),
  x = n(626135),
  R = n(55935),
  v = n(823379),
  M = n(51144),
  D = n(784384),
  P = n(981631),
  O = n(490897),
  G = n(689938),
  F = n(803519);

function k(e) {
  let {
message: t,
destination: n,
rowMode: l,
icon: a,
label: r,
subLabel: u,
selected: c,
disabled: _,
onPressDestination: f,
'aria-setsize': g,
'aria-posinset': S
  } = e, A = (0, d.JA)(n.id), [I, p] = s.useState(!1), m = s.useRef(!1), C = s.useCallback(() => {
if ('send' === l) {
  p(!0), m.current = !0;
  return;
}
null == f || f(n);
  }, [
l,
f,
n
  ]), N = s.useCallback(() => {
x.default.track(P.rMx.FORWARD_ONE_TAP_VIEW, {
  channel_id: t.channel_id,
  message_id: t.id
}), m.current = !1, null == f || f(n, {
  transitionToDestination: !0,
  closeAfterSend: !0
});
  }, [
t.channel_id,
t.id,
f,
n
  ]), L = s.useCallback(() => {
p(!1), m.current = !1, x.default.track(P.rMx.FORWARD_ONE_TAP_UNDO, {
  channel_id: t.channel_id,
  message_id: t.id
});
  }, [t]);
  return (0, E.Z)(() => {
m.current && (m.current = !1, null == f || f(n, {
  transitionToDestination: !1,
  closeAfterSend: !1
}));
  }), (0, i.jsxs)(h.Clickable, {
className: o()(F.destinationRow, {
  [F.disabled]: _
}),
onClick: _ || I ? void 0 : C,
'aria-selected': c,
'aria-setsize': g,
'aria-posinset': S,
...A,
children: [
  (0, i.jsxs)('div', {
    className: F.identity,
    children: [
      (0, i.jsx)('div', {
        className: F.iconWrapper,
        children: a
      }),
      (0, i.jsxs)('div', {
        className: F.labels,
        children: [
          (0, i.jsx)(h.Text, {
            tag: 'strong',
            className: F.label,
            variant: 'text-md/semibold',
            lineClamp: 1,
            children: r
          }),
          (0, i.jsx)(h.Text, {
            className: F.subLabel,
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: u
          })
        ]
      })
    ]
  }),
  'toggle' === l && !_ && (0, i.jsx)(h.Checkbox, {
    type: h.Checkbox.Types.INVERTED,
    displayOnly: !0,
    size: 24,
    value: c,
    className: F.checkbox
  }),
  'send' === l && !_ && (0, i.jsxs)('div', {
    className: F.actions,
    children: [
      I ? (0, i.jsx)(h.Button, {
        size: h.Button.Sizes.SMALL,
        color: h.Button.Colors.PRIMARY,
        look: h.Button.Looks.LINK,
        onClick: N,
        children: G.Z.Messages.VIEW
      }) : (0, i.jsx)('div', {
        className: o()((0, h.getButtonStyle)({
          size: h.Button.Sizes.SMALL,
          color: h.Button.Colors.BRAND
        }), F.fauxButton),
        children: G.Z.Messages.SEND
      }),
      I && (0, i.jsx)(h.Button, {
        size: h.Button.Sizes.SMALL,
        color: h.Button.Colors.BRAND,
        look: h.Button.Looks.OUTLINED,
        onClick: L,
        children: G.Z.Messages.UNDO
      })
    ]
  })
]
  });
}

function U(e) {
  let {
user: t,
subLabel: n,
...l
  } = e, a = M.ZP.useName(t), s = M.ZP.useUserTag(t, {
decoration: 'never'
  }), r = (0, _.e7)([Z.Z], () => Z.Z.getNickname(t.id)), o = (0, _.e7)([b.Z], () => b.Z.getStatus(t.id));
  return (0, i.jsx)(k, {
...l,
icon: (0, i.jsx)(f.Z, {
  'aria-hidden': !0,
  size: h.AvatarSizes.SIZE_32,
  user: t,
  status: o
}),
label: null != r ? r : a,
subLabel: null != n ? n : s
  });
}

function j(e) {
  let {
channel: t,
subLabel: n,
...l
  } = e, a = (0, A.ZP)(t), s = (0, m._)(t);
  return (0, i.jsx)(k, {
...l,
icon: (0, i.jsx)(I.Z, {
  'aria-hidden': !0,
  size: h.AvatarSizes.SIZE_32,
  channel: t,
  experimentLocation: 'forward-modal'
}),
label: a,
subLabel: null != n ? n : s
  });
}

function H(e) {
  let {
channel: t,
subLabel: n,
...l
  } = e, a = (0, _.e7)([L.Z], () => L.Z.getGuild(null == t ? void 0 : t.guild_id)), s = (0, A.ZP)(t), r = (0, _.e7)([
N.Z,
y.default,
Z.Z
  ], () => {
let e = N.Z.getChannel(t.parent_id);
return null == e ? null : (0, A.F6)(e, y.default, Z.Z, !1);
  }), o = (0, _.e7)([T.ZP], () => T.ZP.lastMessageTimestamp(t.id, O.W.CHANNEL)), u = null == a ? void 0 : a.name;
  if (t.isThread() || t.isForumPost()) {
let e = t.isForumPost() ? h.ForumIcon : h.TextIcon;
u = (0, i.jsxs)('div', {
  className: F.threadSubLabel,
  children: [
    (0, i.jsx)(e, {
      color: h.tokens.colors.TEXT_SECONDARY,
      className: F.subLabelIcon
    }),
    (0, i.jsx)(h.Text, {
      variant: 'text-xs/medium',
      color: 'text-secondary',
      lineClamp: 1,
      children: r
    }),
    null != o ? (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(h.Text, {
          className: F.subLabelSeparator,
          variant: 'text-xs/medium',
          color: 'text-secondary',
          children: '\u2022'
        }),
        (0, i.jsx)(h.Text, {
          variant: 'text-xs/medium',
          color: 'text-secondary',
          children: (0, R.Xf)(c()(o))
        })
      ]
    }) : null
  ]
});
  }
  return (0, i.jsx)(k, {
...l,
icon: (0, i.jsx)(p.Z, {
  size: p.E.SMALL_32,
  guild: a,
  channel: t
}),
label: s,
subLabel: null != n ? n : u
  });
}

function w(e) {
  let {
rowData: t,
rowMode: n,
message: l,
originChannel: a,
selectedDestinations: r,
handleToggleDestination: o,
disableSelection: u,
...c
  } = e, _ = s.useMemo(() => [t.length], [t.length]), f = s.useCallback(() => 48, []), E = s.useMemo(() => {
var e;
return null !== (e = null == r ? void 0 : r.map(C.hC)) && void 0 !== e ? e : [];
  }, [r]), A = s.useCallback(e => {
let {
  section: s,
  row: r
} = e;
if (s > 0)
  return;
let {
  type: c,
  record: d
} = t[r];
if (c === S.h8.HEADER)
  return;
let _ = c === S.h8.USER ? {
    type: 'user',
    id: d.id
  } : {
    type: 'channel',
    id: d.id
  },
  h = (0, C.hC)(_),
  f = (0, D.H)(l, a, d),
  g = E.includes(h),
  A = {
    key: h,
    message: l,
    destination: _,
    rowMode: n,
    subLabel: null != f ? f.label : void 0,
    disabled: u && !g || null != f,
    selected: g,
    onPressDestination: o,
    'aria-posinset': r + 1,
    'aria-setsize': t.length
  };
if (c === S.h8.USER)
  return (0, i.jsx)(U, {
    user: d,
    ...A
  });
if (c === S.h8.GROUP_DM)
  return (0, i.jsx)(j, {
    channel: d,
    ...A
  });
if (c === S.h8.TEXT_CHANNEL || c === S.h8.VOICE_CHANNEL)
  return (0, i.jsx)(H, {
    channel: d,
    ...A
  });
else
  (0, v.vE)(c);
  }, [
u,
o,
l,
a,
t,
n,
E
  ]), I = s.useRef(null), p = (0, g.Z)('forward-modal', I);
  return (0, i.jsx)(d.bG, {
navigator: p,
children: (0, i.jsx)(d.SJ, {
  children: e => {
    let {
      ref: t,
      ...n
    } = e;
    return (0, i.jsx)(h.ModalListContent, {
      scrollerRef: e => {
        var n;
        I.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
      },
      ...n,
      ...c,
      sections: _,
      sectionHeight: 0,
      renderRow: A,
      rowHeight: f
    });
  }
})
  });
}
(a = l || (l = {})).TOGGLE = 'toggle', a.SEND = 'send';