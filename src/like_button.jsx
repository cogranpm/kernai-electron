'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const {
    Button,
    Table,
    Tag,
    Space,
    Tabs,
    DatePicker,
    TimePicker,
    primary,
    dashed,
    defaultActiveKey
} = require('antd');
const TabPane = Tabs.TabPane;


const dataSource = [
    {
        key: "1",
        name: "Mike",
        age: 32,
        address: "19 Downing Street",
    },
    {
        key: "2",
        name: "Fred",
        age: 2,
        address: "12 Milhouse Street",
    }
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

const panes = [
    { title: 'Tab 1', content: 'Content of Tab 1', key: '1', closable: true },
    { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
];


const e = React.createElement;
const table = <Table dataSource={dataSource} columns={columns} />;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return (<Tabs>
                      <TabPane tab="Shelf" key="shelf" type="editable-card" closeable="true"><Table dataSource={dataSource} columns={columns} /></TabPane>
                      <TabPane tab="Subject" key="subject" closeable="true">Subject Stuff</TabPane>
                    </Tabs>);
            //                    //this.panes.map(pane => <TabPane tab={pane.title}, key={pane.key}, closeable={pane.closable}>{pane.content}</TabPane>)
            //return table;
            //return <Button>Vagrants</Button>;
        }
        else{
        return (
            <button onClick={() => this.setState({liked:true})}>
                Like - using jsx
            </button>
        )
        }
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
