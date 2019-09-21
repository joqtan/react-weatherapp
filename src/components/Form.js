import React, { Component } from 'react';
class Form extends Component {
    render() { 
        return ( 
            <div className="container-form">
                <div className="container">
                    <div className="row">
                        <form>
                            
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="city" type="text"/>
                                <label htmlFor="city">City: </label>
                            </div>
                            
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select>
                                    <option value="" defaultValue>Choose a country</option>
                                    <option value="US">United States</option>                                        
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">Spain</option>                                    
                                    <option value="MX">Mexico</option>
                                    <option value="PE">Peru</option>
                                </select>
                                <label htmlFor="country">Country: </label>
                            </div>

                            <div className="input-field col s12 m8 l4 offset-m2 seeker">
                                <input className="waves-effect waves-light btn-large yellow accent-4" type="submit" value="Search"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Form;