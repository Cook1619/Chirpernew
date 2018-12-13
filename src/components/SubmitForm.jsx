import React from 'react';

const Submitform = (props) => {

    return (
        <div>
        
            <div className="col-md-6 mx-auto">
                <input type="text" id="username" placeholder="Username" />
            </div>
            <textarea className="form-control col-md-6 pagination-centered m-3 position-relative shadow mx-auto" id="chirp"></textarea>
            <div>
                <button
                    className="btn btn-dark m-3 d-flex mx-auto col-md-3 shadow"
                    name="cardSubmitButton"
                    onClick={event => props.postChirp(event)}>Chirp
             </button>
            </div>
        </div>


    );
}

export default Submitform;