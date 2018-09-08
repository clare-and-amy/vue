new Vue({
	el: "#vue-app", // el是约定好了的key，需要获得的根元素
	data: {
		name : 'test',
		job: '软件开发工程师',
		website: 'https://blog.pinghuwang.com',
		websiteTag: "<a href='https://blog.pinghuwang.com'>我的个人博客</a>",
		age: 30,
		num:1,
		x:0,
		y:0
	}, // data也是约定好的key
	methods:{
		greet: function (name) {
			return 'Hello,' + name + '; 职业'+ this.job + '!'; // this.job
		},
		add: function () {
			if (this.num < 5) {
				this.num +=1;
			}
		},
		subtract: function () {
			if (this.num > 0) {
				this.num--
			}
		},
		updateXY: function (event) {
			console.log(event);
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stopMove: function (event) {
			event.stopPropagation();
		},
		alert: function () {
			alert('test');
		}
	}
});

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// })