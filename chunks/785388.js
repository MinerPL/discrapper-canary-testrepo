"use strict";
i.r(t), i.d(t, {
  default: function() {
    return et
  }
}), i("47120"), i("653041"), i("177593"), i("411104");
var n = i("735250"),
  a = i("470079"),
  s = i("803997"),
  l = i.n(s),
  o = i("392711"),
  r = i.n(o),
  u = i("866442"),
  d = i("442837"),
  c = i("780384"),
  h = i("481060"),
  f = i("596454"),
  m = i("129861"),
  p = i("700582"),
  g = i("607070"),
  T = i("633302"),
  v = i("712057"),
  S = i("660189"),
  E = i("372900"),
  R = i("642101"),
  I = i("566006"),
  N = i("620652"),
  C = i("815605"),
  _ = i("222677"),
  x = i("995774"),
  O = i("665906"),
  j = i("210887"),
  A = i("314897"),
  M = i("592125"),
  b = i("271383"),
  y = i("542578"),
  L = i("375954"),
  P = i("496675"),
  U = i("699516"),
  w = i("594174"),
  F = i("285952"),
  D = i("465670"),
  B = i("768581"),
  k = i("176354"),
  H = i("5192"),
  V = i("709054"),
  G = i("91047"),
  z = i("981631"),
  W = i("689938"),
  K = i("441584"),
  J = i("794711");

function Y(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}

function Z(e) {
  return null == e.id ? T.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}
let X = e => {
  let {
    emoji: t,
    channelId: i,
    messageId: s
  } = e, [o, r] = a.useState(!0), [u, d] = a.useState([]), c = a.useMemo(() => {
    if (null == u || u.length < 1) return;
    let e = (0, C.buildEffect)(t, u[0], i, {
      emojiSize: N.BurstReactionSize.LARGE,
      messageId: s
    });
    return (0, n.jsx)(N.default, {
      className: K.__invalid_effect,
      effect: e,
      emojiSize: N.BurstReactionSize.LARGE,
      onComplete: () => r(!1)
    })
  }, [u, t, i, s]);
  return a.useEffect(() => {
    let e = !1;
    return r(!0), !async function() {
      let i = await (0, k.getEmojiColors)(t);
      Array.isArray(i) && i.length > 0 && !e && d(i)
    }(), () => {
      e = !0
    }
  }, [t]), (0, n.jsxs)("div", {
    className: K.burstEmojiSection,
    children: [c, (0, n.jsx)(f.default, {
      className: l()(K.burstEmoji, {
        [K.hideEmoji]: o
      }),
      emojiId: t.id,
      emojiName: t.name,
      animated: t.animated,
      size: "reaction"
    }), (0, n.jsx)(h.Text, {
      variant: "text-md/medium",
      children: Z(t)
    })]
  })
};
class q extends a.PureComponent {
  render() {
    let {
      emoji: e,
      count: t,
      isSelected: i,
      setSelected: a,
      reactionType: s,
      colors: o
    } = this.props, r = Z(e), d = function(e, t, i, a) {
      let s = null == e.id ? k.default.getURL(e.name) : B.default.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: 24
      });
      return null != s && "" !== s ? (0, n.jsx)("img", {
        className: i,
        src: s,
        alt: e.name
      }) : (0, n.jsx)("span", {
        className: a,
        children: e.name
      })
    }(e, 24, K.emoji, l()(K.emoji, K.emojiText)), c = s === I.ReactionTypes.BURST, f = (c ? W.default.Messages.BURST_REACTION_REACTORS_A11Y : W.default.Messages.REACTION_REACTORS_A11Y).format({
      name: r,
      n: t
    }), m = {}, p = {};
    if (c) {
      let {
        backgroundColor: e = "",
        opacity: t = 1,
        accentColor: n = ""
      } = null != o ? o : {};
      if (p.color = n, i) {
        var g;
        m.background = null !== (g = (0, u.hex2rgb)(e, t)) && void 0 !== g ? g : ""
      }
    }
    return (0, n.jsx)(h.Tooltip, {
      position: "left",
      text: r,
      children: o => {
        let {
          onMouseEnter: r,
          onMouseLeave: u
        } = o;
        return (0, n.jsxs)(h.Clickable, {
          className: l()({
            [K.reactionDefault]: !i,
            [K.reactionSelected]: i
          }),
          "aria-label": f,
          onClick: () => a({
            emoji: e,
            reactionType: s
          }),
          onMouseEnter: r,
          onMouseLeave: u,
          style: m,
          children: [d, (0, n.jsx)(h.Text, {
            variant: "text-sm/bold",
            style: p,
            children: t
          })]
        })
      }
    })
  }
}

