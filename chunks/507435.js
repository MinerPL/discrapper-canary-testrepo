"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var s, a, l = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("468194"),
  d = n("304497"),
  c = n("481060"),
  f = n("904245"),
  E = n("596454"),
  _ = n("377171"),
  m = n("702346"),
  T = n("809026"),
  I = n("139256"),
  p = n("489887"),
  h = n("689938"),
  N = n("69959");

function S() {
  return (0, l.jsx)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: _.default.INTERACTIVE_NORMAL,
    "aria-hidden": !0,
    children: (0, l.jsx)("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM5.70711 9.29289C5.31658 8.90237 4.68342 8.90237 4.29289 9.29289C3.90237 9.68342 3.90237 10.3166 4.29289 10.7071L5.08579 11.5L4.29289 12.2929C3.90237 12.6834 3.90237 13.3166 4.29289 13.7071C4.68342 14.0976 5.31658 14.0976 5.70711 13.7071L6.5 12.9142L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071C9.09763 13.3166 9.09763 12.6834 8.70711 12.2929L7.91421 11.5L8.70711 10.7071C9.09763 10.3166 9.09763 9.68342 8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289L6.5 10.0858L5.70711 9.29289ZM15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289L17.5 10.0858L18.2929 9.29289C18.6834 8.90237 19.3166 8.90237 19.7071 9.29289C20.0976 9.68342 20.0976 10.3166 19.7071 10.7071L18.9142 11.5L19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071C19.3166 14.0976 18.6834 14.0976 18.2929 13.7071L17.5 12.9142L16.7071 13.7071C16.3166 14.0976 15.6834 14.0976 15.2929 13.7071C14.9024 13.3166 14.9024 12.6834 15.2929 12.2929L16.0858 11.5L15.2929 10.7071C14.9024 10.3166 14.9024 9.68342 15.2929 9.29289ZM9.08869 17.5563C8.78148 18.0152 8.16038 18.1382 7.70142 17.831C7.24247 17.5238 7.11947 16.9027 7.42669 16.4437C8.41166 14.9723 10.092 14 11.9999 14C13.9078 14 15.5881 14.9723 16.5731 16.4437C16.8803 16.9027 16.7573 17.5238 16.2984 17.831C15.8394 18.1382 15.2183 18.0152 14.9111 17.5563C14.2815 16.6158 13.2124 16 11.9999 16C10.7874 16 9.71825 16.6158 9.08869 17.5563Z",
      fill: "currentColor"
    })
  })
}

function C(e) {
  let t, {
    hasNoVotes: n,
    victorEmoji: s
  } = e;
  if (n) t = (0, l.jsx)(S, {});
  else if (null != s) {
    let e = "" !== s.name ? s.name : s.displayName;
    t = (0, l.jsx)(E.default, {
      emojiId: s.id,
      emojiName: e,
      animated: s.animated
    })
  }
  return null != t ? (0, l.jsx)("div", {
    className: N.imageContainer,
    children: t
  }) : null
}(s = a || (a = {})).NO_VOTES = "NO_VOTES", s.VICTOR = "VICTOR", s.TIE = "TIE";

function A(e) {
  let t, {
    type: n,
    ...s
  } = e;
  switch (n) {
    case "NO_VOTES":
      t = (0, l.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "text-normal",
        scaleFontToUserSetting: !0,
        children: h.default.Messages.POLL_RESULT_NO_VOTERS
      });
      break;
    case "VICTOR":
      let {
        victorAnswerText: a, victorVotePercentage: i
      } = s;
      t = (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)("div", {
          className: N.victorAnswer,
          children: [(0, l.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            className: N.victorAnswerText,
            scaleFontToUserSetting: !0,
            children: a
          }), (0, l.jsx)(I.PollAnswerVotedIcon, {
            size: 16,
            className: N.victorIcon,
            isVictor: !0,
            isExpired: !0
          })]
        }), (0, l.jsxs)(c.Text, {
          variant: "text-xs/medium",
          color: "input-placeholder-text",
          scaleFontToUserSetting: !0,
          children: [h.default.Messages.POLL_RESULT_WINNING, " • ", i, "%"]
        })]
      });
      break;
    case "TIE":
      let {
        tiedVotePercentage: r
      } = s;
      t = (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-normal",
          scaleFontToUserSetting: !0,
          children: h.default.Messages.POLL_RESULT_TIED
        }), (0, l.jsxs)(c.Text, {
          variant: "text-xs/medium",
          color: "input-placeholder-text",
          scaleFontToUserSetting: !0,
          children: [r, "%"]
        })]
      })
  }
  return (0, l.jsx)("div", {
    className: N.description,
    children: t
  })
}

function g(e) {
  let {
    className: t,
    data: n,
    onClickPollLink: s
  } = e, a = i.useMemo(() => (function(e) {
    if (0 === e.totalVotes) return {
      type: "NO_VOTES"
    };
    let t = null != e.victorAnswerId,
      n = e.totalVotes > 0 ? Math.round(e.victorAnswerVotes / e.totalVotes * 100) : 0;
    return t ? {
      type: "VICTOR",
      victorAnswerText: e.victorAnswerText,
      victorVotePercentage: n
    } : {
      type: "TIE",
      tiedVotePercentage: n
    }
  })(n), [n]);
  return (0, l.jsxs)("div", {
    className: o()(N.container, t),
    children: [(0, l.jsx)(C, {
      hasNoVotes: "NO_VOTES" === a.type,
      victorEmoji: n.victorEmoji
    }), (0, l.jsx)(A, {
      ...a
    }), (0, l.jsx)(c.Button, {
      className: N.button,
      size: c.Button.Sizes.TINY,
      onClick: s,
      color: c.Button.Colors.PRIMARY,
      children: (0, l.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "none",
        scaleFontToUserSetting: !0,
        children: h.default.Messages.POLL_RESULT_VIEW_POLL
      })
    })]
  })
}

function M(e) {
  var t;
  let {
    message: n,
    compact: s
  } = e, a = n.embeds[0], r = i.useMemo(() => (0, T.default)(a), [a]), o = (0, u.truncateText)(null !== (t = null == r ? void 0 : r.questionText) && void 0 !== t ? t : "", p.POLL_RESULT_MESSAGE_POLL_TITLE_MAX_VISIBLE_CHARS), c = n.messageReference, E = i.useCallback(() => {
    null != c && f.default.jumpToMessage({
      channelId: c.channel_id,
      messageId: c.message_id,
      flash: !0,
      returnMessageId: n.id
    })
  }, [n.id, c]);
  return null == r ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(m.default, {
      iconNode: (0, l.jsx)(d.PollsIcon, {
        width: 16,
        height: 16
      }),
      timestamp: n.timestamp,
      compact: s,
      children: h.default.Messages.POLL_RESULT_MESSAGE_HEADER.format({
        title: o,
        titleOnClick: E
      })
    }), (0, l.jsx)(g, {
      className: N.embed,
      data: r,
      onClickPollLink: E
    })]
  })
}