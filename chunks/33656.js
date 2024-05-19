"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("724458");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("663389"),
  u = s("960412"),
  c = s("151662"),
  S = s("930441"),
  E = s("689938"),
  T = s("63057"),
  f = s("611273");

function _(e) {
  let {
    label: t,
    onChange: s,
    enabled: n,
    subLabel: l
  } = e;
  return (0, a.jsx)(o.FormSwitch, {
    value: !!n,
    onChange: s,
    note: l,
    children: t
  })
}

function m() {
  let e = (0, r.useStateFromStores)([d.default], () => d.default.getSubsection()),
    t = n.createRef(),
    {
      categories: s,
      initialized: l
    } = (0, r.useStateFromStoresObject)([c.default], () => c.default.getEmailSettings());
  n.useEffect(() => {
    if (null == l)(0, u.fetchEmailSettings)();
    else if (e === S.EMAILS_SUBSECTION.toUpperCase()) {
      var s;
      null == t || null === (s = t.current) || void 0 === s || s.scrollIntoView(!0)
    }
  }, [l, t, e]);
  let m = S.MarketingEmailCategories.reduce((e, t) => e || !!s[t], !1);
  return l ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: t
    }), (0, a.jsxs)(o.FormSection, {
      className: i()(f.marginTop40),
      tag: o.FormTitleTags.H1,
      title: E.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS,
      children: [S.EmailCategoriesList.map(e => {
        let {
          category: t,
          label: n,
          subLabel: l
        } = e;
        return (0, a.jsx)(_, {
          label: n(),
          subLabel: l(),
          enabled: s[t],
          onChange: e => {
            var s, a;
            return s = t, a = e, void(0, u.updateEmailSetting)(s, a)
          }
        }, n())
      }), (0, a.jsx)(o.Button, {
        className: T.marketingUnsubscribeButton,
        disabled: !m,
        look: o.ButtonLooks.LINK,
        color: o.ButtonColors.LINK,
        onClick: u.updateMarketingEmailSettings,
        children: E.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING
      }), (0, a.jsx)(o.FormText, {
        type: o.FormTextTypes.DESCRIPTION,
        children: E.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING_DESCRIPTION
      }), (0, a.jsx)(o.FormDivider, {
        className: i()(f.marginTop40, f.marginBottom40)
      })]
    })]
  }) : null
}