function Q(e) {
  let {
    emoji: t,
    user: i,
    message: a,
    channel: s,
    guildId: l,
    reactionType: o,
    onRemoveReactor: r,
    disableManage: u = !1
  } = e, c = (0, d.useStateFromStores)([A.default], () => A.default.getId()), f = (0, d.useStateFromStores)([w.default], () => w.default.getUser(i.id), [i]), g = (0, O.useIsActiveChannelOrUnarchivableThread)(s), T = (0, d.useStateFromStores)([P.default], () => P.default.can(z.Permissions.MANAGE_MESSAGES, s) && g) || c === i.id, v = (0, d.useStateFromStores)([b.default, M.default, U.default], () => H.default.getName(l, s.id, i));
  return (0, n.jsxs)(F.default, {
    className: K.reactorDefault,
    onContextMenu: e => (0, G.openUserContextMenu)(e, i, s),
    align: F.default.Align.CENTER,
    children: [(0, n.jsx)(F.default.Child, {
      wrap: !0,
      grow: 0,
      shrink: 0,
      className: J.marginReset,
      children: (0, n.jsx)(p.default, {
        user: null != f ? f : i,
        size: h.AvatarSizes.SIZE_24
      })
    }), (0, n.jsx)(F.default.Child, {
      children: (0, n.jsxs)(h.Text, {
        tag: "strong",
        variant: "text-md/normal",
        className: K.name,
        children: [null != v && "" !== v && (0, n.jsx)("span", {
          className: i.isPomelo() ? "" : K.nickname,
          children: v
        }), (0, n.jsx)(m.default, {
          user: i,
          className: null != v && "" !== v ? K.tagFaded : null,
          usernameClass: K.username,
          discriminatorClass: K.discriminator,
          forceUsername: !0
        })]
      })
    }), !u && T && (0, n.jsx)(h.Clickable, {
      onClick: function() {
        _.removeReactionWithConfirmation({
          emoji: t,
          userId: i.id,
          channelId: s.id,
          messageId: a.id,
          reactionType: o,
          isMe: c === i.id
        }), null == r || r()
      },
      children: (0, n.jsx)(D.default, {
        width: 16,
        height: 16,
        className: K.remove
      })
    })]
  })
}
class $ extends a.PureComponent {
  componentDidMount() {
    this.loadMore()
  }
  componentDidUpdate(e) {
    (!r().isEqual(this.props.reaction, e.reaction) || this.props.reactionType !== e.reactionType) && this.setState({
      lastId: null,
      loadingMore: !1
    }, () => this.loadMore())
  }
  loadMore() {
    let {
      message: e,
      reaction: t,
      reactionType: i
    } = this.props, {
      lastId: n
    } = this.state;
    this.setState({
      loadingMore: !0
    }), _.getReactors({
      channelId: e.getChannelId(),
      messageId: e.id,
      emoji: t.emoji,
      limit: z.DEFAULT_NUM_REACTION_USERS,
      after: n,
      type: i
    }).then(e => {
      var t;
      return this.setState({
        loadingMore: !1,
        lastId: null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.id
      })
    })
  }
  renderSection() {
    return null
  }
  render() {
    let {
      hasMore: e,
      reactors: t,
      reaction: i,
      message: a,
      reactionType: s
    } = this.props, l = [];
    return 0 === t.length && this.state.loadingMore ? l.push(length) : (l.push(t.length), e && l.push(1)), (0, n.jsxs)("div", {
      className: K.reactorsContainer,
      children: [s === I.ReactionTypes.BURST && (0, n.jsx)(X, {
        emoji: i.emoji,
        channelId: a.getChannelId(),
        messageId: a.id
      }), (0, n.jsx)(h.List, {
        className: K.reactors,
        fade: !0,
        ref: this.scrollerRef,
        sections: l,
        sectionHeight: 0,
        rowHeight: this.getRowHeight,
        renderRow: this.renderRow,
        renderSection: this.renderSection,
        onScroll: e ? this.handleScroll : void 0
      })]
    })
  }
  constructor(...e) {
    super(...e), Y(this, "scrollerRef", a.createRef()), Y(this, "state", {
      lastId: null,
      loadingMore: !1
    }), Y(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && this.props.hasMore && !this.state.loadingMore && this.loadMore()
    }), Y(this, "getRowHeight", (e, t) => {
      let {
        reactors: i
      } = this.props;
      if (1 === e) return 0 === t ? 44 : 0;
      if (0 === e) {
        if (0 === t && 0 === i.length) return 440;
        if (null != this.props.reactors[t]) return 44
      }
      return 0
    }), Y(this, "renderRow", e => {
      let {
        section: t,
        row: i
      } = e, {
        message: a,
        guildId: s,
        channel: l,
        reaction: o,
        reactors: r,
        reactionType: u,
        disableManage: d
      } = this.props, c = r[i];
      if (1 === t) return 0 === i ? (0, n.jsx)(h.Spinner, {
        className: K.spinnerMore
      }, "hasMore") : null;
      return 0 === r.length && this.state.loadingMore ? (0, n.jsx)(h.Spinner, {
        className: K.spinner
      }, "loadingMore") : null != c && (0, n.jsx)(Q, {
        message: a,
        emoji: o.emoji,
        guildId: s,
        channel: l,
        user: c,
        reaction: o,
        reactionType: u,
        disableManage: d
      }, c.id)
    })
  }
}
let ee = d.default.connectStores([y.default], e => {
  let {
    message: t,
    reaction: i,
    reactionType: n
  } = e, a = y.default.getReactions(t.getChannelId(), t.id, i.emoji, z.DEFAULT_NUM_REACTION_USERS, n);
  if (null == a) return {
    reactors: [],
    hasMore: !1
  };
  let s = Object.values(a),
    l = (n === I.ReactionTypes.BURST ? i.burst_count : i.count) > s.length;
  return {
    reactors: s,
    hasMore: l
  }
})($);

