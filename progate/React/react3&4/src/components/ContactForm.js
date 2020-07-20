import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="contact-form">
        <form action="">
          <p>メールアドレス（必須）</p>
          <input type="email" name="" id="" />
          <p>お問い合わせ内容（必須）</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="submit" value="送信" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
