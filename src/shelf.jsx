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
const JSLearnings = require('./javascript_learnings')


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

          <h3>unordered lists</h3>
          <ul>
            <li>Apple</li>
            <li>Banana</li>
            <li>Jackfruit</li>
          </ul>

          <h3>ordered lists</h3>
          <ol>
            <li>Apple</li>
            <li>Banana</li>
            <li>Jackfruit</li>
          </ol>
          
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
          em (for emphasis <br/>
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
        <article id="forms">
          <h2>forms</h2>
          form action= <br/>
          input <br/>
          type= ... <br/>
          text,submit,date,time,month,week,datetime-local,number[min=max=step=] <br/>
          range, search, email, url, color<br/>
          name= value= <br/>
          <h3>Example:</h3>
          <h2>First, an invisable div: div style= padding-top:1px</h2>
          <div className="invisible"/>
          <div className="frm">
          <form>
            <fieldset>
              <div><label>Text</label><input type="text" name="text"/></div>
              <div>
                <label>date</label><input type="date" name="date"/> 
              </div>
              <div>
                <label>time</label><input type="time" name="time"/>
              </div>
              <div>
                <label>month</label><input type="month" name="month"/>
              </div>
              <div>
                <label>week</label><input type="week" name="week"/>
              </div>
              <div>
                <label>datetime-local</label><input type="datetime-local" name="datetime-local"/>               
              </div>
              <div>
                <label>number</label><input type="number" name="number"/> 
              </div>
              <div>
                <label>range</label><input type="range" name="range"/> 
              </div>
              <div>
                <label>search</label><input type="search" name="search"/> 
              </div>
              <div>
                <label>email</label><input type="email" name="email"/> 
              </div>
              <div>
                <label>url</label><input type="url" name="url"/> 
              </div>
              <div>
                <label>color</label><input type="color" name="color"/>
              </div>
              <div>
                <label htmlFor="datalist">Datalist</label>
              </div>
              <div>
                <input name="datalist" id="datalist" list="mfg"/>
                  <datalist id="mfg">
                  <option value="Ford" />
                  <option value="Toyota" />
                  <option value="Ferrari" />
                  </datalist>
              </div>

              <div>
                <label>Submit</label><input type="submit" name="submit"></input>
              </div>
            </fieldset>
          </form>
          </div>
        </article>
        <article id="applicationTags">
          <h2>Application Tags</h2>
          <canvas></canvas> <br/>
          <menu>
            {/* <command type="command">Save All</command>
            <command type="checkbox">Checkbox</command> */}
          </menu> <br/>

 

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
