"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("735250"),
  l = s("470079"),
  i = s("481060"),
  n = s("109983"),
  d = s("285952"),
  r = s("120298"),
  o = s("486527"),
  u = s("689938"),
  c = s("689556");

function C(e) {
  let {
    guildTemplate: t,
    onClick: s,
    autoFocus: i
  } = e, d = l.useCallback(() => {
    s(t)
  }, [t, s]);
  return (0, a.jsx)(n.default, {
    icon: r.GUILD_TEMPLATE_ICONS[t.id],
    message: t.label,
    onClick: d,
    autoFocus: i
  })
}

function m(e) {
  let {
    onClose: t,
    onBack: s,
    onChooseTemplate: l,
    directoryGuildName: n
  } = e, r = (0, o.getHubGuildTemplatesMap)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      direction: d.default.Direction.VERTICAL,
      className: c.header,
      separator: !1,
      children: [(0, a.jsx)(i.Heading, {
        className: c.title,
        variant: "heading-xl/semibold",
        children: u.default.Messages.HUB_CREATE_OR_ADD_GUILD_TITLE.format({
          guildName: n
        })
      }), (0, a.jsx)(i.Text, {
        className: c.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: u.default.Messages.HUB_CREATE_OR_ADD_GUILD_SUBTITLE
      }), null != t && (0, a.jsx)(i.ModalCloseButton, {
        className: c.closeButton,
        onClick: t
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: c.templatesList,
      paddingFix: !1,
      children: [(0, a.jsx)(C, {
        guildTemplate: {
          ...r[o.HubGuildTemplateId.CREATE],
          label: u.default.Messages.HUB_CREATE_GUILD_CTA
        },
        onClick: l
      }), (0, a.jsx)(i.Text, {
        className: c.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: u.default.Messages.GUILD_TEMPLATE_SELECTOR_OPTION_HEADER
      }), (0, a.jsx)(C, {
        guildTemplate: r[o.HubGuildTemplateId.HUB_STUDY],
        onClick: l
      }), (0, a.jsx)(C, {
        guildTemplate: r[o.HubGuildTemplateId.HUB_SCHOOL_CLUB],
        onClick: l
      }), (0, a.jsx)(C, {
        guildTemplate: r[o.HubGuildTemplateId.HUB_CLASS],
        onClick: l
      }), (0, a.jsx)(C, {
        guildTemplate: r[o.HubGuildTemplateId.HUB_SOCIAL],
        onClick: l
      }), (0, a.jsx)(C, {
        guildTemplate: r[o.HubGuildTemplateId.HUB_MAJOR],
        onClick: l
      }), (0, a.jsx)(C, {
        guildTemplate: r[o.HubGuildTemplateId.HUB_DORM],
        onClick: l
      })]
    }), (0, a.jsx)(i.ModalFooter, {
      className: c.footer,
      children: (0, a.jsx)(i.Button, {
        look: i.Button.Looks.BLANK,
        size: i.Button.Sizes.MIN,
        onClick: s,
        children: u.default.Messages.BACK
      })
    })]
  })
}