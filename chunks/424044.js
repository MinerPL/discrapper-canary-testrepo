n(47120);
var s = n(735250),
    r = n(470079),
    i = n(442837),
    a = n(481060),
    l = n(893776),
    o = n(232567),
    c = n(129293),
    u = n(388905),
    d = n(353926),
    _ = n(185625),
    h = n(551549),
    E = n(108427),
    g = n(314897),
    p = n(981631),
    I = n(689938),
    m = n(224499);
i.ZP.initialize();
t.Z = (e) => {
    let { location: t } = e,
        n = (0, i.e7)([g.default], () => g.default.isAuthenticated()),
        f = (0, i.e7)([d.Z], () => d.Z.hasLoadedExperiments),
        N = (0, h.oK)('RSL - Landing Page'),
        [T, x] = r.useState(!1),
        [A, C] = r.useState(I.Z.Messages.AUTHORIZING),
        [v, Z] = r.useState(!0),
        S = (e) => {
            switch (e) {
                case p.evJ.INVALID_FORM_BODY:
                case p.evJ.DSA_RSL_REPORT_NOT_FOUND:
                    C(I.Z.Messages.REPORT_SECOND_LOOK_NOT_FOUND_ERROR);
                    break;
                case p.evJ.DSA_RSL_ALREADY_REQUESTED:
                    C(I.Z.Messages.REPORT_SECOND_LOOK_ALREADY_REQUESTED_ERROR);
                    break;
                case p.evJ.DSA_RSL_LIMITED_TIME:
                    C(I.Z.Messages.REPORT_SECOND_LOOK_LIMITED_TIME_ERROR);
                    break;
                case p.evJ.DSA_RSL_REPORT_INELIGIBLE:
                    C(I.Z.Messages.REPORT_SECOND_LOOK_INELIGIBLE_ERROR);
                    break;
                default:
                    C(I.Z.Messages.REPORT_SECOND_LOOK_UNKNOWN_ERROR);
            }
        };
    return (
        r.useEffect(() => {
            n
                ? (Z(!0),
                  o
                      .k({ withAnalyticsToken: !0 })
                      .then(() => Z(!1))
                      .catch(() => Z(!1)))
                : Z(!1);
        }, [n]),
        r.useEffect(() => {
            !f && !N && l.Z.getExperiments();
        }, [f, N]),
        r.useEffect(() => {
            let e = async (e) => {
                var t, n;
                try {
                    let n = null != e ? await (0, _.hs)(e) : void 0;
                    null != n ? C(I.Z.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : S(null === (t = n.body) || void 0 === t ? void 0 : t.code);
                } catch (e) {
                    S(null === (n = e.body) || void 0 === n ? void 0 : n.code);
                } finally {
                    x(!1);
                }
            };
            x(!0), e((0, c.Z)(t)), (0, E.e)('report_second_look');
        }, [t]),
        N &&
            !v &&
            (0, s.jsxs)(u.ZP, {
                children: [
                    (0, s.jsx)(u.Dx, {
                        className: m.marginBottom8,
                        children: A
                    }),
                    T && (0, s.jsx)(a.Spinner, {})
                ]
            })
    );
};
