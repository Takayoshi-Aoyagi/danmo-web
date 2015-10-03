angular.module('app', []).controller('ScheduleController', function() {
    var scope = this;
    scope.sched_list = [
	{
	    date: "9/27(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "10/4(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Ba)御園生弘　Pf)沢本明男",
	    charge: 1000
	},
	{
	    date: "10/11(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	},
	{
	    date: "10/18(日)",
	    time: "14:00-17:00",
	    name: "ジャムセッション",
	    desc: "Pf)安ヵ川真理　Ba)本間幸夫",
	    charge: 1300
	},
	{
	    date: "10/24(土)",
	    time: "19:00-22:00",
	    name: "ジャムセッション",
	    desc: "Pf)菊谷拓也　Ba)畑中利文",
	    charge: 1000
	},
	{
	    date: "10/25(日)",
	    time: "13:30-17:00",
	    name: "ライブ in ヘイワールド",
	    desc: "",
	    charge: 0
	}

    ];
});
