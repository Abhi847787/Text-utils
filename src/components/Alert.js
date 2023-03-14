import React from 'react';

export default function Alert(props){
    return (
        props.alert &&  // important //
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}</strong> : <strong>{props.alert.messege}</strong>
        </div>
    );
}