n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(392711),
  s = n.n(l),
  r = n(374470),
  o = n(481060),
  c = n(239091),
  d = n(294218),
  u = n(592125),
  h = n(689938),
  p = n(183528);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class _ extends a.PureComponent {
  render() {
let {
  result: e,
  listItemProps: t,
  searchOffset: n,
  index: a,
  totalResults: l
} = this.props, r = s().find(e, e => e.isSearchHit);
if (null == r)
  return null;
let c = u.Z.getChannel(r.channel_id);
if (null == c)
  return null;
let m = 'search-result-'.concat(r.id);
return (0, i.jsx)(o.FocusRing, {
  ringTarget: this.hitRef,
  ringClassName: p.__invalid_searchResultFocusRing,
  offset: 4,
  children: (0, i.jsxs)('li', {
    className: p.container,
    ...t,
    'aria-posinset': 1 + n + a,
    'aria-setsize': l,
    'aria-labelledby': m,
    children: [
      (0, i.jsx)(o.Clickable, {
        tabIndex: -1,
        onClick: this.handleMessageClick,
        innerRef: this.containerRef,
        className: p.searchResult,
        focusProps: {
          enabled: !1
        },
        children: (0, i.jsx)('div', {
          ref: this.hitRef,
          className: p.message,
          children: (0, i.jsx)(d.Z, {
            id: m,
            message: r,
            channel: c,
            onContextMenu: e => this.handleContextMenu(e, r),
            animateAvatar: !1,
            subscribeToComponentDispatch: !1,
            trackAnnouncementViews: !0
          })
        }, r.id)
      }),
      (0, i.jsx)('div', {
        className: p.buttonsContainer,
        'aria-hidden': !0,
        children: (0, i.jsx)(o.Clickable, {
          className: p.button,
          onClick: this.jumpTo,
          children: h.Z.Messages.JUMP
        })
      })
    ]
  })
});
  }
  constructor(...e) {
super(...e), m(this, 'containerRef', a.createRef()), m(this, 'hitRef', a.createRef()), m(this, 'handleContextMenu', (e, t) => {
  let a = u.Z.getChannel(t.channel_id);
  if (null != a)
    e.stopPropagation(), (0, c.jW)(e, async () => {
      let {
        default: e
      } = await n.e('53809').then(n.bind(n, 858341));
      return n => (0, i.jsx)(e, {
        ...n,
        message: t,
        channel: a
      });
    });
}), m(this, 'jumpTo', e => {
  null != e && (e.preventDefault(), e.stopPropagation());
  let {
    onJump: t,
    result: n
  } = this.props, i = n.find(e => e.isSearchHit);
  null != i && t(i);
}), m(this, 'handleMessageClick', e => {
  if (function(e, t) {
      var n;
      let i = null === (n = window) || void 0 === n ? void 0 : n.getSelection();
      if (null != i && !i.isCollapsed)
        return !0;
      if (null == e || null == t)
        return !1;
      for (;
        (0, r.k)(e) && e !== t;) {
        ;
        let {
          tagName: t
        } = e;
        if ('A' === t || 'IMG' === t || 'BUTTON' === t)
          return !0;
        e = e.parentNode;
      }
      return !1;
    }(e.target, this.containerRef.current)) {
    e.stopPropagation();
    return;
  }
  this.jumpTo(e);
});
  }
}