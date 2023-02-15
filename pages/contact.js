//contact page: (with image and navbar components)

import Navbar from "../components/navbar";
import Image from "next/image";

export default function contact() {
  return (
    <div>
      <style global jsx>
        {`
          body {
            background-color: white;
          }
          .contact-imgs {
            margin: 0 auto;
          }
        `}
      </style>
      <Navbar />
      <h2>Click on one of the methods below to contact me</h2>
      <div className="contact-imgs">
        {/* images are wrapped in an <a> tag to allow the user to click and either email or message me */}
        <h3>Message:</h3>
        <a href="https://wa.me/+272295483">
          <Image
            src="/message.png"
            alt="profile pic"
            width="100"
            height="100"
            className="whatsapp"
          />
          <br/>
        </a>
        <h3>Email</h3>
        <a href="mailto:kayladornan@icloud.com">
          <Image
            src="/email.jpeg"
            alt="profile pic"
            width="100"
            height="100"
            className="email"
          />
        </a>
      </div>
    </div>
  );
}