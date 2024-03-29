const React = require('react');
const ReactDOM = require('react-dom');
const {
    Collapse
} = require('antd');
const {Panel} = Collapse;
const e = React.createElement;

class Functions extends React.Component{

    render() {

        const basic_function = `
            function square(x){
                return x * x;
            }
        `

        const function_expression = `
            const square = function(x) { return x * x };
            var x = square(4);
            // can give a name to function expression
            const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1)}
            console.log(factorial(3))
        `

        const function_object_examples = `
            var x = 10;


            function createFunction1(){
                var x = 20;
                return new Function('return x');
                // the returned function has NO access to closed over vars when called
            }
        
            function createFunction2(){
                var x = 20;
                function f(){
                    return x;
                }
                return f; //inner func CAN access closed over variables
            }
        
            var f1 = createFunction1();
            console.log(f1());
            var f2 = createFunction2();
            console.log(f2());
        `

        return (
            <div>
                <h2>Functions</h2>
                <p>primitives passed by value</p>
                <p>objects and arrays are passed by reference</p>
                <p>{basic_function}</p>
                <h3>Function expressions</h3>
                <p>{function_expression}</p>
                <p>Did you know? Functions are hoisted, but not declarations</p>
                <p>functions are also objects and have methods and properties</p>
                <ul>
                    <li>constructor Function</li>
                    <li>arguments</li>
                    <li>caller</li>
                    <li>length</li>
                    <li>name</li>
                    <li>apply(thisArg, [args])</li>
                    <li>bind(thisArg, [args])</li>
                    <li>call(thisArg, [args])</li>
                    <li>toString()</li>
                </ul>
                <h3>Function Objects Examples</h3>
                <p>{function_object_examples}</p>
                <p>what's next</p>
            </div>
        );
    }
}


class Loops extends React.Component{

    render() {

        const for_loop = `
            for (let step = 0; step < 5; step++){

            }
        `

        return (
            <div>
                <h3>For Loop</h3>
                <p>{for_loop}</p>
                <p>do .. while</p>
                <p>while</p>
                <p>break to a label</p>
                <p>continue</p>
                <p>continue to label</p>
                <p>for (let i in someObj)  NOT for arrays</p>
                <p>for(let i of someArray)</p>
            </div>
        )
    }
}

class ControlFlow extends React.Component {


    render() {

        const block_statement = `
            {
                statement1;
                statement2;
            }
        `

        const switch_statement = `
            switch (expression) {
                case a:
                    break;
                case b:
                    break;
                default:
                    break;
            }
        `

        const throw_generic = `
            try {
                throw new Error('Message');
            } catch(e){
                console.error(e.name + e.message);
            }

        `

        const handle_error_types = `
            try {
                foo.bar();
            } catch (e) {
                if (e instanceof EvalError){
                    console.error(e.message)
                } else if (e instanceof RangeError) {
                    console.error(e.message)
                }
            }

        `

        const user_exception = `
            function UserException(message){
                this.message = message;
                this.name = 'UserException';
            }

            //pretty string
            UserException.prototype.toString = function(){
                return this.name + this.message;
            }

            throw new UserException('value to high');
        `

        const try_catch_finally = `
            try {
                ...
            } catch (e) {
                log(e);
            } finally {
                ... 
            }
        `

        return (
            <div>
                <h3>Block Statement</h3>
                <p>{block_statement}</p>
                <p>common in control flow statements such as if etc</p>
                <h3>falsey values</h3>
                <ul>
                    <li>false</li>
                    <li>undefined</li>
                    <li>null</li>
                    <li>0</li>
                    <li>NaN</li>
                    <li>""</li>
                </ul>
                <h3>Switch</h3>
                <p>{switch_statement}</p>
                <h3>Exceptions</h3>
                <h4>Error objects</h4>
                <ul>
                    <li>EvalError</li>
                    <li>Internal Error</li>
                    <li>RangeError</li>
                    <li>ReferenceError</li>
                    <li>SyntaxError</li>
                    <li>TypeError</li>
                    <li>URIError</li>
                    <li>Error</li>
                </ul>
                <p>{throw_generic}</p>
                <p>{handle_error_types}</p>
                <p>throw expression;</p>
                <h4>User Defined Exception</h4>
                <p>{user_exception}</p>
                <p>{try_catch_finally}</p>
                <p>throw(new Error('my message guys'));</p>

            </div>
        )
    }
}

