"use strict";
n.r(t), n.d(t, {
  HeroImage: function() {
    return v
  },
  default: function() {
    return L
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("512722"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("131388"),
  d = n("357352"),
  c = n("353254"),
  f = n("695346"),
  E = n("271383"),
  _ = n("594174"),
  T = n("346656"),
  m = n("682864"),
  I = n("671533"),
  p = n("810090"),
  h = n("51144"),
  N = n("506071"),
  S = n("696014"),
  C = n("847033"),
  A = n("544978"),
  g = n("893182"),
  M = n("689938"),
  R = n("871142");

function O(e) {
  let {
    onClick: t
  } = e;
  return (0, s.jsxs)(o.Clickable, {
    onClick: t,
    className: R.showMoreButton,
    children: [(0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: M.default.Messages.GUILD_STORE_HERO_SHOW_MORE_DESCRIPTION_LABEL
    }), (0, s.jsx)(m.default, {
      size: 4,
      horizontal: !0
    }), (0, s.jsx)(I.default, {
      direction: I.default.Directions.RIGHT,
      className: R.showMoreArrow
    })]
  })
}

function v(e) {
  let {
    coverImageAsset: t,
    isPreview: n = !1
  } = e, a = f.GifAutoPlay.useSetting(), l = (0, N.useIsWindowFocused)() && a, [i, r] = (0, c.default)(t, l), o = l ? (0, s.jsx)(p.default, {
    autoPlay: !0,
    loop: !0,
    className: R.coverImage,
    width: 655,
    poster: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.png"),
    src: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.mov")
  }) : (0, s.jsx)("img", {
    src: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.png"),
    alt: "",
    className: R.coverImage
  });
  return (0, s.jsx)("div", {
    ref: i,
    className: R.coverImageContainer,
    children: null == r || n ? o : (0, s.jsx)("img", {
      src: r,
      alt: "",
      className: R.coverImage
    })
  })
}

function L(e) {
  var t, n, l;
  let {
    guild: c,
    subscriptionsSettings: f
  } = e, I = c.id;
  let {
    nickname: p,
    nickcolor: N
  } = (l = I, (0, r.useStateFromStoresObject)([E.default, _.default], () => {
    var e, t;
    let n = _.default.getCurrentUser();
    i()(null != n, "user cannot be null");
    let s = E.default.getMember(l, n.id);
    return {
      nickname: null !== (e = null == s ? void 0 : s.nick) && void 0 !== e ? e : h.default.getName(n),
      nickcolor: null !== (t = null == s ? void 0 : s.colorString) && void 0 !== t ? t : void 0
    }
  }, [l])), {
    isTruncated: L,
    ExpandableTextContainer: x
  } = (0, S.useExpandableTextContainer)(), D = (null !== (n = null == f ? void 0 : null === (t = f.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0, [P, y] = a.useState(1), U = (0, u.default)("(max-width: ".concat(R.twoColumnWidth, ")")), {
    selectedTab: b,
    isPhantomPreview: j
  } = (0, C.useGuildShopDisplayContext)(), G = b === A.GuildShopTab.GUILD_PRODUCTS_PREVIEW ? M.default.Messages.GUILD_STORE_HERO_PREVIEW_TAB_DESCRIPTION : M.default.Messages.GUILD_STORE_HERO_PREVIEW_PAGE_DESCRIPTION, B = D ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(x, {
      lineClamp: U || 2 === P ? 2 : 3,
      children: (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        children: null == f ? void 0 : f.description
      })
    }), L && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(m.default, {
        size: 4
      }), (0, s.jsx)(O, {
        onClick: () => (0, g.default)({
          guildId: I
        })
      })]
    })]
  }) : (0, s.jsx)(o.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: j ? G : M.default.Messages.GUILD_STORE_HERO_DEFAULT_DESCRIPTION
  });
  return (0, s.jsxs)("div", {
    className: R.container,
    children: [(0, s.jsxs)("div", {
      className: R.infoContainer,
      children: [(0, s.jsx)("div", {
        children: (0, s.jsx)(T.default, {
          guild: c,
          size: T.default.Sizes.LARGER,
          iconSrc: null == c.icon || j ? (0, d.getAssetCDNUrl)("server_products/storefront/default-guild-icon.jpg") : void 0
        })
      }), (0, s.jsx)(m.default, {
        size: 16,
        horizontal: !0
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)("div", {
          ref: e => {
            null != e && e.clientHeight > 30 && y(2)
          },
          children: (0, s.jsx)(o.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            lineClamp: 2,
            children: j ? M.default.Messages.GUILD_STORE_HERO_PREVIEW_TITLE : M.default.Messages.GUILD_STORE_HERO_TITLE.format({
              guildName: c.name
            })
          })
        }), (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(m.default, {
            size: 8
          }), (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: M.default.Messages.GUILD_STORE_HERO_DESCRIPTION_GREETING.format({
              username: p,
              usernameHook: function(e, t) {
                return (0, s.jsx)("span", {
                  style: {
                    color: N
                  },
                  children: e
                }, t)
              }
            })
          }), (0, s.jsx)(m.default, {
            size: 9
          }), B]
        })]
      })]
    }), (0, s.jsx)(v, {
      coverImageAsset: null == f ? void 0 : f.cover_image_asset,
      isPreview: j
    })]
  })
}