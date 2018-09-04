import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Form, Text, TextArea } from "informed";
import "./InboxComposeForm.css";
import { cx } from "emotion";

class InboxComposeForm extends Component {
  /**
   *function to return trimmed value
   */
  timmedValue = value => {
    return value.trim();
  };
  /**
   * Function to do basic email validation
   */
  checkEmail = value => {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(value);
  };
  /**
   * Function to check multiple emails separated via ";"
   */
  checkMultipleEmails = value => {
    const emails = value.split(";");
    const invalidEmails = [];
    for (let i = 0; i < emails.length; i++) {
      if (!this.checkEmail(this.timmedValue(emails[i]))) {
        invalidEmails.push(this.timmedValue(emails[i]));
      }
    }
    return invalidEmails.length
      ? "Enter valid emails separated by a semi colon"
      : null;
  };
  /**
   * Function to check the min length of the string
   */
  checkMinLength = (value, length) => {
    return value.length < length
      ? `Field cannot have less than ${length} characters`
      : null;
  };
  /**
   * Function to validate the email To field
   */
  validateTo = value => {
    return value && value.trim()
      ? this.checkMultipleEmails(value)
      : "Enter on or more recipients separated by a semi colon";
  };
  /**
   * Function to validate the email Cc field
   */
  validateCc = value => {
    return value && value.trim() ? this.checkMultipleEmails(value) : null;
  };
  /**
   * Function to validate the email subject field
   */
  validateSubject = value => {
    return value && value.trim()
      ? this.checkMinLength(value, 3)
      : "Enter a subject";
  };
  render() {
    const { submitCb } = this.props;
    return (
      <Form id="message" onSubmit={submitCb}>
        {({ formState }) => (
          <Fragment>
            <div className="sj-compose-modal__fields">
              <div className="field has-addons">
                <div className="control">
                  <label htmlFor="email_to" className="button is-static">
                    To:
                  </label>
                </div>
                <div className="control">
                  <Text
                    field="email_to"
                    id="email_to"
                    className={cx(
                      "input",
                      formState.errors.email_to ? "is-danger" : null
                    )}
                    autoComplete="off"
                    placeholder="test@gmail.com"
                    validateOnBlur
                    validate={this.validateTo}
                  />
                  <p className="help is-danger">{formState.errors.email_to}</p>
                </div>
              </div>
              <div className="field has-addons">
                <div className="control">
                  <label htmlFor="email_cc" className="button is-static">
                    Cc:
                  </label>
                </div>
                <div className="control">
                  <Text
                    field="email_cc"
                    id="email_cc"
                    className={cx(
                      "input",
                      formState.errors.email_cc ? "is-danger" : null
                    )}
                    autoComplete="off"
                    placeholder="test@gmail.com"
                    validateOnBlur
                    validate={this.validateCc}
                  />
                  <p className="help is-danger">{formState.errors.email_cc}</p>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <Text
                    field="email_subject"
                    id="email_subject"
                    className={cx(
                      "input",
                      formState.errors.email_subject ? "is-danger" : null
                    )}
                    placeholder="Email subject"
                    validateOnBlur
                    validate={this.validateSubject}
                  />
                  <p className="help is-danger">
                    {formState.errors.email_subject}
                  </p>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <TextArea
                    field="email_body"
                    id="email_body"
                    className="textarea"
                    placeholder="Message"
                    rows="10"
                  />
                </div>
              </div>
            </div>
            <div className="sj-compose-modal__actions">
              <button type="submit" className="button is-primary" title="Send">
                Send Mail
              </button>
              <span className="flex" />
              <button type="button" className="button" title="Delete Message">
                <span className="icon is-small">
                  <i className="far fa-trash-alt" />
                </span>
              </button>
            </div>
          </Fragment>
        )}
      </Form>
    );
  }
}

InboxComposeForm.propTypes = {
  submitCb: PropTypes.func
};

export default InboxComposeForm;
