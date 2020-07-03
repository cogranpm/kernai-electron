'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const {
    Table,
    Tag,
    Space,
    Tabs,
    DatePicker,
    TimePicker,
    Button,
    primary,
    dashed,
    defaultActiveKey
} = require('antd');




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


const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            //return 'You liked this.';
            return <Table dataSource={dataSource} columns={columns} />;
        }

        return (
            <button onClick={() => this.setState({liked:true})}>
                Like - using jsx
            </button>
        )
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
