# RUSU Developer Challenge

This is a repository created for the RUSU Developer Challenge, to create a page showcasing events at the Students' Union.

## Content

There is a simple header with the name of the organisation and a sample menu, incorporating three links. The header is positioned at the top of the page with a sticky effect.  This was chosen rather than a fixed position so as not to interfere with the image fader below. The heading of the page is made up using seven free stock images from Pexels, which are arranged to scroll from one to another using JavaScript. CSS is used to soften the transition between images.

The supplied images were used to set up five events on the page, which are presented using Bootstrap cards. These cards were created as if to be an introduction with a link taking the user to the full information on a separate page. Important details, such as date, time and venue are displayed prominently on each entry.  At the bottom of the page is a simple footer, styled to match the header. This includes social media icons and copyright information.

## Responsive Design

The page was created mobile first, and optimised for any device with a width of 320 pixels or greater. There is a breakpoint included at 600 pixels, above which the menu is visible on the screen at all times, and the full name of the organisation is also shown.

The heading images grow as the screen size gets wider, but are restricted to a maximum height of 400 pixels. The Bootstrap cards are placed in a container which uses flexbox to ensure that they are arranged attractively regardless of the user's screen width, while flexbox is also used for the positioning of the social media icons in the page footer, ensuring that they remain equally spaced regardless of screen size.

## Accessibility

Background and font colours are seleted to ensure significant contrast to aid visually impaired users. Font sizes are relative to aid resizing the page by users as required. All images have ALT attributes set for screen readers, while links on the page can all be navigated using the keyboard's TAB key.

## Languages

The page is written in HTML with links to Bootstrap CSS and also a custom stylesheet. A custom JavaScript file is also included which allows access to the function which toggles the menu on and off in the mobile view, as well as the code which runs the image fader effect on the page heading.

## Browser Compatibility

The page was built using Mozilla Firefox Developer Edition, and then tested in Google Chrome and Microsoft Edge.
