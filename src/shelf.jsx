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
    flex,
    Tabs
} = require('antd');
const TabPane = Tabs.TabPane;

const Split = require('react-split');


const e = React.createElement;


const splitPane = (
    <Tabs>
      <TabPane tab="Shelf" key="shelf">
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
      <div className="split" id="shelf_pane">
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
      </div>
      <div className="split" id="subject_pane">
        <div>hello thar</div>
      </div>
    </Split>
      </TabPane>
      <TabPane tab="Home" key="home">
        <div><h1>Home Screen</h1></div>
      </TabPane>
    </Tabs>
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
