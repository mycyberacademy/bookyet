angular.module('templates-app', ['auth/auth.tpl.html', 'auth/login/login.tpl.html', 'auth/logout/logout.tpl.html', 'auth/register/register.tpl.html', 'book/book.tpl.html', 'book/directives/ad.directive.tpl.html', 'book/directives/book.directive.tpl.html', 'home/home.tpl.html', 'school/directives/school.directive.tpl.html', 'school/school.tpl.html', 'user/user.tpl.html']);

angular.module("auth/auth.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/auth.tpl.html",
    "<div class=\"ui padded grid\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"column\">\n" +
    "			\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"center aligned column\">\n" +
    "			<div class=\"ui vertical buttons\">\n" +
    "				<button class=\"ui fluid facebook button\" ng-click=\"auth.loginFb('facebook')\">\n" +
    "					<i class=\"facebook icon\"></i> Login with facebook\n" +
    "				</button> \n" +
    "	\n" +
    "				<button class=\"ui fluid google plus button\" ng-click=\"auth.loginGoogle('google')\">\n" +
    "					<i class=\"google icon\"></i> Login with google\n" +
    "				</button>\n" +
    "	\n" +
    "				<button class=\"ui fluid twitter button\" ng-click=\"auth.loginTwitter('twitter')\">\n" +
    "					<i class=\"twitter icon\"></i> Login with twitter\n" +
    "				</button>\n" +
    "	\n" +
    "				<button class=\"ui fluid orange button\" ng-click=\"auth.loginApp()\">\n" +
    "					<i class=\"book icon\"></i> iBuk Login\n" +
    "				</button>\n" +
    "	\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("auth/login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/login/login.tpl.html",
    "<h1 class=\"ui center aligned header\">\n" +
    "	Login with iBuk\n" +
    "</h1>\n" +
    "\n" +
    "<div class=\"ui segment\"><div class=\"ui stackable two column grid\">\n" +
    "	<div class=\"column\">\n" +
    "		<div class=\"ui error form\" ng-class=\"{loading: loading}\">\n" +
    "			<form name=\"loginForm\" ng-submit=\"authenticate(user)\">	\n" +
    "				\n" +
    "				<div class=\"ui error message\" ng-if=\"errors\">\n" +
    "					<li ng-repeat=\"error in errors\"> {{error.message}} </li>\n" +
    "				</div>		\n" +
    "\n" +
    "				<div class=\"field\">\n" +
    "					<label>Email</label>\n" +
    "					<input type=\"email\" ng-model=\"user.email\" required>\n" +
    "				</div>\n" +
    "				<div class=\"field\">\n" +
    "					<label>Password</label>\n" +
    "					<input type=\"password\" ng-model=\"user.password\" required>\n" +
    "				</div>\n" +
    "\n" +
    "				<button class=\"ui basic blue button\" type=\"submit\" ng-disabled=\"loginForm.$invalid || isDisabled\">\n" +
    "					<i class=\"key icon\"></i> Login\n" +
    "				</button>\n" +
    "\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"ui vertical divider\"> or </div>\n" +
    "\n" +
    "	<div class=\"center aligned column\">\n" +
    "		<a ui-sref=\"register\" class=\"ui massive green button\">\n" +
    "			SignUp\n" +
    "		</a>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("auth/logout/logout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/logout/logout.tpl.html",
    "<div class=\"ui segment form\">\n" +
    "	<form name=\"loginForm\" ng-submit=\"authenticate(user)\">	\n" +
    "		<div class=\"error field\">\n" +
    "			<li ng-repeat=\"error in errors\"> {{error.message}} </li>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"field\">\n" +
    "			<label>Email</label>\n" +
    "			<input type=\"email\" ng-model=\"user.email\" required>\n" +
    "		</div>\n" +
    "		<div class=\"field\">\n" +
    "			<label>Password</label>\n" +
    "			<input type=\"password\" ng-model=\"user.password\" required>\n" +
    "		</div>\n" +
    "\n" +
    "		<button class=\"ui basic button\" type=\"submit\" ng-disabled=\"loginForm.$invalid || isDisabled\">\n" +
    "			<i class=\"key icon\"></i> Login\n" +
    "		</button>\n" +
    "\n" +
    "	</form>\n" +
    "</div>");
}]);

