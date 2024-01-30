"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  l = s.n(n),
  i = s("77078"),
  u = s("411691"),
  o = s("367226"),
  d = s("628550"),
  c = s("598739"),
  _ = s("558566"),
  E = s("650734"),
  I = e => {
    let {
      className: t,
      variant: s = c.PerksDiscoverabilityVariants.PERKS_DISCOVERABILITY,
      noBackground: n = !1,
      leftAlignHeaders: I = !1,
      showAllPerksButton: T
    } = e, f = r.useRef(null), S = (0, o.useShouldScrollToWhatsNew)(), R = (0, u.default)("perks-discoverability");
    (0, o.useClearNewBadge)();
    let m = s === c.PerksDiscoverabilityVariants.WHATS_NEW;
    r.useEffect(() => {
      let e = f.current;
      if (null == e || !S || !m) return;
      let t = requestAnimationFrame(() => {
        e.scrollIntoView({
          behavior: "smooth"
        })
      });
      return () => cancelAnimationFrame(t)
    }, [f, S, m]);
    let A = (0, c.usePerksDiscoverabilityStrings)(m),
      N = (0, d.default)(),
      p = (0, c.getFilteredPerksDiscoverabilityCards)(N, s, R),
      g = p.some(e => null != e.pillText);
    return (0, a.jsxs)("div", {
      ref: f,
      className: l(E.section, {
        [E.centerAlignSection]: !I,
        [E.leftAlignSection]: I
      }, t),
      children: [(() => {
        let e = (0, a.jsx)(i.Heading, {
          variant: "heading-xxl/extrabold",
          color: "header-primary",
          className: E.heading,
          children: A.title
        });
        return null == T ? e : I ? (0, a.jsxs)("div", {
          className: E.sectionHeader,
          children: [e, null != T && (0, a.jsx)("div", {
            className: E.showAllPerksButton,
            children: T
          })]
        }) : (0, a.jsxs)("div", {
          className: E.container,
          children: [(0, a.jsx)("div", {
            className: E.sectionHeaderSeeAll,
            children: e
          }), (0, a.jsx)("div", {
            className: l(E.showAllPerksButton),
            children: T
          })]
        })
      })(), (0, a.jsx)(i.Text, {
        variant: "text-lg/normal",
        color: "header-primary",
        className: l(E.subtitle, {
          [E.subtitle]: null == T || I,
          [E.subtitleWithButton]: null != T && !I,
          [E.fullWidth]: m || I,
          [E.moreSubtitleMargin]: g,
          [E.leftAlignSubtitle]: I,
          [E.centerAlignSubtitle]: !I
        }),
        children: A.subtitle
      }), !I && null != T && (0, a.jsx)("div", {
        className: l(E.showAllPerksButtonCenter),
        children: T
      }), (0, a.jsx)("div", {
        className: E.cardContainer,
        children: p.map((e, t) => (0, a.jsx)(_.default, {
          ...e,
          forceShadow: n
        }, "".concat(e.name, "_").concat(t)))
      })]
    })
  }