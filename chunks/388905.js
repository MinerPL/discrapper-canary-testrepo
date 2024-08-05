t.d(n, {
  DK: function() {
return v;
  },
  Dx: function() {
return N;
  },
  EJ: function() {
return O;
  },
  Ee: function() {
return E;
  },
  Hh: function() {
return L;
  },
  II: function() {
return C;
  },
  MC: function() {
return S;
  },
  Vj: function() {
return T;
  },
  gO: function() {
return j;
  },
  i_: function() {
return b;
  },
  jQ: function() {
return A;
  },
  qE: function() {
return I;
  },
  v6: function() {
return M;
  },
  zx: function() {
return Z;
  }
}), t(536091);
var l = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  r = t(481060),
  s = t(43267),
  o = t(565138),
  u = t(285952),
  c = t(153124),
  d = t(838949),
  p = t(361207),
  m = t(63063),
  h = t(792125),
  f = t(981631),
  x = t(689938),
  _ = t(173307);
let g = r.Avatar;
null == g && (g = () => null);
let N = e => {
let {
  className: n,
  id: t,
  children: i
} = e;
return (0, l.jsx)(r.Heading, {
  variant: 'heading-xl/semibold',
  color: 'header-primary',
  className: a()(_.title, n),
  id: t,
  children: i
});
  },
  v = e => {
let {
  className: n,
  children: t
} = e;
return (0, l.jsx)(r.Text, {
  variant: 'text-md/normal',
  color: 'header-secondary',
  className: n,
  children: t
});
  },
  E = e => {
let {
  className: n,
  src: t
} = e;
return (0, l.jsx)('img', {
  alt: '',
  src: t,
  className: a()(_.image, n)
});
  },
  Z = e => {
let {
  className: n,
  ...t
} = e, i = t.look === r.Button.Looks.LINK;
return (0, l.jsx)(r.Button, {
  size: i ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
  fullWidth: !i,
  className: a()(n, {
    [_.button]: !i,
    [_.linkButton]: i
  }),
  ...t
});
  };
Z.Looks = r.Button.Looks, Z.Colors = r.Button.Colors, Z.Sizes = r.Button.Sizes;
let I = e => {
let {
  className: n,
  src: t,
  size: i
} = e;
return (0, l.jsx)(g, {
  src: t,
  size: i,
  className: a()(_.inviteLargeIcon, n),
  'aria-hidden': !0
});
  },
  T = e => {
let {
  guild: n,
  size: t,
  animate: i = !1,
  className: a
} = e;
return (0, l.jsx)(o.Z, {
  active: !0,
  guild: n,
  size: t,
  animate: i,
  className: a
});
  };
