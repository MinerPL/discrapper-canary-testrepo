n(411104);
var i, s, a, r, l, o, c, u, d = n(735250),
  _ = n(470079),
  E = n(120356),
  I = n.n(E),
  m = n(481060),
  T = n(646288),
  h = n(689938),
  N = n(446153);
(r = i || (i = {}))[r.DIRECTORY_HERO = 1] = 'DIRECTORY_HERO', r[r.DIRECTORY_TILE = 2] = 'DIRECTORY_TILE', r[r.DIRECTORY_SEARCH = 3] = 'DIRECTORY_SEARCH', r[r.LISTING = 4] = 'LISTING', r[r.EMBED = 5] = 'EMBED', (l = s || (s = {}))[l.IN_LIBRARY = 1] = 'IN_LIBRARY', l[l.ON_SALE = 2] = 'ON_SALE', l[l.PREMIUM = 3] = 'PREMIUM', l[l.DEFAULT = 4] = 'DEFAULT', l[l.ENTITLEMENT_BRANCH = 5] = 'ENTITLEMENT_BRANCH';
let C = e => {
let {
  className: t
} = e;
return (0, d.jsxs)('div', {
  className: I()(N.row, t),
  children: [
    (0, d.jsx)(m.InventoryIcon, {
      size: 'md',
      color: 'currentColor',
      className: N.icon
    }),
    h.Z.Messages.APPLICATION_STORE_IN_LIBRARY
  ]
});
  },
  f = e => {
let {
  sku: t,
  className: n
} = e;
return (0, d.jsxs)('div', {
  className: I()(N.row, n),
  children: [
    (0, d.jsx)(m.NitroWheelIcon, {
      size: 'md',
      color: 'currentColor',
      className: N.icon
    }),
    (0, T.Z)(t)
  ]
});
  },
  p = e => {
let {
  sku: t,
  className: n
} = e;
return (0, d.jsx)('div', {
  className: I()(N.salePercentage, n),
  children: t.getDisplaySalePercentage()
});
  },
  g = e => {
let {
  sku: t,
  className: n
} = e;
return (0, d.jsx)('div', {
  className: I()(N.originalAmount, n),
  children: (0, T.Z)(t, !1)
});
  },
  S = e => {
let {
  sku: t,
  className: n
} = e;
return (0, d.jsx)('div', {
  className: n,
  children: (0, T.Z)(t)
});
  },
  A = e => {
let {
  sku: t,
  className: n
} = e;
return (0, d.jsxs)('div', {
  className: I()(N.row, n),
  children: [
    (0, d.jsx)(p, {
      sku: t
    }),
    (0, d.jsx)(g, {
      sku: t
    }),
    (0, d.jsx)(S, {
      sku: t
    })
  ]
});
  },
  R = e => {
let {
  className: t
} = e;
return (0, d.jsx)('div', {
  className: t,
  children: h.Z.Messages.APPLICATION_STORE_FREE
});
  };
class O extends(a = _.PureComponent) {
  getState() {
let {
  inLibrary: e,
  sku: t,
  hasEntitlementBranch: n
} = this.props;
if (n)
  return 5;
if (e)
  return 1;
if (!t.available)
  return 4;
else if (t.premium)
  return 3;
else if (t.isOnSale)
  return 2;
else if (null != t.getPrice())
  return 4;
return null;
  }
  renderGeneric(e, t) {
let {
  className: n,
  sku: i
} = this.props;
switch (e) {
  case 5:
    return (0, d.jsx)(R, {
      className: I()(t, n)
    });
  case 1:
    return (0, d.jsx)(C, {
      className: I()(t, n)
    });
  case 3:
    return (0, d.jsx)(f, {
      sku: i,
      className: I()(t, n)
    });
  case 2:
    return (0, d.jsx)(A, {
      sku: i,
      className: I()(t, n)
    });
  default:
    return (0, d.jsx)(S, {
      className: I()(t, n),
      sku: i
    });
}
  }
  renderDirectoryHero(e) {
let {
  className: t,
  sku: n
} = this.props;
switch (e) {
  case 5:
    return (0, d.jsx)(R, {
      className: I()(t)
    });
  case 3:
    return (0, d.jsx)(f, {
      sku: n,
      className: I()(N.directoryHeroPricePremium, t)
    });
  case 2:
    return (0, d.jsx)(A, {
      sku: n,
      className: I()(N.directoryHeroPrice, t)
    });
  default:
    return (0, d.jsx)(S, {
      className: I()(N.directoryHeroPrice, t),
      sku: n
    });
}
  }
  renderListing(e) {
let t;
let {
  className: n,
  sku: i
} = this.props;
switch (e) {
  case 5:
    t = (0, d.jsx)(R, {});
    break;
  case 2:
    t = (0, d.jsxs)(_.Fragment, {
      children: [
        (0, d.jsxs)('div', {
          className: N.row,
          children: [
            (0, d.jsx)(S, {
              sku: i
            }),
            (0, d.jsx)(p, {
              sku: i
            })
          ]
        }),
        (0, d.jsx)(g, {
          sku: i
        })
      ]
    });
    break;
  default:
    t = (0, d.jsx)(S, {
      sku: i
    });
}
return (0, d.jsx)('div', {
  className: I()(N.listingPrice, n),
  children: t
});
  }
  render() {
let e = this.getState();
if (null == e)
  return null;
switch (this.props.type) {
  case 1:
    return this.renderDirectoryHero(e);
  case 2:
    return this.renderGeneric(e, N.directoryTilePrice);
  case 3:
    return this.renderGeneric(e, N.directorySearchPrice);
  case 4:
    return this.renderListing(e);
  case 5:
    return this.renderGeneric(e, N.embedPrice);
  default:
    throw Error('Invalid Price Unit Type');
}
  }
}
o = O, c = 'Types', u = i, c in o ? Object.defineProperty(o, c, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[c] = u, t.Z = O;