const React = require('react');
const ReactDOM = require('react-dom');
const e = React.createElement;

class JSLearnings extends React.Component {

    
    constructor(props){
        super(props);
    }

    render() {
        const iife_example = `
        (function (){
            statements
        })();
        `

        const iife = (function() {
            let fred = "fred";
            return {
                sayHello: function sayHello(){
                return "Hello " + fred;
            }
        }
        })();

        const iife_example_object = `
        const iife = (function() {
            let fred = "fred";
            return {
                sayHello: function sayHello(){
                return "Hello " + fred;
            }
        }
        })();
        `
        return (
            <div>
            <div>Javascript</div>
            <p><code>What's with this crazy syntax:
                {iife_example}
                </code>
            </p>
            <p>
                Immediately Invoked Function Expression
                anonymous function is enclosed in ()'s, the grouping operator
            </p>
            <p>
                It makes everything private, so easy enough. 
                the () at the end makes the js engine inoke everythign within
            </p>
            <p>
                you can also assign it to a variable, then that variable will contain 
                all the functions etc within the anonymous function
            </p>
            <p>
                The anonymous function can also take parameters 
                and you can return an object with {} that allows you to return callable functions etc
                {iife.sayHello()}
            </p>
            <p>
                eg:
                {iife_example_object}
            </p>
            </div>
        );
    }
}

exports.JSLearnings = JSLearnings;

