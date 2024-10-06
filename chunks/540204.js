t.d(s, {
    Z: function () {
        return I;
    }
}),
    t(733860);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(565138),
    l = t(430824),
    c = t(771845),
    d = t(823379),
    _ = t(997950),
    u = t(816108),
    E = t(689938),
    T = t(48143);
let S = {
    label: () => E.Z.Messages.PRIVACY_AND_SAFETY_ALL_SERVERS_OPTION_TITLE,
    value: _.Th
};
function I() {
    let { selectedGuildId: e, setSelectedGuildId: s } = (0, _.xu)(),
        t = (0, i.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        E = (0, i.e7)([l.Z], () => l.Z.getGuilds()),
        { hideGuildOptions: I, hideGlobalOption: N } = (0, u.b)();
    a.useEffect(() => {
        e === _.Th && N && s(t[0]), e !== _.Th && I && s(_.Th);
    }, [e, s, N, I, t]);
    let A = a.useMemo(() => {
            let e = I
                ? []
                : t
                      .map((e) => {
                          let s = E[e];
                          return null == s
                              ? null
                              : {
                                    label: s.name,
                                    value: s.id
                                };
                      })
                      .filter(d.lm);
            return (
                !N &&
                    e.unshift({
                        ...S,
                        label: S.label()
                    }),
                e
            );
        }, [I, t, N, E]),
        C = a.useCallback(
            (e) => {
                let s = (null == e ? void 0 : e.label) === S.label() && (null == e ? void 0 : e.value) === S.value;
                return null == e || '' === e.value || s
                    ? (0, n.jsx)('div', {
                          className: T.clydeIconContainer,
                          children: (0, n.jsx)(r.ClydeIcon, {
                              size: 'sm',
                              color: 'white',
                              'aria-hidden': !0,
                              className: T.guildSelectOptionIcon
                          })
                      })
                    : (0, n.jsx)(o.Z, {
                          className: T.guildSelectOptionIcon,
                          guild: E[e.value],
                          size: o.Z.Sizes.SMALLER,
                          active: !0
                      });
            },
            [E]
        );
    return (0, n.jsx)(r.SearchableSelect, {
        wrapperClassName: T.searchableSelect,
        onChange: (e) => {
            s(e);
        },
        value: e,
        options: A,
        renderOptionPrefix: C
    });
}
