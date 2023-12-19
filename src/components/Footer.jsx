import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div>Copyright &copy;2020.</div>
            <div className="textRight">
                Built with 
                <span className="red">&hearts;</span> 
                by
                <a href="https://reactjs.org/docs/create-a-new-react-app.html">Create React App</a>
            </div>
        </div>
    </div>
  )
}

export default Footer