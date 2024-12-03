import React from 'react'; 
import './Contact.css';
import msg_icon from '../../assets/msg_icon.png';
import location_icon from '../../assets/location_icon.png';
import mai_icon from '../../assets/mai_icon.png';
import phone_icon from '../../assets/phone_icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon}alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit soluta doloremque hic eligendi alias consequatur cupiditate possimus tempore aperiam, deserunt nisi placeat dolores, tempora mollitia facilis quis assumenda incidunt omnis?</p>
            <ul>
                <li><img src={mai_icon} alt="" />zahidansari.er@gmail.com</li>
                <li><img src={phone_icon} alt="" />+1 123-456-789</li>
                <li><img src={location_icon} alt="" />80 Feet Road, Bhopal <br />Madhya pardesh:- 462010</li>

            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>your name</label>
                <input type='text' name= 'name' placeholder='Enter your name' required/>

                <label>Phone Number</label>
                <input type='tel' name= 'phone' placeholder='Enter your phone number' required/>

                <label>Write your message here</label>
                <textarea name='message' rows="6" placeholder="Enter you message"  required/>

                <button type='submit' className='btn dark-btn'>Submit</button>
                

            </form>
             


        </div>

    </div>
  )
}

export default Contact