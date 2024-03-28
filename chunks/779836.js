"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("718017"),
  r = n("399606"),
  o = n("481060"),
  u = n("511010"),
  d = n("839523"),
  c = n("446183"),
  f = n("677281"),
  h = n("765104"),
  m = n("477291"),
  p = n("531578"),
  E = n("959517"),
  C = n("689938"),
  g = n("805133");

function S(e) {
  let {
    summary: t,
    channel: n
  } = e, l = (0, r.useStateFromStores)([h.default], () => h.default.summaryFeedback(t)), s = (e, a) => {
    e.stopPropagation(), (0, m.default)({
      summary: t,
      channel: n,
      rating: a
    })
  }, u = (0, i.useTransition)(null == l, {
    enter: {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    },
    leave: {
      opacity: 0
    },
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: !0
    }
  });
  return (0, a.jsx)(a.Fragment, {
    children: u((e, t) => t ? (0, a.jsx)("div", {
      className: g.summaryFeedbackWrapper,
      children: (0, a.jsxs)(i.animated.div, {
        style: e,
        className: g.summaryFeedback,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: C.default.Messages.SUMMARY_FEEDBACK
        }), (0, a.jsx)(o.Clickable, {
          onClick: e => s(e, p.FeedbackRating.GOOD),
          children: (0, a.jsx)(f.default, {
            className: g.thumbIcon,
            width: 12,
            height: 12
          })
        }), (0, a.jsx)(o.Clickable, {
          onClick: e => s(e, p.FeedbackRating.BAD),
          children: (0, a.jsx)(c.default, {
            className: g.thumbIcon,
            width: 12,
            height: 12
          })
        })]
      })
    }) : null)
  })
}

function _(e) {
  var t, n;
  let l, {
      item: i,
      channel: o,
      index: c
    } = e,
    f = (0, r.useStateFromStores)([h.default], () => h.default.selectedSummary(o.id));
  if (null == f) return null;
  let m = null != i.unreadId,
    p = null != i.content;
  return l = p ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.default, {
      className: g.summaryStartIcon,
      width: 16,
      height: 16
    }), i.content]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(S, {
      summary: f,
      channel: o
    }), (0, a.jsx)(d.default, {
      className: g.summaryEndIcon,
      width: 16,
      height: 16
    })]
  }), (0, a.jsx)(u.default, {
    className: s()(g.summaryDivider, p ? g.summaryDividerStart : g.summaryDividerEnd),
    contentClassName: p ? g.summaryStartContent : g.summaryEndContent,
    isUnread: m,
    id: m ? E.NEW_MESSAGE_BAR_ID : void 0,
    children: l
  }, "divider-".concat(null !== (n = null !== (t = i.contentKey) && void 0 !== t ? t : i.unreadId) && void 0 !== n ? n : c))
}