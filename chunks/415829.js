"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  i = n("446674"),
  r = n("77078"),
  o = n("272030"),
  u = n("913491"),
  d = n("42203"),
  c = n("299039"),
  E = n("69890"),
  f = n("610730"),
  _ = n("487269"),
  T = n("292657"),
  I = n("967241"),
  m = n("49111"),
  N = n("782340"),
  p = n("752581");

function S(e) {
  let {
    message: t,
    compact: n
  } = e, a = (0, i.useStateFromStores)([d.default], () => d.default.getChannel(c.default.castMessageIdAsChannelId(t.id)));
  return null == a ? null : (0, s.jsx)(A, {
    channel: a,
    compact: n,
    isSystemMessage: (0, u.default)(t)
  })
}

function A(e) {
  let {
    channel: t,
    compact: a,
    isSystemMessage: u
  } = e, d = (0, i.useStateFromStores)([f.default], () => f.default.getCount(t.id)), c = function(e) {
    var t;
    let n = (0, i.useStateFromStores)([f.default], () => f.default.getMostRecentMessage(e.id)),
      a = (0, i.useStateFromStores)([f.default], () => f.default.getCount(e.id)),
      l = (0, _.useLastMessageTimestamp)(e);
    return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived) ? N.default.Messages.NO_RECENT_THREAD_MESSAGES : null == a || 0 === a ? N.default.Messages.NO_THREAD_MESSAGES : null == n ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("span", {
        children: N.default.Messages.NO_RECENT_THREAD_MESSAGES
      }), (0, s.jsx)("span", {
        className: p.timestamp,
        children: (0, _.getTimestampString)(l)
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(T.default, {
        message: n,
        channel: e
      }), (0, s.jsx)("span", {
        className: p.timestamp,
        children: (0, _.getTimestampString)(l)
      })]
    })
  }(t), S = null != d && d > 0;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      className: l(p.spine, {
        [p.cozy]: !a,
        [p.systemMessageSpine]: u
      })
    }), (0, s.jsx)(r.Clickable, {
      onClick: function(e) {
        e.stopPropagation(), (0, I.openThreadSidebarForViewing)(t, e.shiftKey)
      },
      onKeyDown: function(e) {
        e.stopPropagation();
        let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
          s = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
        (e.which === m.KeyboardKeys.SPACE || e.which === m.KeyboardKeys.ENTER) && (e.preventDefault(), (n || s) && (0, I.openThreadSidebarForViewing)(t, s))
      },
      onContextMenu: function(e) {
        (0, o.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await n.el("994827").then(n.bind(n, "994827"));
          return n => (0, s.jsx)(e, {
            channel: t,
            ...n
          })
        })
      },
      "aria-roledescription": N.default.Messages.THREAD_MESSAGE_ROLE_DESCRIPTION,
      className: l(p.container, {
        [p.systemMessageContainer]: u
      }),
      children: (0, s.jsxs)(r.BlockInteractions, {
        children: [(0, s.jsxs)("div", {
          className: p.topLine,
          children: [(0, s.jsx)(r.HiddenVisually, {
            children: N.default.Messages.THREAD
          }), (0, s.jsx)("span", {
            className: p.name,
            children: t.name
          }), (0, s.jsx)("span", {
            className: p.cta,
            "aria-hidden": !S,
            children: (0, E.formatMessageCountLabel)(d, t.id)
          })]
        }), (0, s.jsx)("span", {
          "aria-hidden": !0,
          className: l(p.bottomLine),
          children: c
        })]
      })
    })]
  })
}