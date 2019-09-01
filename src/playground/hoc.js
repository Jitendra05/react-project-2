// HOC - A component will render the another component.
const Info =  (props) => (
    <div>
        <h3>Info</h3>
        <p>{props.details}</p>
    </div>
);

const adminWarning = (WrapperComponent) => {
    return (props) => (
        <div>
           { props.isAdmin && <h1>This is private info. Do not share it!!</h1>} 
            <WrapperComponent {...props} />
        </div>
    );
}

const AdminInfo = adminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true} details="these are some info details." />, 
document.getElementById('app'));