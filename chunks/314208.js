t.d(n, {
    Z: function () {
        return S;
    }
});
var a = t(735250),
    s = t(470079),
    l = t(442837),
    r = t(481060),
    i = t(99690),
    o = t(58540),
    c = t(471445),
    d = t(905405),
    u = t(937889),
    h = t(739566),
    m = t(267128),
    g = t(271383),
    E = t(306680),
    f = t(699516),
    Z = t(594174),
    x = t(709054),
    T = t(51144),
    v = t(144140),
    _ = t(91159),
    R = t(217702),
    j = t(689938),
    N = t(280301);
function S(e) {
    return e.isActiveThread() ? (0, a.jsx)(A, { channel: e }) : (0, a.jsx)(M, { channel: e });
}
function A(e) {
    let { channel: n } = e,
        t = (0, l.e7)([v.Z], () => v.Z.getMostRecentMessage(n.id));
    return null == t
        ? (0, a.jsx)(C, { channel: n })
        : (0, a.jsx)(I, {
              channel: n,
              message: t
          });
}
function C(e) {
    let { channel: n } = e,
        t = (0, _.Ok)(n);
    return (0, a.jsxs)(r.Text, {
        className: N.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: [j.Z.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, '\xA0 \u2022 \xA0', (0, _.Ye)(t)]
    });
}
function I(e) {
    let { channel: n, message: t } = e;
    (0, o.$)({ [n.guild_id]: [t.author.id] });
    let c = (0, l.e7)([Z.default], () => {
            var e;
            return null !== (e = Z.default.getUser(t.author.id)) && void 0 !== e ? e : t.author;
        }),
        { nick: g, colorString: E } = (0, h.ZP)(t),
        T = (0, l.e7)([f.Z], () => f.Z.isBlockedForMessage(t)),
        v = (0, d.p)(),
        j = s.useMemo(() => {
            let e =
                    null != t.content && '' !== t.content
                        ? (0, u.ZP)(t, {
                              formatInline: !0,
                              shouldFilterKeywords: v
                          }).content
                        : null,
                {
                    contentPlaceholder: n,
                    renderedContent: s,
                    trailingIcon: l,
                    leadingIcon: r
                } = (0, m.f)(t, e, T, N.messageContent, {
                    trailingIconClass: N.messageContentTrailingIcon,
                    leadingIconClass: N.messageContentLeadingIcon,
                    iconSize: R.WW
                });
            return (0, a.jsxs)(a.Fragment, {
                children: [r, null != s ? s : (0, a.jsx)('span', { children: n }), l]
            });
        }, [t, T, v]);
    return (0, a.jsxs)(r.Text, {
        className: N.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: [
            (0, a.jsx)(i.Z, {
                className: N.avatar,
                user: c,
                size: r.AvatarSizes.SIZE_16
            }),
            (0, a.jsx)(r.NameWithRole, {
                name: g,
                color: E,
                className: N.authorName
            }),
            ':\xA0',
            j,
            '\xA0 \u2022 \xA0',
            (0, _.Ye)(x.default.extractTimestamp(t.id))
        ]
    });
}
function M(e) {
    var n, t, s;
    let { channel: d } = e,
        u = (0, l.e7)([E.ZP], () => E.ZP.lastMessageId(d.id)),
        h = null == u ? new Date(null !== (t = null === (n = d.threadMetadata) || void 0 === n ? void 0 : n.archiveTimestamp) && void 0 !== t ? t : Date.now()).getTime() : x.default.extractTimestamp(u);
    (0, o.$)({ [d.guild_id]: [d.ownerId] });
    let m = (0, l.e7)([Z.default], () => Z.default.getUser(d.ownerId)),
        f = (0, l.e7)([g.ZP], () => g.ZP.getMember(d.guild_id, d.ownerId)),
        v = null !== (s = (0, c.KS)(d)) && void 0 !== s ? s : r.ThreadIcon;
    return (0, a.jsx)(r.Text, {
        className: N.subtext,
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children:
            null == m
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)('div', {
                              className: N.noAvatarIcon,
                              children: (0, a.jsx)(v, {
                                  width: 10,
                                  height: 10,
                                  size: 'custom',
                                  color: 'currentColor'
                              })
                          }),
                          j.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({ time: (0, _.Ye)(h) })
                      ]
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(i.Z, {
                              className: N.avatar,
                              user: m,
                              size: r.AvatarSizes.SIZE_16
                          }),
                          j.Z.Messages.THREAD_BROWSER_STARTED_BY.format({
                              authorHook(e, n) {
                                  var t, s;
                                  return (0, a.jsx)(
                                      r.NameWithRole,
                                      {
                                          className: N.startedByName,
                                          color: null !== (t = null == f ? void 0 : f.colorString) && void 0 !== t ? t : void 0,
                                          name: null !== (s = null == f ? void 0 : f.nick) && void 0 !== s ? s : T.ZP.getName(m)
                                      },
                                      n
                                  );
                              }
                          }),
                          (0, a.jsx)('span', {
                              className: N.bullet,
                              children: '\u2022'
                          }),
                          j.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({ time: (0, _.Ye)(h) })
                      ]
                  })
    });
}
