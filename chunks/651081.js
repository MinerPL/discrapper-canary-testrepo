"use strict";
l.r(t), l.d(t, {
  default: function() {
    return V
  }
}), l("47120"), l("653041"), l("411104");
var a = l("735250"),
  n = l("470079"),
  s = l("120356"),
  r = l.n(s),
  i = l("442837"),
  o = l("481060"),
  d = l("129861"),
  u = l("700582"),
  c = l("410030"),
  m = l("566006"),
  f = l("222677"),
  h = l("592125"),
  x = l("594174"),
  g = l("186095"),
  p = l("514342"),
  j = l("768581"),
  T = l("176354"),
  v = l("5192"),
  S = l("91047"),
  _ = l("79390"),
  E = l("918088"),
  N = l("22864"),
  L = l("981631"),
  C = l("689938"),
  M = l("957036"),
  O = l("144452");
let R = m.ReactionTypes.VOTE;

function I() {
  let e = (0, c.default)();
  return (0, a.jsxs)(g.default, {
    theme: e,
    children: [(0, a.jsx)(g.EmptyStateImage, {
      darkSrc: O,
      lightSrc: O,
      width: 106,
      height: 100,
      style: {
        marginBottom: 10
      }
    }), (0, a.jsx)(g.EmptyStateText, {
      note: C.default.Messages.POLL_VOTES_NO_RESULTS_SUBTITLE,
      noteClassName: M.emptyText,
      className: M.emptyTitle,
      children: C.default.Messages.POLL_VOTES_NO_RESULTS_TITLE
    })]
  })
}

function A(e) {
  var t;
  let {
    emoji: l,
    emojiSize: n,
    imageClassNames: s,
    textClassNames: r
  } = e, i = null == l.id ? T.default.getURL(l.name) : j.default.getEmojiURL({
    id: l.id,
    animated: null !== (t = l.animated) && void 0 !== t && t,
    size: n
  });
  return null != i && "" !== i ? (0, a.jsx)("img", {
    className: s,
    src: i,
    alt: l.name
  }) : (0, a.jsx)("span", {
    className: r,
    children: l.name
  })
}

function b(e) {
  let {
    poll: t,
    reactionVoteCounts: l,
    selectedAnswerId: n,
    onSelectAnswer: s
  } = e;
  return (0, a.jsx)(o.TabBar, {
    look: "custom",
    orientation: "vertical",
    "aria-label": C.default.Messages.POLL_ANSWER_VOTES_MODAL_TAB_GROUP_LABEL,
    selectedItem: n,
    onItemSelect: s,
    children: t.answers.map(e => {
      var t;
      let s = String(e.answer_id),
        i = null !== (t = l[s]) && void 0 !== t ? t : 0,
        {
          emoji: d,
          text: u
        } = e.poll_media,
        c = C.default.Messages.POLL_ANSWER_VOTES_MODAL_VOTE_TAB.format({
          numVotes: i,
          option: u
        }),
        m = n === s;
      return (0, a.jsxs)(o.TabBar.Item, {
        id: s,
        className: r()({
          [M.voteDefault]: !m,
          [M.voteSelected]: m
        }),
        "aria-label": c,
        selectedItem: n,
        children: [null != d ? (0, a.jsx)(A, {
          emoji: d,
          emojiSize: 16,
          imageClassNames: M.emoji,
          textClassNames: r()(M.emoji, M.emojiText),
          "aria-hidden": !0
        }) : null, (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          lineClamp: 1,
          children: (0, a.jsx)(p.default, {
            position: "left",
            "aria-hidden": !0,
            children: u
          })
        }), (0, a.jsxs)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          className: M.voteCount,
          children: ["(", i.toLocaleString(), ")"]
        })]
      }, s)
    })
  })
}

function y(e) {
  let {
    user: t,
    channel: l
  } = e, n = (0, i.useStateFromStores)([x.default], () => x.default.getUser(t.id), [t]), s = v.default.useName(l.guild_id, l.id, t);
  return (0, a.jsxs)("div", {
    className: M.voterDefault,
    onContextMenu: e => (0, S.openUserContextMenu)(e, t, l),
    children: [(0, a.jsx)("div", {
      className: M.voterAvatarContainer,
      children: (0, a.jsx)(u.default, {
        user: null != n ? n : t,
        size: o.AvatarSizes.SIZE_24,
        "aria-hidden": !0
      })
    }), (0, a.jsxs)(o.Text, {
      tag: "span",
      variant: "text-md/normal",
      className: M.name,
      "aria-label": s,
      children: [(0, a.jsx)("span", {
        className: t.isPomelo() ? "" : M.nickname,
        children: s
      }), (0, a.jsx)(d.default, {
        user: t,
        className: M.tagFaded,
        usernameClass: M.username,
        discriminatorClass: M.discriminator,
        forceUsername: !0
      })]
    })]
  })
}

