a.d(s, {
  Z: function() {
return C;
  }
});
var n = a(735250),
  E = a(470079),
  t = a(120356),
  _ = a.n(t),
  l = a(481060),
  i = a(285952),
  d = a(539379),
  T = a(109983),
  M = a(834891),
  L = a(689938),
  r = a(990633);

function o(e) {
  let {
guildTemplate: s,
onClick: a,
autoFocus: t
  } = e, _ = E.useCallback(() => {
a(s);
  }, [
s,
a
  ]);
  return (0, n.jsx)(T.Z, {
icon: d.M[s.id],
message: s.label,
onClick: _,
autoFocus: t
  });
}

function C(e) {
  let {
className: s,
isNewUser: a,
onClose: E,
onChooseTemplate: t,
onJoin: d
  } = e, T = (0, M.E)();
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(l.ModalHeader, {
    direction: i.Z.Direction.VERTICAL,
    className: r.header,
    separator: !1,
    children: [
      (0, n.jsx)(l.Heading, {
        className: r.title,
        variant: 'heading-xl/semibold',
        children: a ? L.Z.Messages.NUF_DESKTOP_TEMPLATES_TITLE : L.Z.Messages.GUILD_CREATE_TITLE
      }),
      (0, n.jsx)(l.Text, {
        className: r.subtitle,
        color: 'header-secondary',
        variant: 'text-md/normal',
        children: L.Z.Messages.NUF_DESKTOP_TEMPLATES_SUBTITLE
      }),
      null != E && (0, n.jsx)(l.ModalCloseButton, {
        className: r.closeButton,
        onClick: E
      })
    ]
  }),
  (0, n.jsxs)(l.ModalContent, {
    className: _()(r.templatesList, s),
    paddingFix: !1,
    children: [
      (0, n.jsx)(o, {
        guildTemplate: T[M.l.CREATE],
        onClick: t,
        autoFocus: !0
      }),
      (0, n.jsx)(l.Text, {
        className: r.optionHeader,
        color: 'header-secondary',
        variant: 'text-xs/bold',
        children: L.Z.Messages.GUILD_TEMPLATE_SELECTOR_OPTION_HEADER
      }),
      (0, n.jsx)(o, {
        guildTemplate: T[M.l.GAMING],
        onClick: t
      }),
      (0, n.jsx)(o, {
        guildTemplate: T[M.l.SCHOOL_CLUB],
        onClick: t
      }),
      (0, n.jsx)(o, {
        guildTemplate: T[M.l.STUDY],
        onClick: t
      }),
      (0, n.jsx)(o, {
        guildTemplate: T[M.l.FRIENDS],
        onClick: t
      }),
      (0, n.jsx)(o, {
        guildTemplate: T[M.l.CREATORS],
        onClick: t
      }),
      (0, n.jsx)(o, {
        guildTemplate: T[M.l.LOCAL_COMMUNITY],
        onClick: t
      })
    ]
  }),
  null != d && (0, n.jsxs)(l.ModalFooter, {
    className: r.footer,
    children: [
      (0, n.jsx)(l.Heading, {
        variant: 'heading-lg/semibold',
        className: r.footerTitle,
        children: L.Z.Messages.NUF_HAVE_AN_INVITE_ALREADY
      }),
      (0, n.jsx)(l.Button, {
        className: r.footerButton,
        color: l.Button.Colors.PRIMARY,
        onClick: d,
        children: L.Z.Messages.JOIN_SERVER_TITLE
      })
    ]
  })
]
  });
}