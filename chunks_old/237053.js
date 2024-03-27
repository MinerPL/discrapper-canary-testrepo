"use strict";
s.r(a), s.d(a, {
  default: function() {
    return m
  }
}), s("222007");
var t = s("37983"),
  n = s("884691"),
  r = s("77078"),
  l = s("660279"),
  i = s("109264"),
  o = s("660074"),
  _ = s("434111"),
  c = s("782340"),
  d = s("552664");

function u(e) {
  let {
    user: a,
    tagId: s,
    title: n,
    messageCount: l,
    reactionCount: o,
    activeAgo: _,
    tags: u,
    attachment: M
  } = e, {
    name: E,
    avatarSrc: m
  } = a;
  return (0, t.jsxs)("div", {
    className: d.post,
    children: [(0, t.jsxs)("div", {
      children: [(0, t.jsxs)("div", {
        className: d.inline,
        children: [(0, t.jsxs)(r.Text, {
          color: "header-primary",
          variant: "text-xs/medium",
          className: d.inline,
          children: [(0, t.jsx)("img", {
            src: m,
            alt: c.default.Messages.USER_SETTINGS_AVATAR,
            width: 16,
            height: 16
          }), E]
        }), null != s && (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("span", {
            className: d.bullet,
            children: "•"
          }), (0, t.jsx)(r.Text, {
            color: "header-primary",
            variant: "text-xxs/medium",
            className: d.inlineTag,
            children: u[s]
          })]
        })]
      }), (0, t.jsx)(r.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        className: d.title,
        children: n
      }), (0, t.jsxs)("div", {
        className: d.inline,
        children: [(0, t.jsxs)(r.Text, {
          color: "header-secondary",
          variant: "text-xs/medium",
          className: d.alignCenter,
          children: [(0, t.jsx)(i.default, {
            width: 16,
            height: 16,
            className: d.icon
          }), l]
        }), o > 0 && (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("span", {
            className: d.bullet,
            children: "•"
          }), (0, t.jsxs)(r.Text, {
            color: "header-secondary",
            variant: "text-xs/medium",
            className: d.alignCenter,
            children: [(0, t.jsx)("span", {
              role: "img",
              "aria-label": c.default.Messages.REACTIONS,
              className: d.icon,
              children: "❤️"
            }), o]
          })]
        }), (0, t.jsx)("span", {
          className: d.bullet,
          children: "•"
        }), (0, t.jsx)(r.Text, {
          color: "header-secondary",
          variant: "text-xs/medium",
          children: _
        })]
      })]
    }), null != M && (0, t.jsx)("img", {
      src: M,
      alt: c.default.Messages.MESSAGE_ATTACHMENT_A11Y_LABEL.format({
        name: n
      }),
      className: d.attachment
    })]
  })
}

function M(e) {
  let {
    author: a,
    content: s
  } = e, {
    name: n,
    isOP: l,
    avatarSrc: i
  } = a;
  return (0, t.jsxs)("div", {
    className: d.message,
    children: [(0, t.jsx)("img", {
      src: i,
      alt: c.default.Messages.USER_SETTINGS_AVATAR,
      width: 40,
      height: 40
    }), (0, t.jsxs)("div", {
      children: [(0, t.jsxs)("div", {
        className: d.inline,
        children: [(0, t.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          children: n
        }), l && (0, t.jsx)("span", {
          className: d.opTag,
          children: c.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER
        })]
      }), (0, t.jsx)(r.Text, {
        color: "text-normal",
        variant: "text-sm/normal",
        children: s
      })]
    })]
  })
}

function E(e) {
  let {
    title: a,
    messages: s,
    maxHeight: n
  } = e;
  return (0, t.jsx)("div", {
    className: d.previewContainer,
    style: {
      maxHeight: n
    },
    "aria-hidden": !0,
    children: (0, t.jsxs)("div", {
      className: d.preview,
      children: [(0, t.jsx)(o.default, {
        className: d.forumPostIcon
      }), (0, t.jsx)(r.Heading, {
        color: "header-primary",
        variant: "heading-lg/semibold",
        className: d.header,
        children: a
      }), (0, t.jsx)("div", {
        className: d.messageContainer,
        children: s.map((e, a) => (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(M, {
            ...e
          }, a), 0 === a && (0, t.jsxs)("div", {
            children: [(0, t.jsx)("hr", {
              className: d.topSeparator
            }), (0, t.jsxs)("div", {
              className: d.actionBar,
              children: [(0, t.jsxs)(r.Text, {
                color: "text-brand",
                variant: "text-xs/medium",
                className: d.fakeReactions,
                children: [(0, t.jsx)("span", {
                  role: "img",
                  "aria-label": c.default.Messages.REACTIONS,
                  className: d.icon,
                  children: "❤️"
                }), "17"]
              }), (0, t.jsxs)(r.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                className: d.following,
                children: [(0, t.jsx)(l.default, {
                  width: 16,
                  height: 16
                }), c.default.Messages.FOLLOW]
              })]
            }), (0, t.jsx)("hr", {
              className: d.bottomSeparator
            })]
          })]
        }))
      }), (0, t.jsx)("div", {
        className: d.chatInput,
        children: (0, t.jsx)(r.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: c.default.Messages.SEND_A_MESSAGE
        })
      })]
    })
  })
}

function m(e) {
  let {
    id: a
  } = e, [s, l] = n.useState(0), i = n.useRef(null), {
    tags: o,
    posts: c,
    postPreview: M,
    ariaLabel: m
  } = (0, _.default)(a);
  return n.useEffect(() => {
    l(0)
  }, [a]), n.useEffect(() => {
    var e;
    0 === s && (null == i ? void 0 : null === (e = i.current) || void 0 === e ? void 0 : e.clientHeight) != null && l(i.current.clientHeight - 40)
  }, [s]), (0, t.jsxs)("div", {
    className: d.container,
    role: "image",
    "aria-label": m,
    children: [(0, t.jsxs)("div", {
      ref: i,
      className: d.browser,
      "aria-hidden": !0,
      children: [(0, t.jsx)("div", {
        className: d.tags,
        children: o.map((e, a) => (0, t.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-xs/medium",
          className: d.tag,
          children: e
        }, a))
      }), (0, t.jsx)("div", {
        className: d.posts,
        children: c.map((e, a) => (0, t.jsx)(u, {
          ...e,
          tags: o
        }, a))
      })]
    }), (0, t.jsx)(E, {
      ...M,
      maxHeight: s
    })]
  })
}