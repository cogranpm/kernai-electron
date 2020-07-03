'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const {
    Table: ant_table,
    Tag,
    Space,
    Tabs: ant_tabs,
    DatePicker: ant_date_picker,
    TimePicker: ant_time_picker,
    Button: ant_button,
    primary,
    dashed,
    defaultActiveKey
} = require('antd');


function callback(key){
    console.log(key);
}


const dataForTable = [
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


const {tab_pane} = ant_tabs;
const e = React.createElement;

const tabPane = e(ant_tabs, {tab: 'Tab 1', key: '1'}, 'blah blah' );
const tabPaneTwo = e(ant_tabs, {tab: 'Tab 2', key: '2'}, 'contents baby' );
const tab = e(ant_tabs, {defaultActiveKey: 1}, [tabPane, tabPaneTwo]);
const timePicker = e(ant_time_picker, { },  );
const datePicker = e(ant_date_picker, { },  );
const responseHeada = e('h1', {}, 'the hell');
const responseBodda = e('h2', { style: { color: "red" }}, 'is goan on');
const table = e(ant_table, {dataSource: {dataForTable}, columns:{columns}});
const buttonResponse = e('div', {}, [responseHeada, responseBodda, Ptab, datePicker, timePicker]);


class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };

        this.button = e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }

    

    render() {
        if (this.state.liked) {
            //return 'You liked this.';
            return buttonResponse;
        }

        return this.button;
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
