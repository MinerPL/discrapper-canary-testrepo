"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("448105"),
  o = n.n(r),
  c = n("77078"),
  d = n("142833"),
  u = n("448993"),
  _ = n("813006"),
  E = n("476263"),
  N = n("466857"),
  I = n("587974"),
  m = n("315102"),
  f = n("238055"),
  C = n("782340"),
  T = n("69012"),
  S = n("529861");

function g(e) {
  var t;
  let {
    guildInfo: n,
    onClick: s,
    submitting: l
  } = e, i = null !== (t = m.default.getGuildIconURL({
    id: n.id,
    icon: n.icon,
    size: 40
  })) && void 0 !== t ? t : void 0;
  return (0, a.jsxs)(c.Clickable, {
    className: T.clickableGuildInfoRow,
    onClick: s,
    children: [(0, a.jsx)(I.default, {
      mask: I.default.Masks.AVATAR_DEFAULT,
      width: 40,
      height: 40,
      children: (0, a.jsx)(E.default, {
        className: T.guildIcon,
        iconSrc: i,
        guild: new _.default(n),
        size: E.default.Sizes.MEDIUM
      })
    }), (0, a.jsx)(c.Text, {
      className: T.guildName,
      variant: "text-md/semibold",
      children: n.name
    }), l ? (0, a.jsx)(c.Spinner, {
      type: c.Spinner.Type.PULSING_ELLIPSIS
    }) : (0, a.jsx)("img", {
      className: T.arrow,
      alt: "",
      src: S
    })]
  })
}
var h = e => {
  let {
    setStep: t,
    email: n,
    guildsInfo: l,
    setGuildId: r,
    forceGuildScrollHeight: _
  } = e, [E, I] = s.useState(null), [m, S] = s.useState(void 0), [h, A] = s.useState(null), p = e => async () => {
    I(null), r(e), A(e);
    try {
      await d.default.sendVerificationEmail(n, !0, e), t(f.HubEmailConnectionSteps.VERIFY_PIN)
    } catch (e) {
      I(new u.APIError(e))
    } finally {
      A(null)
    }
  }, x = () => t(f.HubEmailConnectionSteps.SUBMIT_SCHOOL), v = l;
  return null != m && "" !== m && (v = l.filter(e => o(m.toLowerCase(), e.name.toLowerCase()))), (0, a.jsxs)("div", {
    className: T.container,
    children: [(0, a.jsx)(c.Heading, {
      className: i(T.centerText, T.header),
      variant: "heading-xl/semibold",
      children: C.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_HEADER
    }), (0, a.jsx)("div", {
      className: T.description,
      children: (0, a.jsx)(c.Text, {
        className: T.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: C.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_SUBHEADER.format({
          onJoinWaitlist: x
        })
      })
    }), (0, a.jsxs)("div", {
      className: i(T.guildList, {
        [T.forcedHeight]: _
      }),
      children: [(0, a.jsxs)("div", {
        className: T.searchContainer,
        children: [(0, a.jsx)(N.default, {
          placeholder: C.default.Messages.SEARCH,
          className: T.searchBox,
          inputClassName: T.searchBoxInput,
          searchIconClassName: T.searchBoxIcon,
          closeIconClassName: T.searchBoxIcon,
          onChange: e => {
            S(e)
          },
          label: C.default.Messages.SEARCH,
          searchTerm: m,
          onClear: () => {
            S(void 0)
          }
        }), (0, a.jsx)(c.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          children: null == E ? void 0 : E.getAnyErrorMessage()
        })]
      }), v.length > 0 ? (0, a.jsx)(c.ScrollerThin, {
        className: T.scroller,
        children: v.map(e => void 0 === e ? null : (0, a.jsx)(g, {
          guildInfo: e,
          onClick: p(e.id),
          submitting: h === e.id
        }, e.id))
      }) : (0, a.jsx)("div", {
        className: T.noResultsContainer,
        children: (0, a.jsxs)("div", {
          className: T.noResultsContent,
          children: [(0, a.jsx)("div", {
            className: T.noResultsImage
          }), (0, a.jsx)(c.Heading, {
            className: i(T.centerText, T.header),
            variant: "heading-xl/semibold",
            children: C.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_HEADER
          }), (0, a.jsx)(c.Text, {
            className: T.centerText,
            variant: "text-md/normal",
            children: C.default.Messages.HUB_EMAIL_CONNECTION_GUILD_SELECT_NO_RESULTS_SUBHEADER.format({
              onJoinWaitlist: x
            })
          })]
        })
      })]
    })]
  })
}