angular.module("auth/register/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/register/register.tpl.html",
    "<h1 class=\"ui center aligned secondary header\">\n" +
    "	Register on iBuk\n" +
    "</h1>\n" +
    "\n" +
    "\n" +
    "<div class=\"ui error segment form\" ng-class=\"{loading: loading}\">\n" +
    "	<form name=\"loginForm\" ng-submit=\"registerUser(new_user)\">	\n" +
    "		\n" +
    "		<div class=\"ui error message\" ng-if=\"errors\">\n" +
    "			<li ng-repeat=\"error in errors\"> {{error.message}} </li>\n" +
    "		</div>	\n" +
    "\n" +
    "		<div class=\"field\">\n" +
    "			<label>Name</label>\n" +
    "			<input type=\"text\" ng-model=\"new_user.first_name\" required>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"field\">\n" +
    "			<label>Lastname</label>\n" +
    "			<input type=\"text\" ng-model=\"new_user.last_name\" required>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"field\">\n" +
    "			<label>Display Name</label>\n" +
    "			<input type=\"text\" ng-model=\"new_user.display_name\" required>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"field\">\n" +
    "			<label>Phone</label>\n" +
    "			<input type=\"tel\" ng-model=\"new_user.phone\" required>\n" +
    "		</div>	\n" +
    "\n" +
    "		<div class=\"field\">\n" +
    "			<label>Email</label>\n" +
    "			<input type=\"email\" ng-model=\"new_user.email\" required>\n" +
    "		</div>\n" +
    "		<div class=\"field\">\n" +
    "			<label>Password</label>\n" +
    "			<input type=\"password\" ng-model=\"new_user.new_password\" required>\n" +
    "		</div>\n" +
    "\n" +
    "		<button class=\"ui basic green button\" type=\"submit\" ng-disabled=\"loginForm.$invalid || isDisabled\">\n" +
    "			<i class=\"user icon\"></i> Register\n" +
    "		</button>\n" +
    "\n" +
    "	</form>\n" +
    "</div>");
}]);

