t(47120);
var n = t(470079),
    a = t(399606),
    i = t(230711),
    r = t(663389),
    o = t(981631),
    l = t(526761);
let c = new Set(Object.values(l.NB)),
    d = (e) => null != e && c.has(e);
s.Z = () => {
    let e = (0, a.e7)([r.Z], () => {
            let e = r.Z.getSubsection();
            return d(e) ? e : l.NB.USER_PROFILE;
        }),
        s = n.useCallback(
            (s) => {
                if (e !== s) i.Z.setSection(o.oAB.PROFILE_CUSTOMIZATION, s);
            },
            [e]
        );
    return {
        subsection: e,
        setSubsection: s
    };
};
