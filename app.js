angular.module('app', []).controller('ScheduleController', function () {
    var scope = this;
    scope.sched_list = [
	{
	    date: "11/21(土)",
	    time: "19:00-22:00",
	    name: "ダンモライブ",
	    desc: "Gt)須之内文典　Gt)桜井和樹　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "11/22(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "11/28(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "12/6(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)沢本明男　Ba)御園生弘",
	    charge: 1000
	},
	{
	    date: "12/13(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "12/20(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)安ヵ川真理　Ba)本間幸夫",
	    charge: 1300
	},
	{
	    date: "12/27(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "12/31(木)",
	    time: "19:00-",
	    name: "オールナイト セッション",
	    desc: "年越しはジャズセッション！",
	    charge: 3500
	}	
    ];
});
