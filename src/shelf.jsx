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
const sampleData = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

const e = React.createElement;


class HTMLLearnings extends React.Component {

  render() {
    return (
      <section id="htmlSection"> 
      <nav>
          <ul>
              <li><a href="#">Basic Tags</a></li>
              <li><a href="#">Semantic Web</a></li>
          </ul>
      </nav>            

      <section id="basicTags">
        <article>
          Note: imagine this stuff has the opening and closing tags 
          <div>
          <h2>Basic Elements</h2>
            !DOCTYPE html <br/>
            html <br/>
            head <br/>
            title <br/>
            body <br/>
            meta name= content= <br/>
            link href= rel=stylesheet, shortcut icon <br/>
            script src= type=text/javascript <br/>
            style type=text/css
          </div>
        </article>
        <article id="blockElements">
          <h2>Block Elements</h2>
          div <br/>
          p <br/>
          address <br/>
          article <br/>
          aside <br/>
          blockquote <br/>
          fieldset <br/>
          figcaption <br/>
          figure <br/>
          footer <br/>
          form <br/>
          h1 -> 6
          header <br/>
          hgroup <br/>
          legend <br/>
          li <br/>
          menu <br/>
          nav <br/>
          table <br/>
          ul <br/>
          section <br/>
        </article>
        <article id="inlineElements">
          <h2>Inline Elements</h2>
          a <br/>
          abbr <br/>
          canvas <br/>
          cite <br/>
          datagrid <br/>
          datalist <br/>
          details <br/>
          em <br/>
          input <br/>
          keygen  <br/>
          label  <br/>
          link <br/>
          mark <br/>
          map <br/>
          meter <br/>
          output <br/>
          progress <br/>
          span <br/>
          summary <br/>
          textarea <br/>
          time <br/>
          wbr <br/>
        </article>


      </section>

      <section id="description">
          <article id="semanticwebintro">
              <section>
                  use sections and articles, better conveys meaning than just divs and spans
                  use nav tag to surround navigation stuff
              </section>
              <section>
                  notes
              </section>
          </article>
      </section>
      </section>

    );
  }
}


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
