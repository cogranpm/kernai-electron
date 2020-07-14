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
//seems weird to have this path but it works
const {JSLearnings} = require('./dist/JSLearnings');
const {HTMLLearnings} = require('./dist/HTMLLearnings');

const SplitterLayout = require('react-splitter-layout').default;
const SplitPane = require('react-split-pane').default;
const sampleData = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

const e = React.createElement;

class ToolbarHeader extends React.Component {

  render() {
    const title = this.props.title;
    return (
      <div><h1>{title}</h1></div>
    )
  }

}


class ShelfContainer extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log("Shelf Container did mount");
  }

  componentWillMount(){
    console.log("Shelf Container did unmount");
  }

    render() {

      const splitPane = (
        <Tabs>
          <TabPane tab="HTML" key="html">
            <HTMLLearnings/>
          </TabPane>
          <TabPane tab="javascript" key="javascript">
            <JSLearnings/>
          </TabPane>
          <TabPane tab="Shelf" key="shelf">
          <div className="split" id="shelf_pane">
          <Row>
            <Col><ToolbarHeader/></Col>
            <Col flex={3}>
              <Row>
                <Col><button>changes</button></Col>
              </Row>
              <Row>
                <Col><button>knowledgebase</button></Col>
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
    

        return (
            splitPane
        );
    }
}



const domContainer = document.querySelector('#main_container');

ReactDOM.render(e(ShelfContainer), domContainer);
