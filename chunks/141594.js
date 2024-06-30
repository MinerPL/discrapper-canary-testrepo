n(47120);
var i = n(470079), s = n(442837), a = n(704215), r = n(243778), l = n(594174), o = n(51144), c = n(683167), d = n(302800), u = n(921944);
t.Z = () => {
    let e = (0, s.e7)([l.default], () => l.default.getCurrentUser()), t = (0, c.I)('useCollectiblesShopTabNewBadge'), n = i.useMemo(() => {
            if ((0, o.Fc)(e)) {
                if (t === d.LM.TIDE)
                    return [a.z.COLLECTIBLES_SHOP_TIDE_COACHTIP];
                if (t === d.LM.ARCADE)
                    return [a.z.COLLECTIBLES_SHOP_ARCADE_COACHTIP];
                else if (t === d.LM.RETRO_AND_PIRATES)
                    return [a.z.COLLECTIBLES_SHOP_RETRO_AND_PIRATES_COACHTIP];
                else if (t === d.LM.GALAXY)
                    return [a.z.COLLECTIBLES_SHOP_GALAXY_COACHTIP];
            }
            return [];
        }, [
            e,
            t
        ]), [_, E] = (0, r.U)(n, void 0, !0), h = null != _ ? d.QQ[_] : null;
    return {
        collectiblesShopTabNewBadgeDisplayOptions: h,
        dismissCollectiblesShopTabNewBadge: () => {
            null != h && E(u.L.AUTO);
        }
    };
};
