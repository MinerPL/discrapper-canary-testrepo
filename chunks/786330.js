var r;
(r = 0),
    (function (e) {
        e.defineLocale('ka', {
            months: {
                standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
                format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
            },
            monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
            weekdays: {
                standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
                format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
            weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
            longDateFormat: {
                LT: 'h:mm A',
                LTS: 'h:mm:ss A',
                L: 'DD/MM/YYYY',
                LL: 'D MMMM YYYY',
                LLL: 'D MMMM YYYY h:mm A',
                LLLL: 'dddd, D MMMM YYYY h:mm A'
            },
            calendar: {
                sameDay: '[დღეს] LT[-ზე]',
                nextDay: '[ხვალ] LT[-ზე]',
                lastDay: '[გუშინ] LT[-ზე]',
                nextWeek: '[შემდეგ] dddd LT[-ზე]',
                lastWeek: '[წინა] dddd LT-ზე',
                sameElse: 'L'
            },
            relativeTime: {
                future: function (e) {
                    return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, 'ში') : e + 'ში';
                },
                past: function (e) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, 'ის წინ') : /წელი/.test(e) ? e.replace(/წელი$/, 'წლის წინ') : void 0;
                },
                s: 'რამდენიმე წამი',
                ss: '%d წამი',
                m: 'წუთი',
                mm: '%d წუთი',
                h: 'საათი',
                hh: '%d საათი',
                d: 'დღე',
                dd: '%d დღე',
                M: 'თვე',
                MM: '%d თვე',
                y: 'წელი',
                yy: '%d წელი'
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function (e) {
                return 0 === e ? e : 1 === e ? e + '-ლი' : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0 ? 'მე-' + e : e + '-ე';
            },
            week: {
                dow: 1,
                doy: 7
            }
        });
    })(n(913527));
