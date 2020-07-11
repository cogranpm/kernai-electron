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


const SplitterLayout = require('react-splitter-layout').default;
const SplitPane = require('react-split-pane').default;

const e = React.createElement;


const splitPane = (
    <Tabs>
      <TabPane tab="Shelf" key="shelf">
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
      </TabPane>
      <TabPane tab="Home" key="home">
        <div><h1>Home Screen</h1></div>
        {/* <SplitPane split="vertical"> */}
        {/*   <h1>shite</h1> */}
        {/*   <h2>shoote</h2> */}
        {/* </SplitPane> */}

        <SplitterLayout>
          <div>
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
          <div>
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
        </SplitterLayout>
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
