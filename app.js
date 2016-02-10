angular.module('app', []).controller('ScheduleController', function () {
    var scope = this;
    scope.sched_list_all = [
	{
	    date: "2016/2/7(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)沢本明男　Ba)御園生弘",
	    charge: 1000
	},
	{
	    date: "2016/2/14(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/2/21(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)本間幸夫",
	    charge: 1000
	},
	{
	    date: "2016/2/27(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "2016/2/28(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/3/6(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)沢本明男　Ba)御園生弘",
	    charge: 1000
	},
	{
	    date: "2016/3/13(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/3/20(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)本間幸夫",
	    charge: 1000
	},
	{
	    date: "2016/3/26(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "2016/3/27(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/4/3(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)沢本明男　Ba)御園生弘",
	    charge: 1000
	},
	{
	    date: "2016/4/10(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/4/17(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)本間幸夫",
	    charge: 1000
	},
	{
	    date: "2016/4/23(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "2016/4/24(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/5/1(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)沢本明男　Ba)御園生弘",
	    charge: 1000
	},
	{
	    date: "2016/5/8(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/5/15(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)本間幸夫",
	    charge: 1000
	},
	{
	    date: "2016/5/21(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "2016/5/22(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/6/5(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)沢本明男　Ba)御園生弘",
	    charge: 1000
	},
	{
	    date: "2016/6/12(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/6/19(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)本間幸夫",
	    charge: 1000
	},
	{
	    date: "2016/6/25(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "2016/6/26(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/7/3(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)沢本明男　Ba)御園生弘",
	    charge: 1000
	},
	{
	    date: "2016/7/10(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/7/17(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)本間幸夫",
	    charge: 1000
	},
	{
	    date: "2016/7/23(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "2016/7/24(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/8/7(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)沢本明男　Ba)御園生弘",
	    charge: 1000
	},
	{
	    date: "2016/8/14(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/8/21(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)本間幸夫",
	    charge: 1000
	},
	{
	    date: "2016/8/27(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "2016/8/28(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/9/4(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)沢本明男　Ba)御園生弘",
	    charge: 1000
	},
	{
	    date: "2016/9/11(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/9/18(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)本間幸夫",
	    charge: 1000
	},
	{
	    date: "2016/9/24(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "2016/9/25(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/10/2(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)沢本明男　Ba)御園生弘",
	    charge: 1000
	},
	{
	    date: "2016/10/9(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/10/16(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)本間幸夫",
	    charge: 1000
	},
	{
	    date: "2016/10/22(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "2016/10/23(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/11/6(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)沢本明男　Ba)御園生弘",
	    charge: 1000
	},
	{
	    date: "2016/11/13(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/11/20(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)本間幸夫",
	    charge: 1000
	},
	{
	    date: "2016/11/26(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "2016/11/27(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/12/4(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)沢本明男　Ba)御園生弘",
	    charge: 1000
	},
	{
	    date: "2016/12/11(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/12/18(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)本間幸夫",
	    charge: 1000
	},
	{
	    date: "2016/12/24(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "2016/12/25(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "2016/12/31(日)",
	    time: "20:00-",
	    name: "オールナイト・セッション",
	    desc: "",
	    charge: 3500
	}	
    ];

    var today = new Date();
    scope.sched_list = scope.sched_list_all.filter(function (s) {
	var dt = s.date,
	    m, year, month, day,
	    pos_diff = 30 * 86400 * 1000,
	    neg_diff = -10 * 86400 * 1000;
	m = dt.match(/(\d+)\/(\d+)\/(\d+)\(.+/);
	var date, diff;
	if (!m) {
	    return false;
	}
	year = m[1];
	month = m[2] - 1;
	day = m[3];
	date = new Date(year, month, day);
	diff = date.getTime() - today.getTime();
	return diff <= pos_diff && diff >= neg_diff;
    });
});
