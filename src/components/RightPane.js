import React from 'react';

class RightPane extends React.Component {

        constructor() {
            super();

            this.state = {
                textarea: ''
            };

            this.setValueOfInput = this.setValueOfInput.bind(this);
        }

        setValueOfInput(e) {
            this.setState({
                [e.target.name]: e.target.value.trim()
            });
        }

        render() {
            return (
            <div className="col-9 px-0">

                    <textarea 
                        name='textarea' 
                        value={this.state.textarea} 
                        onChange={e => {
                            this.setValueOfInput(e);
                        }}
                    ></textarea>
                    
            </div>
            );
        }
    }

export default RightPane;
