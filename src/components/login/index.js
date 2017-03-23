import React, { Component } from 'react'
import { Button, Form, Grid, Icon, Image } from 'semantic-ui-react'
import ReactRedirect from 'react-redirect'
import { loginAdmin } from '../../actions'
import { connect } from 'react-redux'

export default class Login extends Component {
  constructor(){
    super()
    this.state={
      email: '',
      password: '',
      statusLogin: false
    }
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

  render(){
    console.log(this.props.tokenAdmin);
    return(
      <div className='InputStyle'>
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
                      <Button onClick={this.props.loginAdmin(this.state.email, this.state.password)} color='twitter'>LOGIN</Button>
                  </Form>

                </Grid.Column>
                    <Grid.Column width={11}>
                    <h1>ARG - Game Management</h1>
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
    tokenAdmin: state.tokenAdmin
  }
}

const mapDispatchToProps = dispatch =>({
  loginAdmin: (email, password) => dispatch(loginAdmin(email, password))
})

export defautl connect(mapStateToProps, mapDispatchToProps)(Login)
