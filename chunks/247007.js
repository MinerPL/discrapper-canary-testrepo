"use strict";
t.r(s), t("47120");
var a = t("735250"),
  l = t("470079"),
  n = t("803997"),
  i = t.n(n),
  o = t("658722"),
  r = t.n(o),
  d = t("481060"),
  c = t("231239"),
  u = t("881052"),
  N = t("601964"),
  m = t("346656"),
  _ = t("408814"),
  E = t("806519"),
  I = t("768581"),
  C = t("888592"),
  x = t("689938"),
  f = t("142368"),
  h = t("216019");

function T(e) {
  var s;
  let {
    guildInfo: t,
    onClick: l,
    submitting: n
  } = e, i = null !== (s = I.default.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 40
  })) && void 0 !== s ? s : void 0;
  return (0, a.jsxs)(d.Clickable, {
    className: f.clickableGuildInfoRow,
    onClick: l,
    children: [(0, a.jsx)(E.default, {
      mask: E.default.Masks.AVATAR_DEFAULT,
      width: 40,
      height: 40,
      children: (0, a.jsx)(m.default, {
        className: f.guildIcon,
        iconSrc: i,
        guild: new N.default(t),
        size: m.default.Sizes.MEDIUM
      })
    }), (0, a.jsx)(d.Text, {
      className: f.guildName,
      variant: "text-md/semibold",
      children: t.name
    }), n ? (0, a.jsx)(d.Spinner, {
      type: d.Spinner.Type.PULSING_ELLIPSIS
    }) : (0, a.jsx)("img", {
      className: f.__invalid_arrow,
      alt: "",
      src: h
    })]
  })
}
s.default = e => {
  let {
    setStep: s,
    email: t,
    guildsInfo: n,
    setGuildId: o,
    forceGuildScrollHeight: N
  } = e, [m, E] = l.useState(null), [I, h] = l.useState(void 0), [g, S] = l.useState(null), O = e => async () => {
    E(null), o(e), S(e);
    try {
      await c.default.sendVerificationEmail(t, !0, e), s(C.HubEmailConnectionSteps.VERIFY_PIN)
    } catch (e) {
      E(new u.APIError(e))
    } finally {
      S(null)
    }
  }, v = () => s(C.HubEmailConnectionSteps.SUBMIT_SCHOOL), L = n;
  return null != I && "" !== I && (L = n.filter(e => r()(I.toLowerCase(), e.name.toLowerCase()))), (0, a.jsxs)("div", {
    className: f.container,
    children: [(0, a.jsx)(d.Heading, {
      className: i()(f.centerText, f.header),
      variant: "heading-xl/semibold",
      children: x.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_HEADER
    }), (0, a.jsx)("div", {
      className: f.description,
      children: (0, a.jsx)(d.Text, {
        className: f.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: x.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_SUBHEADER.format({
          onJoinWaitlist: v
        })
      })
    }), (0, a.jsxs)("div", {
      className: i()(f.guildList, {
        [f.forcedHeight]: N
      }),
      children: [(0, a.jsxs)("div", {
        className: f.searchContainer,
        children: [(0, a.jsx)(_.default, {
          placeholder: x.default.Messages.SEARCH,
          className: f.searchBox,
          inputClassName: f.searchBoxInput,
          searchIconClassName: f.searchBoxIcon,
          closeIconClassName: f.searchBoxIcon,
          onChange: e => {
            h(e)
          },
          label: x.default.Messages.SEARCH,
          searchTerm: I,
          onClear: () => {
            h(void 0)
          }
        }), (0, a.jsx)(d.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          children: null == m ? void 0 : m.getAnyErrorMessage()
        })]
      }), L.length > 0 ? (0, a.jsx)(d.ScrollerThin, {
        className: f.scroller,
        children: L.map(e => void 0 === e ? null : (0, a.jsx)(T, {
          guildInfo: e,
          onClick: O(e.id),
          submitting: g === e.id
        }, e.id))
      }) : (0, a.jsx)("div", {
        className: f.noResultsContainer,
        children: (0, a.jsxs)("div", {
          className: f.noResultsContent,
          children: [(0, a.jsx)("div", {
            className: f.noResultsImage
          }), (0, a.jsx)(d.Heading, {
            className: i()(f.centerText, f.header),
            variant: "heading-xl/semibold",
            children: x.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_HEADER
          }), (0, a.jsx)(d.Text, {
            className: f.centerText,
            variant: "text-md/normal",
            children: x.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_SUBHEADER.format({
              onJoinWaitlist: v
            })
          })]
        })
      })]
    })]
  })
}