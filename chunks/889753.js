"use strict";
a.r(t), a.d(t, {
  ForumPostContentPlaceholder: function() {
    return r
  },
  ForumPostMediaPreviewPlaceholder: function() {
    return l
  },
  default: function() {
    return i
  }
});
var s = a("735250");
a("470079");
var n = a("983962");

function l() {
  return (0, s.jsx)("div", {
    className: n.bodyMedia
  })
}

function r() {
  return (0, s.jsxs)("div", {
    className: n.content,
    children: [(0, s.jsxs)("div", {
      className: n.titleAndMessage,
      children: [(0, s.jsxs)("div", {
        className: n.header,
        children: [(0, s.jsxs)("div", {
          className: n.tags,
          children: [(0, s.jsx)("div", {
            className: n.tag
          }), (0, s.jsx)("div", {
            className: n.tag
          }), (0, s.jsx)("div", {
            className: n.tag
          })]
        }), (0, s.jsx)("div", {
          className: n.seperator
        })]
      }), (0, s.jsx)("div", {
        className: n.time
      }), (0, s.jsx)("div", {
        className: n.title
      }), (0, s.jsx)("div", {
        className: n.firstMessage
      })]
    }), (0, s.jsxs)("div", {
      className: n.engagement,
      children: [(0, s.jsx)("div", {
        className: n.reactions
      }), (0, s.jsx)("div", {
        className: n.replies
      })]
    })]
  })
}

function i() {
  return (0, s.jsx)("div", {
    className: n.card,
    children: (0, s.jsxs)("div", {
      className: n.body,
      children: [(0, s.jsx)(r, {}), (0, s.jsx)(l, {})]
    })
  })
}