n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(653041);
var r = n(735250);
n(470079);
var i = n(243814),
    a = n(993365),
    s = n(481060),
    o = n(63063),
    l = n(981631),
    u = n(689938),
    c = n(155937);
function d(e) {
    let t,
        { accountScopes: n } = e,
        a = [];
    return (n.includes(i.x.SDK_SOCIAL_LAYER) &&
        ((t = u.Z.Messages.AUTHORIZE_EDUCATION_SOCIAL_LAYER_HEADING.format({ learnMoreURL: o.Z.getArticleURL('') })),
        a.push(
            {
                icon: s.FriendsIcon,
                text: u.Z.Messages.AUTHORIZE_EDUCATION_SOCIAL_LAYER_FRIENDS.format({ maxFriends: l.L4X })
            },
            {
                icon: s.ChatSmileIcon,
                text: u.Z.Messages.AUTHORIZE_EDUCATION_SOCIAL_LAYER_MESSAGING
            },
            {
                icon: s.RefreshIcon,
                text: u.Z.Messages.AUTHORIZE_EDUCATION_SOCIAL_LAYER_HISTORY
            },
            {
                icon: s.GameControllerIcon,
                text: u.Z.Messages.AUTHORIZE_EDUCATION_SOCIAL_LAYER_ACTIVITY
            }
        )),
    0 === a.length)
        ? null
        : (0, r.jsxs)('div', {
              className: c.applicationEducation,
              children: [
                  null != t && t.length > 0
                      ? (0, r.jsx)(s.Heading, {
                            variant: 'heading-sm/normal',
                            className: c.sectionLabel,
                            children: t
                        })
                      : null,
                  a.map((e, t) => {
                      let { icon: n, text: i } = e;
                      return (0, r.jsx)(
                          _,
                          {
                              icon: n,
                              text: i
                          },
                          t
                      );
                  })
              ]
          });
}
function _(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: c.entry,
        children: [
            (0, r.jsx)(t, {
                className: c.entryIcon,
                color: 'currentColor'
            }),
            (0, r.jsx)(a.x, {
                variant: 'text-md/normal',
                className: c.entryText,
                children: n
            })
        ]
    });
}