class Encapsulation extends React.Component {

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

        const function_returns_object = `
        function createCircle(radius){
            return {
                area: function() {
                    return radius * radius * Math.PI;
                }
            }
        };
        let circle = createCircle(3)
        circle.area();
        circle.radius;
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
            <p>
                The other variations are to create a function that returns an anonymous object:
                {function_returns_object}
            </p>
            </div>
        );
    }
}


class Grammar extends React.Component {

    render() {

        const object_init = `
        var obj = { prop1 : value1,
                    prop2 : value2
        }
        //may need to wrap in () if appears where statement is expected
    `;

    const constructor_function = `
        function Car(make, model, year){
            this.make = make;
            this.model = model;
            this.year = year
        }
        var myCar = new Car("Eagle", "Talon", 1993);
        //add a property on the fly
        myCar.color = "Black";
    `;

    const object_create = `
        var Animal = {
            type: 'Invertebrates',
            displayType: function(){
                console.log(this.type);
            }
        };

        //pass in the prototype of Animal
        var animal1 = Object.create(Animal);
        animal1.displayType();

        var fish = Object.create(Animal);
        fish.type = "Fishes";
        fish.displayType();
    `;

    const enhanced_oject_literal = `
    var someObj = {
        __proto__: theProtoObj,
        handler,
        toString(){
            return super.toString();
        },
        ['prop_' + (() => 42)() ]: 42
    };
`;

const template_string = 'you can embed javascript code inside a template string ${some_variable}';


        return (
            <div>
            <h3>hoisting</h3>
            <p>variables declared with var regardless of where declared are moved to top of function</p>
            <h3>data types</h3>
            <ol>
                <li>Boolean</li>
                <li>null</li>
                <li>undefined</li>
                <li>Number</li>
                <li>BigInt</li>
                <li>String</li>
                <li>Symbol</li>
                <li>Object</li>
            </ol>
            <h3>Literals</h3>
            <ul>
                <li><h4>Array:</h4>let coffees = ['French Roast', 'Colombian', 'Kona']</li>
                <li><h4>Object:</h4></li>
                <li><h4>Enhanced Object:</h4></li>
                <li><h4>Regex:</h4></li>
                <li><h4>String:</h4></li>
            </ul>
            <h3>Object Initializer</h3>
            <p>ya know, these are really dictionaries</p>
            <p>{object_init}</p>
            <h3>Constructor Functions</h3>
            <p>this is familiar from my osi days</p>
            <p>{constructor_function}</p>
            <h3>Object.create method</h3>
            <p>allows to pass a prototype variable
                which defines the built in stuff
            </p>
            <p>{object_create}</p>
            <h3>enhanced object literal</h3>
            <ul>
                <li>setting proto type</li>
                <li>skip property name</li>
                <li>methods</li>
                <li>computed property names</li> 
            </ul>
            <p>{enhanced_oject_literal}</p>
            <h3>RegExp</h3>
            <p>var re = /ab+c/;</p>
            <h3>Template Strings</h3>
            <p>use the backtick `</p>
            <p>{template_string}</p>
            <p>use the \ in multiline string to remove the newlines</p>
        </div>
        );
    }
}

class JSLearnings extends React.Component {

    
    constructor(props){
        super(props);
    }

    render() {
        
        return (
            <Collapse defaultActiveKey={['1']}>
                <Panel header="Introduction" key="1">
                    <p>from the MDN javascript guide</p>
                </Panel>
                <Panel header="Loops" key="2">
                    <Loops></Loops>
                </Panel>

                <Panel header="Control Flow" key="3">
                    <ControlFlow></ControlFlow>
                </Panel>

                <Panel header="Grammar and Types" key="4">
                    <Grammar/>
                </Panel>

                <Panel header="Encapsulation" key="5">
                    <Encapsulation></Encapsulation>
                </Panel>

                <Panel header="Functions" key="6">
                    <Functions></Functions>
                </Panel>
            </Collapse>
        );
    }
}

exports.JSLearnings = JSLearnings;

