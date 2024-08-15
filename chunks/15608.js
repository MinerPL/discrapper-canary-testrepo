s.d(t, {
  Z: function() {
return C;
  }
});
var a = s(735250),
  n = s(470079),
  l = s(481060),
  o = s(600164),
  i = s(109983),
  r = s(120298),
  c = s(486527),
  d = s(689938),
  u = s(441365);

function m(e) {
  let {
guildTemplate: t,
onClick: s,
autoFocus: l
  } = e, o = n.useCallback(() => {
s(t);
  }, [
t,
s
  ]);
  return (0, a.jsx)(i.Z, {
icon: r.M[t.id],
message: t.label,
onClick: o,
autoFocus: l
  });
}

function C(e) {
  let {
onClose: t,
onBack: s,
onChooseTemplate: n,
directoryGuildName: i
  } = e, r = (0, c.Pp)();
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsxs)(l.ModalHeader, {
    direction: o.Z.Direction.VERTICAL,
    className: u.header,
    separator: !1,
    children: [
      (0, a.jsx)(l.Heading, {
        className: u.title,
        variant: 'heading-xl/semibold',
        children: d.Z.Messages.HUB_CREATE_OR_ADD_GUILD_TITLE.format({
          guildName: i
        })
      }),
      (0, a.jsx)(l.Text, {
        className: u.subtitle,
        color: 'header-secondary',
        variant: 'text-md/normal',
        children: d.Z.Messages.HUB_CREATE_OR_ADD_GUILD_SUBTITLE
      }),
      null != t && (0, a.jsx)(l.ModalCloseButton, {
        className: u.closeButton,
        onClick: t
      })
    ]
  }),
  (0, a.jsxs)(l.ModalContent, {
    className: u.templatesList,
    paddingFix: !1,
    children: [
      (0, a.jsx)(m, {
        guildTemplate: {
          ...r[c.sE.CREATE],
          label: d.Z.Messages.HUB_CREATE_GUILD_CTA
        },
        onClick: n
      }),
      (0, a.jsx)(l.Text, {
        className: u.optionHeader,
        color: 'header-secondary',
        variant: 'text-xs/bold',
        children: d.Z.Messages.GUILD_TEMPLATE_SELECTOR_OPTION_HEADER
      }),
      (0, a.jsx)(m, {
        guildTemplate: r[c.sE.HUB_STUDY],
        onClick: n
      }),
      (0, a.jsx)(m, {
        guildTemplate: r[c.sE.HUB_SCHOOL_CLUB],
        onClick: n
      }),
      (0, a.jsx)(m, {
        guildTemplate: r[c.sE.HUB_CLASS],
        onClick: n
      }),
      (0, a.jsx)(m, {
        guildTemplate: r[c.sE.HUB_SOCIAL],
        onClick: n
      }),
      (0, a.jsx)(m, {
        guildTemplate: r[c.sE.HUB_MAJOR],
        onClick: n
      }),
      (0, a.jsx)(m, {
        guildTemplate: r[c.sE.HUB_DORM],
        onClick: n
      })
    ]
  }),
  (0, a.jsx)(l.ModalFooter, {
    className: u.footer,
    children: (0, a.jsx)(l.Button, {
      className: u.backButton,
      look: l.Button.Looks.BLANK,
      size: l.Button.Sizes.MIN,
      onClick: s,
      children: d.Z.Messages.BACK
    })
  })
]
  });
}