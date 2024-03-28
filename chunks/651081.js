"use strict";
a.r(t), a.d(t, {
  default: function() {
    return U
  }
}), a("47120"), a("653041"), a("411104");
var l = a("735250"),
  n = a("470079"),
  s = a("803997"),
  r = a.n(s),
  i = a("442837"),
  o = a("481060"),
  u = a("129861"),
  d = a("700582"),
  c = a("410030"),
  m = a("566006"),
  f = a("222677"),
  h = a("592125"),
  x = a("594174"),
  g = a("186095"),
  j = a("514342"),
  p = a("768581"),
  S = a("176354"),
  T = a("5192"),
  v = a("91047"),
  N = a("79390"),
  C = a("918088"),
  E = a("22864"),
  _ = a("981631"),
  M = a("689938"),
  L = a("381463"),
  R = a("144452");
let y = m.ReactionTypes.VOTE;

function O() {
  let e = (0, c.default)();
  return (0, l.jsxs)(g.default, {
    theme: e,
    children: [(0, l.jsx)(g.EmptyStateImage, {
      darkSrc: R,
      lightSrc: R,
      width: 106,
      height: 100,
      style: {
        marginBottom: 10
      }
    }), (0, l.jsx)(g.EmptyStateText, {
      note: M.default.Messages.POLL_VOTES_NO_RESULTS_SUBTITLE,
      noteClassName: L.emptyText,
      className: L.emptyTitle,
      children: M.default.Messages.POLL_VOTES_NO_RESULTS_TITLE
    })]
  })
}

function I(e) {
  var t;
  let {
    emoji: a,
    emojiSize: n,
    imageClassNames: s,
    textClassNames: r
  } = e, i = null == a.id ? S.default.getURL(a.name) : p.default.getEmojiURL({
    id: a.id,
    animated: null !== (t = a.animated) && void 0 !== t && t,
    size: n
  });
  return null != i && "" !== i ? (0, l.jsx)("img", {
    className: s,
    src: i,
    alt: a.name
  }) : (0, l.jsx)("span", {
    className: r,
    children: a.name
  })
}

function b(e) {
  let {
    answer: t,
    count: a,
    isSelected: s,
    setSelected: i
  } = e, {
    emoji: u,
    text: d
  } = t.poll_media, c = n.useCallback(() => i(String(t.answer_id)), [i, t.answer_id]), m = M.default.Messages.POLL_ANSWER_VOTES_MODAL_VOTE_TAB.format({
    numVotes: a,
    option: d
  });
  return (0, l.jsxs)(o.Clickable, {
    className: r()({
      [L.voteDefault]: !s,
      [L.voteSelected]: s
    }),
    "aria-label": m,
    onClick: c,
    children: [null != u ? (0, l.jsx)(I, {
      emoji: u,
      emojiSize: 16,
      imageClassNames: L.emoji,
      textClassNames: r()(L.emoji, L.emojiText),
      "aria-hidden": !0
    }) : null, (0, l.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "text-secondary",
      lineClamp: 1,
      children: (0, l.jsx)(j.default, {
        position: "left",
        "aria-hidden": !0,
        children: d
      })
    }), (0, l.jsxs)(o.Text, {
      variant: "text-sm/semibold",
      color: "text-secondary",
      className: L.voteCount,
      children: ["(", a, ")"]
    })]
  })
}

function w(e) {
  let {
    user: t,
    channel: a
  } = e, n = (0, i.useStateFromStores)([x.default], () => x.default.getUser(t.id), [t]), s = T.default.useName(a.guild_id, a.id, t);
  return (0, l.jsxs)("div", {
    className: L.voterDefault,
    onContextMenu: e => (0, v.openUserContextMenu)(e, t, a),
    children: [(0, l.jsx)("div", {
      className: L.voterAvatarContainer,
      children: (0, l.jsx)(d.default, {
        user: null != n ? n : t,
        size: o.AvatarSizes.SIZE_24,
        "aria-hidden": !0
      })
    }), (0, l.jsxs)(o.Text, {
      tag: "span",
      variant: "text-md/normal",
      className: L.name,
      "aria-label": s,
      children: [(0, l.jsx)("span", {
        className: t.isPomelo() ? "" : L.nickname,
        children: s
      }), (0, l.jsx)(u.default, {
        user: t,
        className: L.tagFaded,
        usernameClass: L.username,
        discriminatorClass: L.discriminator,
        forceUsername: !0
      })]
    })]
  })
}

