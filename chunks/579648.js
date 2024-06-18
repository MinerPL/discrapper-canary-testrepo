"use strict";
t(47120);
var n, i, l = t(735250),
  a = t(470079),
  r = t(442837),
  o = t(481060),
  c = t(570140),
  d = t(596454),
  u = t(524329),
  E = t(823379),
  _ = t(999382),
  I = t(413584),
  T = t(689938),
  N = t(678406),
  m = t(209602);
(i = n || (n = {}))[i.LOADING = 0] = "LOADING", i[i.INTRO = 1] = "INTRO", i[i.SETTINGS = 2] = "SETTINGS";
let S = e => {
  let {
    setWelcomeView: s,
    setShowCreateModal: n
  } = e, i = [{
    emoji: "\uD83D\uDCAC",
    description: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_DESCRIPTION_1,
    name: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_NAME_1
  }, {
    emoji: "\uD83C\uDFF9",
    description: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_DESCRIPTION_2,
    name: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_NAME_2
  }, {
    emoji: "\uD83D\uDDDE",
    description: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_DESCRIPTION_3,
    name: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_NAME_3
  }];
  return (0, l.jsxs)(o.FormSection, {
    title: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    tag: "h1",
    children: [(0, l.jsxs)("div", {
      className: N.welcomeDescription,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_INTRO_TEXT.format()
      }), (0, l.jsx)(o.Button, {
        onClick: () => {
          n(!0), s(2)
        },
        children: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_INTRO_BUTTON
      })]
    }), (0, l.jsxs)("div", {
      className: N.exampleContainer,
      children: [(0, l.jsxs)("div", {
        className: N.exampleWumpus,
        children: [(0, l.jsx)("img", {
          className: N.wumpus,
          alt: "",
          src: t(663346)
        }), (0, l.jsx)("div", {
          className: N.tooltipPointer
        }), (0, l.jsx)("div", {
          className: N.tooltip,
          children: T.Z.Messages.GUILD_SETTINGS_EXAMPLE_TOOLTIP
        })]
      }), (0, l.jsxs)("div", {
        className: N.exampleModal,
        children: [(0, l.jsx)("img", {
          alt: "",
          className: m.guildIcon,
          src: t(691466),
          width: 64,
          height: 64
        }), (0, l.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: N.header,
          children: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_TITLE.format()
        }), (0, l.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: m.guildDescription,
          children: T.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_DESCRIPTION
        }), (0, l.jsx)(o.FormTitle, {
          className: m.choiceHeader,
          children: T.Z.Messages.WELCOME_SCREEN_CHOICE_HEADER
        }), (0, l.jsx)("div", {
          className: m.options,
          children: i.map(e => (0, l.jsxs)("div", {
            className: N.optionContainer,
            children: [(0, l.jsx)(d.Z, {
              emojiName: e.emoji,
              className: m.optionEmoji
            }), (0, l.jsxs)("div", {
              className: m.optionTextContainer,
              children: [(0, l.jsx)(o.Text, {
                variant: "text-md/semibold",
                className: m.channelDescription,
                children: e.description
              }), (0, l.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: "#".concat(e.name)
              })]
            })]
          }, e.name))
        })]
      })]
    })]
  })
};
s.Z = () => {
  let {
    guild: e
  } = (0, r.e7)([_.Z], () => _.Z.getProps()), [s, t] = a.useState(0), [n, i] = a.useState(!1);
  switch (a.useEffect(() => {
      null != e && c.Z.wait(() => {
        (0, u.RM)(e.id).then(e => {
          t(null == e ? 1 : 2)
        })
      })
    }, [e]), s) {
    case 0:
      return (0, l.jsx)(o.Spinner, {
        type: o.Spinner.Type.SPINNING_CIRCLE
      });
    case 1:
      return (0, l.jsx)(S, {
        setWelcomeView: t,
        setShowCreateModal: i
      });
    case 2:
      return (0, l.jsx)(I.Z, {
        guild: e,
        showCreateModal: n
      });
    default:
      return (0, E.vE)(s)
  }
}