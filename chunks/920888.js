n(47120), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(215569),
  o = n(481060),
  c = n(566006),
  d = n(60174),
  u = n(453687),
  _ = n(434624),
  E = n(287151),
  I = n(689938),
  m = n(716862),
  T = n(372178);
let h = (e, t) => null == e && null == t || e === t,
  N = (e, t) => e.findIndex(e => h(e.emoji.id, null == t ? void 0 : t.id) && h(e.emoji.name, null == t ? void 0 : t.name)),
  f = (e, t) => {
if (null == t)
  return e;
let n = N(e, t);
return n < 0 ? e : [
  e[n],
  ...e.slice(0, n),
  ...e.slice(n + 1)
];
  };
class p extends a.PureComponent {
  static getDerivedStateFromProps(e, t) {
let n = e.message.reactions.length;
return 0 === t.reactionsCount && n > 0 ? {
  disableTransitionAppear: !1,
  reactionsCount: n
} : t.reactionsCount !== n ? {
  reactionsCount: n
} : null;
  }
  render() {
let {
  message: e,
  disableReactionCreates: t,
  disableReactionUpdates: n,
  isLurking: a,
  isGuest: s,
  isPendingMember: h,
  isForumToolbar: N,
  channel: f,
  className: p,
  forceAddReactions: C,
  reactionClassName: g,
  useChatFontScaling: S,
  forceHideReactionCreates: A,
  remainingReactions: R,
  combinedReactions: x,
  visibleReactionsCount: O
} = this.props, {
  disableTransitionAppear: M
} = this.state, v = S ? T : m, L = O > 0;
return L || C ? (0, i.jsxs)(l.W, {
  component: 'div',
  className: r()(v.reactions, p),
  transitionAppear: !M,
  role: 'group',
  transitionLeave: !1,
  id: (0, u.bY)(e),
  onMouseEnter: () => this.setState({
    isHovered: !0
  }),
  onMouseLeave: () => this.setState({
    isHovered: !1
  }),
  children: [
    (0, i.jsx)(_.l, {
      reactions: x,
      message: e,
      readOnly: n,
      isLurking: a,
      isGuest: s,
      isPendingMember: h,
      isForumToolbar: N,
      useChatFontScaling: S,
      className: g
    }),
    R > 0 && (0, i.jsx)(o.Clickable, {
      onClick: t => {
        t.stopPropagation(), (0, E.op)(f, e);
      },
      className: r()(v.reaction, g, v.remainingReactions),
      'aria-label': I.Z.Messages.ADD_REACTION,
      children: (0, i.jsxs)(o.Text, {
        className: v.reactionInner,
        variant: 'text-sm/normal',
        children: [
          '+',
          R
        ]
      })
    }),
    !t && !A && (0, i.jsx)(d.X, {
      type: c.O.NORMAL,
      message: e,
      channel: f,
      useChatFontScaling: S,
      isHovered: this.state.isHovered,
      className: r()({
        [v.forceShow]: C && !L,
        [v.forceShowLook]: C
      })
    })
  ]
}) : null;
  }
  constructor(...e) {
var t, n, i;
super(...e), t = this, n = 'state', i = {
  disableTransitionAppear: !0,
  reactionsCount: this.props.message.reactions.length,
  isHovered: !1
}, n in t ? Object.defineProperty(t, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = i;
  }
}
t.Z = e => {
  let {
message: t,
maxReactions: n,
hoistReaction: s
  } = e, {
combinedReactions: r,
remainingReactions: l,
visibleReactionsCount: o
  } = a.useMemo(() => {
let e = [],
  i = f(t.reactions, s),
  a = null != n && n < i.length ? i.slice(0, n) : i,
  r = i.length - a.length,
  l = i.length;
return a.forEach(t => {
  t.burst_count > 0 && e.push({
    ...t,
    type: c.O.BURST
  }), t.count > 0 && e.push({
    ...t,
    type: c.O.NORMAL
  }), null != t.me_vote && --l;
}), {
  combinedReactions: e,
  visibleReactionsCount: l,
  remainingReactions: r
};
  }, [
s,
n,
t.reactions
  ]);
  return (0, i.jsx)(p, {
...e,
visibleReactionsCount: o,
combinedReactions: r,
remainingReactions: l
  });
};