function k(e) {
  let {
    message: t,
    reaction: a,
    channel: s
  } = e, {
    reactors: r,
    hasMore: i
  } = (0, E.default)({
    channelId: s.id,
    messageId: t.id,
    reaction: a
  }), u = n.useRef(null), d = n.useRef(null), [c, m] = n.useState(!1), h = n.useCallback(async () => {
    let e = d.current;
    m(!0);
    let l = await f.getReactors({
      channelId: s.id,
      messageId: t.id,
      emoji: a.emoji,
      limit: _.DEFAULT_NUM_REACTION_USERS,
      after: e,
      type: y
    });
    d.current = l[l.length - 1].id, m(!1)
  }, [s.id, t.id, a.emoji]);
  n.useEffect(() => {
    h()
  }, []);
  let x = n.useCallback(() => {
      let {
        current: e
      } = u;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - 40 && i && c && h()
    }, [u, i, c, h]),
    g = n.useCallback((e, t) => {
      if (1 === e) return 0 === t ? 40 : 0;
      if (0 === e) {
        if (0 === t && 0 === r.length) return 440;
        if (null != r[t]) return 40
      }
      return 0
    }, [r]),
    j = n.useCallback(e => {
      let {
        section: t,
        row: a
      } = e, n = r[a];
      if (1 === t) return 0 === a ? (0, l.jsx)(o.Spinner, {
        className: L.spinnerMore
      }, "hasMore") : null;
      return 0 === r.length && c ? (0, l.jsx)(o.Spinner, {
        className: L.spinner
      }, "loadingMore") : null != n && (0, l.jsx)(w, {
        channel: s,
        user: n
      }, n.id)
    }, [s, c, r]),
    p = n.useMemo(() => {
      let e = [];
      return 0 === r.length && c ? e.push(0) : (e.push(r.length), i && e.push(1)), e
    }, [i, c, r.length]);
  return (0, l.jsx)("div", {
    className: L.votersListContainer,
    children: (0, l.jsx)(o.List, {
      className: L.voters,
      fade: !0,
      ref: u,
      sections: p,
      sectionHeight: 0,
      rowHeight: g,
      renderRow: j,
      onScroll: i ? x : void 0
    })
  })
}

function U(e) {
  let {
    message: t,
    initialAnswerId: a,
    onClose: s,
    transitionState: r
  } = e, u = (0, i.useStateFromStores)([h.default], () => h.default.getChannel(t.getChannelId())), [d, c] = n.useState(a), m = n.useMemo(() => {
    if (null != t.reactions) return (0, C.reactionForId)(t.reactions, d)
  }, [t.reactions, d]), f = n.useMemo(() => (0, N.getTotalVotes)(t.reactions), [t.reactions]), x = n.useMemo(() => (function(e) {
    let t = {};
    for (let n of e) {
      var a, l;
      let e = null !== (l = null === (a = n.count_details) || void 0 === a ? void 0 : a.vote) && void 0 !== l ? l : 0,
        s = n.emoji.id;
      null != s && (t[s] = e)
    }
    return t
  })(t.reactions), [t.reactions]), g = x[d];
  if (null == u) throw Error("PollVotesModal.render: Message does not have a channelId");
  if (null == t.poll) throw Error("PollVotesModal.render: Message does not have a poll");
  return (0, l.jsxs)(o.ModalRoot, {
    "aria-label": M.default.Messages.POLL_ANSWER_VOTES_MODAL_TITLE,
    transitionState: r,
    size: o.ModalSize.MEDIUM,
    children: [(0, l.jsxs)(o.ModalHeader, {
      className: L.header,
      children: [(0, l.jsxs)("div", {
        children: [(0, l.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: L.question,
          children: t.poll.question.text
        }), (0, l.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-normal",
          children: M.default.Messages.POLL_VOTES_COUNT.format({
            count: String(f)
          })
        })]
      }), (0, l.jsx)(o.ModalCloseButton, {
        onClick: s,
        className: L.close
      })]
    }), (0, l.jsxs)(o.ModalContent, {
      className: L.content,
      children: [(0, l.jsx)(o.Scroller, {
        className: L.scroller,
        fade: !0,
        children: t.poll.answers.map(e => {
          var t;
          let a = e.answer_id,
            n = d === String(a),
            s = null !== (t = x[a]) && void 0 !== t ? t : 0;
          return (0, l.jsx)(b, {
            isSelected: n,
            setSelected: c,
            answer: e,
            count: s
          }, a)
        })
      }), null != m && g > 0 ? (0, l.jsx)(k, {
        message: t,
        reaction: m,
        channel: u
      }) : (0, l.jsx)(O, {})]
    })]
  })
}