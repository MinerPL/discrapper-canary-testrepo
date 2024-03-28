"use strict";
s.r(t), s("47120");
var a, l, n = s("735250"),
  i = s("470079"),
  r = s("442837"),
  o = s("481060"),
  d = s("570140"),
  u = s("596454"),
  c = s("524329"),
  E = s("823379"),
  _ = s("999382"),
  I = s("413584"),
  T = s("689938"),
  S = s("709496"),
  f = s("114275");
(l = a || (a = {}))[l.LOADING = 0] = "LOADING", l[l.INTRO = 1] = "INTRO", l[l.SETTINGS = 2] = "SETTINGS";
let m = e => {
  let {
    setWelcomeView: t,
    setShowCreateModal: a
  } = e, l = [{
    emoji: "\uD83D\uDCAC",
    description: T.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_DESCRIPTION_1,
    name: T.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_NAME_1
  }, {
    emoji: "\uD83C\uDFF9",
    description: T.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_DESCRIPTION_2,
    name: T.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_NAME_2
  }, {
    emoji: "\uD83D\uDDDE",
    description: T.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_DESCRIPTION_3,
    name: T.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_CHANNEL_NAME_3
  }];
  return (0, n.jsxs)(o.FormSection, {
    title: T.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
    tag: "h1",
    children: [(0, n.jsxs)("div", {
      className: S.welcomeDescription,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: T.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_INTRO_TEXT.format()
      }), (0, n.jsx)(o.Button, {
        onClick: () => {
          a(!0), t(2)
        },
        children: T.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_INTRO_BUTTON
      })]
    }), (0, n.jsxs)("div", {
      className: S.exampleContainer,
      children: [(0, n.jsxs)("div", {
        className: S.exampleWumpus,
        children: [(0, n.jsx)("img", {
          className: S.wumpus,
          alt: "",
          src: s("663346")
        }), (0, n.jsx)("div", {
          className: S.tooltipPointer
        }), (0, n.jsx)("div", {
          className: S.tooltip,
          children: T.default.Messages.GUILD_SETTINGS_EXAMPLE_TOOLTIP
        })]
      }), (0, n.jsxs)("div", {
        className: S.exampleModal,
        children: [(0, n.jsx)("img", {
          alt: "",
          className: f.guildIcon,
          src: s("691466"),
          width: 64,
          height: 64
        }), (0, n.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: S.header,
          children: T.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_TITLE.format()
        }), (0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: f.guildDescription,
          children: T.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_EXAMPLE_DESCRIPTION
        }), (0, n.jsx)(o.FormTitle, {
          className: f.choiceHeader,
          children: T.default.Messages.WELCOME_SCREEN_CHOICE_HEADER
        }), (0, n.jsx)("div", {
          className: f.options,
          children: l.map(e => (0, n.jsxs)("div", {
            className: S.optionContainer,
            children: [(0, n.jsx)(u.default, {
              emojiName: e.emoji,
              className: f.optionEmoji
            }), (0, n.jsxs)("div", {
              className: f.optionTextContainer,
              children: [(0, n.jsx)(o.Text, {
                variant: "text-md/semibold",
                className: f.channelDescription,
                children: e.description
              }), (0, n.jsx)(o.Text, {
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
t.default = () => {
  let {
    guild: e
  } = (0, r.useStateFromStores)([_.default], () => _.default.getProps()), [t, s] = i.useState(0), [a, l] = i.useState(!1);
  switch (i.useEffect(() => {
      null != e && d.default.wait(() => {
        (0, c.fetchWelcomeScreen)(e.id).then(e => {
          s(null == e ? 1 : 2)
        })
      })
    }, [e]), t) {
    case 0:
      return (0, n.jsx)(o.Spinner, {
        type: o.Spinner.Type.SPINNING_CIRCLE
      });
    case 1:
      return (0, n.jsx)(m, {
        setWelcomeView: s,
        setShowCreateModal: l
      });
    case 2:
      return (0, n.jsx)(I.default, {
        guild: e,
        showCreateModal: a
      });
    default:
      return (0, E.assertNever)(t)
  }
}