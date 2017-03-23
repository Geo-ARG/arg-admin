import React, { Component } from 'react'
import { Button, Form, Grid, Icon, Image } from 'semantic-ui-react'
import ReactRedirect from 'react-redirect'
import { loginAdmin, sessionLoginStatus } from '../../actions'
import { connect } from 'react-redux'
import swal from '../../../public/sweetalert.min.js'

class Login extends Component {
  constructor(){
    super()
    this.state={
      email: '',
      password: '',
      statusLogin: false,
      message: ''
    }
    this.runLoginAdmin = this.runLoginAdmin.bind(this)
  }

  runLoginAdmin(e){
    e.preventDefault()
    this.props.loginAdmin(this.state.email, this.state.password)
  }

  onHandleEmail(e){
    e.preventDefault()
    this.setState({
      email: e.target.value
    })
  }
  onHandlePassword(e){
    e.preventDefault()
    this.setState({
      password: e.target.value
    })
  }

  componentWillReceiveProps(nextprops){
    if(nextprops.listResultLoginAdmin.status === true){
      localStorage.setItem('token', `${nextprops.listResultLoginAdmin.token}`)
      this.setState({
        statusLogin: true
      })
      nextprops.sessionLoginStatus()
    }else if(nextprops.listResultLoginAdmin.message === "Authentication failed. Wrong password." || nextprops.listResultLoginAdmin.message === "Authentication failed. Email not found."){
      swal("Login Failed", "Check Email or Password", "error");
      nextprops.listResultLoginAdmin.message = ""
    }
  }


  render(){
    return(
      <div className='InputStyle'>
        {localStorage.getItem('token') ? <ReactRedirect location='addevent'>
        </ReactRedirect> : <div></div>}
        {this.state.statusLogin ? <ReactRedirect location='addevent'>
          </ReactRedirect> :
          <Grid celled>
              <Grid.Row>
                <Grid.Column width={5}>

                  <div className="gameInfo">
                    <Icon name='keyboard' size='big' />
                      <b>LOGIN PANEL</b>
                  </div>
                  <Form>
                      <Form.Field>
                        <input onChange={this.onHandleEmail.bind(this)} value={this.state.email} placeholder='Email' />
                      </Form.Field>
                      <Form.Field >
                      <input onChange={this.onHandlePassword.bind(this)} value={this.state.password} type="password"placeholder='Password' />
                      </Form.Field>
                      <Form.Field>
                      </Form.Field>
                      <Button onClick={(e)=>this.runLoginAdmin(e)} color='twitter'>LOGIN</Button>
                  </Form>

                </Grid.Column>
                    <Grid.Column width={11}>

                    <div style={{display:'flex',justifyContent:'center'}}>
                      <Image src='https://4.bp.blogspot.com/-JY1beh0o02M/V3DY9yPdCMI/AAAAAAAAAMI/NQUYgOQdx5MD0_4EQr82nWburZJp14ROwCLcB/s1600/unnamed.png'/>
                    </div>
                    </Grid.Column>

              </Grid.Row>
          </Grid>
           }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listResultLoginAdmin: state.listResultLoginAdmin
  }
}

const mapDispatchToProps = dispatch =>({
  loginAdmin: (email, password) => dispatch(loginAdmin(email, password)),
  sessionLoginStatus: ()=> dispatch(sessionLoginStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
