# simplecounter

simplecounter, is a jQuery plugin which generates a simple countdown to a given date and/or time.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Please make sure you have an up to date copy of jQuery installed.

```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="crossorigin="anonymous"></script> 
```
The code above was grabbed from here [1]:https://code.jquery.com/

Note I have included the code with cross origin and integrity, this is always recomended for any external resource.

### Installing

To install and run download the dist/simplecount.js file and include this after you have included jQuery.

Say what the step will be

```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="crossorigin="anonymous"></script>
<script src="/local/path/to/simplecount.js"></script>
  
```

And then for the most basic setup load this html and this call this js

```
//index.html

<div id="countdown">
	<div id="years"></div>
	<div id="months"></div>
	<div id="weeks"></div>
	<div id="days"></div>
	<div id="hours"></div>
	<div id="minutes"></div>
	<div id="seconds"></div>
</div>


// js.js
$('#countdown').simplecounter();
```
See example here 
<iframe height='265' scrolling='no' title='Simple Counter Default Example' src='//codepen.io/tommyk/embed/JwYKJV/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/tommyk/pen/JwYKJV/'>Simple Counter Default Example</a> by Tom Kiernan (<a href='https://codepen.io/tommyk'>@tommyk</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Options 
You can also specify some options to simplecounter

```
var defaults = {
    year: $("#years"),
	month: $("#months"),
	weeks: $("#weeks"),
	days: $("#days"),
	hours: $("#hours"),
	minutes: $("#minutes"),
	seconds: $("#seconds"),
	eventYear: d.getFullYear() + 1,
	eventMonth: 6,
	eventDay: 23,
	eventHour: 0,
	eventMinute: 0,
	eventSecond: 0,
	complete: function() {}  
}

$('#countdown').simplecounter(defaults);
```

|Param        | Type           | Default  |Required  |
| ------------- |:-------------:| -----:|-------:|
| year     | jQuery Object | $("#years") | No|
| month      | jQuery Object      | $("#months") | No|
| weeks      | jQuery Object      | $("#weeks") | No|
| days      | jQuery Object      | $("#days") | No|
| hours      | jQuery Object      | $("#hours") | No|
| minutes      | jQuery Object      | $("#minutes") | No|
| seconds      | jQuery Object      | $("#seconds") | No|
| eventYear      | interger     | current year + 1 |Yes|
| eventMonth      | interger      | 6 |Yes|
| eventDay      | interger     | 23 |Yes|
| eventHour      | interger     | 0 |Yes|
| eventMinute      | interger      | 0 |Yes|
| eventSecond      | interger      | 0 |Yes|
| complete      | callback function      | empty |No |


#### Please not the plugin does not generate the HTML and so it is required you correctly markup some contaniers.
#### Also note by default this is set to the father of computing Alan Turings birthdate each year.

## Running the tests

#### Still to do! 
Will be instagating some jQuery style Qunit tests
[1]https://qunitjs.com/

## Built With

* [Boilerplate](https://github.com/jquery-boilerplate/jquery-patterns/blob/master/patterns/jquery.basic.plugin-boilerplate.js) - The intial template used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [GRUNT](https://gruntjs.com/) - Build tool

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
#### Still to instigate!
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Tom Kiernan** - *Initial work* - [Tom Kiernan](https://github.com/tomkiernan120)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
To Do
