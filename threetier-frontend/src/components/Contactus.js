import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Contactus() {
  return(
   <div className='ContactusForm'>
    <h1>ContactUs from</h1>
    <input type='text' id='contactme' placeholder='enter your Name' />
    <input type='text' id='contactme' placeholder='enter your Email'/>
    <input type='text'  id='contactme' placeholder='leave a message'/>
   
   </div>
  );
}

export default Contactus;