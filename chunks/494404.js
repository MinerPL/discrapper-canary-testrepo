n.d(t, {
  ZP: function() {
return U;
  },
  h4: function() {
return Z;
  },
  nH: function() {
return P;
  }
}), n(47120), n(653041);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(392711),
  o = n.n(l),
  c = n(91192),
  u = n(442837),
  d = n(481060),
  _ = n(668781),
  E = n(904245),
  I = n(724757),
  m = n(294218),
  T = n(703656),
  h = n(210887),
  N = n(592125),
  C = n(375954),
  f = n(496675),
  p = n(933429),
  g = n(451478),
  S = n(387204),
  A = n(626135),
  R = n(585483),
  O = n(981631),
  x = n(689938),
  M = n(928482);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function L(e) {
  e.stopPropagation();
}
let Z = e => {
let {
  title: t,
  children: n,
  className: s
} = e;
return (0, i.jsxs)('div', {
  className: r()(s, M.header),
  children: [
    null == t ? null : (0, i.jsx)(d.Heading, {
      variant: 'heading-md/medium',
      children: t
    }),
    n
  ]
});
  },
  P = e => {
let {
  msg: t,
  image: n
} = e;
return (0, i.jsxs)('div', {
  className: M.emptyPlaceholder,
  children: [
    (0, i.jsx)('div', {
      className: M.image,
      style: {
        backgroundImage: 'url('.concat(n, ')')
      }
    }),
    (0, i.jsx)('div', {
      className: M.body,
      children: t
    })
  ]
});
  };
class D extends s.PureComponent {
  renderJumpButton() {
let {
  jumping: e
} = this.props;
return (0, i.jsxs)(d.Clickable, {
  className: M.jumpButton,
  onClick: this.handleClickJump,
  children: [
    (0, i.jsx)('div', {
      className: r()(M.__invalid_text, {
        hidden: e
      }),
      children: x.Z.Messages.JUMP
    }),
    (0, i.jsx)(d.Spinner, {
      type: d.Spinner.Type.PULSING_ELLIPSIS,
      className: r()(M.loading, {
        [M.visible]: e
      })
    })
  ]
});
  }
  renderCloseButton() {
let {
  onCloseMessage: e,
  canCloseAllMessages: t,
  canManageMessages: n,
  channel: s
} = this.props;
return null != e && (t || n || null != s && s.isPrivate()) ? (0, i.jsx)(d.Button, {
  look: d.Button.Looks.BLANK,
  size: d.Button.Sizes.NONE,
  onClick: this.handleClickClose,
  children: (0, i.jsx)(d.CloseSmallIcon, {
    size: 'md',
    color: 'currentColor',
    className: M.closeIcon
  })
}) : null;
  }
  render() {
return (0, i.jsxs)('div', {
  className: M.actionButtons,
  children: [
    this.renderJumpButton(),
    this.renderCloseButton()
  ]
});
  }
  constructor(...e) {
super(...e), v(this, 'handleClickJump', e => {
  let {
    jumpTo: t,
    message: n
  } = this.props;
  t(n, e);
}), v(this, 'handleClickClose', e => {
  let {
    onCloseMessage: t,
    message: n
  } = this.props;
  null != t && t(n, e);
});
  }
}
let b = u.ZP.connectStores([f.Z], e => {
  let {
channel: t
  } = e;
  return {
canManageMessages: null != t && f.Z.can(O.Plq.MANAGE_MESSAGES, t)
  };
})(D);

