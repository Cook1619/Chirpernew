import React from 'react';

const Submitform = (props) => {

    return (
        <div>
            <div className="form-group">
                <input type="text" id="username" placeholder="Username" className="form-control"/>
            </div>
            <div className="form-group">
            <textarea className="form-control shadow" id="chirp"></textarea>
            </div>
            <div className="form-group">
                <button
                    className="btn btn-dark m-3 d-flex col-md-3 shadow"
                    name="cardSubmitButton"
                    onClick={event => props.postChirp(event)}>Chirp
             </button>
            </div>
        </div>


    );
}

export default Submitform;