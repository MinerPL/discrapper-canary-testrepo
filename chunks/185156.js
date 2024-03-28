"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
}), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("803997"),
  s = l.n(n),
  r = l("912370"),
  c = l("477690"),
  o = l("481060"),
  d = l("731081"),
  u = l("626135"),
  p = l("463571"),
  _ = l("34674"),
  m = l("132871"),
  f = l("147890"),
  h = l("409425"),
  C = l("57716"),
  g = l("981631"),
  I = l("689938"),
  A = l("872301");

function E(e) {
  let {
    collectionTitle: t,
    title: l,
    description: a,
    handleClick: n,
    imageSrc: r,
    ctaLabel: c,
    ctaLink: d,
    applicationId: u
  } = e, _ = "936929561302675456" === u, m = null == u ? (0, i.jsx)(o.Button, {
    className: A.applicationCta,
    onClick: n,
    children: c
  }) : (0, i.jsx)(p.default, {
    href: g.Routes.APPLICATION_DIRECTORY_PROFILE(u),
    children: (0, i.jsx)(o.Button, {
      className: A.applicationCta,
      onClick: n,
      children: c
    })
  });
  return (0, i.jsxs)("div", {
    className: A.card,
    children: [(0, i.jsx)("div", {
      className: A.textContainer,
      children: (0, i.jsxs)("div", {
        className: A.verticallyCenter,
        children: [(0, i.jsx)(o.Text, {
          className: A.collectionTitle,
          tag: "span",
          color: "header-secondary",
          variant: "heading-deprecated-12/semibold",
          children: t
        }), (0, i.jsxs)(o.Heading, {
          className: A.applicationName,
          variant: "heading-xxl/medium",
          children: [l, " ", _ && (0, i.jsx)(h.default, {})]
        }), (0, i.jsx)(o.Text, {
          className: A.applicationDescription,
          variant: "text-md/normal",
          lineClamp: 3,
          children: a
        }), null == d ? m : (0, i.jsx)(o.Anchor, {
          onClick: n,
          href: d,
          className: s()((0, o.getButtonStyle)({
            grow: !1
          }), A.applicationCta),
          children: c
        })]
      })
    }), (0, i.jsx)("div", {
      className: A.imageContainer,
      children: (0, i.jsx)("img", {
        alt: l,
        className: A.image,
        src: r
      })
    })]
  })
}

function v(e) {
  let {
    collection: t,
    collection: {
      id: l,
      title: n,
      application_directory_collection_items: o
    }
  } = e, p = (0, C.default)({
    collection: t
  }), [h, v] = a.useState(), x = (0, m.useApplicationDirectoryHistory)(e => e.guildId);
  return a.useEffect(() => {
    let e = null == p ? void 0 : p.current;
    if (null == e) return;
    let t = new ResizeObserver(() => {
      let t = document.body.offsetWidth < parseFloat(c.default.COLLECTION_GALLERY_MEDIA_BREAKPOINT) ? parseFloat(c.default.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT) : parseFloat(c.default.COLLECTION_GALLERY_ROW_CARD_HEIGHT);
      v(e.offsetWidth / t)
    });
    return t.observe(document.body), () => {
      t.disconnect()
    }
  }, [p]), (0, i.jsx)("article", {
    ref: p,
    className: s()({
      [A.collectionBottomMargin]: o.length <= 1
    }),
    children: (0, i.jsx)(d.default, {
      aspectRatio: h,
      themedPagination: !0,
      paginationClassName: A.paginationControls,
      paginationArrowClassName: A.paginationArrow,
      items: o,
      onChangeItem: (e, t, i) => {
        let {
          application: a
        } = e;
        null != a && u.default.track(g.AnalyticEvents.APP_DIRECTORY_COLLECTION_SCROLLED, {
          collection_id: l,
          offset: i,
          results: [a.id],
          guild_id: x
        })
      },
      renderItem: e => {
        let {
          id: t,
          image_hash: a,
          application: s,
          type: c,
          description: o,
          title: d,
          call_to_action_label: p,
          call_to_action_url: m
        } = e;
        if (null == a) return;
        let h = (0, _.getCollectionItemAssetUrl)({
          itemId: t,
          hash: a
        });
        if (c === r.ApplicationDirectoryCollectionItemType.APPLICATION && null != s) {
          var C, A;
          return (0, i.jsx)(E, {
            collectionTitle: n,
            title: s.name,
            description: null !== (A = null === (C = s.directory_entry) || void 0 === C ? void 0 : C.short_description) && void 0 !== A ? A : s.description,
            handleClick: () => {
              u.default.track(g.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                collection_id: l,
                application_id: s.id,
                guild_id: x,
                shown_mutual_guilds_count: void 0
              }), (0, f.goToApplication)({
                applicationId: s.id
              })
            },
            imageSrc: h,
            ctaLabel: I.default.Messages.APP_DIRECTORY_GALLERY_COLLECTION_VIEW_APP_CTA,
            applicationId: s.id
          })
        }
        if (c === r.ApplicationDirectoryCollectionItemType.LINK && null != d && null != m && null != p) return (0, i.jsx)(E, {
          collectionTitle: n,
          title: d,
          description: o,
          handleClick: () => {
            u.default.track(g.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
              collection_id: l,
              link: m,
              guild_id: x,
              shown_mutual_guilds_count: void 0
            })
          },
          imageSrc: h,
          ctaLabel: p,
          ctaLink: m
        })
      }
    })
  })
}