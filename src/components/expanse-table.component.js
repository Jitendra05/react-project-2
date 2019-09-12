import React from 'react';
import {NavLink} from 'react-router-dom';
import DataTable from "react-data-table-component";
import {startRemoveExpanse} from '../actions/expanse-action';
import WarningModal from './modals/warning-popup.modal';
import SuccessModal from './modals/success-popup.modal';
import {connect} from 'react-redux';
import moment from 'moment';
const currencyFormatter = require('currency-formatter');

const CustomCreatedAt = ({ row }) => (
    <div>
        {moment(row.createdAt).format('MMM Do, YY')}
    </div>
  );

  const CustomAmount = ({ row }) => (
    <div>
        {currencyFormatter.format(row.amount,{code:'INR'})}
    </div>
  );

class ExpanseTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isSuccess:false,
            isWarning:false,
            id:undefined,
            updatedExpanse:undefined
        }
    }

   
     columns = [
        {
            name: "Description",
            sortable: true,
            cell: row => (
                <div>
                    <NavLink to={`/edit/${row.id}`} className="button button--link">
                    {row.description}
                    </NavLink>
                </div>
            )
        },
        {
          name: "Amount",
          selector: "amount",
          sortable: true,
          right: true,
          cell: row => <CustomAmount row={row} />
        },
        {
          name: "Created At",
          selector: "createdAt",
          sortable: true,
          right: true,
        //   hide: 'md',
          cell: row => <CustomCreatedAt row={row} />
        },
        // {
        //     name: 'Edit Expense',
        //     button: true,
        //     right:true,
        //     cell: row => (
        //         <div>
        //             <NavLink to={`/edit/${row.id}`} className="button button--link">
        //                 Edit
        //             </NavLink>
        //         </div>
        //     ),
        //   },
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
        this.setState(() => ({isSuccess:false,isWarning:false}));
    }
    okPopup = () => {
        this.setState(()=> ({isSuccess:true,isWarning:false}));
        setTimeout(() => {
            console.log(this.props);
            this.props.startRemoveExpanse({id:this.state.id});
            // this.props.history.push('/');
            // window.location.reload();
            this.setState(()=> ({isSuccess:false,isWarning:false}));
        }, 1000);
    }
    render() {
        return  (
            <div>
            <DataTable
                title="Expenses"
                columns={this.columns}
                data={this.props.expanses}
                // selectableRows
                // onRowSelected={this.handleChange}
                pagination
            />
        <WarningModal 
            isVisible={this.state.isWarning}
            title='Warning' 
            message='Are you sure? You want to remove the expanse.' 
            closePopup={this.closePopup}
            okPopup={this.okPopup}
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


const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {

        startRemoveExpanse: (id,updatedExpanse) => dispatch(startRemoveExpanse(id,updatedExpanse))
    };
};

export default connect(undefined, mapDispatchToProps)(ExpanseTable);
