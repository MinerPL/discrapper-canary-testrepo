"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("873546"),
  i = n("399606"),
  r = n("481060"),
  o = n("434650"),
  u = n("706454"),
  d = n("973616"),
  c = n("914010"),
  f = n("594174"),
  E = n("197409"),
  _ = n("104259"),
  T = n("626135"),
  m = n("135431"),
  I = n("674588"),
  p = n("264043"),
  h = n("132871"),
  N = n("147890"),
  S = n("981631"),
  C = n("689938"),
  A = n("761111");

function g(e) {
  var t, n;
  let {
    code: g,
    message: M
  } = e, [R, O, v] = (0, i.useStateFromStoresArray)([p.default], () => [p.default.getApplication(g), p.default.isInvalidApplication(g), p.default.getApplicationFetchState(g)], [g]), L = (0, i.useStateFromStores)([u.default], () => u.default.locale), x = (0, i.useStateFromStores)([c.default], () => {
    var e;
    return null !== (e = c.default.getGuildId()) && void 0 !== e ? e : void 0
  }), D = (0, i.useStateFromStores)([f.default], () => f.default.getCurrentUser()), [P, y] = a.useState(!1), U = a.useCallback(e => {
    e && y(!0)
  }, []), b = (0, o.useIsVisible)(U);
  a.useEffect(() => {
    (0, I.getEmbedApplication)(g)
  }, [g]), a.useEffect(() => {
    P && v === p.FetchState.FETCHED && T.default.track(S.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
      application_id: g,
      device_platform: l.isMobile ? "mobile_web" : "desktop_web",
      sender_user_id: M.author.id,
      guild_id: x,
      channel_id: M.channel_id
    })
  }, [P, g, null == D ? void 0 : D.id, M.channel_id, x, M.author.id, v]), a.useEffect(() => {
    P && O && T.default.track(S.AnalyticEvents.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
      device_platform: l.isMobile ? "mobile_web" : "desktop_web",
      sender_user_id: M.author.id,
      guild_id: x,
      channel_id: M.channel_id
    })
  }, [P, x, O, M.author.id, M.channel_id]);
  let j = e => {
    T.default.track(S.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
      application_id: g,
      device_platform: l.isMobile ? "mobile_web" : "desktop_web",
      clicked_section: e,
      guild_id: x,
      channel_id: M.channel_id
    }), (0, N.goToAppDirectory)({
      view: h.ApplicationDirectoryViews.APPLICATION,
      guildId: x,
      applicationId: g,
      entrypoint: {
        name: h.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED
      }
    })
  };
  if (O) return (0, s.jsxs)(E.default, {
    containerRef: b,
    children: [(0, s.jsx)(E.default.Header, {
      text: C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_HEADER
    }), (0, s.jsx)(E.default.Body, {
      children: (0, s.jsxs)("div", {
        className: A.invalidBody,
        children: [(0, s.jsx)(E.default.Icon, {
          expired: !0
        }), (0, s.jsx)(E.default.Info, {
          expired: !0,
          title: C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_TITLE,
          children: C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_BODY
        })]
      })
    })]
  });
  if (null == R || v === p.FetchState.FETCHING) return (0, s.jsxs)(E.default, {
    containerRef: b,
    children: [(0, s.jsx)(E.default.Header, {
      text: C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_RESOLVING_HEADER
    }), (0, s.jsx)(E.default.Body, {
      resolving: !0
    })]
  });
  let G = new Intl.NumberFormat(L, {
    notation: "compact",
    compactDisplay: "short"
  }).format(null !== (n = null === (t = R.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0);
  return (0, s.jsxs)(E.default, {
    containerRef: b,
    children: [(0, s.jsx)(E.default.Header, {
      text: C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_HEADER
    }), (0, s.jsxs)(E.default.Body, {
      children: [(0, s.jsxs)("div", {
        className: A.applicationInfoContainer,
        children: [(0, s.jsx)(E.default.Icon, {
          application: d.default.createFromServer(R),
          className: A.applicationIcon,
          onClick: () => j("application_icon")
        }), (0, s.jsx)(E.default.Info, {
          title: (0, s.jsx)(r.Clickable, {
            onClick: () => j("application_name"),
            children: R.name
          }),
          children: (0, s.jsxs)(r.Clickable, {
            className: A.guildCountContainer,
            onClick: () => j("application_guild_count"),
            children: [(0, s.jsx)(_.default, {
              width: 16,
              height: 16,
              className: A.guildCountIcon
            }), C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_GUILD_COUNT.format({
              guildCount: G
            })]
          })
        })]
      }), (0, s.jsx)(E.default.Button, {
        onClick: () => {
          null != R && (0, m.installApplication)({
            applicationId: g,
            customInstallUrl: R.custom_install_url,
            installParams: R.install_params,
            integrationTypesConfig: R.integration_types_config,
            guildId: x,
            source: "app_directory_profile_embed"
          })
        },
        color: E.default.Button.Colors.GREEN,
        children: C.default.Messages.APP_DIRECTORY_PROFILE_EMBED_BUTTON
      })]
    })]
  })
}