function w(e) {
  let {
    message: t,
    reaction: l,
    channel: s
  } = e, {
    reactors: r,
    hasMore: i
  } = (0, N.default)({
    channelId: s.id,
    messageId: t.id,
    reaction: l
  }), d = n.useRef(null), u = n.useRef(null), [c, m] = n.useState(!1), h = n.useCallback(async () => {
    let e = u.current;
    m(!0);
    let a = await f.getReactors({
      channelId: s.id,
      messageId: t.id,
      emoji: l.emoji,
      limit: L.DEFAULT_NUM_REACTION_USERS,
      after: e,
      type: R
    });
    u.current = a[a.length - 1].id, m(!1)
  }, [s.id, t.id, l.emoji]);
  n.useEffect(() => {
    h()
  }, []);
  let x = n.useCallback(() => {
      let {
        current: e
      } = d;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - 40 && i && !c && h()
    }, [d, i, c, h]),
    g = n.useCallback((e, t) => {
      if (1 === e) return 0 === t ? 40 : 0;
      if (0 === e) {
        if (0 === t && 0 === r.length) return 440;
        if (null != r[t]) return 40
      }
      return 0
    }, [r]),
    p = n.useCallback(e => {
      let {
        section: t,
        row: l
      } = e, n = r[l];
      if (1 === t) return 0 === l ? (0, a.jsx)(o.Spinner, {
        className: M.spinnerMore
      }, "hasMore") : null;
      return 0 === r.length && c ? (0, a.jsx)(o.Spinner, {
        className: M.spinner
      }, "loadingMore") : null != n && (0, a.jsx)(y, {
        channel: s,
        user: n
      }, n.id)
    }, [s, c, r]),
    j = n.useMemo(() => {
      let e = [];
      return 0 === r.length && c ? e.push(0) : (e.push(r.length), i && e.push(1)), e
    }, [i, c, r.length]);
  return (0, a.jsx)("div", {
    className: M.votersListContainer,
    children: (0, a.jsx)(o.List, {
      className: M.voters,
      fade: !0,
      ref: d,
      sections: j,
      sectionHeight: 0,
      rowHeight: g,
      renderRow: p,
      onScroll: i ? x : void 0
    })
  })
}

function V(e) {
  var t;
  let {
    message: l,
    initialAnswerId: s,
    onClose: r,
    transitionState: d
  } = e, u = (0, i.useStateFromStores)([h.default], () => h.default.getChannel(l.getChannelId())), [c, m] = n.useState(s), f = n.useMemo(() => {
    if (null != l.reactions) return (0, E.reactionForId)(l.reactions, c)
  }, [l.reactions, c]), x = n.useMemo(() => (0, _.getTotalVotes)(l.reactions), [l.reactions]), g = n.useMemo(() => (function(e) {
    let t = {};
    for (let n of e) {
      var l, a;
      let e = null !== (a = null === (l = n.count_details) || void 0 === l ? void 0 : l.vote) && void 0 !== a ? a : 0,
        s = n.emoji.id;
      null != s && (t[s] = e)
    }
    return t
  })(l.reactions), [l.reactions]), p = g[c], j = n.useMemo(() => {
    var e;
    let t = {};
    return null === (e = l.poll) || void 0 === e || e.answers.forEach(e => {
      var l;
      (null == e ? void 0 : e.answer_id) != null && (null === (l = e.poll_media) || void 0 === l ? void 0 : l.text) != null && (t[e.answer_id] = e.poll_media.text)
    }), t
  }, [null === (t = l.poll) || void 0 === t ? void 0 : t.answers]), T = C.default.Messages.POLL_ANSWER_VOTES_MODAL_VOTE_TAB.format({
    numVotes: p,
    option: j[c]
  });
  if (null == u) throw Error("PollVotesModal.render: Message does not have a channelId");
  if (null == l.poll) throw Error("PollVotesModal.render: Message does not have a poll");
  return (0, a.jsxs)(o.ModalRoot, {
    "aria-label": C.default.Messages.POLL_ANSWER_VOTES_MODAL_TITLE,
    transitionState: d,
    size: o.ModalSize.MEDIUM,
    children: [(0, a.jsxs)(o.ModalHeader, {
      className: M.header,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: M.question,
          children: l.poll.question.text
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-normal",
          children: C.default.Messages.POLL_VOTES_COUNT.format({
            count: x.toLocaleString()
          })
        })]
      }), (0, a.jsx)(o.ModalCloseButton, {
        onClick: r,
        className: M.close
      })]
    }), (0, a.jsxs)(o.ModalContent, {
      className: M.content,
      children: [(0, a.jsx)(o.Scroller, {
        className: M.scroller,
        fade: !0,
        children: (0, a.jsx)(b, {
          poll: l.poll,
          selectedAnswerId: c,
          onSelectAnswer: m,
          reactionVoteCounts: g
        })
      }), (0, a.jsx)(o.TabBar.Panel, {
        id: c,
        "aria-label": T,
        className: M.panel,
        children: null != f && p > 0 ? (0, a.jsx)(w, {
          message: l,
          reaction: f,
          channel: u
        }) : (0, a.jsx)(I, {})
      })]
    })]
  })
}