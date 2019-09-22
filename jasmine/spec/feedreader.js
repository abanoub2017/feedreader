/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */


    // This is the RSS Feeds suite that tests the feeds
    describe('RSS Feeds', function() {

        // Determines if allfeeds has been defined and that it is not empty
        it('feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


       // Determines if allFeeds have a url and that the url is not empty
        it('urls are defined' , function(){
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        // Determines if allFeeds have a name and that the name is not empty
        it('names are defined' , function(){
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


     // New test suite that will test the menu
     describe('the menu' , function(){

        // Searches for the class of 'menu-hidden' in the body tag. If true, 
        // then the menu is hidden 
          it('hidden by default', function(){
              let isHidden = document.body.classList.contains('menu-hidden');
              expect(isHidden).toBe(true);
          })
 

        // Toggles on click event if the menu appears or disappears
          it('toggles view when icon is clicked' , function(){
              let menuIcon = document.querySelector('a.menu-icon-link');
              menuIcon.click();
              expect(document.body.classList.contains('menu-hidden')).toBe(false);
              menuIcon.click();              
              expect(document.body.classList.contains('menu-hidden')).toBe(true);
            });
     });

   // New test suite that will test initial entries
    describe('Initial Entries', function(){
        
        // Calls a function to do an asynchronous request 
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });


        // Tests if the loadFeed function has at least a single '.entry' within
        // the '.feed' container
        it('define if feed has at least a single entry', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    })

   // New test suite that looks for new feed selections
    describe('New Feed Selection', function(){
     let firstFeed, secondFeed;

     // Ensures that the new feed is loaded via the loadFeed function
        beforeEach(function(done){
            loadFeed(3, function(){
                firstFeed = document.querySelector('div.feed').innerHTML;
                loadFeed(2, function(){
                    secondFeed = document.querySelector('div.feed').innerHTML;
                    done();
                });
            });
        });

        it('loads new feeds' , function(){
            expect(firstFeed).not.toBe(secondFeed);
        });
    });

}());



