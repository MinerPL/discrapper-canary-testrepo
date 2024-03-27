"use strict";
i.r(t), i.d(t, {
  default: function() {
    return ee
  }
}), i("222007"), i("424973"), i("860677"), i("70102");
var n = i("37983"),
  a = i("884691"),
  l = i("414456"),
  o = i.n(l),
  s = i("917351"),
  r = i.n(s),
  u = i("509043"),
  c = i("446674"),
  d = i("819855"),
  h = i("77078"),
  m = i("430568"),
  f = i("145079"),
  p = i("87657"),
  T = i("206230"),
  R = i("867805"),
  g = i("584375"),
  E = i("430475"),
  I = i("390236"),
  N = i("185014"),
  S = i("875978"),
  _ = i("512306"),
  v = i("941723"),
  C = i("166257"),
  j = i("432173"),
  O = i("300322"),
  A = i("161778"),
  x = i("271938"),
  M = i("42203"),
  b = i("26989"),
  y = i("486996"),
  P = i("377253"),
  L = i("957255"),
  U = i("27618"),
  B = i("697218"),
  k = i("145131"),
  D = i("945330"),
  w = i("315102"),
  V = i("402671"),
  F = i("387111"),
  G = i("299039"),
  H = i("441823"),
  z = i("49111"),
  K = i("782340"),
  W = i("726347"),
  J = i("890957");

function Y(e) {
  return null == e.id ? R.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}
let X = e => {
  let {
    emoji: t,
    channelId: i,
    messageId: l
  } = e, [s, r] = a.useState(!0), [u, c] = a.useState([]), d = a.useMemo(() => {
    if (null == u || u.length < 1) return;
    let e = (0, v.buildEffect)(t, u[0], i, {
      emojiSize: _.BurstReactionSize.LARGE,
      messageId: l
    });
    return (0, n.jsx)(_.default, {
      className: W.effect,
      effect: e,
      emojiSize: _.BurstReactionSize.LARGE,
      onComplete: () => r(!1)
    })
  }, [u, t, i, l]);
  return a.useEffect(() => {
    let e = !1;
    return r(!0), !async function() {
      let i = await (0, V.getEmojiColors)(t);
      Array.isArray(i) && i.length > 0 && !e && c(i)
    }(), () => {
      e = !0
    }
  }, [t]), (0, n.jsxs)("div", {
    className: W.burstEmojiSection,
    children: [d, (0, n.jsx)(m.default, {
      className: o(W.burstEmoji, {
        [W.hideEmoji]: s
      }),
      emojiId: t.id,
      emojiName: t.name,
      animated: t.animated,
      size: "reaction"
    }), (0, n.jsx)(h.Text, {
      variant: "text-md/medium",
      children: Y(t)
    })]
  })
};
class Z extends a.PureComponent {
  render() {
    let {
      emoji: e,
      count: t,
      isSelected: i,
      setSelected: a,
      reactionType: l,
      colors: s
    } = this.props, r = Y(e), c = function(e, t, i, a) {
      let l = null == e.id ? V.default.getURL(e.name) : w.default.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: 24
      });
      return null != l && "" !== l ? (0, n.jsx)("img", {
        className: i,
        src: l,
        alt: e.name
      }) : (0, n.jsx)("span", {
        className: a,
        children: e.name
      })
    }(e, 24, W.emoji, o(W.emoji, W.emojiText)), d = l === S.ReactionTypes.BURST, m = d ? K.default.Messages.BURST_REACTION_REACTORS_A11Y : K.default.Messages.REACTION_REACTORS_A11Y, f = m.format({
      name: r,
      n: t
    }), p = {}, T = {};
    if (d) {
      let {
        backgroundColor: e = "",
        opacity: t = 1,
        accentColor: n = ""
      } = null != s ? s : {};
      if (T.color = n, i) {
        var R;
        p.background = null !== (R = (0, u.hex2rgb)(e, t)) && void 0 !== R ? R : ""
      }
    }
    return (0, n.jsx)(h.Tooltip, {
      position: "left",
      text: r,
      children: s => {
        let {
          onMouseEnter: r,
          onMouseLeave: u
        } = s;
        return (0, n.jsxs)(h.Clickable, {
          className: o({
            [W.reactionDefault]: !i,
            [W.reactionSelected]: i
          }),
          "aria-label": f,
          onClick: () => a({
            emoji: e,
            reactionType: l
          }),
          onMouseEnter: r,
          onMouseLeave: u,
          style: p,
          children: [c, (0, n.jsx)(h.Text, {
            variant: "text-sm/bold",
            style: T,
            children: t
          })]
        })
      }
    })
  }
}

