describe('Directive: sayHi', function() {

		var templateHtml;
		var element, scope;
		var testText = 'Sample Subreddit';

    beforeEach(module('app'));

		beforeEach(function() {
		  this.addMatchers({
  			toHaveClass: function(className) {
  			  return this.actual.hasClass(className);
  			}
		  });
		});

		beforeEach(inject(function($rootScope, $compile, $templateCache) {
			templateHtml = $templateCache.get('app/templates/cycleRelatedSubredditHeaderTmpl.html');
			if(!templateHtml) {
					templateHtml = $.ajax('base/app/templates/cycleRelatedSubredditHeaderTmpl.html', {async: false}).responseText;
					$templateCache.put('app/templates/cycleRelatedSubredditHeaderTmpl.html', templateHtml)
			}
			element = angular.element('<subreddit-header text="' + testText + '"></subreddit-header>');
			scope = $rootScope;
			$compile(element)(scope);
			scope.$digest();
		}));

		it("should contain a h1 tag", function() {
			expect(element.find('h1').length).toEqual(1);
		});

		it("should have an id of cycleRelatedSubredditHeader", function() {
			var sayHiH3Element = element.find('h1');
			expect(sayHiH3Element[0].id).toEqual('cycleRelatedSubredditHeader');
		});

		it("should have a css class of 'subredditHeader'", function() {
			var sayHiH3Element = element.find('h1');
			expect(sayHiH3Element.hasClass('subredditHeader')).toBe(true);
		});

		it("should have correct innerHTML", function() {
			var sayHiH3Element = element.find('h1');
			expect(sayHiH3Element[0].innerHTML).toEqual(testText);
		});

	});
