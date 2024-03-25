"use strict";
a.r(s), a.d(s, {
  default: function() {
    return f
  }
});
var t = a("37983");
a("884691");
var l = a("414456"),
  i = a.n(l),
  r = a("669491"),
  d = a("77078"),
  n = a("476765"),
  o = a("79945"),
  c = a("256170"),
  m = a("867544"),
  x = a("399699"),
  u = a("566998"),
  h = a("701909"),
  E = a("49111"),
  _ = a("782340"),
  v = a("864555");

function N() {
  return (0, t.jsx)("div", {
    className: v.dummySwitch,
    children: (0, t.jsxs)("svg", {
      className: v.dummySlider,
      viewBox: "0 0 28 20",
      preserveAspectRatio: "xMinYMid meet",
      style: {
        left: 9
      },
      children: [(0, t.jsx)("rect", {
        fill: "white",
        x: 4,
        y: 0,
        height: 20,
        width: 20,
        rx: "10"
      }), (0, t.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        children: [(0, t.jsx)("path", {
          fill: r.default.unsafe_rawColors.GREEN_360.css,
          d: "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z"
        }), (0, t.jsx)("path", {
          fill: r.default.unsafe_rawColors.GREEN_360.css,
          d: "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"
        })]
      })]
    })
  })
}

function f(e) {
  let {
    transitionState: s,
    onClose: a
  } = e, l = (0, n.useUID)();
  return (0, t.jsxs)(d.ModalRoot, {
    transitionState: s,
    "aria-labelledby": l,
    size: d.ModalSize.LARGE,
    children: [(0, t.jsx)(d.ModalCloseButton, {
      className: v.closeButton,
      onClick: a
    }), (0, t.jsxs)(d.ModalContent, {
      className: v.container,
      children: [(0, t.jsx)(d.Heading, {
        id: l,
        color: "header-primary",
        variant: "heading-xl/medium",
        children: _.default.Messages.GUILD_FEED_NUX_CURATION_TITLE
      }), (0, t.jsx)(d.Text, {
        className: v.subtitle,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: _.default.Messages.GUILD_FEED_NUX_CURATION_SUBTITLE
      }), (0, t.jsxs)("div", {
        className: v.itemList,
        children: [(0, t.jsx)("div", {
          className: v.demoContainer,
          children: (0, t.jsxs)("div", {
            className: v.demoList,
            children: [(0, t.jsxs)("div", {
              className: v.demoItem,
              children: [(0, t.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "interactive-normal",
                children: _.default.Messages.ADD_REACTION
              }), (0, t.jsx)(o.default, {
                className: v.demoIcon
              })]
            }), (0, t.jsxs)("div", {
              className: i(v.demoItem, v.demoItemSelected),
              children: [(0, t.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "interactive-active",
                children: _.default.Messages.GUILD_FEED_FEATURE_MESSAGE
              }), (0, t.jsx)(c.default, {
                className: i(v.demoIcon, v.demoIconActive, v.demoCaret)
              })]
            }), (0, t.jsxs)("div", {
              className: v.demoItem,
              children: [(0, t.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "interactive-normal",
                children: _.default.Messages.PIN_MESSAGE
              }), (0, t.jsx)(u.default, {
                className: v.demoIcon
              })]
            })]
          })
        }), (0, t.jsx)("div", {
          className: v.demoContainer,
          children: (0, t.jsxs)("div", {
            className: v.demoList,
            children: [(0, t.jsxs)("div", {
              className: v.demoItem,
              children: [(0, t.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "interactive-normal",
                children: _.default.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM
              }), (0, t.jsx)(m.default, {
                className: v.demoIcon,
                foregroundColor: "currentColor"
              })]
            }), (0, t.jsxs)("div", {
              className: i(v.demoItem, v.demoItemSelected),
              children: [(0, t.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "interactive-active",
                children: _.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM
              }), (0, t.jsx)(x.default, {
                className: i(v.demoIcon, v.demoIconActive),
                foregroundColor: "currentColor"
              })]
            })]
          })
        }), (0, t.jsx)("div", {
          className: v.demoContainer,
          children: (0, t.jsx)("div", {
            className: v.demoList,
            children: (0, t.jsxs)("div", {
              className: v.demoItem,
              style: {
                padding: 0
              },
              children: [(0, t.jsx)(d.Text, {
                variant: "text-md/semibold",
                color: "header-primary",
                children: _.default.Messages.GUILD_FEED_DEMOTE_CHANNEL
              }), (0, t.jsx)(N, {})]
            })
          })
        }), (0, t.jsxs)("div", {
          className: v.textContainer,
          children: [(0, t.jsx)(d.Text, {
            className: v.itemTitle,
            variant: "text-md/medium",
            color: "header-primary",
            children: _.default.Messages.GUILD_FEED_NUX_CURATION_FEATURE_TITLE
          }), (0, t.jsx)(d.Text, {
            className: v.itemSubtitle,
            variant: "text-sm/normal",
            color: "header-secondary",
            children: _.default.Messages.GUILD_FEED_NUX_CURATION_FEATURE_SUBTITLE
          })]
        }), (0, t.jsxs)("div", {
          className: v.textContainer,
          children: [(0, t.jsx)(d.Text, {
            className: v.itemTitle,
            variant: "text-md/medium",
            color: "header-primary",
            children: _.default.Messages.GUILD_FEED_NUX_CURATION_REMOVE_TITLE
          }), (0, t.jsx)(d.Text, {
            className: v.itemSubtitle,
            variant: "text-sm/normal",
            color: "header-secondary",
            children: _.default.Messages.GUILD_FEED_NUX_CURATION_REMOVE_SUBTITLE
          })]
        }), (0, t.jsxs)("div", {
          className: v.textContainer,
          children: [(0, t.jsx)(d.Text, {
            className: v.itemTitle,
            variant: "text-md/medium",
            color: "header-primary",
            children: _.default.Messages.GUILD_FEED_NUX_CURATION_BLOCK_TITLE
          }), (0, t.jsx)(d.Text, {
            className: v.itemSubtitle,
            variant: "text-sm/normal",
            color: "header-secondary",
            children: _.default.Messages.GUILD_FEED_NUX_CURATION_BLOCK_SUBTITLE
          })]
        })]
      })]
    }), (0, t.jsxs)(d.ModalFooter, {
      children: [(0, t.jsx)(d.Button, {
        onClick: a,
        children: _.default.Messages.OKAY
      }), (0, t.jsx)(d.Anchor, {
        className: i(v.learnMore, (0, d.getButtonStyle)({
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.PRIMARY
        })),
        href: h.default.getArticleURL(E.HelpdeskArticles.GUILD_HOME),
        children: _.default.Messages.LEARN_MORE
      })]
    })]
  })
}