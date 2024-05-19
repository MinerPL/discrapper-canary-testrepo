"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  }
}), a("47120");
var l = a("735250");
a("470079");
var n = a("209173"),
  s = a("782568"),
  i = a("626135"),
  r = a("924489"),
  c = a("132871"),
  u = a("147890"),
  o = a("491576"),
  d = a("112884"),
  m = a("639002"),
  g = a("781627"),
  p = a("981631"),
  _ = a("689938"),
  f = a("96809");
let h = new Map([
    ["890343617762304070", {
      imageSrc: a("336662")
    }]
  ]),
  C = new Map,
  R = new Map([
    [p.PlatformTypes.SPOTIFY, {
      imageSrc: a("655130")
    }]
  ]);

function I(e) {
  var t, a;
  let {
    result: n
  } = e, s = n.data, i = (0, o.default)({
    application: s
  }), c = h.get(n.data.id);
  if (null == c) return null;
  let d = i.length > 0 ? (0, l.jsx)(r.default, {
      application: n.data,
      textVariant: "text-sm/semibold",
      mutualGuilds: i,
      mutualGuildShownMax: 3,
      guildIconSize: r.GuildIconSize.SMALL,
      compact: !0
    }) : null,
    m = null !== (a = null === (t = s.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== a ? a : 0,
    p = m > 0 ? _.default.Messages.APP_DIRECTORY_SHORT_GUILD_COUNT.format({
      guildCount: m
    }) : void 0;
  return (0, l.jsx)(g.default, {
    imageSrc: c.imageSrc,
    header: n.data.name,
    description: n.data.description,
    secondaryInfo: p,
    ctaLabel: _.default.Messages.APPLICATION_ADD_BUTTON,
    mutualGuildCount: d,
    onCtaClick: () => (0, u.goToApplication)({
      applicationId: s.id
    })
  })
}

function x(e) {
  let {
    result: t
  } = e, a = C.get(t.data.id);
  return null == a ? null : (0, l.jsx)(g.default, {
    imageSrc: a.imageSrc,
    header: t.data.name,
    description: t.data.description,
    secondaryInfo: _.default.Messages.APP_DIRECTORY_ACTIVITY_LABEL
  })
}

function A(e) {
  let t, a, n, {
      result: r,
      guildId: u
    } = e,
    o = R.get(r.data.name);
  return null == o ? null : (r.data.name === p.PlatformTypes.SPOTIFY && (t = _.default.Messages.APP_DIRECTORY_SPOTIFY_TITLE, a = _.default.Messages.APP_DIRECTORY_SPOTIFY_DESCRIPTION.format(), n = () => {
    i.default.track(p.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
      current_page: c.ApplicationDirectoryViews.SEARCH,
      cta: "spotify",
      guild_id: u
    }), (0, s.default)("https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection")
  }), null == t || null == a || null == n) ? null : (0, l.jsx)(g.default, {
    imageSrc: o.imageSrc,
    header: t,
    description: a,
    ctaLabel: _.default.Messages.LEARN_MORE,
    onCtaClick: n,
    secondaryInfo: _.default.Messages.APP_DIRECTORY_CONNECTION_LABEL
  })
}

function T(e) {
  let {
    results: t,
    guildId: a
  } = e;
  return (0, l.jsxs)("div", {
    className: f.container,
    children: [(0, l.jsx)(d.default, {}), (0, l.jsx)("div", {
      className: f.list,
      children: t.map((e, t) => {
        let s = "".concat(t).concat(e.type);
        if (e.type === n.ApplicationDirectorySearchResultType.APPLICATION) return (0, l.jsx)(I, {
          result: e
        }, s);
        if (e.type === n.ApplicationDirectorySearchResultType.ACTIVITY_APPLICATION) return (0, l.jsx)(x, {
          result: e
        }, s);
        if (e.type === n.ApplicationDirectorySearchResultType.CONNECTION) return (0, l.jsx)(A, {
          guildId: a,
          result: e
        }, s)
      })
    }), (0, l.jsx)(m.default, {
      guildId: a
    })]
  })
}