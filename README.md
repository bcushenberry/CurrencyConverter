# Overview

This project was meant to be a practice in Javascript. Originally, I'd wanted to use Node.js and React, but taking on two completely new libraries/frameworks while also trying to brush up my Javascript proved to be a larger undertaking than the scope of this project would permit, so instead, I decided to use only a limited amount of HTML, and instead manipulate the DOM with both CSS and JS. While working on the project, I also decided to practice using JS libraries, as it's not something I had really done before.

The project in question is a relatively simple one: use an API to create a currency converter. The reason I chose this is that I occasionally need to use currency converters both for my job and for when I travel.

Below is a video showcase of the app in action and a walkthrough of the code.

[Currency Converter App Showcase](https://youtu.be/gE2a-_9zy90)

# Development Environment

This project was developed using Visual Studio Code. It was written in HTML, CSS, and Javascript. As mentioned above, I used as little HTML as possible, and instead decided to manipulate the DOM using JS and CSS.

As also mentioned above, I used a couple different libraries, which I had not really done previously. The first library I used is Jquery, although I don't use the library directly myself; it's more of a pre-requisite for using the other library, money.js.

The money.js library is great for converting currency. It employs numerous functions depending on your needs, such as fx.convert, fx.from, fx.to, etc. There's good documentation for it as well, and it connects directly to a currency conversion API. By default, they recommend the Open Exchange Rates API (money.js appears to have been developed by Open Exchange Rates), but any currency exchange API can be used, and the documentation shows you how.

# Useful Websites

Unlike my last couple projects, for this one there wasn't a single website that really stood out as "the site" that helped the most. That being said, MDN dev docs are always good for reference, and the movie.js site did help me to implement the library. Lastly, I'm including a link to a Youtube channel that I found to be helpful, although the videos I watched were about React, which I didn't end up using.

- [Movie.js Documentation](https://openexchangerates.github.io/money.js/#documentation)
- [Javascript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web Dev Simplified (Youtube)](https://www.youtube.com/@WebDevSimplified)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}

- Support for switching the "base" and "target" currency fields - right now the target currency input field can be edited, but it doesn't do anything. It'd be good to either implement the ability to flip/switch the base and targets, or to automatically update the base currency based on what the user enters in the target currency. In that case, I would probably rename base/target, since either one could be edited to change the other.
- More appealing CSS / design - right now it's really simple
- It could be interesting to allow for multiple currencies, so that a user could display say four or five different currencies at once, e.g. if you modify the base currency field, it updates multiple currencies simultaneously.
