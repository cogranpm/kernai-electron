const React = require('react');
const ReactDOM = require('react-dom');
const {
    Collapse
} = require('antd');
const {Panel} = Collapse;
const e = React.createElement;



const conjoin = (flockX, flockY) => flockX + flockY;
const breed = (flockX, flockY) => flockX * flockY;
const flockA = 4;
const flockB = 2;

class Chapter1 extends React.Component {

    render() {
        return (
            <div></div>
        )
    }

}

class MostlyAdequate extends React.Component {

    
    constructor(props){
        super(props);
    }

    render() {
        
        return (
            <Collapse defaultActiveKey={['1']}>
                <Panel header="Chapter1" key="1">
                    <Chapter1/>
                </Panel>
            </Collapse>
        );
    }
}

exports.MostlyAdequate = MostlyAdequate;