function et(e) {
  var t;
  let {
    message: i,
    selectedReaction: s,
    disableManage: l = !1,
    disableTabs: o = !1,
    onClose: r,
    transitionState: u,
    "aria-label": f = W.default.Messages.REACTIONS
  } = e, m = (0, d.useStateFromStores)([M.default], () => M.default.getChannel(i.getChannelId())), p = null == m ? void 0 : m.getGuildId(), T = (0, d.useStateFromStores)([L.default, S.default, R.default], () => {
    var e, t, n;
    let a = null !== (n = null !== (t = L.default.getMessage(i.getChannelId(), i.id)) && void 0 !== t ? t : null === (e = S.default.getMessage(V.default.castMessageIdAsChannelId(i.id))) || void 0 === e ? void 0 : e.firstMessage) && void 0 !== n ? n : null != p ? R.default.getCachedMessage(p, i.getChannelId(), i.id) : void 0;
    return null != a ? a.reactions : []
  }, [i, p]);
  let N = (t = T, a.useMemo(() => {
      let e = [];
      return t.forEach(t => {
        t.burst_count > 0 && e.push({
          ...t,
          count: 0
        }), t.count > 0 && e.push({
          ...t,
          burst_count: 0
        })
      }), e.sort((e, t) => {
        let i = e.burst_count > 0 ? e.burst_count : e.count;
        return (t.burst_count > 0 ? t.burst_count : t.count) - i
      }), e
    }, [t])),
    C = N[0],
    [_, O] = function(e, t, i) {
      let [n, s] = a.useState(null != e ? e : t);
      return a.useEffect(() => {
        null != n && null == i.find(e => {
          let t = null != e.me_vote ? I.ReactionTypes.VOTE : e.burst_count > 0 ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL;
          return (0, x.emojiEquals)(e.emoji, n.emoji) && t === n.reactionType
        }) && s(t)
      }, [n, s, i, t]), [n, s]
    }(s, null != C ? {
      emoji: C.emoji,
      reactionType: C.burst_count > 0 ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL
    } : null, T),
    A = a.useMemo(() => {
      var e;
      return null == _ ? null : null !== (e = T.find(e => (0, x.emojiEquals)(e.emoji, _.emoji))) && void 0 !== e ? e : null
    }, [T, _]),
    b = (0, d.useStateFromStores)([g.default], () => g.default.saturation),
    y = (0, d.useStateFromStores)([j.default], () => (0, c.isThemeDark)(j.default.theme));
  if (a.useEffect(() => {
      (0 === T.length || null == _ && null == A) && setImmediate(r)
    }, [r, T.length, A, _]), null == _ || null == A) return (0, n.jsx)(h.Spinner, {});
  if (null == m) throw Error("MessageReactions.render: Message does not have a channelId");
  return (0, n.jsx)(E.default.Provider, {
    value: null != p ? p : void 0,
    children: (0, n.jsxs)(h.ModalRoot, {
      "aria-label": f,
      transitionState: u,
      size: h.ModalSize.DYNAMIC,
      className: K.container,
      children: [o ? null : (0, n.jsx)(h.Scroller, {
        className: K.scroller,
        fade: !0,
        children: N.map(e => {
          var t;
          let i = e.burst_count > 0;
          return (0, n.jsx)(q, {
            isSelected: ei(_, e, i ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL),
            setSelected: O,
            reactionType: i ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL,
            emoji: e.emoji,
            count: i ? e.burst_count : e.count,
            colors: null != e.burst_colors ? (0, v.buildEmojiColorPalette)(e.burst_colors, b, y) : void 0
          }, "".concat(i ? "burst-" : "normal-").concat(null !== (t = e.emoji.id) && void 0 !== t ? t : "", ":").concat(e.emoji.name))
        })
      }), (0, n.jsx)(ee, {
        message: i,
        reaction: A,
        guildId: p,
        channel: m,
        reactionType: _.reactionType,
        disableManage: l
      })]
    })
  })
}
let ei = (e, t, i) => r().isEqual(e.emoji, t.emoji) && e.reactionType === i