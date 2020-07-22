import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSubmitted: false, email: "", hasEmailError: false };
  }
  handleSubmit() {
    this.setState({ isSubmitted: true });
  }
  handleEmailChange(event) {
    const inputValue = event.target.value;
    this.setState({ email: inputValue });
  }

  render() {
    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className="contact-message-error">
          メールアドレスを入力してください
        </p>
      );
    }

    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = <div className="contact-submit-message">送信完了</div>;
    } else {
      contactForm = (
        <form
          action=""
          onSubmit={() => {
            this.handleSubmit();
          }}
        >
          <p>メールアドレス（必須）</p>
          <input
            value={this.state.email}
            onChange={(event) => {
              this.handleEmailChange(event);
            }}
          />
          {emailErrorText}
          <p>お問い合わせ内容（必須）</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="submit" value="送信" />
        </form>
      );
    }

    return <div className="contact-form">{contactForm}</div>;
  }
}

export default ContactForm;