T.Sizes = o.Z.Sizes;
let S = e => {
  let {
className: n,
channel: t,
size: i
  } = e;
  return (0, l.jsx)(g, {
src: (0, s.x)(t),
size: i,
className: a()(_.inviteIcon, n),
'aria-hidden': !0
  });
};
S.Sizes = r.AvatarSizes;
let C = e => {
let {
  label: n,
  error: t,
  placeholder: i,
  value: s,
  className: o,
  inputClassName: u,
  setRef: d,
  type: p = 'text',
  onChange: m,
  autoComplete: h,
  autoFocus: f,
  maxLength: x,
  spellCheck: g,
  name: N,
  description: v,
  required: E,
  onFocus: Z,
  onBlur: I
} = e, T = (0, c.Dt)();
return (0, l.jsxs)(r.FormItem, {
  title: n,
  error: t,
  className: o,
  required: E,
  tag: 'label',
  htmlFor: T,
  children: [
    (0, l.jsx)(r.TextInput, {
      name: N,
      type: p,
      value: s,
      inputRef: d,
      placeholder: i,
      inputClassName: a()(u, {
        [_.inputError]: null != t
      }),
      'aria-label': n,
      onChange: m,
      autoComplete: h,
      autoFocus: f,
      maxLength: x,
      spellCheck: g,
      id: T,
      onFocus: Z,
      onBlur: I
    }),
    null != v ? (0, l.jsx)(r.FormText, {
      type: r.FormText.Types.DESCRIPTION,
      className: _.description,
      children: v
    }) : null
  ]
});
  },
  j = e => {
let {
  className: n,
  children: t
} = e;
return (0, l.jsx)('div', {
  className: a()(_.block, n),
  children: t
});
  },
  b = e => {
let {
  className: n,
  children: t,
  isProminent: i
} = e;
return (0, l.jsx)(r.Text, {
  variant: i ? 'text-sm/normal' : 'text-xs/normal',
  className: a()(_.subText, n),
  children: t
});
  },
  L = e => {
let {
  className: n
} = e;
return (0, l.jsx)(u.Z, {
  direction: u.Z.Direction.VERTICAL,
  align: u.Z.Align.CENTER,
  className: n,
  children: (0, l.jsx)(d.Z, {
    className: _.spinnerVideo
  })
});
  },
  O = e => {
let n, {
  online: t,
  total: i,
  className: s,
  flat: o,
  textClassName: c
} = e;
return null == i ? null : (null != t && t > 0 && (n = (0, l.jsxs)('div', {
  className: a()(_.pill, _.pillOnline, o && _.pillFlat),
  children: [
    (0, l.jsx)('i', {
      className: _.pillIconOnline
    }),
    (0, l.jsx)(r.Text, {
      tag: 'span',
      className: a()(_.pillMessage, c),
      variant: 'text-sm/normal',
      children: x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
        membersOnline: t
      })
    })
  ]
})), (0, l.jsxs)(u.Z, {
  justify: u.Z.Justify.CENTER,
  className: s,
  children: [
    n,
    (0, l.jsxs)('div', {
      className: a()(_.pill, o && _.pillFlat),
      children: [
        (0, l.jsx)('i', {
          className: _.pillIconTotal
        }),
        (0, l.jsx)(r.Text, {
          tag: 'span',
          className: a()(_.pillMessage, c),
          variant: 'text-sm/normal',
          children: x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
            count: i
          })
        })
      ]
    })
  ]
}));
  },
  A = e => {
let {
  user: n
} = e;
return null == n ? null : (0, l.jsxs)('div', {
  className: _.joiningAs,
  children: [
    (0, l.jsx)(r.Text, {
      tag: 'span',
      variant: 'text-md/normal',
      color: 'header-secondary',
      children: x.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
    }),
    (0, l.jsx)(I, {
      className: _.joiningAsAvatar,
      src: n.getAvatarURL(void 0, 24),
      size: r.AvatarSizes.SIZE_24,
      'aria-label': n.username
    }),
    (0, l.jsx)(r.Text, {
      className: _.joiningAsUsername,
      tag: 'span',
      variant: 'text-md/semibold',
      color: 'header-primary',
      children: n.username
    })
  ]
});
  },
  M = e => {
let {
  className: n
} = e;
return (0, l.jsxs)(j, {
  className: n,
  children: [
    (0, l.jsx)(Z, {
      onClick: () => window.open((0, p.t3)()),
      children: x.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
        platform: (0, p.DW)()
      })
    }),
    (0, l.jsx)(b, {
      className: _.downloadButtonSubtext,
      children: x.Z.Messages.INCOMPATIBLE_BROWSER.format({
        supportedBrowserURL: m.Z.getArticleURL(f.BhN.SUPPORTED_BROWSERS)
      })
    })
  ]
});
  };
n.ZP = e => {
  let {
className: n,
contentClassName: t,
tag: i = 'section',
onSubmit: r,
children: s,
expanded: o = !1,
theme: u = f.BRd.DARK,
style: c
  } = e;
  return (0, l.jsxs)(i, {
'data-theme': u,
'data-disable-adaptive-theme': !0,
onSubmit: r,
style: c,
className: a()(o ? _.authBoxExpanded : _.authBox, (0, h.Q)(u), n),
children: [
  (0, l.jsx)('div', {
    className: _.discordLogo
  }),
  (0, l.jsx)('div', {
    className: a()(_.centeringWrapper, t),
    children: s
  })
]
  });
};