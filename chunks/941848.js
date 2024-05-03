"use strict";
s.r(a), s.d(a, {
  default: function() {
    return m
  }
}), s("47120");
var t = s("735250"),
  n = s("470079"),
  r = s("481060"),
  l = s("808602"),
  _ = s("974029"),
  i = s("634648"),
  o = s("458044"),
  d = s("689938"),
  c = s("314547");

function u(e) {
  let {
    user: a,
    tagId: s,
    title: n,
    messageCount: l,
    reactionCount: i,
    activeAgo: o,
    tags: u,
    attachment: M
  } = e, {
    name: E,
    avatarSrc: m
  } = a;
  return (0, t.jsxs)("div", {
    className: c.post,
    children: [(0, t.jsxs)("div", {
      children: [(0, t.jsxs)("div", {
        className: c.inline,
        children: [(0, t.jsxs)(r.Text, {
          color: "header-primary",
          variant: "text-xs/medium",
          className: c.inline,
          children: [(0, t.jsx)("img", {
            src: m,
            alt: d.default.Messages.USER_SETTINGS_AVATAR,
            width: 16,
            height: 16
          }), E]
        }), null != s && (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("span", {
            className: c.bullet,
            children: "•"
          }), (0, t.jsx)(r.Text, {
            color: "header-primary",
            variant: "text-xxs/medium",
            className: c.inlineTag,
            children: u[s]
          })]
        })]
      }), (0, t.jsx)(r.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        className: c.title,
        children: n
      }), (0, t.jsxs)("div", {
        className: c.inline,
        children: [(0, t.jsxs)(r.Text, {
          color: "header-secondary",
          variant: "text-xs/medium",
          className: c.alignCenter,
          children: [(0, t.jsx)(_.default, {
            width: 16,
            height: 16,
            className: c.icon
          }), l]
        }), i > 0 && (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("span", {
            className: c.bullet,
            children: "•"
          }), (0, t.jsxs)(r.Text, {
            color: "header-secondary",
            variant: "text-xs/medium",
            className: c.alignCenter,
            children: [(0, t.jsx)("span", {
              role: "img",
              "aria-label": d.default.Messages.REACTIONS,
              className: c.icon,
              children: "❤️"
            }), i]
          })]
        }), (0, t.jsx)("span", {
          className: c.bullet,
          children: "•"
        }), (0, t.jsx)(r.Text, {
          color: "header-secondary",
          variant: "text-xs/medium",
          children: o
        })]
      })]
    }), null != M && (0, t.jsx)("img", {
      src: M,
      alt: d.default.Messages.MESSAGE_ATTACHMENT_A11Y_LABEL.format({
        name: n
      }),
      className: c.attachment
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
    avatarSrc: _
  } = a;
  return (0, t.jsxs)("div", {
    className: c.message,
    children: [(0, t.jsx)("img", {
      src: _,
      alt: d.default.Messages.USER_SETTINGS_AVATAR,
      width: 40,
      height: 40
    }), (0, t.jsxs)("div", {
      children: [(0, t.jsxs)("div", {
        className: c.inline,
        children: [(0, t.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          children: n
        }), l && (0, t.jsx)("span", {
          className: c.opTag,
          children: d.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER
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
    className: c.previewContainer,
    style: {
      maxHeight: n
    },
    "aria-hidden": !0,
    children: (0, t.jsxs)("div", {
      className: c.preview,
      children: [(0, t.jsx)(i.default, {
        className: c.forumPostIcon
      }), (0, t.jsx)(r.Heading, {
        color: "header-primary",
        variant: "heading-lg/semibold",
        className: c.header,
        children: a
      }), (0, t.jsx)("div", {
        className: c.messageContainer,
        children: s.map((e, a) => (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(M, {
            ...e
          }, a), 0 === a && (0, t.jsxs)("div", {
            children: [(0, t.jsx)("hr", {
              className: c.topSeparator
            }), (0, t.jsxs)("div", {
              className: c.actionBar,
              children: [(0, t.jsxs)(r.Text, {
                color: "text-brand",
                variant: "text-xs/medium",
                className: c.fakeReactions,
                children: [(0, t.jsx)("span", {
                  role: "img",
                  "aria-label": d.default.Messages.REACTIONS,
                  className: c.icon,
                  children: "❤️"
                }), "17"]
              }), (0, t.jsxs)(r.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                className: c.following,
                children: [(0, t.jsx)(l.default, {
                  width: 16,
                  height: 16
                }), d.default.Messages.FOLLOW]
              })]
            }), (0, t.jsx)("hr", {
              className: c.bottomSeparator
            })]
          })]
        }))
      }), (0, t.jsx)("div", {
        className: c.chatInput,
        children: (0, t.jsx)(r.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: d.default.Messages.SEND_A_MESSAGE
        })
      })]
    })
  })
}

function m(e) {
  let {
    id: a
  } = e, [s, l] = n.useState(0), _ = n.useRef(null), {
    tags: i,
    posts: d,
    postPreview: M,
    ariaLabel: m
  } = (0, o.default)(a);
  return n.useEffect(() => {
    l(0)
  }, [a]), n.useEffect(() => {
    var e;
    0 === s && (null == _ ? void 0 : null === (e = _.current) || void 0 === e ? void 0 : e.clientHeight) != null && l(_.current.clientHeight - 40)
  }, [s]), (0, t.jsxs)("div", {
    className: c.container,
    role: "image",
    "aria-label": m,
    children: [(0, t.jsxs)("div", {
      ref: _,
      className: c.browser,
      "aria-hidden": !0,
      children: [(0, t.jsx)("div", {
        className: c.tags,
        children: i.map((e, a) => (0, t.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-xs/medium",
          className: c.tag,
          children: e
        }, a))
      }), (0, t.jsx)("div", {
        className: c.posts,
        children: d.map((e, a) => (0, t.jsx)(u, {
          ...e,
          tags: i
        }, a))
      })]
    }), (0, t.jsx)(E, {
      ...M,
      maxHeight: s
    })]
  })
}