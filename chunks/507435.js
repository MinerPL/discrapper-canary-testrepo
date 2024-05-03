"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("304497"),
  o = n("481060"),
  u = n("904245"),
  d = n("596454"),
  c = n("702346"),
  f = n("809026"),
  E = n("689938"),
  _ = n("474059");

function m(e) {
  var t;
  let {
    className: n,
    data: l,
    message: r
  } = e, c = l.totalVotes > 0 ? Math.round(l.victorAnswerVotes / l.totalVotes * 100) : 0, f = r.messageReference, m = a.useCallback(() => {
    null != f && u.default.jumpToMessage({
      channelId: f.channel_id,
      messageId: f.message_id,
      flash: !0,
      returnMessageId: r.id
    })
  }, [r.id, f]);
  return (0, s.jsxs)("div", {
    className: i()(_.container, n),
    children: [null != l.victorEmoji ? (0, s.jsx)(d.default, {
      className: _.emoji,
      emojiId: l.victorEmoji.id,
      emojiName: l.victorEmoji.name,
      animated: l.victorEmoji.animated
    }) : null, (0, s.jsx)(o.Text, {
      className: _.title,
      variant: "text-sm/semibold",
      color: "text-normal",
      children: null !== (t = l.victorAnswerText) && void 0 !== t ? t : "N/A"
    }), (0, s.jsxs)(o.Text, {
      className: _.description,
      variant: "text-xs/medium",
      color: "input-placeholder-text",
      children: [E.default.Messages.POLL_RESULT_WINNING, " • ", c, "%"]
    }), (0, s.jsx)(o.Button, {
      className: _.button,
      size: o.Button.Sizes.TINY,
      onClick: m,
      color: o.Button.Colors.PRIMARY,
      children: E.default.Messages.POLL_RESULT_VIEW_POLL
    })]
  })
}

function T(e) {
  let {
    message: t,
    compact: n
  } = e, l = t.embeds[0], i = a.useMemo(() => (0, f.default)(l), [l]);
  return null == i ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(c.default, {
      iconNode: (0, s.jsx)(r.PollsIcon, {
        width: 16,
        height: 16
      }),
      timestamp: t.timestamp,
      compact: n,
      children: E.default.Messages.POLL_RESULT_MESSAGE_TITLE
    }), (0, s.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-normal",
      children: i.questionText
    }), (0, s.jsx)(m, {
      className: _.embed,
      data: i,
      message: t
    })]
  })
}