function j(e) {
  let {
analyticsName: t,
items: n,
hasMore: a,
loading: l,
loadMore: _,
renderHeader: E,
renderEmptyState: m,
renderItem: T,
getProTip: N,
scrollerClassName: C,
className: f,
listName: v
  } = e, Z = s.useRef(null), P = (0, I.Z)(v, Z), D = (0, u.e7)([p.Z], () => p.Z.hasNotice()), b = (0, u.e7)([g.Z], () => g.Z.windowSize());
  s.useEffect(() => {
A.default.track(O.rMx.OPEN_POPOUT, {
  type: t
});
  }, [t]), s.useEffect(() => {
function e() {
  var e;
  null === (e = Z.current) || void 0 === e || e.scrollPageUp({
    animate: !0
  });
}

function t() {
  var e;
  null === (e = Z.current) || void 0 === e || e.scrollPageDown({
    animate: !0
  });
}
return R.S.subscribe(O.CkL.SCROLL_PAGE_DOWN, t), R.S.subscribe(O.CkL.SCROLL_PAGE_UP, e), () => {
  R.S.unsubscribe(O.CkL.SCROLL_PAGE_DOWN, t), R.S.unsubscribe(O.CkL.SCROLL_PAGE_UP, e);
};
  }, []);
  let j = s.useCallback(() => {
  var e;
  let t = null === (e = Z.current) || void 0 === e ? void 0 : e.getScrollerState();
  null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && a && !l && (null == _ || _());
}, [
  a,
  _,
  l
]),
U = [],
y = !0;
  null == n ? U = [(0, i.jsx)('div', {
className: r()(M.emptyPlaceholder, M.loadingPlaceholder),
children: (0, i.jsx)(d.Spinner, {})
  }, 'spinner')] : 0 === n.length ? U.push((0, i.jsx)(s.Fragment, {
children: m(h.Z.theme)
  }, 'empty-state')) : (y = !1, U = [], o().each(n, e => {
U.push(...T(e));
  }));
  let B = null;
  null != n && n.length > 0 && null != _ && (B = l ? (0, i.jsx)('div', {
className: M.loadingMore,
children: (0, i.jsx)(d.Spinner, {})
  }, 'loading-more-after') : a ? (0, i.jsx)('div', {
className: M.hasMore,
children: (0, i.jsx)(d.Button, {
  look: d.Button.Looks.FILLED,
  color: d.Button.Colors.PRIMARY,
  size: d.Button.Sizes.MAX,
  onClick: _,
  children: x.Z.Messages.LOAD_MORE_MESSAGES
})
  }) : (0, i.jsx)('div', {
className: M.scrollingFooterWrap,
children: m(h.Z.theme)
  }));
  let k = null == N ? void 0 : N(),
G = y && null != k ? (0, i.jsx)('div', {
  className: M.footer,
  children: (0, i.jsx)(S.Z, {
    style: {
      width: '100%',
      paddingTop: 10,
      paddingBottom: 10
    },
    children: k
  })
}) : null,
F = {
  maxHeight: b.height - 43 - 25
};
  D && (F.maxHeight -= 40);
  let w = null != _ && a;
  return (0, i.jsx)('div', {
className: r()(f, M.messagesPopoutWrap),
style: F,
onClick: L,
onDoubleClick: L,
'aria-label': e['aria-label'],
children: (0, i.jsxs)(d.HeadingLevel, {
  component: E(),
  children: [
    (0, i.jsxs)(d.AdvancedScroller, {
      className: r()(M.messagesPopout, C),
      onScroll: w ? j : void 0,
      ref: Z,
      children: [
        (0, i.jsx)(c.bG, {
          navigator: P,
          children: (0, i.jsx)(c.SJ, {
            children: e => {
              let {
                ref: t,
                ...n
              } = e;
              return (0, i.jsx)('div', {
                ref: t,
                ...n,
                children: U
              });
            }
          })
        }),
        B
      ]
    }),
    G
  ]
})
  });
}

function U(e) {
  let {
analyticsName: t,
onFetch: n,
channel: a,
messages: r,
hasMore: l,
loading: o,
loadMore: c,
onJump: d,
canCloseAllMessages: I = !1,
renderHeader: h,
renderEmptyState: f,
renderMessage: p,
getProTip: g,
scrollerClassName: S,
className: A,
onCloseMessage: R,
listName: v
  } = e, L = (0, u.e7)([C.Z], () => {
let e = null != a ? C.Z.getMessages(a.id) : null;
return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
  });

  function Z(e, n) {
let {
  id: i,
  blocked: s,
  author: a,
  channel_id: r
} = e;
if (s)
  _.Z.show({
    title: x.Z.Messages.UNBLOCK_TO_JUMP_TITLE,
    body: x.Z.Messages.UNBLOCK_TO_JUMP_BODY.format({
      name: a.username
    }),
    confirmText: x.Z.Messages.OKAY
  });
else if (!L) {
  let e = N.Z.getChannel(r);
  null != e && (E.Z.trackJump(r, i, t), (0, T.uL)(O.Z5c.CHANNEL(e.getGuildId(), r, i))), null == d || d(n);
}
  }
  s.useEffect(() => {
n(a);
  }, [
a,
n
  ]);
  let P = s.useMemo(() => null == r ? void 0 : r.map(e => ({
message: e,
channel: a
  })), [
r,
a
  ]);
  return (0, i.jsx)(j, {
className: A,
scrollerClassName: S,
items: P,
loading: o,
analyticsName: t,
renderEmptyState: f,
renderHeader: h,
hasMore: l,
loadMore: c,
getProTip: g,
renderItem: function(e) {
  let {
    message: t,
    channel: n
  } = e;
  if (null == t)
    return [];
  if (null != p)
    return p(t, e => Z(t, e));
  let s = [];
  return null == n ? [] : (s.push((0, i.jsxs)('div', {
    className: M.messageGroupWrapper,
    children: [
      (0, i.jsx)(m.Z, {
        className: M.messageGroupCozy,
        message: t,
        channel: n
      }),
      (0, i.jsx)(b, {
        channel: a,
        message: t,
        jumping: L,
        canCloseAllMessages: I,
        jumpTo: Z,
        onCloseMessage: R
      })
    ]
  }, t.id)), s);
},
listName: v,
'aria-label': e['aria-label']
  });
}