angular.module("book/book.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("book/book.tpl.html",
    "<!-- need school -->\n" +
    "\n" +
    "<div class=\"ui stackable padded grid\">\n" +
    "\n" +
    "	<div class=\"sixteen wide column\">\n" +
    "		<div class=\"ui links items\">\n" +
    "			<book ng-show=\"selectedBook\"\n" +
    "				title=\"{{selectedBook.title}}\" \n" +
    "				image=\"{{selectedBook.image}}\" \n" +
    "				author=\"{{selectedBook.author}}\" \n" +
    "				isbn10=\"{{selectedBook.isbn10}}\" \n" +
    "				isbn13=\"{{selectedBook.isbn13}}\" \n" +
    "				desc=\"{{selectedBook.desc}}\">\n" +
    "			</book>	\n" +
    "		</div>			\n" +
    "	</div>\n" +
    "		\n" +
    "	<!-- SEARCH ITEM -->\n" +
    "	<div class=\"sixteen wide justified tablet computer only column\">\n" +
    "\n" +
    "		<div class=\"ui right labeled left icon fluid input {{app.loading}}\">\n" +
    "			<i class=\"{{search.icon}} icon\"></i>\n" +
    "			<input \n" +
    "			placeholder=\"{{search.placeholder}}\" \n" +
    "			ng-model=\"search.book\"\n" +
    "			ng-disabled=\"!books && !ads\"\n" +
    "			>\n" +
    "			<div class=\"ui purple tag label\">\n" +
    "				{{app.selectedSchool.name}}\n" +
    "			</div>\n" +
    "		</div>	\n" +
    "\n" +
    "		\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"sixteen wide justified mobile only column\">\n" +
    "\n" +
    "		<div class=\"ui left corner labeled icon fluid input {{app.loading}}\">\n" +
    "			<i class=\"{{search.icon}} icon\"></i>\n" +
    "			<input \n" +
    "			placeholder=\"{{search.placeholder}}\"\n" +
    "			ng-model=\"search.book\"\n" +
    "			ng-disabled=\"!books && !ads\">\n" +
    "		</div>		\n" +
    "	</div>\n" +
    "	<!-- END SEARCH ITEM -->\n" +
    "\n" +
    "	\n" +
    "\n" +
    "	<div class=\"sixteen wide column\">\n" +
    "		<div class=\"ui top attached label\" ng-show=\"!app.selling\">\n" +
    "			Search results for {{selectedBook ? 'Ads related to \"' + selectedBook.title + '\"' : 'Books'}} at \"{{app.selectedSchool.name}}\"\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"sixteen wide column\">\n" +
    "		<div class=\"ui link divided items\" ng-show=\"!selectedBook\">\n" +
    "			<book 				\n" +
    "				ng-click=\"switchBook(book)\" \n" +
    "				ng-repeat=\"book in books | filter : {'title' : search.book} | limitTo: 10\"\n" +
    "\n" +
    "				title=\"{{book.title}}\" \n" +
    "				image=\"{{book.image}}\" \n" +
    "				author=\"{{book.author}}\" \n" +
    "				isbn10=\"{{book.isbn10}}\" \n" +
    "				isbn13=\"{{book.isbn13}}\" \n" +
    "				desc=\"{{book.desc}}\" \n" +
    "				class=\"image\">\n" +
    "			</book>						\n" +
    "		</div>		\n" +
    "\n" +
    "		<div class=\"ui form\" ng-hide=\"(selectedBook && !app.selling) || (app.selling && !selectedBook) || (!app.selling && !selectedBook)\">\n" +
    "			<div class=\"ui orange segment\">\n" +
    "				<form ng-submit=\"createAd()\" name=\"adcreate\">\n" +
    "					<div class=\"ui dividing header\">Personal Information</div>\n" +
    "					<div class=\"two fields\">\n" +
    "						<div class=\"field\">\n" +
    "							<label for=\"name\">Your name</label>\n" +
    "							<input type=\"text\" required id=\"name\" ng-model=\"ad.seller\">\n" +
    "						</div>\n" +
    "						<div class=\"field\">\n" +
    "							<label for=\"lastname\">Last name</label>\n" +
    "							<input type=\"text\" id=\"lastname\" ng-model=\"ad.lastname\" required>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"two fields\">\n" +
    "						<div class=\"field\">\n" +
    "							<label for=\"phone\">Phone</label>\n" +
    "							<input type=\"tel\" id=\"phone\" ng-model=\"ad.phone\" required>\n" +
    "						</div>\n" +
    "						<div class=\"field\">\n" +
    "							<label for=\"email\">Email</label>\n" +
    "							<input type=\"email\" id=\"email\" ng-model=\"ad.email\" required placeholder=\"username@domain.com\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				\n" +
    "					<div class=\"ui dividing header\">Ad information</div>\n" +
    "				\n" +
    "					<div class=\"two fields\">\n" +
    "						<div class=\"field\">\n" +
    "							<label for=\"price\">Price</label>\n" +
    "							<input type=\"number\" id=\"price\" ng-model=\"ad.price\" required>\n" +
    "						</div>\n" +
    "						\n" +
    "						<book-status ng-model=\"ad.status\"></book-status>				\n" +
    "				\n" +
    "					</div>	\n" +
    "					<div class=\"field\">\n" +
    "						<label for=\"description\">Description</label>\n" +
    "						<textarea ng-model=\"ad.description\"\n" +
    "						name=\"description\" \n" +
    "						id=\"description\" cols=\"20\" rows=\"5\" \n" +
    "						placeholder=\"Want to say something?\"></textarea>\n" +
    "					</div>	\n" +
    "				\n" +
    "					<button type=\"submit\" class=\"ui orange submit button\" \n" +
    "							ng-disabled=\"adcreate.$invalid\"\n" +
    "							ng-class=\"{disabled: adcreate.$invalid}\">						\n" +
    "						<i class=\"shop icon\"></i> I'm done\n" +
    "					</button>	\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"ui horizontal divider\"><i class=\"book icon\"></i></div>\n" +
    "		\n" +
    "		<div class=\"ui four doubling stackable special cards\" ng-if=\"selectedBook && !app.selling\">\n" +
    "			<ad \n" +
    "				ng-repeat=\"ad in ads | filter : search.book | limitTo: 10\"\n" +
    "				image      = \"{{selectedBook.image}}\"\n" +
    "				seller     = \"{{ad.seller}}\"\n" +
    "				phone      = \"{{ad.phone}}\"\n" +
    "				email      = \"{{ad.email}}\"\n" +
    "				published  = \"{{ad.published}}\"\n" +
    "				description= \"{{ad.description}}\"\n" +
    "				price      = \"{{ad.price}}\"\n" +
    "				status     = \"{{ad.status}}\">\n" +
    "			</ad>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "	\n" +
    "	\n" +
    "\n" +
    "</div>");
}]);