function q(e) {
  let {
    emoji: t,
    user: i,
    message: a,
    channel: l,
    guildId: o,
    reactionType: s,
    onRemoveReactor: r,
    disableManage: u = !1
  } = e, d = (0, c.useStateFromStores)([x.default], () => x.default.getId()), m = (0, c.useStateFromStores)([B.default], () => B.default.getUser(i.id), [i]), T = (0, O.useIsActiveChannelOrUnarchivableThread)(l), R = (0, c.useStateFromStores)([L.default], () => L.default.can(z.Permissions.MANAGE_MESSAGES, l) && T), g = R || d === i.id, E = (0, c.useStateFromStores)([b.default, M.default, U.default], () => F.default.getName(o, l.id, i));
  return (0, n.jsxs)(k.default, {
    className: W.reactorDefault,
    onContextMenu: e => (0, H.openUserContextMenu)(e, i, l),
    align: k.default.Align.CENTER,
    children: [(0, n.jsx)(k.default.Child, {
      wrap: !0,
      grow: 0,
      shrink: 0,
      className: J.marginReset,
      children: (0, n.jsx)(p.default, {
        user: null != m ? m : i,
        size: h.AvatarSizes.SIZE_24
      })
    }), (0, n.jsx)(k.default.Child, {
      children: (0, n.jsxs)(h.Text, {
        tag: "strong",
        variant: "text-md/normal",
        className: W.name,
        children: [null != E && "" !== E && (0, n.jsx)("span", {
          className: i.isPomelo() ? "" : W.nickname,
          children: E
        }), (0, n.jsx)(f.default, {
          user: i,
          className: null != E && "" !== E ? W.tagFaded : null,
          usernameClass: W.username,
          discriminatorClass: W.discriminator,
          forceUsername: !0
        })]
      })
    }), !u && g && (0, n.jsx)(h.Clickable, {
      onClick: function() {
        C.removeReactionWithConfirmation({
          emoji: t,
          userId: i.id,
          channelId: l.id,
          messageId: a.id,
          reactionType: s,
          isMe: d === i.id
        }), null == r || r()
      },
      children: (0, n.jsx)(D.default, {
        width: 16,
        height: 16,
        className: W.remove
      })
    })]
  })
}
class Q extends a.PureComponent {
  componentDidMount() {
    this.loadMore()
  }
  componentDidUpdate(e) {
    (!r.isEqual(this.props.reaction, e.reaction) || this.props.reactionType !== e.reactionType) && this.setState({
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
    }), C.getReactors({
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
      reactionType: l
    } = this.props, o = [];
    return 0 === t.length && this.state.loadingMore ? o.push(length) : (o.push(t.length), e && o.push(1)), (0, n.jsxs)("div", {
      className: W.reactorsContainer,
      children: [l === S.ReactionTypes.BURST && (0, n.jsx)(X, {
        emoji: i.emoji,
        channelId: a.getChannelId(),
        messageId: a.id
      }), (0, n.jsx)(h.List, {
        className: W.reactors,
        fade: !0,
        ref: this.scrollerRef,
        sections: o,
        sectionHeight: 0,
        rowHeight: this.getRowHeight,
        renderRow: this.renderRow,
        renderSection: this.renderSection,
        onScroll: e ? this.handleScroll : void 0
      })]
    })
  }
  constructor(...e) {
    super(...e), this.scrollerRef = a.createRef(), this.state = {
      lastId: null,
      loadingMore: !1
    }, this.handleScroll = () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && this.props.hasMore && !this.state.loadingMore && this.loadMore()
    }, this.getRowHeight = (e, t) => {
      let {
        reactors: i
      } = this.props;
      if (1 === e) return 0 === t ? 44 : 0;
      if (0 === e) {
        if (0 === t && 0 === i.length) return 440;
        if (null != this.props.reactors[t]) return 44
      }
      return 0
    }, this.renderRow = e => {
      let {
        section: t,
        row: i
      } = e, {
        message: a,
        guildId: l,
        channel: o,
        reaction: s,
        reactors: r,
        reactionType: u,
        disableManage: c
      } = this.props, d = r[i];
      if (1 === t) return 0 === i ? (0, n.jsx)(h.Spinner, {
        className: W.spinnerMore
      }, "hasMore") : null;
      return 0 === r.length && this.state.loadingMore ? (0, n.jsx)(h.Spinner, {
        className: W.spinner
      }, "loadingMore") : null != d && (0, n.jsx)(q, {
        message: a,
        emoji: s.emoji,
        guildId: l,
        channel: o,
        user: d,
        reaction: s,
        reactionType: u,
        disableManage: c
      }, d.id)
    }
  }
}
let $ = c.default.connectStores([y.default], e => {
  let {
    message: t,
    reaction: i,
    reactionType: n
  } = e, a = y.default.getReactions(t.getChannelId(), t.id, i.emoji, z.DEFAULT_NUM_REACTION_USERS, n);
  if (null == a) return {
    reactors: [],
    hasMore: !1
  };
  let l = Object.values(a),
    o = n === S.ReactionTypes.BURST ? i.burst_count : i.count,
    s = o > l.length;
  return {
    reactors: l,
    hasMore: s
  }
})(Q);

