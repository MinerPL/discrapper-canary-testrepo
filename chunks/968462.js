"use strict";
s.r(t), s.d(t, {
  ForumPostMediaPreviewPlaceholder: function() {
    return l
  },
  ForumPostContentPlaceholder: function() {
    return r
  },
  default: function() {
    return i
  }
});
var a = s("37983");
s("884691");
var n = s("687791");

function l() {
  return (0, a.jsx)("div", {
    className: n.bodyMedia
  })
}

function r() {
  return (0, a.jsxs)("div", {
    className: n.content,
    children: [(0, a.jsxs)("div", {
      className: n.titleAndMessage,
      children: [(0, a.jsxs)("div", {
        className: n.header,
        children: [(0, a.jsxs)("div", {
          className: n.tags,
          children: [(0, a.jsx)("div", {
            className: n.tag
          }), (0, a.jsx)("div", {
            className: n.tag
          }), (0, a.jsx)("div", {
            className: n.tag
          })]
        }), (0, a.jsx)("div", {
          className: n.seperator
        })]
      }), (0, a.jsx)("div", {
        className: n.time
      }), (0, a.jsx)("div", {
        className: n.title
      }), (0, a.jsx)("div", {
        className: n.firstMessage
      })]
    }), (0, a.jsxs)("div", {
      className: n.engagement,
      children: [(0, a.jsx)("div", {
        className: n.reactions
      }), (0, a.jsx)("div", {
        className: n.replies
      })]
    })]
  })
}

function i() {
  return (0, a.jsx)("div", {
    className: n.card,
    children: (0, a.jsxs)("div", {
      className: n.body,
      children: [(0, a.jsx)(r, {}), (0, a.jsx)(l, {})]
    })
  })
}