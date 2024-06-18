"use strict";
a(47120);
var t = a(735250),
  i = a(470079),
  r = a(120356),
  l = a.n(r),
  n = a(418435),
  o = a.n(n),
  d = a(442837),
  c = a(481060),
  E = a(558324),
  R = a(367907),
  S = a(999382),
  m = a(626135),
  x = a(938502),
  _ = a(296386),
  u = a(219369),
  h = a(981631),
  I = a(203377),
  C = a(689938),
  g = a(353964);
let N = /^[A-Za-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF-]+$/u;
s.Z = e => {
  var s;
  let {
    guild: a,
    guildMetadata: r,
    headerId: n
  } = e, [T, p] = i.useState(!1), v = (0, d.e7)([S.Z], () => "keywords" in S.Z.getErrors()), O = e => {
    if (N.test(e)) p(!1);
    else {
      p(!0);
      return
    }
    if ((null == a ? void 0 : a.id) == null) return;
    let {
      keywords: s
    } = r;
    !(s.length >= I.G7) && _.zH(a.id, o()([...s, e.toLowerCase()]))
  }, D = e => {
    O(e), m.default.track(h.rMx.DISCOVERY_SETUP_POPULAR_TAG_CLICKED, {
      tag: e,
      primary_category_id: r.primaryCategoryId,
      ...(0, R.hH)(a.id)
    })
  }, j = T ? C.Z.Messages.SERVER_DISCOVERY_TAGS_ERROR_MSG_DASHES_ONLY : v ? C.Z.Messages.SERVER_DISCOVERY_BLOCKED_WORD_LEARN_MORE.format({
    onLearnMoreClick: () => {
      (0, u.lW)({
        articleId: h.BhN.SERVER_DISCOVERY_GUIDELINES,
        guildId: a.id,
        modalStep: u.tK.TAGS
      })
    }
  }) : null, V = new Set(r.keywords);
  return (0, t.jsxs)("div", {
    className: g.container,
    children: [(0, t.jsxs)("div", {
      className: g.content,
      children: [(0, t.jsx)("div", {
        className: l()(g.stepImage, g.tagImage)
      }), (0, t.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: g.header,
        id: n,
        children: C.Z.Messages.SERVER_DISCOVERY_TAGS
      }), (0, t.jsx)(c.Text, {
        color: "none",
        variant: "text-md/normal",
        className: g.headerCaption,
        children: C.Z.Messages.SERVER_DISCOVERY_SEARCH_SUBHEADING
      })]
    }), (0, t.jsxs)(c.FormSection, {
      className: g.form,
      children: [(0, t.jsx)(c.FormTitle, {
        required: !0,
        children: C.Z.Messages.SERVER_DISCOVERY_TAGS
      }), (0, t.jsx)(c.FormText, {
        type: c.FormTextTypes.DESCRIPTION,
        className: g.description,
        children: C.Z.Messages.SERVER_DISCOVERY_TAGS_INPUT_SUBLABEL
      }), (0, t.jsx)(E.Z, {
        className: l()(g.tags, {
          [g.error]: null != j
        }),
        tags: r.keywords,
        onRemoveTag: e => {
          if ((null == a ? void 0 : a.id) == null) return;
          let s = [...r.keywords];
          s.splice(e, 1), _.zH(a.id, s)
        },
        onAddTag: O,
        maxTags: I.G7,
        maxTaxLength: I._0,
        placeholder: (null == r ? void 0 : null === (s = r.keywords) || void 0 === s ? void 0 : s.length) === 0 ? C.Z.Messages.SERVER_DISCOVERY_TAGS_INPUT_PLACEHOLDER : ""
      }), (0, t.jsx)(c.Text, {
        className: g.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: j
      })]
    }), (0, t.jsx)("div", {
      className: g.form,
      children: (0, t.jsx)(c.FormTitle, {
        children: C.Z.Messages.SERVER_DISCOVERY_POPULAR_TAGS
      })
    }), (0, t.jsx)("div", {
      className: g.tagContainer,
      children: (0, x.P5)(r.primaryCategoryId).map(e => (0, t.jsx)(c.Anchor, {
        onClick: () => D(e),
        className: l()(g.tag, {
          [g.usedTag]: V.has(e)
        }),
        children: e
      }, e))
    })]
  })
}