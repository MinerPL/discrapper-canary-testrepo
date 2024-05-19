"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var l = a("735250");
a("470079");
var n = a("481060"),
  s = a("689938"),
  i = a("56082");

function r(e) {
  let {
    imageSrc: t,
    header: a,
    description: r,
    secondaryInfo: c,
    mutualGuildCount: u,
    ctaLabel: o,
    onCtaClick: d,
    children: m
  } = e, g = (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)("div", {
      className: i.topWrapper,
      children: [(0, l.jsx)("div", {
        className: i.__invalid_imageContainer,
        children: (0, l.jsx)("img", {
          alt: "",
          className: i.image,
          src: t
        })
      }), (0, l.jsxs)("div", {
        className: i.content,
        children: [(0, l.jsxs)("div", {
          className: i.header,
          children: [(0, l.jsxs)("div", {
            className: i.info,
            children: [(0, l.jsx)(n.Heading, {
              className: i.name,
              variant: "heading-md/semibold",
              children: a
            }), null != u ? u : (0, l.jsx)(l.Fragment, {
              children: (0, l.jsxs)("div", {
                className: i.details,
                children: [(0, l.jsx)(n.Text, {
                  tag: "span",
                  color: "header-secondary",
                  variant: "text-sm/medium",
                  children: s.default.Messages.APP_DIRECTORY_MUSIC_CATEGORY
                }), null != c ? (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)(n.Text, {
                    tag: "span",
                    color: "interactive-muted",
                    variant: "text-sm/normal",
                    className: i.bullet,
                    children: "•"
                  }), (0, l.jsx)(n.Text, {
                    tag: "span",
                    color: "header-secondary",
                    variant: "text-sm/medium",
                    children: c
                  })]
                }) : null]
              })
            })]
          }), null != d && null != o ? (0, l.jsx)(n.Button, {
            size: n.Button.Sizes.SMALL,
            onClick: d,
            className: i.__invalid_button,
            children: o
          }) : null]
        }), null != r ? (0, l.jsx)(n.Text, {
          className: i.listingDescription,
          variant: "text-md/normal",
          children: r
        }) : null, (0, l.jsx)("div", {
          className: i.children,
          children: m
        })]
      })]
    })
  });
  return (0, l.jsx)(n.FocusRing, {
    children: (0, l.jsx)("div", {
      className: i.listing,
      children: g
    })
  })
}