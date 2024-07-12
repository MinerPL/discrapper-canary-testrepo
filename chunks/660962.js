n.d(t, {
  ZP: function() {
return y;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(392711),
  o = n.n(l),
  c = n(442837),
  d = n(481060),
  u = n(605436),
  _ = n(663993),
  I = n(518738),
  E = n(786761),
  T = n(3148),
  m = n(753206),
  N = n(598077),
  S = n(496675),
  h = n(792125),
  g = n(764260),
  C = n(95242),
  x = n(541575),
  p = n(420966),
  R = n(337344),
  f = n(275296),
  L = n(203377),
  O = n(981631),
  A = n(689938),
  M = n(210663),
  D = n(681267),
  v = n(179517),
  j = n(79829);
let Z = (0, _.Un)({
createPromise: () => n.e('5609').then(n.bind(n, 336231)),
webpackId: 336231
  }),
  b = o().debounce((e, t) => (0, g.Uv)(e, t), 200);

function U(e) {
  let {
role: t,
disabled: n
  } = e, [i, r] = a.useState(t.name);
  return a.useEffect(() => {
r(t.name);
  }, [t.name]), (0, s.jsx)(d.FormItem, {
title: A.Z.Messages.FORM_LABEL_ROLE_NAME,
required: !0,
children: (0, s.jsx)(d.TextInput, {
  type: 'text',
  value: i,
  maxLength: O.VKK,
  onChange: function(e) {
    r(e), b(t.id, e);
  },
  disabled: n
})
  });
}

function G(e) {
  let {
role: t,
disabled: n
  } = e;
  return (0, s.jsxs)(d.FormItem, {
className: M.colorPicker,
title: A.Z.Messages.FORM_LABEL_ROLE_COLOR,
required: !0,
children: [
  (0, s.jsx)(d.FormText, {
    className: M.colorDescription,
    children: A.Z.Messages.ROLE_COLOR_HELP
  }),
  (0, s.jsx)(Z, {
    defaultColor: O.p6O,
    colors: O.pmI,
    value: t.color,
    disabled: n,
    onChange: e => function(e, t) {
      if (e.color !== t && (t !== O.p6O || 0 !== e.color))
        t === O.p6O && (t = 0), (0, g.OW)(e.id, t);
    }(t, e),
    customPickerPosition: 'right'
  }, t.id)
]
  });
}

function P(e) {
  var t, i;
  let {
role: r,
guildId: l
  } = e;
  let o = (i = A.Z.Messages.ROLE_SAMPLE_MESSAGE, a.useMemo(() => {
  let e = (0, E.e5)({
    ...(0, T.ZP)({
      channelId: '1337',
      content: i
    }),
    state: O.yb.SENT,
    id: '31337'
  });
  return e.author = new N.Z({
    id: '313337',
    username: A.Z.Messages.WUMPUS,
    discriminator: '0000',
    bot: !1
  }), e.author.getAvatarURL = () => n(52008), e;
}, [i])),
c = {
  nick: o.author.username,
  colorString: null !== (t = r.colorString) && void 0 !== t ? t : void 0
},
u = {
  src: v,
  name: r.name
},
_ = {
  src: j,
  name: r.name
},
S = (0, I.oC)(l, r);
  return (0, s.jsx)(d.FocusBlock, {
children: (0, s.jsxs)('div', {
  className: M.previewContainer,
  'aria-hidden': !0,
  'data-disable-adaptive-theme': !0,
  children: [
    (0, s.jsx)('div', {
      className: (0, h.Q)(O.BRd.LIGHT),
      children: (0, s.jsx)('div', {
        className: M.messageContainer,
        children: (0, s.jsx)(m.Z, {
          author: c,
          message: o,
          roleIcon: null != S ? S : _,
          isGroupStart: !0
        })
      })
    }),
    (0, s.jsx)('div', {
      className: (0, h.Q)(O.BRd.DARK),
      children: (0, s.jsx)('div', {
        className: M.messageContainer,
        children: (0, s.jsx)(m.Z, {
          author: c,
          message: o,
          roleIcon: null != S ? S : u,
          isGroupStart: !0
        })
      })
    })
  ]
})
  });
}

function B(e) {
  let {
role: t,
disabled: n
  } = e;
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(d.FormSwitch, {
    disabled: n,
    value: t.hoist,
    onChange: e => (0, g.we)(t.id, e, t.mentionable),
    hideBorder: !0,
    children: A.Z.Messages.FORM_LABEL_HOIST_DESCRIPTION
  }),
  (0, s.jsx)(d.FormDivider, {
    className: M.divider
  }),
  (0, s.jsx)(d.FormSwitch, {
    disabled: n,
    value: t.mentionable,
    onChange: e => (0, g.we)(t.id, t.hoist, e),
    note: A.Z.Messages.FORM_LABEL_MENTIONABLE_DESCRIPTION,
    hideBorder: !0,
    children: A.Z.Messages.FORM_LABEL_MENTIONABLE.format()
  })
]
  });
}

function y(e) {
  let {
guild: t,
role: n,
locked: a,
setSelectedSection: i
  } = e, l = (0, u.pM)(null == t ? void 0 : t.id, n.id), o = a || l, _ = (0, c.e7)([S.Z], () => S.Z.canImpersonateRole(t, n)), {
headerHeight: I,
headerRef: E
  } = (0, C.Z)(0), {
scrolledToTop: T,
handleScroll: m
  } = (0, p.V)();
  return (0, s.jsx)(d.AdvancedScrollerAuto, {
className: M.scroller,
style: {
  scrollPaddingTop: I
},
onScroll: m,
children: (0, s.jsxs)('div', {
  className: D.contentWidth,
  children: [
    (0, s.jsx)('div', {
      className: r()(D.header, D.stickyHeader, {
        [D.stickyHeaderElevated]: !T
      }),
      ref: E,
      children: (0, s.jsx)(p.Z, {
        guild: t,
        role: n,
        selectedSection: L.ZI.DISPLAY,
        setSelectedSection: i
      })
    }),
    (0, s.jsx)(U, {
      role: n,
      disabled: o
    }),
    (0, s.jsx)('div', {
      className: M.noticeContainer,
      children: (0, s.jsx)(f.Z, {
        role: n
      })
    }),
    (0, s.jsx)(d.FormDivider, {
      className: M.divider
    }),
    (0, s.jsx)(G, {
      role: n,
      disabled: o
    }),
    (0, s.jsx)(x.Z, {
      guild: t,
      disabled: o,
      role: n
    }),
    (0, s.jsx)(P, {
      role: n,
      guildId: t.id
    }),
    (0, s.jsx)(d.FormDivider, {
      className: M.divider
    }),
    (0, s.jsx)(B, {
      role: n,
      disabled: o
    }),
    _ ? (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(d.FormDivider, {
          className: M.divider
        }),
        (0, s.jsx)(R.L, {
          guildId: t.id,
          role: n
        })
      ]
    }) : null
  ]
})
  });
}