function ee(e) {
  var t;
  let {
    message: i,
    selectedReaction: l,
    disableManage: o = !1,
    disableTabs: s = !1,
    onClose: r,
    transitionState: u,
    "aria-label": m = K.default.Messages.REACTIONS
  } = e, f = (0, c.useStateFromStores)([M.default], () => M.default.getChannel(i.getChannelId())), p = null == f ? void 0 : f.getGuildId(), R = (0, c.useStateFromStores)([P.default, E.default, N.default], () => {
    var e, t, n;
    let a = null !== (n = null !== (t = P.default.getMessage(i.getChannelId(), i.id)) && void 0 !== t ? t : null === (e = E.default.getMessage(G.default.castMessageIdAsChannelId(i.id))) || void 0 === e ? void 0 : e.firstMessage) && void 0 !== n ? n : null != p ? N.default.getCachedMessage(p, i.getChannelId(), i.id) : void 0;
    return null != a ? a.reactions : []
  }, [i, p]);
  let _ = (t = R, a.useMemo(() => {
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
        let i = e.burst_count > 0 ? e.burst_count : e.count,
          n = t.burst_count > 0 ? t.burst_count : t.count;
        return n - i
      }), e
    }, [t])),
    v = _[0],
    C = null != v ? {
      emoji: v.emoji,
      reactionType: v.burst_count > 0 ? S.ReactionTypes.BURST : S.ReactionTypes.NORMAL
    } : null,
    [O, x] = function(e, t, i) {
      let [n, l] = a.useState(null != e ? e : t);
      return a.useEffect(() => {
        if (null != n) {
          let e = i.find(e => {
            let t = null != e.me_vote ? S.ReactionTypes.VOTE : e.burst_count > 0 ? S.ReactionTypes.BURST : S.ReactionTypes.NORMAL;
            return (0, j.emojiEquals)(e.emoji, n.emoji) && t === n.reactionType
          });
          null == e && l(t)
        }
      }, [n, l, i, t]), [n, l]
    }(l, C, R),
    b = a.useMemo(() => {
      var e;
      return null == O ? null : null !== (e = R.find(e => (0, j.emojiEquals)(e.emoji, O.emoji))) && void 0 !== e ? e : null
    }, [R, O]),
    y = (0, c.useStateFromStores)([T.default], () => T.default.saturation),
    L = (0, c.useStateFromStores)([A.default], () => (0, d.isThemeDark)(A.default.theme));
  if (a.useEffect(() => {
      (0 === R.length || null == O && null == b) && setImmediate(r)
    }, [r, R.length, b, O]), null == O || null == b) return (0, n.jsx)(h.Spinner, {});
  if (null == f) throw Error("MessageReactions.render: Message does not have a channelId");
  return (0, n.jsx)(I.default.Provider, {
    value: null != p ? p : void 0,
    children: (0, n.jsxs)(h.ModalRoot, {
      "aria-label": m,
      transitionState: u,
      size: h.ModalSize.DYNAMIC,
      className: W.container,
      children: [s ? null : (0, n.jsx)(h.Scroller, {
        className: W.scroller,
        fade: !0,
        children: _.map(e => {
          var t;
          let i = e.burst_count > 0;
          return (0, n.jsx)(Z, {
            isSelected: et(O, e, i ? S.ReactionTypes.BURST : S.ReactionTypes.NORMAL),
            setSelected: x,
            reactionType: i ? S.ReactionTypes.BURST : S.ReactionTypes.NORMAL,
            emoji: e.emoji,
            count: i ? e.burst_count : e.count,
            colors: null != e.burst_colors ? (0, g.buildEmojiColorPalette)(e.burst_colors, y, L) : void 0
          }, "".concat(i ? "burst-" : "normal-").concat(null !== (t = e.emoji.id) && void 0 !== t ? t : "", ":").concat(e.emoji.name))
        })
      }), (0, n.jsx)($, {
        message: i,
        reaction: b,
        guildId: p,
        channel: f,
        reactionType: O.reactionType,
        disableManage: o
      })]
    })
  })
}
let et = (e, t, i) => r.isEqual(e.emoji, t.emoji) && e.reactionType === i