angular.module("book/directives/ad.directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("book/directives/ad.directive.tpl.html",
    "<div class=\"ui card\" style=\"background: rgba(200,200,200,.1);\"> \n" +
    "\n" +
    "  <div class=\"content\">\n" +
    "    <a class=\"header\">By {{seller}} </a>\n" +
    "     <div class=\"meta\">\n" +
    "      <span class=\"date\">{{published | date:'EEEE, MMMM yyyy'}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"description\">\n" +
    "      {{description}}\n" +
    "      <div class=\"ui horizontal divider\"></div>\n" +
    "     \n" +
    "          <!-- <h2 class=\"ui ribbon label\">Contact information</h2> -->\n" +
    "      <div style=\"margin-left:-2px; width:106%\">\n" +
    "        <span class=\"ui large teal ribbon fluid label\">Phone: {{phone}} </span>   \n" +
    "        <div class=\"ui horizontal divider\"></div>\n" +
    "        <a class='ui large red ribbon fluid label' href=\"mailto:{{email}}\"> {{email}} </a>\n" +
    "      </div>\n" +
    "      \n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"extra content\">\n" +
    "    <a>\n" +
    "      <i class=\"dollar icon\"></i>\n" +
    "      {{price}}\n" +
    "    </a>\n" +
    "    <a class=\"right floated blue created\">\n" +
    "      <i class=\"case icon\"></i>\n" +
    "      {{status}}\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- <div class=\"dimmable tiny image\">\n" +
    "    <div class=\"ui dimmer\">\n" +
    "      <div class=\"content\">\n" +
    "        <div class=\"left\">\n" +
    "          <h2 class=\"ui inverted header\">Contact information</h2>\n" +
    "          <div class=\"ui horizontal divider\"></div>\n" +
    "          <span>Phone:</span> <span class='ui label'> {{phone}} </span>   \n" +
    "          <div class=\"ui horizontal divider\"></div>       \n" +
    "          <a class='ui label' href=\"mailto:{{email}}\"> {{email}} </a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <img ng-src=\"{{image}}\">\n" +
    "  </div> -->\n" +
    "</div>");
}]);

angular.module("book/directives/book.directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("book/directives/book.directive.tpl.html",
    "<div class=\"item\">\n" +
    "    <div class=\"ui tiny image\">\n" +
    "      <img ng-src=\"{{image}}\" alt=\"Book Thumbnail\">\n" +
    "    </div>\n" +
    "\n" +
    "     <div class=\"content\">\n" +
    "      <div class=\"header\">{{title}}</div>\n" +
    "      <div class=\"meta\">\n" +
    "        <span><strong>Author:</strong> {{author}}</span>\n" +
    "        <span><strong>ISBN10:</strong> {{isbn10}}</span>\n" +
    "        <span><strong>ISBN13:</strong> {{isbn13}}</span>\n" +
    "      </div>\n" +
    "      <div class=\"description\">\n" +
    "        <p>\n" +
    "          {{desc}}\n" +
    "        </p>\n" +
    "        <a>Total Offers: 226</a>\n" +
    "      </div>\n" +
    "     </div>             \n" +
    "  </div>\n" +
    "  ");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"ui stackable center aligned padded grid\">\n" +
    "\n" +
    "    <div class=\"sixteen wide justified column\">\n" +
    "        <h3 class=\"ui header\">\n" +
    "            Welcome to <strong>iBuk.io</strong>. \n" +
    "        </h3>\n" +
    "        <p>\n" +
    "            Are you looking for <strong>cheap text books</strong> for your upcomming classes? Or maybe you have some useless books that other people may need?\n" +
    "            Any way, you are in the right place to get a <strong>great deal</strong> so, what's your choice?\n" +
    "        </p> \n" +
    "        \n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"middle aligned two column row\">\n" +
    "        <a ui-sref=\"school\" ng-click=\"sellingMode(true)\" class=\"teal squared column\">\n" +
    "            <span class=\"options\">Sell</span>\n" +
    "        </a>\n" +
    "\n" +
    "        <div class=\"ui vertical divider\">OR</div>\n" +
    "                \n" +
    "        <a  ui-sref=\"school\" ng-click=\"sellingMode(false)\" class=\"red squared column\">\n" +
    "            <span class=\"options\">Buy</span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    \n" +
    "</div>\n" +
    "");
}]);

