Vue.component('article-list', {
	template: `
		<nav class="panel">
		  <p class="panel-heading">
		    Articles
		  </p>
		  <div class="panel-block">
		    <p class="control has-icon">
		      <input class="input is-small" type="text" placeholder="Search" v-model="search">
		      <span class="icon is-small">
		        <i class="fa fa-search"></i>
		      </span>
		    </p>
		  </div>
		  <a class="panel-block" v-for="article in filteredarticles">
		    <span class="panel-icon">
		      <i class="fa fa-book"></i>
		    </span>
		    {{ article.title }}
		  </a>
		</nav>
	`,
	props: ['articles', 'searchstring'],
	data () {
		return {
			search : ''
		}
	},
	computed: {
		filteredarticles: function() {
			var articles_array = this.articles,
				searchString = this.search;

				if(!searchString){
					return articles_array;
				}

				searchString = searchString.trim().toLowerCase();

				articles_array = articles_array.filter(function(item){
					if(item.title.toLowerCase().indexOf(searchString) !== -1){
						return item;
					}
				})

				// Return an array with the filtered data.
				return articles_array;;
				}
	},
	mounted() {
		this.searchstring = this.search;
	}
})

new Vue({
	el:'#root',
	data: {
		searchstring: '',
		articles: [
		   {
			   "title": "What You Need To Know About CSS Variables",
			   "url": "http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
			   "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/03/css-variables-100x100.jpg"
		   },
		   {
			   "title": "Freebie: 4 Great Looking Pricing Tables",
			   "url": "http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
			   "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/great-looking-pricing-tables-100x100.jpg"
		   },
		   {
			   "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
			   "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
			   "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/interesting-resources-february-100x100.jpg"
		   },
		   {
			   "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
			   "url": "http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
			   "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/02/quick-tip-responsive-headers-100x100.png"
		   },
		   {
			   "title": "Learn SQL In 20 Minutes",
			   "url": "http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
			   "image": "http://cdn.tutorialzine.com/wp-content/uploads/2016/01/learn-sql-20-minutes-100x100.png"
		   },
		   {
			   "title": "Creating Your First Desktop App With HTML, JS and Electron",
			   "url": "http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
			   "image": "http://cdn.tutorialzine.com/wp-content/uploads/2015/12/creating-your-first-desktop-app-with-electron-100x100.png"
		   }
	   ]
   }
})



// THIS IS THE EXAMPLE FROM vegibit.com
// var viewmodel = new Vue({
//     el: '#myvueinstance',
//
//     data: {
//     	filterkey: '',
//         frameworks: [
//             {id: '001', framework: 'angular'},
//             {id: '002', framework: 'd3'},
//             {id: '003', framework: 'node'},
//             {id: '004', framework: 'jquery'},
//             {id: '005', framework: 'reveal.js'},
//             {id: '006', framework: 'impress.js'},
//             {id: '007', framework: 'backbone.js'},
//             {id: '008', framework: 'meteor.js'},
//             {id: '009', framework: 'express'},
//             {id: '010', framework: 'moment'},
//             {id: '011', framework: 'underscore'},
//             {id: '012', framework: 'gulp'},
//             {id: '013', framework: 'react'},
//             {id: '014', framework: 'ghost'},
//             {id: '015', framework: 'sweetalert'},
//             {id: '016', framework: 'select2'},
//         ]
//     },
//     computed: {
//         filteredFramework: function () {
// 			var self = this
// 				return this.frameworks.filter(function(framework) {
// 				return framework.indexOf(self.filter) > -1
// 			})
//         }
//     }
// });
