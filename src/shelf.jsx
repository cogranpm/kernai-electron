const React = require('react');
const ReactDOM = require('react-dom');
const {
    Layout,
    Header,
    Sider,
    Content,
    Footer,
    Row,
    Col,
    Divider
} = require('antd');

const e = React.createElement;
class ShelfContainer extends React.Component {

    render() {
        return <Row>
                 <Col><button>shelf</button></Col>
                 <Col><button>subject</button></Col>
                 <Col><button>publications</button></Col>
               </Row>;
    }
}


const domContainer = document.querySelector('#main_container');
ReactDOM.render(e(ShelfContainer), domContainer);
