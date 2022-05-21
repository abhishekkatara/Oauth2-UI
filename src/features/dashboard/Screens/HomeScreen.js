import '../style/HomeScreen.css';
import GoogleButton from 'react-google-button'
import GridTable from '@nadavshaar/react-grid-table';
import Header from '../Components/Header'
import EmailHeader from '../Components/EmailHeader'
import Attachment from '../Components/Attachment'
import Dropdown from '../Components/Dropdown'
import EmailDetails from '../Components/EmailDetails'
import Description from '../Components/Description'
import Lable from '../Components/Lable'

function HomeScreen() {
  const rows = [
    { 
        "id": 1, 
        "attachments":[
          "Sample PDF File",
          "Sample CSV File",
          "Sample CSV File"
        ],
        "labels":[
          "No label added",
          "No label added",
          "No label added."
        ],
        "client-name":'',
        "matter-name":'',
        "email_details": "wotham0", 
        "gender": "Male", 
        "last_visited": "12/08/2019", 
        "description":[
          "Lorem ipsum dolor sit amet, consectetur adipisc...",
          "Lorem ipsum dolor sit amet, consectetur adipisc...",
          "Lorem ipsum dolor sit amet, consectetur adipisc Lorem ipsum dolor sit amet, consectetur adipisc..."

        ],
        "test": {"x": 1, "y": 2}, 
        "avatar":"https://robohash.org/atquenihillaboriosam.bmp?size=32x32&set=set1"
    },
    { 
        "id": 2, 
        "attachments":[
          "Sample PDF File",
          "Sample CSV File",
        ],
        "labels":[
          "No label added",
          "No label added",
        ],
        "email_details": "dbraddon2", 
        "client-name":'',
        "matter-name":'',
        "gender": "Female", 
        "description":[
          "https://robohash.org/etsedex.bmp?size=32x32&set=set1",
          "https://robohash.org/etsedex.bmp?size=32x32&set=set1"
        ],
        "last_visited": "16/07/2018", 
        "test": {"x": 3, "y": 4}, 
        "avatar":"https://robohash.org/etsedex.bmp?size=32x32&set=set1"
    },
    { 
        "id": 3, 
        "attachments":[
          "Sample PDF File",
          "Sample CSV File",
        ],
        "labels":[
          "No label added",
          "No label added",
        ],
        "client-name":'',
        "matter-name":'',
        "email_details": "dridett3", 
        "gender": "Male", 
        "last_visited": "20/11/2016",
        "description":[
          "https://robohash.org/etsedex.bmp?size=32x32&set=set1",
          "https://robohash.org/etsedex.bmp?size=32x32&set=set1"
        ], 
        "test": {"x": 5, "y": 8}, 
        "avatar":"https://robohash.org/inimpeditquam.bmp?size=32x32&set=set1"
    },
    { 
        "id": 4, 
        "attachments":[
          "Sample PDF File",
          "Sample CSV File",
        ],
        "email_details": "gdefty6", 
        "labels":[
          "No label added",
          "No label added",
        ],
        "client-name":'',
        "matter-name":'',
        "gender": "Female", 
        "last_visited": "03/08/2019", 
        "description":[
          "https://robohash.org/etsedex.bmp?size=32x32&set=set1",
          "https://robohash.org/etsedex.bmp?size=32x32&set=set1"
        ],
        "test": {"x": 7, "y": 4}, 
        "avatar":"https://robohash.org/nobisducimussaepe.bmp?size=32x32&set=set1"
    },
    { 
        "id": 5, 
        "attachments":[
          "Sample PDF File",
          "Sample CSV File",
        ],
        "labels":[
          "No label added",
          "No label added",
        ],
        "client-name":'',
        "matter-name":'',
        "email_details": "hbeyer9", 
        "gender": "Male", 
        "last_visited": "10/10/2016", 
        "description":[
          "https://robohash.org/etsedex.bmp?size=32x32&set=set1",
          "https://robohash.org/etsedex.bmp?size=32x32&set=set1"
        ],
        "test": {"x": 2, "y": 2}, 
        "avatar":"https://robohash.org/etconsequatureaque.jpg?size=32x32&set=set1"
    }
];

const columns = [
    {
        id: 1, 
        field: 'email_details', 
        label: 'Email Details',
        headerCellRenderer:EmailHeader,
        cellRenderer: EmailDetails,
        width:'420px',
        sortable:false
    }, 
    {
        id: 2, 
        field: 'attachments', 
        label: 'Attachments',
        width:'220px',
        headerCellRenderer:Header,
        cellRenderer:Attachment,
        sortable:false
    },
    {
        id: 3, 
        field: 'description', 
        label: 'Description',
        cellRenderer:Description,
        headerCellRenderer:Header,
        width:'380px',
        sortable:false
    },
    {
        id: 4, 
        headerCellRenderer:Header,
        field: 'labels', 
        label: 'Labels',
        width:'200px',
        cellRenderer:Lable,
        sortable:false
    },
    {
      id: 5, 
      headerCellRenderer:Header,
      field: 'client-name', 
      label: 'Client Name',
      cellRenderer:Dropdown,
      width:'200px',
      sortable:false

    },
    {
      id: 6, 
      headerCellRenderer:Header,
      cellRenderer:Dropdown,
      field: 'matter-name', 
      label: 'Matter Name',
      width:'200px',
      sortable:false
    }

];
  

  return (
    <div class='headerDivStyle'>
      <div id="wrapper">
        <div id="c1"><p class='headerStyle'>Inbox</p></div>
        <div id="c2"> <input type="text" placeholder="Type to search all emails ....."/></div>
        <div id="c3" class='buttonClass'><GoogleButton  class='buttonClass'  label='Sign out test@gmail.com' onClick={() => { }}/></div>
      </div>       

          
      <div class='homePageConatiner'>

      <div class="tab">
      <button class="tablinks" style={{backgroundColor:'#fff',borderRadious:'25px'}} onclick="openCity(event, 'Paris')">Unsaved</button>
      <button class="tablinks" onclick="openCity(event, 'London')">Saved</button>
    </div>
      <GridTable columns={columns} rows={rows}  showRowsInformation={false}  showSearch={false}  isPaginated={false}/>

      </div>
      
    </div>
  );
}

export default HomeScreen;
