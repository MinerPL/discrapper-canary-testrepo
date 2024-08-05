n.d(t, {
  C: function() {
return M;
  },
  Z: function() {
return x;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(512722),
  r = n.n(a),
  l = n(442837),
  o = n(481060),
  c = n(131388),
  u = n(357352),
  d = n(565138),
  _ = n(353254),
  E = n(695346),
  I = n(271383),
  m = n(594174),
  T = n(671533),
  h = n(810090),
  N = n(51144),
  C = n(506071),
  f = n(696014),
  p = n(847033),
  g = n(544978),
  S = n(893182),
  A = n(689938),
  R = n(55686);

function O(e) {
  let {
onClick: t
  } = e;
  return (0, i.jsxs)(o.Clickable, {
onClick: t,
className: R.showMoreButton,
children: [
  (0, i.jsx)(o.Text, {
    variant: 'text-sm/medium',
    color: 'header-primary',
    children: A.Z.Messages.GUILD_STORE_HERO_SHOW_MORE_DESCRIPTION_LABEL
  }),
  (0, i.jsx)(o.Spacer, {
    size: 4,
    horizontal: !0
  }),
  (0, i.jsx)(T.Z, {
    direction: T.Z.Directions.RIGHT,
    className: R.showMoreArrow
  })
]
  });
}

function x(e) {
  let {
coverImageAsset: t,
isPreview: n = !1
  } = e, s = E.QK.useSetting(), a = (0, C.n)() && s, [r, l] = (0, _.Z)(t, a), o = a ? (0, i.jsx)(h.Z, {
autoPlay: !0,
loop: !0,
className: R.coverImage,
width: 655,
poster: (0, u.b)('server_products/storefront/default-header.png'),
src: (0, u.b)('server_products/storefront/default-header.mov')
  }) : (0, i.jsx)('img', {
src: (0, u.b)('server_products/storefront/default-header.png'),
alt: '',
className: R.coverImage
  });
  return (0, i.jsx)('div', {
ref: r,
className: R.coverImageContainer,
children: null == l || n ? o : (0, i.jsx)('img', {
  src: l,
  alt: '',
  className: R.coverImage
})
  });
}

function M(e) {
  var t, n, a;
  let {
guild: _,
subscriptionsSettings: E
  } = e, T = _.id;
  let {
nickname: h,
nickcolor: C
  } = (a = T, (0, l.cj)([
I.ZP,
m.default
  ], () => {
var e, t;
let n = m.default.getCurrentUser();
r()(null != n, 'user cannot be null');
let i = I.ZP.getMember(a, n.id);
return {
  nickname: null !== (e = null == i ? void 0 : i.nick) && void 0 !== e ? e : N.ZP.getName(n),
  nickcolor: null !== (t = null == i ? void 0 : i.colorString) && void 0 !== t ? t : void 0
};
  }, [a])), {
isTruncated: M,
ExpandableTextContainer: v
  } = (0, f.s)(), L = (null !== (n = null == E ? void 0 : null === (t = E.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0, [Z, P] = s.useState(1), D = (0, c.Z)('(max-width: 1439px)'), {
selectedTab: b,
isPhantomPreview: j
  } = (0, p.m)(), U = b === g.y.GUILD_PRODUCTS_PREVIEW ? A.Z.Messages.GUILD_STORE_HERO_PREVIEW_TAB_DESCRIPTION : A.Z.Messages.GUILD_STORE_HERO_PREVIEW_PAGE_DESCRIPTION, y = L ? (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(v, {
    lineClamp: D || 2 === Z ? 2 : 3,
    children: (0, i.jsx)(o.Text, {
      variant: 'text-sm/normal',
      color: 'text-normal',
      children: null == E ? void 0 : E.description
    })
  }),
  M && (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(o.Spacer, {
        size: 4
      }),
      (0, i.jsx)(O, {
        onClick: () => (0, S.Z)({
          guildId: T
        })
      })
    ]
  })
]
  }) : (0, i.jsx)(o.Text, {
variant: 'text-sm/normal',
color: 'text-normal',
children: j ? U : A.Z.Messages.GUILD_STORE_HERO_DEFAULT_DESCRIPTION
  });
  return (0, i.jsxs)('div', {
className: R.container,
children: [
  (0, i.jsxs)('div', {
    className: R.infoContainer,
    children: [
      (0, i.jsx)('div', {
        children: (0, i.jsx)(d.Z, {
          guild: _,
          size: d.Z.Sizes.LARGER,
          iconSrc: null == _.icon || j ? (0, u.b)('server_products/storefront/default-guild-icon.jpg') : void 0
        })
      }),
      (0, i.jsx)(o.Spacer, {
        size: 16,
        horizontal: !0
      }),
      (0, i.jsxs)('div', {
        children: [
          (0, i.jsx)('div', {
            ref: e => {
              null != e && e.clientHeight > 30 && P(2);
            },
            children: (0, i.jsx)(o.Heading, {
              variant: 'heading-xl/semibold',
              color: 'header-primary',
              lineClamp: 2,
              children: j ? A.Z.Messages.GUILD_STORE_HERO_PREVIEW_TITLE : A.Z.Messages.GUILD_STORE_HERO_TITLE.format({
                guildName: _.name
              })
            })
          }),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(o.Spacer, {
                size: 8
              }),
              (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                children: A.Z.Messages.GUILD_STORE_HERO_DESCRIPTION_GREETING.format({
                  username: h,
                  usernameHook: function(e, t) {
                    return (0, i.jsx)('span', {
                      style: {
                        color: C
                      },
                      children: e
                    }, t);
                  }
                })
              }),
              (0, i.jsx)(o.Spacer, {
                size: 9
              }),
              y
            ]
          })
        ]
      })
    ]
  }),
  (0, i.jsx)(x, {
    coverImageAsset: null == E ? void 0 : E.cover_image_asset,
    isPreview: j
  })
]
  });
}