"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(129861),
  l = n(228168),
  u = n(689938),
  _ = n(660120);

function d(e) {
  let {
    user: t,
    profileType: n,
    usernameIcon: r,
    tags: d,
    nickname: c,
    nicknameIcons: E,
    pronouns: I,
    className: T,
    isTryItOut: h,
    onOpenProfile: S,
    nicknameVariant: f = "heading-lg/bold",
    pronounsVariant: N = "text-sm/medium"
  } = e, A = {
    [_.biteSize]: n === l.y0.BITE_SIZE,
    [_.fullSize]: n === l.y0.FULL_SIZE,
    [_.panel]: n === l.y0.PANEL
  }, m = e => null == S ? e : (0, i.jsx)(o.Clickable, {
    onClick: S,
    className: _.clickableUsername,
    children: e
  }), O = null != I && I.length > 0;
  return (0, i.jsxs)("div", {
    className: s()(_.container, T),
    children: [(0, i.jsxs)("div", {
      className: _.usernameRow,
      children: [m((0, i.jsx)(o.Heading, {
        className: s()(_.nickname, A),
        variant: f,
        children: c
      })), null != E && (0, i.jsx)("div", {
        className: s()(_.nicknameIcons, A),
        children: E
      })]
    }), (0, i.jsxs)("div", {
      className: s()(_.tags, A, O && _.tagsWithPronouns),
      children: [m((0, i.jsx)(a.Z, {
        user: t,
        usernameIcon: r,
        forceUsername: !0,
        forcePomelo: h,
        className: _.userTag,
        usernameClass: _.userTagUsername,
        discriminatorClass: _.userTagDiscriminator
      })), O && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          "aria-hidden": "true",
          className: _.dotSpacer
        }), (0, i.jsx)(o.TooltipContainer, {
          className: _.pronounsTooltip,
          text: u.Z.Messages.USER_PROFILE_PRONOUNS,
          delay: l.vB,
          children: (0, i.jsx)(o.Text, {
            variant: N,
            className: _.pronouns,
            color: "header-primary",
            children: I
          })
        })]
      }), d]
    })]
  })
}