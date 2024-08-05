n.d(t, {
  $: function() {
return Z;
  }
}), n(47120), n(411104);
var i, s = n(735250),
  a = n(470079),
  r = n(613828),
  l = n(442837),
  o = n(481060),
  c = n(558381),
  u = n(410575),
  d = n(498179),
  _ = n(86357),
  E = n(914602),
  I = n(568836),
  m = n(730749),
  T = n(112724),
  h = n(812206),
  N = n(283595),
  C = n(558314),
  f = n(55563),
  p = n(551428),
  g = n(73346),
  S = n(981631),
  A = n(689938),
  R = n(91612);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class x extends(i = a.Component) {
  get analyticsLocation() {
let {
  analyticsContext: {
    location: e
  },
  analyticsSection: t
} = this.props;
return {
  ...e,
  section: null != t ? t : S.jXE.APPLICATION_EMBED,
  object: S.qAy.CARD
};
  }
  componentDidMount() {
let {
  sku: e,
  skuId: t,
  storeListing: n
} = this.props;
(null == e || null == n) && (0, c.km)(t);
  }
  renderViewInStoreButton() {
return (0, s.jsx)(o.Button.Link, {
  to: this.getStoreListingLocation(),
  className: R.actionButton,
  color: o.Button.Colors.GREEN,
  size: o.Button.Sizes.SMALL,
  children: A.Z.Messages.GAME_ACTION_BUTTON_VIEW_IN_STORE
});
  }
  render() {
let {
  sku: e,
  storeListing: t,
  width: n,
  fetchFailed: i,
  renderFallback: a
} = this.props, l = n > I.aL;
if (null == e || null == t)
  return i ? a() : (0, s.jsx)(I.OR, {
    isHorizontal: l
  });
return e.productLine === S.POd.COLLECTIBLES ? (0, s.jsx)(u.Z, {
  section: S.jXE.APPLICATION_EMBED,
  children: this.renderApplicationTile(e, t)
}) : (0, s.jsx)(u.Z, {
  section: S.jXE.APPLICATION_EMBED,
  children: (0, s.jsx)(r.rU, {
    onClick: this.handleLinkClick,
    to: this.getStoreListingLocation(),
    onMouseEnter: this.handleMouseEnter,
    onMouseLeave: this.handleMouseLeave,
    children: this.renderApplicationTile(e, t)
  })
});
  }
  constructor(...e) {
super(...e), O(this, 'state', {
  playing: !1,
  muted: !0
}), O(this, 'handleToggleMute', () => {
  this.setState({
    muted: !this.state.muted
  });
}), O(this, 'handleMouseEnter', () => {
  this.setState({
    playing: !0
  });
}), O(this, 'handleMouseLeave', () => {
  this.setState({
    playing: !1
  });
}), O(this, 'getStoreListingLocation', () => {
  let {
    sku: e
  } = this.props;
  if (null == e)
    throw Error('Should not be link to ApplicationStoreListing without SKU');
  return (0, g.ZI)(e.id, {
    slug: e.slug,
    analyticsSource: this.analyticsLocation
  });
}), O(this, 'handleActionButtonClick', e => e.preventDefault()), O(this, 'handleBuyButtonClick', e => e.preventDefault()), O(this, 'handleLinkClick', e => {
  let {
    onEmbedClick: t
  } = this.props;
  null != t && t(e);
}), O(this, 'renderApplicationTile', (e, t) => {
  let {
    inLibrary: n,
    width: i,
    renderCustomTitle: a,
    renderCustomTagline: r,
    renderCustomMedia: l
  } = this.props, {
    playing: o,
    muted: c
  } = this.state, u = i > I.aL;
  return (0, s.jsx)(E.Z, {
    sku: e,
    storeListing: t,
    playing: o,
    muted: c,
    inLibrary: n,
    onToggleMute: this.handleToggleMute,
    renderCustomActions: () => this.renderActions(e),
    renderCustomTitle: a,
    renderCustomTagline: r,
    renderCustomMedia: l,
    isHorizontal: u,
    isEmbed: !0
  });
}), O(this, 'renderActions', e => {
  let {
    inLibrary: t,
    application: n,
    skuId: i,
    libraryApplication: a,
    renderCustomActions: r
  } = this.props;
  if (null != r)
    return (0, s.jsx)('div', {
      className: R.tileActions,
      children: r()
    });
  if (null == n)
    return null;
  let l = null != n && n.primarySkuId === i,
    c = null != a && a.hasFlag(S.eHb.HIDDEN);
  return (0, s.jsxs)('div', {
    className: R.tileActions,
    children: [
      !l || c ? this.renderViewInStoreButton() : (0, s.jsx)(d.Z, {
        application: n,
        customDisabledColor: o.Button.Colors.PRIMARY,
        size: o.Button.Sizes.SMALL,
        className: R.actionButton,
        source: S.Sbl.MESSAGE_EMBED,
        onClick: this.handleActionButtonClick
      }),
      t && !c || e.premium ? null : (0, s.jsx)(_.Z, {
        type: _.Z.Types.EMBED,
        sku: e,
        inLibrary: !1
      })
    ]
  });
});
  }
}
O(x, 'defaultProps', {
  renderFallback: S.dG4
});
let M = [
  f.Z,
  C.Z,
  N.Z,
  p.Z
];

function v(e) {
  let {
skuId: t
  } = e, n = f.Z.get(t), i = null != n ? h.Z.getApplication(n.applicationId) : null;
  return {
sku: n,
application: i,
fetchFailed: f.Z.didFetchingSkuFail(t),
inLibrary: null != n && N.Z.hasApplication(n.applicationId, n.applicationId, !0),
storeListing: null != n ? p.Z.getForSKU(n.id) : null,
libraryApplication: null != n ? N.Z.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
  };
}
let L = (0, T.Z)((0, m.Z)(x));
t.Z = l.ZP.connectStores(M, v)(L);
let Z = (0, m.Z)(l.ZP.connectStores(M, v)(x));