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
    Divider,
    flex
} = require('antd');

const Split = require('react-split');


const e = React.createElement;


const splitPane = (
    <Split  sizes={[25, 75]}
            minSize={100}
            expandToMin={false}
            gutterSize={10}
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            direction="horizontal"
            cursor="col-resize"
    >
      <Row>
        <Col><button>shelf</button></Col>
        <Col flex={3}>
          <Row>
            <Col><button>subject</button></Col>
          </Row>
          <Row>
            <Col><button>publication</button></Col>
          </Row>
        </Col>
      </Row>
      <div>hello thar</div>
    </Split>
);



class ShelfContainer extends React.Component {

    render() {
        return (
            splitPane
        );
    }
}


const domContainer = document.querySelector('#main_container');
ReactDOM.render(e(ShelfContainer), domContainer);
