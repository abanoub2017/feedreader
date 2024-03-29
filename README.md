# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## How to start run the tests?
1. Download the [required project assets](https://github.com/abanoub2017/feedreader.git).
2. Review the functionality of the application within your browser.
3. Run all tests by [Jasmine](http://jasmine.github.io/) in the bottom of the page.

## The tests are checking for:
1. RSS Feeds
- are defined
- all feeds has a defined URL and it is not empty
- all feeds has a defined name and it is not empty
2. The menu
- the menu element is hidden by default
- the menu changes visibility when the menu icon is clicked
3. Initial Entries
- there is at least a single .entry element within the .feed container
4. New Feed Selection
- when a new feed is loaded, the content actually changes
