# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 3| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

This project is to showcase our current capabilities in creating a website for ourselves. This website will be showcasing some of the labs worked in the course so far. These labs will eventually be replaced with projects that will be conducted in the course at a later time and with some projects worked on the side.

## Wireframes


- [Mobile + Desktop](https://unsplash.com/photos/2tY5WEGL-Lw)


## Time/Priority Matrix 

[Link](https://unsplash.com/photos/fyd6rh5lAkY)

Estimated completion time: 10hr 15min

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

- HTML Skeleton
- Grid Layout (Hamburger)
- Animation Inclusion (jQuery)
- Creating Classes
- CSS page layout (styling)
- Fill in HTML skeleton
- Responsive

#### PostMVP 

- Cool jQuery animation layout (thinking a flowchart)
- Add Logos/images
- Cool navigation bar CSS styling

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| HTML Layout | H | 0.5 | 0.5hr |
| Grid Layout (Hamburger) | H | 0.5 | 1.5hr |
| Animation Inclusion | H | 2hr | 3hr |  
| Creating Classes | H | 1hr|  1.5hr | 
| CSS styling for page (basic) | H | 1.5hr | 2hr|
| Filling in HTML layout | H | .75hr |  1hr | 
| Responsive | H | 2hr | 4hr |
| Total | H | 8.25hrs| 13hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Cool jQuery Animated Layout | L | 2hr | -hr | hr |
| Added Logos & Images | L | 1hr | hr |
| Interactive Navigation Bar | M | 2hr | hr |
| Total | H | 5hrs| hrs |

## Additional Libraries
Instagram Logo

http://www.stickpng.com/img/icons-logos-emojis/tech-companies/instagram-logo

Linkedin Logo

https://www.freeiconspng.com/img/2026

Email Logo

https://www.freepnglogos.com/images/email-13728.html
Tamagotchi logo
https://www.bandai.com/brands/tamagotchi/

## Code Snippet
```
$.fn.bounce = function(options) {

    var settings = jQuery.fn.extend({
        speed: 10
    }, options);

    return $(this).each(function() {

        var $this = $(this),
            $parent = $this.parent(),
            height = $parent.height(),
            width = $parent.width(),
            top = Math.floor(Math.random() * (height / 2)) + height / 4,
            left = Math.floor(Math.random() * (width / 2)) + width / 4,
            vectorX = settings.speed * (Math.random() > 0.5 ? 1 : -1),
            vectorY = settings.speed * (Math.random() > 0.5 ? 1 : -1);

        // place initialy in a random location
        $this.css({
            'top': top,
            'left': left
        }).data('vector', {
            'x': vectorX,
            'y': vectorY
        });

        var move = function($e) {

            var offset = $e.offset(),
                width = $e.width(),
                height = $e.height(),
                vector = $e.data('vector'),
                $parent = $e.parent();

            if (offset.left <= 0 && vector.x < 0) {
                vector.x = -1 * vector.x;
            }
            if ((offset.left + width) >= $parent.width()) {
                vector.x = -1 * vector.x;
            }
            if (offset.top <= 0 && vector.y < 0) {
                vector.y = -1 * vector.y;
            }
            if ((offset.top + height) >= $parent.height()) {
                vector.y = -1 * vector.y;
            }

            $e.css({
                'top': offset.top + vector.y + 'px',
                'left': offset.left + vector.x + 'px'
            }).data('vector', {
                'x': vector.x,
                'y': vector.y
            });

            setTimeout(function() {
                move($e);
            }, 50);

        };

        move($this);
    });

};

$(function() {
    $('.text').bounce({
        'speed': 7
    });
});
```
This text was referenced on stackoverflow by polarblau
https://stackoverflow.com/questions/7873502/jquery-bounce-variation-bounce-around


## Issues and Resolutions

