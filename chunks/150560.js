let r = (0, n(652874).Z)((e) => ({
    utmSourceCurrent: void 0,
    utmMediumCurrent: void 0,
    utmCampaignCurrent: void 0,
    utmContentCurrent: void 0,
    setUtmCurrentContext: (t) => {
        let { utmSourceCurrent: n, utmMediumCurrent: r, utmCampaignCurrent: i, utmContentCurrent: a } = t;
        return e({
            utmSourceCurrent: n,
            utmMediumCurrent: r,
            utmCampaignCurrent: i,
            utmContentCurrent: a
        });
    },
    getUtmCurrentContext: () => r.getState()
}));
t.Z = r;
