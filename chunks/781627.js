"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var i = l("735250");
l("470079");
var a = l("481060"),
  n = l("689938"),
  s = l("260156");

function r(e) {
  let {
    imageSrc: t,
    header: l,
    description: r,
    secondaryInfo: c,
    mutualGuildCount: o,
    ctaLabel: d,
    onCtaClick: u,
    children: p
  } = e, _ = (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)("div", {
      className: s.topWrapper,
      children: [(0, i.jsx)("div", {
        className: s.__invalid_imageContainer,
        children: (0, i.jsx)("img", {
          alt: "",
          className: s.image,
          src: t
        })
      }), (0, i.jsxs)("div", {
        className: s.content,
        children: [(0, i.jsxs)("div", {
          className: s.header,
          children: [(0, i.jsxs)("div", {
            className: s.info,
            children: [(0, i.jsx)(a.Heading, {
              className: s.name,
              variant: "heading-md/semibold",
              children: l
            }), null != o ? o : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)("div", {
                className: s.details,
                children: [(0, i.jsx)(a.Text, {
                  tag: "span",
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children: n.default.Messages.APP_DIRECTORY_MUSIC_CATEGORY
                }), null != c ? (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(a.Text, {
                    tag: "span",
                    color: "interactive-muted",
                    variant: "text-sm/normal",
                    className: s.bullet,
                    children: "•"
                  }), (0, i.jsx)(a.Text, {
                    tag: "span",
                    color: "header-secondary",
                    variant: "text-sm/medium",
                    children: c
                  })]
                }) : null]
              })
            })]
          }), null != u && null != d ? (0, i.jsx)(a.Button, {
            size: a.Button.Sizes.SMALL,
            onClick: u,
            className: s.__invalid_button,
            children: d
          }) : null]
        }), null != r ? (0, i.jsx)(a.Text, {
          className: s.listingDescription,
          variant: "text-md/normal",
          children: r
        }) : null, (0, i.jsx)("div", {
          className: s.children,
          children: p
        })]
      })]
    })
  });
  return (0, i.jsx)(a.FocusRing, {
    children: (0, i.jsx)("div", {
      className: s.listing,
      children: _
    })
  })
}