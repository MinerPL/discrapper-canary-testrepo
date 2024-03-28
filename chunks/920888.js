"use strict";
n.r(t), n.d(t, {
  findReactionIndex: function() {
    return p
  }
}), n("47120"), n("653041");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("215569"),
  o = n("481060"),
  u = n("566006"),
  d = n("60174"),
  c = n("453687"),
  f = n("434624"),
  E = n("287151"),
  _ = n("689938"),
  T = n("903380"),
  m = n("317363");
let I = (e, t) => null == e && null == t || e === t,
  p = (e, t) => e.findIndex(e => I(e.emoji.id, null == t ? void 0 : t.id) && I(e.emoji.name, null == t ? void 0 : t.name)),
  h = (e, t) => {
    if (null == t) return e;
    let n = p(e, t);
    return n < 0 ? e : [e[n], ...e.slice(0, n), ...e.slice(n + 1)]
  };
class N extends a.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let n = e.message.reactions.length;
    return 0 === t.reactionsCount && n > 0 ? {
      disableTransitionAppear: !1,
      reactionsCount: n
    } : t.reactionsCount !== n ? {
      reactionsCount: n
    } : null
  }
  render() {
    let {
      message: e,
      disableReactionCreates: t,
      disableReactionUpdates: n,
      isLurking: a,
      isGuest: l,
      isPendingMember: I,
      isForumToolbar: p,
      channel: h,
      className: N,
      forceAddReactions: S,
      reactionClassName: C,
      useChatFontScaling: A,
      forceHideReactionCreates: g,
      remainingReactions: M,
      combinedReactions: R,
      visibleReactionsCount: O
    } = this.props, {
      disableTransitionAppear: v
    } = this.state, L = A ? m : T, x = O > 0;
    return x || S ? (0, s.jsxs)(r.TransitionGroup, {
      component: "div",
      className: i()(L.reactions, N),
      transitionAppear: !v,
      role: "group",
      transitionLeave: !1,
      id: (0, c.getMessageReactionsId)(e),
      onMouseEnter: () => this.setState({
        isHovered: !0
      }),
      onMouseLeave: () => this.setState({
        isHovered: !1
      }),
      children: [(0, s.jsx)(f.MessageReactionsGroupWrapper, {
        reactions: R,
        message: e,
        readOnly: n,
        isLurking: a,
        isGuest: l,
        isPendingMember: I,
        isForumToolbar: p,
        useChatFontScaling: A,
        className: C
      }), M > 0 && (0, s.jsx)(o.Clickable, {
        onClick: t => {
          t.stopPropagation(), (0, E.showReactionsModal)(h, e)
        },
        className: i()(L.reaction, C, L.remainingReactions),
        "aria-label": _.default.Messages.ADD_REACTION,
        children: (0, s.jsxs)(o.Text, {
          className: L.reactionInner,
          variant: "text-sm/normal",
          children: ["+", M]
        })
      }), !t && !g && (0, s.jsx)(d.ButtonAddReaction, {
        type: u.ReactionTypes.NORMAL,
        message: e,
        channel: h,
        useChatFontScaling: A,
        isHovered: this.state.isHovered,
        className: i()({
          [L.forceShow]: S && !x,
          [L.forceShowLook]: S
        })
      })]
    }) : null
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "state", s = {
      disableTransitionAppear: !0,
      reactionsCount: this.props.message.reactions.length,
      isHovered: !1
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}
t.default = e => {
  let {
    message: t,
    maxReactions: n,
    hoistReaction: l
  } = e, {
    combinedReactions: i,
    remainingReactions: r,
    visibleReactionsCount: o
  } = a.useMemo(() => {
    let e = [],
      s = h(t.reactions, l),
      a = null != n && n < s.length ? s.slice(0, n) : s,
      i = s.length - a.length,
      r = s.length;
    return a.forEach(t => {
      t.burst_count > 0 && e.push({
        ...t,
        type: u.ReactionTypes.BURST
      }), t.count > 0 && e.push({
        ...t,
        type: u.ReactionTypes.NORMAL
      }), null != t.me_vote && --r
    }), {
      combinedReactions: e,
      visibleReactionsCount: r,
      remainingReactions: i
    }
  }, [l, n, t.reactions]);
  return (0, s.jsx)(N, {
    ...e,
    visibleReactionsCount: o,
    combinedReactions: i,
    remainingReactions: r
  })
}