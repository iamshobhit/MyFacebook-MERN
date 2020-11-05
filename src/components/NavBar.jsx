import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/modal'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';


class NavBar extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
          email:'',
          password:''
      }
   }

   handleEmailChange = (event) => {
      this.setState({
         email: event.target.value
      })
   }
   handlePasswordChange = (event) => {
      this.setState({
         password: event.target.value
      })
   }
   handleSubmit = (event) => {
      alert(`${this.state.email} ${this.state.password}`);
      
      // event.preventDefault();
   }
   
   render() {
      const {email,password} = this.state
      return (
         <>
        <nav className="navbar navbar-expand-xl navbar-dark bg">
        <Link className="navbar-brand d-none d-md-block" to="/">
            <img 
            src="images/fblogo.png" 
            alt="" 
            width="60" 
            height="60" 
            className="" />

            <h2 className="logoStyle d-inline-block shade">MyFacebook</h2>
        
        </Link>

        <Link className="navbar-brand d-md-none" to="/">
            
            <img src="images/fblogo.png" 
            alt="" 
            width="80" 
            height="80" 
            className="p-0" />

        </Link>

        <Button 
         
        variant="btn btn-outline-light logoStyle" 
        className="ml-auto p-1 " 
        data-toggle="modal" 
        data-target="#exampleModalCenter1">
        
            Sign In
        
        </Button>

        <Button 
        // onClick={() => history.push('/signup')} 
        variant="btn btn-outline-light logoStyle" 
        className=" p-1 ml-1 mr-1 " 
        data-toggle="modal"
        data-target="#exampleModalCenter2">
        
            Sign Up
        
        </Button>
        </nav>
        <div className="modal fade" id="exampleModalCenter1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered modal-md" role="document">
            <div className="modal-content">
               <div className="modal-header bg ">
                  <h5 className="modal-title" id="exampleModalLongTitle">Sign In</h5>
                  <Button type="Button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </Button>
               </div>
               <div className="modal-body deepspace">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-12 p-2 heavy-rain-gradient">
                           <div className="card">
                              <img className="card-img-top w-25 d-flex align-self-center" src="images/avtar-male.png" alt=""/>
                                 <p>your email is: {email}</p>
                                 <p>your password is: {password}</p>
                              <form className="m-4" action="" onSubmit={this.handleSubmit}>
                                 <div className="form-group mb-1">
                                    <input type="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange} name="" aria-describedby="emailHelpId" placeholder="Email address"/>
                                    
                                 </div>
                                 <div className="form-group mb-1">
                                    
                                    <input type="password" className="form-control" name="" value={this.state.password} onChange={this.handlePasswordChange}  placeholder="Password"/>
                                 </div>
                                 <Button type="submit" className="btn btn-outline-black logoStyle bg" >Sign In</Button>
                              </form>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="modal fade" id="exampleModalCenter2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered modal-md" role="document">
            <div className="modal-content">
               <div className="modal-header bg">
                  <h5 className="modal-title" id="exampleModalLongTitle">Sign Up</h5>
                  <Button type="Button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </Button>
               </div>
               <div className="modal-body deepspace">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-12 p-2 ">
                           <div className="card">
                              <img className="card-img-top w-25 d-flex align-self-center" src="images/avtar-male.png" alt=""/>
                              
                              <form className="m-4 signinform" action="">
                                 <div className="container">
                                    <div className="row">
                                       <div className="col-6">
                                          <div className="form-group mb-1">
                                             <input type="text"
                                                className="form-control" name="" aria-describedby="helpId" placeholder="Firstname"/>
                                             
                                          </div>
                                       </div>
                                       <div className="col-6">
                                          <div className="form-group mb-1">
                                             <input type="text"
                                                className="form-control" name="" aria-describedby="helpId" placeholder="Lastname"/>
                                             
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="form-group mb-1">
                                             
                                             <input type="text" className="form-control" name="" aria-describedby="helpId" placeholder="Email address"/>
                                             
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="form-group mb-1">
                                             
                                             <input type="password" className="form-control mb-2" name="" placeholder="New Password"/>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="form-group d-flex flex-column mb-2">
                                             <label htmlFor="validationDefault04" className="form-label m-0">Date of Birth</label>
                                             <select className="form-select" id="validationDefault04" required>
                                                <option  disabled value="">YYYY</option>
                                                <option>2021</option>
                                             </select>
                                             <select className="form-select " id="validationDefault05" required>
                                                <option  disabled value="">MM</option>
                                                <option>January</option>
                                             </select>
                                             <select className="form-select" id="validationDefault06" required>
                                                <option  disabled value="">DD</option>
                                                <option>09</option>
                                                <option>10</option>
                                             </select>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="form-group mb-1">
                                             <label htmlFor="validationDefault04" className="form-label mb-0">Gender</label>
                                             <div className="form-check d-flex flex-sm-column justify-content-between">
                                                <label className="form-check-label">
                                                <input className="form-check-input text-black-50" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" defaultChecked/>
                                                Female
                                                <span className="circle">
                                                <span className="check"></span>
                                                </span>
                                                </label>
                                                <label className="form-check-label">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" defaultChecked/>
                                                Male
                                                <span className="circle">
                                                <span className="check"></span>
                                                </span>
                                                </label>
                                                <label className="form-check-label">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option2" defaultChecked/>
                                                Custom
                                                <span className="circle">
                                                <span className="check"></span>
                                                </span>
                                                </label>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <Button type="submit" className="btn btn-outline-black logoStyle bg">Sign Up</Button>
                              </form>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
      )
   }
}


export default NavBar;
