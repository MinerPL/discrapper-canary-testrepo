n(47120), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(215569),
  o = n(481060),
  c = n(140710),
  u = n(566006),
  d = n(60174),
  _ = n(453687),
  E = n(434624),
  I = n(287151),
  m = n(689938),
  T = n(952527),
  h = n(219021);
let N = (e, t) => null == e && null == t || e === t,
  f = (e, t) => e.findIndex(e => N(e.emoji.id, null == t ? void 0 : t.id) && N(e.emoji.name, null == t ? void 0 : t.name)),
  C = (e, t) => {
if (null == t)
  return e;
let n = f(e, t);
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
  isPendingMember: N,
  isForumToolbar: f,
  channel: C,
  className: p,
  forceAddReactions: g,
  reactionClassName: S,
  useChatFontScaling: A,
  forceHideReactionCreates: R,
  remainingReactions: x,
  combinedReactions: O,
  visibleReactionsCount: M
} = this.props, {
  disableTransitionAppear: v
} = this.state, L = A ? h : T, Z = M > 0;
if (!Z && !g)
  return null;
let {
  enabled: P
} = c.Z.getCurrentConfig({
  location: 'message_reactions'
}, {
  autoTrackExposure: !0
}), b = P && Z, D = g && !Z || b;
return (0, i.jsxs)(l.W, {
  component: 'div',
  className: r()(L.reactions, p),
  transitionAppear: !v,
  role: 'group',
  transitionLeave: !1,
  id: (0, _.bY)(e),
  onMouseEnter: () => this.setState({
    isHovered: !0
  }),
  onMouseLeave: () => this.setState({
    isHovered: !1
  }),
  children: [
    (0, i.jsx)(E.l, {
      reactions: O,
      message: e,
      readOnly: n,
      isLurking: a,
      isGuest: s,
      isPendingMember: N,
      isForumToolbar: f,
      useChatFontScaling: A,
      className: S
    }),
    x > 0 && (0, i.jsx)(o.Clickable, {
      onClick: t => {
        t.stopPropagation(), (0, I.op)(C, e);
      },
      className: r()(L.reaction, S, L.remainingReactions),
      'aria-label': m.Z.Messages.ADD_REACTION,
      children: (0, i.jsxs)(o.Text, {
        className: L.reactionInner,
        variant: 'text-sm/normal',
        children: [
          '+',
          x
        ]
      })
    }),
    !t && !R && (0, i.jsx)(d.X, {
      tabIndex: D || this.state.isHovered ? 0 : -1,
      type: u.O.NORMAL,
      message: e,
      channel: C,
      useChatFontScaling: A,
      isHovered: this.state.isHovered,
      className: r()({
        [L.forceShow]: D,
        [L.forceShowLook]: g || b
      })
    })
  ]
});
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
  i = C(t.reactions, s),
  a = null != n && n < i.length ? i.slice(0, n) : i,
  r = i.length - a.length,
  l = i.length;
return a.forEach(t => {
  t.burst_count > 0 && e.push({
    ...t,
    type: u.O.BURST
  }), t.count > 0 && e.push({
    ...t,
    type: u.O.NORMAL
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