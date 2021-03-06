import React from 'react';
import {NavLink} from 'react-router-dom';
import DataTable from "react-data-table-component";
import {removeExpanse} from '../actions/expanse-action';
import WarningModal from './modals/warning-popup.modal';
import SuccessModal from './modals/success-popup.modal';
import {connect} from 'react-redux';

class ExpanseTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isSuccess:false,
            isWarning:false,
            id:undefined,
            updatedProps:undefined
        }
    }
     columns = [
    
        {
            name: "Description",
            selector: "description",
            sortable: true
        },
        {
          name: "Amount",
          selector: "amount",
          sortable: true,
          right: true
        },
        {
          name: "Created At",
          selector: "createdAt",
          sortable: true,
          right: true
        },
        {
            name: 'Edit Expense',
            button: true,
            right:true,
            cell: row => (
                <div>
                    <NavLink to={`/edit/${row.id}`} className="button">
                        Edit
                    </NavLink>
                </div>
            ),
          },
          {
            name: 'Remove Expense',
            button: true,
            right:true,
            cell: (row) => <button className="button" onClick={()=>{
                this.handleRemoveExpanse(`${row.id}`);
            }
  
            }>Delete</button>,
          },
      ];
     handleRemoveExpanse = (id) => {
        console.log('remove button clicked!',id);
        this.setState(()=> ({isSuccess:false,
            isWarning:true,id}));
    }

      handleChange = state => {
        // You can use setState or dispatch with something like Redux so we can use the retrieved data
        console.log("Selected Rows: ", state.selectedRows);
      };

    closePopup = () => {
        this.setState(()=> ({isSuccess:false,
            isWarning:false}));
    }
    okPopup = (props) => {
        console.log(this.props);

        this.setState(()=> ({isSuccess:true,
            isWarning:false}));
            setTimeout(() => {
                props.dispatch(
                    removeExpanse({id:this.state.id}));
                    this.setState(()=> ({isSuccess:false,
                        isWarning:false}));
            }, 1000);

    }

    render() {
        return  (
            <div>
            <DataTable
                title="Expenses"
                columns={this.columns}
                data={this.props.expanses}
                selectableRows
                onRowSelected={this.handleChange}
                pagination
            />
        <WarningModal 
            isVisible={this.state.isWarning}
            title='Warning' 
            message='Are you sure? You want to remove the expanse.' 
            closePopup={this.closePopup}
            okPopup={()=>{
                this.setState(()=>({updatedProps:this.props}))
                this.okPopup(this.props);
            }}
        />
        <SuccessModal 
            isVisible={this.state.isSuccess}
            title='Success' 
            message='Expanse deleted sucessfuly.'
        />
    
        </div>
        );
    }
}

const mapStateToProps = (props) => {
    return {
        updatedProps: props
    };
};

export default connect(mapStateToProps)(ExpanseTable);