angular.module("school/directives/school.directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("school/directives/school.directive.tpl.html",
    "<div class=\"item\">\n" +
    "    <div class=\"ui small image\">\n" +
    "      <img ng-src=\"{{image}}\" alt=\"Thumbnail\">\n" +
    "    </div>\n" +
    "\n" +
    "     <div class=\"content\">\n" +
    "      <div class=\"header\">{{name}}</div>\n" +
    "      <div class=\"description\">\n" +
    "        <p>\n" +
    "          {{desc}}\n" +
    "        </p>\n" +
    "        <a>Total Offers: 226</a>\n" +
    "      </div>\n" +
    "     </div>             \n" +
    "  </div>\n" +
    "  ");
}]);

angular.module("school/school.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("school/school.tpl.html",
    "<div class=\"ui stackable padded grid\">\n" +
    "		\n" +
    "		<!-- SEARCH ITEM -->\n" +
    "		<div class=\"sixteen wide justified tablet computer only column\">\n" +
    "\n" +
    "			<div class=\"ui right labeled left icon fluid input {{app.loading}}\">\n" +
    "				<i class=\"university icon\"></i>\n" +
    "				<input \n" +
    "				placeholder=\"Search College by Name\" \n" +
    "				ng-model=\"searchSchool\"\n" +
    "				ng-disabled=\"!schools || selectedSchool\"\n" +
    "				>\n" +
    "				<div class=\"ui red tag label\">\n" +
    "					USA & Canada\n" +
    "				</div>\n" +
    "			</div>	\n" +
    "\n" +
    "			\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"sixteen wide justified mobile only column\">\n" +
    "\n" +
    "			<div class=\"ui left corner labeled icon fluid input {{app.loading}}\">\n" +
    "				<i class=\"university icon\"></i>\n" +
    "				<input \n" +
    "				placeholder=\"Search College by Name\" \n" +
    "				ng-model=\"searchSchool\"\n" +
    "				ng-disabled=\"!schools || selectedSchool\">				\n" +
    "			</div>	\n" +
    "\n" +
    "			\n" +
    "		</div>\n" +
    "		<!-- END SEARCH ITEM -->\n" +
    "\n" +
    "		<div class=\"sixteen wide column\">\n" +
    "			\n" +
    "			<div class=\"ui items\">\n" +
    "				<school ng-show=\"selectedSchool\"\n" +
    "					name=\"{{selectedSchool.name}}\" \n" +
    "					image=\"{{selectedSchool.image}}\" \n" +
    "					desc=\"{{selectedSchool.desc}}\" \n" +
    "					class=\"image\">\n" +
    "				</school>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"sixteen wide column\">\n" +
    "\n" +
    "		<div class=\"ui link items\">\n" +
    "\n" +
    "			<school \n" +
    "				ng-hide=\"selectedSchool\"\n" +
    "				ng-click=\"switchSchool(school)\" \n" +
    "				ng-repeat=\"school in schools | filter : {'name' : searchSchool} | limitTo: 3\"\n" +
    "				name=\"{{school.name}}\" \n" +
    "				image=\"{{school.image}}\" \n" +
    "				desc=\"{{school.desc}}\" \n" +
    "				class=\"image\">\n" +
    "			</school>			\n" +
    "			\n" +
    "		</div>\n" +
    "		\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("user/user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("user/user.tpl.html",
    "<h1 class=\"ui header\">{{user.display_name}}</h1>\n" +
    "<ul>\n" +
    "	<li> {{user}} </li>\n" +
    "</ul>\n" +
    "");
}]);
