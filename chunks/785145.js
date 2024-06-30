s(47120);
var n = s(470079), a = s(399606), i = s(230711), r = s(663389), o = s(981631), l = s(526761);
let c = new Set(Object.values(l.NB)), d = e => null != e && c.has(e);
t.Z = () => {
    let e = (0, a.e7)([r.Z], () => {
            let e = r.Z.getSubsection();
            return d(e) ? e : l.NB.USER_PROFILE;
        }), t = n.useCallback(t => {
            if (e !== t)
                i.Z.setSection(o.oAB.PROFILE_CUSTOMIZATION, t);
        }, [e]);
    return {
        subsection: e,
        setSubsection: t
    };
};
